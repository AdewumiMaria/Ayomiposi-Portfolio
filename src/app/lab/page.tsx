import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
import LabBox from "../components/LabBox";
import Labs from "../components/Labs";
import Navbar from "../components/Navbar";

const Lab = () => {
  return (
    <section>
      {/* navbar */}
      <Navbar />
      {/* heading */}
      <Labs/>
      {/* boxes */}
      <LabBox/>
      {/* Collaboration */}
      <Collaboration/>
      {/* footer */}
      <Footer/>
    </section>
  );
};
export default Lab;
