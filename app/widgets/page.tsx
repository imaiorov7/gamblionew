"use client";

import {
  ChevronLeft,
  ChevronRight,
  Flame,
  GalleryHorizontal,
  Layers,
  Monitor,
  Play,
  Shuffle,
  Snowflake,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

// ─── Types ───────────────────────────────────────────────────────────────────

type BackgroundType = "image" | "gradient" | "color" | "video";
type DisplayMode = "carousel" | "stack";
type HotColdMode = "hot" | "cold";

// ─── Static data ─────────────────────────────────────────────────────────────

const backgroundOptions: BackgroundType[] = [
  "image",
  "gradient",
  "color",
  "video",
];

// Demo slot image base URL (image1.png – image10.png)
const DEMO_IMG = "https://nbg1.your-objectstorage.com/gamblio-widget/demo/";

// Game items shown inside the Recommendation widget carousel (10 cards)
const recommendationItems = [
  {
    id: "rec-1",
    title: "Neon Fortune",
    provider: "Pragmatic Play",
    tag: "HOT",
    image: `${DEMO_IMG}image1.png`,
  },
  {
    id: "rec-2",
    title: "Golden Spin",
    provider: "NetEnt",
    tag: "NEW",
    image: `${DEMO_IMG}image2.png`,
  },
  {
    id: "rec-3",
    title: "Lucky Atlas",
    provider: "Play'n GO",
    tag: "BUY BONUS",
    image: `${DEMO_IMG}image3.png`,
  },
  {
    id: "rec-4",
    title: "Crimson Wilds",
    provider: "Nolimit City",
    tag: "TRENDING",
    image: `${DEMO_IMG}image4.png`,
  },
  {
    id: "rec-5",
    title: "Royal Drift",
    provider: "Hacksaw",
    tag: "NEW",
    image: `${DEMO_IMG}image5.png`,
  },
  {
    id: "rec-6",
    title: "Mystic Reels",
    provider: "Pragmatic Play",
    tag: "HOT",
    image: `${DEMO_IMG}image6.png`,
  },
  {
    id: "rec-7",
    title: "Turbo Treasures",
    provider: "NetEnt",
    tag: "BUY BONUS",
    image: `${DEMO_IMG}image7.png`,
  },
  {
    id: "rec-8",
    title: "Night Jackpot",
    provider: "Play'n GO",
    tag: "TRENDING",
    image: `${DEMO_IMG}image8.png`,
  },
  {
    id: "rec-9",
    title: "Solar Seven",
    provider: "Nolimit City",
    tag: "NEW",
    image: `${DEMO_IMG}image9.png`,
  },
  {
    id: "rec-10",
    title: "Dragon Vault",
    provider: "Hacksaw",
    tag: "HOT",
    image: `${DEMO_IMG}image10.png`,
  },
];

// Game items shown inside the Hot & Cold widget carousel (up to 13 per mode)
// 24H → 8 cards, 7D → 11 cards, 30D → 13 cards
const hotColdItems = {
  hot: [
    {
      id: "hot-1",
      title: "Neon Fortune",
      delta: "+24%",
      rtp: "108.41%",
      vendor: "Pragmatic Play",
      image: `${DEMO_IMG}image1.png`,
    },
    {
      id: "hot-2",
      title: "Golden Spin",
      delta: "+19%",
      rtp: "105.72%",
      vendor: "NetEnt",
      image: `${DEMO_IMG}image2.png`,
    },
    {
      id: "hot-3",
      title: "Lucky Atlas",
      delta: "+16%",
      rtp: "103.18%",
      vendor: "Play'n GO",
      image: `${DEMO_IMG}image3.png`,
    },
    {
      id: "hot-4",
      title: "Crimson Wilds",
      delta: "+14%",
      rtp: "101.54%",
      vendor: "Nolimit City",
      image: `${DEMO_IMG}image4.png`,
    },
    {
      id: "hot-5",
      title: "Royal Drift",
      delta: "+11%",
      rtp: "100.29%",
      vendor: "Hacksaw",
      image: `${DEMO_IMG}image5.png`,
    },
    {
      id: "hot-6",
      title: "Mystic Reels",
      delta: "+9%",
      rtp: "98.86%",
      vendor: "Pragmatic Play",
      image: `${DEMO_IMG}image6.png`,
    },
    {
      id: "hot-7",
      title: "Turbo Treasures",
      delta: "+7%",
      rtp: "97.43%",
      vendor: "NetEnt",
      image: `${DEMO_IMG}image7.png`,
    },
    {
      id: "hot-8",
      title: "Night Jackpot",
      delta: "+5%",
      rtp: "96.11%",
      vendor: "Play'n GO",
      image: `${DEMO_IMG}image8.png`,
    },
    {
      id: "hot-9",
      title: "Solar Seven",
      delta: "+4%",
      rtp: "95.48%",
      vendor: "Nolimit City",
      image: `${DEMO_IMG}image9.png`,
    },
    {
      id: "hot-10",
      title: "Dragon Vault",
      delta: "+3%",
      rtp: "94.82%",
      vendor: "Hacksaw",
      image: `${DEMO_IMG}image10.png`,
    },
    {
      id: "hot-11",
      title: "Emerald Storm",
      delta: "+2%",
      rtp: "94.15%",
      vendor: "Pragmatic Play",
      image: `${DEMO_IMG}image11.png`,
    },
    {
      id: "hot-12",
      title: "Vegas Mirage",
      delta: "+1.5%",
      rtp: "93.67%",
      vendor: "NetEnt",
      image: `${DEMO_IMG}image12.png`,
    },
    {
      id: "hot-13",
      title: "Neon Fortune II",
      delta: "+1%",
      rtp: "93.21%",
      vendor: "Play'n GO",
      image: `${DEMO_IMG}image13.png`,
    },
  ],
  cold: [
    {
      id: "cold-1",
      title: "Crimson Wilds",
      delta: "-6%",
      rtp: "88.92%",
      vendor: "Nolimit City",
      image: `${DEMO_IMG}image4.png`,
    },
    {
      id: "cold-2",
      title: "Royal Drift",
      delta: "-9%",
      rtp: "86.41%",
      vendor: "Hacksaw",
      image: `${DEMO_IMG}image5.png`,
    },
    {
      id: "cold-3",
      title: "Mystic Reels",
      delta: "-11%",
      rtp: "84.73%",
      vendor: "Pragmatic Play",
      image: `${DEMO_IMG}image6.png`,
    },
    {
      id: "cold-4",
      title: "Turbo Treasures",
      delta: "-14%",
      rtp: "82.15%",
      vendor: "NetEnt",
      image: `${DEMO_IMG}image7.png`,
    },
    {
      id: "cold-5",
      title: "Night Jackpot",
      delta: "-16%",
      rtp: "80.58%",
      vendor: "Play'n GO",
      image: `${DEMO_IMG}image8.png`,
    },
    {
      id: "cold-6",
      title: "Solar Seven",
      delta: "-19%",
      rtp: "78.24%",
      vendor: "Nolimit City",
      image: `${DEMO_IMG}image9.png`,
    },
    {
      id: "cold-7",
      title: "Dragon Vault",
      delta: "-22%",
      rtp: "75.91%",
      vendor: "Hacksaw",
      image: `${DEMO_IMG}image10.png`,
    },
    {
      id: "cold-8",
      title: "Emerald Storm",
      delta: "-25%",
      rtp: "73.47%",
      vendor: "Pragmatic Play",
      image: `${DEMO_IMG}image11.png`,
    },
    {
      id: "cold-9",
      title: "Vegas Mirage",
      delta: "-27%",
      rtp: "71.83%",
      vendor: "NetEnt",
      image: `${DEMO_IMG}image12.png`,
    },
    {
      id: "cold-10",
      title: "Neon Fortune II",
      delta: "-29%",
      rtp: "70.14%",
      vendor: "Play'n GO",
      image: `${DEMO_IMG}image13.png`,
    },
    {
      id: "cold-11",
      title: "Golden Spin",
      delta: "-31%",
      rtp: "68.52%",
      vendor: "Hacksaw",
      image: `${DEMO_IMG}image1.png`,
    },
    {
      id: "cold-12",
      title: "Lucky Atlas",
      delta: "-33%",
      rtp: "66.89%",
      vendor: "Nolimit City",
      image: `${DEMO_IMG}image2.png`,
    },
    {
      id: "cold-13",
      title: "Neon Fortune",
      delta: "-35%",
      rtp: "65.21%",
      vendor: "Pragmatic Play",
      image: `${DEMO_IMG}image3.png`,
    },
  ],
};

// How many cards to show per period
const periodCardCount = { daily: 8, weekly: 11, monthly: 13 } as const;

// Background assets for the Recommendation widget container
const backgroundAssets = {
  image: "/recommendation.webp",
  video: "/recommended.mp4",
  gradient:
    "linear-gradient(135deg, rgba(88,28,135,0.85) 0%, rgba(168,120,42,0.6) 50%, rgba(120,40,160,0.7) 100%)",
  color: "#1a0f2e",
};

// Background assets for the Hot & Cold widget container (separate per mode)
const hotColdBackgroundAssets = {
  hot: {
    image: "/hot.webp",
    video: "/hot.mp4",
  },
  cold: {
    image: "/cold.jpg",
    video: "/cold.mp4",
  },
};

// Returns inline CSS for each Recommendation background type
const getBackgroundStyle = (type: BackgroundType) => {
  if (type === "gradient")
    return { backgroundImage: backgroundAssets.gradient };
  if (type === "color") return { backgroundColor: backgroundAssets.color };
  if (type === "image")
    return { backgroundImage: `url(${backgroundAssets.image})` };
  return { backgroundColor: "transparent" };
};

// Tag badge colour mapping (top-right corner of recommendation cards)
const tagConfig: Record<
  string,
  { bg: string; text: string; border: string; glow: string }
> = {
  HOT: {
    bg: "linear-gradient(135deg, #dc2626 0%, #f97316 100%)",
    text: "#fff",
    border: "rgba(249, 115, 22, 0.5)",
    glow: "rgba(249, 115, 22, 0.3)",
  },
  NEW: {
    bg: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
    text: "#fff",
    border: "rgba(6, 182, 212, 0.5)",
    glow: "rgba(6, 182, 212, 0.3)",
  },
  "BUY BONUS": {
    bg: "linear-gradient(135deg, #7c3aed 0%, #c026d3 100%)",
    text: "#fff",
    border: "rgba(192, 38, 211, 0.5)",
    glow: "rgba(192, 38, 211, 0.3)",
  },
  TRENDING: {
    bg: "linear-gradient(135deg, #d97706 0%, #fbbf24 100%)",
    text: "#1a0a00",
    border: "rgba(251, 191, 36, 0.6)",
    glow: "rgba(251, 191, 36, 0.4)",
  },
};

// ─── Recommendation Card ─────────────────────────────────────────────────────
// A single game card inside the Recommendation carousel.
// Shows a cover image with tag badge, title, and hover actions (Play / Demo).

function RecommendationCard ({
  title,
  tag,
  image,
  index,
}: {
  title: string;
  tag: string;
  image: string;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const tagStyle = tagConfig[tag];

  return (
    <motion.article
      className="relative shrink-0 w-[260px] sm:w-[280px] md:w-[300px] group cursor-pointer select-none"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      aria-label={`${title} recommendation`}
    >
      {/* Card wrapper — lifts & scales on hover */}
      <motion.div
        className="relative rounded-2xl overflow-hidden"
        animate={{
          scale: isHovered ? 1.04 : 1,
          y: isHovered ? -8 : 0,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        style={{
          boxShadow: isHovered
            ? "0 8px 24px -4px rgba(218, 165, 32, 0.2), 0 0 0 1px rgba(218, 165, 32, 0.2)"
            : "0 4px 12px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(218, 165, 32, 0.08)",
        }}
      >
        {/* Gold border ring overlay */}
        <div
          className="absolute inset-0 rounded-2xl z-10 pointer-events-none transition-all duration-500"
          style={{
            border: isHovered
              ? "1.5px solid rgba(218, 165, 32, 0.5)"
              : "1px solid rgba(218, 165, 32, 0.12)",
          }}
        />

        {/* Shimmer sweep effect on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 z-30 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 40%, rgba(218, 165, 32, 0.08) 45%, rgba(218, 165, 32, 0.15) 50%, rgba(218, 165, 32, 0.08) 55%, transparent 60%)",
                }}
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2.5,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cover image + overlays */}
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={image}
            alt={`${title} cover art`}
            fill
            className="object-cover"
            loading="lazy"
          />

          {/* Bottom-to-top dark gradient for text readability */}
          <div className="absolute inset-0 bg-linear-to-t from-[hsl(240,15%,3%)] via-[hsl(240,15%,3%)]/30 to-transparent" />

          {/* Vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 50%, rgba(10, 5, 0, 0.5) 100%)",
            }}
          />

          {/* Gold top-edge accent line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background: isHovered
                ? "linear-gradient(90deg, transparent, rgb(218, 165, 32), transparent)"
                : "linear-gradient(90deg, transparent, rgba(218, 165, 32, 0.3), transparent)",
            }}
            animate={{ opacity: isHovered ? 1 : 0.5 }}
            transition={{ duration: 0.4 }}
          />

          {/* Tag badge (top-right) */}
          {tagStyle && (
            <div
              className="absolute top-3 right-3 z-20 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest"
              style={{
                background: tagStyle.bg,
                color: tagStyle.text,
                border: `1px solid ${tagStyle.border}`,
                boxShadow: `0 2px 12px ${tagStyle.glow}`,
              }}
            >
              {tag}
            </div>
          )}

          {/* Hover action buttons (Play / Demo) */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 z-20 flex items-center justify-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{
                  background:
                    "linear-gradient(to top, hsl(240, 15%, 3%) 0%, rgba(218, 165, 32, 0.05) 50%, transparent 100%)",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.06 }}
                >
                  <Button
                    size="sm"
                    className="rounded-full px-5 text-xs font-bold tracking-wide uppercase gap-1.5 border-0 cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(135deg, #d97706 0%, #fbbf24 50%, #d97706 100%)",
                      color: "#1a0a00",
                      boxShadow:
                        "0 4px 20px rgba(218, 165, 32, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    }}
                    aria-label={`Play ${title}`}
                  >
                    <Play className="h-3.5 w-3.5" />
                    Play
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.13 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full px-5 text-xs font-semibold tracking-wide uppercase gap-1.5 bg-transparent cursor-pointer"
                    style={{
                      borderColor: "rgba(218, 165, 32, 0.35)",
                      color: "rgb(218, 185, 100)",
                    }}
                    aria-label={`Try ${title} demo`}
                  >
                    <Monitor className="h-3.5 w-3.5" />
                    Demo
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Game title (bottom) */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
            <h3
              className="text-base font-bold tracking-tight leading-tight text-balance"
              style={{ color: "rgb(240, 230, 210)" }}
            >
              {title}
            </h3>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

// ─── Stack View ──────────────────────────────────────────────────────────────
// 3D coverflow card stack — shows prev / active / next with depth perspective.

function RecommendationStackView ({
  items,
}: {
  items: typeof recommendationItems;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const total = items.length;

  const prev = () => setActiveIndex((i) => (i - 1 + total) % total);
  const next = () => setActiveIndex((i) => (i + 1) % total);

  const shuffle = useCallback(() => {
    if (isShuffling || total < 3) return;
    setIsShuffling(true);

    let target: number;
    do {
      target = Math.floor(Math.random() * total);
    } while (target === activeIndex);

    // Animate through cards with easing
    const totalSteps = total * 2 + target;
    let step = 0;

    const tick = () => {
      step++;
      setActiveIndex((i) => (i + 1) % total);
      if (step >= totalSteps) {
        setActiveIndex(target);
        setIsShuffling(false);
        return;
      }
      // easeOutCubic timing — fast start, slow end
      const progress = step / totalSteps;
      const delay = 60 + 280 * (progress * progress);
      setTimeout(tick, delay);
    };
    setTimeout(tick, 80);
  }, [activeIndex, isShuffling, total]);

  const getCardStyle = (
    index: number,
  ): {
    zIndex: number;
    x: string;
    scale: number;
    opacity: number;
    rotateY: number;
  } => {
    const diff = (index - activeIndex + total) % total;

    if (diff === 0) {
      // Active card — front & center
      return { zIndex: 5, x: "0%", scale: 1.08, opacity: 1, rotateY: 0 };
    }
    if (diff === 1 || (diff === total - 1 && total > 2)) {
      // Next card — right
      const isNext = diff === 1;
      return {
        zIndex: 2,
        x: isNext ? "60%" : "-60%",
        scale: 0.85,
        opacity: 0.6,
        rotateY: isNext ? -8 : 8,
      };
    }
    // Hidden
    return { zIndex: 0, x: "0%", scale: 0.7, opacity: 0, rotateY: 0 };
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Shuffle + nav row */}
      <div className="flex items-center justify-between">
        <Button
          size="sm"
          variant="outline"
          className="gap-2 rounded-full border-[rgba(218,165,32,0.3)] bg-black/40 text-[#fff1c2] backdrop-blur-md hover:border-[#f6cf61] hover:bg-black/60 cursor-pointer"
          onClick={shuffle}
          disabled={isShuffling}
          aria-label="Shuffle to random game"
        >
          <Shuffle className="h-4 w-4" />
          Shuffle
        </Button>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-11 w-11 cursor-pointer rounded-full border border-[#f6cf61]/70 bg-black/55 text-[#fff1c2] shadow-[0_10px_30px_rgba(0,0,0,0.45),0_0_0_1px_rgba(246,207,97,0.16)] backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-[#f6cf61] hover:bg-black/72 hover:text-white disabled:opacity-35"
            onClick={prev}
            disabled={isShuffling}
            aria-label="Previous card"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.75} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-11 w-11 cursor-pointer rounded-full border border-[#f6cf61]/70 bg-black/55 text-[#fff1c2] shadow-[0_10px_30px_rgba(0,0,0,0.45),0_0_0_1px_rgba(246,207,97,0.16)] backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-[#f6cf61] hover:bg-black/72 hover:text-white disabled:opacity-35"
            onClick={next}
            disabled={isShuffling}
            aria-label="Next card"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.75} />
          </Button>
        </div>
      </div>

      {/* 3D card stack */}
      <div
        className="relative flex items-center justify-center"
        style={{ perspective: 1200, minHeight: 440 }}
      >
        <AnimatePresence initial={false}>
          {items.map((item, index) => {
            const card = getCardStyle(index);
            return (
              <motion.div
                key={item.id}
                className="absolute"
                animate={{
                  x: card.x,
                  scale: card.scale,
                  opacity: card.opacity,
                  rotateY: card.rotateY,
                  zIndex: card.zIndex,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 26,
                  opacity: { duration: 0.3 },
                }}
                style={{
                  transformStyle: "preserve-3d",
                  zIndex: card.zIndex,
                }}
              >
                <RecommendationCard
                  title={item.title}
                  tag={item.tag}
                  image={item.image}
                  index={0}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-1.5">
        {items.map((item, i) => (
          <button
            key={item.id}
            className="h-2 rounded-full transition-all duration-300 cursor-pointer"
            style={{
              width: i === activeIndex ? 24 : 8,
              backgroundColor:
                i === activeIndex
                  ? "rgba(218, 165, 32, 0.9)"
                  : "rgba(255, 255, 255, 0.25)",
            }}
            onClick={() => !isShuffling && setActiveIndex(i)}
            aria-label={`Go to ${item.title}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}

// ─── Hot/Cold split-colour title ─────────────────────────────────────────────
// Renders outline-only text split 50/50 between hot-orange and cold-blue.

function HotColdWidgetTitle ({ title }: { title: string }) {
  return (
    <h2 className="relative mt-6 mb-6 px-4 text-2xl font-extrabold uppercase md:text-6xl leading-none select-none">
      {/* Left half — orange stroke */}
      <span
        aria-hidden
        className="absolute inset-0 text-transparent"
        style={{
          WebkitTextStroke: "3px #ff9a4a",
          clipPath: "inset(0 50% 0 0)",
        }}
      >
        {title}
      </span>
      {/* Right half — blue stroke */}
      <span
        aria-hidden
        className="absolute inset-0 text-transparent"
        style={{
          WebkitTextStroke: "3px #5cb8ff",
          clipPath: "inset(0 0 0 50%)",
        }}
      >
        {title}
      </span>
      {/* Invisible spacer so the h2 has correct dimensions */}
      <span
        className="relative text-transparent"
        style={{ WebkitTextStroke: "3px transparent" }}
      >
        {title}
      </span>
    </h2>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function WidgetsPage () {
  const [recommendationBg, setRecommendationBg] =
    useState<BackgroundType>("image");
  const [displayMode, setDisplayMode] = useState<DisplayMode>("carousel");
  const [hotColdBg, setHotColdBg] = useState<BackgroundType>("image");
  const [hotColdMode, setHotColdMode] = useState<HotColdMode>("hot");
  const [hotColdPeriod, setHotColdPeriod] = useState<
    "daily" | "weekly" | "monthly"
  >("daily");
  const [copiedSection, setCopiedSection] = useState<"rec" | "hc" | null>(null);
  const recommendationScrollRef = useRef<HTMLDivElement>(null);
  const hotColdScrollRef = useRef<HTMLDivElement>(null);

  const scrollRecommendation = (direction: "left" | "right") => {
    if (!recommendationScrollRef.current) return;
    recommendationScrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  const scrollHotCold = (direction: "left" | "right") => {
    if (!hotColdScrollRef.current) return;
    hotColdScrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  const recommendationBgStyle = getBackgroundStyle(recommendationBg);

  // Full SDK-ready recommendationConfig for copy-paste
  const recommendationConfig = {
    backgroundType: recommendationBg,
    ...(recommendationBg === "gradient" && {
      gradientDirection: "135deg",
      gradientColors: ["rgba(88,28,135,0.85)", "rgba(168,120,42,0.6)"],
    }),
    ...(recommendationBg === "image" && {
      imageIndex: 1,
      imageExtension: "png",
    }),
    ...(recommendationBg === "video" && {
      videoIndex: 1,
    }),
    displayMode,
    withHeadline: true,
    shadowColor: "rgba(218, 165, 32, 0.2)",
    navButtonColor: "#f6cf61",
    navButtonHoverColor: "#ffffff",
    ...(displayMode === "stack" && {
      shuffleButtonBgColor: "rgba(0, 0, 0, 0.55)",
      shuffleButtonIconColor: "#f6cf61",
    }),
  };

  // Full SDK-ready gamesSwiperConfig for copy-paste
  const gamesSwiperConfig = {
    targetContainerId: "games-swiper-container",
    glow: true,
    backgroundType: hotColdBg,
    ...(hotColdBg === "gradient" && {
      hotGradientColors: ["rgba(160,20,5,0.8)", "rgba(220,80,10,0.6)"],
      hotGradientDirection: "135deg",
      coldGradientColors: ["rgba(10,40,120,0.8)", "rgba(30,150,200,0.55)"],
      coldGradientDirection: "135deg",
    }),
    ...(hotColdBg === "image" && {
      hotImageIndex: 1,
      coldImageIndex: 2,
      imageExtension: "jpg",
    }),
    ...(hotColdBg === "video" && {
      hotVideoIndex: 1,
      coldVideoIndex: 2,
    }),
  };

  const copyConfig = useCallback(async (value: unknown, section: "rec" | "hc") => {
    if (typeof window === "undefined" || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(value, null, 2));
      setCopiedSection(section);
      setTimeout(() => setCopiedSection((s) => (s === section ? null : s)), 1200);
    } catch {
      // silent
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-background">
      <div className="px-4 md:px-12 lg:px-16 flex w-full flex-col gap-12  pb-20 pt-24 sm:gap-16 sm:px-6">
        {/* ── Page header ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Widgets
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl">
            Modern widget showcase
          </h1>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            Fast, lightweight layouts with dummy data. Swap in real assets when
            ready.
          </p>
        </motion.div>

        {/* ── Section 1 — Recommendation widget ───────────────────────── */}
        <motion.section
          id="recommendation-widget"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          {/* Section header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Recommendation
              </p>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Top picks for you
              </h2>
              <p className="max-w-xl text-sm text-muted-foreground">
                Cinematic cards inspired by the widget refactor layout.
              </p>
            </div>
          </div>

          {/* Background type + display mode selectors */}
          <div className="flex flex-wrap items-center gap-2">
            {backgroundOptions.map((option) => (
              <Button
                key={option}
                size="sm"
                variant={recommendationBg === option ? "default" : "outline"}
                className="capitalize"
                onClick={() => setRecommendationBg(option)}
              >
                {option}
              </Button>
            ))}

            <div className="mx-1 h-6 w-px bg-border/60" />

            <Button
              size="sm"
              variant={displayMode === "carousel" ? "default" : "outline"}
              className="gap-1.5"
              onClick={() => setDisplayMode("carousel")}
            >
              <GalleryHorizontal className="h-3.5 w-3.5" />
              Carousel
            </Button>
            <Button
              size="sm"
              variant={displayMode === "stack" ? "default" : "outline"}
              className="gap-1.5"
              onClick={() => setDisplayMode("stack")}
            >
              <Layers className="h-3.5 w-3.5" />
              Stack
            </Button>
          </div>

          <details className="text-xs">
            <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
              View SDK configuration (copy-paste ready)
            </summary>
            <div className="mt-2 flex items-center justify-end gap-2">
              {copiedSection === "rec" && (
                <span className="text-[11px] text-emerald-500">Copied!</span>
              )}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  const initCode = `Gamblio.init({
  recommendationConfig: ${JSON.stringify(recommendationConfig, null, 4).replace(/\n/g, '\n  ')},
});`;
                  navigator.clipboard.writeText(initCode);
                  setCopiedSection("rec");
                  setTimeout(() => setCopiedSection((s) => (s === "rec" ? null : s)), 1200);
                }}
              >
                Copy code
              </Button>
            </div>
            <pre className="mt-2 max-h-96 overflow-auto rounded-lg bg-muted p-3 text-[11px]">
              {`Gamblio.init({
  recommendationWidgetTargetContainerId: "recommendation-container",
  recommendationConfig: ${JSON.stringify(recommendationConfig, null, 4).replace(/\n/g, '\n  ')},
});`}
            </pre>
          </details>

          {/* Recommendation widget container */}
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-muted/20 p-4 sm:p-6">
            {/* Background layer — crossfades between bg types */}
            <div className="pointer-events-none absolute inset-0">
              <AnimatePresence mode="sync">
                <motion.div
                  key={`rec-bg-${recommendationBg}`}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {recommendationBg === "video" ? (
                    <motion.div
                      className="h-full w-full"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.15 }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                      }}
                    >
                      <video
                        className="h-full w-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        poster={backgroundAssets.image}
                      >
                        <source src={backgroundAssets.video} type="video/mp4" />
                      </video>
                    </motion.div>
                  ) : (
                    <div
                      className="h-full w-full bg-cover bg-center"
                      style={recommendationBgStyle}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
              {/* Scrim overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/60" />
            </div>

            {/* Foreground content — switches between carousel and stack */}
            <div className="relative z-10 flex flex-col gap-4">
              <AnimatePresence mode="wait">
                {displayMode === "carousel" ? (
                  <motion.div
                    key="carousel"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col gap-4"
                  >
                    {/* Widget header row with scroll arrows */}
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                          Featured games
                        </p>
                        <p className="text-lg font-semibold text-white">
                          Today&apos;s momentum
                        </p>
                      </div>
                      <div className="hidden items-center gap-2 md:flex">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-11 w-11 cursor-pointer rounded-full border border-[#f6cf61]/70 bg-black/55 text-[#fff1c2] shadow-[0_10px_30px_rgba(0,0,0,0.45),0_0_0_1px_rgba(246,207,97,0.16)] backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-[#f6cf61] hover:bg-black/72 hover:text-white hover:shadow-[0_14px_36px_rgba(0,0,0,0.55),0_0_20px_rgba(246,207,97,0.24)] disabled:opacity-35"
                          onClick={() => scrollRecommendation("left")}
                          aria-label="Scroll left"
                        >
                          <ChevronLeft className="h-5 w-5" strokeWidth={2.75} />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-11 w-11 cursor-pointer rounded-full border border-[#f6cf61]/70 bg-black/55 text-[#fff1c2] shadow-[0_10px_30px_rgba(0,0,0,0.45),0_0_0_1px_rgba(246,207,97,0.16)] backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-[#f6cf61] hover:bg-black/72 hover:text-white hover:shadow-[0_14px_36px_rgba(0,0,0,0.55),0_0_20px_rgba(246,207,97,0.24)] disabled:opacity-35"
                          onClick={() => scrollRecommendation("right")}
                          aria-label="Scroll right"
                        >
                          <ChevronRight
                            className="h-5 w-5"
                            strokeWidth={2.75}
                          />
                        </Button>
                      </div>
                    </div>

                    {/* Horizontally-scrollable card track */}
                    <div
                      ref={recommendationScrollRef}
                      className="flex gap-5 overflow-x-auto scroll-smooth py-8 pl-4 pr-6 snap-x snap-mandatory sm:pl-10"
                      style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        WebkitOverflowScrolling: "touch",
                      }}
                      role="listbox"
                      aria-label="Game cards"
                    >
                      {recommendationItems.map((item, index) => (
                        <div
                          key={item.id}
                          className="snap-start"
                          role="option"
                          tabIndex={0}
                          data-game-id={item.id}
                        >
                          <RecommendationCard
                            title={item.title}
                            tag={item.tag}
                            image={item.image}
                            index={index}
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="stack"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <RecommendationStackView items={recommendationItems} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.section>

        {/* ── Section 2 — Hot & Cold widget ────────────────────────────── */}
        <motion.section
          id="hot-cold-widget"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          {/* Section header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Hot & Cold
              </p>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Live RTP heatmap
              </h2>
              <p className="max-w-xl text-sm text-muted-foreground">
                Bold toggle and period controls inspired by the refactor widget.
              </p>
            </div>
          </div>

          {/* Background type selector */}
          <div className="flex flex-wrap items-center gap-2">
            {backgroundOptions.map((option) => (
              <Button
                key={option}
                size="sm"
                variant={hotColdBg === option ? "default" : "outline"}
                className="capitalize"
                onClick={() => setHotColdBg(option)}
              >
                {option}
              </Button>
            ))}
          </div>

          <details className="text-xs">
            <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
              View SDK configuration (copy-paste ready)
            </summary>
            <div className="mt-2 flex items-center justify-end gap-2">
              {copiedSection === "hc" && (
                <span className="text-[11px] text-emerald-500">Copied!</span>
              )}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  const initCode = `Gamblio.init({
  gamesSwiperConfig: ${JSON.stringify(gamesSwiperConfig, null, 4).replace(/\n/g, '\n  ')},
});`;
                  navigator.clipboard.writeText(initCode);
                  setCopiedSection("hc");
                  setTimeout(() => setCopiedSection((s) => (s === "hc" ? null : s)), 1200);
                }}
              >
                Copy code
              </Button>
            </div>
            <pre className="mt-2 max-h-96 overflow-auto rounded-lg bg-muted p-3 text-[11px]">
              {`Gamblio.init({
  gamesSwiperConfig: ${JSON.stringify(gamesSwiperConfig, null, 4).replace(/\n/g, '\n  ')},
});`}
            </pre>
          </details>

          {/* Hot & Cold widget container */}
          <div className="relative min-h-[520px] overflow-hidden rounded-3xl border border-border/60 bg-muted/20 p-5 sm:p-7">
            {/* Background layer — crossfades between hot/cold + bg type */}
            <div className="pointer-events-none absolute inset-0">
              <AnimatePresence mode="sync">
                <motion.div
                  key={`hc-bg-${hotColdBg}-${hotColdMode}`}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {hotColdBg === "video" ? (
                    <motion.div
                      className="h-full w-full"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.15 }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                      }}
                    >
                      <video
                        className="h-full w-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        poster={hotColdBackgroundAssets[hotColdMode].image}
                      >
                        <source
                          src={hotColdBackgroundAssets[hotColdMode].video}
                          type="video/mp4"
                        />
                      </video>
                    </motion.div>
                  ) : hotColdBg === "image" ? (
                    <Image
                      src={hotColdBackgroundAssets[hotColdMode].image}
                      alt=""
                      fill
                      sizes="100vw"
                      priority
                      className="object-cover"
                    />
                  ) : (
                    <div
                      className="h-full w-full"
                      style={
                        hotColdBg === "gradient"
                          ? {
                            backgroundImage:
                              hotColdMode === "hot"
                                ? "linear-gradient(135deg, rgba(160,20,5,0.8) 0%, rgba(220,80,10,0.6) 40%, rgba(180,40,0,0.7) 100%)"
                                : "linear-gradient(135deg, rgba(10,40,120,0.8) 0%, rgba(30,150,200,0.55) 50%, rgba(15,60,160,0.7) 100%)",
                          }
                          : {
                            backgroundColor:
                              hotColdMode === "hot" ? "#1f0a0a" : "#0a0f1f",
                          }
                      }
                    />
                  )}
                </motion.div>
              </AnimatePresence>
              {/* Scrim overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-black/60" />
            </div>

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col gap-6">
              {/* Hot/Cold title + toggle switch */}
              <div className="flex w-full flex-col items-center">
                <HotColdWidgetTitle title="LIVE RTP HEATMAP" />

                {/* HOT / COLD toggle */}
                <div
                  className="relative flex items-center h-11.5 rounded-[23px] cursor-pointer overflow-hidden p-0 active:scale-[0.97] transition-transform"
                  onClick={() =>
                    setHotColdMode((prev) => (prev === "hot" ? "cold" : "hot"))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setHotColdMode((prev) => (prev === "hot" ? "cold" : "hot"));
                    }
                  }}
                  role="switch"
                  tabIndex={0}
                  aria-checked={hotColdMode === "hot"}
                  aria-label="Toggle hot or cold games"
                >
                  {/* HOT side */}
                  <div
                    className="relative z-1 flex h-full items-center gap-2 whitespace-nowrap pl-5 pr-9 font-medium text-white/90 pointer-events-none"
                    style={{
                      order: 1,
                      fontSize: "0.85em",
                      letterSpacing: "0.01em",
                      background: "hsla(25, 79%, 57%, 0.5)",
                      borderRadius: "23px 0 0 23px",
                      border: "2px solid #e8843c",
                      borderRight: "none",
                      opacity: hotColdMode === "hot" ? 1 : 0.6,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <Flame
                      className="h-4 w-4"
                      style={{
                        color: "#ff9a4a",
                        filter: "drop-shadow(0 0 3px rgba(255, 154, 74, 0.5))",
                      }}
                    />
                    <span
                      style={{
                        color: "#ff9a4a",
                        fontSize: "1.15em",
                        filter: "drop-shadow(0 0 3px rgba(255, 154, 74, 0.5))",
                      }}
                    >
                      HOT
                    </span>
                  </div>

                  {/* Physical toggle track + knob */}
                  <div
                    className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 shrink-0"
                    style={{
                      order: 2,
                      width: 60,
                      height: 36,
                      borderRadius: 18,
                      background:
                        "linear-gradient(180deg, #4a4d55 0%, #35383f 100%)",
                      boxShadow:
                        "0 2px 8px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(0, 0, 0, 0.3)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <div
                      className="absolute top-1/2 -translate-y-1/2 rounded-full"
                      style={{
                        width: 28,
                        height: 28,
                        background:
                          "linear-gradient(180deg, #ffffff 0%, #e0e0e0 100%)",
                        boxShadow:
                          "0 2px 6px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.8)",
                        left: hotColdMode === "hot" ? 4 : "calc(100% - 32px)",
                        transition: "left 0.25s ease",
                      }}
                    />
                  </div>

                  {/* COLD side */}
                  <div
                    className="relative z-1 flex h-full items-center gap-2 whitespace-nowrap pl-9 pr-5 font-medium text-white/90 pointer-events-none"
                    style={{
                      order: 3,
                      fontSize: "0.85em",
                      letterSpacing: "0.01em",
                      background: "hsla(216, 79%, 57%, 0.5)",
                      borderRadius: "0 23px 23px 0",
                      border: "2px solid #4a9eff",
                      borderLeft: "none",
                      opacity: hotColdMode === "hot" ? 0.6 : 1,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <Snowflake
                      className="h-4 w-4"
                      style={{
                        color: "#5cb8ff",
                        filter: "drop-shadow(0 0 3px rgba(92, 184, 255, 0.5))",
                      }}
                    />
                    <span
                      style={{
                        color: "#5cb8ff",
                        fontSize: "1.15em",
                        filter: "drop-shadow(0 0 3px rgba(92, 184, 255, 0.5))",
                      }}
                    >
                      COLD
                    </span>
                  </div>
                </div>
              </div>

              {/* Period selector + scroll arrows on one row */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-between">
                <div
                  className="flex overflow-hidden rounded-[15px]"
                  style={{
                    background: "rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {[
                    { value: "daily", label: "24H" },
                    { value: "weekly", label: "7D" },
                    { value: "monthly", label: "30D" },
                  ].map((period) => {
                    const isActive = hotColdPeriod === period.value;
                    return (
                      <Button
                        key={period.value}
                        variant="ghost"
                        onClick={() =>
                          setHotColdPeriod(period.value as typeof hotColdPeriod)
                        }
                        className="relative h-auto cursor-pointer rounded-none border-none px-5 py-2.5 font-semibold hover:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        style={{
                          color: isActive ? "#fff" : "#aaa",
                          transition: "all 0.3s ease",
                        }}
                        aria-pressed={isActive}
                        aria-label={`Period: ${period.label}`}
                      >
                        {/* Glossy pill highlight on active */}
                        {isActive && (
                          <div
                            className="pointer-events-none absolute inset-0"
                            style={{
                              borderRadius: 50,
                              backgroundColor: "rgba(255, 255, 255, 0.2)",
                              backgroundImage:
                                "radial-gradient(75% 50% at 50% 0%, rgba(255, 255, 255, 0.4), transparent), radial-gradient(75% 35% at 50% 80%, rgba(255, 255, 255, 0.2), transparent)",
                              border: "1px solid rgba(255, 255, 255, 0.3)",
                              boxShadow:
                                "inset 0 -2px 4px 1px rgba(0, 0, 0, 0.1), inset 0 -4px 4px 1px rgba(255, 255, 255, 0.1), inset 0 0 2px 1px rgba(255, 255, 255, 0.3), 0 1px 4px 1px rgba(0, 0, 0, 0.1), 0 1px 4px 1px rgba(0, 0, 0, 0.05)",
                            }}
                          />
                        )}
                        {isActive && (
                          <div
                            className="pointer-events-none absolute"
                            style={{
                              top: 1,
                              left: "50%",
                              transform: "translateX(-50%)",
                              borderRadius: 50,
                              width: "80%",
                              height: "40%",
                              backgroundImage:
                                "linear-gradient(to bottom, rgba(255, 255, 255, 0.4), transparent)",
                              opacity: 0.75,
                            }}
                          />
                        )}
                        <span className="relative z-10">{period.label}</span>
                      </Button>
                    );
                  })}
                </div>
                {/* Scroll arrows */}
                <div className="hidden items-center gap-2 md:flex">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-11 w-11 cursor-pointer rounded-full border border-white/70 bg-black/45 text-white shadow-[0_10px_30px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white hover:bg-black/65 hover:shadow-[0_14px_38px_rgba(0,0,0,0.55),0_0_18px_rgba(255,255,255,0.16)] disabled:opacity-35"
                    aria-label="Scroll left"
                    onClick={() => scrollHotCold("left")}
                  >
                    <ChevronLeft className="h-5 w-5" strokeWidth={2.75} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-11 w-11 cursor-pointer rounded-full border border-white/70 bg-black/45 text-white shadow-[0_10px_30px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white hover:bg-black/65 hover:shadow-[0_14px_38px_rgba(0,0,0,0.55),0_0_18px_rgba(255,255,255,0.16)] disabled:opacity-35"
                    aria-label="Scroll right"
                    onClick={() => scrollHotCold("right")}
                  >
                    <ChevronRight className="h-5 w-5" strokeWidth={2.75} />
                  </Button>
                </div>
              </div>

              {/* Card carousel */}
              <div className="relative flex flex-1 flex-col justify-center bg-transparent">
                {/* Horizontally-scrollable Hot/Cold game cards */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={hotColdMode}
                    ref={hotColdScrollRef}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="flex gap-5 overflow-x-auto scroll-smooth bg-transparent px-4 py-6 snap-x snap-mandatory"
                    style={{
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                      WebkitOverflowScrolling: "touch",
                    }}
                  >
                    {hotColdItems[hotColdMode]
                      .slice(0, periodCardCount[hotColdPeriod])
                      .map((item) => (
                        <div
                          key={item.id}
                          className="shrink-0 snap-start bg-transparent pl-4 md:pl-10"
                          role="option"
                          tabIndex={0}
                        >
                          {/* Hot/Cold game card */}
                          <article
                            className="relative w-[250px] shrink-0 cursor-pointer select-none transition-transform duration-200 hover:scale-[1.02] sm:w-[260px] md:w-[280px]"
                            aria-label={`${item.title} - RTP ${item.rtp}`}
                          >
                            <div
                              className={`rounded-2xl border ${hotColdMode === "hot"
                                ? "border-[#e8843c]"
                                : "border-[#4a9eff]"
                                }`}
                            >
                              <div className="relative overflow-hidden rounded-2xl bg-black/60 p-4">
                                {/* Game thumbnail */}
                                <div
                                  className="relative mb-3 w-full overflow-hidden rounded-xl"
                                  style={{ aspectRatio: "16/12" }}
                                >
                                  <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="100vw"
                                    priority
                                    className="object-cover"
                                  />
                                </div>

                                {/* Game info */}
                                <h3 className="mb-1 truncate text-sm font-bold uppercase tracking-tight text-white">
                                  {item.title}
                                </h3>
                                <div
                                  className={`mb-1 text-sm font-semibold ${hotColdMode === "hot"
                                    ? "text-emerald-400"
                                    : "text-rose-400"
                                    }`}
                                >
                                  {item.rtp} RTP{" "}
                                  {hotColdMode === "hot" ? "↑" : "↓"}
                                </div>
                                <p className="mb-3 truncate text-xs text-gray-400">
                                  {item.vendor}
                                </p>

                                {/* Play CTA */}
                                <Button
                                  size="sm"
                                  className="w-full cursor-pointer gap-1.5 rounded-lg border-0 text-xs font-bold uppercase"
                                  style={{
                                    background:
                                      "linear-gradient(to right, #28a745, #218838)",
                                    color: "#fff",
                                    boxShadow:
                                      "0 4px 12px rgba(40, 167, 69, 0.4)",
                                  }}
                                  aria-label={`Play ${item.title}`}
                                >
                                  <Play className="h-3.5 w-3.5" />
                                  Play now
                                </Button>
                              </div>
                            </div>
                          </article>
                        </div>
                      ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
