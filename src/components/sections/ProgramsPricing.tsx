import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { programs, programGuide, getProgramBySlug } from "@/data/programs";

export function ProgramsPricing() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="EDUCATION PROGRAM"
          title={
            <>
              사장님의 속도에 맞춰
              <br />한 단계씩 시작하세요
            </>
          }
          description={
            <>
              컴퓨터와 스마트폰이 익숙하지 않아도 괜찮습니다.
              <br className="hidden sm:block" />
              AI로 홍보문구를 만들고, 캔바·미리캔버스·캡컷을 활용해 우리 매장에 바로 사용할 수 있는 콘텐츠를
              직접 완성합니다.
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {programs.map((program, index) => (
            <Reveal key={program.slug} delay={index * 0.08}>
              <div
                className={cn(
                  "flex h-full flex-col gap-6 rounded-[20px] p-8 transition-all duration-300",
                  program.featured
                    ? "bg-primary text-white shadow-lg lg:-translate-y-3"
                    : "card text-ink"
                )}
              >
                {program.badge && (
                  <span className="w-fit rounded-full bg-gold px-3 py-1 text-sm font-semibold text-white">
                    {program.badge}
                  </span>
                )}

                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-2xl font-semibold">{program.title}</h3>
                  <p className={cn("text-base leading-relaxed", program.featured ? "text-white/80" : "text-muted")}>
                    {program.audience}
                  </p>
                </div>

                <div className={cn("border-t pt-5", program.featured ? "border-white/20" : "border-line")}>
                  <p className="font-display text-4xl font-bold">{program.price}</p>
                  <p className={cn("mt-1 text-sm", program.featured ? "text-white/70" : "text-faint")}>
                    {program.duration}
                  </p>
                </div>

                <p className={cn("text-base leading-relaxed", program.featured ? "text-white/90" : "text-ink/85")}>
                  {program.description}
                </p>

                {program.tools && (
                  <div>
                    <p className={cn("mb-2 text-sm font-semibold", program.featured ? "text-white/70" : "text-faint")}>
                      {program.toolsLabel}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {program.tools.map((tool) => (
                        <span
                          key={tool}
                          className={cn(
                            "rounded-full px-3 py-1 text-sm font-medium",
                            program.featured ? "bg-white/15 text-white" : "bg-primary-soft text-primary-dark"
                          )}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className={cn("border-t pt-5", program.featured ? "border-white/20" : "border-line")}>
                  <p className={cn("mb-3 text-sm font-semibold", program.featured ? "text-white/70" : "text-faint")}>
                    교육 내용
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {program.curriculum.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-base leading-relaxed">
                        <Check
                          className={cn("mt-1 size-4 shrink-0", program.featured ? "text-gold" : "text-primary")}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={cn("border-t pt-5", program.featured ? "border-white/20" : "border-line")}>
                  <p className={cn("mb-3 text-sm font-semibold", program.featured ? "text-white/70" : "text-faint")}>
                    {program.outcomesLabel}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {program.outcomes.map((outcome) => (
                      <span
                        key={outcome}
                        className={cn(
                          "rounded-full px-3 py-1 text-sm",
                          program.featured ? "bg-white/10 text-white/90" : "bg-ink/5 text-ink/80"
                        )}
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  href="/consult"
                  variant={program.featured ? "accent" : "primary"}
                  size="lg"
                  className="mt-auto w-full"
                >
                  {program.ctaLabel}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-2 text-center text-sm leading-relaxed text-faint">
            <p>
              교육 인원과 장소, 업종, 교육 목적에 따라 진행 시간과 세부 커리큘럼은 조정될 수 있습니다.
            </p>
            <p>기관·협회·아카데미·소상공인 단체 출강은 별도 제안서와 견적을 안내드립니다.</p>
          </div>
          <div className="mt-6 flex justify-center">
            <Button href="/consult" variant="secondary">
              교육 일정 문의하기
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="card mx-auto mt-16 max-w-3xl rounded-2xl p-8">
            <h3 className="text-center text-xl font-semibold text-ink">어떤 과정을 선택해야 할까요?</h3>
            <div className="mt-6 flex flex-col divide-y divide-line">
              {programGuide.map((item) => {
                const program = getProgramBySlug(item.programSlug);
                if (!program) return null;
                return (
                  <div
                    key={item.programSlug}
                    className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                  >
                    <p className="text-base text-muted">{item.condition}</p>
                    <p className="text-base font-semibold text-primary-dark">{program.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
