import Link from "next/link";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/constants/site";

const Footer = () => {
  return (
    <footer className="theme-fade border-t border-line bg-canvas">
      <div className="mx-auto flex w-[92%] max-w-6xl flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-sm font-bold tracking-[0.12em] text-ink">
            {SITE_CONFIG.shortName}
          </p>
          <p className="mt-2 text-xs text-ink-subtle">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Built with
            Next.js &amp; Tailwind CSS.
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {SOCIAL_LINKS.map((social) => (
            <li key={social.id}>
              <a
                href={social.href}
                // Only http(s) destinations open a new tab — mailto: stays in place.
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-mono text-xs uppercase tracking-[0.12em] text-ink-muted transition-colors hover:text-royal"
              >
                {social.name}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="font-mono text-xs uppercase tracking-[0.12em] text-ink-muted transition-colors hover:text-royal"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
