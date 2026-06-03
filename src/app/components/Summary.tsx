import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlinePerson, MdOutlineTerminal } from "react-icons/md";
import { PiToolboxLight } from "react-icons/pi";

const experiences = [
  {
    role: "Software Engineer",
    company: "Shanks Media & Software Company Limited",
    period: "Oct 2025 - Present",
    highlights: [
      "Lead engineering, operations, and strategic initiatives across SaaS products.",
      "Manage full-stack development, system integration, code reviews, and development standards.",
      "Build admin dashboard features for the company's ticketing platform and mentor junior developers.",
    ],
  },
  {
    role: "Frontend Developer Team Lead",
    company: "Shanks Media & Software Company Limited",
    period: "Jun 2025 - Oct 2025",
    highlights: [
      "Designed scalable frontend architecture using Next.js and TypeScript.",
      "Led development of the company website and initiated the ticketing platform frontend.",
      "Coordinated engineering meetings, Git workflows, documentation, and task delivery.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Enoverlab Internship (Team 134)",
    period: "Jul 2025 - Oct 2025",
    highlights: [
      "Developed authentication interfaces using React and TailwindCSS.",
      "Authored README documentation to improve onboarding and collaboration.",
      "Contributed with Git workflows and team-based frontend development practices.",
    ],
  },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Prisma ORM"],
  },
  {
    title: "Data & Tools",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Redux", "GitHub"],
  },
];

const Summary = () => {
  return (
    <section className="bg-[#fcf9f8]">
      <div className="w-[90%] mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2">
          <div className="bg-white p-4 sm:p-3 md:p-8 flex flex-col gap-3 mb-3">
            <div className="flex gap-2 items-center text-[#0058C3] text-xl md:text-[24px]">
              <MdOutlinePerson />
              <h2>About Abdullahi</h2>
            </div>
            <p className="text-sm sm:text-xs md:text-sm text-[#414754] leading-6">
              Results-driven Software Engineer based in Lagos, Nigeria, focused
              on building scalable, high-performance web applications. I work
              across frontend and full-stack development with React, Next.js,
              TypeScript, backend architecture, system design, and performance
              optimization. My work combines product thinking, technical
              leadership, and clean engineering execution.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-3 md:p-8 flex flex-col gap-5">
            <div className="flex gap-2 items-center text-[#0058C3] text-xl md:text-[24px]">
              <PiToolboxLight />
              <h2>Experience</h2>
            </div>

            {experiences.map((experience) => (
              <div className="flex gap-3 items-start" key={experience.role}>
                <div className="flex flex-col items-center w-[5%] pt-1">
                  <GoDotFill className="text-[#0058C3] text-xl" />
                  <div className="border-r-2 border-[#C1C6D7] h-full min-h-24"></div>
                </div>
                <div className="w-[90%]">
                  <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h2 className="text-[#1C1B1B] text-[18px] md:text-[22px]">
                        {experience.role}
                      </h2>
                      <p className="text-[#0058C3] text-[14px] md:text-[16px]">
                        {experience.company}
                      </p>
                    </div>
                    <p className="bg-[#F0EDED] py-2 px-3 rounded text-[10px] lg:text-xs text-[#414754] w-fit">
                      {experience.period}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 mt-3">
                    {experience.highlights.map((highlight) => (
                      <p
                        className="flex gap-2 items-start text-[#414754] text-xs sm:text-[10px] md:text-sm"
                        key={highlight}
                      >
                        <GoDotFill className="text-[#0058C3] text-xs mt-1" />
                        <span>{highlight}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 flex flex-col gap-3">
          <div className="bg-white p-4 sm:p-3 md:p-5 lg:p-8">
            <div className="overflow-hidden bg-[#f0eded] aspect-square">
              <Image
                src="/images/passport.png"
                alt="Profile picture of Abdullahi Olakunle Jimba"
                width={900}
                height={900}
                className="h-full w-full object-cover object-top"
                priority
              />
            </div>
            <div className="mt-4">
              <p className="text-[#0058C3] text-xs font-semibold uppercase">
                Software Engineer
              </p>
              <h2 className="text-[#1C1B1B] text-xl md:text-2xl font-semibold mt-1">
                Abdullahi Olakunle Jimba
              </h2>
              <p className="text-[#414754] text-sm mt-2">
                Full-Stack Engineer - Engineering Lead based in Lagos, Nigeria.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-4 text-center text-[10px] sm:text-xs text-[#414754]">
                <a
                  href="mailto:jimbaabdullahi9@gmail.com"
                  className="bg-[#F0EDED] py-2 px-2 rounded hover:text-[#0058C3]"
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/jimbaabdullahio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F0EDED] py-2 px-2 rounded hover:text-[#0058C3]"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-3 md:p-5 lg:p-8">
            <div className="text-xl md:text-[22px] text-[#0058C3] flex gap-2 items-center my-1">
              <MdOutlineTerminal />
              <p>Tech Stack</p>
            </div>
            {skillGroups.map((group) => (
              <div
                className="text-[#414754] sm:text-sm text-base md:text-base mb-3"
                key={group.title}
              >
                <p>{group.title.toUpperCase()}</p>
                <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {group.skills.map((skill) => (
                    <span
                      className="bg-[#F0EDED] py-2 px-1 sm:px-3 rounded text-center text-[9px] sm:text-xs md:text-[10px] lg:text-xs text-[#414754]"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 sm:p-3 md:p-8">
            <div className="text-xl md:text-[22px] text-[#0058C3] flex gap-2 items-center">
              <LuGraduationCap />
              <p>Education</p>
            </div>
            <div className="mt-3">
              <p className="text-[#1C1B1B] text-base sm:text-sm md:text-base">
                Master&apos;s Degree in Software Engineering
              </p>
              <span className="text-[#414754] text-base sm:text-sm md:text-base">
                GoMyCode School of Technology / Woolf College
              </span>
              <p className="text-[#0058C3] text-base sm:text-sm md:text-base">
                Oct 2024 - Apr 2026
              </p>
              <div className="border-b border-[#C1C6D7] my-3"></div>
              <p className="text-[#1C1B1B] text-base sm:text-sm md:text-base">
                B.Eng. Aeronautical and Astronautical Engineering
              </p>
              <span className="text-[#414754] text-base sm:text-sm md:text-base">
                Kwara State University, Malete, Ilorin
              </span>
              <p className="text-[#0058C3] text-base sm:text-sm md:text-base">
                Aug 2018 - Oct 2023
              </p>
            </div>
          </div>

          <div className="bg-[#0070F3] p-4 sm:p-3 md:p-8 font-[Geist]">
            <div className="text-base sm:text-sm md:text-base text-white flex gap-2 items-center">
              <GoDotFill className="text-[#4ADE80]" />
              <p>CURRENT STATUS</p>
            </div>
            <p className="text-white text-[15px] sm:text-sm md:text-[15px]">
              Building full-stack products and technical teams
            </p>
            <span className="text-white text-sm sm:text-xs md:text-sm">
              Available for software engineering, frontend leadership, and
              product-focused web development opportunities.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
