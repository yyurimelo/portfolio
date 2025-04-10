"use client";

import { cn } from "@space/lib/utils";
import LanguagesRotate from "./languages-rotate/page";
import Writing from "./writing/page";
import { DotPattern } from "@space/components/magicui/dot-pattern";
import { motion } from "motion/react";

export default function About() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_top_left,white,transparent,transparent)]"
          )}
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center p-8 w-full min-h-screen">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/3 w-full p-4"
        >
          <Writing />
        </motion.div>
        <div className="md:w-1/3 w-full flex justify-center mb-8 md:mb-0 items-center">
          <LanguagesRotate />
        </div>
      </div>
    </div>
  );
}
