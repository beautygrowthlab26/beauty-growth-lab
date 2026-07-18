import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { constructMetadata, breadcrumbJsonLd, siteConfig } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "문의하기",
  description: "브랜드의 AI 검색 전략에 대해 Beauty Growth Lab에 문의하세요.",
  path: "/contact",
});

const contactInfo = [
  { icon: Phone, label: siteConfig.phone },
  { icon: Mail, label: siteConfig.email },
  { icon: MapPin, label: siteConfig.address },
];

export default function ContactPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "문의하기", path: "/contact" },
  ]);

  return (
    <div className="py-24 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Container className="max-w-5xl">
        <SectionHeading
          as="h1"
          align="left"
          eyebrow="문의하기"
          title="브랜드 이야기를 들려주세요"
          description="어떤 단계에 있든, 지금 상황에 맞는 다음 단계를 함께 설계해 드립니다."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="card flex items-center gap-3 rounded-2xl p-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-dark">
                    <item.icon className="size-4" />
                  </span>
                  <span className="text-sm text-ink">{item.label}</span>
                </div>
              ))}
              <div className="card rounded-2xl p-5 text-xs leading-relaxed text-faint">
                {siteConfig.legalName} (Beauty Growth Lab) · 대표 {siteConfig.ceo} · 사업자등록번호{" "}
                {siteConfig.businessRegistrationNumber}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
