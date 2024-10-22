"use client";

import Link from "next/link";
import { useState } from "react";

const submenu = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "#sobre-nos",
    label: "Sobre nós",
  },
  {
    path: "#productos",
    label: "Productos",
  },
  // {
  //   path: "/empresa",
  //   label: "Empresa",
  // },
  // {
  //   path: "/blog",
  //   label: "Blog",
  // },
  {
    path: "#faq",
    label: "FAQ",
  },
  {
    path: "#contactos",
    label: "Contactos",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-4 bg-transparent z-50">
        {/* Logo */}
        <div className="text-3xl md:text-xl lg:text-3xl font-bold text-yellow-400">K.A Solutions</div>

        {/* Botão Hamburguer (mobile) */}
        <button className="text-white text-3xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Menu (responsivo: usa uma única lista para mobile e desktop) */}
        <ul
          className={`flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 text-white fixed md:static top-0 right-0 h-full md:h-auto bg-gray-800 md:bg-transparent w-3/5 md:w-auto transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 transition-transform duration-300 ease-in-out z-40 md:z-auto`}
        >
          {submenu.map((menu, index) => (
            <li key={index} className="cursor-pointer">
              <Link
                href={menu.path}
                className="block py-2 px-4 md:p-0 text-center md:text-left text-lg md:text-xl lg:text-2xl"
                onClick={() => setIsOpen(false)} // Fecha o menu ao clicar no link (apenas mobile)
              >
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botão GET IN TOUCH */}
        {/* <button className="hidden md:block bg-yellow-400 text-black px-4 py-2 rounded-md">GET IN TOUCH</button> */}
        <div></div>

        {/* Overlay escuro para mobile */}
        {isOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" onClick={() => setIsOpen(false)}></div>
        )}
      </nav>
    </>
  );
};
