import { Check, ShieldCheck } from "lucide-react";

const permits = [
  {
    label: "RDB Registration",
    desc: "Legal registration through the Rwanda Development Board as a social enterprise / non-profit initiative.",
  },
  {
    label: "Child Protection Compliance",
    desc: "Full adherence to national child protection policies and education regulations set by MINEDUC.",
  },
  {
    label: "School Authorizations",
    desc: "Formal approval from each partner school to conduct mentorship sessions and workshops on their premises.",
  },
];

export default function LegalComplianceSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-5">
              Legal &amp; Compliance
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Registered. Compliant. Trusted.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Chance for All operates with full transparency and in compliance with all Rwandan
              national regulations. We are committed to child safeguarding, ethical program delivery,
              and institutional accountability.
            </p>

            <div className="space-y-5">
              {permits.map((p) => (
                <div key={p.label} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{p.label}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-7">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-blue-900 text-lg mb-3">Official Statement</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                "Registered with the Rwanda Development Board (RDB). Fully compliant with national
                child protection policies and the Ministry of Education's guidelines for
                school-based programs."
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
              <h4 className="font-bold text-amber-800 mb-3">SDG Alignment</h4>
              <div className="space-y-2 text-sm text-amber-700">
                <div className="flex gap-2 items-center">
                  <Check className="w-4 h-4 shrink-0" />
                  SDG 3  ,  Good Health &amp; Well-being
                </div>
                <div className="flex gap-2 items-center">
                  <Check className="w-4 h-4 shrink-0" />
                  SDG 4  ,  Quality Education
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-1">Chancelline Niyotugendana</h4>
              <div className="text-blue-600 text-sm mb-0.5">Founder &amp; Program Director</div>
              <div className="text-gray-400 text-xs">Ntendezi, Nyamasheke District, Rwanda · Est. 2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
