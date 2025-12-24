import type React from "react";
import { Description, Title } from "../ui/typography";
import DashedBorder from "./dashed-border";

interface ValuePropositionProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  box1: string;
  box2: string;
  box3: string;
  box4: string;
  box5: string;
  box6: string;
}

const ValueProposition = ({
  title,
  description,
  box1,
  box2,
  box3,
  box4,
  box5,
  box6,
}: ValuePropositionProps) => {
  return (
    <DashedBorder sides="all" className="gap-0 p-0 ">
      {/* Desktop Grid View */}
      <div className="hidden lg:grid grid-cols-5 grid-rows-7 w-full min-h-[800px] relative">
        <div className="flex items-center justify-center row-span-3 border-l border-dashed border-border"></div>
        <div className="flex items-center justify-center row-span-3 border-l border-dashed border-border"></div>
        <div className="flex items-start justify-center row-span-3 pt-8 border-l border-dashed border-border">
          <Title className="text-center">{title}</Title>
          <Description className="absolute z-10 max-w-xl px-4 text-center -translate-x-1/2 left-1/2 top-32">
            {description}
          </Description>
        </div>
        <div className="flex items-center justify-center row-span-3 border-l border-dashed border-border"></div>
        <div className="flex items-center justify-center row-span-3 border-l border-dashed border-border"></div>
        <div className="flex items-center justify-center row-start-4 border-r border-dashed border-y border-border"></div>
        <div className="flex items-center justify-center row-start-4 border-r border-dashed border-y border-border bg-custom-dark">
          <p>{box1}</p>
        </div>
        <div className="flex items-center justify-center row-start-4 border-r border-dashed border-y border-border bg-custom-dark">
          <p>{box2}</p>
        </div>
        <div className="flex items-center justify-center row-start-4 border-r border-dashed border-y border-border bg-custom-dark">
          <p>{box3}</p>
        </div>
        <div className="flex items-center justify-center row-start-4 border-dashed border-y border-border"></div>
        <div className="flex items-center justify-center row-start-5 border-r border-dashed border-border"></div>
        <div className="flex items-center justify-center row-start-5 border-r border-dashed border-border bg-custom-dark">
          <p>{box4}</p>
        </div>
        <div className="flex items-center justify-center row-start-5 border-r border-dashed border-border bg-custom-dark">
          <p>{box5}</p>
        </div>
        <div className="flex items-center justify-center row-start-5 border-r border-dashed border-border bg-custom-dark">
          <p>{box6}</p>
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
