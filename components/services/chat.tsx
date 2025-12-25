"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const TypingIndicator = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const dotVariants = {
    initial: { opacity: 0.3, scale: 1 },
    animate: { opacity: 1, scale: 1.2 },
  };

  return (
    <div className="flex items-center gap-1 px-4 py-3">
      <motion.div
        className="w-2 h-2 rounded-full bg-muted-foreground"
        variants={dotVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0,
          repeatDelay: 0.8,
        }}
      />
      <motion.div
        className="w-2 h-2 rounded-full bg-muted-foreground"
        variants={dotVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.2,
          repeatDelay: 0.8,
        }}
      />
      <motion.div
        className="w-2 h-2 rounded-full bg-muted-foreground"
        variants={dotVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.4,
          repeatDelay: 0.8,
        }}
      />
    </div>
  );
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const userTextRef = useRef<HTMLParagraphElement>(null);

  const userMessage = "Hello how do I register on your platform?";
  const botResponse =
    "Hello! Thank you for contacting our customer support. To register, click on REGISTRATION in the upper right corner of the home page, enter the requested information, and accept the Terms of Use. Then activate your account by clicking on the link you will receive in your email. If you need further assistance, please let me know!";

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const runAnimation = async () => {
      // Step 1: Typewriter effect for user message
      for (let i = 0; i <= userMessage.length; i++) {
        setDisplayedText(userMessage.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 50)); // ~50ms per character
      }

      // Step 2: Add user message to messages and show typing indicator
      const userMsg: Message = {
        id: Date.now().toString(),
        text: userMessage,
        sender: "user",
        timestamp: new Date(),
      };
      setMessages([userMsg]);
      setDisplayedText("");
      setIsTyping(true);

      // Step 3: Wait for bot typing duration
      await new Promise((resolve) =>
        setTimeout(resolve, 1500 + Math.random() * 1000),
      );

      // Step 4: Add bot message and hide typing indicator
      setIsTyping(false);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);

      // Step 5: Wait before resetting
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Step 6: Reset and repeat
      setMessages([]);
      setIsTyping(false);
      setDisplayedText("");

      // Restart animation after a short delay
      timeoutId = setTimeout(runAnimation, 1000);
    };

    runAnimation();

    return () => clearTimeout(timeoutId);
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
            <p ref={userTextRef} className="text-sm">
              {displayedText}
              {displayedText.length < userMessage.length && "|"}
            </p>
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
