import { ArrowRight, FileSearch, MessagesSquare, Network } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    icon: FileSearch,
    label: "SEO",
    title: "검색엔진이 찾게 만든다",
    description: "키워드, 사이트 구조, 크롤링 최적화로 검색엔진이 브랜드를 빠르고 정확하게 찾도록 만듭니다.",
  },
  {
    icon: MessagesSquare,
    label: "AEO",
    title: "AI가 답으로 인용하게 만든다",
    description: "질문-답변 구조와 FAQ 스키마로, AI가 고객의 질문에 브랜드를 답으로 가져다 쓰게 만듭니다.",
  },
  {
    icon: Network,
    label: "GEO",
    title: "AI가 먼저 추천하게 만든다",
    description: "Knowledge Graph와 Authority 신호로, 생성형 AI가 브랜드를 카테고리의 답으로 이해하게 만듭니다.",
  },
];

export function SeoAeoGeo() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="우리의 방법론"
          title="SEO → AEO → GEO, 하나의 흐름으로 설계합니다"
          description="세 가지는 순서대로 쌓이는 레이어입니다. Beauty Growth Lab은 이 세 단계를 처음부터 함께 설계해, 브랜드가 AI 검색 전 과정에서 발견되도록 만듭니다."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.label} delay={index * 0.08}>
              <div className="glass relative flex h-full flex-col gap-4 rounded-3xl p-8">
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet to-rose text-white">
                    <step.icon className="size-5" />
                  </span>
                  <span className="font-display text-sm font-semibold tracking-wide text-faint">
                    STEP {index + 1}
                  </span>
                </div>
                <p className="font-display text-xl font-semibold text-violet">{step.label}</p>
                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute -right-9 top-1/2 hidden size-6 -translate-y-1/2 text-faint lg:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
