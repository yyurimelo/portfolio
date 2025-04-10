import { WordRotate } from "@space/components/magicui/word-rotate";
import Image from "next/image";

const slugs = ["typescript", "javascript", "react", "tailwindcss", "dotnet"];

const images = slugs.map(
  (slug) =>
    `https://cdn.simpleicons.org/${slug.toLowerCase()}/${slug.toLowerCase()}`
);

export default function LanguagesRotate() {
  return (
    <div>
      <WordRotate
        className="font-bold text-black dark:text-white"
        words={slugs.map((slug, index) => (
          <div key={slug} className="flex items-center space-x-1">
            <Image
              src={images[index]}
              alt={`Ícone de ${slug}`}
              width={200}
              height={200}
              unoptimized
            />
          </div>
        ))}
      />
    </div>
  );
}
