"use client";
import { BoxReveal } from "@space/components/magicui/box-reveal";
import Icon from "../icon/page";
import Image from "next/image";
import { InteractiveHoverButton } from "@space/components/magicui/interactive-hover-button";
import { Button } from "@space/components/ui/button";
import { DialogContact } from "@space/app/_components/dialog-contact/dialog-contact";
import { useState } from "react";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "vite",
  "androidstudio",
  "html5",
  "css3",
  // "docker",
  "github",
  "figma",
  "tailwindcss",
  "mysql",
  "dotnet",
];

const images = slugs.map(
  (slug) =>
    `https://cdn.simpleicons.org/${slug.toLowerCase()}/${slug.toLowerCase()}/white`
);

export default function Slogan() {
  const [open, setOpen] = useState(false);
  const nowYear = new Date().getFullYear();
  const birthYear = 2006;
  const age = nowYear - birthYear;

  return (
    <>
      <div className="flex gap-10">
        <div>
          <BoxReveal boxColor={"#ab0fff"} duration={0.5}>
            <p className="md:text-[3rem] text-2xl font-semibold">
              Yuri Melo<span className="text-[#ab0fff]">.</span>
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#ab0fff"} duration={0.5}>
            <div className="md:flex flex md:items-center text-left text-xs md:text-[1rem]">
              <h2>
                {"<"}Desenvolvedor Full stack{" "}
                <span className="text-[#ab0fff]"> | UX DESIGNER {"/>"}</span>
              </h2>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#ab0fff"} duration={0.5}>
            <div className="mt-2 text-xs md:text-[1rem]">
              <p className="text-left">
                Olá, me chamo Yuri Melo, tenho {age} anos e atualmente trabalho
                como Full stack. <br />
              </p>
              <div className="flex flex-wrap gap-2 text-[0.9rem] mt-2">
                {slugs.map((slug, index) => (
                  <div key={slug} className="flex items-center space-x-1">
                    <Image
                      src={images[index]}
                      alt={`Ícone de ${slug}`}
                      width={20}
                      height={20}
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#ab0fff"} duration={0.5}>
            <div className="flex flex-col md:flex-row items-center mt-[1.6rem] gap-2">
              <InteractiveHoverButton
                className="bg-[#ab0fff]"
                onClick={() => setOpen(true)}
              >
                Contato
              </InteractiveHoverButton>
              <Button asChild className="rounded-full p-5" variant="outline">
                <a href="Yuri_Melo_dos_Santos.docx" download>
                  Download CV
                </a>
              </Button>
            </div>
          </BoxReveal>
        </div>
        <div>
          <Icon />
        </div>
      </div>
      <DialogContact open={open} setOpen={setOpen} />
    </>
  );
}
