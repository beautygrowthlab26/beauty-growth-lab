import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cases, getCaseBySlug } from "@/data/cases";
import { constructMetadata, breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) return constructMetadata({ title: "사례를 찾을 수 없습니다", path: `/cases/${slug}` });

  return constructMetadata({ title: item.client, description: item.summary, path: `/cases/${item.slug}` });
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) notFound();

  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "성공사례", path: "/cases" },
    { name: item.client, path: `/cases/${item.slug}` },
  ]);

  return (
    <div className="py-24 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Container className="max-w-3xl">
        <Reveal>
          <Badge tone="violet">{item.industry}</Badge>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="balance font-display mt-5 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {item.summary}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted">
            <span className="glass rounded-full px-3 py-1.5">{item.client}</span>
            <span className="glass rounded-full px-3 py-1.5">진행 기간 {item.duration}</span>
            {item.servicesUsed.map((s) => (
              <span key={s} className="glass rounded-full px-3 py-1.5">{s}</span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {item.results.map((r) => (
              <div key={r.label} className="glass rounded-2xl p-6 text-center">
                <p className="text-xs text-muted">{r.label}</p>
                <p className="mt-2 text-sm text-faint line-through">{r.before}</p>
                <p className="font-display text-2xl font-semibold text-violet">{r.after}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14">
            <h2 className="text-xl font-semibold text-ink">과제</h2>
            <p className="mt-3 text-base leading-relaxed text-muted">{item.challenge}</p>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-ink">접근 방법</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {item.approach.map((step) => (
                <li key={step} className="glass rounded-xl p-5 text-sm leading-relaxed text-ink">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {item.quote && (
          <Reveal delay={0.28}>
            <blockquote className="glass-strong mt-12 rounded-2xl p-8 text-lg italic leading-relaxed text-ink">
              &ldquo;{item.quote.text}&rdquo;
              <footer className="mt-3 text-sm not-italic text-muted">— {item.quote.role}</footer>
            </blockquote>
          </Reveal>
        )}

        <Reveal delay={0.32}>
          <div className="mt-16 flex flex-col items-center gap-4 border-t border-line pt-10 text-center">
            <p className="text-base text-muted">우리 브랜드도 이런 결과를 만들 수 있을지 궁금하신가요?</p>
            <Button href="/bgi" variant="accent">
              무료 AI 검색 진단 받기
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
