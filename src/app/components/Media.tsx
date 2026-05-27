import { CiMail } from "react-icons/ci";
const Media = () => {
  return (
    <section className="bg-[#F6F3F2]">
      <div className="w-[90%] mx-auto py-10">
        
<h2 className="text-[#020f2e] text-2xl md:text-[30px] font-semibold text-center my-4">Let's build something exceptional.</h2>
<p className="text-[#414754] text-xs text-center mb-6">Currently open to leadership roles or high-impact engineering challenges. Whether it's a technical audit <br />
or a ground-up build, let's talk.</p>

<button className="text-white bg-[#020f2e] border-none py-2 px-3 flex gap-2 items-center text-sm mx-auto"> <CiMail /> <span>START A CONVERSATION</span></button>
<div className="flex gap-3 items-center justify-center my-5">
    <p className="text-sm text-[#414754] font-medium"><a href="" target="_blank" rel="noopener noreferrer">LINKEDIN</a></p>
    <p className="text-sm text-[#414754] font-medium"><a href="" target="_blank" rel="noopener noreferrer">GITHUB</a></p>
    <p className="text-sm text-[#414754] font-medium"><a href="" target="_blank" rel="noopener noreferrer">TWITTER</a></p>
</div>
      </div>
    </section>
  );
};
export default Media;
