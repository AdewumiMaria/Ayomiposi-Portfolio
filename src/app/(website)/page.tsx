import Hero from "@/components/home/Hero";
import Narrative from "@/components/home/Narrative";
import StackGrid from "@/components/home/StackGrid";
import ExperienceTimeline from "@/components/home/ExperienceTimeline";
import FeaturedBuilds from "@/components/home/FeaturedBuilds";
import Mindset from "@/components/home/Mindset";
import ContactCta from "@/components/home/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Narrative />
      <StackGrid />
      <ExperienceTimeline />
      <FeaturedBuilds />
      <Mindset />
      <ContactCta />
    </>
  );
}
