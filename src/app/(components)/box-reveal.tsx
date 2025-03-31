import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "androidstudio",
  "html5",
  "css3",
  "prisma",
  "mysql",
  "vercel",
  // "docker",
  "github",
  "figma",
];

// Certifique-se de que as URLs estão corretas ou use um serviço como "simple-icons"
const images = slugs.map(
  (slug) =>
    `https://cdn.simpleicons.org/${slug.toLowerCase()}/${slug.toLowerCase()}`,
);

export function BoxRevealDemo() {
  const nowYear = new Date().getFullYear();
  const birthYear = 2006;
  const age = nowYear - birthYear;

  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#00FFF1"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Yuri Melo<span className="text-[#00FFF1]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#00FFF1"} duration={0.5}>
        <div className="flex items-center space-x-2">
          <h2 className="text-[1rem]">{"<"}Desenvolvedor Fullstack</h2>
          <span className="text-[#00FFF1]">|</span>
          <span className="text-[#00FFF1]">UI DESIGNER {"/>"}</span>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#00FFF1"} duration={0.5}>
        <div className="mt-6">
          <p>
            Olá, me chamo Yuri Melo, tenho {age} anos e atualmente trabalho como
            Fullstack. <br />
          </p>
          <div className="flex flex-wrap gap-2 text-[0.9rem]">
            {slugs.map((slug, index) => (
              <div key={slug} className="flex items-center space-x-1">
                <img src={images[index]} alt={slug} className="h-6 w-6" />
              </div>
            ))}
          </div>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#00FFF1"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#00FFF1]">Contato</Button>
      </BoxReveal>
    </div>
  );
}
