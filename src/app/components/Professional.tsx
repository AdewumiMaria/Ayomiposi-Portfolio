import Image from "next/image";
import { PiLock } from "react-icons/pi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineTerminal } from "react-icons/md";
const Professional = () => {
  return (
    <section className="bg-[#FCF9F8]">
      <div className="w-[90%] mx-auto py-10">
        <h1 className="text-[#020f2e] text-2xl sm:text-[32px] font-bold">
          Professional Journey
        </h1>
        <p className="text-[#414754] text-xs sm:text-sm my-3">
          A chronological record of technical leadership, system architecture,
          and impactful <br />
          engineering solutions across high-growth platforms.
        </p>
        {/* full stack */}
        <div className="flex justify-between py-6 items-center">
          <div className="flex flex-col items-center gap-2">
            <p className="text-[#727786] text-[9px] sm:text-xs">JAN 2022 - PRESENT</p>
            <div className="border-l h-20 border-[#C1C6D7]"></div>
            <div className="w-8 flex justify-center items-center h-8 rounded-2xl bg-[#D8E2FF] border border-[#FCF9F8] text-[#0058C3]">
              <PiLock />
            </div>
            <div className="border-l h-20 border-[#C1C6D7]"></div>
          </div>
          <div className="bg-[#F6F3F2] p-3 sm:p-6 w-[85%]">
            <div className="flex justify-between">
              <div>
                <h2 className="text-lg sm:text-xl md:text-[22px] text-[#020f2e] font-semibold">
                  Senior Full-Stack Engineer
                </h2>
                <p className="text-[#0058C3] text-xs sm:text-sm">
                  Shanks Media
                </p>
              </div>
              <div>
                <Image
                  src="/images/shanks3.png"
                  alt="shanks logo"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <p className="text-[#727786] text-xs sm:text-sm my-2">
              CORE IMPACT
            </p>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                <IoIosCheckmarkCircleOutline className="text-[#0058C3]" />
                <p className="text-[#414754] text-xs sm:text-sm">
                  Architected a distributed video processing pipeline that
                  reduced latency by 45% for over 2 million monthly active
                  users.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <IoIosCheckmarkCircleOutline className="text-[#0058C3]" />
                <p className="text-[#414754]  text-xs sm:text-sm">
                  Spearheaded the migration from a monolithic architecture to
                  microservices, improving deployment frequency by 300%.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <IoIosCheckmarkCircleOutline className="text-[#0058C3]" />
                <p className="text-[#414754] text-xs sm:text-sm">
                  Developed a proprietary caching strategy that decreased
                  database load by 60% during peak traffic events.
                </p>
              </div>
            </div>
            <div className="flex gap-2 md:gap-3 items-center my-3">
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm::px-3 rounded text-[9px] sm:text-xs">
                Node.js
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-3 rounded text-[9px] sm:text-xs">
                TypeScript
              </button>
              <button className="bg-[#F0EDED] border-none py-2 sm:px-3 rounded  text-[9px] sm:text-xs">
                AWS Lambda
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-3 rounded text-[9px] sm:text-xs">
                Redis
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-3 rounded  text-[9px] sm:text-xs">
                React
              </button>
            </div>
          </div>
        </div>
        {/* software engineering */}
        <div className="flex justify-between py-6 items-center">
          <div className="flex flex-col items-center gap-2">
            <p className="text-[#727786] text-[9px] sm:text-xs">MAR 2020 - DEC 2021</p>
            <div className="border-l h-20 border-[#C1C6D7]"></div>
            <div className="w-8 flex justify-center items-center h-8 rounded-2xl bg-[#D8E2FF] border border-[#FCF9F8] text-[#0058C3]">
              <MdOutlineTerminal />
            </div>
            <div className="border-l h-20 border-[#C1C6D7]"></div>
          </div>
          <div className="bg-[#F6F3F2] p-3 sm:p-6 w-[85%]">
            <div className="flex justify-between">
              <div>
                <h2 className="text-lg sm:text-xl md:text-[22px] text-[#020f2e] font-semibold">
                 Software Engineering Lead
                </h2>
                <p className="text-[#0058C3] text-xs sm:text-sm">
                  Enoverlab
                </p>
              </div>
              <div>
                <Image
                  src="/images/shanks3.png"
                  alt="shanks logo"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <p className="text-[#727786] text-xs sm:text-sm my-2">
              CORE IMPACT
            </p>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                <IoIosCheckmarkCircleOutline className="text-[#0058C3]" />
                <p className="text-[#414754] text-xs sm:text-sm">
                  Engineered a scalable Learning Management System (LMS) serving 50k+ students with integrated real-time collaboration tools.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <IoIosCheckmarkCircleOutline className="text-[#0058C3]" />
                <p className="text-[#414754]  text-xs sm:text-sm">
                  Implemented a CI/CD pipeline that reduced production bugs by 35% through automated integration testing.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <IoIosCheckmarkCircleOutline className="text-[#0058C3]" />
                <p className="text-[#414754] text-xs sm:text-sm">
                  Mentored a team of 8 junior and mid-level developers, establishing a culture of clean code and documentation.
                </p>
              </div>
            </div>
            <div className="flex gap-2 md:gap-3 items-center my-3">
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm::px-3 rounded text-[9px] sm:text-xs">
                Python
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-3 rounded text-[9px] sm:text-xs">
                Django
              </button>
              <button className="bg-[#F0EDED] border-none py-2 sm:px-3 rounded  text-[9px] sm:text-xs">
               PostgreSQL
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-3 rounded text-[9px] sm:text-xs">
                Docker
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-3 rounded  text-[9px] sm:text-xs">
                Vue.js
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Professional;
