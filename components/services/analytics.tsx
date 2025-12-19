"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Analytics() {
  const pathRef = useRef<SVGPathElement>(null);
  const mainCircleRef = useRef<SVGCircleElement>(null);
  const ripple1Ref = useRef<SVGCircleElement>(null);
  const ripple2Ref = useRef<SVGCircleElement>(null);
  const ripple3Ref = useRef<SVGCircleElement>(null);

  useGSAP(() => {
    if (!pathRef.current || !mainCircleRef.current) return;

    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    // Function to get point at a specific progress along the path
    const getPointAtProgress = (progress: number) => {
      const point = path.getPointAtLength(progress * pathLength);
      return { x: point.x, y: point.y };
    };

    // Create a timeline that animates progress from 0 to 1
    const timeline = gsap.timeline({ repeat: -1, ease: "power1.inOut" });

    // Create an object to hold the progress value
    const progress = { value: 0 };

    // Animate progress from 0 to 1
    timeline.to(progress, {
      value: 1,
      duration: 15,
      ease: "power1.inOut",
      onUpdate: () => {
        const point = getPointAtProgress(progress.value);

        // Update all circles to the same position
        if (mainCircleRef.current) {
          gsap.set(mainCircleRef.current, {
            attr: { cx: point.x, cy: point.y },
          });
        }
        if (ripple1Ref.current) {
          gsap.set(ripple1Ref.current, {
            attr: { cx: point.x, cy: point.y },
          });
        }
        if (ripple2Ref.current) {
          gsap.set(ripple2Ref.current, {
            attr: { cx: point.x, cy: point.y },
          });
        }
        if (ripple3Ref.current) {
          gsap.set(ripple3Ref.current, {
            attr: { cx: point.x, cy: point.y },
          });
        }
      },
    });
  }, []);

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {/* background gradient */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 h-32 w-full bg-gradient-to-b from-[var(--color)] to-[var(--color-transparent)]"></div>

      {/* SVG */}
      <svg
        viewBox="0 0 600 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="analyticsSvgTitle"
      >
        <title id="analyticsSvgTitle">Analytics Chart Line Visualization</title>
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(3,146,160,0.3)" />
            <stop offset="100%" stopColor="rgba(3,146,160,0)" />
          </linearGradient>
        </defs>

        <path
          d="M 0 150 
             C 50,140 100,120 150,130 
             C 200,140 250,100 300,110 
             C 350,120 400,90 450,100 
             C 500,110 550,80 600,70 
             L 600,200 L 0,200 Z"
          fill="url(#lineGradient)"
          opacity="1"
        />

        <path
          ref={pathRef}
          id="analytics-path"
          d="M 0 150 
             C 50,140 100,120 150,130 
             C 200,140 250,100 300,110 
             C 350,120 400,90 450,100 
             C 500,110 550,80 600,70"
          stroke="var(--primary)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        <g>
          <circle
            className="animate-pulse"
            ref={mainCircleRef}
            r="4"
            fill="var(--primary)"
            cx="0"
            cy="150"
          />
          <circle
            className="animate-pulse"
            ref={ripple1Ref}
            r="10"
            stroke="var(--primary)"
            strokeWidth="2"
            fill="none"
            opacity="0.66"
            cx="0"
            cy="150"
          />
          <circle
            className="animate-pulse"
            ref={ripple2Ref}
            r="14"
            stroke="var(--primary)"
            strokeWidth="2"
            fill="none"
            opacity="0.25"
            cx="0"
            cy="150"
          />
          <circle
            className="animate-pulse"
            ref={ripple3Ref}
            r="20"
            stroke="var(--primary)"
            strokeWidth="2"
            fill="none"
            opacity="0.1"
            cx="0"
            cy="150"
          />
        </g>
      </svg>
    </div>
  );
}
