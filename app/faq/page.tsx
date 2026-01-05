import type { Metadata } from "next";
import DashedBorder from "@/components/shared/dashed-border";
import { Description, H1 } from "@/components/ui/typography";
import { createMetadata } from "@/lib/metadata";

const faqData = [
  {
    question: "What business problems does Gamblio solve?",
    answer:
      "Gamblio turns fragmented gambling data into real-time, operational intelligence: it helps you raise player LTV, predicts player behaviour, cuts cost-to-serve, and gives you the tools to make data-driven operations, compress costs and support business decisions every day.",
  },
  {
    question: "How quickly can we see impact after integration?",
    answer:
      "You'll see operational value within days with business analytics and recommendations; measurable KPIs (reduced ticket volume, improved CTR, early churn interventions, early VIP players detection) typically emerge within a few weeks depending on available data. A short use proves fast impact.",
  },
  {
    question: "What integration options do you support?",
    answer:
      "We use industry-standard Pub-Sub streaming services (Kafka/RabbitMQ) for real-time ingestion. Optionally we also support secure REST APIs integration. Import via read-only DB clone is used only for initial data population and testing. Widgets (chat/games recommendations) deploy via a single JS snippet.",
  },
  {
    question: "How much engineering effort is required from our side?",
    answer:
      "For streaming: only topics mapping and basic access setup. Widget integration is a one-time snippet (minimal frontend work). Gamblio provides full documentation and hands-on support during onboarding.",
  },
  {
    question: "What are the hardware / infrastructure requirements?",
    answer:
      "For clients hosting their own streaming stack: a standard Kafka/RabbitMQ cluster with sufficient retention and throughput. For clients using Gamblio managed endpoints, minimal client infrastructure is required. We provide detailed technical specs during scoping.",
  },
  {
    question: "Do you store our raw data?",
    answer:
      "Gamblio ingests and processes the data necessary for analytics and models. Data handling, retention and storage are defined in your contract.",
  },
  {
    question: "Who owns the data?",
    answer:
      "You retain ownership of your data. Gamblio acts as a processor under the SLA; data export and deletion policies are included in the contract to ensure you can extract or remove data at any time.",
  },
  {
    question: "How do you ensure security and compliance?",
    answer:
      "Gamblio is ISO 27001 certified and designed to support GDPR and other regional privacy requirements. We provide documentation for audits and certifications.",
  },
  {
    question: "How accurate are the prediction models (churn, VIP, abuse)?",
    answer:
      "Accuracy depends on data volume and quality. Models are production-grade and become robust within weeks of live data. We surface confidence, feature importance, and allow threshold tuning so teams can validate and trust decisions.",
  },
  {
    question: "Can my team override AI decisions?",
    answer:
      "Wherever it makes sense - yes, Operators retain full control - manual adjustments, promotion of games and adjusting model thresholds are all supported. Gamblio is automation + operator control, not a black box.",
  },
  {
    question: "How does Gamblio Analytics help me with business decisions?",
    answer:
      "Gamblio gives gambling operators the clarity they need to act faster and properly through Analytics - a BI tool that provides a powerful dashboard, automated reports, and AI-driven insights that transform data into measurable performance. It gives you instant access to all essential industry KPIs, only a few clicks away.",
  },
  {
    question: "How do you detect bonus abuse or VIP categories?",
    answer:
      "Gamblio Predict includes advanced prediction models, which help operators do proper segmentation of players. Emerging VIP players are going to be spotted in time to be treated properly, Bonus Hunters will trigger alarms, through Responsible Gambling we ensure compliance and Churn rate models prevent users leaving you. This segmentation saves your operation money in no time.",
  },
  {
    question: "How do recommendations (uChoose) impact revenue?",
    answer:
      "Ai-powered Gamblio uChoose widget personalizes game discovery to increase CTR, session length, and conversion. We provide bundle-level attribution so you can measure uplifts in revenue per session and conversion after deployment. What Netflix does with shows, we do with games, while boosting your revenue.",
  },
  {
    question: "How does Gamblio Care help reduce support costs?",
    answer:
      "Gamblio Care includes AI Chat Agent + Customer Care Console, a synergy that provides effortless, always-in-time support with the perfect blend of automation and human expertise. Chat agent provides 24/7 customer care while agents have full player context for fast resolution, and integrates ticket workflows. Typical clients see measurable reductions in cost-to-serve within months.",
  },
  {
    question: "Is multi-market / multi-language supported?",
    answer:
      "Yes. Widgets, reports, and models scale across markets and languages. UI strings and recommendation language adapt via configuration; models can be tuned per market.",
  },
  {
    question: "How do you handle localization and market-specific tuning?",
    answer:
      "We tune VIP and churn thresholds per market and allow percentile-based definitions. Models and business rules can be adjusted for market-specific betting behavior during onboarding.",
  },
];

// Prepare FAQ schema items for layout
export const faqSchemaItems = faqData.map((faq) => ({
  "@type": "Question" as const,
  name: faq.question,
  acceptedAnswer: {
    "@type": "Answer" as const,
    text: faq.answer,
  },
}));

export const metadata: Metadata = createMetadata({
  title: "FAQ - Frequently Asked Questions About Gamblio",
  description:
    "Find answers to the most common questions about Gamblio and its features. Learn about integration, security, compliance, prediction models, analytics, recommendations, and customer support solutions for gambling operators.",
  path: "/faq",
  keywords: [
    "Gamblio FAQ",
    "gambling platform questions",
    "casino software FAQ",
    "AI gambling platform FAQ",
    "integration questions",
    "gambling analytics FAQ",
    "player prediction FAQ",
  ],
});

export default function FAQPage() {
  return (
    <div className="w-full my-24 border-b-0">
      <DashedBorder
        sides="all"
        className="flex flex-col items-center gap-4 py-12"
      >
        <H1 className="font-medium text-center md:text-3xl lg:text-4xl">
          Frequently Asked Questions
        </H1>
        <Description className="text-base text-center text-muted-foreground md:w-1/2">
          Find answers to the most common questions about Gamblio and its
          features. If you don't see your question here, our team will be happy
          to assist—just get in touch with us anytime.
        </Description>
      </DashedBorder>
      <DashedBorder sides="all">
        <ol className="w-full max-w-4xl space-y-6 list-decimal list-inside">
          {faqData.map((faq) => (
            <li key={faq.question} className="list-none">
              <DashedBorder sides="all" className="flex flex-col gap-4 p-6">
                <h2 className="text-xl font-medium">{faq.question}</h2>
                <Description className="text-left text-muted-foreground text-balance md:text-center">
                  {faq.answer}
                </Description>
              </DashedBorder>
            </li>
          ))}
        </ol>
      </DashedBorder>
    </div>
  );
}
