import DashedBorder from "@/components/shared/dashed-border";
import { Description, Title } from "@/components/ui/typography";
import BorderedCard from "./bordered-card";
import { cn } from "@/lib/utils";

interface ObjectiveDeliverablesProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  leftColumn?: Array<string>;
  rightColumn?: Array<string>;
  leftLabels?:
    | {
        index: number;
        title: string;
      }
    | Array<{
        index: number;
        title: string;
      }>;
  rightLabels?:
    | {
        index: number;
        title: string;
      }
    | Array<{
        index: number;
        title: string;
      }>;
}

function ObjectiveDeliverables({
  title,
  description,
  leftColumn,
  rightColumn,
  leftLabels,
  rightLabels,
}: ObjectiveDeliverablesProps) {
  // Normalize labels to arrays
  const normalizedLeftLabels = leftLabels
    ? Array.isArray(leftLabels)
      ? leftLabels
      : [leftLabels]
    : undefined;
  const normalizedRightLabels = rightLabels
    ? Array.isArray(rightLabels)
      ? rightLabels
      : [rightLabels]
    : undefined;

  return (
    <DashedBorder
      sides="all"
      className="flex flex-col items-center gap-4 pt-12 pb-0"
    >
      <Title className="font-medium text-center ">{title}</Title>

      <Description className="max-w-3xl text-center md:w-2/3">
        {description}
      </Description>

      <div className="w-full px-4 mt-8 max-w-4/5">
        <div className="relative grid grid-cols-1 md:grid-cols-2">
          {/* Border on top with vertical lines on sides */}
          <div className="absolute top-0 left-0 right-0 h-0 border-t-2 border border-border -translate-y-1/2 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-10 before:border-l-2 before:border before:border-muted after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-0.5 after:h-10 after:border-l-2 after:border after:border-muted"></div>

          {/* Left Column - Objective */}
          <div className="relative flex flex-col gap-4  md:border-r-2  border-dashed  rounded-br-[12%] pb-24">
            <h3 className="absolute text-sm font-semibold text-center left-4 -top-7 text-muted-foreground md:text-left">
              Objective
            </h3>

            {leftColumn?.map((objective, index) => (
              <div
                key={objective}
                className="relative flex items-center gap-0 h-[88px] mt-12"
              >
                <BorderedCard step={objective} />
                {/* Connecting line between text and number */}
                <div className="hidden w-4 h-px border-t-2 border-solid md:block border-border" />
                <div className="items-center justify-center hidden w-12 h-12 border-2 rounded-md md:flex border-border bg-background shrink-0">
                  <span className="text-lg font-bold ">{index + 1}</span>
                </div>
                {/* Connecting line between number and middle */}
                <div className="hidden w-12 h-px border-t-2 border-solid md:block border-border" />
                {/* Dynamic labels - positioned relative to current step */}
                {normalizedLeftLabels
                  ?.filter((label) => Math.floor(label.index) === index)
                  .map((label, labelIdx) => {
                    const fraction = label.index - Math.floor(label.index);
                    const offset = fraction * 100;

                    return (
                      <div
                        key={labelIdx}
                        className={cn(
                          "absolute  w-60 -rotate-90 hidden lg:flex gap-2 z-20 top-[120%] -left-[150px] items-start",
                        )}
                      >
                        <div className="w-0.5 h-8 border-l-2 border-dashed border-border"></div>
                        <p
                          className={cn(
                            "text-[8px] w-full text-center text-muted-foreground whitespace-nowrap border-dashed border-b-2 border-b-border pb-1",
                          )}
                        >
                          {label.title}
                        </p>
                        <div className="w-0.5 h-8 border-l-2 border-dashed border-border"></div>
                      </div>
                    );
                  })}
              </div>
            ))}
          </div>

          {/* Right Column - Gamblio delivers */}
          <div className="relative flex flex-col gap-4  md:border-l-2  border-dashed  rounded-bl-[12%] pb-24">
            <div className="block md:hidden absolute top-0 left-0 right-0 h-0 border-t-2 border border-border -translate-y-1/2 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-10 before:border-l-2 before:border before:border-muted after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-0.5 after:h-10 after:border-l-2 after:border after:border-muted"></div>
            <h3 className="absolute text-sm font-semibold text-center right-4 -top-7 text-muted-foreground md:text-right">
              Gamblio delivers
            </h3>

            {rightColumn?.map((delivery, index) => (
              <div
                key={delivery}
                className="relative flex items-center gap-0 h-[88px] mt-12"
              >
                {/* Connecting line from middle */}
                <div className="hidden w-12 h-px border-t-2 border-solid md:block border-border" />
                <BorderedCard step={delivery} />

                {normalizedRightLabels
                  ?.filter((label) => Math.floor(label.index) === index)
                  .map((label, labelIdx) => {
                    const fraction = label.index - Math.floor(label.index);

                    return (
                      <div
                        key={labelIdx}
                        className={cn(
                          `absolute  w-60 rotate-90 hidden lg:flex gap-2 z-20 top-[120%] items-start -right-[150px]`,
                        )}
                      >
                        <div className="w-0.5 h-8 border-l-2 border-dashed border-border "></div>
                        <p
                          className={cn(
                            "text-[8px] w-full text-center text-muted-foreground whitespace-nowrap border-dashed border-b-2 border-b-border pb-1",
                          )}
                        >
                          {label.title}
                        </p>
                        <div className="w-0.5 h-8 border-l-2 border-dashed border-border"></div>
                      </div>
                    );
                  })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashedBorder>
  );
}
export default ObjectiveDeliverables;
