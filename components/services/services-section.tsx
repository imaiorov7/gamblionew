"use client";

import Link from "next/link";
import { useState, useRef, useEffect, type ComponentPropsWithoutRef, ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Description, Title } from "../ui/typography";
import LineChart from "./analytics";
import Chat from "./chat";
import Predict from "./predict";
import { Recommendation } from "./recommendation";

interface Feature {
  id: number;
  tabName: string;
  title: string | ReactNode;
  name: string | ReactNode;
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
  const [activeTab, setActiveTab] = useState<number>(features[0].id);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const isClickingRef = useRef(false);

  // 1. Center the Active Tab automatically when it changes
  useEffect(() => {
    if (tabsContainerRef.current) {
      const activeTabElement = tabsContainerRef.current.querySelector(`[data-tab-id="${activeTab}"]`) as HTMLElement;
      if (activeTabElement) {
        const container = tabsContainerRef.current;
        const scrollLeft = activeTabElement.offsetLeft - container.clientWidth / 2 + activeTabElement.clientWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [activeTab]);

  // 2. Sync swiping cards back to the active tab via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-feature-id"));
            // Only update via scroll if the user isn't currently clicking a tab
            if (id && !isClickingRef.current) {
              setActiveTab(id);
            }
          }
        });
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.6, // Triggers when 60% of the card is visible in the viewport
      }
    );

    const container = scrollContainerRef.current;
    if (container) {
      Array.from(container.children).forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  // 3. Handle Tab Clicks (Scroll to corresponding card)
  const handleTabClick = (id: number, index: number) => {
    isClickingRef.current = true;
    setActiveTab(id);
    
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const child = container.children[index] as HTMLElement;
      
      if (child) {
        child.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
      
      // Release the click lock after smooth scroll completes
      setTimeout(() => {
        isClickingRef.current = false;
      }, 500); 
    }
  };

  return (
    <div id="services" className={cn("scroll-mt-32 w-full", className)}>
      
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center justify-center pb-8 md:pb-14 space-y-3 md:space-y-4">
        <Title className="text-3xl md:text-5xl font-bold tracking-tight text-center">
          Services
        </Title>
        <Description className="text-center text-base md:text-xl text-muted-foreground max-w-2xl">
          Four tools. One platform. Convenient and impactful.
        </Description>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        
        {/* =========================================
            MOBILE VIEW: SWIPEABLE CARDS + TABS
        ========================================= */}
        <div className="flex flex-col md:hidden w-full gap-4">
          
          {/* Scrollable Tabs */}
          <div 
            ref={tabsContainerRef}
            className="flex overflow-x-auto gap-3 pb-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {features.map((feature, index) => {
              const isActive = activeTab === feature.id;
              return (
                <button
                  key={feature.id}
                  data-tab-id={feature.id}
                  onClick={() => handleTabClick(feature.id, index)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 snap-start shrink-0 border",
                    isActive 
                      ? "bg-primary/10 text-primary border-primary/50 shadow-sm" 
                      : "bg-muted/5 text-muted-foreground border-border/40 hover:bg-muted/10"
                  )}
                >
                  {feature.tabName}
                </button>
              );
            })}
          </div>

          {/* Swipeable Content Cards */}
          <div 
            ref={scrollContainerRef}
            className="flex w-full overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden gap-4 pb-4 mt-1"
          >
            {features.map((feature) => (
              <div 
                key={feature.id}
                data-feature-id={feature.id}
                className="w-full shrink-0 snap-center bg-card border border-border/50 rounded-[1.5rem] shadow-lg overflow-hidden flex flex-col"
              >
                {/* Top: Animation */}
                <div className="relative w-full h-[200px] bg-gradient-to-br from-custom-dark to-background border-b border-border/40 flex items-center justify-center p-4 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 blur-[60px] pointer-events-none rounded-full" />
                  <div className="relative z-10 w-full h-full flex items-center justify-center [&>*]:max-w-full [&>*]:max-h-full">
                    <div className="w-full h-full flex justify-center items-center">
                      {feature.img}
                    </div>
                  </div>
                </div>

                {/* Bottom: Content */}
                <div className="flex flex-col p-6 gap-6 bg-muted/5 flex-1">
                  <div className="flex flex-col gap-1.5">
                    <div className="text-2xl font-bold tracking-tight uppercase text-foreground">
                      {feature.title}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground leading-tight">
                      {feature.name}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-foreground font-medium text-sm leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 mt-auto">
                    <Link
                      href={feature.href}
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "w-full px-6 py-5 rounded-xl text-sm font-semibold shadow-md shadow-primary/10 transition-all text-white text-center"
                      )}
                    >
                      {feature.cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
            DESKTOP VIEW: 2x2 BENTO GRID
        ========================================= */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 md:gap-8 w-full">
          {features.map((feature) => {
            return (
              <div 
                key={feature.id} 
                className="group flex flex-col bg-card border border-border/50 rounded-3xl md:rounded-[2rem] shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative w-full h-[240px] bg-gradient-to-br from-custom-dark to-background border-b border-border/40 flex items-center justify-center p-4 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 blur-[80px] group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none rounded-full" />
                  <div className="relative z-10 w-full h-full flex items-center justify-center [&>*]:max-w-full [&>*]:max-h-full">
                    {feature.img}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col p-8 gap-6 flex-1 bg-muted/5">
                  <div className="flex flex-col gap-1.5">
                    <div className="text-3xl font-bold tracking-tight uppercase text-foreground">
                      {feature.title}
                    </div>
                    <div className="text-base font-medium text-muted-foreground leading-tight">
                      {feature.name}
                    </div>
                  </div>

                  <ul className="space-y-3 flex-1 mt-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-foreground font-medium text-sm leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-border/40 mt-auto">
                    <Link
                      href={feature.href}
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "w-full px-6 py-5 rounded-xl text-base font-semibold shadow-md shadow-primary/10 hover:shadow-primary/30 transition-all text-white text-center"
                      )}
                    >
                      {feature.cta}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

const features: Feature[] = [
  {
    id: 1,
    tabName: "Analytics",
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
        <span className="text-primary">Win </span>more.
      </>
    ),
    benefits: [
      "Real-time visibility into all major KPIs",
      "Predefined & custom automated reporting",
      "Turn gaming data into actionable business decisions",
    ],
    href: "/analytics",
    cta: "Explore Analytics",
    img: <LineChart />,
  },
  {
    id: 2,
    tabName: "Predict",
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
        <span className="text-primary">Protect </span>growth.
      </>
    ),
    benefits: [
      "Identify emerging VIPs before the competition",
      "Detect bonus abuse and compliance risks instantly",
      "Predict churn and automate retention strategies",
    ],
    href: "/predict",
    cta: "Explore Predict",
    img: <Predict />,
  },
  {
    id: 3,
    tabName: "uChoose",
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
        <span className="text-primary">Max </span>retention.
      </>
    ),
    benefits: [
      "AI-powered personalized game discovery",
      "Significantly boost conversion & engagement rates",
      "Enable targeted weekly player bundles",
    ],
    href: "/uChoose",
    cta: "Explore uChoose",
    img: <Recommendation />,
  },
  {
    id: 4,
    tabName: "Care",
    title: (
      <>
        G<span className="font-semibold text-primary">a</span>mbl
        <span className="font-semibold text-primary ">i</span>o{" "}
        <span className="text-primary">Care</span>
      </>
    ),
    name: (
      <>
        Support that <span className="text-primary">never sleeps.</span>
      </>
    ),
    benefits: [
      "Dramatically reduce operational support costs",
      "Monitor live agent and ticketing performance",
      "Boost player satisfaction with higher First Time Resolution",
    ],
    href: "/care",
    cta: "Explore Care",
    img: <Chat />,
  },
];