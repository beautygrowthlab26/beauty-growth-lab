import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { siteConfig } from "@/lib/seo";

const columns = [
  {
    title: "교육 프로그램",
    links: [
      { label: "전체 프로그램 보기", href: "/programs" },
      { label: "캡컷 교육", href: "/courses/capcut" },
      { label: "캔바·미리캔버스 교육", href: "/courses/canva-miricanvas" },
      { label: "AI SNS 교육", href: "/courses/ai-sns" },
    ],
  },
  {
    title: "리소스",
    links: [
      { label: "교육 사례", href: "/cases" },
      { label: "FAQ", href: "/faq" },
      { label: "블로그", href: "/blog" },
      { label: "강의·출강 문의", href: "/lecture" },
    ],
  },
  {
    title: "회사",
    links: [
      { label: "대표 소개", href: "/about" },
      { label: "콘텐츠 제작 서비스", href: "/services" },
      { label: "문의하기", href: "/contact" },
      { label: "개인정보처리방침", href: "/privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-base leading-relaxed text-muted">
              {siteConfig.description}
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <p className="text-base font-semibold text-ink">{column.title}</p>
              {column.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 text-sm leading-relaxed text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            {siteConfig.legalName} (Beauty Growth Lab) · 대표 {siteConfig.ceo} · 사업자등록번호{" "}
            {siteConfig.businessRegistrationNumber}
            <br className="sm:hidden" /> {siteConfig.address} · {siteConfig.phone} · {siteConfig.email}
          </p>
          <p>© {new Date().getFullYear()} Beauty Growth Lab. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
