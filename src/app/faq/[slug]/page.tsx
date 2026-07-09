import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Mdx } from "@/components/Mdx";
import { getAllFaqEntries, getFaqBySlug, getRelatedFaqs } from "@/lib/faq";
import { constructMetadata, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return getAllFaqEntries().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getFaqBySlug(slug);
  if (!entry) return constructMetadata({ title: "질문을 찾을 수 없습니다", path: `/faq/${slug}` });

  return constructMetadata({
    title: entry.question,
    description: entry.content.trim().slice(0, 120),
    path: `/faq/${entry.slug}`,
  });
}

export default async function FaqDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getFaqBySlug(slug);
  if (!entry) notFound();

  const related = getRelatedFaqs(entry.relatedSlugs);
  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "FAQ", path: "/faq" },
    { name: entry.question, path: `/faq/${entry.slug}` },
  ]);
  const faqLd = faqPageJsonLd([{ question: entry.question, answer: entry.content.trim() }]);

  return (
    <div className="py-24 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <Container className="max-w-3xl">
        <Reveal>
          <Link href="/faq" className="inline-flex items-center gap-1 text-sm text-muted hover:text-ink">
            <ArrowLeft className="size-3.5" /> FAQ 전체 보기
          </Link>
        </Reveal>
        <Reveal delay={0.05}>
          <Badge tone="violet" className="mt-6">{entry.clusterLabel}</Badge>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="balance font-display mt-5 text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
            {entry.question}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-8">
            <Mdx source={entry.content} />
          </div>
        </Reveal>

        {related.length > 0 && (
          <Reveal delay={0.2}>
            <div className="mt-14 border-t border-line pt-10">
              <p className="mb-5 text-sm font-semibold text-ink">관련 질문</p>
              <div className="flex flex-col gap-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/faq/${r.slug}`}
                    className="glass group flex items-center justify-between gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span className="text-sm font-medium text-ink">{r.question}</span>
                    <ArrowRight className="size-4 shrink-0 text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet" />
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </Container>
    </div>
  );
}
