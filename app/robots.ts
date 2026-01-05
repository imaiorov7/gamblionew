import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://gamblio.ai";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/under-construction", "/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
