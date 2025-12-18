import React from "react";
import DashedBorder from "./dashed-border";
import { Description, Title } from "../ui/typography";

interface FeatureIntroProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  processFlowchart?: React.ReactNode;
  subTitle?: string | React.ReactNode;
  signature?: string | React.ReactNode;
}
const FeatureIntro = ({
  title,
  description,
  processFlowchart,
  subTitle,
  signature,
}: FeatureIntroProps) => {
  return (
    <DashedBorder
      id="learn-how-it-works"
      sides="all"
      className="flex flex-col items-center gap-8 py-12 scroll-mt-32"
    >
      <Title className="text-3xl font-medium text-center">{title}</Title>

      <Description className="max-w-3xl text-center md:w-2/3">
        {description}
      </Description>

      <p className="p-2 mt-4 text-center rounded-lg bg-muted ">{subTitle}</p>

      {processFlowchart}

      <div className="flex flex-col items-center gap-2 mt-8">
        <p className="italic text-center text-muted-foreground">{signature}</p>
      </div>
    </DashedBorder>
  );
};

export default FeatureIntro;
