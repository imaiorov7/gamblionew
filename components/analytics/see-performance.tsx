import React from "react";
import DashedBorder from "../shared/dashed-border";
import { Description, H1, Title } from "../ui/typography";
import { Button } from "../ui/button";
import Image from "next/image";

interface ReportCard {
  title: string;
  description: string;
  value: string;
  hasImage: boolean;
  imgPosition: string;
  imgArrowRotation?: string;
  imgArrowPosition?: string;
}

const SeePerformance = () => {
  const data: ReportCard[] = [
    {
      title: "Daily Report",
      description: "Snapshot of player activity and financial performance.",
      value: "Enables daily operational control and instant decisions.",
      hasImage: true,
      imgPosition: "-right-10 -top-14",
      imgArrowRotation: "none",
      imgArrowPosition: "-right-16 -top-18",
    },
    {
      title: "Performance Report",
      description: "Highlights top-performing players, games, and vendors.",
      value: "Supports targeted promotions and strategic content planning.",
      hasImage: false,
      imgPosition: "none",
    },
    {
      title: "Bonus Report",
      description: "Tracks bonus activation, redemption, and ROI.",
      value:
        "Enables A/B testing of promotional campaigns and maximizes promotional efficiency.",
      hasImage: true,
      imgPosition: "-left-10 -bottom-14",
      imgArrowRotation: "rotate-180 ",
      imgArrowPosition: " -left-16 -bottom-18",
    },
    {
      title: "Financial Report",
      description:
        "Analyzes bets, wins, deposits, withdrawals, GGR, NGR and all cross-KPIs in between.",
      value: "Strengthens reconciliation and profitability tracking.",
      hasImage: true,
      imgPosition: "-right-10 -bottom-14",
      imgArrowRotation: "rotate-90",
      imgArrowPosition: "-right-16 -bottom-18",
    },
  ];
  return (
    <DashedBorder
      sides="all"
      className="relative flex flex-col items-center gap-8 py-12"
    >
      <Title className="text-3xl font-medium text-center">
        See <span className="text-primary">Performance</span> as It Happens
      </Title>

      <Description className="max-w-3xl text-center md:w-2/3">
        Four report types, one goal: faster, smarter, and clearer operations
      </Description>

      <div className="relative w-full px-4 mt-8">
        {/* Grid of report cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {data.map(
            ({
              title,
              description,
              value,
              imgPosition,
              imgArrowRotation,
              imgArrowPosition,
              hasImage,
            }) => (
              <div key={title} className="p-2 border rounded-md ">
                <DashedBorder
                  sides="all"
                  className="relative px-0 py-6 mx-0 md:mx-0"
                >
                  {hasImage && (
                    <>
                      <Image
                        src="/images/circle.svg"
                        alt="Daily Report"
                        width={120}
                        height={120}
                        className={`absolute z-0 ${imgPosition} `}
                      />
                      <Image
                        src="/images/arrow.svg"
                        alt="Daily Report"
                        width={90}
                        height={90}
                        className={`absolute z-10 ${imgArrowRotation} ${imgArrowPosition} `}
                      />
                    </>
                  )}
                  <DashedBorder
                    sides="bottom"
                    className="w-full mx-0 mb-4 md:mx-0 "
                  >
                    <h3 className="w-full text-xl font-semibold text-center">
                      {title}
                    </h3>
                  </DashedBorder>
                  <p className="mb-2 text-sm text-center text-muted-foreground">
                    {description}
                  </p>
                  <p className="text-sm text-center text-muted-foreground">
                    <span className="text-primary">Value:</span> {value}
                  </p>
                </DashedBorder>
              </div>
            ),
          )}
        </div>
      </div>

      <Button className="mt-8 text-white cursor-pointer">
        See a Sample Report
      </Button>
    </DashedBorder>
  );
};

export default SeePerformance;
