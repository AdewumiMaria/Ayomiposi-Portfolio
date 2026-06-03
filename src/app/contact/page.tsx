import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { MdOutlineArrowOutward } from "react-icons/md";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <section>
      <Navbar />
      <main className="bg-[#fcf9f8]">
        <div className="w-[90%] mx-auto py-10">
          <div className="bg-white p-5 sm:p-8 md:p-10">
            <p className="text-[#0058C3] text-xs font-semibold uppercase tracking-wide">
              Contact
            </p>
            <h1 className="text-[#020f2e] text-3xl md:text-5xl font-bold mt-3">
              Let&apos;s build something scalable.
            </h1>
            <p className="text-[#414754] text-sm md:text-base leading-7 mt-5 max-w-3xl">
              I&apos;m available for software engineering roles, frontend
              leadership, full-stack product development, and technical
              collaboration. The fastest way to reach me is by email.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
              <a
                href="mailto:jimbaabdullahi9@gmail.com"
                className="border border-[#C1C6D7] p-5 hover:border-[#0058C3]"
              >
                <FiMail className="text-[#0058C3] text-2xl" />
                <h2 className="text-[#1C1B1B] text-lg font-semibold mt-4">
                  Email
                </h2>
                <p className="text-[#414754] text-sm mt-2 break-words">
                  jimbaabdullahi9@gmail.com
                </p>
              </a>

              <a
                href="tel:+238107780460"
                className="border border-[#C1C6D7] p-5 hover:border-[#0058C3]"
              >
                <FiPhone className="text-[#0058C3] text-2xl" />
                <h2 className="text-[#1C1B1B] text-lg font-semibold mt-4">
                  Phone
                </h2>
                <p className="text-[#414754] text-sm mt-2 break-words">
                  +238107780460
                </p>
              </a>

              <a
                href="https://github.com/Phenomenal5"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#C1C6D7] p-5 hover:border-[#0058C3]"
              >
                <FiGithub className="text-[#0058C3] text-2xl" />
                <h2 className="text-[#1C1B1B] text-lg font-semibold mt-4">
                  GitHub
                </h2>
                <p className="text-[#414754] text-sm mt-2 flex items-center gap-1">
                  Phenomenal5 <MdOutlineArrowOutward />
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/jimbaabdullahio"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#C1C6D7] p-5 hover:border-[#0058C3]"
              >
                <FiLinkedin className="text-[#0058C3] text-2xl" />
                <h2 className="text-[#1C1B1B] text-lg font-semibold mt-4">
                  LinkedIn
                </h2>
                <p className="text-[#414754] text-sm mt-2 flex items-center gap-1">
                  jimbaabdullahio <MdOutlineArrowOutward />
                </p>
              </a>

              <div className="border border-[#C1C6D7] p-5">
                <FiMapPin className="text-[#0058C3] text-2xl" />
                <h2 className="text-[#1C1B1B] text-lg font-semibold mt-4">
                  Location
                </h2>
                <p className="text-[#414754] text-sm mt-2">
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:jimbaabdullahi9@gmail.com"
                className="bg-[#020f2e] text-white px-6 py-3 text-center hover:bg-[#005a4b]"
              >
                Send Email
              </a>
              <Link
                href="/projects"
                className="border border-[#727786] text-[#1C1B1B] px-6 py-3 text-center hover:bg-[#005a4b] hover:text-white"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default Contact;
