import Chat from "@/components/services/chat";
import CTASection from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import Hero from "@/components/hero";
import TrustedBy from "@/components/trusted-by";
import { ServicesSection } from "@/components/services/services-section";
import { HeroVideoDialog } from "@/components/video-dialog";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <div className="relative md:mx-7 mx-3 border-x">
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="Hero Video"
        />
      </div>
      <TrustedBy></TrustedBy>
    
      <ServicesSection></ServicesSection>
      <div className="w-full p-5 md:p-24 bg-muted">
        <h1 className="text-muted-foreground">Who we are</h1>
        <h1 className="md:text-2xl font-medium">At Gamblio, we believe technology should feel personal. That’s why our solutions go beyond efficiency—they are designed to spark engagement, simplify complex processes, and create moments of genuine connection. With every tool we develop, our mission is to empower businesses to not only reach their audiences but to truly resonate with them.</h1>
      </div>
      <FAQSection></FAQSection>
      <CTASection></CTASection>
    </>
  );
}

const features = [
  {
    name: "24/7 Intelligent Assistant",
    description: "We automatically save your files as you type.",
    href: "#",
    className: " border-b border-r",
    cta: "Learn more",
    background: <Chat></Chat>,
  },
  {
    name: "Next-Level Game Recommendations",
    description: "Get notified when something happens.",
    href: "#",
    className: " border-b ",
    cta: "Learn more",
    background: (
      <div className="relative flex h-[300px] w-full items-center justify-center  overflow-hidden">
        {/* Vertical gradient line */}
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2  h-32 bg-gradient-to-b from-[var(--color)] to-[var(--color-transparent)]"></div>

        {/* Chart SVG */}
        <svg
          width="600"
          height="200"
          viewBox="0 0 600 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(3, 146, 160,0.3)" />
              <stop offset="100%" stopColor="rgba(3, 146, 160,0)" />
            </linearGradient>
          </defs>

          {/* Filled gradient area */}
          <path
            d="M 0 157.33 C 20,153.07 60,138.13 100,136 C 120,138.13 160,153.07 200,146.67 C 220,138.13 260,110.4 300,104 C 320,106.13 360,118.93 400,114.67 C 420,108.27 460,97.6 500,82.67 L 600 40 L 600,200 L 0,200 Z"
            fill="url(#lineGradient)"
            opacity="1"
          />

          {/* Line stroke */}
          <path
            d="M 0 157.33 C 20,153.07 60,138.13 100,136 C 120,138.13 160,153.07 200,146.67 C 220,138.13 260,110.4 300,104 C 320,106.13 360,118.93 400,114.67 C 420,108.27 460,97.6 500,82.67 L 600 40"
            stroke="var(--primary)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Circles (pulsing effect) */}
          <circle cx="300" cy="104" r="4" fill="var(--primary)" />
          <circle
            cx="300"
            cy="104"
            r="10"
            stroke="var(--primary)"
            strokeWidth="2"
            fill="none"
            opacity="0.66"
          />
          <circle
            cx="300"
            cy="104"
            r="10"
            stroke="var(--primary)"
            strokeWidth="2"
            fill="none"
            opacity="0.06"
          />
          <circle
            cx="300"
            cy="104"
            r="10"
            stroke="var(--primary)"
            strokeWidth="2"
            fill="none"
            opacity="0.31"
          />
        </svg>
      </div>
    ),
  },
  {
    name: "Advanced Analytics",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    className: " border-r md:col-span-2",
    cta: "Learn more",
    
  },
];
