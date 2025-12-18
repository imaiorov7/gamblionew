import DashedBorder from "@/components/shared/dashed-border";
import { cn } from "@/lib/utils";
import BorderedCard from "./bordered-card";

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
    <div className="flex flex-col items-center w-full py-12">
      {/* Desktop horizontal flow */}
      <div className="hidden w-full px-4 md:block">
        <div className="relative h-[280px]">
          {/* Horizontal base line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-border -translate-y-1/2 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-10 before:border-l-2 before:border before:border-muted after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-0.5 after:h-10 after:border-l-2 after:border after:border-muted"></div>

          {/* Grid layout for steps */}
          <div
            className={`absolute inset-0 grid grid-cols-${steps.length} gap-4`}
          >
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center justify-center"
                >
                  {/* Step box - positioned above or below the line */}

                  <BorderedCard
                    step={step.label}
                    className={isEven ? "absolute top-0" : "absolute bottom-0"}
                  />

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

                  {/* Dynamic labels - positioned relative to current step */}
                  {labels
                    .filter((label) => Math.floor(label.index) === index)
                    .map((label, labelIdx) => {
                      const fraction = label.index - Math.floor(label.index);
                      const offset = fraction * 100;

                      return (
                        <div
                          key={labelIdx}
                          className={cn(
                            "absolute ml-4 w-40 hidden lg:flex gap-2 z-20",
                            label.position === "top"
                              ? "top-[35%] items-start"
                              : `bottom-[${fraction ? 30 : 35}%] items-end`,
                          )}
                          style={{
                            left: `${65 + offset}%`,
                          }}
                        >
                          <div className="w-0.5 h-8 border-l-2 border-dashed border-border"></div>
                          <p
                            className={cn(
                              "text-[8px] w-full text-center text-muted-foreground whitespace-nowrap border-dashed",
                              label.position === "top"
                                ? "border-b-2 border-b-border pb-1"
                                : "border-t-2 border-t-border pt-1",
                            )}
                          >
                            {label.title}
                          </p>
                          <div className="w-0.5 h-8 border-l-2 border-dashed border-border"></div>
                        </div>
                      );
                    })}
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
            <BorderedCard step={step.label} />

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

export default ProcessFlowchart;
