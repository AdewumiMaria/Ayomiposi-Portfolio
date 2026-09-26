import Reveal from "@/components/animations/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const Narrative = () => {
  return (
    <Section muted>
      <SectionHeading index="01" title="Narrative" subtitle="How I got here" />

      <div className="grid gap-8 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <p className="text-sm leading-7 text-ink-muted md:text-base">
            I started out in the lab with a degree in Microbiology, and brought that
            habit of careful observation into software. A frontend bootcamp at
            Arestechub turned curiosity into craft — building responsive landing
            pages from a blank brief, testing them on every screen I could find, and
            learning to work through code review in a team.
          </p>
          <p className="mt-5 text-sm leading-7 text-ink-muted md:text-base">
            Today I build production interfaces at SHANKS Africa: the public site and
            admin dashboard of a live ticketing platform, and the real-time chat and
            staff dashboard of an internal communication tool. The work that matters
            most is the part users never notice — consistent components, clear
            feedback in every state, and pages that stay fast on a slow network.
          </p>
        </Reveal>

        <Reveal className="md:col-span-2" delay={0.12}>
          <div className="theme-fade border-l-2 border-royal bg-surface p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-royal">
              Working principle
            </p>
            <p className="mt-4 text-sm leading-7 text-ink">
              Design every state, not just the happy path. Loading, empty and error
              screens are where users decide whether to trust a product.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default Narrative;
