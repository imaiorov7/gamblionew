"use client";
import Link from "next/link";
import type React from "react";
import { type RefObject, useRef } from "react";
import { Button } from "../ui/button";
import { Description, Title } from "../ui/typography";
import DashedBorder from "./dashed-border";
import { FlowLine } from "./flow-line";
import { cn } from "@/lib/utils";

interface VisualizationCard {
  title?: string;
  description?: string;
}

interface VisualizationSuiteProps {
  title?: React.ReactNode;
  description?: string;
  cards?: VisualizationCard[];
  cards2?: VisualizationCard[];
  cardsTitle?: string;
  cardsTitle2?: string;
  buttonText?: string;
  buttonLink?: string;
  connections?: Connection[];
  connections2?: Connection[];
  className?: string;
}

export type Connection = {
  from: number; // index in cards
  to: number; // index in cards
  fromSide?: "top" | "bottom" | "left" | "right";
  toSide?: "top" | "bottom" | "left" | "right";
  bends?: { x: number; y: number }[];
  dashed?: boolean;
  animated?: boolean;
  animationDuration?: number;
  animationDelay?: number;
  reverse?: boolean;
  showDots?: boolean;
};

const VisualizationSuite = ({
  title,
  description,
  cards,
  cards2,
  cardsTitle,
  cardsTitle2,
  buttonText = "Explore our services",
  buttonLink = "#",
  connections = [],
  connections2 = [],
  className,
}: VisualizationSuiteProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const cardRefsStoreRef = useRef<RefObject<HTMLDivElement | null>[]>([]);
  const cardRefsStoreRef2 = useRef<RefObject<HTMLDivElement | null>[]>([]);

  // Initialize ref objects array to match cards length
  // Create new ref objects only when length changes
  if (cardRefsStoreRef.current.length !== cards?.length && cards?.length) {
    cardRefsStoreRef.current = Array.from({ length: cards?.length }, () => ({
      current: null as HTMLDivElement | null,
    }));
  }

  // Initialize ref objects array for cards2
  if (cardRefsStoreRef2.current.length !== cards2?.length && cards2?.length) {
    cardRefsStoreRef2.current = Array.from({ length: cards2?.length }, () => ({
      current: null as HTMLDivElement | null,
    }));
  }

  const cardRefs = cardRefsStoreRef.current;
  const cardRefs2 = cardRefsStoreRef2.current;
  const hasMoreThan4Cards = (cards?.length ?? 0) > 4;
  const hasMoreThan4Cards2 = (cards2?.length ?? 0) > 4;

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
      <div
        className={`relative hidden w-full gap-8  px-4 mt-12 pb-4 ${
          hasMoreThan4Cards
            ? "lg:grid lg:grid-cols-3 lg:items-center lg:justify-items-center lg:auto-rows-[minmax(150px,auto)] min-h-[400px]"
            : cn(
                "lg:flex lg:justify-center lg:items-end min-h-[250px]",
                className,
              )
        }`}
        ref={containerRef as RefObject<HTMLDivElement>}
      >
        {cardsTitle && (
          <Description className=" absolute -top-20 left-0  px-4 text-xl font-semibold bg-custom-dark">
            {cardsTitle}
          </Description>
        )}
        {cards?.map((card, index) => {
          // For flex layout (≤4 cards): alternate based on even/odd
          // For grid layout (>4 cards): alternate based on column position with vertical offsets
          const getAlignmentClass = () => {
            if (hasMoreThan4Cards) {
              // For 3-column grid: create vertical variation
              // Middle column (index % 3 === 1) gets pushed down, others stay up
              const column = index % 3;
              if (column === 1) {
                return "self-end translate-y-8"; // Middle column: push down more
              } else if (column === 0) {
                return "self-start -translate-y-4"; // First column: push up
              } else {
                return "self-start"; // Last column: stay at top
              }
            } else {
              // For flex layout: alternate based on even/odd
              return index % 2 === 0 ? "self-start" : "self-end";
            }
          };

          return (
            <div
              ref={(el) => {
                if (cardRefs[index]) {
                  cardRefs[index].current = el;
                }
              }}
              key={`${card.title}-${index}`}
              className={`z-10 w-2/3 h-2/3 relative p-2 text-center border rounded-md bg-background border-border max-h-[200px] ${getAlignmentClass()}  `}
            >
              <DashedBorder
                sides="all"
                className="relative h-full z-10 p-0 mx-0 md:mx-0 bg-custom-dark "
              >
                {cards2 && (
                  <p className="absolute text-muted-foreground  -top-6 -left-4 bg-background rounded-md px-4 border border-border font-extrabold py-2">
                    {index + 1}
                  </p>
                )}
                <DashedBorder
                  sides={card.description ? "bottom" : "none"}
                  className={`w-full mx-0 ${card.description ? "mb-4" : ""}`}
                >
                  <h3 className="w-full text-xl font-semibold text-center">
                    {card.title}
                  </h3>
                </DashedBorder>
                {card.description && (
                  <p className="mb-2 text-sm text-center text-muted-foreground">
                    {card.description}
                  </p>
                )}
              </DashedBorder>
            </div>
          );
        })}
        {connections.map((conn) => {
          const from = cardRefs[conn.from];
          const to = cardRefs[conn.to];

          if (!from || !to) return null;

          return (
            <FlowLine
              key={`conn-${conn.from}-${conn.to}`}
              containerRef={containerRef}
              fromRef={from}
              toRef={to}
              {...conn}
              cornerRadius={16}
            />
          );
        })}
      </div>
      {cards2 && (
        <div
          className={`relative hidden w-full gap-8  px-4 mt-12 pb-4  ${
            hasMoreThan4Cards2
              ? "lg:grid lg:grid-cols-3 lg:items-center lg:justify-items-center lg:auto-rows-[minmax(150px,auto)] min-h-[400px]"
              : "lg:flex lg:justify-center lg:items-end min-h-[250px]"
          }`}
          ref={containerRef2 as RefObject<HTMLDivElement>}
        >
          {cardsTitle2 && (
            <Description className=" absolute -top-20 left-0  px-4 text-xl font-semibold">
              {cardsTitle2}
            </Description>
          )}
          {cards2?.map((card, index) => {
            // For flex layout (≤4 cards): alternate based on even/odd
            // For grid layout (>4 cards): alternate based on column position with vertical offsets
            const getAlignmentClass = () => {
              if (hasMoreThan4Cards2) {
                // For 3-column grid: create vertical variation
                // Middle column (index % 3 === 1) gets pushed down, others stay up
                const column = index % 3;
                if (column === 1) {
                  return "self-end translate-y-8"; // Middle column: push down more
                } else if (column === 0) {
                  return "self-start -translate-y-4"; // First column: push up
                } else {
                  return "self-start"; // Last column: stay at top
                }
              } else {
                // For flex layout: alternate based on even/odd
                return index % 2 === 0 ? "self-start" : "self-end";
              }
            };

            return (
              <div
                ref={(el) => {
                  if (cardRefs2[index]) {
                    cardRefs2[index].current = el;
                  }
                }}
                key={`cards2-${card.title}-${index}`}
                className={`z-10 w-2/3 h-2/3 relative p-2 text-center border rounded-md bg-background border-border max-h-[200px] ${getAlignmentClass()}  `}
              >
                <DashedBorder
                  sides="all"
                  className="relative h-full z-10 p-0 mx-0 b md:mx-0 bg-custom-dark "
                >
                  <DashedBorder
                    sides={card.description ? "bottom" : "none"}
                    className={`w-full mx-0 ${card.description ? "mb-4" : ""}`}
                  >
                    <h3 className="w-full text-xl font-semibold text-center">
                      {card.title}
                    </h3>
                  </DashedBorder>
                  {card.description && (
                    <p className="mb-2 text-sm text-center text-muted-foreground">
                      {card.description}
                    </p>
                  )}
                </DashedBorder>
              </div>
            );
          })}
          {connections2.map((conn) => {
            const from = cardRefs2[conn.from];
            const to = cardRefs2[conn.to];

            if (!from || !to) return null;

            return (
              <FlowLine
                key={`conn2-${conn.from}-${conn.to}`}
                containerRef={containerRef2}
                fromRef={from}
                toRef={to}
                {...conn}
                cornerRadius={16}
              />
            );
          })}
        </div>
      )}

      {/* Mobile Vertical Layout */}
      <div className="flex flex-col w-full gap-6 px-4 lg:hidden">
        {cards?.map((card) => (
          <DashedBorder
            key={card.title}
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
      <div className="flex flex-col w-full gap-6 px-4 lg:hidden">
        {cards2?.map((card) => (
          <DashedBorder
            key={card.title}
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

      {/* <Link href={buttonLink}>
        <Button className="mt-8 text-white cursor-pointer">{buttonText}</Button>
      </Link> */}
    </DashedBorder>
  );
};

export default VisualizationSuite;
