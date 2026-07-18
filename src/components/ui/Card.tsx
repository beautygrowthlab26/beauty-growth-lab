import { cn } from "@/lib/utils";

export function Card({
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
        "card rounded-3xl p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      {children}
    </Tag>
  );
}
