"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { ShineBorder } from "@/components/magicui/shine-border";
import { cn } from "@/lib/utils";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "prisma",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "jest",
  "docker",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  const { theme } = useTheme();
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <NeonGradientCard>
      <IconCloud images={images} />
    </NeonGradientCard>
  );
}
