import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { courses, getAllCourseRoutes, getCoursesByRoute } from "@/data/courses";
import { constructMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "교육 프로그램",
  description: "캡컷, 캔바, 미리캔버스, AI SNS 연계 교육 — 원장님이 직접 매장 콘텐츠를 만드는 툴별 실전 교육입니다.",
  path: "/courses",
});

export default function CoursesPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "교육 프로그램", path: "/courses" },
  ]);

  const routes = getAllCourseRoutes().map((routeSlug) => {
    const items = getCoursesByRoute(routeSlug);
    return { routeSlug, items };
  });

  return (
    <div className="py-24 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="교육 프로그램"
          title="원장님이 가장 자주 사용하는 툴부터 시작합니다"
          description="복잡한 기능을 전부 배우지 않습니다. 매장을 운영하며 실제로 자주 쓰는 기능만 골라 반복해서 직접 완성하도록 도와드립니다."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {routes.map(({ routeSlug, items }, index) => (
            <Reveal key={routeSlug} delay={index * 0.08}>
              <Link
                href={`/courses/${routeSlug}`}
                className="card group flex h-full flex-col gap-5 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-primary">{items[0].eyebrow.split(" · ")[0]}</span>
                  <ArrowUpRight className="size-5 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <h2 className="font-display text-xl font-semibold text-ink">
                  {items.map((c) => c.toolName).join(" · ")} 실전 교육
                </h2>
                <p className="text-base leading-relaxed text-muted">{items[0].tagline}</p>
                <ul className="mt-auto flex flex-col gap-2 border-t border-line pt-4">
                  {items[0].outcomes.slice(0, 3).map((outcome) => (
                    <li key={outcome} className="text-sm text-ink/80">
                      · {outcome}
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-faint">
          전체 커리큘럼: {courses.map((c) => c.toolName).join(" · ")}
        </p>
      </Container>
    </div>
  );
}
