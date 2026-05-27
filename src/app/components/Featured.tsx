import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
const Featured = () => {
  return (
    <section className="bg-white font-[JetBrains Mono] py-10">
      <div className="w-[90%] mx-auto">
        <h2 className="text-[#020f2e] font-semibold text-lg md:text-2xl ">
          <span>04</span> <span>//</span> Featured Builds
        </h2>
        <div className="flex justify-between mt-1 mb-2">
          <p className="text-[#414754] text-xs font-medium">
            ARCHITECTED SOLUTIONS
          </p>
          <p className="text-[#414754] text-xs font-medium flex items-center gap-1">
            VIEW ALL REPOS <MdOutlineArrowOutward />
          </p>
        </div>
        <div className="flex md:justify-between gap-3 flex-col sm:flex-row mt-2">
        {/* image 1 */}
        <div>
          <Image src="/images/feature1.png" alt="" width={500} height={500} />
          <h2 className="text-[#1C1B1B] font-semibold text-xl md:text-2xl my-2">
            Ticketing Platform
          </h2>
          <p className="text-[#414754] text-xs md:text-sm">
            High-concurrency ticket booking engine designed for sub-second
            latency and absolute <br />
            consistency under heavy load.
          </p>
          <div className="flex gap-2 py-2">
            <p className="text-[#006B5D] text-[12px]">#TypeScript</p>
            <p className="text-[#006B5D] text-[12px]">#Redis</p>
            <p className="text-[#006B5D] text-[12px]">#PostgreSQL</p>
          </div>
        </div>
        {/* Image 2 */}
        <div>
          <Image src="/images/feature 2.png" alt="commerce image" width={500} height={500} />
          <h2 className="text-[#1C1B1B] font-semibold text-xl md:text-2xl my-2">
            E-Commerce Platform
          </h2>
          <p className="text-[#414754] text-xs md:text-sm">
            A scalable headless commerce solution with custom inventory
            management and multi- <br />
            vendor support.
          </p>
          <div className="flex gap-2 py-2">
            <p className="text-[#006B5D] text-[12px]">#NextJS</p>
            <p className="text-[#006B5D] text-[12px]">#Stripe</p>
            <p className="text-[#006B5D] text-[12px]">#NodeJS</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
export default Featured;
