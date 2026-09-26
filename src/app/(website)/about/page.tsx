import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import AboutSummary from "@/components/about/AboutSummary";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "About",
  description: SITE_CONFIG.description,
};

const About = () => {
  return (
    <>
      <PageHeader
        eyebrow="Profile"
        title="Frontend engineer, from microbiology lab to production interfaces."
        description="The background, the roles, and the stack I use to turn designs into polished, production-ready products."
      />
      <AboutSummary />
    </>
  );
};

export default About;
