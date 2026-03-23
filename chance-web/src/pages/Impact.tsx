import PageHero from "../components/ui/PageHero";
import ImpactStatsSection from "../components/impact/ImpactStatsSection";
import MilestonesSection from "../components/impact/MilestonesSection";
import TestimonialsSection from "../components/impact/TestimonialsSection";
import PhotoGallerySection from "../components/impact/PhotoGallerySection";
import ReportsSection from "../components/impact/ReportsSection";

export default function Impact() {
  return (
    <>
      <PageHero
        badge="Impact & Research"
        title="Evidence-Based"
        highlight="Impact"
        subtitle="Data-driven insights, community testimonials, and transparent reporting on our progress toward transforming adolescent lives in rural Rwanda."
        badgeColor="blue"
      />
      <ImpactStatsSection />
      <MilestonesSection />
      <TestimonialsSection />
      <PhotoGallerySection />
      <ReportsSection />
    </>
  );
}
