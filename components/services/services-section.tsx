import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import Chat from "./chat";
import LineChart from "./analytics";
import { Recommendation } from "./recommendation";

interface Feature {
  name: string;
  description: string;
  href: string;
  className?: string;
  cta: string;
  background?: ReactNode;
}

interface GridProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export function ServicesSection({ className, ...props }: GridProps) {
  return (
    <>
      <div id="services" className="flex flex-col items-center md:mx-7 mx-3 border-x py-12">
        <h1 className="font-medium text-3xl text-center">
       Services
        </h1>
        <p className="text-muted-foreground md:w-1/2 text-sm text-center">
         Gamblio AI. Fast, smart, personal—and always learning.
        </p>
      </div>
      <div
        className={cn("grid md:grid-cols-2 md:mx-7 mx-3 border-x", className)}
        {...props}
      >
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={cn(
              "group relative col-span-1 h-[400px] flex flex-col justify-between overflow-hidden bg-background transform-gpu dark:bg-background",
              feature.className
            )}
          >
            {feature.background && <div>{feature.background}</div>}
            <div className="p-4">
              <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                  {feature.name}
                </h3>
                <p className="max-w-lg text-neutral-400">
                  {feature.description}
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
          </div>
        ))}
      </div>
    </>
  );
}

const features: Feature[] = [
  {
    name: "24/7 Intelligent Assistant",
    description: "We automatically save your files as you type.",
    href: "#",
    className: " border-b border-r",
    cta: "Learn more",
    background: <Chat></Chat>,
  },
  {
    name: "Advanced Analytics",
    description: "Get notified when something happens.",
    href: "#",
    className: " border-b ",
    cta: "Learn more",
    background: (
      <LineChart></LineChart>
    ),
  },
  {
    name: "Next-Level Game Recommendations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    className: "border-r md:col-span-2",
    cta: "Learn more",
    background: <Recommendation></Recommendation>
  },
];

