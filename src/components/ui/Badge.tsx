import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "violet",
  className,
}: {
  children: React.ReactNode;
  tone?: "violet" | "rose" | "neutral";
  className?: string;
}) {
  const tones = {
    violet: "bg-violet-soft text-violet-dark",
    rose: "bg-rose-soft text-rose",
    neutral: "bg-ink/5 text-muted",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
