import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { programs } from "@/data/programs";
import { constructMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "교육 프로그램 및 가격",
  description:
    "AI 콘텐츠 시작 클래스, AI 콘텐츠 완성 클래스, 우리 매장 AI 콘텐츠 시스템 — 사장님의 속도에 맞춰 한 단계씩 시작하는 실습형 AI 콘텐츠 교육입니다.",
  path: "/programs",
});

export default function ProgramsPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "교육 프로그램 및 가격", path: "/programs" },
  ]);

  return (
    <div className="py-24 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="EDUCATION PROGRAM"
          title="사장님의 속도에 맞춰 한 단계씩 시작하세요"
          description="컴퓨터와 스마트폰이 익숙하지 않아도 괜찮습니다. AI로 홍보문구를 만들고, 캔바·미리캔버스·캡컷을 활용해 우리 매장에 바로 사용할 수 있는 콘텐츠를 직접 완성합니다."
        />

        <div className="mt-16 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {programs.map((program, index) => (
            <Reveal key={program.slug} delay={index * 0.08}>
              <Link
                href={`/programs/${program.slug}`}
                className={cn(
                  "group flex h-full flex-col gap-5 rounded-[20px] p-8 transition-all duration-300 hover:-translate-y-1",
                  program.featured ? "bg-primary text-white shadow-lg" : "card text-ink"
                )}
              >
                {program.badge && (
                  <span className="w-fit rounded-full bg-gold px-3 py-1 text-sm font-semibold text-white">
                    {program.badge}
                  </span>
                )}
                <div className="flex items-start justify-between">
                  <h2 className="font-display text-xl font-semibold">{program.title}</h2>
                  <ArrowUpRight
                    className={cn(
                      "size-5 shrink-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                      program.featured ? "text-white/70" : "text-faint group-hover:text-primary"
                    )}
                  />
                </div>
                <p className={cn("text-base leading-relaxed", program.featured ? "text-white/80" : "text-muted")}>
                  {program.audience}
                </p>
                <div className={cn("border-t pt-4", program.featured ? "border-white/20" : "border-line")}>
                  <p className="font-display text-3xl font-bold">{program.price}</p>
                  <p className={cn("mt-1 text-sm", program.featured ? "text-white/70" : "text-faint")}>
                    {program.duration}
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {program.curriculum.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-base">
                      <Check
                        className={cn("mt-1 size-4 shrink-0", program.featured ? "text-gold" : "text-primary")}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
