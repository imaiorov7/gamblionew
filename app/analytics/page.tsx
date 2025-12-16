import { CoreValue } from "@/components/analytics/core-value";
import DataIntoDecisions from "@/components/analytics/data-into-decisions";
import { InsightsGrow } from "@/components/analytics/insights-grow";
import { MetricsToOutcomes } from "@/components/analytics/metrics-to-outcomes";
import PerformanceEngine from "@/components/analytics/performance-engine";
import SeePerformance from "@/components/analytics/see-performance";
import CTASection from "@/components/cta-section";
import Hero from "@/components/hero";
import DashedBorder from "@/components/shared/dashed-border";
import { HeroVideoDialog } from "@/components/video-dialog";

const AnalyticsPage = () => {
  return (
    <div className="w-full">
      <Hero {...HeroDetails} />
      <DashedBorder
        sides="x"
        className="relative flex flex-col items-center justify-center"
      >
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
      </DashedBorder>

      {/* Section 1: The Performance Engine */}
      <PerformanceEngine />

      {/* Section 2: Turn Data Into Decisions */}
      <DataIntoDecisions />

      {/* Section 3: See Performance as It Happens */}
      <SeePerformance />

      {/* Section 4: From Metrics to Measurable Outcomes */}
      <MetricsToOutcomes />
      {/* Section 5: Services Section */}
      <InsightsGrow />
      {/* Section 6: Core Value Proposition */}
      <CoreValue />
      {/* Section 7: Call to Action */}
      <CTASection
        title="Ready to See Gamblio Analytics in Action?"
        description=" Turn data into revenue with the BI engine designed for gambling operators."
        buttonText="Contact Us"
        buttonLink="/contact-us"
      />
    </div>
  );
};

export default AnalyticsPage;
const HeroDetails = {
  title: (
    <>
      Faster <span className="text-primary">insights.</span> Smarter{" "}
      <span className="text-primary">actions.</span> Stronger{" "}
      <span className="text-primary">results.</span>
    </>
  ),
  tittleClassName:
    "text-4xl font-medium tracking-tighter text-center md:text-4xl lg:text-5xl xl:text-6xl text-balance ",
  description: (
    <>
      Turn complexity into clarity with real-time performance
      intelligence.Gamblio Analytics transforms gaming data into measurable
      business outcomes, empowering operators to make confident, data-driven
      decisions.
    </>
  ),
  className: " text-left ",
  descriptionClassName:
    "text-center md:w-1/2 max-md:text-sm text-muted-foreground",
  buttons: [
    {
      label: "Contact Us",
      href: "/contact-us",
      variant: "default" as const,
      className: "text-white",
    },
    {
      label: "Learn How It Works",
      href: "#learn-how-it-works",
      variant: "outline" as const,
      className: "text-white",
    },
  ],
};
