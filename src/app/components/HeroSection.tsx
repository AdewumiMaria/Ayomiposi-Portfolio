import { GoDotFill } from "react-icons/go";
import { IoIosCode } from "react-icons/io";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className=" font-[JetBrains Mono]">
      <div className="bg-[url('/images/hero.png')] relative bg-cover bg-center md:h-[80vh] w-[95%] md:w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between px-3">
        <div className=" mt-3 sm:mt-0">
          {/* Availabilty section */}
          <div className="flex gap-1 text-[#006B5D] text-sm items-center capitalize font-medium px-3">
            <GoDotFill />
            <p>Available for hire</p>
          </div>
          <h1 className="text-[#020f2e] font-bold text-4xl px-3 mt-6">
            Building Scalable <br /> Products from <br /> Architecture to <br />
            Deployment
          </h1>
          <p className="px-3 text-sm text-[#414754] mt-8">
            Specializing in hi gh-performance full-stack engineering,
            distributed <br /> systems, and <br /> clean architectural patterns
            that scale with business needs.
          </p>
          <div className="px-3 mt-6 flex gap-3 items-center">
            <button className="bg-[#020f2e] text-white px-6 py-3 hover:bg-[#005a4b] border-none w-40">
              View Projects
            </button>
            <button className="bg-transparent border border-[#727786] text-[#1C1B1B] text-sm flex gap-1 items-center justify-center hover:bg-[#005a4b] px-6 py-3 hover:text-white w-40 font-medium"> <IoIosCode className="text-lg" /> GitHub</button>
          </div>
        </div>
        <div className="mt-3 sm:mt-0">
            <Image src ="/images/heroright.png" alt ="image of code example" width={400} height={400}/>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
