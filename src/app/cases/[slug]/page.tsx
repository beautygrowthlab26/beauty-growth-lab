import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { educationCases, getEducationCaseBySlug } from "@/data/cases";
import { constructMetadata, breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return educationCases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getEducationCaseBySlug(slug);
  if (!item) return constructMetadata({ title: "사례를 찾을 수 없습니다", path: `/cases/${slug}` });

  return constructMetadata({ title: item.title, description: item.outcome, path: `/cases/${item.slug}` });
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getEducationCaseBySlug(slug);
  if (!item) notFound();

  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "교육 사례", path: "/cases" },
    { name: item.title, path: `/cases/${item.slug}` },
  ]);

  return (
    <div className="py-24 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Container className="max-w-3xl">
        <Reveal>
          <Badge tone="primary">{item.audience}</Badge>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="balance font-display mt-5 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {item.title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted">
            <span className="card rounded-full px-3 py-1.5">진행 방식 {item.duration}</span>
            {item.toolsUsed.map((tool) => (
              <span key={tool} className="card rounded-full px-3 py-1.5">{tool}</span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-12">
            <p className="text-sm font-semibold text-faint">완성 결과물</p>
            <p className="mt-2 text-xl font-semibold text-ink">{item.outcome}</p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-ink">교육 후 기대할 수 있는 변화</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {item.expectedChange.map((change) => (
                <li key={change} className="card flex items-start gap-3 rounded-xl p-5 text-sm leading-relaxed text-ink">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  {change}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <p className="mt-10 text-xs leading-relaxed text-faint">{item.disclaimer}</p>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-16 flex flex-col items-center gap-4 border-t border-line pt-10 text-center">
            <p className="text-base text-muted">우리 매장에도 맞는 교육인지 궁금하신가요?</p>
            <Button href="/consult" variant="accent">
              무료 교육 상담 신청하기
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
