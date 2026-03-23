import { Building2, Check } from "lucide-react";

const partners = [
  { name: "Solid Minds Clinic", role: "Professional counseling services  ,  clinical partner for trauma-informed sessions." },
  { name: "MINEDUC", role: "Ministry of Education  ,  national educational compliance and school authorizations." },
  { name: "MIGEPROF", role: "Ministry of Gender & Family Promotion  ,  child protection and youth policy alignment." },
  { name: "NCC", role: "National Children's Council  ,  child rights oversight and safeguarding compliance." },
  { name: "UNICEF Rwanda", role: "Child well-being programs and potential grant funding for youth initiatives." },
  { name: "Compassion International", role: "Youth development and community outreach strategic alignment." },
];

export default function PartnersSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            Partners &amp; Supporters
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            Our Ecosystem of Impact
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We work within Rwanda's institutional landscape, building trust through partnerships
            with government bodies, clinics, and international organizations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{p.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-[#0c1e35] rounded-3xl p-8 text-white text-center">
          <h3 className="text-xl font-bold mb-3">Want to Partner With Us?</h3>
          <p className="text-blue-200 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
            We are actively seeking partnerships with schools, NGOs, healthcare providers, and
            corporate sponsors who share our mission to transform the lives of Rwandan teenagers.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-xl mx-auto text-sm">
            {[
              "Schools & Educational Institutions",
              "NGOs & International Organizations",
              "Corporates with CSR Programs",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-blue-100">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
