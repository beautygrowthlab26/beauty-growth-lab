import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/seo";

export function FounderIntro() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container className="max-w-3xl">
        <SectionHeading
          align="left"
          eyebrow="대표 소개"
          title="원장님이 어디에서 막히는지 현장에서 배웠습니다"
        />

        <Reveal delay={0.1}>
          <div className="card mt-10 flex flex-col gap-5 rounded-2xl p-8">
            <div>
              <p className="text-xl font-semibold text-ink">{siteConfig.ceo}</p>
              <p className="text-base text-muted">{siteConfig.legalName} (Beauty Growth Lab) 대표</p>
            </div>
            <p className="text-lg leading-relaxed text-ink/90">
              해군 여군 장교, 프랜차이즈 카페 운영, 사진·영상 창업 과정을 거쳐 지금은 40~50대 뷰티샵 원장님을
              위한 AI·캔바·캡컷 실전 교육을 진행하고 있습니다.
            </p>
            <a href="/about" className="flex items-center gap-1 text-base font-medium text-primary">
              대표 소개 자세히 보기
              <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
