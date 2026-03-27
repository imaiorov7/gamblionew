"use client";

import type React from "react";
import { Description, Title } from "../ui/typography";
import DashedBorder from "./dashed-border";

interface CylinderCard {
  text: string;
}

interface ChatBubble {
  text: string;
  side: "left" | "right";
}

interface CylinderVisualizationProps {
  cards: CylinderCard[];
  title: string | React.ReactNode;
  subTitle: string | React.ReactNode;
  description: string | React.ReactNode;
  chatBubble1?: ChatBubble;
  chatBubble2?: ChatBubble;
}

/**
 * Cylinder visualization component with floating text cards
 * Cards are positioned around a central cylinder shape
 * Optional chat bubbles can be displayed on left/right sides
 */
const CylinderVisualization: React.FC<CylinderVisualizationProps> = ({
  cards,
  title,
  description,
  subTitle,
  chatBubble1,
  chatBubble2,
}) => {
  return (
    <DashedBorder
      sides="all"
      className="flex flex-col items-center gap-4 py-12"
    >
      <Title className="text-3xl font-medium text-center">{title}</Title>

      <Description className="max-w-3xl text-center md:w-2/3">
        {description}
      </Description>

      {/* Chat Bubbles Container */}
      <div className="relative w-full flex justify-between items-center px-4 mb-6">
        {/* Left Chat Bubble */}
        {chatBubble1 && (
          <div className="w-fit max-w-xs">
            <DashedBorder
              sides="all"
              className="px-6 py-4 mx-0 bg-background/50"
            >
              <Description className="text-center text-sm text-muted-foreground">
                {chatBubble1.text}
              </Description>
            </DashedBorder>
          </div>
        )}

        {/* Right Chat Bubble */}
        {chatBubble2 && (
          <div className="w-fit max-w-xs ml-auto">
            <DashedBorder
              sides="all"
              className="px-6 py-4 mx-0 bg-background/50"
            >
              <Description className="text-center text-sm text-muted-foreground">
                {chatBubble2.text}
              </Description>
            </DashedBorder>
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-8 md:gap-8 justify-center items-center">
        {cards.map((card, index) => {
          const isMiddle = index === 1; // Middle cylinder (index 1)
          return (
            <div
              className={`flex flex-col justify-center items-center ${
                isMiddle ? "md:mt-16" : ""
              }`}
              key={card.text}
            >
              <div
                key={`${card.text}-${index}`}
                className={`w-fit relative p-2 text-center border rounded-md bg-background border-border max-h-[200px] mb-4`}
              >
                <DashedBorder
                  sides="all"
                  className="h-full mx-0 md:mx-0 bg-custom-dark"
                >
                  <Description>{card.text}</Description>
                </DashedBorder>
              </div>

              <div className="relative z-0 lg:block hidden">
                <div className="w-[280px] md:w-[400px] rounded-[40%] border-t border-dashed border-border h-[70px] md:h-[100px] bg-[#131315]"></div>
                <div
                  className="bg-custom-dark border-l border-b border-r border-dashed border-border h-[210px] md:h-[300px] w-[280px] md:w-[400px] absolute top-[28px] md:top-[40px] z-10"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 12% 8%, 25% 14%, 40% 18%, 50% 19%, 60% 18%, 75% 14%, 88% 8%, 100% 0%, 100% 100%, 0% 100%)",
                  }}
                ></div>
                <div className="h-[210px] md:h-[300px] w-[280px] md:w-[400px]"></div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={`w-fit relative p-2 text-center border rounded-md bg-background border-border max-h-[200px] mb-4`}
      >
        <DashedBorder
          sides="all"
          className="h-full mx-0 md:mx-0 bg-custom-dark"
        >
          <Description>{subTitle}</Description>
        </DashedBorder>
      </div>
    </DashedBorder>
  );
};

export default CylinderVisualization;
