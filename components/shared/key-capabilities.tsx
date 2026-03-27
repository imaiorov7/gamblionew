import type React from "react";
import { Button } from "../ui/button";
import { Description, Title } from "../ui/typography";
import DashedBorder from "./dashed-border";

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
    <DashedBorder
      sides="all"
      className="flex flex-col items-center gap-4 py-12"
    >
      <Title className="text-3xl font-medium text-center">{title}</Title>

      <Description className="max-w-3xl text-center md:w-2/3">
        {description}
      </Description>

      <div className="w-full h-fit md:max-w-[80%] px-2 md:px-4">
        <div className="p-2 md:p-4 border rounded-lg bg-background border-border">
          <DashedBorder
            sides="all"
            className="flex flex-col mx-0 md:mx-0 bg-custom-dark"
          >
            <DashedBorder
              sides="all"
              className="flex-wrap justify-end w-full px-0 mx-0 text-left md:mx-0 text-muted-foreground text-lg md:text-xl"
            >
              {subTitle}
            </DashedBorder>
            {list?.map((capability, index) => (
              <DashedBorder
                key={capability}
                sides="all"
                className="flex flex-col md:flex-row items-center w-full h-full gap-0 md:gap-4 p-0 mx-0 md:mx-0"
              >
                <DashedBorder
                  sides="bottom"
                  sidesMd="x"
                  className="text-muted-foreground font-bold px-4 md:px-8 py-3 md:py-6 text-base md:text-lg w-full md:w-[2rem] mx-0 md:mx-0 text-center md:text-left"
                >
                  {index + 1}.
                </DashedBorder>
                <Description className="flex-1 px-4 py-4 md:px-0 md:py-3 text-muted-foreground h-fit text-center md:text-left text-sm md:text-base">
                  {capability}
                </Description>
              </DashedBorder>
            ))}
          </DashedBorder>
        </div>
      </div>

      {/* {buttonTitle && (
        <Button className="mt-4 text-white cursor-pointer">
          Explore Report Types
        </Button>
      )} */}
    </DashedBorder>
  );
};

export default KeyCapabilities;
