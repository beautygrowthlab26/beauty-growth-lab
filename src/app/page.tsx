import { Hero } from "@/components/sections/Hero";
import { ProblemEmpathy } from "@/components/sections/ProblemEmpathy";
import { CoreProgramsTools } from "@/components/sections/CoreProgramsTools";
import { AiSnsEducation } from "@/components/sections/AiSnsEducation";
import { TeachingMethod } from "@/components/sections/TeachingMethod";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { ProgramsPricing } from "@/components/sections/ProgramsPricing";
import { EducationCases } from "@/components/sections/EducationCases";
import { FounderIntro } from "@/components/sections/FounderIntro";
import { ConsultCta } from "@/components/sections/ConsultCta";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { BottomCta } from "@/components/sections/BottomCta";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Beauty Growth Lab | 40·50대 뷰티 원장님을 위한 AI·SNS 실전 교육",
  description:
    "캡컷·미리캔버스·캔바·AI로 우리 매장 콘텐츠를 직접 만드는 실전 교육. 40·50대 뷰티 원장님의 눈높이에서 하나씩 알려드립니다.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemEmpathy />
      <CoreProgramsTools />
      <AiSnsEducation />
      <TeachingMethod />
      <TargetAudience />
      <GalleryPreview />
      <ProgramsPricing />
      <EducationCases />
      <FounderIntro />
      <ConsultCta />
      <FaqPreview />
      <BottomCta />
    </>
  );
}
