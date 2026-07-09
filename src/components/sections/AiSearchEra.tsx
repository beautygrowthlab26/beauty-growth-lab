import { Search, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function AiSearchEra() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="AI 검색 시대"
          title="검색은 이제, 링크가 아니라 답변입니다"
          description="사람들은 더 이상 '검색해서 찾아' 보지 않습니다. AI에게 '물어보고' 그 답을 그대로 신뢰합니다. 이 변화 안에서 브랜드가 서 있어야 할 자리가 달라졌습니다."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass flex h-full flex-col gap-5 rounded-3xl p-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-muted">
                <Search className="size-3.5" /> 예전의 검색
              </span>
              <p className="text-lg font-medium leading-snug text-ink">
                "민감성 피부 진정 성분" 검색 → 파란 링크 10개 → 직접 클릭하며 비교
              </p>
              <div className="mt-2 flex flex-col gap-2">
                {["블로그 A", "쇼핑몰 B", "커뮤니티 C", "브랜드 공식몰 D"].map((item) => (
                  <div key={item} className="rounded-xl border border-line bg-white/50 px-4 py-3 text-sm text-muted">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-strong relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl p-8">
              <div className="animate-drift-slow pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-gradient-to-br from-violet/20 to-rose/10 blur-2xl" />
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-violet-soft px-3 py-1 text-xs font-medium text-violet-dark">
                <Sparkles className="size-3.5" /> 지금의 AI 검색
              </span>
              <p className="text-lg font-medium leading-snug text-ink">
                "민감성 피부 진정 성분 추천해줘" → AI의 답변 한 줄 → 그 안에 언급된 브랜드만 고려군에 진입
              </p>
              <div className="mt-2 rounded-2xl border border-violet/20 bg-white/70 p-5 text-sm leading-relaxed text-ink">
                <span className="text-muted">"민감성 피부에는 병풀 추출물과 판테놀 성분이 도움이 됩니다.
                이 성분을 담은 제품으로는 </span>
                <span className="font-semibold text-violet">브랜드가 여기에 들어갑니다</span>
                <span className="text-muted"> 가 자주 언급됩니다."</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
