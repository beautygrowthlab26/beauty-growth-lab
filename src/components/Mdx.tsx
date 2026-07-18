import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold tracking-tight text-ink" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-5 text-[1.05rem] leading-relaxed text-muted" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-5 flex list-disc flex-col gap-2 pl-6 text-[1.05rem] leading-relaxed text-muted" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-5 flex list-decimal flex-col gap-2 pl-6 text-[1.05rem] leading-relaxed text-muted" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => <strong className="font-semibold text-ink" {...props} />,
  a: ({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link
      href={href ?? "#"}
      className="font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
      {...props}
    />
  ),
};

export function Mdx({ source }: { source: string }) {
  return (
    <div>
      <MDXRemote source={source} components={components} />
    </div>
  );
}
