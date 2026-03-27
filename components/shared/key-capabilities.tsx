import type React from "react";
import { Button } from "../ui/button";
import { Description, Title } from "../ui/typography";

interface KeyCapabilitiesProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  list?: string[];
  buttonTitle?: string;
}

const KeyCapabilities = ({
  title,
  description,
  subTitle,
  list,
  buttonTitle,
}: KeyCapabilitiesProps) => {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-5 py-6 md:py-6 w-full px-4">
      
      <div className="flex flex-col items-center gap-2 md:gap-3 text-center max-w-4xl">
        <Title className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
          {title}
        </Title>
        <Description className="text-sm md:text-base lg:text-lg text-muted-foreground leading-tight">
          {description}
        </Description>
      </div>

      <div className="w-full max-w-5xl mt-1 md:mt-2">
        <div className="relative p-4 md:p-5 rounded-[2rem] bg-custom-dark border border-border/50 shadow-2xl overflow-hidden">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/10 blur-[100px] pointer-events-none" />

          {subTitle && (
            // Changed from justify-center/end to justify-start to align left
            <div className="relative z-10 flex justify-start w-full mb-3 md:mb-4 border-b border-border/30 pb-2 pl-2">
              <h3 className="text-base md:text-lg font-medium text-foreground">
                {subTitle}
              </h3>
            </div>
          )}

          <div className="relative z-10 flex flex-col gap-2.5 md:gap-3">
            {list?.map((capability, index) => (
              <div
                key={capability}
                className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 p-2.5 md:p-3 rounded-2xl bg-background/5 border border-border/20 hover:bg-background/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(3,146,160,0.2)] shrink-0">
                  <span className="text-sm md:text-base font-bold">{index + 1}</span>
                </div>
                
                <Description className="flex-1 text-sm md:text-base text-foreground/90 font-medium leading-tight">
                  {capability}
                </Description>
              </div>
            ))}
          </div>
        </div>
      </div>

      {buttonTitle && (
        <Button className="mt-2 md:mt-3 px-8 py-4 md:py-5 rounded-full text-sm md:text-base font-semibold shadow-lg shadow-primary/20 text-white">
          {buttonTitle}
        </Button>
      )}
    </div>
  );
};

export default KeyCapabilities;