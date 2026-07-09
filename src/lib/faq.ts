import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const FAQ_DIR = path.join(process.cwd(), "content", "faq");

export interface FaqEntry {
  slug: string;
  question: string;
  cluster: string;
  clusterLabel: string;
  order: number;
  relatedSlugs: string[];
  content: string;
}

export function getAllFaqEntries(): FaqEntry[] {
  const files = fs.readdirSync(FAQ_DIR).filter((file) => file.endsWith(".mdx"));

  const entries = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(FAQ_DIR, file), "utf8");
    const { data, content } = matter(raw);

    return {
      slug,
      question: data.question as string,
      cluster: data.cluster as string,
      clusterLabel: data.clusterLabel as string,
      order: (data.order as number) ?? 0,
      relatedSlugs: (data.relatedSlugs as string[]) ?? [],
      content,
    };
  });

  return entries.sort((a, b) => a.order - b.order);
}

export function getFaqBySlug(slug: string): FaqEntry | undefined {
  return getAllFaqEntries().find((entry) => entry.slug === slug);
}

export function getFaqClusters() {
  const entries = getAllFaqEntries();
  const clusters = new Map<string, { label: string; entries: FaqEntry[] }>();

  for (const entry of entries) {
    if (!clusters.has(entry.cluster)) {
      clusters.set(entry.cluster, { label: entry.clusterLabel, entries: [] });
    }
    clusters.get(entry.cluster)!.entries.push(entry);
  }

  return Array.from(clusters.entries()).map(([cluster, value]) => ({
    cluster,
    label: value.label,
    entries: value.entries,
  }));
}

export function getRelatedFaqs(slugs: string[]): FaqEntry[] {
  const all = getAllFaqEntries();
  return slugs
    .map((slug) => all.find((entry) => entry.slug === slug))
    .filter((entry): entry is FaqEntry => Boolean(entry));
}
