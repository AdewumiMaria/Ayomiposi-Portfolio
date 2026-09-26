import { Mail } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import ButtonLink from "@/components/ui/ButtonLink";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/constants/site";

// Closing call to action — shares the blueprint treatment with the hero so the
// page opens and closes on the same visual note.
const ContactCta = () => {
  return (
    <section className="theme-fade relative overflow-hidden border-t border-line bg-canvas">
      <div className="pointer-events-none absolute inset-0 blueprint" />
      <div className="pointer-events-none absolute inset-0 royal-glow" />

      <div className="relative mx-auto w-[92%] max-w-3xl py-20 text-center md:py-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-royal">
            Let&apos;s talk
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Let&apos;s build something exceptional.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ink-muted md:text-base">
            Open to frontend engineering roles and product work, with immediate
            availability. Whether it is a dashboard or a landing page, the inbox is
            the fastest route.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink external href={`mailto:${SITE_CONFIG.email}`}>
              <Mail className="size-4" />
              Start a conversation
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              All contact details
            </ButtonLink>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-subtle transition-colors hover:text-royal"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactCta;
