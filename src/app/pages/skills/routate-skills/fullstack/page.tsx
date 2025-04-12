import { AuroraText } from "@space/components/magicui/aurora-text";
import { CardsFullstack } from "./cards-fullstack";

export default function FullStackSkills() {
  return (
    <div className="flex flex-col md:flex-row md:justify-center md:items-center md:space-x-8 space-y-8 md:space-y-0">
      <div className="text-start text-xs md:w-1/3 max-w-md md:px-4">
        <AuroraText className="font-bold text-2xl md:text-6xl">
          FULL STACK
        </AuroraText>
        <p className="text-sm md:text-base">
          Full stack é o desenvolvedor que atua tanto no front-end (o que o
          usuário vê) quanto no back-end (o que acontece por trás), cuidando de
          toda a aplicação — da interface até o banco de dados e a lógica do
          servidor.
        </p>
      </div>
      <div>
        <CardsFullstack />
      </div>
    </div>
  );
}
