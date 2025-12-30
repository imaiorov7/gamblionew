import DashedBorder from "@/components/shared/dashed-border";
import { Description, H1, Title } from "@/components/ui/typography";

const cookieSections = [
  {
    title: "1. What Are Cookies?",
    content:
      "Cookies are small text files that are stored on your device when you visit a website. They are commonly used to ensure websites function correctly, improve security, and provide a better user experience.",
  },
  {
    title: "2. How Gamblio Uses Cookies",
    content:
      "The Gamblio website uses only strictly necessary cookies. These cookies are essential for the proper functioning of the website and cannot be switched off. We do not use cookies for: Tracking users across pages; Analytics or performance measurement; Marketing or advertising; Profiling or behavioral analysis; or Third-party tracking.",
  },
  {
    title: "3. Types of Cookies We Use",
    content:
      "Strictly Necessary Cookies: These cookies are required for core website functionality, such as: Enabling basic navigation and page access; Maintaining website security; and Ensuring stable and reliable operation. Because these cookies are essential, they do not require user consent under applicable cookie regulations.",
  },
  {
    title: "4. Third-Party Cookies",
    content: "Gamblio does not use third-party cookies on its website.",
  },
  {
    title: "5. Managing Cookies",
    content:
      "Since Gamblio only uses necessary cookies, there is no option to disable them via the website. However, you can control or delete cookies through your browser settings. Please note that disabling necessary cookies may impact website functionality.",
  },
  {
    title: "6. Changes to This Policy",
    content:
      "We may update this Cookie Policy from time to time to reflect changes in legal requirements or website functionality. Any updates will be published on this page with a revised 'Last updated' date.",
  },
  {
    title: "7. Contact Us",
    content:
      "If you have any questions about this Cookie Policy or how we use cookies, please contact us at: Email: info@gamblio.ai | Company: 'GAMBLIO' LLC PODGORICA | Registered office: Miloja Pavlovića Street No. 110, Podgorica, Montenegro | TIN: 03683923",
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
          Last updated: 30.12.2025
        </Description>
      </DashedBorder>
      <DashedBorder sides="all">
        <div className="w-full  space-y-6">
          {cookieSections.map((section, index) => (
            <DashedBorder
              key={index}
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
