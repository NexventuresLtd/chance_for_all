import { Handshake, Check, Globe } from "lucide-react";
import { whatsappMsg, PICSUM } from "../../lib/constants";

const WHATSAPP_PARTNER = whatsappMsg(
  "Hello! Our organization is interested in a corporate partnership with CHANCE For ALL. Please tell me more."
);

const benefits = [
  "Formal MoU-based partnership with clear accountability",
  "Direct alignment with SDG 3 (Health) and SDG 4 (Education)",
  "Corporate Social Responsibility (CSR) reporting support",
  "Co-branding opportunities in program materials",
  "Annual impact reports for your stakeholders",
  "Naming rights for sponsored programs or student cohorts",
];

const grantPartners = [
  { org: "UNICEF Rwanda", focus: "Child well-being, protection, and education programs" },
  { org: "Save the Children", focus: "Youth development, education, and poverty programs" },
  { org: "MIGEPROF", focus: "Child protection and youth empowerment" },
  { org: "African Development Foundation", focus: "Youth-led social enterprises in rural communities" },
  { org: "USAID Rwanda", focus: "Education, youth empowerment, and mental health" },
  { org: "Corporate Sponsors", focus: "CSR programs focused on education and community impact" },
];

export default function CorporatePartnerSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-5">
              Corporate Partnership
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Partner With Us to Scale Impact
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are looking for partners in education, finance, and corporate responsibility to
              help us scale. Let's work together to build a resilient youth and transform rural
              Rwanda's educational landscape.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-gray-600 text-sm">{b}</span>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_PARTNER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-md"
            >
              <Handshake className="w-5 h-5" />
              Become a Partner
            </a>
          </div>

          {/* Grant partners */}
          <div>
            <div className="relative h-52 rounded-3xl overflow-hidden bg-blue-100 mb-6">
              <img
                src={PICSUM("corporate-partnership-meeting", 600, 300)}
                alt="Corporate partnership"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/25" />
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600" />
                Grant Opportunities We Pursue
              </h3>
              <p className="text-gray-500 text-xs mb-5">
                We actively pursue partnerships with foundations aligned to our mission.
              </p>
              <div className="space-y-3">
                {grantPartners.map((g) => (
                  <div key={g.org} className="flex gap-3 items-start">
                    <Check className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{g.org}</div>
                      <div className="text-xs text-gray-500">{g.focus}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
