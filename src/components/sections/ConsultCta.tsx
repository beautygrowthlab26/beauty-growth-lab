import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function ConsultCta() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="card flex flex-col items-center gap-6 rounded-[2.5rem] px-8 py-16 text-center sm:px-16 sm:py-20">
            <Badge tone="gold">무료 상담</Badge>
            <h2 className="balance font-display max-w-xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              어떤 교육부터 받아야 할지 모르시겠나요?
            </h2>
            <p className="max-w-lg text-lg leading-relaxed text-muted">
              현재 사용 중인 SNS 채널과 원장님의 디지털 활용 수준을 확인한 뒤, 가장 먼저 배우면 좋은 툴과
              교육 과정을 추천해드립니다.
            </p>
            <Button href="/consult" variant="accent" size="lg">
              무료 교육 상담 신청하기
              <ArrowRight className="size-4" />
            </Button>
            <p className="max-w-md text-sm leading-relaxed text-faint">
              상담 신청만으로 교육이나 서비스 결제가 확정되지 않습니다. 현재 상황을 확인한 뒤 적합한 과정만
              안내드립니다.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
