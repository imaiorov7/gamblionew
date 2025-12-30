import Image from "next/image";
import DashedBorder from "@/components/shared/dashed-border";
import { Description, Title } from "@/components/ui/typography";

interface FeatureShowcaseProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  chat1?: string | React.ReactNode;
  chat2?: string | React.ReactNode;
  chat3?: string | React.ReactNode;
  chat4?: string | React.ReactNode;
  chat5?: string | React.ReactNode;
  chat6?: string | React.ReactNode;
}

function FeatureShowcase({
  title,
  description,
  chat1,
  chat2,
  chat3,
  chat4,
  chat5,
  chat6,
}: FeatureShowcaseProps) {
  return (
    <DashedBorder
      sides="all"
      className="flex flex-col items-center w-full gap-4 pt-12 pb-18"
    >
      <Title className="text-3xl font-medium text-center">{title}</Title>

      <Description className="max-w-3xl text-center md:w-2/3">
        {description}
      </Description>

      <div className="relative flex flex-col items-center justify-center w-full max-w-5xl gap-12 px-4 mt-8">
        {/* Central Image with Text Around */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:grid-rows-2">
          {/* Top Row */}
          {chat1 && (
            <div className="relative flex flex-col items-center justify-center gap-2 p-4 text-center md:col-start-1">
              <div className="relative p-4 border-2 rounded-lg bg-custom-dark border-border after:content-[''] after:absolute after:right-[-16px] after:bottom-2 after:border-8 after:border-transparent after:border-l-border md:after:block after:hidden">
                <div className="absolute right-[-14px] bottom-2 w-0 h-0 border-8 border-transparent border-l-custom-dark hidden md:block" />
                <h3 className="text-sm font-semibold">{chat1}</h3>
              </div>
            </div>
          )}

          <div className="relative items-center justify-center hidden row-span-2 md:col-start-2 md:flex">
            <Image
              src="/images/logotip-gr.png"
              alt="Core Value"
              width={256}
              height={256}
              className="object-contain"
            />
          </div>

          {chat2 && (
            <div className="relative flex flex-col items-center justify-center gap-2 p-4 text-center md:col-start-3">
              <div className="relative p-4 border-2 rounded-lg bg-custom-dark border-border after:content-[''] after:absolute after:left-[-16px] after:bottom-2 after:border-8 after:border-transparent after:border-r-border md:after:block after:hidden">
                <div className="absolute left-[-14px] bottom-2 w-0 h-0 border-8 border-transparent border-r-custom-dark hidden md:block" />
                <h3 className="text-sm font-semibold">{chat2}</h3>
              </div>
            </div>
          )}

          {/* Bottom Row */}
          {chat3 && (
            <div className="relative flex flex-col items-center justify-center gap-2 p-4 text-center md:col-start-1">
              <div className="relative p-4 border-2 rounded-lg bg-custom-dark border-border after:content-[''] after:absolute after:right-[-18px] after:bottom-2 after:border-8 after:border-transparent after:border-l-border md:after:block after:hidden">
                <div className="absolute right-[-18px] bottom-2 w-0 h-0 border-8 border-transparent border-l-custom-dark hidden md:block" />
                <h3 className="text-sm font-semibold">{chat3}</h3>
              </div>
            </div>
          )}

          {chat4 && (
            <div className="relative flex flex-col items-center justify-center gap-2 p-4 text-center md:col-start-3">
              <div className="relative p-4 border-2 rounded-lg bg-custom-dark border-border after:content-[''] after:absolute after:left-[-18px] after:bottom-2 after:border-8 after:border-transparent after:border-r-border md:after:block after:hidden">
                <div className="absolute left-[-18px] bottom-2 w-0 h-0 border-8 border-transparent border-r-custom-dark hidden md:block" />
                <h3 className="text-sm font-semibold">{chat4}</h3>
              </div>
            </div>
          )}
          {chat5 && (
            <div className="relative flex flex-col items-center justify-center gap-2 p-4 text-center md:col-start-1">
              <div className="relative p-4 border-2 rounded-lg bg-custom-dark border-border after:content-[''] after:absolute after:right-[-16px] after:bottom-2 after:border-8 after:border-transparent after:border-l-border md:after:block after:hidden">
                <div className="absolute right-[-14px] bottom-2 w-0 h-0 border-8 border-transparent border-l-custom-dark hidden md:block" />
                <h3 className="text-sm font-semibold">{chat5}</h3>
              </div>
            </div>
          )}

          {chat6 && (
            <div className="relative flex flex-col items-center justify-center gap-2 p-4 text-center md:col-start-3">
              <div className="relative p-4 border-2 rounded-lg bg-custom-dark border-border after:content-[''] after:absolute after:left-[-18px] after:bottom-2 after:border-8 after:border-transparent after:border-r-border md:after:block after:hidden">
                <div className="absolute left-[-18px] bottom-2 w-0 h-0 border-8 border-transparent border-r-custom-dark hidden md:block" />
                <h3 className="text-sm font-semibold">{chat6}</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashedBorder>
  );
}

export default FeatureShowcase;
