import type { Metadata } from "next";
import React from "react";
import CTASection from "@/components/cta-section";
import Hero from "@/components/hero";
import CylinderVisualization from "@/components/shared/cylinder-visualization";
import DashedBorder from "@/components/shared/dashed-border";
import FeatureIntro from "@/components/shared/feature-intro";
import FeatureShowcase from "@/components/shared/feature-showcase";
import KeyCapabilities from "@/components/shared/key-capabilities";
import ObjectiveDeliverables from "@/components/shared/objective-deliverables";
import ProcessFlowchart from "@/components/shared/process-flowchart";
import ReportCardsSimple from "@/components/shared/report-cards-simple";
import TicketTree from "@/components/shared/ticket-tree";
import ValueProposition from "@/components/shared/value-proposition";
import VisualizationSuite, {
  type Connection,
} from "@/components/shared/visualization-suite";
import { HeroVideoDialog } from "@/components/video-dialog";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Gamblio Care - AI-Powered Customer Support for Gambling Operators",
  description:
    "Support that never sleeps. AI that never stops learning. Gamblio Care combines AI-driven chat automation with live agent tools, smart ticketing, and real-time analytics — empowering operators to deliver faster, smarter, and more efficient player support.",
  path: "/care",
  keywords: [
    "AI customer support",
    "gambling customer care",
    "casino support automation",
    "AI chat agent gambling",
    "customer support software",
    "ticketing system gambling",
    "player support AI",
    "casino customer service",
    "automated support gambling",
    "live agent support",
    "customer care platform",
    "support analytics gambling",
  ],
});

