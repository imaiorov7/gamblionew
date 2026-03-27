import type { Metadata } from "next";
import { CoreFeaturesSection } from "@/components/core-features-section";
import CTASection from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import Hero from "@/components/hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ServicesSection } from "@/components/services/services-section";
import TrustedBy from "@/components/trusted-by";
import { Description, Title } from "@/components/ui/typography";
import { HeroVideoDialog } from "@/components/video-dialog";
import { createMetadata } from "@/lib/metadata";
import { PlayCircle } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "AI to Amplify, Gamblio to Simplify",
  description:
    "AI-driven platform built exclusively for gambling operators: designed to reduce churn, improve retention rate, increase player value, and cut operational costs. Everything you need to skyrocket your operation in one place.",
  path: "/",
  keywords: [
    "gambling AI platform",
    "casino analytics",
    "player retention software",
    "gambling business intelligence",
    "AI for gambling operators",
    "player behavior prediction",
    "VIP detection",
    "churn prevention",
    "game recommendations",
    "AI customer support",
    "gambling technology",
    "online casino solutions",
  ],
});

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      
      {/* 1. FULL SCREEN HERO SECTION */}
      <div className="w-full border-b border-border/40">
        <Hero {...HeroDetails}>
          {/* Passed as a child directly into the Hero component. No ScrollReveal! */}
          <HeroVideoDialog
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            trigger={
              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all border border-border/50 shadow-sm hover:shadow-md font-semibold text-base">
                <PlayCircle className="w-5 h-5 text-primary shrink-0" />
                Watch Preview
              </button>
            }
          />
        </Hero>
      </div>

      {/* 2. SOCIAL PROOF */}
      <section className="w-full pt-0 pb-8 border-b border-border/40">
        <ScrollReveal className="container mx-auto px-4">
          <TrustedBy />
        </ScrollReveal>
      </section>

      {/* 3. CORE FEATURES SECTION */}
      <section className="w-full py-16 md:py-24 bg-muted/5 border-b border-border/40 backdrop-blur-[2px]">
        <ScrollReveal className="container mx-auto px-4">
          <CoreFeaturesSection
            title={
              <>
                Built for <span className="text-primary">gambling</span>. Engineered
                for <span className="text-primary">measurable performance.</span>
              </>
            }
            description={
              <>
                Gamblio unifies analytics, behavior predictions, game
                recommendations, and customer care in one all-around AI solution.
                <br />
                <br />
                <span className="font-semibold text-foreground">
                  No generic software. No noise. Just outcomes that matter.
                </span>
              </>
            }
            features={coreFeatures}
          />
        </ScrollReveal>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="w-full py-16 md:py-24 border-b border-border/40 relative">
        <ScrollReveal className="container mx-auto px-4 relative z-10">
          <ServicesSection />
        </ScrollReveal>
      </section>

      {/* 5. WHO WE ARE SECTION */}
      <section className="w-full py-20 md:py-32 bg-muted/5 border-b border-border/40 scroll-mt-32 backdrop-blur-[2px]" id="who-we-are">
        <ScrollReveal className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <Title className="text-3xl md:text-5xl font-bold tracking-tight">Who we are</Title>
              <Description className="text-lg md:text-2xl font-medium text-foreground">
                Gambling Meets <span className="text-primary">Expertise.</span>
              </Description>
            </div>
            
            <div className="relative p-6 md:p-14 mt-6 md:mt-8 rounded-3xl md:rounded-[2rem] bg-gradient-to-br from-custom-dark to-background border border-border/40 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-primary rounded-b-full opacity-80" />
              <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none rounded-full" />
              
              <Description className="relative z-10 text-base md:text-xl leading-relaxed text-muted-foreground">
                Gamblio was built by industry professionals who understand both sides
                of the table, operational realities and advanced AI capabilities. Our
                team brings together experts in gaming operations, data science,
                machine learning and analytics, united by one mission: to empower
                operators with technology that delivers measurable results.
              </Description>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 6. CERTIFICATIONS SECTION */}
      <section className="w-full py-16 md:py-24 border-b border-border/40">
        <ScrollReveal className="container mx-auto px-4">
          <CoreFeaturesSection
            title={
              <span className="text-3xl md:text-5xl font-bold tracking-tight">
                We operate with <span className="text-primary">excellence</span>
              </span>
            }
            features={certifications}
            className="px-0"
          />
        </ScrollReveal>
      </section>

      {/* 7. FAQ & CTA SECTION */}
      <section className="w-full py-16 md:py-24 bg-muted/5 backdrop-blur-[2px]">
        <div className="container mx-auto px-4 space-y-20 md:space-y-32">
          <ScrollReveal>
            <FAQSection />
          </ScrollReveal>
          
          <ScrollReveal delay={0.1} className="max-w-6xl mx-auto">
            <CTASection
              title="See Gamblio in Action"
              description="Experience how Gamblio turns your gambling site data into actionable
                  insights. Book a personalized session and see how easy it is to
                  integrate, analyze, and optimize your platform."
              buttonText="Contact Us"
              buttonLink="/contact-us"
            />
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}

const HeroDetails = {
  title: (
    <>
      <span className="text-primary">AI</span> to amplify
      <br /> <span className="text-primary">GAMBLIO</span> to simplify
    </>
  ),
  tittleClassName:
    "text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-center text-balance mb-4",
  description: (
    <>
      AI-driven platform built exclusively for gambling operators: designed to
      reduce churn, improve retention rate, increase player value, and cut
      operational costs.
      <br className="hidden md:block" />
      <br className="hidden md:block" />
      <span className="font-semibold text-foreground mt-4 block md:inline">Everything you need to skyrocket your operation in one place.</span>
    </>
  ),
  descriptionClassName: "text-center w-full md:w-2/3 mx-auto text-base md:text-xl text-muted-foreground",
  buttons: [
    {
      label: "Contact Us",
      href: "/contact-us",
      variant: "default" as const,
      // Perfectly proportioned SaaS sizing
      className: "text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all text-base",
    },
    {
      label: "Learn More",
      href: "#services",
      variant: "outline" as const,
      // Perfectly proportioned SaaS sizing
      className: "text-foreground px-8 py-3 rounded-full font-semibold transition-all text-base",
    },
  ],
};

const coreFeatures = [
  {
    image: "/images/increase-revenue.png",
    alt: "Increase Revenue illustration",
    title: "Increase Revenue",
  },
  {
    image: "/images/predict-behavior.png",
    alt: "Predict Behavior illustration",
    title: "Predict Behavior",
  },
  {
    image: "/images/automate-support.png",
    alt: "Automate Support illustration",
    title: "Automate Support",
  },
  {
    image: "/images/improve-efficiency.png",
    alt: "Improve Efficiency illustration",
    title: "Improve Efficiency",
  },
];

const certifications = [
  {
    image: "/images/strict.png",
    alt: "Strict security standards illustration",
    title: "Strict security standards",
  },
  {
    image: "/images/iso-9001.png",
    alt: "ISO 9001 illustration",
    title: "For quality management",
  },
  {
    image: "/images/iso-27001.png",
    alt: "ISO 27001 illustration",
    title: "For information security",
  },
  {
    image: "/images/iso-42001.png",
    alt: "ISO 42001 illustration",
    title: "For responsible AI management",
  },
];