"use client";

import { cn } from "@space/lib/utils";
import LanguagesRotate from "./languages-rotate/page";
import Writing from "./writing/page";
import { DotPattern } from "@space/components/magicui/dot-pattern";

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
        <div>
          <Writing />
        </div>
        <div className="md:w-1/3 w-full flex justify-center mb-8 md:mb-0 items-center">
          <LanguagesRotate />
        </div>
      </div>
    </div>
  );
}
