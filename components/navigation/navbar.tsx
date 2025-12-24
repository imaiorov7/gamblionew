"use client";

import { IconMenu, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../ui/navigation-menu";
import { ShimmerButton } from "../ui/shimer-button";

export const pages = [
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "Who we are", id: "who-we-are" },
  { name: "FAQ", id: "faq" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isHomePage = pathname === "/" || pathname === "/#";

  const handleNavigation = (id: string) => {
    // Special handling for home - navigate to "/" without hash
    if (id === "home") {
      if (pathname !== "/") {
        router.push("/");
      }
      setMenuOpen(false);
      return;
    }

    if (isHomePage) {
      // On home page - scroll to section
      const section = document.getElementById(id);
      if (section) {
        window.history.pushState(null, "", `#${id}`);
        section.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
    } else {
      // On another page - navigate to home with hash
      window.location.href = `/#${id}`;
    }
  };

  // uncomment this if you want to navigate to the services section when the services trigger is clicked
  // const handleServiceTriggerClick = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   window.location.href = "/#services";
  // };

  return (
    <div className="fixed top-0 z-50 flex flex-col items-center justify-center w-full gap-3 mt-5">
      <nav className="border rounded-xl flex items-center justify-between w-1/2 max-sm:w-[90vw] p-3 py-2 backdrop-blur-2xl backdrop-brightness-110">
        {/* Logo */}
        <Image
          alt="logo"
          width={300}
          height={300}
          src={"/images/logotip-dark.svg"}
          className="w-8"
        />

        <div className="items-center hidden gap-6 md:flex">
          {pages.map((page) => {
            if (page.id === "services") {
              return (
                <NavigationMenu key={page.name}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-sm text-white !bg-transparent focus:!bg-transparent focus-visible:!bg-transparent hover:!bg-transparent active:!bg-transparent disabled:!bg-transparent data-[state=open]:!bg-transparent data-[active]:!bg-transparent data-[disabled]:!bg-transparent hover:text-gray-300 data-[state=open]:text-gray-300 cursor-pointer">
                        {page.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!bg-transparent">
                        <ul className="flex flex-col p-2 gap-4 ">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/analytics"
                                className="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none  hover:text-accent-foreground "
                              >
                                <div className="text-sm font-medium leading-none text-white">
                                  Analytics
                                </div>
                                {/* <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                                  Real-time business intelligence to optimize
                                  profitability and scale operations.
                                </p> */}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/predict"
                                className="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none  hover:text-accent-foreground "
                              >
                                <div className="text-sm font-medium leading-none text-white">
                                  Predict
                                </div>
                                {/* <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                                  AI-powered player profiling and behavioral
                                  forecasting to prevent losses.
                                </p> */}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/uChoose"
                                className="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none  hover:text-accent-foreground "
                              >
                                <div className="text-sm font-medium leading-none text-white">
                                  uChoose
                                </div>
                                {/* <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                                  AI-powered recommendation engine to maximize
                                  player engagement.
                                </p> */}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="#"
                                className="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none  hover:text-accent-foreground "
                              >
                                <div className="text-sm font-medium leading-none text-white">
                                  Care
                                </div>
                                {/* <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                                  AI and live support providing 24/7 service and
                                  faster resolutions.
                                </p> */}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              );
            }
            return (
              <button
                type="button"
                key={page.name}
                onClick={() => handleNavigation(page.id)}
                className="text-sm text-white transition cursor-pointer hover:text-gray-300"
              >
                {page.name}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link href={"https://app.gamblio.ai"}>
            <ShimmerButton className="hidden shadow-2xl md:flex">
              <span className="text-sm font-medium leading-none tracking-tight text-center text-white whitespace-pre-wrap dark:from-white dark:to-slate-900/10 ">
                Login
              </span>
            </ShimmerButton>
          </Link>
          <button
            type="button"
            className="p-2 transition rounded-lg md:hidden hover:bg-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border rounded-xl flex flex-col items-center w-[90vw] p-4 backdrop-blur-2xl backdrop-brightness-110"
          >
            {pages.map((page) => (
              <button
                type="button"
                key={page.name}
                onClick={() => handleNavigation(page.id)}
                className="w-full p-2 text-center text-white border-b border-dashed"
              >
                {page.name}
              </button>
            ))}

            <ShimmerButton className="w-full mt-2 shadow-2xl">
              <span className="text-sm font-medium leading-none tracking-tight text-center text-white whitespace-pre-wrap dark:from-white dark:to-slate-900/10 ">
                Try demo
              </span>
            </ShimmerButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
