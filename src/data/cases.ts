export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  servicesUsed: string[];
  duration: string;
  summary: string;
  challenge: string;
  approach: string[];
  results: { label: string; before: string; after: string }[];
  quote?: { text: string; role: string };
}

export const cases: CaseStudy[] = [
  {
    slug: "skincare-d2c-brand",
    client: "스킨케어 D2C 브랜드 A사",
    industry: "더모코스메틱 · D2C",
    servicesUsed: ["AI Search Start", "AI Content System"],
    duration: "4개월",
    summary: "성분 관련 질문에서 AI 검색 언급 0회 → 월 42회로 전환한 더모코스메틱 브랜드",
    challenge:
      "제품력은 뛰어났지만 '민감성 피부 진정 성분' 등 카테고리 질문에서 AI 검색 답변에 브랜드가 전혀 언급되지 않았습니다. 홈페이지는 있었지만 검색엔진과 AI 모두에게 구조적으로 읽히지 않는 상태였습니다.",
    approach: [
      "AI 브랜드 진단으로 경쟁 브랜드 대비 노출 격차 정량화",
      "성분·효능 중심 FAQ 100여 개를 독립 URL과 스키마로 재구축",
      "월간 콘텐츠 시스템으로 성분 원료 아티클을 토픽 클러스터로 확장",
    ],
    results: [
      { label: "AI 검색 언급 횟수(월)", before: "0회", after: "42회" },
      { label: "브랜드 키워드 검색 유입", before: "월 320명", after: "월 2,150명" },
      { label: "FAQ 페이지 자연 유입", before: "0", after: "월 890명" },
    ],
    quote: {
      text: "우리가 직접 설명하지 않아도 AI가 우리 브랜드의 강점을 정확히 요약해서 답변한다는 게 신기했습니다.",
      role: "브랜드 마케팅 팀장",
    },
  },
  {
    slug: "dermatology-clinic",
    client: "피부과 의원 B",
    industry: "메디컬 뷰티 · 피부과",
    servicesUsed: ["AI Search Start", "AI Brand Dominance"],
    duration: "6개월",
    summary: "지역 3위였던 피부과가 'OO동 피부과 추천' AI 질문에서 1순위로 언급되기까지",
    challenge:
      "동일 상권에 경쟁 의원이 많아 블로그 리뷰만으로는 차별화가 어려웠고, AI 검색에서는 경쟁 의원이 먼저 언급되는 상황이었습니다.",
    approach: [
      "Knowledge Graph 구축으로 의료진·시술·후기 정보를 구조화된 데이터로 연결",
      "Authority 구축으로 권위 있는 의료 정보 채널과의 연결 신호 확보",
      "경쟁 의원 대비 AI 검색 언급 점유율을 매월 추적하고 콘텐츠 허브 고도화",
    ],
    results: [
      { label: "지역 추천 질문 AI 언급 순위", before: "3위", after: "1위" },
      { label: "신규 상담 문의(월)", before: "38건", after: "127건" },
      { label: "AI 검색 브랜드 점유율", before: "12%", after: "58%" },
    ],
  },
  {
    slug: "hair-nail-local-chain",
    client: "헤어·네일 로컬 프랜차이즈 C",
    industry: "로컬 뷰티 · 프랜차이즈",
    servicesUsed: ["AI Content System"],
    duration: "3개월",
    summary: "매장 10곳의 플레이스·콘텐츠를 하나의 AI 검색 전략으로 통합",
    challenge:
      "매장마다 플레이스 관리와 콘텐츠 발행이 제각각이라 브랜드 전체의 AI 검색 신뢰도가 분산되고 있었습니다.",
    approach: [
      "전 매장 공통 콘텐츠 전략 캘린더 수립",
      "매장별 플레이스 최적화 및 릴스 기획 표준화",
      "월간 BGI 리포트로 매장별 성과를 비교 관리",
    ],
    results: [
      { label: "플레이스 평균 노출수(월)", before: "1,200회", after: "6,400회" },
      { label: "예약 전환율", before: "4.1%", after: "9.8%" },
      { label: "AI 검색 인용 매장 수", before: "1곳", after: "9곳" },
    ],
  },
];

export function getCaseBySlug(slug: string) {
  return cases.find((item) => item.slug === slug);
}
