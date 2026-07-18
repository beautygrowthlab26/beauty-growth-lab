"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const courseLinks = [
  { label: "전체 프로그램 보기", href: "/programs" },
  { label: "캡컷 교육", href: "/courses/capcut" },
  { label: "캔바·미리캔버스 교육", href: "/courses/canva-miricanvas" },
  { label: "AI SNS 교육", href: "/courses/ai-sns" },
];

const navLinks = [
  { label: "강의·출강", href: "/lecture" },
  { label: "콘텐츠 제작", href: "/services" },
  { label: "대표 소개", href: "/about" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "card" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-(--container-content) items-center justify-between px-6 py-3 sm:px-8 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setProgramsOpen(true)}
            onMouseLeave={() => setProgramsOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-full px-4 py-2 text-base font-medium text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink">
              교육 프로그램
              <ChevronDown className="size-3.5" />
            </button>
            <AnimatePresence>
              {programsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="card absolute left-1/2 top-full w-72 -translate-x-1/2 rounded-2xl p-2 shadow-xl"
                >
                  {courseLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-ink/5"
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-base font-medium text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href="/consult" variant="accent" size="md">
            교육 상담
          </Button>
        </div>

        <button
          className="flex size-11 items-center justify-center rounded-full text-ink lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="메뉴 열기"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="card overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
              <p className="px-4 pt-3 text-sm font-semibold uppercase tracking-wide text-faint">교육 프로그램</p>
              {courseLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-ink/5"
                >
                  {link.label}
                </Link>
              ))}
              <div className="my-2 h-px bg-line" />
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-ink/5"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <Button href="/consult" variant="accent" className="w-full">
                  교육 상담
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
