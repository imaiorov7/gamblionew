import React from "react";
import DashedBorder from "./dashed-border";
import { Description } from "../ui/typography";

export default function Ticket({ content }: { content?: string }) {
  return (
    <div className="relative bg-background rounded-lg max-w-72 xl:max-w-80 2xl:max-w-96 overflow-hidden">
      {/* Ticket content */}
      <div className="p-1.5 xl:p-2 relative bg-background w-full after:content-[''] after:absolute after:size-5 xl:after:size-6 after:z-10 after:-left-2.5 xl:after:-left-3 after:top-1/2 after:-translate-y-1/2 after:bg-background after:rounded-full after:pointer-events-none after:border after:border-custom-dark border border-custom-dark before:content-[''] before:absolute before:size-5 xl:before:size-6 before:z-10 before:-right-2.5 xl:before:-right-3 before:top-1/2 before:-translate-y-1/2 before:bg-background before:rounded-full before:pointer-events-none before:border before:border-custom-dark">
        {/* Header */}
        <DashedBorder
          sides="all"
          className="text-center mx-0 md:mx-0 px-6 xl:px-10 2xl:px-12 overflow-clip py-6 xl:py-8 bg-custom-dark 
          after:content-[''] after:absolute after:size-9 after:z-0 after:-left-4 after:top-1/2 after:-translate-y-1/2 after:bg-background after:rounded-full after:pointer-events-none 
          after:border after:border-dashed after:border-border
          after:[mask-image:linear-gradient(to_left,background_40%,transparent_40%)]
          before:content-[''] before:absolute before:size-9 before:z-0 before:-right-4 before:top-1/2 before:-translate-y-1/2 before:bg-background before:rounded-full before:pointer-events-none 
          before:border before:border-dashed before:border-border
          before:[mask-image:linear-gradient(to_right,background_40%,transparent_40%)]"
        >
          <Description>{content}</Description>
        </DashedBorder>
      </div>
    </div>
  );
}
