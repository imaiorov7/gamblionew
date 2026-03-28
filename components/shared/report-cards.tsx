import Image from "next/image";
import type React from "react";
import { Button } from "../ui/button";
import { Description, Title } from "../ui/typography";
import { cn } from "@/lib/utils";

type ReportCard = {
  title: string;
  description: string;
  value: string | React.ReactNode;
  hasImage: boolean;
  imgPosition: string;
  imgArrowRotation?: string;
  imgArrowPosition?: string;
};

interface ReportCardsProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  data?: ReportCard[];
}

const ReportCards = ({ title, description, data }: ReportCardsProps) => {
  return (
    <div className="relative flex flex-col items-center gap-6 md:gap-8 py-8 md:py-8 w-full overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col items-center gap-3 md:gap-4 text-center max-w-3xl z-10 px-4">
        <Title className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
          {title}
        </Title>
        <Description className="text-base md:text-lg text-muted-foreground">
          {description}
        </Description>
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-4 mt-4 md:mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative">
          {data?.map(
            (
              {
                title,
                description,
                value,
                imgPosition,
                imgArrowRotation,
                imgArrowPosition,
                hasImage,
              },
              index,
            ) => (
              <div
                key={title}
                className={cn(
                  "relative p-6 md:p-8 rounded-[1.5rem] bg-card border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-300 group z-10",
                  data?.length === 3 && index === 2
                    ? "md:col-span-2 md:justify-self-center md:w-1/2"
                    : ""
                )}
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5rem]" />

                {hasImage && (
                  <div className="hidden md:block pointer-events-none">
                    <Image
                      src="/images/circle.svg"
                      alt="Flow node"
                      width={100}
                      height={100}
                      className={cn("absolute -z-10 opacity-30", imgPosition)}
                    />
                    <Image
                      src="/images/arrow.svg"
                      alt="Flow direction"
                      width={75}
                      height={75}
                      className={cn("absolute -z-10 text-primary drop-shadow-md", imgArrowRotation, imgArrowPosition)}
                    />
                  </div>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <div className="pb-3 mb-3 border-b border-border/40">
                    <Title className="text-xl md:text-2xl font-bold text-foreground">
                      {title}
                    </Title>
                  </div>
                  
                  <Description className="mb-4 text-muted-foreground text-sm md:text-base flex-1">
                    {description}
                  </Description>
                  
                  <div className="bg-muted/10 p-4 rounded-xl border border-border/30">
                    <span className="text-primary font-semibold block mb-1 text-xs tracking-wider uppercase">Business Value</span>
                    <Description className="text-foreground/90 font-medium text-xs md:text-sm">
                      {value}
                    </Description>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      <Button className="mt-4 md:mt-6 text-white cursor-default opacity-0 pointer-events-none">
        See a Sample Report
      </Button>
    </div>
  );
};

export default ReportCards;