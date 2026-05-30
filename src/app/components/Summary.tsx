import { MdOutlinePerson } from "react-icons/md";
import { PiToolboxLight } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { MdOutlineTerminal } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
const Summary = () => {
  return (
    <section className="bg-[#fcf9f8]">
      <div className="w-[90%] mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* left part */}
        <div className="col-span-1 md:col-span-2">
          {/* summary */}
          <div className="bg-white p-4 sm:p-3 md:p-8 flex flex-col gap-3 mb-3">
            {/* heading */}
            <div className="flex gap-2 items-center text-[#0058C3] text-xl md:text-[24px]">
              <MdOutlinePerson />
              <h2>Professional Summary</h2>
            </div>
            <p className="text-sm sm:text-xs md:text-sm text-[#414754]">
              Highly analytical Systems Engineer and Full-Stack Architect with
              over 8 years of experience building resilient, distributed
              infrastructures. Specialized in cloud-native ecosystems,
              performance optimization, and developer tooling. Proven track
              record of leading technical teams to deliver high-availability
              systems for global-scale enterprises.
            </p>
          </div>
          {/* experience */}
          <div className="bg-white p-4 sm:p-3 md:p-8 flex flex-col gap-3">
            {/* heading */}
            <div className="flex gap-2 items-center text-[#0058C3] text-xl md:text-[24px] w-full sm:w-[95%] mx-auto">
              <PiToolboxLight />
              <h2>Experience</h2>
            </div>
            {/* lead */}
            <div className="flex gap-3 items-center ">
              {/* left */}
              <div className="flex flex-col items-center w-[5%]">
                <GoDotFill className="text-[#0058C3] text-xl" />
                <div className="border-r-2 border-[#C1C6D7] h-25"></div>
              </div>
              {/* right */}
              <div className="w-[90%]">
                {/* heading */}
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className=" text-[#1C1B1B] text-[18px] md:text-[22px]">
                      Lead Systems Engineer
                    </h2>
                    <p className=" text-[#0058C3] text-[14px] md:text-[16px]">
                      Global-Scale Systems
                    </p>
                  </div>
                  <button className="bg-[#F0EDED] border-none py-2 px-1 md:px-3 rounded text-[9px]  md:text-[10px] lg:text-xs text-[#414754]">
                    2021 - PRESENT
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="flex gap-2 items-center text-[#414754] text-xs sm:text-[10px] md:text-sm">
                    <GoDotFill className="text-[#0058C3] text-xs" />
                    <span>
                      Engineered a multi-region Kubernetes mesh handling 50k+
                      requests per second with 99.99% uptime.
                    </span>
                  </p>
                  <p className="flex gap-2 items-center text-[#414754] text-xs sm:text-[10px] md:text-sm">
                    <GoDotFill className="text-[#0058C3] text-xs" />
                    <span>
                      Reduced infrastructure costs by 35% through automated
                      resource orchestration and fine-grained auto-scaling.
                    </span>
                  </p>
                  <p className="flex gap-2 items-center text-[#414754] text-xs sm:text-[10px] md:text-sm">
                    <GoDotFill className="text-[#0058C3] text-xs" />
                    <span>
                      Mentored a cross-functional team of 12 engineers,
                      establishing CI/CD best practices and zero-trust security
                      protocols.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* developer */}
            <div className="flex gap-3 items-center mt-2 ">
              {/* left */}
              <div className="flex flex-col items-center w-[5%]">
                <GoDotFill className="text-[#0058C3] text-xl" />
                <div className="border-r-2 border-[#C1C6D7] h-25"></div>
              </div>
              {/* right */}
              <div className="w-[90%]">
                {/* heading */}
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className=" text-[#1C1B1B] text-[18px] md:text-[22px]">
                      Senior Full-Stack Developer
                    </h2>
                    <p className=" text-[#0058C3] text-[14px] md:text-[16px]">
                      InnovateTech
                    </p>
                  </div>
                  <button className="bg-[#F0EDED] border-none py-2 px-1 md:px-3 rounded text-[9px]  md:text-[10px] lg:text-xs text-[#414754]">
                    2018 - 2021
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="flex gap-2 items-center text-[#414754] text-xs sm:text-[10px] md:text-sm">
                    <GoDotFill className="text-[#0058C3] text-xs" />
                    <span>
                      Led the migration of a legacy monolithic platform to a
                      modern React/Node.js microservices architecture.
                    </span>
                  </p>
                  <p className="flex gap-2 items-center text-[#414754] text-xs sm:text-[10px] md:text-sm">
                    <GoDotFill className="text-[#0058C3] text-xs" />
                    <span>
                      Developed a custom component library used across 4
                      distinct product lines, increasing UI development speed by
                      40%.
                    </span>
                  </p>
                  <p className="flex gap-2 items-center text-[#414754] text-xs sm:text-[10px] md:text-sm">
                    <GoDotFill className="text-[#0058C3] text-xs" />
                    <span>
                      Implemented automated E2E testing using Cypress, reducing
                      production bugs by 60% within the first year.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right part */}
        <div className=" col-span-1 flex flex-col gap-3">
          {/* tech stack */}
          <div className="bg-white p-4 sm:p-3 md:p-5 lg:p-8">
            {/* heading */}
            <div className="text-xl  md:text-[22px] text-[#0058C3] flex gap-2 items-center my-1">
              <MdOutlineTerminal />
              <p>Tech Stack</p>
            </div>
            {/* frontend */}
            <div className="text-[#414754] sm:text-sm text-base md:text-base mb-2">
              <p>FRONTEND</p>
              <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2">
                <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                  React
                </button>
                <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                  Next.js
                </button>
                <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[9px] lg:text-xs text-[#414754]">
                  TypeScript
                </button>
                <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                  Tailwind CSS
                </button>
              </div>
            </div>
            {/* backend */}
            <div className="text-[#414754] sm:text-sm text-base md:text-base mb-2">
              <p>BACKEND</p>
              <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2">
                <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                  Go
                </button>
                <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                  Node.js
                </button>
                <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                  Rust
                </button>
                <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 md:px-1 lg:px-3 rounded text-[9px] sm:text-xs md:text-[9px] lg:text-xs text-[#414754]">
                  PostgreSQL
                </button>
                <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                  Redis
                </button>
              </div>
            </div>
            {/* DEVOPS */}
            <div className="text-[#414754] sm:text-sm text-base md:text-base">
              <p>DEVOPS</p>
              <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2">
                <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 md:px-1 lg:px-3 rounded text-[9px] sm:text-xs md:text-[9px] lg:text-xs text-[#414754]">
                  Kubernetes
                </button>
                <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                  Docker
                </button>
                <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                  AWS
                </button>
                <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]">
                  Terraform
                </button>
              </div>
            </div>
          </div>
          {/* Education */}
          <div className="bg-white p-4 sm:p-3 md:p-8">
            {/* heading */}
            <div className="text-xl md:text-[22px] text-[#0058C3] flex gap-2 items-center">
              <LuGraduationCap />
              <p>Education</p>
            </div>
            <div>
              <p className="text-[#1C1B1B] text-base sm:text-sm md:text-base">
                MSc in Computer Science
              </p>
              <span className="text-[#414754] text-base sm:text-sm md:text-base">
                University of Technology
              </span>
              <p className="text-[#0058C3] text-base sm:text-sm md:text-base">
                2016 — 2018
              </p>
              <div className="border-b border-[#C1C6D7] my-3"></div>
              <p className="text-[#1C1B1B] text-base sm:text-sm md:text-base">
                BSc in Software Engineering
              </p>
              <span className="text-[#414754] text-base sm:text-sm md:text-base">
                Global Institute of Science
              </span>
              <p className="text-[#0058C3] text-base sm:text-sm md:text-base">
                2012 — 2016
              </p>
            </div>
          </div>
          {/* status */}
          <div className="bg-[#0070F3] p-4 sm:p-3 md:p-8 font-[Geist]">
            {/* heading */}
            <div className="text-base sm:text-sm md:text-base text-white flex gap-2 items-center">
              <GoDotFill className="text-[#4ADE80]" />
              <p>CURRENT STATUS</p>
            </div>
            <p className="text-white text-[15px] sm:text-sm md:text-[15px]">
              Open to Strategic Leadership Roles
            </p>
            <span className="text-white text-sm sm:text-xs md:text-sm">
              Available for technical consultation or permanent positions
              globally.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Summary;
