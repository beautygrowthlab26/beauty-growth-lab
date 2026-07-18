import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getProgramBySlug, programs } from "@/data/programs";
import { constructMetadata, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return constructMetadata({ title: "프로그램을 찾을 수 없습니다", path: `/programs/${slug}` });

  return constructMetadata({
    title: program.title,
    description: program.description,
    path: `/programs/${program.slug}`,
  });
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "교육 프로그램 및 가격", path: "/programs" },
    { name: program.title, path: `/programs/${program.slug}` },
  ]);
  const serviceLd = serviceJsonLd({
    name: program.title,
    description: program.description,
    path: `/programs/${program.slug}`,
  });

  return (
    <div className="py-24 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />

      <Container className="max-w-4xl">
        {program.badge && (
          <Reveal>
            <Badge tone="gold" className="mb-5 w-fit">
              {program.badge}
            </Badge>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h1 className="balance font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            {program.title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{program.audience}</p>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="mt-6">
            <p className="font-display text-4xl font-bold text-ink">{program.price}</p>
            <p className="mt-1 text-base text-faint">{program.duration}</p>
          </div>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/85">{program.description}</p>
        </Reveal>
        <Reveal delay={0.22}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/consult" variant="accent">
              {program.ctaLabel}
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </Reveal>
      </Container>

      {program.tools && (
        <Container className="mt-16 max-w-4xl">
          <SectionHeading align="left" as="h2" title={program.toolsLabel ?? "활용 도구"} />
          <div className="mt-6 flex flex-wrap gap-3">
            {program.tools.map((tool) => (
              <span key={tool} className="card rounded-full px-5 py-2.5 text-base text-ink">
                {tool}
              </span>
            ))}
          </div>
        </Container>
      )}

      <Container className="mt-16 max-w-4xl">
        <SectionHeading align="left" as="h2" title="교육 내용" />
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {program.curriculum.map((item, i) => (
            <Reveal key={item} delay={i * 0.04}>
              <div className="card flex items-start gap-2 rounded-xl p-5 text-base text-ink">
                <Check className="mt-1 size-4 shrink-0 text-primary" />
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="mt-16 max-w-4xl">
        <SectionHeading align="left" as="h2" title={program.outcomesLabel} />
        <div className="mt-6 flex flex-wrap gap-3">
          {program.outcomes.map((item) => (
            <span key={item} className="rounded-full bg-primary-soft px-4 py-2 text-base text-primary-dark">
              {item}
            </span>
          ))}
        </div>
      </Container>

      <Container className="mt-16 max-w-4xl">
        <p className="text-center text-sm leading-relaxed text-faint">
          교육 인원과 장소, 업종, 교육 목적에 따라 진행 시간과 세부 커리큘럼은 조정될 수 있습니다.
          <br />
          기관·협회·아카데미·소상공인 단체 출강은 별도 제안서와 견적을 안내드립니다.
        </p>
      </Container>

      <Container className="mt-16 max-w-4xl">
        <Reveal>
          <div className="card flex flex-col items-center gap-5 rounded-[2rem] px-8 py-14 text-center">
            <h2 className="balance font-display text-2xl font-semibold text-ink sm:text-3xl">
              {program.title}, 우리 매장에도 맞을까요?
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted">
              지금 상황을 알려주시면 가장 적합한 교육 방식을 추천해 드립니다.
            </p>
            <Button href="/consult" variant="accent">
              {program.ctaLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
