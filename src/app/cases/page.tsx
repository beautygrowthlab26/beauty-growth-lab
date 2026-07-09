import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { cases } from "@/data/cases";
import { constructMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "성공사례",
  description: "Beauty Growth Lab과 함께 AI 검색 노출을 만들어낸 브랜드들의 성과를 확인하세요.",
  path: "/cases",
});

export default function CasesPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "성공사례", path: "/cases" },
  ]);

  return (
    <div className="py-24 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Container>
        <SectionHeading as="h1" eyebrow="성공사례" title="AI 검색에서 언급되기 시작한 브랜드들" />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cases.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.08}>
              <Link
                href={`/cases/${item.slug}`}
                className="glass group flex h-full flex-col gap-5 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <Badge tone="violet">{item.industry}</Badge>
                <h2 className="text-lg font-semibold leading-snug text-ink">{item.summary}</h2>
                <p className="text-sm leading-relaxed text-muted">{item.challenge}</p>
                <div className="mt-auto flex flex-col gap-3 border-t border-line pt-5">
                  {item.results.map((r) => (
                    <div key={r.label} className="flex items-center justify-between text-sm">
                      <span className="text-muted">{r.label}</span>
                      <span className="font-semibold text-ink">
                        {r.before} → <span className="text-violet">{r.after}</span>
                      </span>
                    </div>
                  ))}
                  <span className="flex items-center gap-1 pt-2 text-sm font-medium text-violet">
                    자세히 보기
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
