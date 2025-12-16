import React from "react";
import DashedBorder from "../shared/dashed-border";
import { Description, Title } from "../ui/typography";
import { PerformanceFlowchart } from "./performance-flowchart";

const PerformanceEngine = () => {
  return (
    <DashedBorder
      id="learn-how-it-works"
      sides="all"
      className="flex flex-col items-center gap-8 py-12 scroll-mt-32"
    >
      <Title className="text-3xl font-medium text-center">
        The Performance Engine of the{" "}
        <span className="text-primary">Gamblio Platform</span>
      </Title>

      <Description className="max-w-3xl text-center md:w-2/3">
        Gamblio Analytics is the business intelligence hub built exclusively for
        the gambling industry. It gives operators the clarity they need - a
        powerful dashboard that provides real-time visibility into financial
        performance and all major KPIs, enabling faster, smarter, and more
        confident decision-making.
      </Description>

      <p className="p-2 mt-4 text-center rounded-lg bg-muted ">
        It's the central control room for:
      </p>

      <PerformanceFlowchart />

      <div className="flex flex-col items-center gap-2 mt-8">
        <p className="italic text-center text-muted-foreground">
          "From insight to action, every metric drives measurable growth."
        </p>
        <p className="font-medium text-primary">-Gamblio</p>
      </div>
    </DashedBorder>
  );
};

export default PerformanceEngine;
