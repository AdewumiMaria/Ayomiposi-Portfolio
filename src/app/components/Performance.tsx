import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdAttachment, MdOutlineTerminal } from "react-icons/md";
const Perform = () => {
  return (
    <section className="bg-[#f2f9f8] font-[JetBrains Mono]">
      <div className=" w-[95%] md:w-[90%] mx-auto pt-10 pb-5">
        {/* Heading */}
        <h1 className="text-[#020f2e] text-[30px] md:text-[40px] font-bold p-0">
          Architecting high-performance <br />
          digital systems.
        </h1>
        <p className="text-[15px] font-normal text-[#414754]">
          A curated selection of engineering projects focused on scalability,
          technical precision, and <br />
          user-centric design.
        </p>
        {/* Project Cards */}

        <div className="py-3 ">
          <div className="sm:flex gap-4 my-3 items-stretch">
            {/* Ticketing platform */}
            <div className="bg-white border border-[#C1C6D7] p-3 flex-1">
              {/* heading */}
              <div className="flex justify-between ">
                <h2 className="text-2xl sm:text-[30px] font-semibold ">
                  Ticketing Platform
                </h2>
                <MdArrowOutward className="text-[#0058C3]  text-xl" />
              </div>
              <p className="text-[#414754] text-sm">
                A robust event management and distribution system designed to
                handle 50k+ concurrent users. <br />
                Built with high-availability microservices and real-time seat
                mapping capabilities.
              </p>
              {/* button */}
              <div className="grid grid-cols-5 gap-2 md:gap-3 items-center my-3">
                <button className="bg-[#F0EDED] border-none py-2 px-1 sm::px-3 rounded text-[9px] sm:text-xs">
                  TypeScript
                </button>
                <button className="bg-[#F0EDED] border-none py-2 px-3 rounded text-[9px] sm:text-xs">
                  Node.js
                </button>
                <button className="bg-[#F0EDED] border-none py-2 sm:px-3 rounded  text-[9px] sm:text-xs">
                  PostgreSQL
                </button>
                <button className="bg-[#F0EDED] border-none py-2 px-3 rounded text-[9px] sm:text-xs">
                  Redis
                </button>
                <button className="bg-[#F0EDED] border-none py-2 px-3 rounded  text-[9px] sm:text-xs">
                  Kafka
                </button>
              </div>
              <div className="mt-3">
                {/* Image */}
                <Image
                  src="/images/shankstix.png"
                  alt="Ticket Statistics"
                  width={500}
                  height={100}
                />
              </div>
            </div>
            {/* Architecture */}
            <div className="bg-[#0058C3] border border-[#0058C3] py-10  px-2 flex flex-col items-center justify-center md:flex-1 mb-3 sm:mb-0">
              <h2 className="text-white text-[22px] font-semibold">
                Architecture Philosophy
              </h2>
              <p className="text-white text-xs leading-5">
                System reliability is non-negotiable. I prioritize <br />
                observability, modular design patterns, and <br />
                rigorous automated testing across all distributed <br />
                deployments.
              </p>
              {/* list */}
              <div className="text-white mt-3 text-xs flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <IoIosCheckmarkCircleOutline /> <p>99.9% Uptime Targets</p>
                </div>
                <div className="flex gap-2 items-center">
                  <IoIosCheckmarkCircleOutline />{" "}
                  <p>Zero-Downtime Deployments</p>
                </div>
                <div className="flex gap-2 items-center">
                  <IoIosCheckmarkCircleOutline />{" "}
                  <p>Type-Safe Infrastructure</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex gap-4 my-3 items-stretch ">
            {/* E Commerce */}
            <div className="bg-white p-6 mb-3 sm:mb-0">
              {/* heading */}
              <div className="flex justify-between">
                <h2 className="text-[#020F2E] text-[22px]">
                  E-Commerce Engine
                </h2>
                <MdAttachment className="text-[#414754] text-xl" />
              </div>
              <p className="text-sm text-[#414754] ">
                A headless commerce core focusing on performance metrics.
                Optimized for <br />
                Core Web Vitals with sub-50ms server response times via edge
                computing.
              </p>
              <div className="mt-3">
                <Image
                  src="/images/E-Commerce.png"
                  alt="Ecommerce image"
                  width={460}
                  height={100}
                />
              </div>
              {/* button */}
              <div className="flex gap-3 items-center my-3">
                <button className="bg-[#F0EDED] border-none py-2 px-3 rounded text-xs">
                  Next.js
                </button>
                <button className="bg-[#F0EDED] border-none py-2 px-3 rounded text-xs">
                  GraphQL
                </button>
                <button className="bg-[#F0EDED] border-none py-2 px-3 rounded text-xs">
                  Stripe
                </button>
              </div>
              {/* case study */}
              <button className="text-[#020F2E] border border-[#727786] text-xs my-2 py-2 w-full">
                View Case Study
              </button>
            </div>
            {/* Infrawatch */}
            <div className="bg-white p-6">
              {/* heading */}
              <div className="flex justify-between">
                <h2 className="text-[#020F2E] text-[22px]">InfraWatch</h2>
                <MdOutlineTerminal className="text-[#414754] text-xl" />
              </div>
              <p className="text-sm text-[#414754] ">
                A lightweight infrastructure monitoring agent designed for
                containerized <br />
                environments. Provides instant alerting and log aggregation via
                a minimalist CLI.
              </p>
              <div className="mt-3">
                <Image
                  src="/images/Watch.png"
                  alt="Ecommerce image"
                  width={460}
                  height={100}
                />
              </div>
              {/* button */}
              <div className="flex gap-3 items-center my-3">
                <button className="bg-[#F0EDED] border-none py-2 px-3 rounded text-xs">
                  Go
                </button>
                <button className="bg-[#F0EDED] border-none py-2 px-3 rounded text-xs">
                  Docker
                </button>
                <button className="bg-[#F0EDED] border-none py-2 px-3 rounded text-xs">
                  Prometheus
                </button>
              </div>
              {/* source code */}
              <button className="text-[#020F2E] border border-[#727786] text-xs my-2 py-2 w-full">
                Source Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Perform;
