import type { StatusTone } from "@/components/ui/StatusPill";

// ─── Lab: demo and practice builds, kept apart from production work ───────────

export type LabExperiment = {
  id: string;
  name: string;
  status: string;
  tone: StatusTone;
  description: string;
  tags: readonly string[];
};

export const LAB_EXPERIMENTS: readonly LabExperiment[] = [
  {
    id: "alchefmate",
    name: "AlChefMate_Demo",
    status: "Demo",
    tone: "live",
    description:
      "A responsive recipe landing page built from reusable components and structured content sections, with polished styling across desktop and mobile.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    id: "positivus",
    name: "Positivus_Demo",
    status: "Demo",
    tone: "live",
    description:
      "A responsive business landing page — hero, services, case studies, testimonials and contact sections — composed from reusable React components.",
    tags: ["React", "Tailwind CSS", "CSS Grid"],
  },
] as const;
