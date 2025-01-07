import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MediaLink2 } from "../Button/MediaLink";

export const Footer: React.FC = () => {
  return (
    <footer className="grid lg:grid-cols-2 lg:justify-items-center  grid-cols-1  justify-items-center  px-[5%] py-12 items-center h-[181px] w-full">
      <div className="space-y-3">
        <p className="text-center lg:text-start">Siga minhas redes sociais</p>

        <div className="flex flex-wrap gap-5">
          <MediaLink2
            Icon={FaLinkedin}
            iconClassName="text-blue-600 text-2xl"
            title="See my LinkedIn profile"
            link="https://www.linkedin.com/company/k-a-solutions/"
          />
          <MediaLink2
            Icon={SiGmail}
            iconClassName="text-red-600 text-2xl"
            title="Fale connosco"
            link="mailto:geral@kasolutions.com"
          />
        </div>
      </div>

      <div className="space-y-3">
        <div className="hidden lg:block text-3xl md:text-xl lg:text-3xl lg:text-start text-center font-bold text-yellow-700">
          K.A Solutions
        </div>
        <p> &copy; {new Date().getFullYear()} Todos os direitos reservados!</p>
      </div>
    </footer>
  );
};
