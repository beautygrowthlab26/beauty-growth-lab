import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { constructMetadata, breadcrumbJsonLd, siteConfig } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "개인정보처리방침",
  description: "Beauty Growth Lab의 개인정보 수집 및 이용에 대한 안내입니다.",
  path: "/privacy",
  noIndex: true,
});

const sections = [
  {
    title: "1. 수집하는 개인정보 항목",
    body: "문의하기 및 무료 AI 검색 진단(BGI) 신청 시 이름, 브랜드/회사명, 연락처, 이메일, 웹사이트 주소, 업종 정보를 수집합니다.",
  },
  {
    title: "2. 개인정보의 수집 및 이용 목적",
    body: "수집한 정보는 문의 응대, 서비스 상담, 무료 진단 리포트 발송 목적으로만 이용하며, 목적 외 용도로 사용하지 않습니다.",
  },
  {
    title: "3. 개인정보의 보유 및 이용 기간",
    body: "문의 및 상담 목적이 달성된 후에는 관련 법령에 따른 보관 기간을 제외하고 지체 없이 파기합니다.",
  },
  {
    title: "4. 개인정보의 제3자 제공",
    body: "수집한 개인정보는 원칙적으로 제3자에게 제공하지 않으며, 이메일 발송을 위한 위탁 처리(Resend 등 이메일 발송 서비스) 외에는 외부에 제공하지 않습니다.",
  },
  {
    title: "5. 정보주체의 권리",
    body: "정보주체는 언제든지 자신의 개인정보에 대한 열람, 정정, 삭제를 요청할 수 있습니다. 아래 연락처로 문의해주세요.",
  },
];

export default function PrivacyPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "개인정보처리방침", path: "/privacy" },
  ]);

  return (
    <div className="py-24 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Container className="max-w-3xl">
        <SectionHeading as="h1" align="left" eyebrow="법적 고지" title="개인정보처리방침" />

        <div className="mt-14 flex flex-col gap-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-ink">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{section.body}</p>
            </div>
          ))}

          <div className="card rounded-2xl p-6 text-sm leading-relaxed text-muted">
            <p className="font-semibold text-ink">{siteConfig.legalName} (Beauty Growth Lab)</p>
            <p className="mt-2">대표: {siteConfig.ceo}</p>
            <p>사업자등록번호: {siteConfig.businessRegistrationNumber}</p>
            <p>주소: {siteConfig.address}</p>
            <p>
              연락처: {siteConfig.phone} · {siteConfig.email}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
