"use client";

import { IconMenu, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

  const handleNavigation = (id: string) => {
    const isHomePage = pathname === "/";

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

  return (
    <>
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
            {pages.map((page) => (
              <button
                key={page.name}
                onClick={() => handleNavigation(page.id)}
                className="text-sm text-white transition cursor-pointer hover:text-gray-300"
              >
                {page.name}
              </button>
            ))}
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
    </>
  );
}
