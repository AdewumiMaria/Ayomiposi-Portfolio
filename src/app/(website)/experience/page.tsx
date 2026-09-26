import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ProfessionalJourney from "@/components/experience/ProfessionalJourney";
import AggregateImpact from "@/components/experience/AggregateImpact";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "A chronological record of frontend engineering roles, platforms shipped and the interfaces behind them.",
};

const Experience = () => {
  return (
    <>
      <PageHeader
        eyebrow="Track record"
        title="Professional journey"
        description="A chronological record of the teams, the products, and what each role actually asked for."
      />
      <ProfessionalJourney />
      <AggregateImpact />
    </>
  );
};

export default Experience;
