const Experience = () => {
  return (
    <section className="bg-[#fcf9f8]">
      <div className="w-[90%] py-10  mx-auto">
        {/* experience section */}
        <h2 className="text-[#020f2e] font-semibold text-lg md:text-2xl ">
          <span>03</span> <span>//</span> Experience
        </h2>
        <div className="py-5">
          {/* software section */}
          <div className="flex gap-8 mb-5">
            <div className="w-[4%] sm:w-[10%]">
            <h2 className="tetx-[#414754] text-2xl ">01</h2>
            </div>
            <div className="w-[90%]">
              <div className="border-l-2 border-[#C1C6D7] px-4 py-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-[#1C1B1B] text-lg sm:text-xl md:text-2xl font-semibold">
                    Software Engineer & Team Lead
                  </h2>
                  <p className="text-[#0058C3] text-[10px] sm:text-sm">
                    Shanks Media // Current
                  </p>
                </div>
                <p className="text-[#414754] text-[10px] sm:text-xs md:text-sm my-3">
                  Architecting high-availability infrastructure and leading a
                  cross-functional team of 6 engineers. Reduced system latency
                  <br />
                  by 40% through strategic microservices decomposition and
                  caching optimization.
                </p>
                <div className="flex gap-2">
                  <p className="text-[#414754] text-[10px] sm:text-[12px]">#NodeJS</p>
                  <p className="text-[#414754] text-[10px] sm:text-[12px]">#PostgreSQL</p>
                  <p className="text-[#414754] text-[10px] sm:text-[12px]">#SystemDesign</p>
                </div>
              </div>
            </div>
          </div>
          {/* engineering section */}
          <div className="flex gap-8">
            <div className="w-[4%] sm:w-[10%]">
            <h2 className="tetx-[#414754] text-2xl pr-6">02</h2>
            </div>
            <div className="w-[90%]">
              <div className="border-l-2 border-[#C1C6D7] px-4 py-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-[#1C1B1B] text-lg sm:text-xl md:text-2xl font-semibold">
                    Senior Fullstack Engineer
                  </h2>
                  <p className="text-[#0058C3] text-[10px] sm:text-xs md:text-sm">
                   Enoverlab // 2022 - 2023
                  </p>
                </div>
                <p className="text-[#414754] text-[10px] sm:text-xs md:text-sm my-3">
                  Pioneered the development of internal automation tools and
                  optimized the primary customer-facing platform. <br />
                  Established CI/CD pipelines that cut deployment times by 50%.
                </p>
                <div className="flex gap-2">
                  <p className="text-[#414754] text-[10px] sm:text-[12px]">#React</p>
                  <p className="text-[#414754] text-[10px] sm:text-[12px]">#NextJS</p>
                  <p className="text-[#414754] text-[10px] sm:text-[12px]">#Automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
