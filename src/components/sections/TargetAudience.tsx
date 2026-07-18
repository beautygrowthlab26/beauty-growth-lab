import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const checklist = [
  "스마트폰 사용은 가능하지만 영상 편집은 어렵다.",
  "인스타그램을 꾸준히 운영하고 싶다.",
  "외주에만 의존하지 않고 직접 기본 콘텐츠를 만들고 싶다.",
  "이벤트 포스터와 가격표를 직접 수정하고 싶다.",
  "고객 후기와 전후 사진을 보기 좋게 만들고 싶다.",
  "ChatGPT와 AI를 매장 업무에 활용하고 싶다.",
  "젊은 강사의 빠른 설명이 부담스럽다.",
  "일대일 또는 소규모로 천천히 배우고 싶다.",
  "직원과 함께 매장 콘텐츠를 운영하고 싶다.",
  "강의 후에도 질문할 수 있는 교육을 원한다.",
];

export function TargetAudience() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="추천 대상" title="이런 원장님께 추천합니다" />

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {checklist.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <div className="card flex h-full items-start gap-3 rounded-xl p-5">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-base leading-relaxed text-ink">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
