import { cn } from "@/lib/utils";
import React from "react";
import DashedBorder from "./dashed-border";

const BorderedCard = ({
  step,
  className,
  DashedBorderClassName,
}: {
  step: any;
  className?: string;
  DashedBorderClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "p-2 bg-background border border-border text-center w-full  rounded-md z-10",
        className,
      )}
    >
      <DashedBorder
        sides="all"
        className={cn("mx-0 bg-custom-dark md:mx-0", DashedBorderClassName)}
      >
        <p className="text-sm font-medium ">{step}</p>
      </DashedBorder>
    </div>
  );
};

export default BorderedCard;
