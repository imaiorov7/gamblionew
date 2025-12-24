"use client";

import { motion } from "motion/react";
import {
  createContext,
  type RefObject,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

type Side = "top" | "bottom" | "left" | "right";

interface Point {
  x: number;
  y: number;
}

interface FlowLineProps {
  id?: string; // Unique ID for this line
  containerRef: RefObject<HTMLElement | null>;

  // Source can be a ref or a line ID + position
  fromRef?: RefObject<HTMLElement | null>;
  fromLineId?: string;
  fromLinePosition?: number; // 0-1, position along the line

  // Target can be a ref or a line ID + position
  toRef?: RefObject<HTMLElement | null>;
  toLineId?: string;
  toLinePosition?: number;

  fromSide?: Side;
  toSide?: Side;

  bends?: Point[];
  dashed?: boolean;
  strokeWidth?: number;
  cornerRadius?: number;

  // Animation props
  animated?: boolean;
  animationDuration?: number;
  animationDelay?: number;
  reverse?: boolean;
  gradientStartColor?: string;
  gradientStopColor?: string;
  pathColor?: string;
  pathOpacity?: number;
  showDots?: boolean; // Show animated dots traveling along the path
}

// Context to share line paths between components
const LinePathContext = createContext<Map<string, Point[]>>(new Map());

export function FlowLineContainer({ children }: { children: React.ReactNode }) {
  const [linePaths] = useState(() => new Map<string, Point[]>());

  return (
    <LinePathContext.Provider value={linePaths}>
      {children}
    </LinePathContext.Provider>
  );
}

function anchor(el: HTMLElement, container: HTMLElement, side: Side): Point {
  const r = el.getBoundingClientRect();
  const c = container.getBoundingClientRect();

  let x = 0;
  let y = 0;

  switch (side) {
    case "top":
      x = r.left + r.width / 2 - c.left;
      y = r.top - c.top;
      break;
    case "bottom":
      x = r.left + r.width / 2 - c.left;
      y = r.bottom - c.top;
      break;
    case "left":
      x = r.left - c.left;
      y = r.top + r.height / 2 - c.top;
      break;
    case "right":
      x = r.right - c.left;
      y = r.top + r.height / 2 - c.top;
      break;
  }

  return { x, y };
}

/**
 * Get a point along a line at a specific position (0-1)
 */
function getPointOnLine(points: Point[], position: number): Point {
  if (points.length === 0) return { x: 0, y: 0 };
  if (points.length === 1) return points[0];

  // Calculate total length
  let totalLength = 0;
  const segments: number[] = [];

  for (let i = 1; i < points.length; i++) {
    const dx = points[i].x - points[i - 1].x;
    const dy = points[i].y - points[i - 1].y;
    const len = Math.hypot(dx, dy);
    segments.push(len);
    totalLength += len;
  }

  // Find target distance
  const targetDist = totalLength * Math.max(0, Math.min(1, position));

  // Find which segment contains this point
  let accumulated = 0;
  for (let i = 0; i < segments.length; i++) {
    if (accumulated + segments[i] >= targetDist) {
      const segmentProgress = (targetDist - accumulated) / segments[i];
      const p1 = points[i];
      const p2 = points[i + 1];

      return {
        x: p1.x + (p2.x - p1.x) * segmentProgress,
        y: p1.y + (p2.y - p1.y) * segmentProgress,
      };
    }
    accumulated += segments[i];
  }

  return points[points.length - 1];
}

/**
 * Auto-calculates bend points for orthogonal routing
 */
function autoCalculateBends(
  start: Point,
  end: Point,
  fromSide: Side,
  toSide: Side,
): Point[] {
  const bends: Point[] = [];

  // Vertical start (top/bottom) to horizontal end (left/right)
  if (
    (fromSide === "top" || fromSide === "bottom") &&
    (toSide === "left" || toSide === "right")
  ) {
    bends.push({ x: start.x, y: end.y });
  }
  // Horizontal start (left/right) to vertical end (top/bottom)
  else if (
    (fromSide === "left" || fromSide === "right") &&
    (toSide === "top" || toSide === "bottom")
  ) {
    bends.push({ x: end.x, y: start.y });
  }
  // Same axis connections - use midpoint
  else if (
    (fromSide === "top" || fromSide === "bottom") &&
    (toSide === "top" || toSide === "bottom")
  ) {
    const midY = (start.y + end.y) / 2;
    bends.push({ x: start.x, y: midY });
    bends.push({ x: end.x, y: midY });
  } else if (
    (fromSide === "left" || fromSide === "right") &&
    (toSide === "left" || toSide === "right")
  ) {
    const midX = (start.x + end.x) / 2;
    bends.push({ x: midX, y: start.y });
    bends.push({ x: midX, y: end.y });
  }

  return bends;
}

/**
 * Builds an SVG path with rounded orthogonal corners
 */
function buildRoundedPath(points: Point[], radius: number) {
  if (points.length < 2) return "";

  let d = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const next = points[i + 1];

    if (!next) {
      d += ` L ${curr.x} ${curr.y}`;
      continue;
    }

    const dx1 = curr.x - prev.x;
    const dy1 = curr.y - prev.y;
    const dx2 = next.x - curr.x;
    const dy2 = next.y - curr.y;

    const len1 = Math.hypot(dx1, dy1);
    const len2 = Math.hypot(dx2, dy2);

    if (len1 === 0 || len2 === 0) continue;

    const r = Math.min(radius, len1 / 2, len2 / 2);

    const ux1 = dx1 / len1;
    const uy1 = dy1 / len1;
    const ux2 = dx2 / len2;
    const uy2 = dy2 / len2;

    const p1 = {
      x: curr.x - ux1 * r,
      y: curr.y - uy1 * r,
    };

    const p2 = {
      x: curr.x + ux2 * r,
      y: curr.y + uy2 * r,
    };

    d += ` L ${p1.x} ${p1.y}`;
    d += ` Q ${curr.x} ${curr.y} ${p2.x} ${p2.y}`;
  }

  return d;
}

