import { GiFarmer } from "react-icons/gi";
import { MdAssignmentInd } from "react-icons/md";
import { PiFarm } from "react-icons/pi";
import { SlEnergy } from "react-icons/sl";

export const SectionIndicators = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center rounded-lg shadow-md p-6">
        <div className="flex flex-col gap-4 items-center">
          <GiFarmer className="text-yellow-800 size-14" />
          <h3 className="text-4xl font-bold text-green-500">3+</h3>
          <p className="text-gray-600">Clientes</p>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <PiFarm className="text-yellow-800 size-14" />
          <h3 className="text-4xl font-bold text-green-500">2+</h3>
          <p className="text-gray-600">Hectares Automatizados</p>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <MdAssignmentInd className="text-yellow-800 size-14" />
          <h3 className="text-4xl font-bold text-green-500">+2</h3>
          <p className="text-gray-600">Subscrições</p>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <SlEnergy className="text-yellow-800 size-14" />
          <h3 className="text-4xl font-bold text-green-500">+1.000</h3>
          <p className="text-gray-600">KiloWatts Gerados</p>
        </div>
      </div>
    </div>
  );
};
