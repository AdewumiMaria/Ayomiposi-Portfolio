import { TbLocationShare } from "react-icons/tb";

const Collaboration =() =>{
    return(
        <section className="bg-[#FCF9F8]">
      <div className="w-[90%] mx-auto pb-8">
              {/* collaboration */}
        <div className=" border border-[#C1C6D7] py-4 px-6 rounded-md flex justify-between items-center mt-3">
          <div>
            <h1 className="text-[#020f2e] text-2xl sm:text-xl md:text-2xl">
              Collaboration & Research
            </h1>
            <p className="text-[#414754] text-sm">
              Looking to discuss distributed systems or contribute to an
              experiment?
            </p>
          </div>
          <button className="py-2 px-4 bg-[#020f2e] border-none text-white text-sm flex gap-2 items-center rounded-md"> Reach Out <span ><TbLocationShare className="rotate-45"/></span></button>
        </div>
      </div>
        </section>
    )
}
export default Collaboration