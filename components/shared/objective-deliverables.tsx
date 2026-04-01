import { Description, Title } from "@/components/ui/typography";
import { ArrowDown, ArrowRight } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

interface ObjectiveDeliverablesProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  leftColumn?: Array<string>;
  rightColumn?: Array<string>;
  leftLabel?: string; // e.g., "Objective" or "Analytics"
  rightLabel?: string; // e.g., "Gamblio Delivers" or "Gamblio Care"
}

export default function ObjectiveDeliverables({
  title,
  description,
  leftColumn = [],
  rightColumn = [],
  leftLabel = "Objective",
  rightLabel = "Gamblio Delivers",
}: ObjectiveDeliverablesProps) {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-8 py-8 md:py-8 w-full px-4 overflow-hidden">
      
      {/* Header Area */}
      <div className="flex flex-col items-center gap-3 md:gap-4 text-center max-w-4xl">
        <Title className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
          {title}
        </Title>
        <Description className="text-base md:text-lg text-muted-foreground">
          {description}
        </Description>
      </div>

      <div className="w-full max-w-6xl flex flex-col mt-2 md:mt-4">

        {/* Desktop-only Column Headers */}
        <div className="hidden lg:grid grid-cols-[60px_minmax(0,1fr)_60px] gap-4 w-full px-2 mb-2">
          <div /> 
          <div className="flex w-full justify-between px-6 text-sm font-bold uppercase tracking-widest text-muted-foreground">
            <div className="flex-1">{leftLabel}</div>
            <div className="w-12"></div> 
            <div className="flex-1 text-primary">{rightLabel}</div>
          </div>
          <div /> 
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-[60px_minmax(0,1fr)_60px] lg:gap-x-4 gap-y-4 md:gap-y-4 w-full">

          {/* === STATIC LEFT LABEL === */}
          <div className="hidden lg:flex flex-col items-center justify-center row-start-1 row-span-2 col-start-1 opacity-80 py-2">
            <div className="w-6 border-t-[2px] border-dashed border-border/60" />
            <div className="flex-1 border-l-[2px] border-dashed border-border/60" />
            <span 
              className="py-3 text-[10px] font-bold tracking-widest uppercase text-muted-foreground whitespace-nowrap"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              {leftLabel}
            </span>
            <div className="flex-1 border-l-[2px] border-dashed border-border/60" />
            <div className="w-6 border-t-[2px] border-dashed border-border/60" />
          </div>

          {/* === STATIC RIGHT LABEL === */}
          <div className="hidden lg:flex flex-col items-center justify-center row-start-4 row-span-2 col-start-3 opacity-90 py-2">
            <div className="w-6 border-t-[2px] border-dashed border-primary/50" />
            <div className="flex-1 border-l-[2px] border-dashed border-primary/50" />
            <span 
              className="py-3 text-[10px] font-bold tracking-widest uppercase text-primary whitespace-nowrap"
              style={{ writingMode: "vertical-rl" }}
            >
              {rightLabel}
            </span>
            <div className="flex-1 border-l-[2px] border-dashed border-primary/50" />
            <div className="w-6 border-t-[2px] border-dashed border-primary/50" />
          </div>

          {/* === CARDS === */}
          {leftColumn?.map((objective, index) => {
            // Distribute mobile badges dynamically
            const isTopHalf = index < Math.ceil(leftColumn.length / 2);
            const mobileBadge = isTopHalf 
              ? { title: leftLabel, type: "muted" } 
              : { title: rightLabel, type: "primary" };

            return (
              <div
                key={index}
                className="col-span-full lg:col-start-2 lg:col-span-1"
                style={{ gridRowStart: index + 1 }} 
              >
                <div className="group relative flex flex-col md:flex-row items-stretch md:items-center p-1.5 rounded-[1.5rem] bg-card border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden z-10 w-full h-full">

                  {/* LEFT SIDE */}
                  <div className="flex-1 flex flex-col justify-center bg-muted/10 p-4 md:p-5 rounded-xl md:rounded-[1.25rem] border border-border/30 h-full">
                    {mobileBadge.type === "muted" && (
                      <span className="lg:hidden text-[9px] font-bold uppercase tracking-widest text-muted-foreground bg-muted/20 px-2 py-0.5 rounded-md w-fit mb-2">
                        {mobileBadge.title}
                      </span>
                    )}
                    <p className="text-sm md:text-base text-muted-foreground font-medium leading-tight">
                      {objective}
                    </p>
                  </div>

                  {/* MIDDLE */}
                  <div className="flex flex-col md:flex-row items-center justify-center shrink-0 py-2 md:py-0 md:px-3 relative z-10">
                    <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-background border border-border shadow-sm text-foreground font-bold text-sm md:text-base group-hover:scale-110 group-hover:border-primary/50 group-hover:text-primary transition-all duration-300 relative">
                      {index + 1}
                      <div className="absolute top-full mt-1 md:top-auto md:left-full md:mt-0 md:ml-2 text-muted-foreground/50 group-hover:text-primary transition-colors duration-300">
                        <ArrowDown className="w-4 h-4 block md:hidden" />
                        <ArrowRight className="w-4 h-4 hidden md:block" />
                      </div>
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex-1 flex flex-col justify-center bg-gradient-to-br from-primary/10 to-transparent p-4 md:p-5 rounded-xl md:rounded-[1.25rem] border border-primary/20 h-full relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {mobileBadge.type === "primary" && (
                      <span className="lg:hidden text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-md w-fit mb-2 relative z-10">
                        {mobileBadge.title}
                      </span>
                    )}
                    <p className="text-sm md:text-base text-foreground font-semibold relative z-10 leading-tight">
                      {rightColumn?.[index]}
                    </p>
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