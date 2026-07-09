import { Gauge, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function BgiTeaser() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="glass-strong relative overflow-hidden rounded-[2.5rem] px-8 py-14 sm:px-16 sm:py-20">
          <div className="animate-drift pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-gradient-to-br from-violet/20 to-rose/10 blur-3xl" />

          <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <div className="flex flex-col gap-6">
                <Badge tone="rose">무료 진단</Badge>
                <h2 className="balance font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                  우리 브랜드의 AI 검색 노출 점수는
                  <br className="hidden sm:block" /> 지금 몇 점일까요?
                </h2>
                <p className="max-w-lg text-base leading-relaxed text-muted">
                  Brand Growth Index(BGI)는 브랜드가 AI 검색과 생성형 엔진에서 얼마나 발견되고 있는지를
                  진단하는 지표입니다. 신청하시면 저희 팀이 직접 분석한 무료 리포트를 보내드립니다.
                  자동으로 조작된 즉석 점수가 아니라, 실제 데이터를 근거로 한 진단입니다.
                </p>
                <div>
                  <Button href="/bgi" variant="accent" size="lg">
                    무료 BGI 진단 신청하기
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass mx-auto flex w-full max-w-xs flex-col items-center gap-4 rounded-3xl p-8">
                <span className="text-xs font-medium text-faint">예시 리포트</span>
                <div className="relative flex size-40 items-center justify-center">
                  <svg viewBox="0 0 120 120" className="size-40 -rotate-90">
                    <circle cx="60" cy="60" r="52" fill="none" stroke="var(--color-line)" strokeWidth="10" />
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke="url(#bgi-gradient)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 52}
                      strokeDashoffset={2 * Math.PI * 52 * (1 - 0.34)}
                    />
                    <defs>
                      <linearGradient id="bgi-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="var(--color-violet)" />
                        <stop offset="100%" stopColor="var(--color-rose)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <Gauge className="mb-1 size-5 text-violet" />
                    <span className="font-display text-2xl font-semibold text-ink">34점</span>
                  </div>
                </div>
                <p className="text-center text-xs leading-relaxed text-faint">
                  진단 후 개선 포인트와 목표 점수를 함께 안내해 드립니다
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
