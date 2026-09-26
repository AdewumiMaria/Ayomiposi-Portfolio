import Reveal from "@/components/animations/Reveal";
import HoverLift from "@/components/animations/HoverLift";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { IMPACT_STATS } from "@/data/experience";

const AggregateImpact = () => {
  return (
    <Section>
      <SectionHeading title="Aggregate Impact" subtitle="The shape of the work" />

      <dl className="grid gap-4 sm:grid-cols-3">
        {IMPACT_STATS.map((stat, statIndex) => (
          <Reveal key={stat.id} delay={statIndex * 0.08}>
            <HoverLift>
              <Card interactive>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-royal">
                  {stat.label}
                </dt>
                <dd>
                  <p className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-ink-muted">
                    {stat.detail}
                  </p>
                </dd>
              </Card>
            </HoverLift>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
};

export default AggregateImpact;
