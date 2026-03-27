"use client";
import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";

export default function Analytics() {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [positions, setPositions] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();
    setPathLength(length);

    const animate = () => {
      const getPointAtProgress = (progress: number) => {
        const point = path.getPointAtLength(progress * length);
        return { x: point.x, y: point.y };
      };

      let animationFrameId: number;
      let startTime: number;

      const animateFrame = (currentTime: number) => {
        if (!startTime) startTime = currentTime;

        const elapsed = (currentTime - startTime) / 1000;
        const progress = (elapsed / 15) % 1; // 15 second cycle
        const point = getPointAtProgress(progress);

        setPositions(point);
        animationFrameId = requestAnimationFrame(animateFrame);
      };

      animationFrameId = requestAnimationFrame(animateFrame);
      return () => cancelAnimationFrame(animationFrameId);
    };

    animate();
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
            r="4"
            fill="var(--primary)"
            cx={positions.x}
            cy={positions.y}
          />
          <circle
            className="animate-pulse"
            r="10"
            stroke="var(--primary)"
            strokeWidth="2"
            fill="none"
            opacity="0.66"
            cx={positions.x}
            cy={positions.y}
          />
          <circle
            className="animate-pulse"
            r="14"
            stroke="var(--primary)"
            strokeWidth="2"
            fill="none"
            opacity="0.25"
            cx={positions.x}
            cy={positions.y}
          />
          <circle
            className="animate-pulse"
            r="20"
            stroke="var(--primary)"
            strokeWidth="2"
            fill="none"
            opacity="0.1"
            cx={positions.x}
            cy={positions.y}
          />
        </g>
      </svg>
    </div>
  );
}
