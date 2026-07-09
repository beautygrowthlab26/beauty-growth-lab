import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { getServiceBySlug, services } from "@/data/services";
import { constructMetadata, breadcrumbJsonLd, serviceJsonLd, faqPageJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return constructMetadata({ title: "서비스를 찾을 수 없습니다", path: `/services/${slug}` });

  return constructMetadata({
    title: service.name,
    description: `${service.tagline} · ${service.outcomes[0]}`,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "서비스", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ]);
  const serviceLd = serviceJsonLd({
    name: service.name,
    description: service.tagline,
    path: `/services/${service.slug}`,
  });
  const faqLd = faqPageJsonLd(service.faq.map((f) => ({ question: f.question, answer: f.answer })));

  return (
    <div className="py-24 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <Container className="max-w-4xl">
        <Reveal>
          <span className="mb-5 inline-flex w-fit items-center rounded-full bg-violet-soft px-4 py-1.5 text-xs font-semibold text-violet-dark">
            {service.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="balance font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            {service.name}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg text-violet">{service.tagline}</p>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{service.idealFor}</p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="accent">
              이 패키지로 문의하기
              <ArrowRight className="size-4" />
            </Button>
            <Button href="/bgi" variant="secondary">
              무료 진단 먼저 받기
            </Button>
          </div>
        </Reveal>
      </Container>

      <Container className="mt-20 max-w-4xl">
        <SectionHeading align="left" as="h2" title="이런 결과를 얻습니다" />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {service.outcomes.map((outcome, i) => (
            <Reveal key={outcome} delay={i * 0.06}>
              <div className="glass h-full rounded-2xl p-6 text-sm leading-relaxed text-ink">{outcome}</div>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="mt-20 max-w-4xl">
        <SectionHeading align="left" as="h2" title="포함 서비스" />
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {service.includes.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <div className="glass flex h-full flex-col gap-2 rounded-2xl p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <Check className="size-4 text-violet" /> {item.title}
                </div>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="mt-20 max-w-4xl">
        <SectionHeading align="left" as="h2" title="진행 프로세스" description={`전체 기간: ${service.duration}`} />
        <div className="mt-8 flex flex-col gap-4">
          {service.process.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <div className="glass flex items-start gap-4 rounded-2xl p-6">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="mt-20 max-w-4xl">
        <SectionHeading align="left" as="h2" title={`${service.name} 자주 묻는 질문`} />
        <div className="mt-8">
          <Accordion items={service.faq} />
        </div>
      </Container>

      <Container className="mt-24 max-w-4xl">
        <Reveal>
          <div className="glass-strong flex flex-col items-center gap-5 rounded-[2rem] px-8 py-14 text-center">
            <h2 className="balance font-display text-2xl font-semibold text-ink sm:text-3xl">
              {service.name}, 우리 브랜드에도 필요할까요?
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              지금 상태를 진단받고, 가장 적합한 다음 단계를 함께 찾아보세요.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="accent">
                문의하기
              </Button>
              <Button href="/bgi" variant="secondary">
                무료 AI 검색 진단
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
