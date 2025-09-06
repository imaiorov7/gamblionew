"use client";

import Image from "next/image";
import { ShimmerButton } from "../ui/shimer-button";
import { IconMenu, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center flex-col gap-3 items-center fixed top-0 w-full mt-5 z-50">
        <nav className="border rounded-xl flex items-center justify-between w-1/2 max-sm:w-[90vw] p-3 py-2 backdrop-blur-2xl backdrop-brightness-110">
          <Image
            alt="logo"
            width={300}
            height={300}
            src={"/images/logotip-dark.svg"}
            className="w-8"
          />
          <div className="flex items-center gap-3"></div>
          <div>
            {/* Desktop dugme */}
            <ShimmerButton className="shadow-2xl max-md:hidden">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 ">
                Try demo
              </span>
            </ShimmerButton>

            {/* Mobile dugme */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border rounded-xl flex flex-col gap-3 items-center w-[90vw] p-4 backdrop-blur-2xl backdrop-brightness-110"
            >
              <a href="#" className="text-sm font-medium text-white">
                Home
              </a>
              <a href="#" className="text-sm font-medium text-white">
                Features
              </a>
              <a href="#" className="text-sm font-medium text-white">
                Pricing
              </a>
              <ShimmerButton className="shadow-2xl w-full">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 ">
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
