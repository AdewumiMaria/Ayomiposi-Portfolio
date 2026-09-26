import Reveal from "@/components/animations/Reveal";
import HoverLift from "@/components/animations/HoverLift";
import Section from "@/components/ui/Section";
import StatusPill from "@/components/ui/StatusPill";
import Tag from "@/components/ui/Tag";
import { LAB_EXPERIMENTS } from "@/data/labs";

const LabGrid = () => {
  return (
    <Section muted>
      <div className="grid gap-4 sm:grid-cols-2">
        {LAB_EXPERIMENTS.map((experiment, experimentIndex) => (
          <Reveal key={experiment.id} delay={experimentIndex * 0.07}>
            <HoverLift>
              <article className="theme-fade flex h-full flex-col border border-line bg-surface p-6 transition-colors hover:border-royal md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-mono text-lg tracking-tight text-ink md:text-xl">
                    {experiment.name}
                  </h2>
                  <StatusPill tone={experiment.tone}>{experiment.status}</StatusPill>
                </div>

                <p className="mt-4 flex-1 text-sm leading-7 text-ink-muted">
                  {experiment.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                  {experiment.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </article>
            </HoverLift>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default LabGrid;
