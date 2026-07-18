import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

const variants = {
  primary: "bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md",
  accent: "bg-gold text-white hover:brightness-95 shadow-sm hover:shadow-md",
  secondary: "card text-ink hover:bg-primary-soft",
  ghost: "text-ink hover:bg-ink/5",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-7 text-lg",
};

type CommonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: CommonProps &
  (
    | ({ href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">)
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  )) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 ease-out active:scale-[0.98] whitespace-nowrap",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
