import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import Chat from "./chat";

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

export function Grid({ className, ...props }: GridProps) {
  return (
    <>
      <div className="flex flex-col items-center md:mx-7 mx-3 border-x py-12">
        <h1 className="font-medium text-3xl text-center">
          Empower Your Workflow with AI
        </h1>
        <p className="text-muted-foreground md:w-1/2 text-sm text-center">
          Ask your AI Agent for real-time collaboration, seamless integrations,
          and actionable insights to streamline your operations.
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
      <div className="relative flex h-[300px] w-full items-center justify-center  overflow-hidden">
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2  h-32 bg-gradient-to-b from-[var(--color)] to-[var(--color-transparent)]"></div>
        <svg
          width="600"
          height="200"
          viewBox="0 0 600 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(3, 146, 160,0.3)" />
              <stop offset="100%" stopColor="rgba(3, 146, 160,0)" />
            </linearGradient>
          </defs>

          <path
            d="M 0 157.33 C 20,153.07 60,138.13 100,136 C 120,138.13 160,153.07 200,146.67 C 220,138.13 260,110.4 300,104 C 320,106.13 360,118.93 400,114.67 C 420,108.27 460,97.6 500,82.67 L 600 40 L 600,200 L 0,200 Z"
            fill="url(#lineGradient)"
            opacity="1"
          />

          <path
            d="M 0 157.33 C 20,153.07 60,138.13 100,136 C 120,138.13 160,153.07 200,146.67 C 220,138.13 260,110.4 300,104 C 320,106.13 360,118.93 400,114.67 C 420,108.27 460,97.6 500,82.67 L 600 40"
            stroke="var(--primary)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          <circle cx="300" cy="104" r="4" fill="var(--primary)" />
          <circle
            cx="300"
            cy="104"
            r="10"
            stroke="var(--primary)"
            strokeWidth="2"
            fill="none"
            opacity="0.66"
          />
          <circle
            cx="300"
            cy="104"
            r="10"
            stroke="var(--primary)"
            strokeWidth="2"
            fill="none"
            opacity="0.06"
          />
          <circle
            cx="300"
            cy="104"
            r="10"
            stroke="var(--primary)"
            strokeWidth="2"
            fill="none"
            opacity="0.31"
          />
        </svg>
      </div>
    ),
  },
  {
    name: "Next-Level Game Recommendations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    className: "border-r md:col-span-2",
    cta: "Learn more",
  },
];

