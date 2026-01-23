import type { Metadata } from "next";
import DashedBorder from "@/components/shared/dashed-border";
import { Description, H1, Title } from "@/components/ui/typography";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Cookie Policy - Gamblio Website Cookie Information",
  description:
    "Gamblio Cookie Policy explains how we use cookies on our website. We only use strictly necessary cookies essential for website functionality. No tracking, analytics, or third-party cookies.",
  path: "/cookie-policy",
  keywords: [
    "Gamblio cookie policy",
    "website cookies",
    "cookie information",
    "privacy cookies",
  ],
  noIndex: false,
});

const cookieSections = [
  {
    title: "1. What Are Cookies?",
    content:
      "Cookies are small text files that are stored on your device when you visit a website. They are commonly used to ensure websites function correctly, improve security, and provide a better user experience. This Cookie Policy is adopted in accordance with Regulation (EU) 2016/679 (GDPR), Directive 2002/58/EC (ePrivacy Directive), and the Law on Personal Data Protection of Montenegro. The processing of strictly necessary cookies is based on Article 6(1)(f) of the GDPR (legitimate interests), as such cookies are indispensable for the technical operation, security, and integrity of the website. For more information on how we process personal data, please refer to our Privacy Policy.",
  },
  {
    title: "2. How Gamblio Uses Cookies",
    content:
      "The Gamblio website uses only strictly necessary cookies. These cookies are essential for the proper functioning of the website and cannot be disabled. We do not use cookies for: Tracking users across pages; Analytics or performance measurement; Marketing or advertising; Profiling or behavioral analysis; or Third-party tracking.",
  },
  {
    title: "3. Types of Cookies We Use",
    content:
      "Strictly Necessary Cookies - These cookies are required for core website functionality, such as: Enabling basic navigation and page access; Maintaining website security; and Ensuring stable and reliable operation. Because these cookies are essential, they do not require user consent under applicable cookie regulations.",
  },
  {
    title: "4. Third-Party Cookies",
    content: "Gamblio does not use third-party cookies on its website.",
  },
  {
    title: "5. Managing Cookies",
    content:
      "Since Gamblio only uses necessary cookies, there is no option to disable them via the website. However, you can control or delete cookies through your browser settings. Please note that disabling necessary cookies may impact website functionality. Strictly necessary cookies are either session-based and deleted once the browsing session ends, or stored for a limited period strictly required to ensure website security and functionality. Personal data shall be kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data are processed.",
  },
  {
    title: "6. Changes to This Policy",
    content:
      'We may update this Cookie Policy from time to time to reflect changes in legal requirements or website functionality. Any updates will be published on this page with a revised "Last updated" date.',
  },
  {
    title: "7. Contact Us",
    content:
      'If you have any questions about this Cookie Policy or how we use cookies, please contact us at: Email: legal@gamblio.ai | Company: "GAMBLIO" LLC PODGORICA | Registered office: Miloja Pavlovića Street No. 110, Podgorica, Montenegro | TIN: 03683923',
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="w-full my-24 border-b-0">
      <DashedBorder
        sides="all"
        className="flex flex-col items-center gap-4 py-12"
      >
        <H1 className="font-medium text-center md:text-3xl lg:text-4xl">
          Cookie Policy
        </H1>
        <Description className="text-base text-center text-muted-foreground md:w-1/2">
          Effective date: 01. June 2025 | Last updated: 15. January 2026
        </Description>
      </DashedBorder>
      <DashedBorder sides="all">
        <div className="w-full  space-y-6">
          {cookieSections.map((section) => (
            <DashedBorder
              key={section.title}
              sides="all"
              className="flex flex-col items-start gap-4 p-6"
            >
              <Title className="text-xl font-semibold">{section.title}</Title>
              <Description className="text-left text-muted-foreground text-balance">
                {section.content}
              </Description>
            </DashedBorder>
          ))}
        </div>
      </DashedBorder>
    </div>
  );
}
