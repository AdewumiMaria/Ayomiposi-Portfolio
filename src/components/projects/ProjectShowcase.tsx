import Image from "next/image";
import Reveal from "@/components/animations/Reveal";
import HoverLift from "@/components/animations/HoverLift";
import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { PROJECTS } from "@/data/projects";

const ProjectShowcase = () => {
  return (
    <Section muted>
      <div className="grid gap-4 md:grid-cols-2">
        {PROJECTS.map((project, projectIndex) => (
          <Reveal key={project.id} delay={projectIndex * 0.06}>
            <HoverLift>
              <article className="theme-fade flex h-full flex-col border border-line bg-surface transition-colors hover:border-royal">
                <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-surface-muted">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 92vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
                      {project.title}
                    </h2>
                    <span className="font-mono text-xs text-ink-subtle">
                      {String(projectIndex + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-7 text-ink-muted">
                    {project.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </article>
            </HoverLift>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default ProjectShowcase;
