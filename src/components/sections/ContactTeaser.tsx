import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function ContactTeaser() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="animate-drift pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-gradient-to-br from-violet/40 to-rose/30 blur-3xl" />
            <div className="animate-drift-slow pointer-events-none absolute -bottom-24 -left-16 size-64 rounded-full bg-gradient-to-br from-rose/30 to-violet/20 blur-3xl" />

            <div className="relative flex flex-col items-center gap-6">
              <h2 className="balance font-display max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                이제, 검색이 아니라 답변 안에 있어야 할 때입니다
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-white/70">
                지금 브랜드가 AI 검색에서 어디에 서 있는지, Beauty Growth Lab과 함께 확인해 보세요.
              </p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="accent" size="lg">
                  지금 문의하기
                  <ArrowRight className="size-4" />
                </Button>
                <Button href="/bgi" variant="secondary" size="lg" className="bg-white/10 text-white hover:bg-white/15">
                  무료 진단 먼저 받기
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
