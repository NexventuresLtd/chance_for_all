import PageHero from "../components/ui/PageHero";
import DonateSection from "../components/get-involved/DonateSection";
import CorporatePartnerSection from "../components/get-involved/CorporatePartnerSection";
import VolunteerSection from "../components/get-involved/VolunteerSection";
import FundingUsesSection from "../components/get-involved/FundingUsesSection";

export default function GetInvolved() {
  return (
    <>
      <PageHero
        badge="Get Involved"
        title="Create a Chance."
        highlight="Change a Life."
        subtitle="Donate, partner, or volunteer  ,  every action creates a ripple of change for vulnerable teenagers in Nyamasheke District, Rwanda."
        badgeColor="blue"
      />
      <DonateSection />
      <FundingUsesSection />
      <CorporatePartnerSection />
      <VolunteerSection />
    </>
  );
}
