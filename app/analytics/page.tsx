import type { Metadata } from "next";
import CTASection from "@/components/cta-section";
import Hero from "@/components/hero";
import DashedBorder from "@/components/shared/dashed-border";
import FeatureIntro from "@/components/shared/feature-intro";
import FeatureShowcase from "@/components/shared/feature-showcase";
import GlobalReach from "@/components/shared/global-reach";
import DataIntoDecisions from "@/components/shared/key-capabilities";
import ObjectiveDeliverables from "@/components/shared/objective-deliverables";
import ProcessFlowchart from "@/components/shared/process-flowchart";
import ReportCards from "@/components/shared/report-cards";
import { HeroVideoDialog } from "@/components/video-dialog";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title:
    "Gamblio Analytics - Real-Time Business Intelligence for Gambling Operators",
  description:
    "Turn complexity into clarity with real-time performance intelligence. Gamblio Analytics transforms gaming data into measurable business outcomes, empowering operators to make confident, data-driven decisions with predefined and custom KPI reports.",
  path: "/analytics",
  keywords: [
    "gambling analytics",
    "casino business intelligence",
    "real-time KPI tracking",
    "gambling reporting",
    "casino analytics dashboard",
    "gambling performance metrics",
    "financial reporting gambling",
    "bonus ROI tracking",
    "player performance analytics",
    "gambling data analytics",
    "casino BI platform",
    "gambling KPIs",
  ],
});

const AnalyticsPage = () => {
  const reportData = [
    {
      title: "Daily Report",
      description: "Snapshot of player activity and financial performance.",
      value: "Enables daily operational control and instant decisions.",
      hasImage: true,
      imgPosition: "-right-10 -top-14",
      imgArrowRotation: "none",
      imgArrowPosition: "-right-16 -top-18",
    },
    {
      title: "Performance Report",
      description: "Highlights top-performing players, games, and vendors.",
      value: "Supports targeted promotions and strategic content planning.",
      hasImage: false,
      imgPosition: "none",
    },
    {
      title: "Bonus Report",
      description: "Tracks bonus activation, redemption, and ROI.",
      value:
        "Enables A/B testing of promotional campaigns and maximizes promotional efficiency.",
      hasImage: true,
      imgPosition: "-left-10 -bottom-14",
      imgArrowRotation: "rotate-180 ",
      imgArrowPosition: " -left-16 -bottom-18",
    },
    {
      title: "Financial Report",
      description:
        "Analyzes bets, wins, deposits, withdrawals, GGR, NGR and all cross-KPIs in between.",
      value: "Strengthens reconciliation and profitability tracking.",
      hasImage: true,
      imgPosition: "-right-10 -bottom-14",
      imgArrowRotation: "rotate-90",
      imgArrowPosition: "-right-16 -bottom-18",
    },
  ];
  return (
    <div className="w-full border-b-0">
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
      <FeatureIntro
        title={
          <>
            The<span className="text-primary"> Performance Engine </span>of the
            Gamblio Platform
          </>
        }
        description={
          <>
            Gamblio Analytics is the business intelligence hub built exclusively
            for the gambling industry. It gives operators the clarity they need
            - a powerful dashboard that provides real-time visibility into
            financial performance and all major KPIs, enabling faster, smarter,
            and more confident decision-making.
          </>
        }
        processFlowchart={
          <ProcessFlowchart
            steps={[
              { number: 1, label: "KPI monitoring" },
              { number: 2, label: "Trend detection" },
              { number: 3, label: "Operational optimization" },
              { number: 4, label: "Strategic reporting" },
            ]}
            labels={[
              { title: "gamblio ai", position: "top", index: 0 },
              { title: "analytics", position: "bottom", index: 2 },
            ]}
          />
        }
        subTitle="It's the central control room for:"
        signature={
          <>
            "From insight to action, every metric drives measurable growth."
            <br />
            <span className="font-medium text-primary">-Gamblio</span>
          </>
        }
      />
      {/* Section 2: Turn Data Into Decisions */}
      <DataIntoDecisions
        title={
          <>
            Turn<span className="text-primary"> Data </span>Into{" "}
            <span className="text-primary">Decisions</span>
          </>
        }
        description={
          <>
            Gamblio Analytics connects every deposit, bet, win, or bonus into
            one intuitive, real-time interface. Operators can track performance
            across players, games, and vendors with the precision needed to
            optimize every move.
          </>
        }
        subTitle=" Key capabilities:"
        list={[
          "Real-time tracking of core gambling events and KPIs",
          "Predefined & customizable reports for every team",
          "Advanced filtering and segmentation tools",
          "Exportable reports for further analysis",
          "Automated scheduled reports for leadership - insights that come to you",
        ]}
        buttonTitle="Explore Report Types"
      />
      {/* Section 3: See Performance as It Happens */}
      <ReportCards
        title={
          <>
            See <span className="text-primary">Performance</span> as It Happens
          </>
        }
        description="Four report types, one goal: faster, smarter, and clearer operations"
        data={reportData}
      />
      {/* Section 4: From Metrics to Measurable Outcomes */}
      <ObjectiveDeliverables
        title={
          <>
            From <span className="text-primary">Metrics</span> to Measurable{" "}
            <span className="text-primary">Outcomes</span>
          </>
        }
        description="Every feature in Gamblio Analytics is designed to directly influence
                performance — reducing blind spots, increasing Lifetime Value of
                players, and driving profitability."
        leftColumn={[
          "Faster decisions",
          "Smarter bonus spend",
          "Leaner operations",
          "Risk prevention",
          "Improved vendor strategy",
        ]}
        leftLabels={{ title: "analytics", index: 0.5 }}
        rightLabels={{ title: "gamblio ai", index: 3.5 }}
        rightColumn={[
          "Real-time KPI visibility",
          "Track ROI & optimize campaigns",
          "Replace manual checks with live monitoring",
          "Early alerts for abnormal events or performance drops",
          "Benchmark and optimize game/provider performance",
        ]}
      />
      {/* Section 5: Services Section */}
      <GlobalReach />
      {/* Section 6: Core Value Proposition */}
      <FeatureShowcase
        title={
          <>
            <span className="text-primary">Core Value</span> Proposition
          </>
        }
        description="Gamblio Analytics turns fragmented gaming data into measurable
                performance intelligence — empowering operators to grow revenue, reduce
                manual effort, and optimize player experiences with every decision."
        chat1="Turn complexity into clarity"
        chat2="Compress time-to-decision"
        chat3="Transform data into decisions"
        chat4="Empower your team with operational intelligence"
      />
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
      <span className="text-primary">Faster </span>insights.
      <span className="text-primary"> Smarter </span>actions.
      <span className="text-primary"> Stronger </span>results.
    </>
  ),
  tittleClassName:
    "text-4xl font-medium tracking-tighter text-center md:text-4xl lg:text-5xl xl:text-6xl text-balance ",
  description: (
    <>
      Turn complexity into clarity with real-time performance intelligence.
      Gamblio Analytics transforms gaming data into measurable business
      outcomes, empowering operators to make confident, data-driven decisions.
    </>
  ),
  className: " text-left ",
  descriptionClassName: "text-center md:w-1/2 text-xl text-muted-foreground",
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
