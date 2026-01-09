"use client";
import { Aperture, FilePlay } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Description, Title } from "../ui/typography";
import { HeroVideoDialog } from "../video-dialog";
import DashedBorder from "./dashed-border";

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

  const asideDataCards = [
    { id: 1, title: "Gamblio.mp4" },
    { id: 2, title: "AI.mp4" },
    { id: 3, title: "Predict.mp4" },
  ];

  const [selectedVideo, setSelectedVideo] = useState<number>(1);
  return (
    <DashedBorder
      sides="all"
      className="flex flex-col items-center gap-4 pt-12 pb-0 "
    >
      <Title className="font-medium text-center ">
        Let the<span className="text-primary"> Predictions </span>Trigger the
        <span className="text-primary"> Actions</span>
      </Title>
      <Description className="max-w-3xl text-center md:w-2/3">
        Gamblio Predict connects insights to automation, ensuring no opportunity
        or risk goes unnoticed.
      </Description>
      <DashedBorder
        sides="all"
        className="w-full max-w-5xl px-4 py-8 mb-12 lg:max-w-full"
      >
        <div className="w-full max-w-7xl border border-border h-[600px] rounded-xl overflow-hidden">
          <div className="w-full hidden h-20 border lg:flex rounded-xs justify-end items-center px-4 border-border">
            Header
          </div>
          <div className="flex flex-col-reverse lg:flex-row h-full lg:h-[520px]">
            <aside className="w-full lg:w-1/5 bg-custom-dark overflow-x-auto lg:overflow-x-hidden overflow-y-hidden p-18 flex flex-row lg:flex-col h-fit lg:h-full items-center justify-around gap-10">
              {asideDataCards.map((card) => (
                <Button
                  variant={"ghost"}
                  key={card.id}
                  className="dark:hover:bg-transparent"
                  onClick={() => setSelectedVideo(card.id)}
                >
                  <div className="flex flex-col items-center gap-4 w-36 h-32 p-4 border bg-custom-dark rounded-md">
                    <div className="w-full h-full flex justify-center items-center bg-neutral-900 rounded-md">
                      <Aperture
                        className={`size-6 ${
                          selectedVideo === card.id
                            ? "text-primary animate-spin"
                            : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <p className="text-muted-foreground">{card.title}</p>
                  </div>
                </Button>
              ))}
            </aside>
            <main className="relative w-full lg:w-4/5 h-full">
              {selectedVideo === 1 ? (
                <div className="relative  h-full w-full  overflow-hidden  ">
                  <iframe
                    src="https://www.youtube.com/embed/Ubbb1RK7iFs"
                    title="Hero Video player"
                    className="size-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              ) : selectedVideo === 2 ? (
                <div className="relative  h-full w-full  overflow-hidden  ">
                  <iframe
                    src="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                    title="Hero Video player"
                    className="size-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              ) : (
                <div className="relative  h-full w-full  overflow-hidden  ">
                  <iframe
                    src="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                    title="Hero Video player"
                    className="size-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              )}
            </main>
          </div>
        </div>
        {/* <div className="flex flex-col w-full gap-6 px-4 lg:hidden">
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
        </div> */}
      </DashedBorder>
    </DashedBorder>
  );
};

export default WorkflowVisualization;
