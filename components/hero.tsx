"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import LightRays from "./ui/light-rays";
import { ReactNode } from "react";

interface HeroProps {
  title?: string | ReactNode;
  tittleClassName?: string;
  description?: string | ReactNode;
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
  children?: ReactNode;
}

export default function Hero({
  title,
  tittleClassName,
  description,
  descriptionClassName,
  className,
  buttons,
  children,
}: HeroProps) {
  return (
    <div id="home" className={cn("relative w-full flex flex-col min-h-[100svh] pt-24 pb-12", className)}>
      
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#0392a0"
          raysSpeed={0.5}
          lightSpread={2.5}
          rayLength={4}
          pulsating={true}
          fadeDistance={3.5}
          saturation={1.0}
          followMouse={false}
          mouseInfluence={0}
          noiseAmount={0}
          distortion={0}
        />
      </div>
      
      {/* Centered Content */}
      <div className="flex-1 flex flex-col justify-center items-center gap-6 relative z-10 w-full max-w-5xl mx-auto px-4 mt-[-40px] md:mt-[-60px]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={tittleClassName}
        >
          {title}
        </motion.h1>
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
          className="flex flex-row flex-wrap items-center justify-center gap-4 mt-2"
        >
          {buttons?.map((button) => (
            <Link
              key={button.href}
              href={button.href}
              className={cn(
                buttonVariants({ variant: button.variant || "default" }),
                "cursor-pointer text-center",
                button.className,
              )}
            >
              {button.label}
            </Link>
          ))}
        </motion.div>
      </div>

      {children && (
        <div className="relative z-10 w-full flex justify-center px-4 mt-auto">
          {children}
        </div>
      )}
    </div>
  );
}