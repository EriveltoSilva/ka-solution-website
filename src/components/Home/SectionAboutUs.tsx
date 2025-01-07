import Image from "next/image";
import Link from "next/link";

export const SectionAboutUs = () => {
  return (
    <>
      <section
        id="sobre-nos"
        className="relative flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-between py-12 px-6 md:px-20 md:py-20 bg-gray-100"
      >
        {/* Texto da Seção */}
        <div className="md:w-1/2 text-left z-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-4">
            Sobre a <span className="text-yellow-700">K.A Solutions</span>
          </h2>
          <h3 className="text-xl lg:text-3xl font-thin text-black mb-6">Soluções Tecnologicas para o agro-negocio</h3>

          <Link
            href={"#why-us"}
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

      <section
        id="why-us"
        className="bg-white md:gap-0 md:flex-row items-center justify-between py-12 px-6 md:px-20 md:py-20"
      >
        <div className="container mx-auto px-6">
          {/* Introductory Text */}
          <div className="mb-8">
            <p className="text-lg text-gray-700">
              A K.A Solutions trabalha para ser uma instituição sólida, com notoriedade de marca, que participa
              activamente no processo de crescimento e desenvolvimento agricola da nossa Angola, respondendo aos seus
              desafios e satisfazendo as necessidades tecnologicas dos fazendeiros e agricultores em Angola.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Para garantirmos estes objectivos, a nossa Missão, Visão e Valores são fundamentais.
            </p>
          </div>

          {/* Mission */}
          <h2 className="text-2xl font-bold text-yellow-700">Missão</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-gray-600 mt-4">
              Transformar o agronegócio angolano por meio de soluções tecnológicas inovadoras, agregando valor à cadeia
              produtiva, automatizando processos e promovendo a sustentabilidade e a eficiência nas operações agrícolas
              para agricultores e fazendeiros em Angola.
            </p>
            <p className="text-center flex justify-center">
              <Image
                src={"/mission.png"}
                alt="K.A Solutions Missão"
                sizes="100vw"
                width={0}
                height={0}
                className="w-3/5 h-auto object-contain"
              />
            </p>
          </div>

          {/* Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-center hidden md:flex justify-center ">
              <Image
                src={"/vision.png"}
                alt="K.A Solutions Visão"
                sizes="100vw"
                width={0}
                height={0}
                className="w-4/5 h-auto object-contain"
              />
            </p>
            <div>
              <h2 className="text-2xl font-bold text-yellow-700">Visão</h2>
              <p className="text-gray-600 mt-4">
                Ser a referência líder em inovação tecnológica para o agronegócio na África, proporcionando as melhores
                soluções de automação, IoT e energia sustentável que capacitem os agricultores a aumentar a
                produtividade e gerir recursos de forma inteligente e conectada.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-yellow-700">Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-gray-600 mt-4">
              O sucesso da K.A Solutions é construído sobre os nossos valores fundamentais, que guiam todas as nossas
              relações com clientes e parceiros de negócios. Eles estão no centro de tudo o que fazemos. Nossos valores
              são:
            </p>
            <p className="text-center flex justify-center">
              <Image
                src={"/valores.png"}
                alt="K.A Solutions Valores"
                sizes="100vw"
                width={0}
                height={0}
                className="w-4/5 h-auto object-contain"
              />
            </p>
          </div>

          {/* Decorative Element */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article>
              <h3 className="text-xl font-semibold text-yellow-700">Inovação Sustentável:</h3>
              <p>
                Desenvolver soluções tecnológicas que promovam crescimento sustentável e conservação dos recursos
                naturais.
              </p>
            </article>

            <article className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-700">Profissionalismo e Excelência:</h3>
              <p>
                Manter os mais altos padrões de qualidade, ética e profissionalismo em todos os nossos serviços e
                produtos.
              </p>
            </article>

            <article className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-700">Compromisso com o Cliente:</h3>
              <p>
                Priorizar as necessidades dos agricultores e fazendeiros, oferecendo soluções personalizadas e suporte
                contínuo.
              </p>
            </article>

            <article className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-700">Responsabilidade Social:</h3>
              <p>
                Contribuir para o desenvolvimento socioeconômico de Angola, promovendo tecnologias acessíveis que gerem
                impacto positivo nas comunidades rurais.
              </p>
            </article>

            <article>
              <h3 className="text-xl font-semibold text-yellow-700">Soluções Orientadas por Dados:</h3>
              <p>
                Utilizar inteligência artificial e automação para oferecer decisões baseadas em dados que impulsionem a
                produtividade e a inovação no campo.
              </p>
            </article>

            <article>
              <h3 className="text-xl font-semibold text-yellow-700">Colaboração e Parcerias:</h3>
              <p>
                Trabalhar em parceria com universidades, centros de pesquisa e instituições agrícolas e outras para
                criar um ecossistema robusto de inovação tecnológica.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
