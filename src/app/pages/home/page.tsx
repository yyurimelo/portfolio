"use client";

import { BoxRevealDemo } from "@/app/(components)/box-reveal";
import { IconCloudDemo } from "@/app/(components)/icon-cloud";
import PublicHeader from "@/app/(components)/layout";
import { OrbitingCirclesDemo } from "@/app/(components)/orbiting-circles-demo";
import { Particles } from "@/components/magicui/particles";
import type { Metadata } from "next";
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
      <div className="my-7 flex flex-col justify-center gap-10 md:flex-row">
        <motion.section
          className="grid p-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* <OrbitingCirclesDemo /> */}
          <IconCloudDemo />
        </motion.section>
        <section className="grid w-full p-4 md:w-1/3">
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
