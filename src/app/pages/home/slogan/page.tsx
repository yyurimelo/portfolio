import { Button } from "@space/components/ui/button";
import { BoxReveal } from "@space/components/magicui/box-reveal";
import Icon from "../icon/page";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "androidstudio",
  "html5",
  "css3",
  // "docker",
  "github",
  "figma",
  "tailwindcss",
  "nextdotjs",
  "mysql",
  "dotnet",
];

// Certifique-se de que as URLs estão corretas ou use um serviço como "simple-icons"
const images = slugs.map(
  (slug) =>
    `https://cdn.simpleicons.org/${slug.toLowerCase()}/${slug.toLowerCase()}`
);

export default function Slogan() {
  const nowYear = new Date().getFullYear();
  const birthYear = 2006;
  const age = nowYear - birthYear;

  return (
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
              {"<"}Desenvolvedor Fullstack{" "}
              <span className="text-[#ab0fff]"> | UI DESIGNER {"/>"}</span>
            </h2>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#ab0fff"} duration={0.5}>
          <div className="mt-2 text-xs md:text-[1rem]">
            <p className="text-left">
              Olá, me chamo Yuri Melo, tenho {age} anos e atualmente trabalho
              como Fullstack. <br />
            </p>
            <div className="flex flex-wrap gap-2 text-[0.9rem] mt-2">
              {slugs.map((slug, index) => (
                <div key={slug} className="flex items-center space-x-1">
                  <img
                    src={images[index]}
                    alt={slug}
                    className="h-4 w-4 rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#ab0fff"} duration={0.5}>
          <Button className="mt-[1.6rem] bg-[#ab0fff]">Contato</Button>
        </BoxReveal>
      </div>
      <Icon />
    </div>
  );
}
