import Reveal from "@/components/animations/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import { EXPERIENCES } from "@/data/experience";

const ExperienceTimeline = () => {
  return (
    <Section muted>
      <SectionHeading
        index="03"
        title="Experience"
        subtitle="Where the work has happened"
      />

      <ol className="space-y-4">
        {EXPERIENCES.map((experience, experienceIndex) => (
          <li key={experience.id}>
            <Reveal delay={experienceIndex * 0.07}>
              <article className="theme-fade group flex gap-4 border border-line bg-surface p-6 transition-colors hover:border-royal sm:gap-6">
                <span className="hidden font-mono text-sm text-ink-subtle sm:block">
                  {String(experienceIndex + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1 border-l-2 border-line pl-4 transition-colors group-hover:border-royal sm:pl-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-ink md:text-xl">
                        {experience.role}
                      </h3>
                      <p className="mt-1 text-sm text-ink-muted">
                        {experience.company}
                      </p>
                    </div>

                    <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] text-royal">
                      {experience.period}
                    </p>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-ink-muted">
                    {experience.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default ExperienceTimeline;
