import type React from "react";
import { Button } from "../ui/button";
import { Description, Title } from "../ui/typography";
import { cn } from "@/lib/utils";
import { Activity, BarChart3, Filter, DownloadCloud, CalendarClock, CheckCircle2 } from "lucide-react";

interface KeyCapabilitiesProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  list?: string[];
  buttonTitle?: string;
}

const ICONS = [Activity, BarChart3, Filter, DownloadCloud, CalendarClock];

export default function KeyCapabilities({ title, description, subTitle, list, buttonTitle }: KeyCapabilitiesProps) {
  return (
    <div className="flex flex-col items-center gap-10 md:gap-14 py-8 md:py-12 w-full px-4 overflow-hidden">
      
      <div className="flex flex-col items-center gap-4 text-center max-w-4xl">
        <Title className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
          {title}
        </Title>
        <Description className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </Description>
        {subTitle && (
          <div className="mt-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm tracking-wide">
            {subTitle}
          </div>
        )}
      </div>

      {/* Premium Bento Grid */}
      <div className="w-full max-w-6xl mt-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 w-full">
          {list?.map((capability, index) => {
            const Icon = ICONS[index % ICONS.length] || CheckCircle2;
            const desktopGridSpan = index < 3 ? "md:col-span-2" : "md:col-span-3";

            return (
              <div
                key={index}
                className={cn(
                  "group relative flex flex-col items-start p-6 md:p-8 rounded-[2rem] bg-card border border-border/60 hover:border-primary/50 overflow-hidden transition-all duration-500",
                  desktopGridSpan
                )}
              >
                {/* Dynamic Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-6 w-full">
                  <div className="flex items-center justify-center shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-muted/50 text-muted-foreground border border-border/50 group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300 group-hover:-translate-y-1">
                    <Icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <span className="text-sm md:text-lg text-foreground font-semibold leading-snug md:leading-relaxed text-left group-hover:text-primary transition-colors duration-300">
                    {capability}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {buttonTitle && (
        <Button className="mt-6 px-8 py-6 rounded-full text-base font-semibold shadow-xl shadow-primary/20 hover:shadow-primary/40 text-white transition-all duration-300 hover:-translate-y-1">
          {buttonTitle}
        </Button>
      )}
    </div>
  );
}