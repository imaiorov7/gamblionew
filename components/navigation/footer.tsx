"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Footer() {
  const pages = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Gamblio Analytics",
      href: "/analytics",
    },
    {
      title: "Gamblio Predict",
      href: "/predict",
    },
    {
      title: "Gamblio uChoose",
      href: "/uChoose",
    },
    {
      title: "Gamblio Care",
      href: "/care",
    },
  ];

  const socials = [
    {
      title: "Instagram",
      href: "https://instagram.com/gamblio.ai",
    },
    {
      title: "LinkedIn",
      href: "https://linkedin.com/company/gamblio",
    },
  ];
  const legals = [
    {
      title: "Privacy Policy",
      href: "#",
    },
    {
      title: "Terms of Service",
      href: "#",
    },
    {
      title: "Cookie Policy",
      href: "#",
    },
  ];

  return (
    <div className="relative w-full px-8 py-20 overflow-hidden bg-neutral-950">
      <div className="flex flex-col items-start justify-between mx-auto text-sm max-w-7xl text-neutral-500 sm:flex-row md:px-8">
        <div>
          <div className="mb-4 mr-0 md:mr-4 md:flex">
            <Logo />
          </div>

          <div className="mt-2 ml-2">
            &copy; copyright Gamblio {new Date().getFullYear()}. All rights
            reserved.
          </div>
        </div>
        <div className="grid items-start grid-cols-2 gap-10 mt-10 lg:grid-cols-4 sm:mt-0 md:mt-0">
          <div className="flex flex-col justify-center w-full space-y-4">
            <p className="font-bold transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300">
              Pages
            </p>
            <ul className="space-y-4 list-none transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300">
              {pages.map((page, idx) => (
                <li key={"pages" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-text-neutral-800 "
                    href={page.href}
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <p className="font-bold transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300">
              Socials
            </p>
            <ul className="space-y-4 list-none transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300">
              {socials.map((social, idx) => (
                <li key={"social" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-text-neutral-800 "
                    href={social.href}
                  >
                    {social.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <p className="font-bold transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300">
              Legal
            </p>
            <ul className="space-y-4 list-none transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300">
              {legals.map((legal, idx) => (
                <li key={"legal" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-text-neutral-800 "
                    href={legal.href}
                  >
                    {legal.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <p className="text-center mt-20 text-5xl md:text-9xl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
        Gamblio
      </p> */}
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center px-2 py-1 mr-4 space-x-2 text-sm font-normal text-black"
    >
      <Image src="/images/logo-dark.svg" alt="logo" width={300} height={30} />
    </Link>
  );
};
