import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={cn(
        "glass rounded-3xl p-8 shadow-[0_1px_2px_rgba(14,14,18,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-16px_rgba(91,76,255,0.18)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
