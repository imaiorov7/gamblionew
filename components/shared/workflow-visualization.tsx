import React from "react";
import DashedBorder from "./dashed-border";
import { Description, Title } from "../ui/typography";
import Image from "next/image";

const WorkflowVisualization = () => {
  const cards = [
    { content: "Trigger retention promotions" },
    { content: "Notify complieance teams when RG thresholds are breached" },
    {
      content:
        "Enables identification of suspicious accountsfor bonus restrictions",
    },
    { content: "Alerts operators when high-potential players emerge" },
  ];
  return (
    <DashedBorder
      sides="all"
      className="flex flex-col items-center gap-8 pt-12 pb-0 "
    >
      <Title className="font-medium text-center ">
        Let the Predictions Trigger the Actions
      </Title>
      <Description className="max-w-3xl text-center md:w-2/3">
        Gamblio Predict connects insights to automation, ensuring no opportunity
        or risk goes unnoticed.
      </Description>
      <DashedBorder
        sides="all"
        className="w-full max-w-5xl px-4 py-8 mb-12 lg:max-w-full"
      >
        <Image
          src="/box.svg"
          alt="Workflow Visualization"
          width={1200}
          height={600}
          className="hidden mx-auto my-8 lg:block"
        />
        <div className="flex flex-col w-full gap-6 px-4 lg:hidden">
          {cards.map((card, index) => (
            <DashedBorder
              key={index}
              sides="all"
              className="p-6 mx-0 bg-custom-dark md:mx-0"
            >
              <p className="text-sm text-center text-muted-foreground">
                {card.content}
              </p>
            </DashedBorder>
          ))}
        </div>
      </DashedBorder>
    </DashedBorder>
  );
};

export default WorkflowVisualization;
