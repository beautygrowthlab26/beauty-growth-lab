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
    title: program.name,
    description: program.tagline,
    path: `/programs/${program.slug}`,
  });
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "교육 프로그램 및 패키지", path: "/programs" },
    { name: program.name, path: `/programs/${program.slug}` },
  ]);
  const serviceLd = serviceJsonLd({
    name: program.name,
    description: program.tagline,
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
            {program.name}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg text-primary">{program.tagline}</p>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{program.idealFor}</p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/consult" variant="accent">
              {program.ctaLabel}
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </Reveal>
      </Container>

      <Container className="mt-20 max-w-4xl">
        <SectionHeading align="left" as="h2" title="구성" />
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {program.composition.map((item, i) => (
            <Reveal key={item} delay={i * 0.04}>
              <div className="card flex items-start gap-2 rounded-xl p-5 text-base text-ink">
                <Check className="mt-1 size-4 shrink-0 text-primary" />
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="mt-20 max-w-4xl">
        <SectionHeading align="left" as="h2" title="교육 방식" />
        <div className="mt-8 flex flex-wrap gap-3">
          {program.format.map((item) => (
            <span key={item} className="card rounded-full px-5 py-2.5 text-base text-ink">
              {item}
            </span>
          ))}
        </div>
      </Container>

      <Container className="mt-20 max-w-4xl">
        <div className="card flex flex-col items-center gap-3 rounded-2xl p-8 text-center">
          <p className="text-sm font-semibold text-faint">비용 안내</p>
          <p className="text-lg text-ink">{program.priceLabel}</p>
        </div>
      </Container>

      <Container className="mt-24 max-w-4xl">
        <Reveal>
          <div className="card flex flex-col items-center gap-5 rounded-[2rem] px-8 py-14 text-center">
            <h2 className="balance font-display text-2xl font-semibold text-ink sm:text-3xl">
              {program.name}, 우리 매장에도 맞을까요?
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
