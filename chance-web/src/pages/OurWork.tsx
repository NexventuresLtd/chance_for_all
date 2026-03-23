import PageHero from "../components/ui/PageHero";
import ServicesGridSection from "../components/our-work/ServicesGridSection";
import DeliveryProcessSection from "../components/our-work/DeliveryProcessSection";
import CrossSubsidySection from "../components/our-work/CrossSubsidySection";

export default function OurWork() {
  return (
    <>
      <PageHero
        badge="Our Work"
        title="What We Do &"
        highlight="How We Do It"
        subtitle="An integrated, school-based program to support teenagers' emotional well-being, academic focus, and future readiness."
        badgeColor="blue"
      />
      <ServicesGridSection />
      <DeliveryProcessSection />
      <CrossSubsidySection />
    </>
  );
}
