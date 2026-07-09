import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cases } from "@/data/cases";

export function CaseStudies() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="성공사례"
          title="AI 검색에서 실제로 언급되기 시작한 브랜드들"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cases.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.08}>
              <Link
                href={`/cases/${item.slug}`}
                className="glass group flex h-full flex-col gap-5 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <Badge tone="violet">{item.industry}</Badge>
                <h3 className="text-lg font-semibold leading-snug text-ink">{item.summary}</h3>
                <div className="mt-auto flex flex-col gap-3 border-t border-line pt-5">
                  {item.results.slice(0, 1).map((r) => (
                    <div key={r.label} className="flex items-center justify-between text-sm">
                      <span className="text-muted">{r.label}</span>
                      <span className="font-semibold text-ink">
                        {r.before} → <span className="text-violet">{r.after}</span>
                      </span>
                    </div>
                  ))}
                  <span className="flex items-center gap-1 text-sm font-medium text-violet">
                    자세히 보기
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/cases" variant="secondary">
            모든 성공사례 보기
          </Button>
        </div>
      </Container>
    </section>
  );
}
