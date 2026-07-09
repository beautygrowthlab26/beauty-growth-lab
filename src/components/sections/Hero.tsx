"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StatCounter } from "@/components/ui/StatCounter";

const stats = [
  { value: 42, suffix: "회", label: "월 평균 AI 검색 언급 증가" },
  { value: 58, suffix: "%", label: "카테고리 AI 검색 점유율" },
  { value: 6, suffix: "개월", label: "브랜드 지배력 구축 기간" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-drift absolute -top-32 left-1/2 size-[560px] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet/25 to-rose/15 blur-3xl" />
        <div className="animate-drift-slow absolute -bottom-40 right-0 size-[440px] rounded-full bg-gradient-to-br from-rose/20 to-violet/10 blur-3xl" />
      </div>

      <Container className="flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-ink/80"
        >
          <Sparkles className="size-3.5 text-violet" />
          SEO를 넘어, AEO·GEO까지 — AI Search Optimization
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="balance font-display max-w-4xl text-[2.6rem] font-semibold leading-[1.1] tracking-tight text-ink sm:text-6xl lg:text-[4.5rem]"
        >
          우리는 홈페이지가 아니라
          <br />
          <span className="text-gradient">AI가 추천하는 브랜드</span>를 만듭니다
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="balance mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          ChatGPT, Perplexity, Gemini가 답할 때 당신의 브랜드를 먼저 말하게 만드는 곳.
          Beauty Growth Lab은 SEO·AEO·GEO를 함께 설계하는 AI 검색 최적화 전문 회사입니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button href="/bgi" variant="accent" size="lg">
            무료 AI 검색 진단 받기
            <ArrowRight className="size-4" />
          </Button>
          <Button href="/services" variant="secondary" size="lg">
            서비스 살펴보기
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="glass mt-20 grid w-full max-w-3xl grid-cols-1 gap-8 rounded-3xl px-8 py-8 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <p className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-muted sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
