import Link from "next/link";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StatusPill from "@/components/ui/StatusPill";
import { ARCHITECTURE_PILLARS } from "@/data/stack";
import { LAB_EXPERIMENTS } from "@/data/labs";

const Mindset = () => {
  // Only a preview belongs on the home page — the full set lives on /lab.
  const previewExperiments = LAB_EXPERIMENTS.slice(0, 2);

  return (
    <Section muted>
      <SectionHeading index="05" title="Mindset" subtitle="How I approach the work" />

      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal className="space-y-4">
          {ARCHITECTURE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="theme-fade border border-line bg-surface p-6 transition-colors hover:border-royal"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-royal">
                {pillar.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-ink-muted">{pillar.detail}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.12}>
          <div className="theme-fade flex h-full flex-col border border-line bg-surface p-6">
            <div className="flex items-center gap-2 border-b border-line pb-4">
              <FlaskConical className="size-5 text-royal" />
              <h3 className="text-xl font-semibold tracking-tight text-ink">
                Demo Builds
              </h3>
            </div>

            <div className="flex-1 divide-y divide-line">
              {previewExperiments.map((experiment) => (
                <div key={experiment.id} className="py-5">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-mono text-sm text-ink">{experiment.name}</p>
                    <StatusPill tone={experiment.tone}>{experiment.status}</StatusPill>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-ink-muted">
                    {experiment.description}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/lab"
              className="mt-2 inline-flex items-center gap-2 border-t border-line pt-5 font-mono text-xs uppercase tracking-[0.14em] text-royal transition-colors hover:text-royal-hover"
            >
              Open the lab
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default Mindset;
