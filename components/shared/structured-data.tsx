interface StructuredDataProps {
  type?: "Organization" | "WebSite" | "SoftwareApplication" | "FAQPage";
  data?: Record<string, unknown>;
}

export function StructuredData({
  type = "Organization",
  data,
}: StructuredDataProps) {
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gamblio",
    legalName: "GAMBLIO LLC",
    url: "https://gamblio.ai",
    logo: "https://gamblio.ai/images/logo-dark.svg",
    description:
      "AI-driven platform built exclusively for gambling operators: designed to reduce churn, improve retention rate, increase player value, and cut operational costs.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Miloja Pavlovića Street No. 110",
      addressLocality: "Podgorica",
      addressCountry: "ME",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@gamblio.ai",
      contactType: "Customer Service",
    },
    sameAs: [
      "https://instagram.com/gamblio.ai",
      "https://linkedin.com/company/gamblio",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gamblio",
    url: "https://gamblio.ai",
    description:
      "AI-driven platform built exclusively for gambling operators: designed to reduce churn, improve retention rate, increase player value, and cut operational costs.",
    publisher: {
      "@type": "Organization",
      name: "Gamblio",
    },
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Gamblio Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "AI-powered platform for gambling operators including Analytics, Predict, uChoose, and Care modules.",
    featureList: [
      "Real-time analytics and business intelligence",
      "AI-powered player behavior prediction",
      "Personalized game recommendations",
      "AI customer support and chat automation",
    ],
  };

  let schema: Record<string, unknown> = baseOrganization;

  if (type === "WebSite") {
    schema = websiteSchema;
  } else if (type === "SoftwareApplication") {
    schema = softwareApplicationSchema;
  } else if (type === "FAQPage" && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqItems || [],
    };
  }

  // Merge custom data if provided
  const finalSchema = data ? { ...schema, ...data } : schema;

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD structured data
      dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
    />
  );
}
