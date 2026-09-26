import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { EXPERIENCES } from "@/data/experience";

const ProfessionalJourney = () => {
  return (
    <Section muted>
      <ol className="space-y-4">
        {EXPERIENCES.map((experience, experienceIndex) => (
          <li key={experience.id}>
            <Reveal delay={experienceIndex * 0.07}>
              <article className="theme-fade grid gap-6 border border-line bg-surface p-6 transition-colors hover:border-royal md:grid-cols-[180px_1fr] md:p-8">
                <div className="flex flex-row items-center gap-3 md:flex-col md:items-start md:gap-2">
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-royal">
                    {experience.period}
                  </p>
                  {experience.isCurrent ? (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-signal">
                      <span className="size-1.5 rounded-full bg-signal" />
                      Current
                    </span>
                  ) : null}
                  <span className="ml-auto font-mono text-2xl text-ink-subtle md:ml-0 md:mt-auto">
                    {String(experienceIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="min-w-0 border-t border-line pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                  <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
                    {experience.role}
                  </h2>
                  <p className="mt-1 text-sm text-royal">{experience.company}</p>

                  <p className="mt-4 text-sm leading-7 text-ink-muted">
                    {experience.summary}
                  </p>

                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-subtle">
                    Core impact
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-6 text-ink-muted"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-royal" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
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

export default ProfessionalJourney;