const Care = () => {
  const ticketTreeData = {
    title: "Customer Care Process",
    description: "Our comprehensive approach to customer support and care",
    ticketsTitle: "Support Steps",
    tickets: [
      { title: "Automatic creation when AI cannot resolve" },
      { title: "Relevant conversation extracted into the ticket" },
      { title: "Assign to individual agents or groups" },
      { title: "Internal comments for team collaboration" },
      { title: "Full audit log: assignments, actions, timestamps" },
      { title: "Urgent / Ongoing / Closed / Assigned to Me views" },
      { title: "" },
    ],
    connections: [
      {
        id: 1,
        from: 0,
        to: 3,
        fromSide: "right",
        toSide: "top",
        animated: true,
        animationDuration: 4,
        animationDelay: 0,
        reverse: false,
        showDots: true,
        pathColor: "rgba(255,255,255,0.4)",
      },
      {
        id: 2,
        from: 0,
        to: 2,
        fromSide: "left",
        toSide: "top",
        animated: true,
        animationDuration: 4,
        animationDelay: 0,
        reverse: false,
        dashed: true,
        showDots: false,
        pathColor: "rgba(255,255,255,0.4)",
      },
      {
        id: 3,
        from: 2,
        to: 5,
        fromSide: "left",
        toSide: "left",
        animated: true,
        animationDuration: 4,
        animationDelay: 0,
        reverse: false,
        dashed: true,
        showDots: false,
        pathColor: "rgba(255,255,255,0.4)",
      },
      {
        id: 4,
        from: 1,
        to: 3,
        fromSide: "left",
        toSide: "top",
        animated: true,
        animationDuration: 4,
        animationDelay: 0,
        reverse: false,
        showDots: true,
        pathColor: "rgba(255,255,255,0.4)",
      },
      {
        id: 5,
        from: 1,
        to: 4,
        fromSide: "right",
        toSide: "top",
        animated: true,
        animationDuration: 4,
        animationDelay: 0,
        reverse: false,
        showDots: false,
        dashed: true,
        pathColor: "rgba(255,255,255,0.4)",
      },
      {
        id: 6,
        from: 4,
        to: 5,
        fromSide: "right",
        toSide: "right",
        animated: true,
        animationDuration: 4,
        animationDelay: 0,
        reverse: false,
        showDots: false,
        dashed: true,
        pathColor: "rgba(255,255,255,0.4)",
      },
      {
        id: 7,
        from: 4,
        to: 5,
        fromSide: "left",
        toSide: "top",
        animated: true,
        animationDuration: 4,
        animationDelay: 0,
        reverse: false,
        showDots: true,
        pathColor: "rgba(255,255,255,0.4)",
      },
      {
        id: 8,
        from: 2,
        to: 5,
        fromSide: "right",
        toSide: "top",
        animated: true,
        animationDuration: 4,
        animationDelay: 0,
        reverse: false,
        showDots: true,
        pathColor: "rgba(255,255,255,0.4)",
      },
      {
        id: 9,
        from: 5,
        to: 6,
        fromSide: "left",
        toSide: "top",
        animated: true,
        animationDuration: 4,
        animationDelay: 0,
        reverse: false,
        showDots: true,
        pathColor: "rgba(255,255,255,0.4)",
      },
      {
        id: 10,
        from: 5,
        to: 6,
        fromSide: "right",
        toSide: "top",
        animated: true,
        animationDuration: 4,
        animationDelay: 0,
        reverse: false,
        showDots: true,
        pathColor: "rgba(255,255,255,0.4)",
      },
      {
        id: 11,
        from: 5,
        to: 6,
        fromSide: "bottom",
        toSide: "top",
        animated: true,
        animationDuration: 4,
        animationDelay: 0,
        reverse: false,
        showDots: true,
        pathColor: "rgba(255,255,255,0.4)",
      },
    ],
    buttonText: "Get Started",
    buttonLink: "/contact-us",
  };

  return (
    <div className="w-full  border-b-0">
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
            <span className="text-primary">All-in-One</span> Support. Automated.
            Intelligent. Effortless.
          </>
        }
        description="Gamblio Care is the customer support engine built exclusively for gambling operators. It unifies AI chat automation, live agent workflows, ticket management, and operational analytics into one streamlined solution."
        description2="Purpose-built for gaming environments, it delivers the support speed players expect — while cutting cost-to-serve and improving overall satisfaction."
        processFlowchart={
          <ProcessFlowchart
            steps={[
              { number: 1, label: "AI chat agent responses" },
              { number: 2, label: "Live agent intervention" },
              { number: 3, label: "Conversation management" },
              { number: 4, label: "Ticket creation & collaboration" },
              { number: 5, label: "Performance and productivity analytics" },
            ]}
            labels={[
              { title: "gamblio ai", position: "top", index: 0 },
              { title: "predict", position: "bottom", index: 1.68 },
            ]}
          />
        }
        subTitle="It acts as a central command center for:"
        signature={
          <>
            "Automate more. Support better. Grow faster."
            <br />
            <span className="font-medium text-primary">-Gamblio</span>
          </>
        }
      />

      <KeyCapabilities
        title={
          <>
            Fast, Intelligent, Player-Centric
            <span className="text-primary"> Support</span>.
          </>
        }
        description={
          <>
            With Gamblio Care, players get instant answers, agents get full
            context, and managers get complete visibility into performance, all
            in real time.
          </>
        }
        subTitle=" Key capabilities:"
        list={[
          "Instant AI responses powered by evolving knowledge base",
          "Live agent takeover with full player history",
          "Threaded conversation views with filters & search",
          "Smart ticketing system for escalations",
          "KPIs, performance dashboards & agent metrics",
          "Session-based tracking for logged-in & guest users",
          "File handling: screenshots, documents, media",
        ]}
        buttonTitle="Explore Support Workflow"
      />

      <ValueProposition
        title={
          <>
            AI That <span className="text-primary"> Resolves First</span>.
            Agents That Take Over
            <span className="text-primary"> When Needed</span>.
          </>
        }
        description="With Gamblio Care, players get instant answers, agents get full context, and managers get complete visibility into performance, all in real time"
        box1="Reads and interprets player messages in natural language"
        box2="Uses knowledge base, platform policies & past interactions"
        box3="Sends instant, consistent, compliant responses"
        box4="Summarizes conversations for agents"
        box5="Routes complex queries to human support"
        box6="Faster resolutions, fewer repetitive tasks, lower support costs."
      />

      <ReportCardsSimple
        title={
          <>
            <span className="text-primary">All </span> Conversations.{" "}
            <span className="text-primary">One </span>
            Interface. <span className="text-primary">Total </span>
            Clarity.
          </>
        }
        description="Agents receive full context for every message, including player history, balance preview, session activity, and past interactions."
        data={[
          {
            description: "Chat thread with message, event, and media filters",
            hasImage: false,
          },
          {
            description: "Agent vs AI indicators",
            hasImage: false,
          },
          {
            description: "“Take Over” & “Return to AI” controls",
            hasImage: false,
          },
          {
            description:
              "Profile preview (balance, LTV, last bet, last payment)",
            hasImage: true,
            imgPosition: "-right-10 -top-14",
            imgArrowRotation: "none",
            imgArrowPosition: "-right-16 -top-18",
          },
          {
            description: "Conversation timeline & read receipts",
            hasImage: true,
            imgPosition: "-left-10 -bottom-14",
            imgArrowRotation: "rotate-180 ",
            imgArrowPosition: " -left-16 -bottom-18",
          },
          {
            description: "Priority sorting: VIP, urgent, assigned, closed",
            hasImage: false,
          },
          {
            description:
              "AI Summary to provide fast context to any agent available",
            hasImage: false,
          },
        ]}
      />
      <TicketTree {...ticketTreeData} />

      <VisualizationSuite
        title={
          <>
            <span className="text-primary">Track </span>Everything.{" "}
            <span className="text-primary">Improve </span>Everything.
          </>
        }
        description="Managers and leads get real-time visibility into support performance, enabling informed staffing, coaching, and workload balancing."
        cards={[
          {
            title: "First Response Time (FRT)",
          },
          {
            title: "Resolution Time",
          },
          {
            title: "Messages sent & seen",
          },
          {
            title: "Chats handled: AI vs agents",
          },
          {
            title: "Agent availability & activity",
          },
          {
            title: "Tickets closed, pending, or overdue",
          },
        ]}
        cards2={[
          {
            title: "Performance line charts (today vs previous days)",
          },
          {
            title: "Agent comparison dashboards",
          },
          {
            title: "Time-of-day activity heatmaps",
          },
        ]}
        cardsTitle="Metrics tracked:"
        cardsTitle2="Additional Tools:"
        connections={careConnections}
        buttonText="Explore our services"
        buttonLink="/services"
      />
      <CylinderVisualization
        title={
          <>
            Support <span className="text-primary">Every Player</span>, Logged
            In or Not.
          </>
        }
        description="Gamblio Care handles support for both logged-in users and guest visitors, ensuring seamless communication from first message to resolution."
        cards={[
          {
            text: "Guest conversations tracked per session",
          },
          {
            text: "Smooth transition when a guest registers",
          },
          {
            text: "Unified history for players across devices",
          },
        ]}
        subTitle="Better player experience. Zero context loss."
      />
      <ObjectiveDeliverables
        title={
          <>
            <span className="text-primary">Lower </span>Costs.{" "}
            <span className="text-primary">Faster </span>Support.
            <span className="text-primary"> Happier </span>Players.
          </>
        }
        description="Every feature in Gamblio Analytics is designed to directly influence performance — reducing blind spots, increasing Lifetime Value of players, and driving profitability."
        leftColumn={[
          "Reduce support costs",
          "Increase satisfaction",
          "Improve efficiency",
          "Strengthen compliance",
          "Boost agent effectiveness",
        ]}
        leftLabels={{ title: "analytics", index: 0.5 }}
        rightLabels={{ title: "gamblio ai", index: 3.5 }}
        rightColumn={[
          "AI handles first-line inquiries",
          "Faster responses & consistent answers",
          "One interface for all support operations",
          "Logged conversations + controlled responses",
          "Summaries, dashboards & automation",
        ]}
      />

      {/* <ValueProposition
        title={
          <>
            Core Value <span className="text-primary">Proposition</span>
          </>
        }
        description="Gamblio Care delivers the perfect balance between automation and human expertise — creating a support ecosystem that is faster, more reliable, and dramatically more efficient than traditional chat solutions."
        box1="Always-On Support"
        box2="AI-Enhanced Communication"
        box3="Player-Centric Assistance"
        box4="Smarter Ticketing"
        box5="Operational Insight"
        box6="Human + AI Synergy"
      /> */}
      <FeatureShowcase
        title={
          <>
            Core Value <span className="text-primary">Proposition</span>
          </>
        }
        description="Gamblio Care delivers the perfect balance between automation and human expertise — creating a support ecosystem that is faster, more reliable, and dramatically more efficient than traditional chat solutions."
        chat1="Always-On Support"
        chat2="AI-Enhanced Communication"
        chat3="Player-Centric Assistance"
        chat4="Smarter Ticketing"
        chat5="Operational Insight"
        chat6="Human + AI Synergy"
      />
      {/* Section 7: Call to Action */}
      <CTASection
        title="Ready to Deliver Faster, Smarter Player Support?"
        description="See how Gamblio Care transforms customer service into an automated, intelligent, and efficient operation."
        buttonText="Contact Us"
        buttonLink="/contact-us"
      />
    </div>
  );
};

