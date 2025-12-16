import DashedBorder from "@/components/shared/dashed-border";
import { Description, Title } from "@/components/ui/typography";
import Image from "next/image";

export function CoreValue() {
  return (
    <DashedBorder
      sides="all"
      className="flex flex-col items-center w-full gap-8 pt-12 pb-18"
    >
      <Title className="text-3xl font-medium text-center">
        <span className="text-primary">Core Value</span> Proposition
      </Title>

      <Description className="max-w-3xl text-center md:w-2/3">
        Gamblio Analytics turns fragmented gaming data into measurable
        performance intelligence — empowering operators to grow revenue, reduce
        manual effort, and optimize player experiences with every decision.
      </Description>

      <div className="relative flex flex-col items-center justify-center w-full max-w-5xl gap-12 px-4 mt-8">
        {/* Central Image with Text Around */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:grid-rows-2">
          {/* Top Row */}
          <div className="relative flex flex-col items-center justify-center gap-2 p-4 text-center md:col-start-1">
            <div className="relative p-4 border-2 rounded-lg bg-custom-dark border-border after:content-[''] after:absolute after:right-[-16px] after:bottom-2 after:border-8 after:border-transparent after:border-l-border md:after:block after:hidden">
              <div className="absolute right-[-14px] bottom-2 w-0 h-0 border-8 border-transparent border-l-custom-dark hidden md:block" />
              <h3 className="text-sm font-semibold">
                Turn complexity into clarity
              </h3>
            </div>
          </div>
          <div className="relative items-center justify-center hidden row-span-2 md:col-start-2 md:flex">
            <Image
              src="/images/logotip-gr.png"
              alt="Core Value"
              width={256}
              height={256}
              className="object-contain"
            />
          </div>
          <div className="relative flex flex-col items-center justify-center gap-2 p-4 text-center md:col-start-3">
            <div className="relative p-4 border-2 rounded-lg bg-custom-dark border-border after:content-[''] after:absolute after:left-[-16px] after:bottom-2 after:border-8 after:border-transparent after:border-r-border md:after:block after:hidden">
              <div className="absolute left-[-14px] bottom-2 w-0 h-0 border-8 border-transparent border-r-custom-dark hidden md:block" />
              <h3 className="text-sm font-semibold">
                Compress time-to-decision
              </h3>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="relative flex flex-col items-center justify-center gap-2 p-4 text-center md:col-start-1">
            <div className="relative p-4 border-2 rounded-lg bg-custom-dark border-border after:content-[''] after:absolute after:right-[-18px] after:bottom-2 after:border-8 after:border-transparent after:border-l-border md:after:block after:hidden">
              <div className="absolute right-[-18px] bottom-2 w-0 h-0 border-8 border-transparent border-l-custom-dark hidden md:block" />
              <h3 className="text-sm font-semibold">
                Transform data into decisions
              </h3>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center gap-2 p-4 text-center md:col-start-3">
            <div className="relative p-4 border-2 rounded-lg bg-custom-dark border-border after:content-[''] after:absolute after:left-[-18px] after:bottom-2 after:border-8 after:border-transparent after:border-r-border md:after:block after:hidden">
              <div className="absolute left-[-18px] bottom-2 w-0 h-0 border-8 border-transparent border-r-custom-dark hidden md:block" />
              <h3 className="text-sm font-semibold">
                Empower your team with operational intelligence
              </h3>
            </div>
          </div>
        </div>
      </div>
    </DashedBorder>
  );
}
