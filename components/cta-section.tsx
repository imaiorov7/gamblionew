import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import React from "react";

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
    <>
      <section className="relative flex flex-col items-center gap-4 p-5 mx-3 overflow-hidden bg-primary md:p-20 md:flex-row md:gap-12 md:mx-7 ">
        <div className="space-y-1 max-md:text-center">
          <h1 className="text-3xl font-medium md:text-4xl max-md:text-center">
            {title}
          </h1>
          {/* <h1 className="text-2xl font-medium md:text-4xl max-md:text-center">
            Schedule Your Integration
          </h1> */}
          <div className="my-2 border-b-2 border-dashed border-white/50 md:w-1/2"></div>

          <p className="mt-2 max-sm:text-sm text-foreground/70 max-md:text-center md:w-1/2">
            {description}
          </p>
          {buttonLink && (
            <Link
              href={buttonLink}
              className={`${buttonVariants({
                variant: "secondary",
              })} mt-3 bg-white rounded-full cursor-pointer hover:bg-white !text-black`}
            >
              {buttonText}
            </Link>
          )}
        </div>

        <img
          src="/images/logotip-gr.png"
          alt=""
          className="absolute hidden md:block opacity-45 left-1/3 md:scale-75 rotate-12"
        />
      </section>
    </>
  );
}
