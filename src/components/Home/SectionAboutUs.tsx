import Link from "next/link";

export const SectionAboutUs = () => {
  return (
    <section
      id="sobre-nos"
      className="relative flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-between py-12 px-6 md:px-20 md:py-20 bg-gray-100"
    >
      {/* Texto da Seção */}
      <div className="md:w-1/2 text-left z-10">
        <h2 className="text-2xl lg:text-4xl font-bold text-black mb-4">
          Sobre a <span className="text-yellow-400">K.A Solutions</span>
        </h2>
        <h3 className="text-xl lg:text-3xl font-thin text-black mb-6">Soluções Tecnologicas para o agro-negocio</h3>

        <Link
          href={"/company"}
          className="border-2 border-yellow-400 text-black px-6 py-3 rounded-md hover:bg-yellow-500 hover:text-white transition-colors duration-300"
        >
          Ler mais...
        </Link>
      </div>

      {/* Imagem */}
      {/* <div className="md:w-1/2 flex justify-center z-10">
        <div className="relative">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/logo.png" // Substitua pela URL da sua imagem
            alt="K.A Solutions"
            className="object-cover w-full h-full relative z-10"
          />
          <div className="absolute top-1/2 left-1/2 w-4/5 h-full border-4 border-yellow-400 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
        </div>
      </div> */}
      <div className="md:w-1/2 flex justify-center z-10">
        <p className="text-gray-600 mb-8">
          Nossas soluções de energia solar oferecem uma alternativa sustentável e econômica para atender às demandas
          energéticas em áreas rurais e urbanas. Através da instalação de painéis solares de alta performance,
          eliminamos a ineficiência energetica, ajudando nossos clientes a ter eletricidade de forma sustentável,
          reduzindo custos operacionais e a dependência de fontes de energia fósseis convencionais.
          <br />
          <br />
          Nossos sistemas de irrigação automatizados revolucionam o manejo da água na agricultura. Com sensores
          inteligentes e controle remoto, essas soluções permitem que a água seja distribuída de maneira precisa,
          levando em consideração fatores como a humidade do solo e as necessidades das plantas.
        </p>
      </div>

      {/* Letra de Fundo (decoração) */}
      <div className="hidden md:block md:absolute md:text-[5rem] lg:text-[10rem] lx:text-[15rem]  font-bold text-yellow-100 left-0 right-0 text-center top-1/4 md:top-1/2 transform -translate-y-1/4 md:-translate-y-1/2 z-0 pointer-events-none">
        K.A Solutions
      </div>
    </section>
  );
};
