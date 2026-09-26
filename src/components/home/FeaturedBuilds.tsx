import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import HoverLift from "@/components/animations/HoverLift";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import { FEATURED_PROJECTS } from "@/data/projects";

const FeaturedBuilds = () => {
  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          index="04"
          title="Featured Builds"
          subtitle="Interfaces in production"
          className="mb-0 flex-1"
        />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {FEATURED_PROJECTS.map((project, projectIndex) => (
          <Reveal key={project.id} delay={projectIndex * 0.07}>
            <HoverLift>
              <article className="theme-fade flex h-full flex-col border border-line bg-surface transition-colors hover:border-royal">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface-muted">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 92vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-ink-muted">
                    {project.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
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

      <Reveal delay={0.1}>
        <Link
          href="/projects"
          className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-royal transition-colors hover:text-royal-hover"
        >
          View all projects
          <ArrowUpRight className="size-4" />
        </Link>
      </Reveal>
    </Section>
  );
};

export default FeaturedBuilds;
