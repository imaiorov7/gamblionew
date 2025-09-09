"use client";
import Link from "next/link";
import { ShimmerButton } from "./ui/shimer-button";
import { motion } from "motion/react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section id="home" className="border-x md:mx-7 mx-3">
      <div className="absolute inset-0 -z-10 h-[600px] md:h-[800px] w-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--primary)_100%)] "></div>
      <div className="flex flex-col h-[600px] max-md:h-[500px] pt-20 justify-center items-center gap-3 ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-balance text-center "
        >
          AI to amplify
          <br /> <span className="text-primary ">GAMBLIO</span> to simplify
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          className="md:w-1/2 text-center max-md:text-sm text-muted-foreground"
        >
          Tools that do more than automate — they understand, connect, and drive
          real results.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          className="flex gap-3"
        >
          <Link href={"https://demo.gamblio.ai"}>
            <ShimmerButton className="shadow-2xl hidden md:flex">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 ">
                Try demo
              </span>
            </ShimmerButton>
          </Link>
          <Link href={"https://app.gamblio.ai"}>
            <Button variant={"outline"} className="rounded-full cursor-pointer">
              Login
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
