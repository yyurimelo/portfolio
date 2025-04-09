"use client";
import { Particles } from "@space/components/magicui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Slogan from "./slogan/page";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="md:justify-center flex h-screen w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4 text-center md:space-y-0 md:space-x-4 md:flex-row">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <section className="md:flex md:gap-10">
        <Slogan />
      </section>
    </div>
  );
}
