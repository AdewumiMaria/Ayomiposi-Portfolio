import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import LabGrid from "@/components/lab/LabGrid";
import CollaborationCta from "@/components/lab/CollaborationCta";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Demo and practice builds — responsive landing pages built with React and Tailwind CSS.",
};

const Lab = () => {
  return (
    <>
      <PageHeader
        eyebrow="Lab"
        title="Demos and practice builds."
        description="Landing pages built outside production work — where I sharpen layout, component design and responsive detail."
      />
      <LabGrid />
      <CollaborationCta />
    </>
  );
};

export default Lab;
