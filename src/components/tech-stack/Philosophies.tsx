import { Accessibility, BookOpen, Rocket, Smartphone } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import HoverLift from "@/components/animations/HoverLift";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { PHILOSOPHIES } from "@/data/stack";

const PHILOSOPHY_ICONS = {
  "clean-code": BookOpen,
  "mobile-first": Smartphone,
  accessible: Accessibility,
  "production-ready": Rocket,
} as const;

const Philosophies = () => {
  return (
    <Section>
      <SectionHeading
        title="Engineering Philosophies"
        subtitle="The rules that survive contact with a deadline"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PHILOSOPHIES.map((philosophy, philosophyIndex) => {
          const PhilosophyIcon = PHILOSOPHY_ICONS[philosophy.id];

          return (
            <Reveal key={philosophy.id} delay={philosophyIndex * 0.07}>
              <HoverLift>
                <Card interactive>
                  <PhilosophyIcon className="size-5 text-royal" />
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">
                    {philosophy.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink-muted">
                    {philosophy.detail}
                  </p>
                </Card>
              </HoverLift>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default Philosophies;
