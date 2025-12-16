"use client";
import Link from "next/link";
import { ShimmerButton } from "./ui/shimer-button";
import { motion } from "motion/react";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import DashedBorder from "./shared/dashed-border";
interface HeroProps {
  title?: string | React.ReactNode;
  tittleClassName?: string;
  description?: string | React.ReactNode;
  descriptionClassName?: string;
  className?: string;
  buttons?: Array<{
    label: string;
    href: string;
    className?: string;
    variant?:
      | "default"
      | "outline"
      | "ghost"
      | "link"
      | "destructive"
      | "secondary";
  }>;
}

export default function Hero({
  title,
  tittleClassName,
  description,
  descriptionClassName,
  className,
  buttons,
}: HeroProps) {
  return (
    <DashedBorder id="home" sides="x" className={className}>
      <div className="absolute inset-0 -z-10 h-[600px] md:h-[800px] w-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--primary)_100%)] "></div>
      <div className="flex flex-col h-[600px] max-md:h-[500px] pt-20 justify-center items-center gap-3 ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={tittleClassName}
        >
          {title}
        </motion.h1>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          className={descriptionClassName}
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          className="flex items-center justify-center gap-3"
        >
          {buttons?.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              className={cn(
                buttonVariants({ variant: button.variant || "default" }),
                "cursor-pointer",
                button.className,
              )}
            >
              {button.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </DashedBorder>
  );
}
