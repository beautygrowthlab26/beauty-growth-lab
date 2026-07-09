import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-violet">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <Tag
          className={cn(
            "balance font-display font-semibold tracking-tight text-ink",
            Tag === "h1" ? "text-[2.75rem] leading-[1.08] sm:text-6xl lg:text-7xl" : "text-3xl leading-tight sm:text-4xl lg:text-5xl"
          )}
        >
          {title}
        </Tag>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "balance max-w-2xl text-base leading-relaxed text-muted sm:text-lg",
              align === "center" ? "mx-auto" : ""
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
