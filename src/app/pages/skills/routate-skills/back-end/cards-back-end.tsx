import Image from "next/image";
import { ShineBorder } from "@space/components/magicui/shine-border";

export function CardsBackEnd() {
  const slugs = [
    "dotnet",
    "nodedotjs",
    "nestjs",
    "mongodb",
    "mysql",
  ];

  const images = slugs.map(
    (slug) =>
      `https://cdn.simpleicons.org/${slug.toLowerCase()}/${slug.toLowerCase()}/8833ff`
  );

  return (
    <div>
      <div className="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-4 gap-2 p-1">
        {slugs.map((slug, index) => (
          <div
            key={slug}
            className="relative overflow-hidden rounded-md bg-muted-foreground/10 p-4 shadow-md flex justify-center items-center group transition-transform md:hover:scale-105 duration-200 ease-in-out cursor-pointer"
          >
            <div className="absolute inset-0 rounded-md transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100">
              <ShineBorder shineColor={["#ab0fff", "#8833ff", "#3aa3ff"]} />
            </div>

            <div className="relative z-10">
              <Image
                src={images[index]}
                alt={`Ícone de ${slug}`}
                width={40}
                height={40}
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
