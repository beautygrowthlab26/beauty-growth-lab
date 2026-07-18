import Link from "next/link";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-2.5 ${className ?? ""}`}>
      <Image
        src="/logo-icon.png"
        alt="Beauty Growth Lab"
        width={36}
        height={36}
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        priority
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.95rem] font-semibold tracking-tight text-ink">
          Beauty Growth Lab
        </span>
        <span className="text-[0.65rem] font-medium tracking-wide text-faint">
          뷰티 원장님을 위한 AI·SNS 실전 교육
        </span>
      </span>
    </Link>
  );
}
