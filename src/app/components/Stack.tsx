import { PiCopySimpleBold } from "react-icons/pi";
import { MdArchitecture } from "react-icons/md";
import { LuCircleCheck } from "react-icons/lu";
import { BsDatabase } from "react-icons/bs";
import { PiToolbox } from "react-icons/pi";
const Stack = () => {
  return (
    <section className="bg-[#F6F3F2] font-[JetBrains Mono]">
      <div className="w-[90%] py-10  mx-auto">
        <div>
          <h2 className="text-[#020f2e] font-semibold text-lg md:text-2xl ">
            <span>02</span> <span>//</span> The Stack
          </h2>
          <p className="text-[#414754] text-[12px]">
            TECHNICAL COMPETENCIES & TOOLING
          </p>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* first box */}
            <div className="bg-white px-3 sm:px-4 lg:px-8 py-6 sm:col-span-2 col-span-1">
              <div className="flex justify-between my-2">
                {/* first box */}
                <PiCopySimpleBold className="-rotate-230 text-xl" />
                <p className="text-[#414754] text-[12px] font-medium">01</p>
              </div>
              <div className="flex gap-3 sm:gap-8 justify-items-start">
                {/* Language section */}
                <div className="mt-3">
                  <h2 className="text-[#1C1B1B] font-semibold text-xl md:text-2xl">
                    Languages
                  </h2>
                  {/* button section */}
                  <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 lg:gap-3 mt-3">
                    <button className="bg-white text-[#1C1B1B] text-[9px] sm:text-[12px] px-1 sm:px-2 py-1 border border-[#C1C6D7] font-medium">
                      JavaSript
                    </button>
                    <button className="bg-white text-[#1C1B1B] text-[9px] sm:text-[12px] px-1 sm:px-2 py-1 border border-[#C1C6D7] font-medium">
                      TypeScript
                    </button>
                    <button className="bg-white text-[#1C1B1B] text-[9px] sm:text-[12px] px-1 sm:px-2 py-1 border border-[#C1C6D7] font-medium">
                      Python
                    </button>
                  </div>
                </div>
                {/* Frontend section */}
                <div className="mt-3">
                  <h2 className="text-[#1C1B1B] font-semibold text-xl md:text-2xl">
                    Frontend
                  </h2>
                  {/* button section */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                    <button className="bg-white text-[#1C1B1B] text-[9px] sm:text-[12px] px-1 sm:px-2 py-1 border border-[#C1C6D7] font-medium">
                      React.Js
                    </button>
                    <button className="bg-white text-[#1C1B1B] text-[9px] sm:text-[12px] px-1 sm:px-2 py-1 border border-[#C1C6D7] font-medium">
                      
                      Next.Js
                    </button>
                    <button className="bg-white text-[#1C1B1B] text-[9px] sm:text-[12px] px-1 sm:px-2 py-1 border border-[#C1C6D7] font-medium">
                 
                      Tailwind CSS
                    </button>
                    <button className="bg-white text-[#1C1B1B] text-[9px] sm:text-[12px] px-1 sm:px-2 py-1 border border-[#C1C6D7] font-medium">
                      Redux
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* second box */}
            <div className="bg-white p-5 md:p-8 col-span-1">
              <div className="flex justify-between">
                <MdArchitecture className="text-xl" />
                <p className="text-[#414754] text-[12px] font-medium">02</p>
              </div>
              <div>
                <h2 className="text-[#1C1B1B] text-2xl font-semibold my-3">
                  Architecture
                </h2>
                <p className="text-xs sm:text-sm text-[#414754] flex gap-1 items-center">
                  <span className="text-[#006B5D]">
                    <LuCircleCheck />
                  </span>
                  System Design
                </p>
                <p className="text-[#414754] text-xs sm:text-sm my-3 flex gap-1 items-center">
                  <span className="text-[#006B5D]">
                    <LuCircleCheck />
                  </span>
                  Design Patterns
                </p>
                <p className="text-xs sm:text-sm text-[#414754] flex gap-1 items-center">
                  <span className="text-[#006B5D] ">
                    <LuCircleCheck />
                  </span>
                  Scalable Systems
                </p>
              </div>
            </div>
            {/* third box */}
            <div className="bg-white p-3 lg:p-8 col-span-1">
              <div className="flex justify-between">
                <BsDatabase className="text-xl" />
                <p className="text-[#414754] text-[12px] font-medium">03</p>
              </div>
              <div>
                <h2 className="text-[#1C1B1B] text-2xl font-semibold my-3">
                  Data Systems
                </h2>
                <div className="grid grid-cols-3 gap-3 lg:gap-6">
                  <button className="bg-white text-[#1C1B1B] text-[10px] px-2 py-1 border border-[#C1C6D7] font-medium">
                    Node.Js
                  </button>
                  <button className="bg-white text-[#1C1B1B] sm:text-[8px] md:text-[10px] px-1 lg:px-2 py-1 border border-[#C1C6D7] font-medium">
                    PostgreSQL
                  </button>
                  <button className="bg-white text-[#1C1B1B] text-[10px] px-2 py-1 border border-[#C1C6D7] font-medium">
                    Prisma
                  </button>
                  <button className="bg-white text-[#1C1B1B] text-[10px] px-2 py-1 border border-[#C1C6D7] font-medium">
                    Redis
                  </button>
                  <button className="bg-white text-[#1C1B1B] text-[10px] px-2 py-1 border border-[#C1C6D7] font-medium">
                    MongoDB
                  </button>
                </div>
              </div>
            </div>
            {/* fourth box */}
            <div className="bg-white p-3 md:p-5 lg:p-8 col-span-1 sm:col-span-2">
              <div className="flex justify-between">
                <PiToolbox className="text-xl" />
                <p className="text-[#414754] text-[12px] font-medium">04</p>
              </div>
              <div>
                <div className="flex lg:justify-between sm:gap-2 justify-between items-center mt-3">
                  {/* first */}
                  <div className="flex-1">
                    <h2 className="text-[#1C1B1B] text-2xl font-semibold my-3">
                      Tools
                    </h2>
                    <p className="text-[#414754] text-xs">
                      Standardized workflow for continuous integration <br />
                      and delivery.
                    </p>

                    <div className="grid grid-cols-3 gap-3 lg:gap-6 mt-3 flex-1">
                      <button className="bg-white text-[#1C1B1B] text-[10px] px-2 py-1 border border-[#C1C6D7] font-medium">
                        Git / GitHub
                      </button>
                      <button className="bg-white text-[#1C1B1B] text-[10px] px-2 py-1 border border-[#C1C6D7] font-medium">
                        Agile / Scrum
                      </button>
                      <button className="bg-white text-[#1C1B1B] text-[10px] px-2 py-1 border border-[#C1C6D7] font-medium">
                        Docker
                      </button>
                    </div>
                  </div>
                  {/* second */}
                  <div className="flex gap-1 items-center flex-1 ">
                    <div className="border-b-2 border-[#C1C6D7] w-8 lg:w-15"></div>
                    <p className="text-[10px] text-[#0058C3]">AUTOMATED FLOW</p>
                    <div className="border-b-2 border-[#C1C6D7] w-8 lg:w-15"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stack;
