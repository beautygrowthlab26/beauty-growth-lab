import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { constructMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "서비스",
  description: "AI Search Start, AI Content System, AI Brand Dominance — Beauty Growth Lab의 3가지 서비스를 비교해 보세요.",
  path: "/services",
});

export default function ServicesPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "서비스", path: "/services" },
  ]);

  return (
    <div className="py-24 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="서비스"
          title="브랜드의 단계에 맞는 AI 검색 전략"
          description="지금 어디에 있든, 다음 단계는 명확합니다. 세 가지 패키지는 독립적으로도, 이어지는 여정으로도 설계되어 있습니다."
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
                  <h2 className="font-display text-2xl font-semibold text-ink">{service.name}</h2>
                  <p className="mt-1 text-sm font-medium text-violet">{service.tagline}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted">{service.idealFor}</p>
                <ul className="flex flex-col gap-2.5">
                  {service.includes.map((item) => (
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
    </div>
  );
}
