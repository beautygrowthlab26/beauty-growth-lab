import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { courses } from "@/data/courses";

export function AiSnsEducation() {
  const aiSns = courses.find((c) => c.slug === "ai-sns")!;

  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="AI 연계 교육"
          title="글쓰기부터 디자인까지, AI와 함께하면 더 쉬워집니다"
          description={aiSns.description}
        />

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-5">
          {aiSns.workflow!.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.06}>
              <div className="card flex h-full flex-col items-center gap-1.5 rounded-2xl p-5 text-center">
                <span className="text-sm font-semibold text-primary">STEP {i + 1}</span>
                <p className="text-base font-semibold text-ink">{step.step}</p>
                <p className="text-sm text-muted">{step.tool}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="card mx-auto mt-12 max-w-3xl rounded-2xl p-8 text-center">
            <p className="text-lg leading-relaxed text-ink">{aiSns.highlight}</p>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/courses/ai-sns"
              className="flex items-center gap-1 text-base font-medium text-primary"
            >
              {aiSns.ctaLabel}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
