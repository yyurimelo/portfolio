import { NeonGradientCard } from "@space/components/magicui/neon-gradient-card";
import Image from "next/image";

export default function Icon() {
  return (
    <NeonGradientCard className="w-fit h-fit ">
      <Image
        src="/eu.jpg"
        alt="Yuri Melo"
        width={250}
        height={250}
        className="rounded-full"
      />
    </NeonGradientCard>
  );
}
