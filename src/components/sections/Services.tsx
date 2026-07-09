import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

export function Services() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="서비스"
          title="3단계로 완성하는 AI 검색 지배력"
          description="각 패키지는 독립적으로도, 다음 단계로 이어지는 여정으로도 설계되어 있습니다."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.08}>
              <Link
                href={`/services/${service.slug}`}
                className="glass group flex h-full flex-col gap-6 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(91,76,255,0.22)]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold tracking-wide text-faint">{service.eyebrow}</span>
                  <ArrowUpRight className="size-5 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet" />
                </div>

                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink">{service.name}</h3>
                  <p className="mt-1 text-sm font-medium text-violet">{service.tagline}</p>
                </div>

                <p className="text-sm leading-relaxed text-muted">{service.idealFor}</p>

                <ul className="flex flex-col gap-2.5">
                  {service.includes.slice(0, 4).map((item) => (
                    <li key={item.title} className="flex items-start gap-2 text-sm text-ink/85">
                      <Check className="mt-0.5 size-4 shrink-0 text-violet" />
                      {item.title}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between border-t border-line pt-5">
                  <span className="text-xs font-medium text-faint">진행 기간</span>
                  <span className="text-sm font-semibold text-ink">{service.duration}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
