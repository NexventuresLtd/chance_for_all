import PageHero from "../components/ui/PageHero";
import ContactFormSection from "../components/contact/ContactFormSection";
import ContactInfoSection from "../components/contact/ContactInfoSection";
import MapSection from "../components/contact/MapSection";
import ContactFaqSection from "../components/contact/ContactFaqSection";

export default function Contact() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Get in"
        highlight="Touch"
        subtitle="Partner with us, enroll your child, support vulnerable teenagers, or volunteer as a mentor in Nyamasheke District."
        badgeColor="blue"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <ContactFormSection />
          </div>
          <div>
            <ContactInfoSection />
          </div>
        </div>
      </div>

      <MapSection />
      <ContactFaqSection />
    </>
  );
}
