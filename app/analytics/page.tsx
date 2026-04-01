import type { Metadata } from "next";
import CTASection from "@/components/cta-section";
import Hero from "@/components/hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import FeatureIntro from "@/components/shared/feature-intro";
import KeyCapabilities from "@/components/shared/key-capabilities";
import ModelsShowcase from "@/components/shared/models-showcase";
import FeaturesCarousel from "@/components/shared/features-carousel";
import ObjectiveDeliverables from "@/components/shared/objective-deliverables";
import FeatureShowcase from "@/components/shared/feature-showcase";
import ProcessFlowchart from "@/components/shared/process-flowchart";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Gamblio Predict - AI Player Behavior & Segmentation",
  description: "Predict behavior. Prevent losses. Protect growth. Gamblio Predict uses AI-driven segmentation and behavioral forecasting.",
  path: "/predict",
});

export default function PredictPage() {
  // --- SECTION 3 DATA ---
  const modelsData = [
    {
      title: "VIP Detection Model",
      description: "Identifies potential VIPs early using an advanced learning model that includes deposit growth, bet velocity, and session trajectories.",
      value: "Maximize LTV by recognizing high-potential players before competitors do.",
    },
    {
      title: "Bonus Hunter Detection",
      description: "Detects repetitive, coordinated, or exploitative behavior by cross-referencing wallet usage, RTP anomalies, and timing patterns.",
      value: "Protect promotional ROI and safeguard your margins.",
    },
    {
      title: "Churn Risk Model",
      description: "Predicts player drop-off based on AI-powered system learning from declining engagement, deposit frequency, and win/loss patterns.",
      value: "Trigger targeted CRM actions to prevent revenue loss.",
    },
    {
      title: "Responsible Gaming Monitoring",
      description: "Flags behavior patterns aligned with potential harm - escalating bet sizes, rapid deposits, long sessions.",
      value: "Strengthen compliance posture and support safer play.",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* FULL SCREEN HERO SECTION */}
      <div className="w-full border-b border-border/40">
        <Hero {...HeroDetails} />
      </div>

      {/* SECTION 1: OVERVIEW */}
      <section className="w-full flex flex-col justify-center py-16 md:py-24 bg-muted/5 border-b border-border/40 backdrop-blur-[2px]">
        <ScrollReveal className="container mx-auto px-4">
          <FeatureIntro
            title={<>The <span className="text-primary">Behavioral Intelligence</span> Engine of Gamblio</>}
            description="Gamblio Predict is the player behavior prediction and segmentation hub of the Gamblio platform. Using advanced machine learning and behavioral modeling, it classifies players into actionable segments, enabling operators to prevent in time rather than react late."
            subTitle="It is the central control room for:"
            processFlowchart={
              <ProcessFlowchart
                steps={[
                  { number: 1, label: "Player segmentation & prediction" },
                  { number: 2, label: "Early VIP detection" },
                  { number: 3, label: "Bonus abuse prevention" },
                  { number: 4, label: "Churn risk management" },
                  { number: 5, label: "Responsible gaming monitoring" },
                ]}
              />
            }
            signature={<>"Know who to keep, how to keep them, and when to act before it's too late."</>}
          />
        </ScrollReveal>
      </section>

      {/* SECTION 2: KEY CAPABILITIES */}
      <section className="w-full flex flex-col justify-center py-16 md:py-24 border-b border-border/40 relative">
        <ScrollReveal className="container mx-auto px-4 relative z-10">
          <KeyCapabilities
            title={<>From Insight to <span className="text-primary">Prediction.</span> From Prediction to <span className="text-primary">Prevention.</span></>}
            description="Gamblio Predict analyzes behavioral, transactional, and contextual signals, transforming them into real-time segmentation and early warnings that drive smarter engagement and safer operations."
            list={[
              "Automatic segmentation based on live behavior",
              "Predictive identification of emerging VIPs",
              "Bonus fraud & coordinated abuse detection",
              "Dynamic churn probability scoring",
              "Responsible gaming risk alerts",
              "Configurable rules per market or vertical",
              "Full player drill-down & segment analysis"
            ]}
          />
        </ScrollReveal>
      </section>

      {/* SECTION 3: MODELS */}
      <section className="w-full flex flex-col justify-center py-16 md:py-24 bg-muted/5 border-b border-border/40 backdrop-blur-[2px]">
        <ScrollReveal className="container mx-auto px-4">
          <ModelsShowcase
            title={<>Four Prediction Models. One Step Ahead of <span className="text-primary">Every Player.</span></>}
            description="Predict anomalies before they happen."
            data={modelsData}
          />
        </ScrollReveal>
      </section>

      {/* SECTION 4: FEATURES */}
      <section className="w-full flex flex-col justify-center py-16 md:py-24 border-b border-border/40 relative">
        <ScrollReveal className="container mx-auto px-4 relative z-10 overflow-hidden">
          <FeaturesCarousel
            title={<>Anticipate Behavior. <span className="text-primary">Act Before It Happens.</span></>}
            description="Gamblio Predict uses advanced AI models to analyze player behavior in real time—helping operators identify high-value players, prevent churn, detect bonus abuse, and ensure responsible gaming."
            features={[
              "AI-powered player segmentation (VIP, churn risk, bonus hunters, at-risk players)",
              "Early VIP detection based on behavioral and transactional patterns",
              "Churn prediction with actionable resolution workflows",
              "Bonus abuse detection through multi-pattern behavioral analysis",
              "Responsible gaming monitoring with risk scoring and triggers",
              "Tier-based scoring system for prioritizing player actions",
              "Real-time alerts for critical player behavior changes",
              "Player-level breakdown with detailed scoring components",
              "Time-based analysis (daily, weekly, monthly views)",
              "Actionable insights to support CRM, support, and risk teams"
            ]}
          />
        </ScrollReveal>
      </section>

      {/* SECTION 5: BUSINESS IMPACT */}
      <section className="w-full flex flex-col justify-center py-16 md:py-24 bg-muted/5 border-b border-border/40 backdrop-blur-[2px]">
        <ScrollReveal className="container mx-auto px-4 relative z-10">
          <ObjectiveDeliverables
            title={<>Proactive Intelligence. <span className="text-primary">Measurable Results.</span></>}
            description="Predict is not just analytics, it's actionable foresight."
            leftLabel="Objective"
            rightLabel="Gamblio Delivers"
            leftColumn={["Retain players longer", "Grow VIP revenue", "Reduce bonus waste", "Strengthen compliance", "Increase operational efficiency"]}
            rightColumn={["Predict churn & auto-trigger win-back actions", "Identify high-value players before competitors", "Detect abuse & optimize promotional spend", "Automatic RG flags with recommended actions", "AI removes manual analysis across teams"]}
          />
        </ScrollReveal>
      </section>

      {/* SECTION 6: PREDICTIVE VISUALIZATION (Custom Block based on PDF) */}
      <section className="w-full flex flex-col justify-center py-16 md:py-24 border-b border-border/40 relative">
        <ScrollReveal className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4 text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Clear Segments. <span className="text-primary">Clear Signals.</span> Clear Actions.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Gamblio Predict includes a visualization suite built for clarity, precision, and operational actionability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Segment Overview", desc: "Real-time distribution of all player types." },
              { title: "Behavioral Trends", desc: "How player categories shift over days/weeks/months." },
              { title: "Segment Health KPIs", desc: "LTV, session count, churn probability." },
              { title: "Drill-Down Explorer", desc: "Full player lists with advanced filters." }
            ].map((card, i) => (
              <div key={i} className="group p-8 rounded-[1.5rem] bg-card border border-border/50 hover:border-primary/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3">
                {/* Animated Accent Line */}
                <div className="w-10 h-1 bg-primary/40 rounded-full mb-1 group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{card.title}</h4>
                <p className="text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 7: VALUE & POSITIONING */}
      <section className="w-full flex flex-col justify-center py-16 md:py-24 bg-muted/5 border-b border-border/40 backdrop-blur-[2px]">
        <ScrollReveal className="container mx-auto px-4 relative z-10">
          <FeatureShowcase
            title={<><span className="text-primary">Core Value</span> Proposition</>}
            description="Gamblio Predict turns raw player data into predictive intelligence - empowering operators to identify opportunity, prevent loss, compress churn, and ensure compliance through AI-driven segmentation and behavior modeling."
            chat1="Predictive Intelligence"
            chat2="Automated Detection"
            chat3="Early Warning System"
            chat4="Anticipation Over Reaction"
            chat5="Data-Driven Retention"
            chat6="Player Foresight"
          />
        </ScrollReveal>
      </section>

      {/* SECTION 8: CALL TO ACTION */}
      <section className="w-full flex flex-col justify-center py-16 md:py-24 bg-muted/5 backdrop-blur-[2px]">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={0.1} className="max-w-6xl mx-auto">
            <CTASection
              title="Ready to Predict What Players Will Do Next?"
              description="Take control of your operations with the AI engine that thinks ahead of your players."
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
      <span className="text-primary">Predict </span>behavior.<br className="sm:hidden" />
      <span className="text-primary"> Prevent </span>losses.<br className="sm:hidden" />
      <span className="text-primary"> Protect </span>growth.
    </>
  ),
  tittleClassName: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-center text-balance mb-4",
  description: "Gamblio Predict uses AI-driven segmentation and behavioral forecasting to help operators identify VIPs early, prevent churn, stop bonus abuse, and ensure responsible play.",
  className: "text-center",
  descriptionClassName: "text-center w-full md:w-2/3 mx-auto text-base md:text-xl text-muted-foreground",
  buttons: [
    { label: "Contact Us", href: "/contact-us", variant: "default" as const, className: "text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all text-base" },
    { label: "Learn How It Works", href: "#learn-how-it-works", variant: "outline" as const, className: "text-foreground px-8 py-3 rounded-full font-semibold transition-all text-base" },
  ],
};