"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThemeImage() {
  const { theme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>("light");

  useEffect(() => {
    if (theme === "system") {
      setCurrentTheme(systemTheme || "light");
    } else {
      setCurrentTheme(theme || "light");
    }
  }, [theme, systemTheme]);

  const imageSrc =
    currentTheme === "dark" ? "/svg-logo-white.svg" : "/svg-logo-black.svg";

  return (
    <div className="p-4 pb-0">
      <Image src={imageSrc} alt="Imagem adaptativa" width={60} height={60} />
    </div>
  );
}
