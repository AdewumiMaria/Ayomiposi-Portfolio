import { Send } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import ButtonLink from "@/components/ui/ButtonLink";
import Section from "@/components/ui/Section";
import { SITE_CONFIG } from "@/constants/site";

const CollaborationCta = () => {
  return (
    <Section>
      <Reveal>
        <div className="theme-fade flex flex-col gap-6 border border-line bg-surface p-6 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Want something similar?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-ink-muted">
              Need a landing page or product interface built to this standard? I am
              happy to talk it through.
            </p>
          </div>

          <ButtonLink
            external
            href={`mailto:${SITE_CONFIG.email}`}
            className="shrink-0"
          >
            Reach out
            <Send className="size-4" />
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
};

export default CollaborationCta;
