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
      href: "/privacy-policy",
    },
    {
      title: "Terms of Service",
      href: "/terms-of-service",
    },
    {
      title: "Cookie Policy",
      href: "/cookie-policy",
    },
  ];

  return (
    <footer className="relative w-full px-6 md:px-8 py-16 overflow-hidden bg-background border-t border-border/40 border-solid">
      <div className="flex flex-col lg:flex-row items-start justify-between mx-auto max-w-6xl text-sm text-muted-foreground gap-12 lg:gap-8">
        
        {/* LEFT SIDE: Logo & Copyright */}
        <div className="flex flex-col gap-4">
          <Logo />
          <div className="ml-2 text-muted-foreground/80">
            &copy; copyright Gamblio {new Date().getFullYear()}. All rights
            reserved.
          </div>
        </div>
        
        {/* RIGHT SIDE: Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-16 lg:gap-24 w-full lg:w-auto lg:ml-auto">
          
          {/* Column 1: Pages */}
          <div className="flex flex-col justify-start w-full space-y-5">
            <p className="font-semibold transition-colors text-foreground">
              Pages
            </p>
            <ul className="space-y-4 list-none text-muted-foreground">
              {pages.map((page, idx) => (
                <li key={"pages" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-primary"
                    href={page.href}
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Socials */}
          <div className="flex flex-col justify-start space-y-5">
            <p className="font-semibold transition-colors text-foreground">
              Socials
            </p>
            <ul className="space-y-4 list-none text-muted-foreground">
              {socials.map((social, idx) => (
                <li key={"social" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-primary"
                    href={social.href}
                  >
                    {social.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col justify-start space-y-5">
            <p className="font-semibold transition-colors text-foreground">
              Legal
            </p>
            <ul className="space-y-4 list-none text-muted-foreground">
              {legals.map((legal, idx) => (
                <li key={"legal" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-primary"
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
    </footer>
  );
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center px-2 space-x-2 text-sm font-normal text-black"
    >
      <Image src="/images/logo-dark.svg" alt="logo" width={220} height={30} className="object-contain" />
    </Link>
  );
};