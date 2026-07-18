import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BgiForm } from "@/components/forms/BgiForm";
import { constructMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "무료 AI 검색 진단 (BGI)",
  description: "Brand Growth Index로 우리 브랜드의 AI 검색 노출 현황을 무료로 진단받아 보세요.",
  path: "/bgi",
});

const included = [
  "AI 검색(ChatGPT·Perplexity·Gemini) 브랜드 언급 현황 분석",
  "경쟁 브랜드 대비 AI 검색 노출 격차 진단",
  "SEO·AEO·GEO 관점에서의 개선 우선순위 제안",
  "브랜드에 맞는 서비스 패키지 추천",
];

export default function BgiPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "무료 AI 검색 진단", path: "/bgi" },
  ]);

  return (
    <div className="py-24 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Container className="max-w-5xl">
        <SectionHeading
          as="h1"
          align="left"
          eyebrow="무료 진단"
          title="우리 브랜드의 AI 검색 노출 점수, BGI로 확인하세요"
          description="Brand Growth Index(BGI)는 자동 생성되는 즉석 점수가 아니라, 저희 팀이 직접 데이터를 분석해 전달하는 진단 리포트입니다."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="flex flex-col gap-4">
              <div className="card rounded-2xl p-6">
                <p className="text-sm font-semibold text-ink">리포트에 포함되는 내용</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card rounded-2xl p-6 text-xs leading-relaxed text-faint">
                신청 후 영업일 기준 3~5일 이내에 이메일로 리포트를 보내드립니다.
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <BgiForm />
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
