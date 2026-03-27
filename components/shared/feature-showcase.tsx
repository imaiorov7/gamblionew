import Image from "next/image";
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

interface ChatBubbleProps {
  children: React.ReactNode;
  side: "left" | "right";
}

function ChatBubble({ children, side }: ChatBubbleProps) {
  const isLeft = side === "left";

  return (
    <div
      className={cn(
        "relative max-w-[85%] md:max-w-[280px] p-4 md:p-5 border border-border/50 rounded-[1.25rem] bg-muted/10 shadow-sm hover:shadow-md transition-shadow",
        "after:content-[''] after:absolute after:bottom-4 after:border-[8px] after:border-transparent",
        isLeft
          ? "after:left-[-16px] after:border-r-border/50"
          : "after:right-[-16px] after:border-l-border/50",
      )}
    >
      <div
        className={cn(
          "absolute bottom-4 w-0 h-0 border-[7px] border-transparent",
          isLeft
            ? "left-[-14px] border-r-muted/10"
            : "right-[-14px] border-l-muted/10",
        )}
      />
      <h3 className="text-xs md:text-sm font-medium text-center text-foreground">{children}</h3>
    </div>
  );
}

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
    <div className="flex flex-col items-center gap-6 md:gap-8 py-8 md:py-8 w-full overflow-hidden">
      
      <div className="flex flex-col items-center gap-3 md:gap-4 text-center max-w-3xl px-4">
        {title && (
          <Title className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            {title}
          </Title>
        )}

        {description && (
          <Description className="text-base md:text-lg text-muted-foreground">
            {description}
          </Description>
        )}
      </div>

      <div
        className={cn(
          "relative w-full max-w-5xl gap-4 md:gap-6 px-4 mt-6 md:mt-8",
          "flex flex-col items-center", // Mobile stack
          "md:grid md:grid-cols-3 md:items-center", // Desktop grid
          "md:[grid-template-areas:'chat1_image_chat2'_'chat3_image_chat4'_'chat5_image_chat6']",
        )}
      >
        <div className="flex md:flex items-center justify-center mb-6 md:mb-0 md:[grid-area:image] relative">
          <div className="absolute inset-0 bg-primary/10 blur-[50px] rounded-full pointer-events-none" />
          <Image
            src="/images/logotip-gr.png"
            alt="Core Value"
            width={180}
            height={180}
            className="object-contain relative z-10 drop-shadow-2xl scale-90 md:scale-100"
          />
        </div>

        {/* Note the explicit w-full and justify-end / justify-start applied here for the chat app effect */}
        {chat1 && (
          <div className="flex justify-end w-full md:[grid-area:chat1]">
            <ChatBubble side="right">{chat1}</ChatBubble>
          </div>
        )}

        {chat2 && (
          <div className="flex justify-start w-full md:[grid-area:chat2]">
            <ChatBubble side="left">{chat2}</ChatBubble>
          </div>
        )}

        {chat3 && (
          <div className="flex justify-end w-full md:[grid-area:chat3]">
            <ChatBubble side="right">{chat3}</ChatBubble>
          </div>
        )}

        {chat4 && (
          <div className="flex justify-start w-full md:[grid-area:chat4]">
            <ChatBubble side="left">{chat4}</ChatBubble>
          </div>
        )}

        {chat5 && (
          <div className="flex justify-end w-full md:[grid-area:chat5]">
            <ChatBubble side="right">{chat5}</ChatBubble>
          </div>
        )}

        {chat6 && (
          <div className="flex justify-start w-full md:[grid-area:chat6]">
            <ChatBubble side="left">{chat6}</ChatBubble>
          </div>
        )}
      </div>
    </div>
  );
}