export function FlowLine({
  id,
  containerRef,
  fromRef,
  fromLineId,
  fromLinePosition = 0.5,
  toRef,
  toLineId,
  toLinePosition = 0.5,
  fromSide = "bottom",
  toSide = "top",
  bends,
  dashed = false,
  strokeWidth = 2,
  cornerRadius = 16,
  animated = false,
  animationDuration = 4,
  animationDelay = 0,
  reverse = false,
  gradientStartColor = "var(--primary)",
  gradientStopColor = "var(--primary)",
  pathColor = "rgba(33, 34, 36, 0.2)",
  pathOpacity = 1,
  showDots = false,
}: FlowLineProps) {
  const [path, setPath] = useState("");
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [currentPoints, setCurrentPoints] = useState<Point[]>([]);
  const [pathLength, setPathLength] = useState(0);
  const [dotPositions, setDotPositions] = useState<Point[]>([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const linePaths = useContext(LinePathContext);
  const gradientId = useId();
  const pathElementRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;

      const c = containerRef.current.getBoundingClientRect();
      setSize({ w: c.width, h: c.height });

      let start: Point;
      let end: Point;

      // Get start point
      if (fromRef?.current) {
        start = anchor(fromRef.current, containerRef.current, fromSide);
      } else if (fromLineId && linePaths.has(fromLineId)) {
        const linePoints = linePaths.get(fromLineId)!;
        start = getPointOnLine(linePoints, fromLinePosition);
      } else {
        return; // Can't draw without a valid start
      }

      // Get end point
      if (toRef?.current) {
        end = anchor(toRef.current, containerRef.current, toSide);
      } else if (toLineId && linePaths.has(toLineId)) {
        const linePoints = linePaths.get(toLineId)!;
        end = getPointOnLine(linePoints, toLinePosition);
      } else {
        return; // Can't draw without a valid end
      }

      let points: Point[];

      if (bends && bends.length > 0) {
        points = [start, ...bends, end];
      } else {
        const autoBends = autoCalculateBends(start, end, fromSide, toSide);
        points = [start, ...autoBends, end];
      }

      setCurrentPoints(points);
      const newPath = buildRoundedPath(points, cornerRadius);
      setPath(newPath);

      // Calculate path length for animations
      if (animated) {
        const tempSvg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg",
        );
        const tempPath = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path",
        );
        tempPath.setAttribute("d", newPath);
        tempSvg.appendChild(tempPath);
        document.body.appendChild(tempSvg);
        setPathLength(tempPath.getTotalLength());
        document.body.removeChild(tempSvg);
      }

      // Store this line's points if it has an ID
      if (id) {
        linePaths.set(id, points);
      }
    };

    update();

    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    if (fromRef?.current) ro.observe(fromRef.current);
    if (toRef?.current) ro.observe(toRef.current);

    // Re-render when referenced lines change
    const interval = setInterval(update, 100);

    return () => {
      ro.disconnect();
      clearInterval(interval);
      if (id) linePaths.delete(id);
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    fromLineId,
    toLineId,
    fromLinePosition,
    toLinePosition,
    fromSide,
    toSide,
    bends,
    cornerRadius,
    id,
    linePaths,
    animated,
  ]);

  // Animate dots along the path
  useEffect(() => {
    if (!animated || !showDots || pathLength === 0 || !pathElementRef.current) {
      return;
    }

    const pathEl = pathElementRef.current;
    let animationFrameId: number;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const newPositions: Point[] = [];

      [0, 0.33, 0.66].forEach((offsetFactor) => {
        const adjustedTime =
          elapsed + offsetFactor * animationDuration - animationDelay;
        const cycles = adjustedTime / animationDuration;
        const progress = cycles - Math.floor(cycles);
        const actualProgress = reverse ? 1 - progress : progress;
        const distance = actualProgress * pathLength;

        try {
          const point = pathEl.getPointAtLength(distance);
          newPositions.push(point);
        } catch (e) {
          newPositions.push({ x: 0, y: 0 });
        }
      });

      setDotPositions(newPositions);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [
    animated,
    showDots,
    pathLength,
    animationDuration,
    animationDelay,
    reverse,
  ]);

  // Animation variants for the gradient
  const gradientAnimation = reverse
    ? {
        x1: ["100%", "0%"],
        x2: ["110%", "10%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }
    : {
        x1: ["0%", "100%"],
        x2: ["-10%", "90%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      };

  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <Not necessary>
    <svg
      className="absolute inset-0 pointer-events-none"
      width={size.w}
      height={size.h}
      style={{ overflow: "visible" }}
    >
      {/* Base path (static or dashed) */}
      <path
        d={path}
        fill="none"
        stroke={animated ? pathColor : "rgba(33, 34, 36, 1)"}
        strokeWidth={strokeWidth}
        strokeDasharray={dashed ? "6 6" : undefined}
        strokeOpacity={animated ? pathOpacity : 1}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "d 150ms ease-out" }}
      />

      {/* Animated gradient path */}
      {animated && (
        <>
          <path
            d={path}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <motion.linearGradient
              id={gradientId}
              gradientUnits="userSpaceOnUse"
              initial={{
                x1: "0%",
                x2: "0%",
                y1: "0%",
                y2: "0%",
              }}
              animate={{
                x1: gradientAnimation.x1,
                x2: gradientAnimation.x2,
                y1: gradientAnimation.y1,
                y2: gradientAnimation.y2,
              }}
              transition={{
                delay: animationDelay,
                duration: animationDuration,
                ease: [0.16, 1, 0.3, 1],
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 0,
              }}
            >
              <stop stopColor={gradientStartColor} stopOpacity="0" />
              <stop stopColor={gradientStartColor} />
              <stop offset="32.5%" stopColor={gradientStopColor} />
              <stop
                offset="100%"
                stopColor={gradientStopColor}
                stopOpacity="0"
              />
            </motion.linearGradient>
          </defs>
        </>
      )}

      {/* Hidden path element for getPointAtLength calculations */}
      <path ref={pathElementRef} d={path} fill="none" stroke="none" />

      {/* Animated dots traveling along the path */}
      {animated && showDots && pathLength > 0 && (
        <>
          {dotPositions.map((pos, idx) => (
            <circle
              key={idx}
              cx={pos.x}
              cy={pos.y}
              r={strokeWidth * 1.5}
              fill={gradientStartColor}
            />
          ))}
        </>
      )}

      {/* Debug: Show reference points if this line has an ID */}
      {id && currentPoints.length > 0 && false && (
        <>
          {[0.25, 0.5, 0.75].map((pos) => {
            const point = getPointOnLine(currentPoints, pos);
            return (
              <circle
                key={pos}
                cx={point.x}
                cy={point.y}
                r={3}
                fill="rgba(33, 34, 36, 1)"
                opacity={0.3}
              />
            );
          })}
        </>
      )}
    </svg>
  );
}
