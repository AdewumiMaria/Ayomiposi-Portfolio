import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ContactChannels from "@/components/contact/ContactChannels";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about frontend engineering roles and product-focused web development.",
};

const Contact = () => {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something polished."
        description="Available immediately for frontend engineering roles and product work. Email is the fastest route."
      />
      <ContactChannels />
    </>
  );
};

export default Contact;
