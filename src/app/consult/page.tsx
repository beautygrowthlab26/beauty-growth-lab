import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ConsultForm } from "@/components/forms/ConsultForm";
import { constructMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "무료 교육 상담 신청",
  description: "어떤 교육부터 받아야 할지 모르시겠나요? 지금 상황을 알려주시면 가장 적합한 교육 과정을 추천해 드립니다.",
  path: "/consult",
});

const included = [
  "현재 사용 중인 SNS 채널과 디지털 활용 수준 확인",
  "가장 먼저 배우면 좋은 툴 추천",
  "원장님 상황에 맞는 교육 방식과 과정 안내",
];

export default function ConsultPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "무료 교육 상담", path: "/consult" },
  ]);

  return (
    <div className="py-24 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Container className="max-w-5xl">
        <SectionHeading
          as="h1"
          align="left"
          eyebrow="무료 상담"
          title="어떤 교육부터 받아야 할지 모르시겠나요?"
          description="현재 사용 중인 SNS 채널과 원장님의 디지털 활용 수준을 확인한 뒤, 가장 먼저 배우면 좋은 툴과 교육 과정을 추천해드립니다."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="flex flex-col gap-4">
              <div className="card rounded-2xl p-6">
                <p className="text-base font-semibold text-ink">상담 후 안내해 드리는 내용</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-base leading-relaxed text-muted">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card rounded-2xl p-6 text-sm leading-relaxed text-faint">
                상담 신청만으로 교육이나 서비스 결제가 확정되지 않습니다. 현재 상황을 확인한 뒤 적합한 과정만
                안내드립니다.
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ConsultForm />
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
