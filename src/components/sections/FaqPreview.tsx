import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { getAllFaqEntries } from "@/lib/faq";

function toPlainText(markdown: string) {
  return markdown
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .trim();
}

export function FaqPreview() {
  const entries = getAllFaqEntries().slice(0, 5);

  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="가장 많이 묻는 질문" />

        <div className="mt-12">
          <Accordion
            items={entries.map((entry) => ({
              question: entry.question,
              answer: toPlainText(entry.content.trim().split("\n\n")[0]),
            }))}
          />
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/faq" variant="secondary">
            FAQ 전체 보기
          </Button>
        </div>
      </Container>
    </section>
  );
}
