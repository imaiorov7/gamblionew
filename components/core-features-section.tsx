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
    <div className={cn("flex flex-col items-center gap-16 py-10", className)}>
      
      {/* Header Container */}
      <div className="flex flex-col items-center gap-6 max-w-4xl text-center mx-auto">
        <Title className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          {title}
        </Title>
        {description && (
          <Description className="text-lg md:text-xl text-muted-foreground">
            {description}
          </Description>
        )}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center p-8 rounded-3xl bg-muted/5 border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
          >
            {/* Subtle glow effect behind the image on hover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="w-32 h-32 md:w-40 md:h-40 mb-8 flex items-center justify-center relative z-10">
              <img
                src={feature.image}
                alt={feature.alt}
                className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-foreground relative z-10">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}