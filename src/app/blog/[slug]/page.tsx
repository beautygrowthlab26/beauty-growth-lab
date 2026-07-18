import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Mdx } from "@/components/Mdx";
import { getAllBlogPosts, getBlogPostBySlug, getAdjacentPosts } from "@/lib/blog";
import { constructMetadata, breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return constructMetadata({ title: "글을 찾을 수 없습니다", path: `/blog/${slug}` });

  return constructMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}` });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const { related } = getAdjacentPosts(slug);
  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "블로그", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);
  const article = articleJsonLd({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    datePublished: post.date,
  });

  return (
    <div className="py-24 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />

      <Container className="max-w-3xl">
        <Reveal>
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-muted hover:text-ink">
            <ArrowLeft className="size-3.5" /> 블로그 목록
          </Link>
        </Reveal>
        <Reveal delay={0.05}>
          <Badge tone="neutral" className="mt-6">{post.category}</Badge>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="balance font-display mt-5 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {post.title}
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="mt-5 flex items-center gap-3 text-sm text-faint">
            <time>{post.date}</time>
            <span>·</span>
            <span>Beauty Growth Lab</span>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12">
            <Mdx source={post.content} />
          </div>
        </Reveal>

        {related.length > 0 && (
          <Reveal delay={0.24}>
            <div className="mt-16 border-t border-line pt-10">
              <p className="mb-5 text-sm font-semibold text-ink">이어서 읽어보세요</p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="card group flex flex-col gap-2 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="text-sm font-medium text-ink">{r.title}</span>
                    <span className="flex items-center gap-1 text-xs font-medium text-primary">
                      읽어보기
                      <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        <Reveal delay={0.28}>
          <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl bg-surface p-10 text-center">
            <p className="text-base text-muted">우리 브랜드의 AI 검색 노출, 지금 확인해보세요</p>
            <Button href="/bgi" variant="accent">
              무료 AI 검색 진단 받기
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
