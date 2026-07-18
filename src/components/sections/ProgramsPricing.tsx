import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { programs } from "@/data/programs";

export function ProgramsPricing() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="교육 프로그램 및 패키지"
          title="지금 상황에 맞는 교육 방식을 선택하세요"
          description="가격보다 원장님이 얻게 될 결과를 먼저 안내해 드립니다."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {programs.map((program, index) => (
            <Reveal key={program.slug} delay={index * 0.08}>
              <Link
                href={`/programs/${program.slug}`}
                className="card group relative flex h-full flex-col gap-6 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
              >
                {program.badge && (
                  <Badge tone="gold" className="w-fit">
                    {program.badge}
                  </Badge>
                )}
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-xl font-semibold text-ink">{program.name}</h3>
                  <ArrowUpRight className="size-5 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <p className="text-base leading-relaxed text-muted">{program.tagline}</p>
                <ul className="flex flex-col gap-2.5">
                  {program.composition.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-base text-ink/85">
                      <Check className="mt-1 size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-col gap-1 border-t border-line pt-5">
                  <span className="text-sm font-medium text-faint">교육 방식</span>
                  <span className="text-base text-ink">{program.format.join(" · ")}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
