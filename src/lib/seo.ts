import type { Metadata } from "next";

export const siteConfig = {
  name: "Beauty Growth Lab",
  legalName: "뷰티성장연구소",
  ceo: "김지선",
  businessRegistrationNumber: "528-20-02673",
  address: "경기도 광명시 하안로 284, 1211-411",
  phone: "010-2863-1688",
  email: "hello@beautygrowthlab.co.kr",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://beautygrowthlab.co.kr",
  description:
    "40·50대 뷰티 원장님을 위한 캡컷·미리캔버스·캔바·AI 실전 교육 브랜드. 어려운 디지털 마케팅을 원장님 눈높이에서 하나씩 알려드립니다.",
  ogImage: "/og-default.png",
  sameAs: [] as string[],
} as const;

interface BuildMetadataInput {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  ogImage = siteConfig.ogImage,
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "ko_KR",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: siteConfig.ceo,
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressRegion: "경기도",
      addressCountry: "KR",
    },
    areaServed: "KR",
    sameAs: siteConfig.sameAs,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "ko-KR",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

export function faqPageJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    image: input.image ?? `${siteConfig.url}${siteConfig.ogImage}`,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
    },
    mainEntityOfPage: new URL(input.path, siteConfig.url).toString(),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: input.name,
    name: input.name,
    description: input.description,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: "KR",
    url: new URL(input.path, siteConfig.url).toString(),
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#founder`,
    name: siteConfig.ceo,
    jobTitle: "대표",
    worksFor: { "@id": `${siteConfig.url}/#organization` },
    description:
      "해군 여군 장교, 프랜차이즈 카페 운영, 사진·영상 창업 과정을 거쳐 현재 40~50대 뷰티샵 원장님을 위한 AI·캔바·캡컷 실전 교육을 진행하고 있습니다.",
    url: new URL("/about", siteConfig.url).toString(),
  };
}

export function courseJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: input.name,
    description: input.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    url: new URL(input.path, siteConfig.url).toString(),
  };
}
