import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import AboutSummary from "@/components/about/AboutSummary";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${SITE_CONFIG.name} — ${SITE_CONFIG.role} based in ${SITE_CONFIG.location}.`,
};

const Resume = () => {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title={SITE_CONFIG.name}
        description={`${SITE_CONFIG.role} based in ${SITE_CONFIG.location}. Experience, education and the working stack, on one page.`}
      />
      <AboutSummary />
    </>
  );
};

export default Resume;
