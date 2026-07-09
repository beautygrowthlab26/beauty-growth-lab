export interface ServicePackage {
  slug: string;
  order: number;
  name: string;
  nameEn: string;
  tagline: string;
  duration: string;
  eyebrow: string;
  outcomes: string[];
  includes: { title: string; description: string }[];
  process: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  idealFor: string;
}

export const services: ServicePackage[] = [
  {
    slug: "ai-search-start",
    order: 1,
    name: "AI Search Start",
    nameEn: "AI Search Start",
    tagline: "AI 검색 기반 구축",
    duration: "2주",
    eyebrow: "01 · 시작",
    idealFor: "AI 검색에 처음 노출을 시작하려는 브랜드",
    outcomes: [
      "ChatGPT·Perplexity·Gemini가 브랜드를 인식하고 답변에 인용하기 시작합니다",
      "네이버·구글 검색과 지도(플레이스)에서 동시에 발견되는 구조를 갖춥니다",
      "브랜드 키워드로 검색했을 때 공식 정보가 가장 먼저 나옵니다",
    ],
    includes: [
      { title: "AI 브랜드 진단", description: "현재 AI 검색 노출 현황과 경쟁 구도를 진단하고 우선순위를 설계합니다" },
      { title: "AI 검색 친화 홈페이지", description: "SEO·AEO·GEO 구조를 모두 충족하는 시맨틱 홈페이지를 구축합니다" },
      { title: "SEO 기본 설계", description: "메타데이터, 사이트맵, 크롤링 구조 등 검색엔진 기본기를 완성합니다" },
      { title: "AEO 질의응답 구조", description: "실제 고객이 묻는 질문에 AI가 바로 인용할 수 있는 답변 구조를 만듭니다" },
      { title: "GEO 생성형 최적화", description: "LLM이 브랜드를 이해하고 요약·추천하기 쉬운 콘텐츠 구조를 설계합니다" },
      { title: "FAQ 설계", description: "독립 URL과 스키마를 갖춘 FAQ 페이지를 구축합니다" },
      { title: "플레이스·서비스 페이지", description: "지역 검색과 서비스별 검색에 대응하는 페이지를 구축합니다" },
      { title: "브랜드 키워드 설계", description: "AI와 검색엔진이 브랜드를 연결할 핵심 키워드 체계를 설계합니다" },
    ],
    process: [
      { title: "1주차 · 진단 & 설계", description: "AI 검색 노출 진단, 키워드·구조 설계, 정보 아키텍처 확정" },
      { title: "2주차 · 구축 & 배포", description: "홈페이지 구축, 스키마 적용, 검색엔진 등록 및 최종 점검" },
    ],
    faq: [
      {
        question: "AI Search Start는 어떤 브랜드에게 필요한가요?",
        answer:
          "아직 AI 검색(ChatGPT, Perplexity 등)에 브랜드가 전혀 노출되지 않았거나, 홈페이지가 검색엔진 최적화 없이 만들어진 브랜드에게 가장 먼저 필요한 단계입니다.",
      },
      {
        question: "2주 안에 정말 AI 검색에 노출될 수 있나요?",
        answer:
          "2주는 AI가 브랜드를 '읽고 이해할 수 있는 구조'를 완성하는 기간입니다. 실제 인용·추천 노출은 AI 검색엔진의 재크롤링 주기에 따라 이후 몇 주에 걸쳐 나타나기 시작합니다.",
      },
      {
        question: "기존 홈페이지가 있어도 진행할 수 있나요?",
        answer:
          "가능합니다. 기존 홈페이지를 AI 검색 친화 구조로 리빌드하거나, 필요한 스키마·FAQ·서비스 페이지만 추가하는 방식으로도 진행합니다.",
      },
    ],
  },
  {
    slug: "ai-content-system",
    order: 2,
    name: "AI Content System",
    nameEn: "AI Content System",
    tagline: "검색되는 콘텐츠 구축",
    duration: "월간 관리",
    eyebrow: "02 · 성장",
    idealFor: "꾸준히 검색되고 인용되는 콘텐츠 자산이 필요한 브랜드",
    outcomes: [
      "매달 새로운 콘텐츠가 쌓여 AI와 검색엔진이 브랜드를 '살아있는 전문가'로 인식합니다",
      "블로그·플레이스·릴스가 하나의 전략 아래 유기적으로 연결됩니다",
      "매월 발행되는 BGI 리포트로 AI 검색 성과를 숫자로 확인합니다",
    ],
    includes: [
      { title: "콘텐츠 전략 수립", description: "월간 주제 캘린더와 토픽 클러스터를 설계합니다" },
      { title: "블로그 콘텐츠", description: "AI 검색 최적화된 블로그 아티클을 월 단위로 제작합니다" },
      { title: "플레이스 콘텐츠", description: "네이버·구글 플레이스에 최적화된 게시물을 관리합니다" },
      { title: "릴스 기획", description: "숏폼 콘텐츠 기획안과 스크립트를 제공합니다" },
      { title: "AI 검색 최적화", description: "발행되는 모든 콘텐츠에 SEO·AEO·GEO를 동시 적용합니다" },
      { title: "월간 BGI 리포트", description: "Brand Growth Index로 AI 검색 노출·인용 변화를 추적합니다" },
    ],
    process: [
      { title: "매월 1주차 · 전략", description: "지난달 성과 리뷰 및 이번 달 콘텐츠 주제 확정" },
      { title: "매월 2~3주차 · 제작", description: "블로그·플레이스·릴스 기획 콘텐츠 제작 및 발행" },
      { title: "매월 4주차 · 리포트", description: "BGI 리포트 발행 및 다음달 전략 조정" },
    ],
    faq: [
      {
        question: "AI Content System은 최소 몇 개월부터 진행하나요?",
        answer:
          "콘텐츠 자산은 누적될수록 AI 검색 인용 확률이 높아지는 구조이기 때문에, 최소 3개월 단위 진행을 권장합니다.",
      },
      {
        question: "AI Search Start 없이 바로 시작할 수 있나요?",
        answer:
          "가능하지만, AI 검색 친화 구조가 갖춰지지 않은 상태에서는 콘텐츠 효과가 늦게 나타날 수 있어 Start 패키지를 먼저 진행하는 것을 권장합니다.",
      },
    ],
  },
  {
    slug: "ai-brand-dominance",
    order: 3,
    name: "AI Brand Dominance",
    nameEn: "AI Brand Dominance",
    tagline: "AI가 추천하는 브랜드 구축",
    duration: "6개월",
    eyebrow: "03 · 지배력",
    idealFor: "카테고리 1순위로 AI에게 추천받고 싶은 브랜드",
    outcomes: [
      "관련 질문에서 AI가 경쟁사보다 브랜드를 먼저, 더 자주 언급합니다",
      "브랜드에 대한 정보가 Knowledge Graph 수준으로 구조화되어 신뢰도가 축적됩니다",
      "6개월 후, 카테고리 내 AI 검색 점유율에서 확실한 우위를 갖습니다",
    ],
    includes: [
      { title: "브랜드 전략", description: "카테고리 내 포지셔닝과 AI 검색 관점의 브랜드 스토리를 설계합니다" },
      { title: "Knowledge Graph 구축", description: "AI가 브랜드 정보를 하나의 실체로 인식하도록 구조화된 데이터를 구축합니다" },
      { title: "Authority 구축", description: "권위 있는 채널·매체와의 연결을 통해 브랜드 신뢰 신호를 축적합니다" },
      { title: "고급 Schema 설계", description: "Organization, Service, Review 등 전방위 스키마를 정교하게 설계합니다" },
      { title: "FAQ 100", description: "카테고리 전체를 커버하는 100개 질의응답 콘텐츠 허브를 구축합니다" },
      { title: "콘텐츠 허브", description: "토픽 클러스터 기반의 대규모 콘텐츠 허브를 구축합니다" },
      { title: "AI 검색 고도화", description: "AI 검색 노출·인용을 지속적으로 모니터링하고 고도화합니다" },
      { title: "브랜드 리포트", description: "월간 브랜드 성과와 AI 검색 점유율을 리포트합니다" },
      { title: "경쟁사 분석", description: "경쟁 브랜드의 AI 검색 노출 전략을 분석하고 대응합니다" },
    ],
    process: [
      { title: "1개월차 · 전략 & 진단", description: "브랜드 전략 수립, 경쟁사 분석, Knowledge Graph 설계" },
      { title: "2~4개월차 · 구축", description: "Authority·Schema·FAQ100·콘텐츠 허브 구축" },
      { title: "5~6개월차 · 고도화", description: "성과 데이터 기반 고도화 및 지배력 강화" },
    ],
    faq: [
      {
        question: "AI Brand Dominance는 어떤 브랜드에게 적합한가요?",
        answer:
          "이미 AI 검색 기반이 구축되어 있고, 카테고리 내에서 압도적인 1순위 추천 브랜드가 되고자 하는 곳에 적합합니다.",
      },
      {
        question: "6개월 후에도 계속 관리가 필요한가요?",
        answer:
          "6개월은 지배력을 만드는 기간입니다. 이후에는 AI Content System 수준의 유지 관리로 전환해 지배력을 유지할 수 있습니다.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
