import DashedBorder from "@/components/shared/dashed-border";
import { cn } from "@/lib/utils";

interface FlowStep {
  number: number;
  label: string;
}

const steps: FlowStep[] = [
  { number: 1, label: "KPI monitoring" },
  { number: 2, label: "Trend detection" },
  { number: 3, label: "Operational optimization" },
  { number: 4, label: "Strategic reporting" },
];

export function PerformanceFlowchart() {
  return (
    <div className="flex flex-col items-center w-full py-12">
      {/* Desktop horizontal flow */}
      <div className="hidden w-full px-4 md:block">
        <div className="relative h-[280px]">
          {/* Horizontal base line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-border -translate-y-1/2 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-10 before:border-l-2 before:border before:border-muted after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-0.5 after:h-10 after:border-l-2 after:border after:border-muted"></div>

          {/* Grid layout for steps */}
          <div className="absolute inset-0 grid grid-cols-4 gap-4">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center justify-center"
                >
                  {/* Step box - positioned above or below the line */}
                  <div
                    className={cn(
                      "p-2 bg-background border border-border text-center w-full  rounded-md z-10",
                      isEven ? "absolute top-0" : "absolute bottom-0",
                    )}
                  >
                    <DashedBorder
                      sides="all"
                      className="mx-0 bg-custom-dark md:mx-0"
                    >
                      <p className="text-sm font-medium whitespace-nowrap">
                        {step.label}
                      </p>
                    </DashedBorder>
                  </div>

                  {/* Numbered circle - centered on the horizontal line */}
                  <div className="absolute z-10 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <div className="flex items-center justify-center w-12 h-12 border-2 rounded-md border-border bg-background">
                      <span className="text-lg font-bold">{step.number}</span>
                    </div>
                  </div>

                  {/* Vertical connector line from circle to box */}
                  <div
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-border z-0 before:absolute before:left-1/2 before:-translate-x-1/2 before:h10 before:border-l-2 before:border-dashed before:border-border",
                      isEven
                        ? "top-0 h-[calc(50%-24px)]"
                        : "bottom-0 h-[calc(50%-24px)]",
                    )}
                  ></div>

                  {/* Gamblio AI label between step 1 and 2 */}
                  {index === 0 && (
                    <div className="absolute left-[65%] top-[35%] ml-4 w-40 hidden lg:flex items-start gap-2 z-20">
                      <div className="w-0.5 h-8 border-l-2 border-dashed border-border"></div>
                      <p className="text-[8px] w-full text-center text-muted-foreground whitespace-nowrap border-b-2 border-dashed border-b-border pb-1 ">
                        gamblio ai
                      </p>
                      <div className="w-0.5 h-8 border-l-2 border-dashed border-border"></div>
                    </div>
                  )}

                  {/* Analytics label between step 3 and 4 */}
                  {index === 2 && (
                    <div className="absolute left-[65%] bottom-[35%] ml-4 w-40 hidden lg:flex items-end gap-2 z-20">
                      <div className="w-0.5 h-8 border-l-2 border-dashed border-border"></div>
                      <div className="flex flex-col items-center w-full">
                        <p className="text-[8px] relative w-full text-center text-muted-foreground whitespace-nowrap border-t-2 border-dashed border-t-border pt-1">
                          analitycs
                        </p>
                      </div>

                      <div className="w-0.5 h-8 border-l-2 border-dashed border-border"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile vertical flow */}
      <div className="flex flex-col items-center w-full gap-6 px-4 md:hidden">
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col items-center gap-4 ">
            {/* Numbered circle */}
            <div className="flex items-center justify-center w-12 h-12 border-2 rounded-md border-border bg-background">
              <span className="text-lg font-bold">{step.number}</span>
            </div>

            {/* Connector line between number and box */}
            <div className="w-0.5 h-6 border-l-2 border-dashed border-border"></div>

            {/* Step box */}
            <div className="p-2 border rounded-md bg-background border-border">
              <DashedBorder
                sides="all"
                className="w-full max-w-xs px-6 py-4 mx-0 text-center bg-custom-dark md:mx-0"
              >
                <p className="text-sm font-medium">{step.label}</p>
              </DashedBorder>
            </div>

            {/* Vertical line down (except last) */}
            {index < steps.length - 1 && (
              <div className="w-0.5 h-8 border-l-2 border-dashed border-border"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
