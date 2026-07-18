import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { getFaqClusters, getAllFaqEntries } from "@/lib/faq";
import { constructMetadata, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "자주 묻는 질문",
  description: "AI 검색 최적화, 서비스 이용, 비용과 성과에 대해 자주 묻는 질문을 모았습니다.",
  path: "/faq",
});

export default function FaqIndexPage() {
  const clusters = getFaqClusters();
  const allEntries = getAllFaqEntries();
  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "FAQ", path: "/faq" },
  ]);
  const faqLd = faqPageJsonLd(
    allEntries.map((entry) => ({ question: entry.question, answer: entry.content.trim() }))
  );

  return (
    <div className="py-24 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <Container>
        <SectionHeading as="h1" eyebrow="FAQ" title="자주 묻는 질문" />

        <div className="mt-16 flex flex-col gap-16">
          {clusters.map((cluster) => (
            <div key={cluster.cluster}>
              <h2 className="text-xl font-semibold text-ink">{cluster.label}</h2>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {cluster.entries.map((entry, index) => (
                  <Reveal key={entry.slug} delay={index * 0.04}>
                    <Link
                      href={`/faq/${entry.slug}`}
                      className="card group flex items-center justify-between gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <span className="text-sm font-medium text-ink">{entry.question}</span>
                      <ArrowRight className="size-4 shrink-0 text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
