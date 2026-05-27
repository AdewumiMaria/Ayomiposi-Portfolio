import { MdOutlineTerminal } from "react-icons/md";

const Architecture = () => {
  return (
    <section>
      <div className="w-[90%] mx-auto py-10">
        <div className="flex gap-2 items-center bg-[#F6F3F2] text-[#414754] text-xs px-3 py-1 border border-[#C1C6D7] my-3 w-max">
          <MdOutlineTerminal className="text-[#0058C3] text-sm" />
          <p>CORE COMPETENCIES</p>
        </div>
        <h1 className="text-[#020f2e] text-[28px] sm:text-2xl md:text-[36px] mb-2 font-bold">
          System Architecture & Technical <br />
          Maturity
        </h1>
        <p className="text-[#414754] text-sm md:text-base">
          A multi-layered engineering stack built for extreme reliability,
          horizontal scalability, and low-latency <br />
          performance. Focused on cloud-native patterns and strict type safety.
        </p>
        
      </div>
    </section>
  );
};
export default Architecture;
