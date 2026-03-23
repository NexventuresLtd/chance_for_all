import { Link } from "react-router-dom";
import { MessageCircle, ChevronRight } from "lucide-react";
import { whatsappMsg } from "../../lib/constants";

const WHATSAPP_ENROLL = whatsappMsg("Hello! I would like to enroll my child in CHANCE For ALL.");

export default function CrossSubsidySection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Service Validation */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sm:p-10 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Service Demand Validation</h2>
          <p className="text-gray-500 text-sm mb-8">
            Survey results (Feb 2026)  ,  most valued services among parents and students in
            Nyamasheke District.
          </p>
          <div className="space-y-6">
            {[
              { label: "Life-Skills Training", pct: 76.4, color: "bg-blue-600" },
              { label: "Career Guidance & Mentorship", pct: 70.8, color: "bg-blue-500" },
              { label: "Professional Counseling", pct: 63.2, color: "bg-amber-500" },
              { label: "Academic Coaching", pct: 44.0, color: "bg-blue-400" },
              { label: "Peer Support Programs", pct: 38.5, color: "bg-amber-400" },
            ].map((d) => (
              <div key={d.label}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium text-gray-700">{d.label}</span>
                  <span className="font-bold text-blue-600">{d.pct}%</span>
                </div>
                <div className="h-3.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${d.color} transition-all duration-700`}
                    style={{ width: `${d.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-subsidy explainer */}
        <div className="bg-[#0c1e35] rounded-3xl p-8 sm:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-300 bg-white/10 px-3 py-1 rounded-full mb-4">
                Dual-Impact Model
              </span>
              <h2 className="text-2xl font-bold mb-4">How the Cross-Subsidy Works</h2>
              <p className="text-blue-200 text-sm leading-relaxed mb-6">
                Families who can afford to pay for structured mentorship and counseling services do
                so. This revenue directly funds free services for abandoned or vulnerable teenagers
                who cannot pay  ,  creating a sustainable, self-reinforcing cycle of impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/for-schools"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl text-sm transition-all"
                >
                  Enroll Your Child <ChevronRight className="w-4 h-4" />
                </Link>
                <a
                  href={WHATSAPP_ENROLL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl text-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  label: "Paying Clients",
                  desc: "Students from financially stable families enrolled in premium mentorship & counseling.",
                  color: "bg-amber-400/20 border-amber-400/30",
                },
                {
                  label: "Revenue Generated",
                  desc: "Term-based fees collected via mobile money, reinvested into the program.",
                  color: "bg-white/10 border-white/10",
                },
                {
                  label: "Subsidized Beneficiaries",
                  desc: "Abandoned & vulnerable teenagers receive the same quality services at no cost.",
                  color: "bg-blue-400/20 border-blue-400/30",
                },
              ].map((s) => (
                <div key={s.label} className={`${s.color} border rounded-2xl p-4`}>
                  <div className="text-sm font-bold text-white mb-1">{s.label}</div>
                  <div className="text-xs text-blue-200">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
