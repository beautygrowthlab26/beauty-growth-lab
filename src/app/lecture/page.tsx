import { Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { constructMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "강의·출강 문의",
  description: "1:1 원장님 교육부터 협회 및 아카데미 특강, 출장·온라인 교육까지 다양한 방식으로 진행합니다.",
  path: "/lecture",
});

const deliveryTypes = [
  "1:1 원장님 교육",
  "뷰티샵 직원 교육",
  "소규모 원장님 모임",
  "협회 및 아카데미 특강",
  "지역 뷰티업 교육",
  "출장 실습 교육",
  "온라인 화상 교육",
  "정기 디지털 코칭",
];

export default function LecturePage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "강의·출강", path: "/lecture" },
  ]);

  return (
    <div className="py-24 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="강의·출강"
          title="다양한 방식으로 교육을 진행합니다"
          description="협회·아카데미 특강부터 매장 출장 교육, 온라인 화상 교육까지 상황에 맞게 진행합니다."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {deliveryTypes.map((type, i) => (
            <Reveal key={type} delay={i * 0.05}>
              <div className="card flex h-full flex-col items-center gap-3 rounded-2xl p-6 text-center">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary-dark">
                  <Users className="size-5" />
                </span>
                <p className="text-base font-medium text-ink">{type}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="card mt-16 flex flex-col items-center gap-5 rounded-[2rem] px-8 py-14 text-center">
            <h2 className="balance font-display text-2xl font-semibold text-ink sm:text-3xl">
              협회·아카데미·매장 출강이 필요하신가요?
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted">
              지역, 인원, 희망 일정을 알려주시면 가능한 방식을 안내해 드립니다.
            </p>
            <Button href="/consult" variant="accent">
              강의·출강 문의하기
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
