import React from "react";
import { Description, Title } from "../ui/typography";
import { Target } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModelItem {
  title: string;
  description: string;
  value: string;
}

interface ModelsShowcaseProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  data: ModelItem[];
}

export default function ModelsShowcase({ title, description, data }: ModelsShowcaseProps) {
  const gridCols = data.length === 2 ? "md:grid-cols-2 max-w-4xl" : 
                   data.length === 3 ? "lg:grid-cols-3 max-w-6xl" : 
                   "md:grid-cols-2 max-w-5xl";

  return (
    <div className="flex flex-col items-center gap-10 md:gap-14 py-8 w-full px-4 relative">
      <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
        <Title className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
          {title}
        </Title>
        <Description className="text-base md:text-lg text-muted-foreground">
          {description}
        </Description>
      </div>

      <div className={cn("w-full grid grid-cols-1 gap-6 md:gap-8", gridCols)}>
        {data.map((item, index) => (
          <div 
            key={index}
            className="group relative flex flex-col justify-between p-1 rounded-[2rem] bg-gradient-to-b from-border/50 to-transparent hover:from-primary/50 transition-all duration-500 shadow-sm hover:shadow-2xl"
          >
            {/* Inner Card */}
            <div className="flex flex-col justify-between h-full p-6 md:p-8 rounded-[1.85rem] bg-card border border-transparent group-hover:bg-card/90 transition-all duration-500 overflow-hidden relative">
              
              {/* Subtle background flare */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-[80px] rounded-full group-hover:bg-primary/20 transition-colors duration-700 pointer-events-none" />

              <div className="flex flex-col gap-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-black text-lg mb-2 group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                  0{index + 1}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Frosted Glass Value Box */}
              <div className="relative z-10 mt-8 p-5 rounded-2xl bg-muted/40 backdrop-blur-md border border-border/50 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Business Value</span>
                </div>
                <p className="text-sm font-semibold text-foreground leading-snug">
                  {item.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}