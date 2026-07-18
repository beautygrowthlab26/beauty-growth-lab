import { ImageIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

const outputs = [
  "피부관리 과정 릴스",
  "속눈썹 전후 영상",
  "네일 이달의 아트 카드뉴스",
  "반영구 상담 안내 이미지",
  "헤드스파 ASMR 릴스",
  "체형관리 고객 고민 카드뉴스",
  "첫 방문 이벤트 포스터",
  "고객 후기 이미지",
  "네이버 플레이스 소식",
  "카카오채널 공지",
  "관리 가격표",
  "원장님 소개 게시물",
];

export function GalleryPreview() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="교육 결과물"
          title="교육 후에는 이런 콘텐츠를 직접 만들 수 있습니다"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {outputs.map((item, index) => (
            <Reveal key={item} delay={index * 0.03}>
              <div className="card flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl p-5 text-center">
                <ImageIcon className="size-7 text-primary/50" />
                <p className="text-sm font-medium leading-snug text-ink">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Badge tone="neutral">콘텐츠 시안 · 실제 수강생 결과물은 준비 중입니다</Badge>
        </div>
      </Container>
    </section>
  );
}
