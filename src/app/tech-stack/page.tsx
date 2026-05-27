import Architecture from "../components/Architecture";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Philosophies from "../components/Philosophies";
import System from "../components/System";

const TechStack = () => {
  return (
    <section className="bg-[#FCF9F8]">
      {/* navbar */}
      <Navbar />
      {/*  architecture */}
      <Architecture />
      {/* system */}
      <System />
      {/* philosophies */}
      <Philosophies />
      {/* footer */}
      <Footer/>
    </section>
  );
};
export default TechStack;
