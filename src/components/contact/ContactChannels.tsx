import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import HoverLift from "@/components/animations/HoverLift";
import { GithubIcon } from "@/components/ui/BrandIcons";
import ButtonLink from "@/components/ui/ButtonLink";
import Section from "@/components/ui/Section";
import { SITE_CONFIG } from "@/constants/site";

// NOTE: The old page hardcoded "+238107780460" — a malformed number, since Nigeria
// is +234. The dialling code now comes from SITE_CONFIG so there is one copy to fix.
const CONTACT_CHANNELS = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
  },
  {
    id: "github",
    icon: GithubIcon,
    label: "GitHub",
    value: SITE_CONFIG.githubHandle,
    href: SITE_CONFIG.githubUrl,
  },
  {
    id: "location",
    icon: MapPin,
    label: "Location",
    value: SITE_CONFIG.location,
    href: null,
  },
] as const;

const ContactChannels = () => {
  return (
    <Section muted>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CONTACT_CHANNELS.map((channel, channelIndex) => {
          const ChannelIcon = channel.icon;
          const isExternal = channel.href?.startsWith("http") ?? false;

          const content = (
            <div className="theme-fade flex h-full flex-col border border-line bg-surface p-6 transition-colors hover:border-royal">
              <ChannelIcon className="size-5 text-royal" />
              <h2 className="mt-4 text-base font-semibold tracking-tight text-ink">
                {channel.label}
              </h2>
              <p className="mt-2 flex items-center gap-1 break-all text-sm text-ink-muted">
                {channel.value}
                {isExternal ? <ArrowUpRight className="size-3.5 shrink-0" /> : null}
              </p>
            </div>
          );

          return (
            <Reveal key={channel.id} delay={channelIndex * 0.06}>
              <HoverLift>
                {channel.href ? (
                  <a
                    href={channel.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="block h-full"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </HoverLift>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink external href={`mailto:${SITE_CONFIG.email}`}>
            <Mail className="size-4" />
            Send an email
          </ButtonLink>
          <ButtonLink href="/projects" variant="outline">
            View projects
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
};

export default ContactChannels;
