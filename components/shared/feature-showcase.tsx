import Image from "next/image";
import DashedBorder from "@/components/shared/dashed-border";
import { Description, Title } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface FeatureShowcaseProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  chat1?: string | React.ReactNode;
  chat2?: string | React.ReactNode;
  chat3?: string | React.ReactNode;
  chat4?: string | React.ReactNode;
  chat5?: string | React.ReactNode;
  chat6?: string | React.ReactNode;
}

/* ---------------------------------------------
 * ChatBubble
 * -------------------------------------------- */

interface ChatBubbleProps {
  children: React.ReactNode;
  side: "left" | "right";
}

function ChatBubble({ children, side }: ChatBubbleProps) {
  const isLeft = side === "left";

  return (
    <div
      className={cn(
        "relative max-w-xs p-4 border-2 rounded-lg bg-custom-dark border-border",
        "after:content-[''] after:absolute after:bottom-2 after:border-8 after:border-transparent",
        isLeft
          ? "after:left-[-16px] after:border-r-border"
          : "after:right-[-16px] after:border-l-border",
      )}
    >
      <div
        className={cn(
          "absolute bottom-2 w-0 h-0 border-8 border-transparent",
          isLeft
            ? "left-[-14px] border-r-custom-dark"
            : "right-[-14px] border-l-custom-dark",
        )}
      />
      <h3 className="text-sm font-semibold text-center">{children}</h3>
    </div>
  );
}

/* ---------------------------------------------
 * FeatureShowcase
 * -------------------------------------------- */

export default function FeatureShowcase({
  title,
  description,
  chat1,
  chat2,
  chat3,
  chat4,
  chat5,
  chat6,
}: FeatureShowcaseProps) {
  return (
    <DashedBorder sides="all" className=" gap-4 py-20 ">
      {title && (
        <Title className="text-3xl font-medium text-center">{title}</Title>
      )}

      {description && (
        <Description className="max-w-3xl text-center md:w-2/3">
          {description}
        </Description>
      )}

      {/* Grid Layout */}
      <div
        className={cn(
          "relative w-full max-w-7xl gap-8 px-4 mt-8",
          "flex flex-col items-center",
          "md:grid md:grid-cols-3",
          "md:[grid-template-areas:'chat1_image_chat2'_'chat3_image_chat4'_'chat5_image_chat6']",
        )}
      >
        {/* Image - Mobile: shown at top, Desktop: in grid */}
        <div className="hidden md:flex items-center justify-center mb-8 md:mb-0 md:[grid-area:image]">
          <Image
            src="/images/logotip-gr.png"
            alt="Core Value"
            width={256}
            height={256}
            className="object-contain"
          />
        </div>

        {chat1 && (
          <div className="flex justify-center w-full md:[grid-area:chat1]">
            <ChatBubble side="right">{chat1}</ChatBubble>
          </div>
        )}

        {chat2 && (
          <div className="flex justify-center w-full md:[grid-area:chat2]">
            <ChatBubble side="left">{chat2}</ChatBubble>
          </div>
        )}

        {chat3 && (
          <div className="flex justify-center w-full md:[grid-area:chat3]">
            <ChatBubble side="right">{chat3}</ChatBubble>
          </div>
        )}

        {chat4 && (
          <div className="flex justify-center w-full md:[grid-area:chat4]">
            <ChatBubble side="left">{chat4}</ChatBubble>
          </div>
        )}

        {chat5 && (
          <div className="flex justify-center w-full md:[grid-area:chat5]">
            <ChatBubble side="right">{chat5}</ChatBubble>
          </div>
        )}

        {chat6 && (
          <div className="flex justify-center w-full md:[grid-area:chat6]">
            <ChatBubble side="left">{chat6}</ChatBubble>
          </div>
        )}
      </div>
    </DashedBorder>
  );
}
