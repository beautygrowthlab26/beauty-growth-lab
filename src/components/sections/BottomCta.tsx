import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const ctas = [
  { label: "교육 상담 신청", href: "/consult", variant: "accent" as const },
  { label: "1:1 코칭 문의", href: "/programs/one-on-one-coaching", variant: "secondary" as const },
  { label: "강의 및 출강 문의", href: "/lecture", variant: "secondary" as const },
  { label: "콘텐츠 제작 문의", href: "/services", variant: "secondary" as const },
];

export function BottomCta() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <Reveal>
          <div className="rounded-[2.5rem] bg-primary px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="flex flex-col items-center gap-6">
              <h2 className="balance font-display max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                이제는 남이 만든 콘텐츠만 기다리지 말고
                <br className="hidden sm:block" /> 우리 매장의 이야기를 직접 만들어보세요
              </h2>
              <p className="max-w-lg text-lg leading-relaxed text-white/80">
                원장님의 속도에 맞춰 기획부터 제작, 업로드까지 함께하겠습니다.
              </p>
              <div className="mt-2 flex flex-wrap justify-center gap-3">
                {ctas.map((cta) => (
                  <Button
                    key={cta.href}
                    href={cta.href}
                    variant={cta.variant}
                    size="lg"
                    className={cta.variant === "secondary" ? "bg-white/10 text-white hover:bg-white/15" : ""}
                  >
                    {cta.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
