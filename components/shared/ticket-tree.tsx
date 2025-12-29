"use client";
import Link from "next/link";
import type React from "react";
import { type RefObject, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Description, Title } from "../ui/typography";
import DashedBorder from "./dashed-border";
import { FlowLine } from "./flow-line";
import Ticket from "./ticket";

/**
 * Ticket item interface
 */
interface TicketData {
  title: string;
  description?: string;
}

/**
 * Connection interface for flow lines between tickets
 */
interface Connection {
  from: number;
  to: number;
  cornerRadius?: number;
  [key: string]: any;
}

/**
 * TicketTree component props
 */
interface TicketTreeProps {
  title: string;
  description: string;
  ticketsTitle?: string;
  tickets: TicketData[];
  connections?: Connection[];
  className?: string;
  buttonText?: string;
  buttonLink?: string;
}

/**
 * TicketTree component displays a hierarchical tree of tickets with connections
 * Supports up to 4 tickets with flex layout and alternating vertical alignment
 * Includes desktop and mobile responsive layouts
 */
const TicketTree: React.FC<TicketTreeProps> = ({
  title,
  description,
  ticketsTitle,
  tickets,
  connections = [],
  className = "",
  buttonText = "Learn More",
  buttonLink = "#",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ticketRefsStoreRef = useRef<RefObject<HTMLDivElement | null>[]>([]);

  // Initialize ref objects array to match tickets length
  // Create new ref objects only when length changes
  if (ticketRefsStoreRef.current.length !== tickets.length) {
    ticketRefsStoreRef.current = Array.from({ length: tickets.length }, () => ({
      current: null as HTMLDivElement | null,
    }));
  }

  const ticketRefs = ticketRefsStoreRef.current;

  return (
    <DashedBorder
      sides="all"
      className="flex flex-col items-center gap-4 pt-12 pb-0"
    >
      <Title className="text-3xl font-medium text-center">{title}</Title>

      <Description className="max-w-3xl text-center md:w-2/3">
        {description}
      </Description>

      {ticketsTitle && (
        <Description className="hidden xl:block mt-6 text-xl font-semibold text-center">
          {ticketsTitle}
        </Description>
      )}

      {/* Desktop Grid Layout with FlowLines */}
      <div
        className="relative hidden w-full grid-cols-10 grid-rows-4 gap-18 px-2 xl:px-0 mt-12 xl:grid overflow-x-auto"
        ref={containerRef as RefObject<HTMLDivElement>}
      >
        {tickets.map((ticket, index) => {
          const positions = [
            "col-span-3 col-start-3 w-fit", // 0
            "col-span-3 col-start-7 w-fit", // 1
            "col-span-3 row-start-2 col-start-2 w-fit", // 2
            "col-span-3 col-start-5 row-start-2 w-fit", // 3
            "col-span-3 col-start-8 row-start-2 w-fit", // 4
            "col-span-3 col-start-5 row-start-3 w-fit ", // 5
            "col-span-2 col-start-5 row-start-4 w-full", //
          ];

          return (
            <div
              key={`desktop-ticket-${index}`}
              ref={(el) => {
                if (ticketRefs[index]) {
                  ticketRefs[index].current = el;
                }
              }}
              className={cn(`z-10`, positions[index])}
            >
              {ticket.title.length === 0 ? (
                <div className="bg-custom-dark after:bg-custom-dark before:bg-custom-dark w-full h-full border-8 border-custom-dark  relative after:content-[''] after:z-10 after:absolute after:size-18 after:-left-8 after:top-[-9px]  after:rounded-full after:pointer-events-none after:border-8 after:border-custom-dark before:content-[''] before:absolute before:size-18 before:z-10 before:-right-8 before:top-[-9px]  before:rounded-full before:pointer-events-none before:border-8 before:border-custom-dark"></div>
              ) : (
                <Ticket content={ticket.title} />
              )}
            </div>
          );
        })}

        {(connections.length > 0 ? connections : []).map((conn) => {
          const from = ticketRefs[conn.from];
          const to = ticketRefs[conn.to];

          if (!from || !to) return null;

          return (
            <FlowLine
              key={`${conn.id ? conn.id : conn.from}-${conn.to}`}
              containerRef={containerRef}
              fromRef={from}
              toRef={to}
              {...conn}
              cornerRadius={conn.cornerRadius ?? 16}
            />
          );
        })}
      </div>

      {/* Mobile/Tablet Vertical Layout */}
      <div className="flex flex-col w-full gap-6 px-4 mt-8 xl:hidden">
        {tickets?.map((ticket) => (
          <DashedBorder
            key={ticket.title}
            sides="all"
            className="p-6 mx-0 bg-custom-dark md:mx-0"
          >
            <h3 className="mb-2 text-lg font-semibold text-center">
              {ticket.title}
            </h3>
            {ticket.description && (
              <p className="text-sm text-center text-muted-foreground">
                {ticket.description}
              </p>
            )}
          </DashedBorder>
        ))}
      </div>
    </DashedBorder>
  );
};

export default TicketTree;
