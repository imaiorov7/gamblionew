"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const Predict = () => {
  const animationDuration = 2;
  const circles = [
    { opacity: [0.3, 0.6, 0.3], delay: 0 },
    { opacity: [0.5, 0.7, 0.5], delay: animationDuration },
    { opacity: [0.7, 0.9, 0.7], delay: animationDuration * 3 },
    { opacity: [1, 0.8, 1], delay: animationDuration * 4 },
  ];

  return (
    <div className="h-[300px] md:h-[400px] flex items-center justify-center w-full overflow-hidden md:overflow-visible">
      <motion.div
        className="p-10 md:p-20 bg-primary/30  aspect-square rounded-full flex items-center justify-center max-w-full"
        animate={{
          backgroundColor: [
            "oklch(60.34% 0.103 206.80 / 0.5)",
            "oklch(60.34% 0.103 206.80 / 0.7)",
            "oklch(60.34% 0.103 206.80 / 0.5)",
          ],
        }}
        transition={{
          duration: animationDuration,
          delay: circles[0].delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="p-8 md:p-14 bg-primary/50  aspect-square rounded-full flex items-center justify-center"
          animate={{
            backgroundColor: [
              "oklch(60.34% 0.103 206.80 / 0.6)",
              "oklch(60.34% 0.103 206.80 / 0.8)",
              "oklch(60.34% 0.103 206.80 / 0.6)",
            ],
          }}
          transition={{
            duration: animationDuration,
            delay: circles[1].delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="p-6 md:p-10 bg-primary/70  aspect-square rounded-full flex items-center justify-center"
            animate={{
              backgroundColor: [
                "oklch(60.34% 0.103 206.80 / 0.7)",
                "oklch(60.34% 0.103 206.80 / 0.9)",
                "oklch(60.34% 0.103 206.80 / 0.7)",
              ],
            }}
            transition={{
              duration: animationDuration,
              delay: circles[2].delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="p-4 md:p-10 bg-primary  aspect-square rounded-full flex items-center justify-center"
              animate={{
                backgroundColor: [
                  "oklch(60.34% 0.103 206.80 / 1)",
                  "oklch(60.34% 0.103 206.80 / 0.8)",
                  "oklch(60.34% 0.103 206.80 / 1)",
                ],
              }}
              transition={{
                duration: animationDuration,
                delay: circles[3].delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Eye className="size-6 md:size-10" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Predict;
