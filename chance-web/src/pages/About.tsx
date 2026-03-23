import PageHero from "../components/ui/PageHero";
import MissionVisionSection from "../components/about/MissionVisionSection";
import CoreValuesSection from "../components/about/CoreValuesSection";
import FounderTeamSection from "../components/about/FounderTeamSection";
import PartnersSection from "../components/about/PartnersSection";
import LegalComplianceSection from "../components/about/LegalComplianceSection";
import StrategicObjectivesSection from "../components/about/StrategicObjectivesSection";

export default function About() {
  return (
    <>
      <PageHero
        badge="Our Story"
        title="Who We Are &"
        highlight="Why We Exist"
        subtitle="Addressing the gap in mental health support, mentorship, and career readiness for secondary school students in rural Rwanda."
        badgeColor="blue"
      />
      <MissionVisionSection />
      <CoreValuesSection />
      <FounderTeamSection />
      <PartnersSection />
      <LegalComplianceSection />
      <StrategicObjectivesSection />
    </>
  );
}
