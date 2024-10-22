import Link from "next/link";
import { Navbar } from "../Navbar";

export const Banner = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/background.webp)" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-2xl lg:text-6xl font-bold text-white">Energia e Automação Agrícola</h1>
        <p className="text-white text-base lg:text-lg mt-4 px-4">
          Impulsionando a Sustentabilidade para um Futuro Agrícola Inteligente.
        </p>
        <Link href="/contacts" className="mt-8 px-6 py-3 bg-yellow-400 text-black rounded-lg">
          Entrar em Contacto
        </Link>
      </div>
    </div>
  );
};
