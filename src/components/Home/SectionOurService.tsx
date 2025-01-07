import Image from "next/image";
import Link from "next/link";
import { GiPlantWatering } from "react-icons/gi";
import { PiSolarRoofLight } from "react-icons/pi";

export const SectionOurService = () => {
  return (
    <section id="productos" className="bg-white py-16">
      <div className="max-w-7xl mx-auto text-center px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-4xl text-center text-gray-800 font-bold">
            {" "}
            Nossos <span className="text-yellow-700">Serviços</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-2"></div>
        </div>

        <h1 className="text-lg md:text-xl font-bold text-gray-500 mt-2">Dimensionamento, Instalação, Manutenção</h1>
      </div>

      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Card 1 */}
        <div className="bg-yellow-50 rounded-lg shadow-lg pb-5 overflow-hidden">
          <Link href={"#"}>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="/sun-energy.webp"
              alt="Energia Solar Verde"
              className="w-full h-48 object-cover"
            />
          </Link>
          <div className="p-6 flex justify-between items-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 hover:text-gray-600">
              <p>Energia Solar Verde</p>
            </h3>
            <PiSolarRoofLight className="text-yellow-700 size-14" />
          </div>

          <p className="px-6 text-sm md:text-base">
            Serviço completo de instalação de painéis solares, projetado para transformar a luz do sol em energia limpa
            e sustentável para sua casa ou empresa. Nossa equipe especializada cuida de cada etapa do processo, desde a
            análise inicial do local até a instalação e configuração final dos sistemas.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-yellow-50 rounded-lg shadow-lg pb-5 overflow-hidden">
          <Link href={"#"}>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="/irrigation.webp"
              alt="Sistema de Irrigação Automatizado"
              className="w-full h-48 object-cover"
            />
          </Link>
          <div className="p-6 flex justify-between items-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 hover:text-gray-600">
              <p>Sistema de Irrigação Automatizado</p>
            </h3>
            <GiPlantWatering className="text-blue-500 size-14" />
          </div>

          <p className="px-6 text-sm md:text-base">
            Nosso sistema de irrigação automatizado é projetado para otimizar o uso da água e garantir que suas plantas
            recebam a irrigação necessária de maneira eficiente. Permite acionar manualmente, configurar horários para
            irrigação temporizada, ou utilizar sensores de humidade para ativação automática.
          </p>
        </div>
      </div>
    </section>
  );
};
