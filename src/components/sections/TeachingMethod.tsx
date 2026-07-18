import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const methods = [
  { title: "느린 설명", description: "버튼 위치와 화면을 원장님이 따라올 수 있는 속도로 설명합니다." },
  {
    title: "뷰티샵 실무 예제",
    description: "여행 영상이나 일반 예제가 아니라 피부관리, 네일, 속눈썹, 반영구, 두피, 체형관리 콘텐츠로 실습합니다.",
  },
  { title: "한 기능씩 반복", description: "하루에 많은 기능을 배우기보다 실제로 자주 사용하는 기능을 반복합니다." },
  { title: "직접 결과물 완성", description: "교육 시간 안에 릴스, 포스터, 후기 이미지 중 최소 한 가지를 완성합니다." },
  { title: "복습 자료 제공", description: "교육 후에도 다시 볼 수 있도록 체크리스트, 프롬프트, 실습 자료를 제공합니다." },
  { title: "매출 관점 설명", description: "예쁜 디자인이 아니라 고객이 이해하고 문의할 수 있는 콘텐츠를 만드는 방법을 알려드립니다." },
];

const generalClass = ["툴 기능 위주", "빠른 설명", "전문용어 사용", "일반적인 영상 예제", "교육 후 혼자 복습하기 어려움"];

const ours = [
  "뷰티샵 실무 위주",
  "40~50대 눈높이 설명",
  "버튼 위치부터 천천히 안내",
  "실제 매장 콘텐츠로 실습",
  "교육 후 반복 루틴 제공",
  "매출과 예약으로 연결되는 콘텐츠 설계",
  "필요 시 1:1 코칭과 제작 지원 가능",
];

export function TeachingMethod() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="교육 방식" title="강의만 듣고 끝나지 않도록, 직접 완성하는 교육을 진행합니다" />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((method, index) => (
            <Reveal key={method.title} delay={index * 0.06}>
              <div className="card h-full rounded-2xl p-7">
                <p className="text-lg font-semibold text-ink">{method.title}</p>
                <p className="mt-2 text-base leading-relaxed text-muted">{method.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading eyebrow="차별점" title="일반 편집 강의와 무엇이 다른가요?" />

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Reveal>
              <div className="card h-full rounded-2xl p-8">
                <p className="text-lg font-semibold text-faint">일반 편집 강의</p>
                <ul className="mt-5 flex flex-col gap-3">
                  {generalClass.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-base text-muted">
                      <X className="mt-1 size-4 shrink-0 text-faint" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="card h-full rounded-2xl border-2 border-primary/20 bg-primary-soft/40 p-8">
                <p className="text-lg font-semibold text-primary-dark">뷰티성장연구소</p>
                <ul className="mt-5 flex flex-col gap-3">
                  {ours.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-base text-ink">
                      <Check className="mt-1 size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
