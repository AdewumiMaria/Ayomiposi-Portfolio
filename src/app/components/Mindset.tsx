import { VscBeaker } from "react-icons/vsc";
const Mindset = () => {
  return (
    <section className="bg-[#020f2e]">
      <div className="w-[90%] mx-auto py-10 md:flex justify-between items-center">
        {/* mindset */}
        <div>
          <h2 className="text-white font-semibold text-lg md:text-2xl mb-3">
            <span>05</span> <span>//</span> Mindset
          </h2>
          <p className="text-white text-[12px] mt-1">SCALABILITY FIRST</p>
          <p className="text-[#969aa1] text-sm mb-3">
            Architecture designed for tomorrow's traffic, not just today's
            constraints.
          </p>
          <p className="text-white text-[12px]">CLEAN ARCHITECTURE</p>
          <p className="text-[#969aa1] text-sm mb-3">
            Maintainable, testable, and decoupled codebases that teams love to
            work in.
          </p>
          <p className="text-white text-[12px]">DATA INTEGRITY</p>
          <p className="text-[#969aa1] text-sm mb-3">
            ACID compliance and rigorous schema validation for mission-critical
            systems.
          </p>
        </div>
        {/* Lab section */}
        <div className="bg-white border border-[#C1C6D7] p-6"> 
          <div className="flex gap-1 items-center pb-4 w-full">
            <VscBeaker className="text-[#020f2e] text-xl"/>
            <h2 className="font-semibold text-2xl text-[#020f2e]">Engineering Labs</h2>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
                <p className="text-xs font-medium text-[#020f2e]">DistroDB_Node</p> 
                <button className="bg-[#EAE7E7] px-3 py-1 text-[#414754] text-[10px]">IN PROGRESS</button>
            </div>
            <p className="text-[#414754] text-xs font-medium">An experimental distributed key-value store built in Node.js for research purposes.</p>
            <div className="border-b border-[##C1C6D7] mt-4"></div>
          </div>
          <div>
            <div className="flex justify-between items-center">
                <p className="text-xs font-medium text-[#020f2e]">CloudScale_Auth</p> 
                <button className="bg-[#EAE7E7] px-3 py-1 text-[#414754] text-[10px]">UPCOMING</button>
            </div>
            <p className="text-[#414754] text-xs font-medium">A stateless authentication microservice optimized for serverless edge deployments.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Mindset;
