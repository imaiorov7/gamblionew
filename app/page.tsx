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
import { PlayCircle, ShieldCheck, Cpu, TrendingUp } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "AI to Amplify, Gamblio to Simplify",
  description:
    "AI-driven platform built exclusively for gambling operators: designed to reduce churn, improve retention rate, increase player value, and cut operational costs.",
  path: "/",
});

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      
      {/* 1. FULL SCREEN HERO SECTION */}
      <div className="w-full border-b border-border/40">
        <Hero {...HeroDetails}>
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
      {/* Tightened padding */}
      <section className="w-full pt-4 pb-6 border-b border-border/40">
        <ScrollReveal className="container mx-auto px-4">
          <TrustedBy />
        </ScrollReveal>
      </section>

      {/* 3. CORE FEATURES SECTION */}
      {/* Reduced py-16 md:py-24 to py-12 md:py-20 */}
      <section className="w-full py-12 md:py-20 bg-muted/5 border-b border-border/40 backdrop-blur-[2px]">
        <ScrollReveal className="container mx-auto px-4">
          <CoreFeaturesSection
            title={
              <>
                Built for <span className="text-primary">gambling</span>. Engineered
                for <span className="text-primary">performance.</span>
              </>
            }
            description="No generic software. No noise. Just one all-around AI solution that delivers outcomes that matter."
            features={coreFeatures}
          />
        </ScrollReveal>
      </section>

      {/* 4. SERVICES SECTION */}
      {/* Reduced py-16 md:py-24 to py-12 md:py-20 */}
      <section className="w-full py-12 md:py-20 border-b border-border/40 relative">
        <ScrollReveal className="container mx-auto px-4 relative z-10">
          <ServicesSection />
        </ScrollReveal>
      </section>

      {/* 5. WHO WE ARE SECTION */}
      <section className="w-full py-12 md:py-20 bg-muted/5 border-b border-border/40 scroll-mt-32 backdrop-blur-[2px]" id="who-we-are">
        <ScrollReveal className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8 md:space-y-12">
            
            <div className="space-y-2 md:space-y-4">
              <Title className="text-3xl md:text-5xl font-bold tracking-tight">Who we are</Title>
              <Description className="text-lg md:text-2xl font-medium text-foreground">
                Gambling Meets <span className="text-primary">Expertise.</span>
              </Description>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
              {/* Pillar 1 */}
              <div className="group flex flex-col items-center text-center py-6 px-5 md:py-8 md:px-6 rounded-2xl md:rounded-3xl bg-card border border-border/40 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary/40 transition-all duration-300">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Industry Veterans</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Built by professionals who understand the operational realities of the casino floor and the back office.</p>
              </div>
              
              {/* Pillar 2 - Now identical to Pillar 1 & 3 */}
              <div className="group flex flex-col items-center text-center py-6 px-5 md:py-8 md:px-6 rounded-2xl md:rounded-3xl bg-card border border-border/40 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary/40 transition-all duration-300">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">AI Pioneers</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Uniting leading experts in data science and machine learning to push the boundaries of gaming tech.</p>
              </div>

              {/* Pillar 3 */}
              <div className="group flex flex-col items-center text-center py-6 px-5 md:py-8 md:px-6 rounded-2xl md:rounded-3xl bg-card border border-border/40 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary/40 transition-all duration-300">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Results Driven</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">United by one simple mission: to empower operators with technology that delivers strictly measurable ROI.</p>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* 6. CERTIFICATIONS SECTION */}
      {/* Reduced py-16 md:py-24 to py-12 md:py-20 */}
      <section className="w-full py-12 md:py-20 border-b border-border/40">
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
      {/* Reduced py-16 md:py-24 and space-y gaps */}
      <section className="w-full py-12 md:py-20 bg-muted/5 backdrop-blur-[2px]">
        <div className="container mx-auto px-4 space-y-16 md:space-y-24">
          <ScrollReveal>
            <FAQSection />
          </ScrollReveal>
          
          <ScrollReveal delay={0.1} className="max-w-6xl mx-auto">
            <CTASection
              title="See Gamblio in Action"
              description="Turn your gambling site data into actionable insights. Book a personalized session today."
              buttonText="Contact Us"
              buttonLink="/contact-us"
            />
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}

// Condensed Hero Text
// Condensed Hero Text with properly scaled buttons
const HeroDetails = {
  title: (
    <>
      <span className="text-primary">AI</span> to amplify
      <br /> <span className="text-primary">GAMBLIO</span> to simplify
    </>
  ),
  tittleClassName:
    "text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-center text-balance mb-4 md:mb-6",
  description: (
    <>
      The AI-driven platform built exclusively for gambling operators. 
      Reduce churn, improve retention, and cut operational costs.
      <br className="hidden md:block" />
      <span className="font-semibold text-foreground mt-2 block">Everything you need in one place.</span>
    </>
  ),
  descriptionClassName: "text-center w-full md:w-2/3 mx-auto text-base md:text-xl text-muted-foreground mb-8 md:mb-12",
  buttons: [
    {
      label: "Contact Us",
      href: "/contact-us",
      variant: "default" as const,
      // Increased px/py and text size, but removed the forced w-full stretch
      className: "text-white px-8 py-3.5 md:px-10 md:py-5 rounded-full font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all text-base md:text-lg",
    },
    {
      label: "Learn More",
      href: "#services",
      variant: "outline" as const,
      // Matched sizing, removed forced width
      className: "text-foreground px-8 py-3.5 md:px-10 md:py-5 rounded-full font-bold transition-all text-base md:text-lg border-2",
    },
  ],
};

const coreFeatures = [
  { image: "/images/increase-revenue.png", alt: "Increase Revenue", title: "Increase Revenue" },
  { image: "/images/predict-behavior.png", alt: "Predict Behavior", title: "Predict Behavior" },
  { image: "/images/automate-support.png", alt: "Automate Support", title: "Automate Support" },
  { image: "/images/improve-efficiency.png", alt: "Improve Efficiency", title: "Improve Efficiency" },
];

const certifications = [
  { image: "/images/strict.png", alt: "Strict security", title: "Strict security standards" },
  { image: "/images/iso-9001.png", alt: "ISO 9001", title: "For quality management" },
  { image: "/images/iso-27001.png", alt: "ISO 27001", title: "For information security" },
  { image: "/images/iso-42001.png", alt: "ISO 42001", title: "For responsible AI management" },
];