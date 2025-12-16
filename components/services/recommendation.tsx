"use client";

import { Dice1, Dice2, Dice3, Dice4, Dice5, User } from "lucide-react";
import type React from "react";
import { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-8 md:size-12 items-center justify-center rounded-full border-2 bg-muted p-1.5 md:p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function Recommendation({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden px-4 md:px-10",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-2 md:gap-4 lg:gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref} className="size-8 md:size-12">
            <User className="size-4 md:size-6" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-10 md:size-16">
            <img
              src={"/images/logotip-dark.svg"}
              alt="Gamblio Logo"
              className="w-full h-full object-contain p-1"
            />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-1 md:gap-2">
          <Circle ref={div1Ref}>
            <Dice1 className="size-3 md:size-6" />
          </Circle>
          <Circle ref={div2Ref}>
            <Dice2 className="size-3 md:size-6" />
          </Circle>
          <Circle ref={div3Ref}>
            <Dice3 className="size-3 md:size-6" />
          </Circle>
          <Circle ref={div4Ref}>
            <Dice4 className="size-3 md:size-6" />
          </Circle>
          <Circle ref={div5Ref}>
            <Dice5 className="size-3 md:size-6" />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  );
}
