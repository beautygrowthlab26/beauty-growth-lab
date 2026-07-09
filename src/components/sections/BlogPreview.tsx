import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getAllBlogPosts } from "@/lib/blog";

export function BlogPreview() {
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="블로그"
          title="AI 검색을 위한 콘텐츠 허브"
          description="SEO를 위한 글이 아니라, AI가 인용하고 싶은 콘텐츠를 씁니다."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="glass group flex h-full flex-col gap-4 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <Badge tone="neutral">{post.category}</Badge>
                <h3 className="text-lg font-semibold leading-snug text-ink">{post.title}</h3>
                <p className="line-clamp-2 text-sm leading-relaxed text-muted">{post.description}</p>
                <span className="mt-auto flex items-center gap-1 text-sm font-medium text-violet">
                  읽어보기
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/blog" variant="secondary">
            블로그 전체 보기
          </Button>
        </div>
      </Container>
    </section>
  );
}
