import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { getAllBlogPosts } from "@/lib/blog";
import { constructMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "블로그",
  description: "SEO를 위한 글이 아니라, AI가 인용하고 싶은 콘텐츠. Beauty Growth Lab의 AI 검색 콘텐츠 허브입니다.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "블로그", path: "/blog" },
  ]);

  return (
    <div className="py-24 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="블로그"
          title="AI 검색을 위한 콘텐츠 허브"
          description="SEO·AEO·GEO 관점에서 AI 검색과 브랜드에 대해 이야기합니다."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.06}>
              <Link
                href={`/blog/${post.slug}`}
                className="glass group flex h-full flex-col gap-4 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <Badge tone="neutral">{post.category}</Badge>
                <h2 className="text-lg font-semibold leading-snug text-ink">{post.title}</h2>
                <p className="line-clamp-3 text-sm leading-relaxed text-muted">{post.description}</p>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <time className="text-xs text-faint">{post.date}</time>
                  <span className="flex items-center gap-1 text-sm font-medium text-violet">
                    읽어보기
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
