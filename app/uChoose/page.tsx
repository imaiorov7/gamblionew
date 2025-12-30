import React from "react";
import CTASection from "@/components/cta-section";
import Hero from "@/components/hero";
import DashedBorder from "@/components/shared/dashed-border";
import FeatureIntro from "@/components/shared/feature-intro";
import KeyCapabilities from "@/components/shared/key-capabilities";
import ObjectiveDeliverables from "@/components/shared/objective-deliverables";
import ProcessFlowchart from "@/components/shared/process-flowchart";
import ReportCards from "@/components/shared/report-cards";
import ValueProposition from "@/components/shared/value-proposition";
import VisualizationSuite, {
  type Connection,
} from "@/components/shared/visualization-suite";
import WorkflowVisualization from "@/components/shared/workflow-visualization";
import { HeroVideoDialog } from "@/components/video-dialog";
import FeatureShowcase from "@/components/shared/feature-showcase";

const uChoosePage = () => {
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

      <FeatureIntro
        title={
          <>
            <span className="text-primary">Personalization </span>
            That Performs
          </>
        }
        description="
            uChoose is Gamblio’s AI-driven game recommendation engine, designed to understand each player’s behavior and deliver the content they’re most likely to engage with.It blends behavioral modeling, machine learning, and operator-controlled business rules — ensuring maximum engagement while keeping strategy in your hands."
        processFlowchart={
          <ProcessFlowchart
            steps={[
              { number: 1, label: "Personalized game recommendations" },
              { number: 2, label: "Behavior-based engagement forecasting" },
              { number: 3, label: "Content visibility optimization" },
              { number: 4, label: "Sponsored inventory monetization" },
              { number: 5, label: "Real-time performance tracking" },
            ]}
            labels={[
              { title: "gamblio ai", position: "top", index: 0 },
              { title: "predict", position: "bottom", index: 1.68 },
            ]}
          />
        }
        subTitle="It’s the central hub for:"
        signature={
          <>
            “Show the game each player wants, before they search for it.”
            <br />
            <span className="font-medium text-primary">-Gamblio</span>
          </>
        }
      />

      <KeyCapabilities
        title={
          <>
            <span className="text-primary">Smarter </span>Suggestions.{" "}
            <span className="text-primary">Increased </span>Retention.{" "}
            <span className="text-primary">Higher </span> Revenue.
          </>
        }
        description={
          <>
            uChoose evaluates player behavior, game affinity, betting trends,
            and content performance to deliver recommendations that convert into
            plays and deposits, not noise.
          </>
        }
        subTitle=" Key capabilities:"
        list={[
          "Personalized game recommendations per player",
          "Look-alike modeling for better discovery",
          "Operator overrides for campaigns or partnerships",
          "Sponsored slot options for additional revenue",
          "Real-time performance and conversion dashboards",
          "Multi-market, multi-language adaptability",
        ]}
        buttonTitle="Explore Recommendation Logic"
      />

      <ReportCards
        title={
          <>
            <span className="text-primary">Intelligence </span>+
            <span className="text-primary"> Control</span> = The Perfect
            <span className="text-primary"> Balance</span>
          </>
        }
        description="Unlike generic recommendation systems, uChoose combines AI automation with manual priority settings, ensuring operators can highlight strategic content while AI optimizes the rest."
        data={uChooseData}
      />

      <VisualizationSuite
        title={
          <>
            See Engagement and Revenue Rise in
            <span className="text-primary"> Real Time</span>
          </>
        }
        description="Gamblio Predict includes a visualization suite built for clarity, precision, and operational actionability."
        cards={[
          {
            title: "CTR & conversion metrics",
          },
          {
            title: "Revenue uplift per recommendation type",
          },
          {
            title: "Bundle-level performance tracking",
          },
          {
            title: "Game-level engagement reports",
          },
          {
            title: "Week-over-week performance comparisons",
          },
          {
            title: "KPI breakdown per market, player segment, or platform",
          },
        ]}
        connections={uConnections}
        buttonText="Explore our services"
        buttonLink="/services"
      />
      <VisualizationSuite
        title={
          <>
            <span className="text-primary">Easy</span> to Activate.{" "}
            <span className="text-primary">Effortless</span> to Operate.
          </>
        }
        description="uChoose integrates directly into your website or app as a widget, fast to implement, seamless to manage, and continuously learning from your players."
        cards={[
          {
            title: "Player arrives",
          },
          {
            title: "Widget delivers personalized recommendations",
          },
          {
            title: "Player engages",
          },
          {
            title: "Revenue, retention, and session duration increase",
          },
        ]}
        cards2={[
          {
            title: "AI handles personalization, freeing marketing teams",
          },
          {
            title: "Minimal operational overhead",
          },
          {
            title: "Ensures consistency across all player journeys",
          },
        ]}
        cardsTitle="Workflow Steps:"
        cardsTitle2="Additional Benefits:"
        connections={uChooseConnections}
        buttonText="Explore our services"
        buttonLink="/services"
      />

      <ObjectiveDeliverables
        title={
          <>
            Engagement That <span className="text-primary">Compounds</span> Into
            Revenue
          </>
        }
        description="Business impact:"
        leftColumn={[
          "Increase engagement",
          "Grow revenue",
          "Improve content ROI",
          "Drive monetization",
          "Support marketing efficiency",
        ]}
        leftLabels={{ title: "analytics", index: 0.5 }}
        rightLabels={{ title: "gamblio ai", index: 3.5 }}
        rightColumn={[
          "Personalized suggestions that match player behavior",
          "Higher play frequency & stronger session value",
          "More visibility for mid-tail & new game launches",
          "Sponsored placements and curated promotions",
          "No guesswork — AI handles optimization",
        ]}
      />

      {/* <ValueProposition
        title={
          <>
            Core Value <span className="text-primary">Proposition</span>
          </>
        }
        description="uChoose turns personalization into performance, using AI to deliver the right game to the right player at the right moment, increasing engagement, session value, and overall retention while keeping operators firmly in control."
        box1="Personalized Engagement"
        box2="AI-Optimized Discovery"
        box3="Strategic Promotion Control"
        box4="Player-Centric Recommendations"
        box5="Real-Time Performance Metrics"
        box6="Smart Content Exposure"
      /> */}
      <FeatureShowcase
        title={
          <>
            Core Value <span className="text-primary">Proposition</span>
          </>
        }
        description="uChoose turns personalization into performance, using AI to deliver the right game to the right player at the right moment, increasing engagement, session value, and overall retention while keeping operators firmly in control."
        chat1="Personalized Engagement"
        chat2="AI-Optimized Discovery"
        chat3="Strategic Promotion Control"
        chat4="Player-Centric Recommendations"
        chat5="Real-Time Performance Metrics"
        chat6="Smart Content Exposure"
      />
      <CTASection
        title="Ready to Boost Player Engagement With Precision?"
        description="Experience the AI recommendation engine built to increase retention, maximize session value, and elevate game discovery."
        buttonText="Contact Us"
        buttonLink="/contact-us"
      />
    </div>
  );
};

