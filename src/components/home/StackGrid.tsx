import Reveal from "@/components/animations/Reveal";
import HoverLift from "@/components/animations/HoverLift";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import { STACK_GROUPS } from "@/data/stack";

const StackGrid = () => {
  return (
    <Section>
      <SectionHeading
        index="02"
        title="The Stack"
        subtitle="Technical competencies & tooling"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {STACK_GROUPS.map((group, groupIndex) => (
          <Reveal key={group.id} delay={groupIndex * 0.07}>
            <HoverLift>
              <Card interactive className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight text-ink">
                    {group.title}
                  </h3>
                  <span className="font-mono text-xs text-ink-subtle">
                    {group.index}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-ink-muted">
                  {group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </Card>
            </HoverLift>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default StackGrid;
