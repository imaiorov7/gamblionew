import type React from "react";
import { cn } from "@/lib/utils";

interface DashedBorderProps {
  children: React.ReactNode;
  id?: string;
  ref?: React.RefObject<HTMLDivElement> | null;
  className?: string;
  /**
   * Which borders to show.
   * @default 'x'
   */
  sides?: "none" | "all" | "x" | "y" | "top" | "right" | "bottom" | "left";
  /**
   * Which borders to show at md breakpoint (768px+). Overrides sides.
   */
  sidesMd?: "none" | "all" | "x" | "y" | "top" | "right" | "bottom" | "left";
  /**
   * Which borders to show at lg breakpoint (1024px+). Overrides sidesMd or sides.
   */
  sidesLg?: "none" | "all" | "x" | "y" | "top" | "right" | "bottom" | "left";
  /**
   * Border color - uses Tailwind color classes
   * @default 'border-secondary'
   */
  borderColor?: string;
  /**
   * Padding for the container
   * @default 'p-4'
   */
  padding?: string;
  /**
   * Additional container styles
   */
  containerClassName?: string;
}

const DashedBorder = ({
  children,
  ref,
  className,
  sides = "x",
  sidesMd,
  id,
  sidesLg,
  borderColor = "border-border",
  padding = "p-4",
  containerClassName,
}: DashedBorderProps) => {
  // Helper function to get border classes for a given side value
  const getSideClasses = (side: typeof sides): string => {
    switch (side) {
      case "none":
        return "border-0";
      case "all":
        return "border";
      case "x":
        return "border-x";
      case "y":
        return "border-y";
      case "top":
        return "border-t";
      case "right":
        return "border-r";
      case "bottom":
        return "border-b";
      case "left":
        return "border-l";
      default:
        return "border-x";
    }
  };

  // Build responsive border classes
  const getBorderClasses = () => {
    const baseClasses = getSideClasses(sides);

    // Helper to prefix all classes with a breakpoint
    const prefixClasses = (classes: string, prefix: string): string => {
      if (!classes) return "";
      return classes
        .split(" ")
        .map((cls) => `${prefix}:${cls}`)
        .join(" ");
    };

    const mdClasses = sidesMd
      ? prefixClasses(getSideClasses(sidesMd), "md")
      : "";
    const lgClasses = sidesLg
      ? prefixClasses(getSideClasses(sidesLg), "lg")
      : "";

    // Only add border-dashed when there are actual border classes (not border-0 or empty)
    const withStyle = (classes: string): string => {
      if (!classes || classes === "border-0") return classes;
      return cn(classes, "border-dashed");
    };

    // Build the class list
    const classes: string[] = [];

    // Special handling: when base is "none" (border-0) and we have responsive overrides,
    // we need to ensure responsive classes can properly override border-0
    if (baseClasses === "border-0" && (sidesMd || sidesLg)) {
      // Use max-md:border-0 to scope border-0 to mobile only
      // This allows md:border-x to work properly at md+ breakpoint
      classes.push("max-md:border-0");

      // Add responsive classes - these will apply at their breakpoints
      // The md: and lg: variants have higher specificity and will override border-0
      if (mdClasses) {
        classes.push(withStyle(mdClasses));
      }
      if (lgClasses) {
        classes.push(withStyle(lgClasses));
      }
    } else {
      // Normal case: apply base classes
      if (baseClasses !== "border-0" || (!sidesMd && !sidesLg)) {
        classes.push(withStyle(baseClasses));
      }

      // Add responsive classes
      if (mdClasses) {
        classes.push(withStyle(mdClasses));
      }
      if (lgClasses) {
        classes.push(withStyle(lgClasses));
      }
    }

    return cn(...classes);
  };

  return (
    <div
      id={id}
      ref={ref}
      className={cn(
        "flex flex-col justify-center items-center md:mx-7 mx-0",
        getBorderClasses(),
        borderColor,
        padding,
        containerClassName,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default DashedBorder;
