"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const workflow = [
  { step: "아이디어", tool: "ChatGPT" },
  { step: "디자인", tool: "Canva · 미리캔버스" },
  { step: "영상", tool: "CapCut" },
  { step: "업로드", tool: "Instagram · Naver Place" },
];

export function Hero() {
  return (
    <section className="pt-20 pb-24 sm:pt-28 sm:pb-32">
      <Container className="flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="balance font-display max-w-3xl text-[2.4rem] font-semibold leading-[1.2] tracking-tight text-ink sm:text-6xl"
        >
          40·50대 뷰티 원장님도
          <br />
          직접 만들 수 있습니다
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="balance mt-6 max-w-2xl text-xl font-medium leading-relaxed text-primary"
        >
          캡컷 · 미리캔버스 · 캔바 · AI로
          <br className="sm:hidden" /> 우리 매장 콘텐츠를 완성하는 실전 교육
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="balance mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          릴스 편집부터 이벤트 포스터, 고객 후기 이미지, 플레이스 소식, 블로그 콘텐츠까지.
          빠른 설명과 어려운 전문용어 대신 원장님이 실제로 사용하는 화면을 보며 천천히 따라 할 수 있도록
          알려드립니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button href="/consult" variant="accent" size="lg">
            교육 상담 신청하기
            <ArrowRight className="size-4" />
          </Button>
          <Button href="/programs" variant="secondary" size="lg">
            교육 프로그램 보기
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="/consult" className="mt-4 inline-block text-base font-medium text-ink underline underline-offset-4">
            우리 매장에 맞는 교육 추천받기
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="card mt-16 grid w-full max-w-3xl grid-cols-2 gap-4 rounded-3xl p-6 sm:grid-cols-4 sm:p-8"
        >
          {workflow.map((item, index) => (
            <div key={item.step} className="relative flex flex-col items-center gap-1.5 px-2">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary-soft text-sm font-semibold text-primary-dark">
                {index + 1}
              </span>
              <p className="mt-1 text-base font-semibold text-ink">{item.step}</p>
              <p className="text-sm text-muted">{item.tool}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
