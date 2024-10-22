const solarFeatures = [
  {
    icon: "☀️",
    title: "ENERGIA LIMPA E RENOVÁVEL",
    description: "Produza eletricidade utilizando a luz do sol, uma fonte inesgotável e sustentável de energia.",
  },
  {
    icon: "💡",
    title: "REDUZA SUAS CONTAS DE ENERGIA",
    description:
      "Com a instalação de painéis solares, você pode reduzir significativamente os custos com eletricidade.",
  },
  {
    icon: "🌍",
    title: "CONTRIBUA PARA UM FUTURO SUSTENTÁVEL",
    description: "Ao optar pela energia solar, você ajuda a diminuir a pegada de carbono e proteger o meio ambiente.",
  },
];

const irrigationFeatures = [
  {
    icon: "🌧️",
    title: "IRRIGAÇÃO CONSISTENTE",
    description:
      "Não importa o que você cultiva – com o nosso sistema, você sempre terá resultados de irrigação perfeitos.",
  },
  {
    icon: "💧",
    title: "ECONOMIZE ATÉ 50% DE ÁGUA",
    description: "Ao otimizar a irrigação em seu local, é possível reduzir o consumo de água em até 50%.",
  },
  {
    icon: "🌱",
    title: "AUMENTE SUA PRODUÇÃO EM ATÉ 30%",
    description: "Com a irrigação ideal e as condições corretas do solo, você pode aumentar a produção em até 30%.",
  },
  //   {
  //     icon: "📡",
  //     title: "SEM NECESSIDADE DE CABOS",
  //     description: "Nossa solução utiliza comunicação por rádio de longo alcance, dispensando o uso de cabos.",
  //   },
  {
    icon: "🔋",
    title: "ENERGIA SOLAR",
    description: "Nossas unidades remotas funcionam com energia solar sustentável.",
  },
  {
    icon: "⌛",
    title: "ECONOMIZE CENTENAS DE HORAS DE TRABALHO",
    description: "Ao substituir a irrigação manual pela automatizada, você economiza centenas de horas de trabalho.",
  },
  {
    icon: "📱",
    title: "CONTROLE SUA IRRIGAÇÃO DE QUALQUER LUGAR",
    description: "Com o nosso app, você pode gerenciar totalmente a irrigação a qualquer hora e de qualquer lugar.",
  },
  {
    icon: "🌡️",
    title: "IRRIGAÇÃO INTELIGENTE COM BASE EM SENSORES",
    description:
      "Nosso sistema ajusta a irrigação de forma inteligente com base em dados de sensores (como de chuva, humidade do solo e temperatura).",
  },
  {
    icon: "🔔",
    title: "SEGURANÇA GARANTIDA EM SUA IRRIGAÇÃO",
    description: "Se algo der errado, o aplicativo enviará uma notificação de alerta ou um e-mail.",
  },
];

export const SectionWhyOurProducts = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-4xl text-center text-gray-800 font-bold">
            Porquê <span className="text-yellow-400">Nós?</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-600 mx-auto mt-2"></div>
        </div>
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {solarFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-4xl text-white">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-[1px] bg-gray-300 my-14" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {irrigationFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-4xl text-white">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
