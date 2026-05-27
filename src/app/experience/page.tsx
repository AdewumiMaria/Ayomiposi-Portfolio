import Aggregate from "../components/Aggregate";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Professional from "../components/Professional";

const Experience = ()=>{
    return (
        <section>
            {/* navbar */}
           <Navbar/>
           {/* Professional */}
           <Professional/>
           {/* AGGREGATE */}
           <Aggregate/>
           {/* footer */}
           <Footer/>
        </section>
    )
}
export default Experience;