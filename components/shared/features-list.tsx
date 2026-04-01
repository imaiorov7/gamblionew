import React from "react";
import { Description, Title } from "../ui/typography";
import { CheckCircle2 } from "lucide-react";

interface FeaturesListProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  features: string[];
}

export default function FeaturesList({ title, description, features }: FeaturesListProps) {
  return (
    <div className="flex flex-col items-center gap-10 md:gap-14 py-8 w-full px-4">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
        <Title className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
          {title}
        </Title>
        <Description className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </Description>
      </div>

      {/* Features Grid */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-6 h-6 text-primary/80 group-hover:text-primary transition-colors duration-300" />
              </div>
              <p className="text-sm md:text-base text-foreground font-medium leading-snug">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}