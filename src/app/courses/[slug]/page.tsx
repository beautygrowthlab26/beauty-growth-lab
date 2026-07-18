import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { getAllCourseRoutes, getCoursesByRoute } from "@/data/courses";
import { constructMetadata, breadcrumbJsonLd, courseJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return getAllCourseRoutes().map((routeSlug) => ({ slug: routeSlug }));
}

const seoDescriptions: Record<string, string> = {
  capcut:
    "뷰티샵 캡컷 교육 · 뷰티 원장 캡컷 강의. 40대·50대 원장님도 스마트폰으로 릴스를 완성하는 캡컷 실전 교육입니다.",
  "canva-miricanvas":
    "뷰티샵 캔바 교육 · 뷰티 원장 미리캔버스 교육. 이벤트 포스터, 카드뉴스, 가격표까지 직접 만드는 실전 교육입니다.",
  "ai-sns":
    "뷰티 원장 AI 교육 · 뷰티샵 SNS 교육. ChatGPT와 편집툴을 연결해 한 달 콘텐츠를 완성하는 실전 교육입니다.",
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const items = getCoursesByRoute(slug);
  if (items.length === 0) return constructMetadata({ title: "교육 과정을 찾을 수 없습니다", path: `/courses/${slug}` });

  const title = `${items.map((c) => c.toolName).join(" · ")} 실전 교육`;
  return constructMetadata({
    title,
    description: seoDescriptions[slug] ?? items[0].description,
    path: `/courses/${slug}`,
  });
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const items = getCoursesByRoute(slug);
  if (items.length === 0) notFound();

  const title = `${items.map((c) => c.toolName).join(" · ")} 실전 교육`;
  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "교육 프로그램", path: "/courses" },
    { name: title, path: `/courses/${slug}` },
  ]);
  const courseLds = items.map((course) =>
    courseJsonLd({ name: course.name, description: course.description, path: `/courses/${slug}` })
  );

  return (
    <div className="py-24 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {courseLds.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}

      <Container className="max-w-4xl">
        <Reveal>
          <span className="mb-5 inline-flex w-fit items-center rounded-full bg-primary-soft px-4 py-1.5 text-sm font-semibold text-primary-dark">
            {items[0].eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="balance font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/consult" variant="accent">
              무료 교육 상담 신청하기
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </Reveal>
      </Container>

      {items.map((course, index) => (
        <Container key={course.slug} className="mt-20 max-w-4xl">
          <Reveal delay={index * 0.05}>
            <div className="border-t border-line pt-14">
              <SectionHeading align="left" as="h2" eyebrow={course.toolName} title={course.tagline} description={course.description} />
            </div>
          </Reveal>

          {course.workflow && (
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-5">
              {course.workflow.map((step, i) => (
                <Reveal key={step.step} delay={i * 0.05}>
                  <div className="card flex h-full flex-col gap-1 rounded-2xl p-5 text-center">
                    <p className="text-xs font-semibold text-primary">STEP {i + 1}</p>
                    <p className="text-sm font-semibold text-ink">{step.step}</p>
                    <p className="text-xs text-muted">{step.tool}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-ink">교육 내용</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {course.curriculum.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-base text-ink/85">
                    <Check className="mt-1 size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink">완성 결과물</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {course.outcomes.map((item) => (
                  <li key={item} className="card rounded-xl px-4 py-3 text-base text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {course.highlight && (
            <Reveal delay={0.1}>
              <blockquote className="card mt-10 rounded-2xl p-6 text-base leading-relaxed text-ink">
                {course.highlight}
              </blockquote>
            </Reveal>
          )}
        </Container>
      ))}

      <Container className="mt-24 max-w-4xl">
        <Reveal>
          <div className="card flex flex-col items-center gap-5 rounded-[2rem] px-8 py-14 text-center">
            <h2 className="balance font-display text-2xl font-semibold text-ink sm:text-3xl">
              {title}, 우리 매장에도 필요할까요?
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted">
              지금 상황을 알려주시면 가장 적합한 교육 방식을 추천해 드립니다.
            </p>
            <Button href="/consult" variant="accent">
              무료 교육 상담 신청하기
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
