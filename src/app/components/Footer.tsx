const Footer =() =>{
    return(
        <section className="bg-white">
    <div className="border-t border-[#C1C6D7]"></div>
<div className="w-[90%] mx-auto">
    <div  className="py-6 sm:flex justify-between items-center">
<div>
    <p className="text-[#414754] font-medium text-xs">&copy; {new Date().getFullYear()} Abdullahi Olakunle Jimba. Built with architectural precision.</p>
</div>
<div className="mt-4 sm:mt-0">
    <ul className="flex gap-4 text-[#414754] text-xs font-medium">
        <li><a href="" target="_blank" rel="noopener noreferrer">Github</a></li>
     <li><a href="" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      <li><a href="" target="_blank" rel="noopener noreferrer">Twitter</a></li>
       <li><a href="" target="_blank" rel="noopener noreferrer">Email</a></li>
    </ul>
</div>
</div>
</div>
        </section>
    )
}
export default Footer