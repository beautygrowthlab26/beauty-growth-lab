import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { getAllCourseRoutes, getCoursesByRoute } from "@/data/courses";

export function CoreProgramsTools() {
  const routes = getAllCourseRoutes()
    .filter((routeSlug) => routeSlug !== "ai-sns")
    .map((routeSlug) => ({ routeSlug, items: getCoursesByRoute(routeSlug) }));

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="핵심 교육 프로그램"
          title="원장님이 가장 자주 사용하는 세 가지 편집툴부터 시작합니다"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {routes.map(({ routeSlug, items }, index) =>
            items.map((course) => (
              <Reveal key={course.slug} delay={index * 0.08}>
                <Link
                  href={`/courses/${routeSlug}`}
                  className="card group flex h-full flex-col gap-5 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-sm font-semibold text-primary">{course.eyebrow}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">{course.name}</h3>
                    <p className="mt-1 text-base text-ink/70">{course.tagline}</p>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {course.outcomes.slice(0, 4).map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2 text-base text-ink/80">
                        <Check className="mt-1 size-4 shrink-0 text-primary" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto flex items-center gap-1 border-t border-line pt-5 text-base font-medium text-primary">
                    {course.ctaLabel}
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))
          )}
        </div>
      </Container>
    </section>
  );
}
