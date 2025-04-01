"use client";

import { BoxRevealDemo } from "@/app/(components)/box-reveal";
import { IconCloudDemo } from "@/app/(components)/icon-cloud";
import PublicHeader from "@/app/(components)/layout";
import { Particles } from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import * as motion from "motion/react-client";

export function Home() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <>
      <PublicHeader />
      <div className="flex flex-col items-center justify-center space-x-20 mt-24 md:flex-row">
        <motion.section
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <IconCloudDemo />
        </motion.section>
        <section className="mb-24 lg:mb-0">
          <BoxRevealDemo />
        </section>
      </div>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </>
  );
}
