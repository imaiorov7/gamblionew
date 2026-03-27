import Image from "next/image";
import type React from "react";
import { Description, H1, Title } from "../ui/typography";
import DashedBorder from "./dashed-border";

type ReportCard = {
  description: string;
  hasImage: boolean;
  imgPosition?: string;
  imgArrowRotation?: string;
  imgArrowPosition?: string;
};

interface ReportCardsProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  data?: ReportCard[];
}

const ReportCardsSimple = ({ title, description, data }: ReportCardsProps) => {
  return (
    <DashedBorder
      sides="all"
      className="relative flex flex-col items-center gap-4 py-12"
    >
      <Title className="text-3xl font-medium text-center">{title}</Title>

      <Description className="max-w-3xl text-center md:w-2/3">
        {description}
      </Description>

      <div className="relative w-full flex justify-center md:px-4 mt-14">
        <div className="flex justify-center flex-wrap gap-4 max-w-4/5">
          {data?.map(
            (
              {
                description,
                imgPosition,
                imgArrowRotation,
                imgArrowPosition,
                hasImage,
              },
              index,
            ) => (
              <div key={description} className={`p-2 border rounded-md `}>
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

                  <Description className="mb-2 text-muted-foreground px-4">
                    {description}
                  </Description>
                </DashedBorder>
              </div>
            ),
          )}
        </div>
      </div>
    </DashedBorder>
  );
};

export default ReportCardsSimple;
