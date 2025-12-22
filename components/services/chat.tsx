"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const TypingIndicator = () => {
  const dot1Ref = useRef<HTMLDivElement>(null);
  const dot2Ref = useRef<HTMLDivElement>(null);
  const dot3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!dot1Ref.current || !dot2Ref.current || !dot3Ref.current) return;

    const timeline = gsap.timeline({ repeat: -1 });

    timeline
      .to(dot1Ref.current, {
        opacity: 1,
        scale: 1.2,
        duration: 0.4,
        ease: "power2.out",
      })
      .to(
        dot2Ref.current,
        {
          opacity: 1,
          scale: 1.2,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2",
      )
      .to(
        dot3Ref.current,
        {
          opacity: 1,
          scale: 1.2,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2",
      )
      .to(
        [dot1Ref.current, dot2Ref.current, dot3Ref.current],
        {
          opacity: 0.3,
          scale: 1,
          duration: 0.4,
          ease: "power2.in",
        },
        "-=0.2",
      );
  }, []);

  return (
    <div className="flex items-center gap-1 px-4 py-3">
      <div
        ref={dot1Ref}
        className="w-2 h-2 rounded-full bg-muted-foreground opacity-30"
      />
      <div
        ref={dot2Ref}
        className="w-2 h-2 rounded-full bg-muted-foreground opacity-30"
      />
      <div
        ref={dot3Ref}
        className="w-2 h-2 rounded-full bg-muted-foreground opacity-30"
      />
    </div>
  );
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const userTextRef = useRef<HTMLParagraphElement>(null);
  const hasStartedRef = useRef(false);

  const userMessage = "Hello how do I register on your platform?";
  const botResponse =
    "Hello! Thank you for contacting our customer support. To register, click on REGISTRATION in the upper right corner of the home page, enter the requested information, and accept the Terms of Use. Then activate your account by clicking on the link you will receive in your email. If you need further assistance, please let me know!";

  useGSAP(() => {
    if (hasStartedRef.current || !userTextRef.current) return;
    hasStartedRef.current = true;

    // Main timeline for the entire animation sequence
    const timeline = gsap.timeline({ repeat: -1 });

    // Step 1: Typewriter effect for user message
    timeline.to(
      { progress: 0 },
      {
        progress: userMessage.length,
        duration: userMessage.length * 0.05, // ~50ms per character
        ease: "none",
        onUpdate: function () {
          if (userTextRef.current) {
            const currentLength = Math.floor(this.targets()[0].progress);
            userTextRef.current.textContent =
              userMessage.slice(0, currentLength) + "|";
          }
        },
        onComplete: () => {
          // Remove cursor and add completed message
          if (userTextRef.current) {
            userTextRef.current.textContent = userMessage;
          }

          const userMsg: Message = {
            id: Date.now().toString(),
            text: userMessage,
            sender: "user",
            timestamp: new Date(),
          };
          setMessages([userMsg]);
        },
      },
    );

    // Step 2: Show typing indicator (after user message completes)
    timeline.call(() => {
      setIsTyping(true);
    });

    // Step 3: Wait for bot typing duration (1.5-2.5 seconds)
    timeline.to(
      {},
      {
        duration: 1.5 + Math.random() * 1,
        onComplete: () => {
          setIsTyping(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: botResponse,
            sender: "bot",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
        },
      },
    );

    // Step 4: Wait before resetting (so user can see the bot response)
    timeline.to({}, { duration: 2 });

    // Step 5: Reset state for next cycle (happens after delay)
    timeline.call(() => {
      setMessages([]);
      setIsTyping(false);
      if (userTextRef.current) {
        userTextRef.current.textContent = "";
      }
    });
  }, []);

  return (
    <div className="flex flex-col items-center gap-5 p-4 h-fit w-full">
      {/* Messages */}
      <div className="flex flex-col gap-5 w-full max-w-md">
        {/* User typing message - always render for timeline to work */}
        <div
          className={`flex items-end justify-end gap-3 ${
            messages.length > 0 ? "hidden" : ""
          }`}
        >
        <div className="p-4 text-white shadow bg-primary rounded-2xl">
            <p ref={userTextRef} className="text-sm"></p>
        </div>
          <div className="flex items-center justify-center rounded-full size-10 bg-primary aspect-square flex-shrink-0">
          <p>U</p>
        </div>
      </div>

        {/* Completed messages */}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-end gap-3 ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.sender === "bot" && (
              <Image
          src="/images/logotip-dark.svg"
          alt="Bot Avatar"
                width={40}
                height={40}
                className="p-1 border rounded-full size-10 flex-shrink-0"
        />
            )}
            <div
              className={`p-4 shadow rounded-2xl ${
                message.sender === "user"
                  ? "text-white bg-primary"
                  : "border bg-accent"
              }`}
            >
              <p
                className={`text-sm ${
                  message.sender === "bot"
                    ? "text-muted-foreground max-md:line-clamp-5"
                    : ""
                }`}
              >
                {message.text}
          </p>
        </div>
            {message.sender === "user" && (
              <div className="flex items-center justify-center rounded-full size-10 bg-primary aspect-square flex-shrink-0">
                <p>U</p>
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex items-start gap-2">
            <Image
              src="/images/logotip-dark.svg"
              alt="Bot Avatar"
              width={40}
              height={40}
              className="p-1 border rounded-full size-10 flex-shrink-0"
            />
            <div className="p-2 border shadow bg-accent rounded-xl">
              <TypingIndicator />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
