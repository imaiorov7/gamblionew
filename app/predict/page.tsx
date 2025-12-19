import CTASection from "@/components/cta-section";
import Hero from "@/components/hero";
import DashedBorder from "@/components/shared/dashed-border";
import FeatureIntro from "@/components/shared/feature-intro";

import KeyCapabilities from "@/components/shared/key-capabilities";
import ObjectiveDeliverables from "@/components/shared/objective-deliverables";
import ProcessFlowchart from "@/components/shared/process-flowchart";
import ReportCards from "@/components/shared/report-cards";
import ValueProposition from "@/components/shared/value-proposition";
import VisualizationSuite from "@/components/shared/visualization-suite";
import WorkflowVisualization from "@/components/shared/workflow-visualization";
import { HeroVideoDialog } from "@/components/video-dialog";

const Predict = () => {
  const predictData = [
    {
      title: "VIP Detection Model",
      description:
        "Identifies potential VIPs early using advanced learning model that includes deposit growth, bet velocity, and session trajectories, among many others.",
      value: (
        <span className="underline">
          Maximize LTV by recognizing high-potential players before competitors
          do.
        </span>
      ),
      hasImage: true,
      imgPosition: "-right-10 -top-14",
      imgArrowRotation: "none",
      imgArrowPosition: "-right-16 -top-18",
    },
    {
      title: "Bonus Hunter Detection",
      description:
        "Detects repetitive, coordinated, or exploitative behavior by cross-referencing wallet usage, RTP anomalies, and timing patterns",
      value: (
        <span className="underline">
          Protect promotional ROI and safeguard your margins.
        </span>
      ),
      hasImage: false,
      imgPosition: "none",
    },
    {
      title: "Churn Risk Model",
      description:
        "Predicts player drop-off based on AI-powered system learning from declining engagement, deposit frequency, and win/loss patterns.",
      value: (
        <span className="underline">
          Trigger targeted CRM actions to prevent revenue loss.
        </span>
      ),
      hasImage: true,
      imgPosition: "-left-10 -bottom-14",
      imgArrowRotation: "rotate-180 ",
      imgArrowPosition: " -left-16 -bottom-18",
    },
    {
      title: "Responsible Gaming Monitoring",
      description:
        "Flags behavior patterns aligned with potential harm — escalating bet sizes, rapid deposits, long sessions.",
      value: (
        <span className="underline">
          Strengthen compliance posture and support safer play.
        </span>
      ),
      hasImage: true,
      imgPosition: "-right-10 -bottom-14",
      imgArrowRotation: "rotate-90",
      imgArrowPosition: "-right-16 -bottom-18",
    },
  ];
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

      <FeatureIntro
        title={
          <>
            The{" "}
            <span className="text-primary">
              Behavioral Intelligence Engine{" "}
            </span>
            of Gamblio
          </>
        }
        description="
            Gamblio Predict is the player behavior prediction and segmentation
            hub of the Gamblio platform. Using advanced machine learning and
            behavioral modeling, it classifies players into actionable segments,
            enabling operators to prevent in time rather than react late."
        description2="Purpose-built for the online gambling industry, it blends AI
            precision with operational control, giving CRM, retention, and
            compliance teams the foresight they’ve never had before."
        processFlowchart={
          <ProcessFlowchart
            steps={[
              { number: 1, label: "Player segmentation & prediction" },
              { number: 2, label: "Early VIP detection" },
              { number: 3, label: "Bonus abuse prevention" },
              { number: 4, label: "Churn risk management" },
              { number: 5, label: "Responsible gaming monitoring" },
            ]}
            labels={[
              { title: "gamblio ai", position: "top", index: 0 },
              { title: "predict", position: "bottom", index: 1.68 },
            ]}
          />
        }
        subTitle="It’s the central control room for:"
        signature={
          <>
            “Know who to keep, how to keep them, and when to act before it’s too
            late.”
            <br />
            <span className="font-medium text-primary">-Gamblio</span>
          </>
        }
      />

      {/* Section 2: Turn Data Into Decisions */}
      <KeyCapabilities
        title={
          <>
            From <span className="text-primary">Insight</span> to{" "}
            <span className="text-primary">Prediction</span>. From{" "}
            <span className="text-primary">Prediction</span> to{" "}
            <span className="text-primary">Prevention</span>.{" "}
          </>
        }
        description={
          <>
            Gamblio Predict analyzes behavioral, transactional, and contextual
            signals, transforming them into real-time segmentation and early
            warnings that drive smarter engagement and safer operations.
          </>
        }
        subTitle=" Key capabilities:"
        list={[
          "Automatic segmentation based on live behavior",
          "Predictive identification of emerging VIPs",
          "Bonus fraud & coordinated abuse detection",
          "Dynamic churn probability scoring",
          "Responsible gaming risk alerts",
          "Configurable rules per market or vertical",
          "Full player drill-down & segment analysis",
        ]}
        buttonTitle="Explore Segmentation Models"
      />

      {/* Section 3: See Performance as It Happens */}
      <ReportCards
        title={
          <>
            Predict <span className="text-primary">anomalies</span> before they
            happen
          </>
        }
        description="Four Prediction Models. One Step Ahead of Every Player."
        data={predictData}
      />

      <VisualizationSuite
        title={
          <>
            Clear <span className="text-primary">Segments</span>. Clear{" "}
            <span className="text-primary">Signals</span>. Clear{" "}
            <span className="text-primary">Actions</span>.
          </>
        }
        description="Gamblio Predict includes a visualization suite built for clarity, precision, and operational actionability."
        cards={[
          {
            title: "Behavioral Trends",
            description: "How player categories shift over days/weeks/months",
          },
          {
            title: "Segment overview",
            description: "Real-time distribution of all player types",
          },
          {
            title: "Segment Health KPIs",
            description: "LTV, session count, churn probability",
          },
          {
            title: "Drill-Down Explorer",
            description: "Full player lists with advanced filters",
          },
        ]}
        buttonText="Explore our services"
        buttonLink="/services"
      />
      <WorkflowVisualization />
      <ObjectiveDeliverables
        title={
          <>
            <span className="text-primary">Proactive </span>Intelligence.{" "}
            <span className="text-primary">Measurable </span>Results.
          </>
        }
        description="Business impact:"
        leftColumn={[
          "Retain players longer",
          "Grow VIP revenue",
          "Reduce bonus waste",
          "Strengthen compliance",
          "Increase operational efficiency",
        ]}
        leftLabels={{ title: "analytics", index: 0.5 }}
        rightLabels={{ title: "gamblio ai", index: 3.5 }}
        rightColumn={[
          "Predict churn & auto-trigger win-back actions",
          "Identify high-value players before competitors",
          "Detect abuse & optimize promotional spend",
          "Automatic RG flags with recommended actions",
          "AI removes manual analysis across teams",
        ]}
      />

      <ValueProposition />
      {/* Section 7: Call to Action */}
      <CTASection
        title="Ready to Predict What Players Will Do Next?"
        description="Take control of your operations with the AI engine that thinks ahead of your players."
        buttonText="Contact Us"
        buttonLink="/contact-us"
      />
    </div>
  );
};

export default Predict;

const HeroDetails = {
  title: (
    <>
      <span className="text-primary">Predict</span> behavior.{" "}
      <span className="text-primary">Prevent</span> losses.{" "}
      <span className="text-primary">Protect</span> growth.
    </>
  ),
  tittleClassName:
    "text-4xl font-medium tracking-tighter text-center md:text-4xl lg:text-5xl xl:text-6xl text-balance ",
  description: (
    <>
      Gamblio Predict uses AI-driven segmentation and behavioral forecasting to
      help operators anticipate player actions, identifying VIPs early,
      preventing churn, stopping bonus abuse, and ensuring responsible play.
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
