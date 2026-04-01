import React from "react";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowRight } from "lucide-react";

interface FlowStep {
  number: number;
  label: string;
}

interface Label {
  title: string;
  position: "top" | "bottom";
  index: number;
}

function ProcessFlowchart({
  steps,
  labels = [],
}: {
  steps: FlowStep[];
  labels?: Label[];
}) {
  return (
    <div className="flex flex-col items-center w-full py-4 md:py-4 overflow-hidden">
      
      {/* === DESKTOP LAYOUT (Horizontal Grid) === */}
      <div className="hidden md:block w-full max-w-6xl px-4">
        <div 
          className="grid gap-y-4 gap-x-3 w-full"
          style={{ 
            gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
            gridTemplateRows: 'auto 1fr auto'
          }}
        >
          
          {/* TOP LABELS (Row 1) */}
          {labels.filter(l => l.position === "top").map((label) => (
            <div 
              key={label.title} 
              className="flex flex-col w-full px-2"
              style={{ gridRow: 1, gridColumn: `${label.index + 1} / span 2` }}
            >
              <span className="text-center text-[10px] font-bold uppercase tracking-widest text-primary mb-1">
                {label.title}
              </span>
              <div className="w-full h-3 border-t-2 border-l-2 border-r-2 border-dashed border-primary/40 rounded-t-lg" />
            </div>
          ))}

          {/* PROCESS STEPS (Row 2) */}
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="relative flex items-center w-full"
              style={{ gridRow: 2, gridColumn: index + 1 }}
            >
              <div className="group flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-3 p-3 rounded-[1.25rem] bg-card border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 w-full z-10 h-full min-h-[70px]">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-sm">
                {step.number}
              </div>
                <span className="text-xs lg:text-sm font-semibold text-center xl:text-left text-foreground leading-tight">
                  {step.label}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-1.5 translate-x-1/2 -translate-y-1/2 z-20 text-muted-foreground/40">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {/* BOTTOM LABELS (Row 3) */}
          {labels.filter(l => l.position === "bottom").map((label) => (
            <div 
              key={label.title} 
              className="flex flex-col w-full px-2"
              style={{ gridRow: 3, gridColumn: `${label.index + 1} / span 2` }}
            >
              <div className="w-full h-3 border-b-2 border-l-2 border-r-2 border-dashed border-muted-foreground/40 rounded-b-lg" />
              <span className="text-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">
                {label.title}
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* === MOBILE LAYOUT (Vertical Stack) === */}
      <div className="flex md:hidden flex-col items-center w-full gap-2 px-4 max-w-md mx-auto">
        {steps.map((step, index) => {
          const activeLabel = labels.find(l => index === l.index || index === l.index + 1);
          const isPrimaryLabel = activeLabel?.position === "top";

          return (
            <React.Fragment key={step.number}>
              <div className="relative flex flex-col items-start gap-3 w-full p-4 rounded-2xl bg-card border border-border/50 shadow-sm overflow-hidden">
                <div className={cn(
                  "absolute -top-10 -right-10 w-20 h-20 blur-xl rounded-full opacity-20 pointer-events-none",
                  isPrimaryLabel ? "bg-primary" : "bg-muted-foreground"
                )} />

                <div className="flex items-center justify-between w-full">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 border border-primary/20 text-sm">
                    {step.number}
                  </div>

                  {activeLabel && (
                    <span className={cn(
                      "text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md",
                      isPrimaryLabel ? "text-primary bg-primary/10" : "text-muted-foreground bg-muted/20"
                    )}>
                      {activeLabel.title}
                    </span>
                  )}
                </div>

                <span className="text-sm font-semibold text-foreground relative z-10">
                  {step.label}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div className="flex justify-center w-full py-0.5 text-muted-foreground/40">
                  <ArrowDown className="w-5 h-5" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

    </div>
  );
}

export default ProcessFlowchart;