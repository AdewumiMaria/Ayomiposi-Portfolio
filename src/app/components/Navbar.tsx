"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import Link from "next/link";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    { id: "/", name: "Home", href: "/" },
    { id: "/projects", name: "Projects", href: "/projects" },
    { id: "/experience", name: "Experiences", href: "/experience" },
    { id: "/tech-stack", name: "Tech Stacks", href: "/tech-stack" },
    { id: "/lab", name: "Lab", href: "/lab" },
  ];
  return (
    <nav className="bg-[#020f2e] text-white text-sm md:text-base py-3 font-[JetBrains Mono] relative">
      <div className="flex justify-between w-[90%] mx-auto items-center">
        <h1 className="text-base font-bold">ADJ.DEV</h1>
        {/* desktop menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`pb-1 ${
                  pathname === link.id
                    ? "text-[#7AF4DD] border-b-2 border-[#7AF4DD]"
                    : ""
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <Link href="/resume">
          <button className="hidden md:block bg-white border-none text-[#020F2E] py-1 px-3 hover:bg-[#7AF4DD] hover:text-white">
            Resume
          </button>
        </Link>

        {/* mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          <AiOutlineBars className="text-white text-2xl" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full right-0  bg-white shadow-lg py-2 w-full z-50 divide-[#f4f4f4] text-[#020F2E] font-bold text-left">
          <ul>
            {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className={`py-2 w-[90%] mx-auto cursor-pointer border-b border-b-gray-300 ${
                  pathname === link.id ? "text-[#7AF4DD]" : ""
                }`}
              >
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          <button className="block mt-2 md:hidden w-[90%] mx-auto cursor-pointer rounded text-white border-none bg-[#020F2E] py-1 px-3 text-left">
            Resume
          </button>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
