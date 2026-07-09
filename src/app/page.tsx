import { Hero } from "@/components/sections/Hero";
import { AiSearchEra } from "@/components/sections/AiSearchEra";
import { SeoAeoGeo } from "@/components/sections/SeoAeoGeo";
import { Results } from "@/components/sections/Results";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { BgiTeaser } from "@/components/sections/BgiTeaser";
import { ContactTeaser } from "@/components/sections/ContactTeaser";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Beauty Growth Lab | AI가 추천하는 브랜드를 만듭니다",
  description:
    "SEO를 넘어 AEO·GEO까지 설계하는 AI Search Optimization 전문 회사. ChatGPT, Perplexity, Gemini가 먼저 추천하는 브랜드를 만듭니다.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <AiSearchEra />
      <SeoAeoGeo />
      <Results />
      <Services />
      <CaseStudies />
      <FaqPreview />
      <BlogPreview />
      <BgiTeaser />
      <ContactTeaser />
    </>
  );
}
