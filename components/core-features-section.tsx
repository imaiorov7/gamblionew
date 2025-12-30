/** biome-ignore-all lint/performance/noImgElement: Using img for design consistency */

import { Fragment, type ReactNode } from "react";
import DashedBorder from "@/components/shared/dashed-border";
import { Button } from "@/components/ui/button";
import { Description, H1, Title } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export function CoreFeaturesSection({
  title,
  description,
  features,
  className,
}: {
  title?: string | ReactNode;
  description?: string | ReactNode;
  features: { image: string; alt: string; title: string }[];
  className?: string;
}) {
  return (
    <DashedBorder sides="all" className={cn("gap-4 py-10", className)}>
      <Title className="w-full text-center">{title}</Title>

      <Description className="text-center">{description}</Description>
      <div className="flex flex-col items-center justify-center w-full gap-4 md:gap-10 lg:gap-0 lg:flex-row lg:w-2/3 ">
        {features.map((feature, index) => (
          <Fragment key={feature.title}>
            <div className="flex flex-col flex-1">
              <DashedBorder
                sides="all"
                className={`w-48 h-48 md:w-64 md:h-64 md:mx-0 lg:w-auto max-w-[390px] ${
                  index === features.length - 1 ? "relative" : ""
                }`}
              >
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="object-contain md:w-full md:h-full"
                />
              </DashedBorder>
              <DashedBorder
                sides="all"
                className="md:mx-0 text-wrap max-w-[193px]  md:max-w-[256px] lg:max-w-none  text-center  lg:w-auto "
              >
                {feature.title}
              </DashedBorder>
            </div>
            {index < features.length - 1 && (
              <hr
                key={`separator-${feature.title}`}
                className="hidden w-4 border-dashed border-border lg:block"
              />
            )}
          </Fragment>
        ))}
      </div>
    </DashedBorder>
  );
}