export default Care;

const HeroDetails = {
  title: (
    <>
      Support that<span className="text-primary"> never sleeps.</span> AI that
      <span className="text-primary"> never stops learning.</span>
    </>
  ),
  tittleClassName:
    "text-4xl font-medium tracking-tighter text-center md:text-4xl lg:text-5xl xl:text-6xl text-balance ",
  description: (
    <>
      Gamblio Care combines AI-driven chat automation with live agent tools,
      smart ticketing, and real-time analytics — empowering operators to deliver
      faster, smarter, and more efficient player support.
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

const careConnections: Connection[] = [
  {
    from: 0,
    to: 1,
    fromSide: "right",
    toSide: "left",
    dashed: true,
    animated: false,
  },
  {
    from: 1,
    to: 2,
    fromSide: "right",
    toSide: "left",
    animated: true,
    animationDuration: 4,
    animationDelay: 0,
    showDots: true,
  },
  {
    from: 2,
    to: 3,
    fromSide: "top",
    toSide: "left",
    animated: true,
    animationDuration: 4.3,
    animationDelay: 0.5,
    showDots: true,
  },

  {
    from: 3,
    to: 4,
    fromSide: "bottom",
    toSide: "left",
    animated: true,
    animationDuration: 4.5,
    animationDelay: 1,
    showDots: true,
  },
  {
    from: 4,
    to: 5,
    fromSide: "top",
    toSide: "left",
    animated: true,
    animationDuration: 4.5,
    animationDelay: 1,
    showDots: true,
  },
];
