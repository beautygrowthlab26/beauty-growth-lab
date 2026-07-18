import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { educationCases } from "@/data/cases";
import { constructMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "교육 사례",
  description: "뷰티성장연구소 교육 과정과 원장님이 기대할 수 있는 변화를 소개합니다.",
  path: "/cases",
});

export default function CasesPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "교육 사례", path: "/cases" },
  ]);

  return (
    <div className="py-24 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="교육 사례"
          title="원장님이 직접 완성하는 순간까지 함께합니다"
          description="아직 실제 수강 후기는 준비 중입니다. 아래는 교육 과정과 기대할 수 있는 변화를 소개한 예시입니다."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {educationCases.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.08}>
              <Link
                href={`/cases/${item.slug}`}
                className="glass group flex h-full flex-col gap-5 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <Badge tone="violet">{item.audience}</Badge>
                <h2 className="text-lg font-semibold leading-snug text-ink">{item.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {item.toolsUsed.map((tool) => (
                    <Badge key={tool} tone="neutral">{tool}</Badge>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted">{item.outcome}</p>
                <span className="mt-auto flex items-center gap-1 pt-2 text-sm font-medium text-violet">
                  자세히 보기
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
