import type React from "react";
import { Button } from "../ui/button";
import { Description, Title } from "../ui/typography";
import { cn } from "@/lib/utils";
import { 
  Activity, 
  BarChart3, 
  Filter, 
  DownloadCloud, 
  CalendarClock,
  CheckCircle2
} from "lucide-react";

interface KeyCapabilitiesProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  list?: string[];
  buttonTitle?: string;
}

const ICONS = [
  Activity,       
  BarChart3,      
  Filter,         
  DownloadCloud,  
  CalendarClock,  
];

const KeyCapabilities = ({
  title,
  description,
  subTitle,
  list,
  buttonTitle,
}: KeyCapabilitiesProps) => {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-10 py-8 md:py-12 w-full px-4 overflow-hidden">
      
      {/* Header Area */}
      <div className="flex flex-col items-center gap-2 md:gap-4 text-center max-w-4xl">
        <Title className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
          {title}
        </Title>
        <Description className="text-sm md:text-base lg:text-lg text-muted-foreground leading-tight">
          {description}
        </Description>
      </div>

      {subTitle && (
        <h3 className="text-base md:text-xl font-semibold text-primary mt-2">
          {subTitle}
        </h3>
      )}

      {/* MOBILE: Compact vertical stack of rows (Icon left, text right)
        DESKTOP: 6-Column Bento Grid (Icon top, text bottom)
      */}
      <div className="w-full max-w-6xl mt-2 md:mt-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-4 w-full">
          {list?.map((capability, index) => {
            const Icon = ICONS[index % ICONS.length] || CheckCircle2;
            
            // Dynamic desktop grid sizing: top 3 cards span 2 cols each, bottom 2 cards span 3 cols each
            const desktopGridSpan = index < 3 ? "md:col-span-2" : "md:col-span-3";

            return (
              <div
                key={index}
                className={cn(
                  "group relative flex flex-row md:flex-col items-center md:items-start p-4 md:p-8 rounded-2xl md:rounded-[2rem] bg-card border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 z-10 overflow-hidden",
                  desktopGridSpan
                )}
              >
                {/* Subtle Hover Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon Container - Shrinks and moves to left on mobile */}
                <div className="flex items-center justify-center shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 text-primary border border-primary/20 mr-4 md:mr-0 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                
                {/* Capability Text - Smaller on mobile */}
                <span className="text-sm md:text-lg text-foreground font-semibold leading-tight md:leading-snug text-left">
                  {capability}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {buttonTitle && (
        <Button className="mt-2 md:mt-6 px-6 py-4 md:px-8 md:py-6 rounded-full text-sm md:text-base font-semibold shadow-lg shadow-primary/20 text-white">
          {buttonTitle}
        </Button>
      )}
    </div>
  );
};

export default KeyCapabilities;