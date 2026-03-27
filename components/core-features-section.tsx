/** biome-ignore-all lint/performance/noImgElement: Using img for design consistency */

import { type ReactNode } from "react";
import { Description, Title } from "@/components/ui/typography";
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
    <div className={cn("flex flex-col items-center gap-10 md:gap-16 py-10", className)}>
      
      {/* Header Container */}
      <div className="flex flex-col items-center gap-4 md:gap-6 max-w-4xl text-center mx-auto">
        <Title className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          {title}
        </Title>
        {description && (
          <Description className="text-base md:text-lg lg:text-xl text-muted-foreground">
            {description}
          </Description>
        )}
      </div>

      {/* Features Grid - Now forced to 2 columns on mobile */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl bg-muted/5 border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-32 md:h-32 bg-primary/10 blur-2xl md:blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Dramatically smaller icons on mobile */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 mb-4 md:mb-8 flex items-center justify-center relative z-10">
              <img
                src={feature.image}
                alt={feature.alt}
                className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <h3 className="text-sm sm:text-base md:text-xl font-semibold text-foreground relative z-10">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}