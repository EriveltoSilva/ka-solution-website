"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Quais são os benefícios de instalar painéis solares na fazenda?",
    answer:
      "Instalar painéis solares na fazenda reduz os custos com eletricidade, aproveita áreas não cultiváveis, garante autossuficiência energética e contribui para a sustentabilidade, utilizando uma fonte limpa e renovável para alimentar operações como irrigação e bombeamento de água.",
  },
  {
    question: "Como posso controlar o sistema de irrigação automatizado remotamente?",
    answer:
      "Nosso sistema de irrigação automatizado pode ser controlado por meio de uma plataforma, permitindo que você ajuste e monitore a irrigação de qualquer lugar, a qualquer hora.",
  },
  {
    question: "Quanta água posso economizar com o sistema de irrigação automatizada?",
    answer:
      "Com a irrigação otimizada e baseada em sensores, é possível economizar até 50% da água usada em relação aos métodos tradicionais de irrigação.",
  },
  // {
  //   question: "O que acontece se meu sistema de irrigação falhar ou apresentar problemas?",
  //   answer: "Se algo der errado, o nosso sistema enviará uma notificação de alerta através do aplicativo ou por e-mail, garantindo que você fique sempre informado.",
  // },
  {
    question: "Qual é a vida útil dos painéis solares e eles exigem muita manutenção?",
    answer:
      "Nossos painéis solares são projetados para durar entre 25 e 30 anos com pouca ou nenhuma manutenção, pois utilizam energia limpa e sustentável.",
  },
];

export function SectionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
        {/* Left side */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-4xl text-gray-800 font-bold">FAQ</h2>
            <div className="w-16 h-1 bg-yellow-600 mt-2"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Como funciona a irrigação sensoria?</h2>
          <p className="text-gray-600 mb-6">
            Com base nas leituras dos sensores do solo, o sistema pode inferir com clareza a necessidade de irrigação e
            durante quanto tempo...
          </p>
          {/* <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2">
            <span>Watch Video</span>
            <span className="text-2xl">▶</span>
          </button> */}
        </div>

        {/* Right side (FAQ Accordion) */}
        <div className="lg:w-1/2 space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-lg transition-all duration-300 ${
                openIndex === index ? "p-4" : "p-2"
              }`}
            >
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
                <h4 className="text-lg font-semibold text-gray-800">{faq.question}</h4>
                <span className="text-teal-600 text-2xl">{openIndex === index ? "-" : "+"}</span>
              </div>
              {openIndex === index && <p className="mt-4 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
