import Image from "next/image";

export function CardsFullstack() {
  const slugs = [
    "typescript",
    "javascript",
    "react",
    "nextdotjs",
    "vite",
    "tailwindcss",
    "dotnet",
  ];

  const images = slugs.map(
    (slug) =>
      `https://cdn.simpleicons.org/${slug.toLowerCase()}/${slug.toLowerCase()}/8833ff`
  );

  return (
    <div>
      <div className="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {slugs.map((slug, index) => (
          <div
            key={slug}
            className="flex justify-center items-center p-4 rounded-md "
          >
            <Image
              src={images[index]}
              alt={`Ícone de ${slug}`}
              width={40}
              height={40}
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
