"use client";

import React from "react";
import { Description, Title } from "../ui/typography";
import { cn } from "@/lib/utils";

interface FeaturesCarouselProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  features: string[];
}

export default function FeaturesCarousel({ title, description, features }: FeaturesCarouselProps) {
  // Duplicate the array to create a seamless infinite loop
  const duplicatedFeatures = [...features, ...features, ...features];

  return (
    <div className="flex flex-col items-center gap-10 md:gap-14 py-8 w-full overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center max-w-3xl px-4">
        <Title className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
          {title}
        </Title>
        <Description className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </Description>
      </div>

      {/* Infinite Carousel Container */}
      <div className="relative w-full max-w-[100vw] flex overflow-hidden group/carousel py-6">
        {/* Left/Right Fade Masks for smooth entry/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex gap-4 md:gap-6 w-max animate-[marquee_40s_linear_infinite] group-hover/carousel:[animation-play-state:paused]">
          {duplicatedFeatures.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group relative flex flex-col justify-center w-[280px] md:w-[340px] min-h-[160px] p-6 rounded-[1.5rem] bg-card border border-border/50 transition-all duration-500",
                "hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50 hover:bg-card/80 cursor-default overflow-hidden"
              )}
            >
              {/* Background Glow on Hover */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Top Accent Line */}
              <div className="absolute top-6 left-6 w-10 h-1.5 bg-primary/40 rounded-full group-hover:bg-primary transition-colors duration-300" />
              
              <p className="mt-8 text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium leading-relaxed z-10">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}