export default uChoosePage;

const HeroDetails = {
  title: (
    <>
      The
      <span className="text-primary"> right game. </span>At the{" "}
      <span className="text-primary">right time. </span>Maximum{" "}
      <span className="text-primary">retention. </span>
    </>
  ),
  tittleClassName:
    "text-4xl font-medium tracking-tighter text-center md:text-4xl lg:text-5xl xl:text-6xl text-balance ",
  description: (
    <>
      uChoose is the AI-powered game recommendation engine that personalizes
      every player’s journey, increasing engagement, boosting session value, and
      maximizing revenue with precision.
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
const uChooseData = [
  {
    title: "Behavioral Recommendation Engine",
    description: "Learns from player patterns, preferences, and play history.",
    value: (
      <span className="underline">
        Displays the games players are most likely to enjoy right now
      </span>
    ),
    hasImage: true,
    imgPosition: "-right-10 -top-14",
    imgArrowRotation: "none",
    imgArrowPosition: "-right-16 -top-18",
  },
  {
    title: "Look-Alike Game Discovery",
    description: "Suggests similar games to those players already love.",
    value: (
      <span className="underline">
        Increases discovery of long-tail and underexposed content.
      </span>
    ),
    hasImage: false,
    imgPosition: "none",
  },
  {
    title: "Operator-Controlled Promotion Layer",
    description: "Manual boosts for campaigns, vendor deals, or new launches.",
    value: (
      <span className="underline">
        Aligns AI performance with business strategy.
      </span>
    ),
    hasImage: true,
    imgPosition: "-left-10 -bottom-14",
    imgArrowRotation: "rotate-180 ",
    imgArrowPosition: " -left-16 -bottom-18",
  },
];
const uConnections: Connection[] = [
  {
    from: 0,
    to: 1,
    fromSide: "bottom",
    toSide: "left",
    animated: true,
    animationDuration: 8,
    animationDelay: 0,
  },
  {
    from: 0,
    to: 3,
    fromSide: "bottom",
    toSide: "top",
    animated: true,
    animationDuration: 9,
    animationDelay: 0.5,
  },

  {
    from: 1,
    to: 2,
    fromSide: "top",
    toSide: "left",
    animated: true,
    animationDuration: 7,
    animationDelay: 1,
  },

  {
    from: 2,
    to: 5,
    fromSide: "bottom",
    toSide: "top",
    animated: true,
    animationDuration: 8,
    animationDelay: 0.3,
  },
  {
    from: 1,
    to: 4,
    fromSide: "bottom",
    toSide: "top",
    dashed: true,
    animated: true,
    animationDuration: 10,
    animationDelay: 1.5,
  },
  {
    from: 3,
    to: 5,
    fromSide: "right",
    toSide: "left",
    dashed: true,
    animated: true,
    animationDuration: 9,
    animationDelay: 0.8,
  },
];
const uChooseConnections: Connection[] = [
  {
    from: 0,
    to: 1,
    fromSide: "right",
    toSide: "left",
    animated: true,
    animationDuration: 4,
    animationDelay: 0,
    showDots: true,
  },
  {
    from: 1,
    to: 2,
    fromSide: "right",
    toSide: "top",
    animated: true,
    animationDuration: 4.3,
    animationDelay: 0.5,
    showDots: true,
  },

  {
    from: 2,
    to: 3,
    fromSide: "left",
    toSide: "left",
    animated: true,
    animationDuration: 4.5,
    animationDelay: 1,
    showDots: true,
  },
];
