export interface Program {
  slug: string;
  order: number;
  name: string;
  badge?: string;
  tagline: string;
  idealFor: string;
  composition: string[];
  format: string[];
  priceLabel: string;
  ctaLabel: string;
}

export const programs: Program[] = [
  {
    slug: "digital-basics",
    order: 1,
    name: "원장님 디지털 기초 클래스",
    tagline: "처음부터 천천히, 한 가지 툴부터 시작합니다",
    idealFor: "컴퓨터와 스마트폰 편집이 익숙하지 않고 처음부터 천천히 배우고 싶은 원장님",
    composition: [
      "캡컷 또는 미리캔버스 또는 캔바 중 1개 선택",
      "기본 화면과 필수 기능",
      "실습 결과물 1개 완성",
      "교육 자료 제공",
      "교육 후 7일 질문 지원",
    ],
    format: ["소규모 그룹 교육", "출장 교육", "온라인 교육 선택 가능"],
    priceLabel: "교육 인원과 지역에 따라 상담",
    ctaLabel: "기초 클래스 상담 신청",
  },
  {
    slug: "ai-sns-practice",
    order: 2,
    name: "AI SNS 콘텐츠 실전 클래스",
    badge: "가장 인기 있는 교육",
    tagline: "AI와 편집툴을 연결해 한 달 콘텐츠를 직접 완성합니다",
    idealFor: "AI와 편집툴을 연결해 한 달 콘텐츠를 직접 만들고 싶은 원장님",
    composition: [
      "ChatGPT 콘텐츠 기획",
      "Canva 또는 미리캔버스 디자인",
      "CapCut 릴스 제작",
      "인스타 업로드 실습",
      "30일 콘텐츠 캘린더",
      "프롬프트 자료 제공",
      "30일 SNS 습관 챌린지 제공",
    ],
    format: ["3시간 특강", "반일 워크숍", "소규모 그룹 가능"],
    priceLabel: "교육 목적과 인원에 따라 맞춤 견적",
    ctaLabel: "AI SNS 클래스 상담 신청",
  },
  {
    slug: "one-on-one-coaching",
    order: 3,
    name: "매장 맞춤 1:1 디지털 코칭",
    tagline: "우리 매장 계정과 콘텐츠를 기준으로 개별 지도",
    idealFor: "우리 매장 계정과 콘텐츠를 기준으로 개별 지도를 받고 싶은 원장님",
    composition: [
      "매장 SNS 진단",
      "원장님 디지털 활용 수준 진단",
      "필요한 툴 선정",
      "캡컷·캔바·미리캔버스 맞춤 교육",
      "실제 매장 콘텐츠 제작",
      "인스타 프로필 점검",
      "콘텐츠 주제 설계",
      "복습 자료 제공",
      "일정 기간 피드백",
    ],
    format: ["1:1 방문 또는 온라인 코칭"],
    priceLabel: "맞춤 상담 후 안내",
    ctaLabel: "1:1 코칭 상담 신청",
  },
];

export function getProgramBySlug(slug: string) {
  return programs.find((program) => program.slug === slug);
}
