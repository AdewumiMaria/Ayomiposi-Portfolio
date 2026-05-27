import { IoIosGitNetwork } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { MdOutlineViewAgenda } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiDatabase } from "react-icons/ci";
import { CgBox } from "react-icons/cg";
const System = () => {
  return (
    <section className="bg-[#020f2e]">
      <div className="w-[90%] mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* first */}
        <div className="bg-white p-4 sm:p-3 md:p-6 border border-[#C1C6D7] md:col-span-2 self-start">
          <div className="flex justify-between items-center py-3">
            <p className="text-[#020f2e] text-xl md:text-2xl font-bold">
              Distributed Systems & Scalability
            </p>
            <IoIosGitNetwork className="text-[#020f2e] text-xl" />
          </div>
          <p className="text-[#414754] text-sm sm:text-xs md:text-sm">
            Specializing in orchestration, containerization, and microservices
            design patterns to handle high-traffic <br />
            workloads and fault-tolerant operations.
          </p>
          <div>
            {/* button */}
            <div className="grid grid-cols-6 sm:grid-cols-3 md:grid-cols-6 gap-1 md:gap-3 items-center my-3 text-[#1C1B1B]">
              <button className="bg-[#F0EDED] border-none py-2 px-1 sm:px-3 rounded text-[9px] sm:text-xs md:text-[10px] lg:text-xs">
                Kubernetes
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-3 rounded text-[9px] sm:text-xs">
                Docker
              </button>
              <button className="bg-[#F0EDED] border-none py-2 sm:px-3 rounded  text-[9px] sm:text-xs">
                Terraform
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-3 rounded text-[9px] sm:text-xs">
                AWS (EKS, Lambda)
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-3 rounded  text-[9px] sm:text-xs">
                Redis Caching
              </button>
              <button className="bg-[#F0EDED] border-none py-2 px-3 rounded  text-[9px] sm:text-xs">
                gRPC
              </button>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="bg-white p-4 sm:p-3 md:p-5 border border-[#C1C6D7]">
          <h2 className="text-[#020f2e] text-xl md:text-2xl font-bold my-3">
            Languages
          </h2>
          <p className="text-[#414754] text-sm sm:text-xs md:text-sm">
            Primary toolset for building high-performance applications.
          </p>
          {/* button */}
          <div className="text-[#1C1B1B] flex flex-col gap-3 my-3">
            <button className="bg-[#F0EDED] border-none py-2 px-1 sm::px-3 rounded text-[9px] sm:text-xs w-full flex justify-between items-center">
              TypeScript
              <GoDotFill className="text-[#0058C3]" />
            </button>
            <button className="bg-[#F0EDED] border-none py-2 px-1 sm::px-3 rounded text-[9px] sm:text-xs w-full flex justify-between items-center">
              Go (Golang)
              <GoDotFill className="text-[#0058C3]" />
            </button>
            <button className="bg-[#F0EDED] border-none py-2 px-1 sm::px-3 rounded text-[9px] sm:text-xs w-full flex justify-between items-center">
              Python
              <GoDotFill className="text-[#AEC6FF]" />
            </button>
            <button className="bg-[#F0EDED] border-none py-2 px-1 sm::px-3 rounded text-[9px] sm:text-xs w-full flex justify-between items-center">
              Rust (WASM)
              <GoDotFill className="text-[#006B5D]" />
            </button>
          </div>
        </div>
        {/* third */}
        <div className="bg-white p-4 sm:p-3 md:p-6 border border-[#C1C6D7]">
          <div className="flex gap-2 items-center">
            <MdOutlineViewAgenda className="text-[#0058C3] text-xl md:text-2xl" />
            <p className="text-[#020f2e] text-xl md:text-2xl font-bold my-3">
              Backend
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center text-[#414754] text-sm sm:text-sm md:text-sm">
              <IoIosArrowRoundForward />
              <p>Node.js (NestJS)</p>
            </div>
            <div className="flex gap-2 items-center text-[#414754] text-sm sm:text-sm md:text-sm">
              <IoIosArrowRoundForward />
              <p>Go Gin / Fiber</p>
            </div>
            <div className="flex gap-2 items-center text-[#414754] text-sm sm:text-sm md:text-sm">
              <IoIosArrowRoundForward />
              <p>PostgreSQL (Prisma/Drizzle)</p>
            </div>
             <div className="flex gap-2 items-center text-[#414754] text-sm sm:text-sm md:text-sm">
              <IoIosArrowRoundForward />
              <p>GraphQL Federation</p>
            </div>
          </div>
        </div>
        {/* forth */}
        <div className="bg-white p-4 sm:p-3 md:p-6 border border-[#C1C6D7]">
          <div className="flex gap-2 items-center">
            <CiDatabase  className="text-[#0058C3] text-xl md:text-2xl" />
            <p className="text-[#020f2e] text-xl md:text-2xl font-bold my-3">
              Data
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center text-[#414754] text-sm sm:text-sm md:text-sm">
              <IoIosArrowRoundForward />
              <p>MongoDB / NoSQL</p>
            </div>
            <div className="flex gap-2 items-center text-[#414754] text-sm sm:text-sm md:text-sm">
              <IoIosArrowRoundForward />
              <p>RabbitMQ / Kafka</p>
            </div>
            <div className="flex gap-2 items-center text-[#414754] text-sm sm:text-sm md:text-sm">
              <IoIosArrowRoundForward />
              <p>ClickHouse Analytics</p>
            </div>
             <div className="flex gap-2 items-center text-[#414754] text-sm sm:text-sm md:text-sm">
              <IoIosArrowRoundForward />
              <p>Redis Pub/Sub</p>
            </div>
          </div>
        </div>
        {/* fifth */}
        <div className="bg-white p-4 sm:p-3 md:p-6 border border-[#C1C6D7]">
          <div className="flex gap-2 items-center">
            <CgBox  className="text-[#0058C3] text-xl md:text-2xl" />
            <p className="text-[#020f2e] text-xl md:text-2xl font-bold my-3">
              Frontend
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center text-[#414754] text-sm sm:text-sm md:text-sm">
              <IoIosArrowRoundForward />
              <p>Next.js 14+ (App Router)</p>
            </div>
            <div className="flex gap-2 items-center text-[#414754] text-sm sm:text-sm md:text-sm">
              <IoIosArrowRoundForward />
              <p>React / Redux Toolkit</p>
            </div>
            <div className="flex gap-2 items-center text-[#414754] text-sm sm:text-sm md:text-sm">
              <IoIosArrowRoundForward />
              <p>Tailwind CSS / Shadcn UI</p>
            </div>
             <div className="flex gap-2 items-center text-[#414754] text-sm sm:text-sm md:text-sm">
              <IoIosArrowRoundForward />
              <p>Framer Motion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default System;
