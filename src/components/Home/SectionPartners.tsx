"use client";
import Image from "next/image";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const partners = [
  { name: "Climate programs", imgSrc: "/partners/climate-smart.jpeg" },
  { name: "Acelera Angola", imgSrc: "/partners/acelera-angola.png" },
  {
    name: "Acelera Agro",
    imgSrc: "/partners/acelera-agro.jpeg",
  },
];

export default function SectionPartners() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-20 md:py-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-4xl text-center text-gray-800 font-bold">Parceiros</h2>
        <div className="w-16 h-1 bg-yellow-600 mx-auto mt-2"></div>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden lg:block flex-shrink-0">
          <button onClick={scrollLeft} className="text-2xl">
            <FaChevronLeft className="size-10" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex flex-1 w-full overflow-x-auto overflow-y-hidden space-x-4 flex-nowrap hide-scrollbar"
        >
          {partners.map((partner, index) => (
            <div key={index} className="w-[300px] h-[300px] bg-red-500">
              <Image
                //   key={index}
                src={partner.imgSrc}
                alt={partner.name}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-fill"
              />
            </div>
          ))}
        </div>
        <div className="hidden lg:block flex-shrink-0">
          <button onClick={scrollRight} className="text-2xl">
            <FaChevronRight className="size-10" />
          </button>
        </div>
      </div>
    </section>
  );
}
