import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact Us - Get in Touch with Gamblio",
  description:
    "Ready to optimize efficiency, scale, engagement and unlock the power of AI-driven insights? Contact Gamblio to see how we can help transform your gambling operations with analytics, predictions, recommendations, and AI-powered customer support.",
  path: "/contact-us",
  keywords: [
    "contact Gamblio",
    "gambling platform demo",
    "casino software consultation",
    "gambling AI consultation",
    "request demo",
    "gambling technology contact",
    "casino analytics inquiry",
  ],
});

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
