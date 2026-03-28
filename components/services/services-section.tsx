import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import React from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Description, Title } from "../ui/typography";
import LineChart from "./analytics";
import Chat from "./chat";
import Predict from "./predict";
import { Recommendation } from "./recommendation";

interface Feature {
  title?: string | ReactNode;
  name: string | ReactNode;
  id: number;
  description: string | ReactNode;
  benefits: string[];
  href: string;
  className?: string;
  cta: string;
  img?: ReactNode;
}

interface GridProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export function ServicesSection({ className }: GridProps) {
  return (
    <div id="services" className={cn("scroll-mt-32 w-full", className)}>
      
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center justify-center pb-12 md:pb-16 space-y-3 md:space-y-4">
        <Title className="text-3xl md:text-5xl font-bold tracking-tight text-center">
          Services
        </Title>
        <Description className="text-center text-base md:text-xl text-muted-foreground max-w-2xl">
          Four tools. One platform. Convenient and impactful.
        </Description>
      </div>

      {/* SERVICES LIST */}
      <div className="flex flex-col gap-24 md:gap-32 pb-8 md:pb-16 pt-4 md:pt-8">
        {features.map((feature, index) => {
          const isEven = index % 2 === 0;

          return (
            <div 
              key={feature.id} 
              className="flex flex-col lg:grid lg:grid-cols-2 gap-5 lg:gap-16 items-center"
            >
              
              {/* === MOBILE ONLY HEADER === */}
              <div className="flex flex-col lg:hidden w-full gap-1 text-center mb-1">
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground uppercase">
                  {feature.title}
                </div>
                <div className="text-base sm:text-lg font-medium text-muted-foreground leading-tight mt-1">
                  {feature.name}
                </div>
              </div>

              {/* === IMAGE/ANIMATION CONTAINER === */}
              <div className={cn("flex flex-col gap-4 md:gap-6 w-full", isEven ? "lg:order-last" : "lg:order-first")}>
                
                <div className="hidden lg:block text-2xl xl:text-3xl font-medium text-muted-foreground leading-tight">
                  {feature.name}
                </div>

                {feature.img && (
                  <div className="relative w-full h-[180px] sm:h-[220px] md:h-auto md:aspect-video rounded-3xl md:rounded-[2rem] overflow-hidden flex items-center justify-center p-4 bg-gradient-to-br from-custom-dark to-background border border-border/40 shadow-xl">
                    <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none rounded-full" />
                    <div className="relative z-10 w-full h-full flex items-center justify-center [&>*]:max-w-full [&>*]:max-h-full">
                      {feature.img}
                    </div>
                  </div>
                )}
              </div>

              {/* === TEXT CONTENT === */}
              <div className={cn("flex flex-col justify-center gap-4 md:gap-6 w-full", isEven ? "lg:order-first" : "lg:order-last")}>
                
                {/* DESKTOP ONLY: Title */}
                <div className="hidden lg:block text-4xl xl:text-5xl font-bold tracking-tight uppercase">
                  {feature.title}
                </div>

                <Description className="text-sm md:text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
                  {feature.description}
                </Description>

                {/* Key Benefits */}
                <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-muted/10 border border-border/50">
                  <p className="font-semibold text-foreground mb-3 text-sm md:text-base">Key benefits:</p>
                  <ul className="space-y-2 md:space-y-3">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 md:gap-3">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-xs sm:text-sm md:text-base">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={feature.href}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full sm:w-fit mt-1 md:mt-2 px-8 py-4 md:py-6 rounded-full text-sm md:text-lg font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all text-white text-center"
                  )}
                >
                  {feature.cta}
                </Link>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
const features: Feature[] = [
  {
    id: 1,
    title: (
      <>
        G<span className="font-semibold text-primary">a</span>mbl
        <span className="font-semibold text-primary ">i</span>o{" "}
        <span className="text-primary">Analytics</span>
      </>
    ),
    name: (
      <>
        <span className="text-primary">Know</span> faster.{" "}
        <span className="text-primary">Act</span> smarter.{" "}
        <span className="text-primary">Win </span>
        more.
      </>
    ),
    description: (
      <>
        A performance intelligence hub tracking all major KPIs - empowering
        gambling operators with real-time business intelligence to optimize
        profitability, control risk, and scale operations with confidence.
        <br />
        <br />
        <span className="border-l-4 pl-3 md:pl-4 border-primary text-foreground font-medium block mt-1 md:mt-2 text-left">
          Every insight drives measurable business growth.
        </span>
      </>
    ),
    benefits: [
      "Real-time visibility into operations",
      "Predefined & custom KPI reports",
      "Actionable insights that turn data into smarter decisions",
    ],
    href: "/analytics",
    cta: "See Analytics",
    img: <LineChart />,
  },
  {
    id: 2,
    title: (
      <>
        G<span className="font-semibold text-primary">a</span>mbl
        <span className="font-semibold text-primary ">i</span>o{" "}
        <span className="text-primary">Predict</span>
      </>
    ),
    name: (
      <>
        <span className="text-primary">Predict</span> behavior.{" "}
        <span className="text-primary">Prevent</span> losses.{" "}
        <span className="text-primary">Protect </span> growth.
      </>
    ),
    description: (
      <>
        AI-powered player profiling and behavioral forecasting that turns
        reactivity into proactivity. Gamblio Predict helps operators identify
        VIPs early, detect bonus abuse, prevent churn and ensure responsible
        play — before risks or missed opportunities arise.
        <br />
        <br />
        <span className="border-l-4 pl-3 md:pl-4 border-primary text-foreground font-medium block mt-1 md:mt-2 text-left">
          Act before risks or missed opportunities arise.
        </span>
      </>
    ),
    benefits: [
      "Identify emerging VIPs and compliance risks",
      "Detect bonus abuse and risky patterns",
      "Predict churn and automate retention",
    ],
    href: "/predict",
    cta: "Meet Gamblio Predict",
    img: <Predict />,
  },
  {
    id: 3,
    title: (
      <>
        G<span className="font-semibold text-primary">a</span>mbl
        <span className="font-semibold text-primary ">i</span>o{" "}
        <span className="text-primary">
          <span className="lowercase">u</span>Choose
        </span>
      </>
    ),
    name: (
      <>
        <span className="text-primary">Right</span> game.{" "}
        <span className="text-primary">Right</span> time.{" "}
        <span className="text-primary">Maximum </span>retention.
      </>
    ),
    description: (
      <>
        Personalization is half the story. uChoose is Gamblio’s AI-powered
        recommendation engine designed to maximize player engagement and game
        discovery, just like Netflix does with shows. But way cooler.
        <br />
        <br />
        <span className="border-l-4 pl-3 md:pl-4 border-primary text-foreground font-medium block mt-1 md:mt-2 text-left">
          Turn player data into personalized game discovery.
        </span>
      </>
    ),
    benefits: [
      "Personalized game suggestions",
      "Boosts conversion & engagement",
      "Enables weekly bundles",
    ],
    href: "/uChoose",
    cta: "Discover uChoose",
    img: <Recommendation />,
  },
  {
    id: 4,
    title: (
      <>
        G<span className="font-semibold text-primary">a</span>mbl
        <span className="font-semibold text-primary ">i</span>o{" "}
        <span className="text-primary">Care</span>
      </>
    ),
    name: (
      <>
        Support that <span className="text-primary">never sleeps</span>, AI that{" "}
        <span className="text-primary">never stops learning.</span>
      </>
    ),
    description: (
      <>
        Automate, analyze, and elevate customer care. Gamblio Care combines AI
        and live support to deliver 24/7 assistance with faster resolutions and
        lower operational costs. By learning from every interaction and using
        full chat history as context, Gamblio goes beyond answering questions —
        it understands players, knows what they truly care about, and drives
        higher retention and revenue in return.
        <br />
        <br />
        <span className="border-l-4 pl-3 md:pl-4 border-primary text-foreground font-medium block mt-1 md:mt-2 text-left">
          Provide AI-powered customer support with full player context.
        </span>
      </>
    ),
    benefits: [
      "Operational cost reduction",
      "Ticketing & live agents performance monitoring",
      "Player satisfaction through a higher FTR rate",
    ],
    href: "/care",
    cta: "See Gamblio Care",
    img: <Chat />,
  },
];