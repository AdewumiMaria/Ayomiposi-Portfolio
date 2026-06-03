import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-white">
      <div className="border-t border-[#C1C6D7]"></div>
      <div className="w-[90%] mx-auto">
        <div className="py-6 sm:flex justify-between items-center">
          <div>
            <p className="text-[#414754] font-medium text-xs">
              &copy; {new Date().getFullYear()} Abdullahi Olakunle Jimba. Built
              with architectural precision.
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <ul className="flex gap-4 text-[#414754] text-xs font-medium">
              <li>
                <a
                  href="https://github.com/Phenomenal5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jimbaabdullahio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:jimbaabdullahi9@gmail.com">Email</a>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
