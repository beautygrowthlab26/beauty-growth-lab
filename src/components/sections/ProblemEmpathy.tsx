import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const problems = [
  "릴스를 만들고 싶은데\n영상 자르는 것부터 어렵습니다.",
  "캔바와 미리캔버스를 열어도\n어떤 템플릿을 골라야 할지 모르겠습니다.",
  "젊은 사람들의 설명은 너무 빠르고\n버튼 위치도 따라가기 어렵습니다.",
  "이벤트 포스터를 만들었는데\n촌스럽고 글씨가 잘 보이지 않습니다.",
  "AI로 글을 써보고 싶지만\n어떻게 질문해야 할지 모르겠습니다.",
  "배워도 집에 가면 다시 잊어버려\n결국 SNS 운영을 포기하게 됩니다.",
];

export function ProblemEmpathy() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="이런 고민, 있으신가요" title="원장님, 혹시 이런 부분에서 막히고 계신가요?" />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <Reveal key={problem} delay={index * 0.06}>
              <div className="card h-full whitespace-pre-line rounded-2xl p-7 text-lg leading-relaxed text-ink">
                {problem}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="balance mx-auto mt-14 max-w-2xl text-center text-xl leading-relaxed text-ink">
            뷰티성장연구소는 툴의 모든 기능을 가르치지 않습니다.
            <br />
            원장님이 매장을 운영하며 실제로 자주 쓰는 기능만 골라 반복해서 직접 완성하도록 도와드립니다.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
