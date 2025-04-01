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
      <div className="mt-2 lg:mt-4 lg:flex lg:items-center lg:justify-center lg:space-x-10">
        <motion.section
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* <OrbitingCirclesDemo /> */}
          <IconCloudDemo />
        </motion.section>
        <section>
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
