export interface EducationCase {
  slug: string;
  title: string;
  audience: string;
  duration: string;
  toolsUsed: string[];
  outcome: string;
  expectedChange: string[];
  disclaimer: string;
}

export const educationCases: EducationCase[] = [
  {
    slug: "ai-era-sns-marketing",
    title: "AI 시대 뷰티샵 SNS 마케팅 실전",
    audience: "40~50대 뷰티 원장님",
    duration: "3시간 특강",
    toolsUsed: ["ChatGPT", "Canva", "CapCut"],
    outcome: "인스타 카드뉴스와 릴스 대본 완성",
    expectedChange: [
      "ChatGPT로 게시물 문구를 스스로 만들 수 있습니다",
      "Canva로 카드뉴스 한 장을 처음부터 끝까지 완성합니다",
      "CapCut으로 자막 있는 짧은 릴스를 저장까지 해봅니다",
    ],
    disclaimer: "실제 수강생 후기는 준비 중입니다. 위 내용은 교육 과정과 기대할 수 있는 변화를 안내한 것입니다.",
  },
  {
    slug: "capcut-basic-class",
    title: "캡컷 실전 기초 클래스",
    audience: "영상 편집을 처음 접하는 원장님",
    duration: "반일 워크숍",
    toolsUsed: ["CapCut"],
    outcome: "고객 후기 릴스 한 편 완성",
    expectedChange: [
      "영상 불러오기부터 자르기, 자막까지 순서대로 따라 할 수 있습니다",
      "완성한 영상을 인스타그램에 직접 업로드해봅니다",
      "다음 릴스는 혼자서도 시작할 수 있다는 자신감이 생깁니다",
    ],
    disclaimer: "실제 수강생 후기는 준비 중입니다. 위 내용은 교육 과정과 기대할 수 있는 변화를 안내한 것입니다.",
  },
  {
    slug: "miricanvas-promo-class",
    title: "미리캔버스 홍보물 제작 클래스",
    audience: "이벤트 포스터·가격표를 직접 만들고 싶은 원장님",
    duration: "소규모 그룹 교육",
    toolsUsed: ["미리캔버스"],
    outcome: "이벤트 포스터와 가격표 시안 완성",
    expectedChange: [
      "매장 컬러에 맞춘 포스터 템플릿을 직접 고를 수 있습니다",
      "가격표와 메뉴판을 계절마다 스스로 업데이트할 수 있습니다",
      "인쇄용 파일까지 저장하는 방법을 익힙니다",
    ],
    disclaimer: "실제 수강생 후기는 준비 중입니다. 위 내용은 교육 과정과 기대할 수 있는 변화를 안내한 것입니다.",
  },
];

export function getEducationCaseBySlug(slug: string) {
  return educationCases.find((item) => item.slug === slug);
}
