import React from "react";
import DashedBorder from "./dashed-border";
import { Description, Title } from "../ui/typography";

const ValueProposition = () => {
  return (
    <DashedBorder sides="all" className="gap-0 p-0 ">
      {/* Desktop Grid View */}
      <div className="hidden lg:grid grid-cols-5 grid-rows-7 w-full min-h-[800px] relative">
        <div className="flex items-center justify-center row-span-3 border-l border-dashed border-border"></div>
        <div className="flex items-center justify-center row-span-3 border-l border-dashed border-border"></div>
        <div className="flex items-start justify-center row-span-3 pt-8 border-l border-dashed border-border">
          <Title className="text-center">
            Core Value <span className="text-primary">Proposition</span>
          </Title>
          <Description className="absolute z-10 max-w-xl px-4 text-center -translate-x-1/2 left-1/2 top-32">
            Gamblio Predict turns raw player data into predictive intelligence —
            empowering operators to identify opportunity, prevent loss, compress
            churn, and ensure compliance through AI-driven segmentation and
            behavior modeling.
          </Description>
        </div>
        <div className="flex items-center justify-center row-span-3 border-l border-dashed border-border"></div>
        <div className="flex items-center justify-center row-span-3 border-l border-dashed border-border"></div>
        <div className="flex items-center justify-center row-start-4 border-r border-dashed border-y border-border"></div>
        <div className="flex items-center justify-center row-start-4 border-r border-dashed border-y border-border bg-custom-dark">
          <p>Predictive Intelligence</p>
        </div>
        <div className="flex items-center justify-center row-start-4 border-r border-dashed border-y border-border bg-custom-dark">
          <p>Automated Detection</p>
        </div>
        <div className="flex items-center justify-center row-start-4 border-r border-dashed border-y border-border bg-custom-dark">
          <p>Early Warning System</p>
        </div>
        <div className="flex items-center justify-center row-start-4 border-dashed border-y border-border"></div>
        <div className="flex items-center justify-center row-start-5 border-r border-dashed border-border"></div>
        <div className="flex items-center justify-center row-start-5 border-r border-dashed border-border bg-custom-dark">
          <p>Anticipation Over Reaction</p>
        </div>
        <div className="flex items-center justify-center row-start-5 border-r border-dashed border-border bg-custom-dark">
          <p>Data-Driven Retention</p>
        </div>
        <div className="flex items-center justify-center row-start-5 border-r border-dashed border-border bg-custom-dark">
          <p>Player Foresight</p>
        </div>
        <div className="flex items-center justify-center row-start-5 border-r border-dashed border-border"></div>
        <div className="flex items-center justify-center row-span-2 row-start-6 border-r border-dashed border-y border-border"></div>
        <div className="flex items-center justify-center row-span-2 row-start-6 border-r border-dashed border-y border-border"></div>
        <div className="flex items-center justify-center row-span-2 row-start-6 border-r border-dashed border-y border-border"></div>
        <div className="flex items-center justify-center row-span-2 row-start-6 border-r border-dashed border-y border-border"></div>
        <div className="flex items-center justify-center row-span-2 row-start-6 border-r border-dashed border-y border-border"></div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col w-full gap-8 px-4 py-12 lg:hidden">
        <div className="flex flex-col gap-4 text-center">
          <Title>
            Core Value <span className="text-primary">Proposition</span>
          </Title>
          <Description className="max-w-2xl mx-auto">
            Gamblio Predict turns raw player data into predictive intelligence —
            empowering operators to identify opportunity, prevent loss, compress
            churn, and ensure compliance through AI-driven segmentation and
            behavior modeling.
          </Description>
        </div>

        <div className="flex flex-col w-full gap-4">
          <DashedBorder sides="all" className="p-6 mx-0 bg-custom-dark">
            <p className="text-sm font-medium text-center">
              Predictive Intelligence
            </p>
          </DashedBorder>
          <DashedBorder sides="all" className="p-6 mx-0 bg-custom-dark">
            <p className="text-sm font-medium text-center">
              Automated Detection
            </p>
          </DashedBorder>
          <DashedBorder sides="all" className="p-6 mx-0 bg-custom-dark">
            <p className="text-sm font-medium text-center">
              Early Warning System
            </p>
          </DashedBorder>
          <DashedBorder sides="all" className="p-6 mx-0 bg-custom-dark">
            <p className="text-sm font-medium text-center">
              Anticipation Over Reaction
            </p>
          </DashedBorder>
          <DashedBorder sides="all" className="p-6 mx-0 bg-custom-dark">
            <p className="text-sm font-medium text-center">
              Data-Driven Retention
            </p>
          </DashedBorder>
          <DashedBorder sides="all" className="p-6 mx-0 bg-custom-dark">
            <p className="text-sm font-medium text-center">Player Foresight</p>
          </DashedBorder>
        </div>
      </div>
    </DashedBorder>
  );
};

export default ValueProposition;
