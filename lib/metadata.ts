import type { Metadata } from "next";

const siteConfig = {
  name: "Gamblio",
  description:
    "AI-driven platform built exclusively for gambling operators: designed to reduce churn, improve retention rate, increase player value, and cut operational costs.",
  url: "https://gamblio.ai",
  ogImage: "/images/logo-dark.svg",
  twitterHandle: "@gamblio",
  company: {
    name: "GAMBLIO LLC",
    address: "Miloja Pavlovića Street No. 110, Podgorica, Montenegro",
    email: "support@gamblio.ai",
  },
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;

  const fullTitle = `${title} | ${siteConfig.name}`;
  const ogImageUrl = `${siteConfig.url}${siteConfig.ogImage}`;

  return {
    title,
    description,
    keywords: keywords?.length ? keywords.join(", ") : undefined,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: siteConfig.twitterHandle,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}
