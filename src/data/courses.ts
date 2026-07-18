export interface Course {
  slug: string;
  routeSlug: string;
  order: number;
  toolName: string;
  name: string;
  tagline: string;
  eyebrow: string;
  description: string;
  workflow?: { step: string; tool: string }[];
  curriculum: string[];
  outcomes: string[];
  highlight?: string;
  idealFor: string;
  ctaLabel: string;
}

export const courses: Course[] = [
  {
    slug: "capcut",
    routeSlug: "capcut",
    order: 1,
    toolName: "캡컷",
    name: "캡컷 실전 교육",
    tagline: "스마트폰으로 릴스 한 편 완성하기",
    eyebrow: "TOOL 01 · CapCut",
    description:
      "복잡한 영상 기술보다 촬영한 영상과 사진을 불러와 자르고, 자막을 넣고, 음악을 조절한 뒤 인스타그램에 올리는 과정까지 배웁니다.",
    curriculum: [
      "영상과 사진 불러오기",
      "필요 없는 부분 자르기",
      "영상 순서 바꾸기",
      "자동 자막 넣기",
      "자막 크기와 위치 조절",
      "음악과 원본 소리 조절",
      "매장 로고 넣기",
      "릴스 화면 비율 맞추기",
      "썸네일 만들기",
      "고화질로 저장하기",
      "인스타그램에 업로드하기",
    ],
    outcomes: ["관리 과정 릴스", "고객 후기 릴스", "전후 비교 릴스", "원장님 소개 영상", "이벤트 홍보 영상"],
    idealFor: "스마트폰 사용은 익숙하지만 영상 편집은 처음인 원장님",
    ctaLabel: "캡컷 교육 자세히 보기",
  },
  {
    slug: "miricanvas",
    routeSlug: "canva-miricanvas",
    order: 2,
    toolName: "미리캔버스",
    name: "미리캔버스 실전 교육",
    tagline: "우리 매장 홍보물을 직접 만드는 방법",
    eyebrow: "TOOL 02 · 미리캔버스",
    description:
      "한국형 템플릿과 한글 환경이 익숙한 미리캔버스를 활용해 매장에서 자주 필요한 디자인을 직접 만듭니다.",
    curriculum: [
      "템플릿 검색하는 방법",
      "무료 요소와 유료 요소 구분",
      "사진 교체하기",
      "글자 수정하기",
      "글씨 크기와 정렬",
      "매장 컬러 적용하기",
      "이벤트 포스터 만들기",
      "가격표와 메뉴판 만들기",
      "네이버 플레이스 소식 이미지 만들기",
      "전단지와 현수막 디자인",
      "인쇄용 PDF 저장하기",
      "이미지 화질을 유지해 저장하기",
    ],
    outcomes: ["이벤트 포스터", "관리 가격표", "네이버 플레이스 소식", "고객 후기 카드", "전단지", "현수막 시안"],
    idealFor: "이벤트 포스터·가격표·인쇄물을 자주 만들어야 하는 원장님",
    ctaLabel: "미리캔버스 교육 자세히 보기",
  },
  {
    slug: "canva",
    routeSlug: "canva-miricanvas",
    order: 3,
    toolName: "캔바",
    name: "캔바 실전 교육",
    tagline: "브랜드가 느껴지는 SNS 콘텐츠 만들기",
    eyebrow: "TOOL 03 · Canva",
    description:
      "캔바의 템플릿과 AI 기능을 활용해 인스타그램 카드뉴스, 릴스 표지, 후기 이미지와 브랜드 콘텐츠를 만듭니다.",
    curriculum: [
      "캔바 기본 화면 이해",
      "템플릿 찾고 저장하기",
      "사진과 영상 교체하기",
      "브랜드 컬러 설정하기",
      "자주 쓰는 폰트 정하기",
      "카드뉴스 만들기",
      "인스타 피드 디자인",
      "릴스 표지 제작",
      "고객 후기 이미지 제작",
      "전후 사진 디자인",
      "AI 이미지 생성 기초",
      "한 디자인을 여러 크기로 바꾸기",
      "프레젠테이션과 강의자료 만들기",
    ],
    outcomes: ["카드뉴스", "인스타 피드", "릴스 썸네일", "고객 후기 카드", "전후 사진 템플릿", "브랜드 소개 자료"],
    idealFor: "인스타 카드뉴스, 브랜드 디자인, AI 기능까지 활용하고 싶은 원장님",
    ctaLabel: "캔바 교육 자세히 보기",
  },
  {
    slug: "ai-sns",
    routeSlug: "ai-sns",
    order: 4,
    toolName: "ChatGPT · AI",
    name: "AI SNS 연계 교육",
    tagline: "글쓰기부터 디자인까지, AI와 함께하면 더 쉬워집니다",
    eyebrow: "TOOL 04 · AI SNS",
    description:
      "ChatGPT가 콘텐츠 아이디어와 문구를 만들고, 캔바와 미리캔버스가 디자인을 완성하며, 캡컷이 영상 콘텐츠로 바꿔줍니다. 툴 하나만 배우는 것이 아니라 매장 홍보 콘텐츠가 완성되는 전체 흐름을 배웁니다.",
    workflow: [
      { step: "고객 고민 찾기", tool: "ChatGPT" },
      { step: "게시물 문구 만들기", tool: "ChatGPT" },
      { step: "카드뉴스 · 이벤트 이미지", tool: "Canva · 미리캔버스" },
      { step: "릴스 제작", tool: "CapCut" },
      { step: "인스타 · 플레이스 업로드", tool: "직접 실행" },
    ],
    curriculum: [
      "ChatGPT로 콘텐츠 주제 만들기",
      "고객 고민 10개 찾기",
      "릴스 대본 작성하기",
      "이벤트 문구 만들기",
      "고객 후기 문장 다듬기",
      "블로그 초안 만들기",
      "30일 콘텐츠 캘린더 만들기",
      "Canva에 넣을 카드뉴스 문구 만들기",
    ],
    outcomes: ["30일 콘텐츠 캘린더", "릴스 대본", "이벤트 문구", "카드뉴스 문구 초안"],
    highlight:
      "AI가 원장님의 전문성을 대신하는 것이 아닙니다. 원장님이 가진 경험과 노하우를 고객이 이해하기 쉬운 콘텐츠로 바꾸는 데 AI를 활용합니다.",
    idealFor: "AI와 편집툴을 연결해 한 달 콘텐츠를 직접 만들고 싶은 원장님",
    ctaLabel: "AI SNS 교육 자세히 보기",
  },
];

export function getCoursesByRoute(routeSlug: string) {
  return courses.filter((course) => course.routeSlug === routeSlug).sort((a, b) => a.order - b.order);
}

export function getAllCourseRoutes() {
  return Array.from(new Set(courses.map((course) => course.routeSlug)));
}
