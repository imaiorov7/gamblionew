import React from "react";
import DashedBorder from "../shared/dashed-border";
import { Description, Title } from "../ui/typography";
import { Button } from "../ui/button";

const DataIntoDecisions = () => {
  return (
    <DashedBorder
      sides="all"
      className="flex flex-col items-center gap-8 py-12"
    >
      <Title className="text-3xl font-medium text-center">
        Turn Data Into <span className="text-primary">Decisions</span>
      </Title>

      <Description className="max-w-3xl text-center md:w-2/3">
        Gamblio Analytics connects every deposit, bet, win, or bonus into one
        intuitive, real-time interface. Operators can track performance across
        players, games, and vendors with the precision needed to optimize every
        move.
      </Description>

      <div className="w-full h-fit md:max-w-[80%] px-4">
        <div className="p-4 border rounded-lg bg-background border-border">
          <DashedBorder
            sides="all"
            className="flex flex-col mx-0 md:mx-0 bg-custom-dark"
          >
            <DashedBorder
              sides="all"
              className="flex-wrap justify-end w-full px-0 mx-0 text-left md:mx-0 text-muted-foreground"
            >
              Key capabilities:
            </DashedBorder>
            {[
              "Real-time tracking of core gambling events and KPIs",
              "Predefined & customizable reports for every team",
              "Advanced filtering and segmentation tools",
              "Exportable reports for further analysis",
              "Automated scheduled reports for leadership - insights that come to you",
            ].map((capability, index) => (
              <DashedBorder
                key={capability}
                sides="all"
                className="flex items-center w-full h-full gap-4 p-0 mx-0 md:flex-row md:mx-0"
              >
                <DashedBorder
                  sides="none"
                  sidesMd="x"
                  className="text-muted-foreground font-bold px-8 py-6 text-lg w-[2rem] mx-0 md:mx-0"
                >
                  {index + 1}.
                </DashedBorder>
                <p className="flex-1 px-4 py-3 md:px-0 text-muted-foreground h-fit">
                  {capability}
                </p>
              </DashedBorder>
            ))}
          </DashedBorder>
        </div>
      </div>

      <Button className="mt-4 text-white cursor-pointer">
        Explore Report Types
      </Button>
    </DashedBorder>
  );
};

export default DataIntoDecisions;
