"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "성공사례", href: "/cases" },
  { label: "블로그", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
        scrolled ? "glass-strong" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-(--container-content) items-center justify-between px-6 py-3 sm:px-8 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink">
              서비스
              <ChevronDown className="size-3.5" />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="glass-strong absolute left-1/2 top-full w-80 -translate-x-1/2 rounded-2xl p-2 shadow-xl"
                >
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block rounded-xl px-4 py-3 transition-colors hover:bg-ink/5"
                    >
                      <p className="text-sm font-medium text-ink">{service.name}</p>
                      <p className="text-xs text-muted">{service.tagline} · {service.duration}</p>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-violet transition-colors hover:bg-violet-soft"
                  >
                    전체 서비스 비교 보기 →
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href="/contact" variant="ghost" size="sm">
            문의하기
          </Button>
          <Button href="/bgi" variant="accent" size="sm">
            무료 AI 검색 진단
          </Button>
        </div>

        <button
          className="flex size-10 items-center justify-center rounded-full text-ink lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="메뉴 열기"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="glass-strong overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
              <p className="px-4 pt-3 text-xs font-semibold uppercase tracking-wide text-faint">서비스</p>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-ink hover:bg-ink/5"
                >
                  {service.name}
                </Link>
              ))}
              <div className="my-2 h-px bg-line" />
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-ink hover:bg-ink/5"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <Button href="/contact" variant="secondary" className="w-full">
                  문의하기
                </Button>
                <Button href="/bgi" variant="accent" className="w-full">
                  무료 AI 검색 진단
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
