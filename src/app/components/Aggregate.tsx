import { IoFlashOutline } from "react-icons/io5";
import { HiOutlineTrendingDown } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
const Aggregate = () => {
  return (
    <section className="bg-[#FCF9F8]">
      <div className="w-[90%] mx-auto py-10">
        <div className="border-t border-[#C1C6D7] pt-4"></div>
        <h2 className="text-[#020f2e] text-[22px] md:text-[28px] font-bold py-4">Aggregate Impact</h2>
        {/* skills */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/*Reliability  */}
          <div className="bg-[#F0EDED] border border-[#C1C6D7] p-5 sm:p-3 md:p-6 flex flex-col gap-2">
            <p className="flex items-center gap-2 text-xs text-[#727786] font-medium">
              <span className="text-[#0058C3]">
                <IoFlashOutline />
              </span>
              Reliability
            </p>
            <h1 className="text-[#020f2e] text-[28px] sm:text-[22px] md:text-[32px] font-bold">
              99.99%
            </h1>
            <p className="text-[#414754] text-sm">
              Average uptime maintained across mission- critical enterprise
              systems.
            </p>
          </div>
          {/* Efficiency */}
          <div className="bg-[#F0EDED] border border-[#C1C6D7] p-5 sm:p-3 md:p-6 flex flex-col gap-2">
            <p className="flex items-center gap-2 text-xs text-[#727786] font-medium">
              <span className="text-[#0058C3] text-sm">
                <HiOutlineTrendingDown/>
              </span>
              Efficiency
            </p>
            <h1 className="text-[#020f2e] text-[28px] sm:text-[22px] md:text-[32px] font-bold">
              -40%
            </h1>
            <p className="text-[#414754] text-sm">
              Reduction in operational infrastructure costs via optimization.
            </p>
          </div>
          {/* leadership */}
          <div className="bg-[#F0EDED] border border-[#C1C6D7] p-5 sm:p-3 md:p-6 flex flex-col gap-2">
            <p className="flex items-center gap-2 text-xs text-[#727786] font-medium">
              <span className="text-[#0058C3] text-sm">
                <IoIosPeople />
              </span>
              Leadership
            </p>
            <h1 className="text-[#020f2e] text-[28px] sm:text-[22px] md:text-[32px] font-bold">
              15+%
            </h1>
            <p className="text-[#414754] text-sm">
              Engineers mentored and successfully transitioned into senior
              roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Aggregate;
