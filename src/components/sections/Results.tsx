import { Award, Radar, TrendingUp, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const results = [
  {
    icon: Radar,
    title: "AI 검색 노출",
    description: "ChatGPT, Perplexity, Gemini의 답변 안에 브랜드가 등장하기 시작합니다.",
  },
  {
    icon: Award,
    title: "브랜드 신뢰도",
    description: "일관된 정보와 구조화된 데이터로, AI와 고객 모두에게 신뢰받는 브랜드가 됩니다.",
  },
  {
    icon: Users,
    title: "잠재 고객 유입",
    description: "검색이 아니라 질문 단계에서부터 브랜드를 먼저 만난 고객이 유입됩니다.",
  },
  {
    icon: TrendingUp,
    title: "경쟁사 대비 우위",
    description: "같은 질문에서 경쟁 브랜드보다 먼저, 더 자주 언급되는 위치를 확보합니다.",
  },
];

export function Results() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="우리가 만드는 결과"
          title="홈페이지가 아니라, 이런 변화를 만듭니다"
          description="저희는 '무엇을 만들어 드립니다'보다 '무엇이 달라집니다'를 먼저 말씀드립니다."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="glass flex h-full flex-col gap-4 rounded-3xl p-7">
                <span className="flex size-11 items-center justify-center rounded-xl bg-violet-soft text-violet-dark">
                  <item.icon className="size-5" />
                </span>
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
