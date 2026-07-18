export interface Program {
  slug: string;
  order: number;
  title: string;
  featured: boolean;
  badge?: string;
  audience: string;
  price: string;
  duration: string;
  description: string;
  tools?: string[];
  toolsLabel?: string;
  curriculum: string[];
  outcomesLabel: string;
  outcomes: string[];
  ctaLabel: string;
}

export const programs: Program[] = [
  {
    slug: "ai-content-starter",
    order: 1,
    title: "AI 콘텐츠 시작 클래스",
    featured: false,
    audience: "AI와 디자인·영상 편집을 처음 시작하는 사장님",
    price: "99,000원",
    duration: "1인 기준 · 2시간 30분",
    description: "가장 필요한 도구 한 가지를 선택해 기초 사용법부터 실제 결과물 완성까지 함께합니다.",
    tools: ["캡컷", "캔바", "미리캔버스"],
    toolsLabel: "선택 가능 도구",
    curriculum: [
      "AI로 매장 홍보문구 만들기",
      "선택한 도구의 기본 기능 익히기",
      "사진과 문구 배치하기",
      "저장 및 SNS 업로드 방법",
      "실습 결과물 1개 완성",
    ],
    outcomesLabel: "결과물 예시",
    outcomes: ["매장 홍보 이미지", "이벤트 포스터", "짧은 홍보영상 중 1개"],
    ctaLabel: "기초 클래스 문의하기",
  },
  {
    slug: "ai-content-complete",
    order: 2,
    title: "AI 콘텐츠 완성 클래스",
    featured: true,
    badge: "가장 추천",
    audience: "홍보 이미지와 릴스를 직접 만들고 싶은 사장님",
    price: "220,000원",
    duration: "1인 기준 · 4시간",
    description: "ChatGPT부터 디자인과 영상 편집까지 연결해 우리 매장에 필요한 콘텐츠를 한 번에 완성합니다.",
    tools: ["ChatGPT 또는 AI 글쓰기 도구", "캔바 또는 미리캔버스", "캡컷"],
    toolsLabel: "활용 도구",
    curriculum: [
      "우리 매장에 맞는 콘텐츠 주제 찾기",
      "AI로 홍보문구와 릴스 대본 작성",
      "홍보 이미지 또는 이벤트 포스터 제작",
      "사진과 영상을 활용한 릴스 제작",
      "자막·음악·효과 적용",
      "SNS 게시글과 업로드 방법",
      "수업 후 다시 활용할 수 있는 실습자료 제공",
    ],
    outcomesLabel: "결과물",
    outcomes: ["홍보문구 1개", "홍보 이미지 1개", "짧은 홍보영상 1개"],
    ctaLabel: "완성 클래스 신청하기",
  },
  {
    slug: "ai-content-system",
    order: 3,
    title: "우리 매장 AI 콘텐츠 시스템",
    featured: false,
    audience: "매장에 맞는 콘텐츠 운영 방법을 체계적으로 만들고 싶은 사장님",
    price: "550,000원부터",
    duration: "2회 과정 · 총 6시간",
    description:
      "단순히 콘텐츠 한 개를 만드는 것을 넘어 사장님이 혼자서도 한 달간 꾸준히 홍보할 수 있는 AI 콘텐츠 제작 시스템을 함께 구축합니다.",
    curriculum: [
      "현재 매장과 SNS 채널 진단",
      "핵심 고객과 홍보 방향 설정",
      "매장별 콘텐츠 주제 30개 설계",
      "AI 홍보문구 프롬프트 제작",
      "매장 맞춤형 캔바·미리캔버스 템플릿",
      "캡컷 영상 제작 구조 설계",
      "한 달 콘텐츠 캘린더 제작",
      "채널별 콘텐츠 재활용 방법",
      "수업 후 피드백 및 보완",
    ],
    outcomesLabel: "제공 자료",
    outcomes: ["매장 맞춤 콘텐츠 주제 30개", "개인 맞춤형 AI 프롬프트", "디자인 템플릿", "릴스 제작 가이드", "한 달 콘텐츠 계획표"],
    ctaLabel: "맞춤 과정 상담하기",
  },
];

export const programGuide = [
  { condition: "도구를 처음 사용한다면", programSlug: "ai-content-starter" },
  { condition: "이미지와 영상을 모두 완성하고 싶다면", programSlug: "ai-content-complete" },
  { condition: "우리 매장만의 운영 체계를 만들고 싶다면", programSlug: "ai-content-system" },
];

export function getProgramBySlug(slug: string) {
  return programs.find((program) => program.slug === slug);
}
