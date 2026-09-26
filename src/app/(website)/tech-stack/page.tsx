import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import SystemGrid from "@/components/tech-stack/SystemGrid";
import Philosophies from "@/components/tech-stack/Philosophies";

export const metadata: Metadata = {
  title: "Tech Stack",
  description:
    "The frontend stack: React, Next.js, TypeScript and Tailwind CSS, with a focus on accessibility and performance.",
};

const TechStack = () => {
  return (
    <>
      <PageHeader
        eyebrow="Core competencies"
        title="The frontend toolkit, and how I use it."
        description="Component-based architecture, real-time data, secure auth flows and performance work — the layers behind a polished interface."
      />
      <SystemGrid />
      <Philosophies />
    </>
  );
};

export default TechStack;
