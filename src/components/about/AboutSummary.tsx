import Image from "next/image";
import { GraduationCap, Info, Mail, Terminal, UserRound } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/constants/site";
import { ADDITIONAL_INFO, EDUCATION, EXPERIENCES } from "@/data/experience";
import { STACK_GROUPS } from "@/data/stack";

// Shared by /about and /resume — the same resume content, one implementation.
const AboutSummary = () => {
  const gitHub = SOCIAL_LINKS.find((social) => social.id === "github");

  return (
    <Section muted>
      <div className="grid gap-4 lg:grid-cols-3">
        {/* ─── Main column ────────────────────────────────────────────────── */}
        <div className="space-y-4 lg:col-span-2">
          <Reveal>
            <div className="theme-fade border border-line bg-surface p-6 md:p-8">
              <div className="flex items-center gap-2 text-royal">
                <UserRound className="size-5" />
                <h2 className="font-mono text-sm uppercase tracking-[0.16em]">
                  About
                </h2>
              </div>
              <p className="mt-5 text-sm leading-7 text-ink-muted md:text-base">
                Results-driven frontend engineer based in {SITE_CONFIG.location},
                building responsive, accessible and high-performance web applications
                with HTML, CSS, JavaScript, TypeScript, React and Next.js. I turn UI/UX
                designs into clean, reusable interfaces — dynamic dashboards,
                authentication flows, API-integrated and real-time features — with
                close attention to usability, responsiveness and cross-browser
                consistency. I care about clean code, maintainable project structure
                and consistent design systems that deliver polished,
                production-ready experiences.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="theme-fade border border-line bg-surface p-6 md:p-8">
              <div className="flex items-center gap-2 text-royal">
                <Terminal className="size-5" />
                <h2 className="font-mono text-sm uppercase tracking-[0.16em]">
                  Experience
                </h2>
              </div>

              <ol className="mt-6 space-y-8">
                {EXPERIENCES.map((experience) => (
                  <li key={experience.id} className="relative pl-6">
                    {/* Timeline node, plus the rail joining it to the next entry. */}
                    <span className="absolute left-0 top-1.5 size-2.5 rounded-full bg-royal" />
                    <span className="absolute left-1 top-6 h-[calc(100%-0.5rem)] w-px bg-line" />

                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <div>
                        <h3 className="text-base font-semibold text-ink md:text-lg">
                          {experience.role}
                        </h3>
                        <p className="mt-0.5 text-sm text-royal">
                          {experience.company}
                        </p>
                      </div>
                      <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-subtle">
                        {experience.period}
                      </p>
                    </div>

                    <ul className="mt-3 space-y-2">
                      {experience.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-sm leading-6 text-ink-muted"
                        >
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-ink-subtle" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        {/* ─── Sidebar ────────────────────────────────────────────────────── */}
        <div className="space-y-4">
          <Reveal delay={0.05}>
            <div className="theme-fade border border-line bg-surface p-6">
              <div className="relative aspect-square overflow-hidden bg-surface-muted">
                <Image
                  src="/images/passport.jpeg"
                  alt={`Portrait of ${SITE_CONFIG.name}`}
                  fill
                  sizes="(max-width: 1024px) 92vw, 320px"
                  className="object-cover object-top"
                />
              </div>

              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-royal">
                {SITE_CONFIG.role}
              </p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight text-ink">
                {SITE_CONFIG.name}
              </h2>
              <p className="mt-2 text-sm leading-6 text-ink-muted">
                Frontend engineer based in {SITE_CONFIG.location}.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="theme-fade flex items-center justify-center gap-2 border border-line bg-surface-muted py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted transition-colors hover:border-royal hover:text-royal"
                >
                  <Mail className="size-3.5" />
                  Email
                </a>
                {gitHub ? (
                  <a
                    href={gitHub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-fade flex items-center justify-center border border-line bg-surface-muted py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted transition-colors hover:border-royal hover:text-royal"
                  >
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="theme-fade border border-line bg-surface p-6">
              <h2 className="font-mono text-sm uppercase tracking-[0.16em] text-royal">
                Tech stack
              </h2>

              <div className="mt-5 space-y-5">
                {STACK_GROUPS.map((group) => (
                  <div key={group.id}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-subtle">
                      {group.title}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="theme-fade border border-line bg-surface p-6">
              <div className="flex items-center gap-2 text-royal">
                <GraduationCap className="size-5" />
                <h2 className="font-mono text-sm uppercase tracking-[0.16em]">
                  Education &amp; certification
                </h2>
              </div>

              <div className="mt-5 divide-y divide-line">
                {EDUCATION.map((education) => (
                  <div key={education.id} className="py-4 first:pt-0 last:pb-0">
                    <p className="text-sm font-medium text-ink">
                      {education.qualification}
                    </p>
                    <p className="mt-1 text-sm text-ink-muted">
                      {education.institution}
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-royal">
                      {education.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.21}>
            <div className="theme-fade border border-line bg-surface p-6">
              <div className="flex items-center gap-2 text-royal">
                <Info className="size-5" />
                <h2 className="font-mono text-sm uppercase tracking-[0.16em]">
                  Additional info
                </h2>
              </div>

              <dl className="mt-5 divide-y divide-line">
                {ADDITIONAL_INFO.map((info) => (
                  <div key={info.id} className="py-3 first:pt-0 last:pb-0">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-subtle">
                      {info.label}
                    </dt>
                    <dd className="mt-1 text-sm text-ink">{info.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="border border-royal bg-royal p-6">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-on-royal" />
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-on-royal">
                  Current status
                </p>
              </div>
              <p className="mt-3 text-sm font-medium leading-6 text-on-royal">
                Building production interfaces at SHANKS Africa.
              </p>
              <p className="mt-2 text-sm leading-6 text-on-royal/80">
                Available immediately for frontend engineering roles,
                product-focused web development and also personal projects.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default AboutSummary;
