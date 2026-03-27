import React from "react";
import { Description, Title } from "../ui/typography";

interface FeatureIntroProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  description2?: string | React.ReactNode;
  processFlowchart?: React.ReactNode;
  subTitle?: string | React.ReactNode;
  signature?: string | React.ReactNode;
}

const FeatureIntro = ({
  title,
  description,
  description2,
  processFlowchart,
  subTitle,
  signature,
}: FeatureIntroProps) => {
  return (
    // Reduced py-12 to py-4, gap-8 to gap-4
    <div id="learn-how-it-works" className="flex flex-col items-center gap-4 md:gap-5 py-6 md:py-4 scroll-mt-32 w-full">
      <Title className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center max-w-4xl text-balance">
        {title}
      </Title>

      <Description className="max-w-3xl text-center text-base md:text-lg text-muted-foreground">
        {description}
      </Description>

      {subTitle && (
        <div className="mt-2 md:mt-4 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm">
          {subTitle}
        </div>
      )}

      {/* Reduced flowchart vertical spacing */}
      <div className="w-full my-2 md:my-4">
        {processFlowchart}
      </div>

      {description2 && (
        <Description className="max-w-3xl text-center text-base md:text-lg text-muted-foreground">
          {description2}
        </Description>
      )}

      {signature && (
        <div className="flex flex-col items-center gap-1 mt-4 md:mt-6 bg-muted/10 px-6 py-4 rounded-2xl border border-border/50">
          <p className="italic text-center text-muted-foreground text-sm md:text-base">
            {signature}
          </p>
        </div>
      )}
    </div>
  );
};

export default FeatureIntro;