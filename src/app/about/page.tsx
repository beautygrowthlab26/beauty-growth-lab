import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { constructMetadata, breadcrumbJsonLd, personJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "대표 소개",
  description: "원장님이 어디에서 막히는지 현장에서 배웠습니다. 뷰티성장연구소 대표 김지선을 소개합니다.",
  path: "/about",
});

const bioParagraphs = [
  "뷰티성장연구소 대표는 해군 여군 장교로 근무한 뒤 프랜차이즈 토스트 카페를 직접 운영하며 자영업자의 현실을 경험했습니다.",
  "이후 사진·영상 창업 과정을 수료하고 광고 영상, 프로필 촬영, 콘텐츠 제작과 소규모 마케팅 실무를 진행했습니다.",
  "현재는 뷰티샵의 온라인 마케팅, 홈페이지, 블로그, SNS 콘텐츠 제작과 40~50대 원장님을 위한 AI·캔바·캡컷 실전 교육을 진행하고 있습니다.",
  "빠르게 기능을 설명하는 강의가 아니라 원장님이 직접 완성하고 다시 혼자 해볼 수 있도록 돕는 교육을 지향합니다.",
];

export default function AboutPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "대표 소개", path: "/about" },
  ]);
  const personLd = personJsonLd();

  return (
    <div className="py-24 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />

      <Container className="max-w-3xl">
        <SectionHeading
          as="h1"
          align="left"
          eyebrow="대표 소개"
          title="원장님이 어디에서 막히는지 현장에서 배웠습니다"
        />

        <Reveal delay={0.1}>
          <div className="card mt-10 flex flex-col gap-3 rounded-2xl p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xl font-semibold text-ink">{siteConfig.ceo}</p>
              <p className="text-base text-muted">{siteConfig.legalName} (Beauty Growth Lab) 대표</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col gap-5">
          {bioParagraphs.map((paragraph, i) => (
            <Reveal key={paragraph} delay={0.06 * i}>
              <p className="text-lg leading-relaxed text-ink/90">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <blockquote className="card mt-12 rounded-2xl p-8 text-lg leading-relaxed text-ink">
            &ldquo;저는 원장님이 평생 대행에 의존하도록 만드는 사람이 되고 싶지 않습니다. 필요한 부분은 대신하고,
            직접 할 수 있는 부분은 쉽게 알려드리는 브랜드 성장 파트너가 되겠습니다.&rdquo;
          </blockquote>
        </Reveal>

        <Reveal delay={0.36}>
          <div className="mt-14 flex flex-col items-center gap-4 border-t border-line pt-10 text-center">
            <p className="text-base text-muted">지금 우리 매장에 맞는 교육이 궁금하신가요?</p>
            <Button href="/consult" variant="accent">
              무료 교육 상담 신청하기
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
