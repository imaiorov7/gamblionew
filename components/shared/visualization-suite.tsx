import React from "react";

import Link from "next/link";

import { Button } from "../ui/button";
import DashedBorder from "./dashed-border";
import { Description, Title } from "../ui/typography";

interface VisualizationCard {
  title: string;
  description: string;
}

interface VisualizationSuiteProps {
  title: React.ReactNode;
  description: string;
  cards: VisualizationCard[];
  buttonText?: string;
  buttonLink?: string;
}

const VisualizationSuite = ({
  title,
  description,
  cards,
  buttonText = "Explore our services",
  buttonLink = "#",
}: VisualizationSuiteProps) => {
  return (
    <DashedBorder
      sides="all"
      className="flex flex-col items-center gap-4 py-12"
    >
      <Title className="text-3xl font-medium text-center">{title}</Title>

      <Description className="max-w-3xl text-center md:w-2/3">
        {description}
      </Description>

      {/* Desktop Grid Layout */}
      <div className="relative justify-center items-end hidden w-full gap-8 min-h-[250px] px-4 mt-12 lg:flex">
        {cards.map((card, index) => {
          const isEven = index % 2 === 0;
          const isLast = index === cards.length - 1;

          return (
            <div
              key={index}
              className={`z-10 w-full relative p-2 text-center border rounded-md bg-background border-border max-h-[200px] ${
                isEven ? "self-start" : "self-end"
              }`}
            >
              <div
                className={`absolute -z-10 w-[60%] h-[58%] border-solid hidden xl:block ${
                  isEven
                    ? "top-[100%] left-1/2 rounded-bl-[20px] border-l border-b"
                    : isLast
                    ? "border-t border-r rounded-tr-[20px] bottom-[100%] !w-[58%] !h-[46%] right-1/2"
                    : "border-t border-l rounded-tl-[20px] bottom-[100%] !h-[46%] left-1/2"
                }`}
              ></div>
              <DashedBorder
                sides="all"
                className="relative z-10 p-0 mx-0 bg-background md:mx-0"
              >
                <DashedBorder
                  sides="bottom"
                  className="w-full mx-0 mb-4 md:mx-0"
                >
                  <h3 className="w-full text-xl font-semibold text-center">
                    {card.title}
                  </h3>
                </DashedBorder>
                <p className="mb-2 text-sm text-center text-muted-foreground">
                  {card.description}
                </p>
              </DashedBorder>
            </div>
          );
        })}
      </div>

      {/* Mobile Vertical Layout */}
      <div className="flex flex-col w-full gap-6 px-4 lg:hidden">
        {cards.map((card, index) => (
          <DashedBorder
            key={index}
            sides="all"
            className="p-6 mx-0 bg-custom-dark md:mx-0"
          >
            <h3 className="mb-2 text-lg font-semibold text-center">
              {card.title}
            </h3>
            <p className="text-sm text-center text-muted-foreground">
              {card.description}
            </p>
          </DashedBorder>
        ))}
      </div>

      <Link href={buttonLink}>
        <Button className="mt-8 text-white cursor-pointer">{buttonText}</Button>
      </Link>
    </DashedBorder>
  );
};

export default VisualizationSuite;
