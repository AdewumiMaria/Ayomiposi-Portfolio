import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ProjectShowcase from "@/components/projects/ProjectShowcase";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected frontend projects — ticketing, real-time communication and company landing pages.",
};

const Projects = () => {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Interfaces built for real users."
        description="Production work from SHANKS Africa and Shanks Media — dashboards, real-time chat and responsive landing pages."
      />
      <ProjectShowcase />
    </>
  );
};

export default Projects;
