
import { LuText } from "react-icons/lu";
import { BiLoaderCircle } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";
import { TbSettingsCode } from "react-icons/tb";
const Philosophies = () => {
  return (
    <section className="bg-[#FCF9F8]">
      <div className="w-[90%] mx-auto py-10">
        <div className="border-t border-[#C1C6D7] pt-4"></div>
        {/* heading */}
        <h2 className="text-[#020f2e] text-[22px] md:text-[28px] font-bold py-4 text-center">
          Engineering Philosophies
        </h2>
        {/* skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/*Test driven  */}
          <div className="bg-white border border-[#C1C6D7] p-5 sm:p-3 md:p-6 flex flex-col gap-2">
            <p className="text-[#0058C3] text-lg font-medium">
              < LuText />
            </p>
            <p className="text-[#020f2e] text-[18px] sm:text-[15px] md:text-[18px] font-bold">
              Test-Driven Dev
            </p>
            <p className="text-[#414754] text-sm">
              Unit and e2e coverage from the first line of code.
            </p>
          </div>
          {/*  Immutable Infra*/}
          <div className="bg-white border border-[#C1C6D7] p-5 sm:p-3 md:p-6 flex flex-col gap-2">
            <p className="text-[#0058C3] text-lg font-medium">
              <BiLoaderCircle />
            </p>
            <p className="text-[#020f2e] text-[18px] sm:text-[15px] md:text-[18px] font-bold">
              Immutable Infra
            </p>
            <p className="text-[#414754] text-sm">
              Infrastructure as Code ensuring zero configuration drift.
            </p>
          </div>
          {/* Security-First*/}
          <div className="bg-white border border-[#C1C6D7] p-5 sm:p-3 md:p-6 flex flex-col gap-2">
            <p className="text-[#0058C3] text-lg font-medium">
              <MdOutlineSecurity />
            </p>
            <p className="text-[#020f2e] text-[18px] sm:text-[15px] md:text-[18px] font-bold">
              Security-First
            </p>
            <p className="text-[#414754] text-sm">
              Zero-trust principles and encrypted-at- rest data handling.
            </p>
          </div>
          {/* Agile & Modular */}
          <div className="bg-white border border-[#C1C6D7] p-5 sm:p-3 md:p-6 flex flex-col gap-2">
            <p className="text-[#0058C3] text-lg font-medium">
              <TbSettingsCode />
            </p>
            <p className="text-[#020f2e] text-[18px] sm:text-[15px] md:text-[18px] font-bold">
              Agile & Modular
            </p>
            <p className="text-[#414754] text-sm">
              Decomposition of complex logic into atomic modules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Philosophies;
