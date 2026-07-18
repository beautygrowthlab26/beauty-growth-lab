import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { constructMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "콘텐츠 제작 및 성장 지원 서비스",
  description: "직접 운영하기 어려운 원장님을 위한 홈페이지·블로그·SNS 콘텐츠 제작 및 온라인 마케팅 관리 서비스입니다.",
  path: "/services",
});

export default function ServicesPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "콘텐츠 제작 서비스", path: "/services" },
  ]);

  return (
    <div className="py-24 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="제작 및 성장 지원 서비스"
          title="직접 하기 어렵다면, 저희가 대신 만들어드립니다"
          description="교육을 통해 기초를 배운 후에도 시간이 없거나 직접 운영하기 어려운 원장님을 위해, 홈페이지·블로그·SNS 콘텐츠 제작과 온라인 마케팅 관리를 대행해 드립니다."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.08}>
              <Link
                href={`/services/${service.slug}`}
                className="card group flex h-full flex-col gap-6 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold tracking-wide text-faint">{service.eyebrow}</span>
                  <ArrowUpRight className="size-5 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-ink">{service.name}</h2>
                  <p className="mt-1 text-base font-medium text-primary">{service.tagline}</p>
                </div>
                <p className="text-base leading-relaxed text-muted">{service.idealFor}</p>
                <ul className="flex flex-col gap-2.5">
                  {service.includes.map((item) => (
                    <li key={item.title} className="flex items-start gap-2 text-base text-ink/85">
                      <Check className="mt-1 size-4 shrink-0 text-primary" />
                      {item.title}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between border-t border-line pt-5">
                  <span className="text-sm font-medium text-faint">진행 기간</span>
                  <span className="text-base font-semibold text-ink">{service.duration}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="card mt-16 flex flex-col items-center gap-4 rounded-2xl p-10 text-center">
            <p className="text-lg text-ink">직접 배우고 싶다면 교육 프로그램도 확인해 보세요.</p>
            <Button href="/programs" variant="secondary">
              교육 프로그램 보기
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
