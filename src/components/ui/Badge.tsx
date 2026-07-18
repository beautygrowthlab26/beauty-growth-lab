import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "primary",
  className,
}: {
  children: React.ReactNode;
  tone?: "primary" | "gold" | "neutral";
  className?: string;
}) {
  const tones = {
    primary: "bg-primary-soft text-primary-dark",
    gold: "bg-gold-light text-ink",
    neutral: "bg-ink/5 text-muted",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
