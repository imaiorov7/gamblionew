import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

interface CTASectionProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonLink,
}: CTASectionProps) {
  return (
    <div className="relative w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl py-10 px-6 md:py-16 md:px-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 bg-primary">
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/60 opacity-90" />

      <div className="relative z-10 flex flex-col gap-5 md:gap-6 w-full max-w-3xl max-md:items-center max-md:text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          {title}
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
          {description}
        </p>
        
        {buttonLink && (
          <Link
            href={buttonLink}
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "mt-2 md:mt-4 w-full sm:w-fit bg-background text-foreground hover:bg-background/90 rounded-full px-8 py-6 md:px-10 md:py-7 text-base md:text-lg font-semibold shadow-xl transition-all text-center"
            )}
          >
            {buttonText}
          </Link>
        )}
      </div>

      <div className="absolute hidden md:block right-0 top-1/2 -translate-y-1/2 translate-x-[15%] lg:translate-x-[20%] opacity-30 mix-blend-overlay pointer-events-none">
        <Image
          width={700}
          height={700}
          src="/images/cta-3d.png"
          alt="Decorative 3D Graphic"
          className="object-contain"
        />
      </div>
    </div>
  );
}