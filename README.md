# Beauty Growth Lab

AI Search Optimization(SEO·AEO·GEO) 회사 Beauty Growth Lab의 홈페이지. Next.js 16(App Router) + TypeScript + Tailwind CSS v4.

## 시작하기

```bash
npm install
npm run dev
```

`http://localhost:3000` (또는 프로젝트 launch 설정 기준 3010 포트)에서 확인할 수 있습니다.

## 환경변수

`.env.local.example`을 복사해 `.env.local`을 만들고 값을 채워주세요.

```bash
cp .env.local.example .env.local
```

- `NEXT_PUBLIC_SITE_URL` — 배포 도메인 (기본값 `https://beautygrowthlab.co.kr`)
- `RESEND_API_KEY` — [Resend](https://resend.com) API 키. 비워두면 문의/BGI 폼 제출 시 실제 메일 발송 대신 서버 콘솔에 로그만 남깁니다. 키를 채워 넣는 즉시 실제 메일 발송으로 전환됩니다.
- `CONTACT_TO_EMAIL` — 문의/BGI 신청 알림을 받을 이메일 주소

## 실제 값으로 교체가 필요한 곳

- `src/lib/seo.ts`의 `siteConfig` — 회사 정보(사업자등록번호, 주소, 연락처 등)는 이미 실제 값이 채워져 있습니다. 도메인이나 대표 이메일이 바뀌면 이 파일만 수정하면 전체 사이트(푸터, 문의 페이지, JSON-LD)에 반영됩니다.
- `content/blog/*.mdx`, `content/faq/*.mdx`, `src/data/cases.ts` — 현재는 샘플 콘텐츠입니다. 실제 블로그 글/FAQ/성공사례가 준비되면 같은 형식으로 교체하거나 파일을 추가하면 자동으로 목록·사이트맵·RSS에 반영됩니다.
- `public/logo.png`, `public/og-default.png` — 아직 실제 로고/OG 이미지 파일이 없습니다. 준비되는 대로 해당 경로에 추가해주세요.

## 콘텐츠 추가 방법

- 블로그 글 추가: `content/blog/<slug>.mdx` 파일을 frontmatter(title, description, date, category, tags)와 함께 추가
- FAQ 추가: `content/faq/<slug>.mdx` 파일을 frontmatter(question, cluster, clusterLabel, order, relatedSlugs)와 함께 추가
- 성공사례 추가: `src/data/cases.ts`의 `cases` 배열에 항목 추가
- 서비스 패키지 내용 수정: `src/data/services.ts`

## 주요 구조

- `src/app` — 라우트 (App Router)
- `src/components/sections` — 홈페이지 10개 섹션
- `src/components/ui` — 공통 UI 컴포넌트
- `src/lib/seo.ts` — 메타데이터/구조화 데이터(JSON-LD) 헬퍼
- `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/feed.xml` — 검색엔진/AI 크롤러용 인프라
