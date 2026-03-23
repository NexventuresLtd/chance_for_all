import PageHero from "../components/ui/PageHero";
import PricingSection from "../components/for-schools/PricingSection";
import EnrollmentProcessSection from "../components/for-schools/EnrollmentProcessSection";
import SchoolPartnershipSection from "../components/for-schools/SchoolPartnershipSection";
import ParentFaqSection from "../components/for-schools/ParentFaqSection";

export default function ForSchools() {
  return (
    <>
      <PageHero
        badge="For Schools & Parents"
        title="Enroll Your Child or"
        highlight="Partner Your School"
        subtitle="Whether you're a parent looking to enroll your child or a school administrator wanting to improve student outcomes  ,  we're here for you."
        badgeColor="blue"
      />
      <PricingSection />
      <EnrollmentProcessSection />
      <SchoolPartnershipSection />
      <ParentFaqSection />
    </>
  );
}
