import Link from "next/link";
import React from "react";
import type, { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import DashedBorder from "../shared/dashed-border";
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
    <div id="services" className="scroll-mt-32">
      <DashedBorder sides="all" className="flex flex-col items-center py-12 ">
        <Title className="mb-4 font-medium text-center">Services</Title>
        <Description className="text-center text-muted-foreground md:w-1/2">
          Four tools. One platform. Convenient and impactful.
        </Description>
      </DashedBorder>
      <DashedBorder
        sides="x"
        className={cn(
          "flex flex-col items-center pt-12 pb-0 px-0 gap-12",
          className,
        )}
      >
        {features.map((feature, index) => (
          <React.Fragment key={feature.id}>
            <Title className="text-3xl uppercase">{feature.title}</Title>
            <DashedBorder
              sides="all"
              key={feature.id}
              className={cn(
                "flex flex-col-reverse items-stretch w-full h-full p-0 md:flex-row md:mx-0 border-x-0 min-h-[450px]",
                index % 2 !== 0 && "md:flex-row-reverse",
              )}
            >
              <DashedBorder
                sides="none"
                className="flex flex-col items-center justify-center w-full md:w-1/2 mx-0 md:!mx-0 px-0 md:p-4 gap-4"
              >
                <Title className="w-full pl-4 text-left lg:text-3xl md:pl-4">
                  {feature.name}
                </Title>
                <Description className="px-4">
                  {feature.description}
                </Description>
                <DashedBorder
                  sides="all"
                  className="w-full  bg-[#0e0e10] text-left p-0"
                >
                  <p className="w-full p-4 text-white">Key benefits:</p>
                  <div
                    className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6`}
                  >
                    {feature.benefits.map((benefit, index) => {
                      const isLastTwoInFive =
                        feature.benefits.length === 5 && index >= 3;
                      return (
                        <DashedBorder
                          sides="all"
                          key={benefit}
                          className={cn(
                            "w-full text-left mx-0 md:mx-0",
                            isLastTwoInFive ? "lg:col-span-3" : "lg:col-span-2",
                          )}
                        >
                          <p className="w-full text-white ">{benefit}</p>
                        </DashedBorder>
                      );
                    })}
                  </div>
                </DashedBorder>
                <Link
                  href={feature.href}
                  className={`${buttonVariants({
                    variant: "default",
                  })} w-fit text-white cursor-pointer`}
                >
                  {feature.cta}
                </Link>
              </DashedBorder>
              {feature.img && (
                <DashedBorder
                  sides={`even:left odd:right` as "left" | "right"}
                  // sidesMd={`even:left odd:right` as "left" | "right"}
                  className="w-full md:w-1/2 md:!mx-0 overflow-hidden  flex items-center justify-center"
                >
                  {feature.img}
                </DashedBorder>
              )}
            </DashedBorder>
          </React.Fragment>
        ))}
      </DashedBorder>
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
        <span className="border-l-6 pl-2 border-primary text-primary">
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
    className: " border-b border-r",
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
        <span className="border-l-6 pl-2 border-primary text-primary">
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
    className: " border-b ",
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
        <span className="border-l-6 pl-2 border-primary text-primary">
          Turn player data into personalized game discovery.
        </span>
      </>
    ),
    benefits: [
      "Personalized game suggestions",
      "Boosts conversion & engagement",
      "Enables weekly bundles",
    ],
    href: "uChoose",
    className: "border-r md:col-span-2",
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
        <span className="border-l-6 pl-2 border-primary text-primary">
          Provide AI-powered customer support with full player context.
        </span>
      </>
    ),
    benefits: [
      "Operational cost reduction",
      "Ticketing & live agents performance monitoring",
      "Player satisfaction through a higher FTR rate",
    ],
    href: "#",
    className: " border-b ",
    cta: "See Gamblio Care",
    img: <Chat />,
  },
];
