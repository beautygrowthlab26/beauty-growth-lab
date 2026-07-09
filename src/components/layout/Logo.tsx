import Link from "next/link";
import { Sparkle } from "lucide-react";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-2.5 ${className ?? ""}`}>
      <span className="relative flex size-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-rose text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
        <Sparkle className="size-4" strokeWidth={2.5} fill="currentColor" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.95rem] font-semibold tracking-tight text-ink">
          Beauty Growth Lab
        </span>
        <span className="text-[0.65rem] font-medium tracking-wide text-faint">
          AI SEARCH OPTIMIZATION
        </span>
      </span>
    </Link>
  );
}
