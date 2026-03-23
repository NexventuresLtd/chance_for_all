import { GraduationCap, Heart, Building2, Target, Globe, Sprout } from "lucide-react";

const uses = [
  {
    Icon: GraduationCap,
    title: "Mentor Training",
    desc: "Equip mentors with trauma-informed and youth development skills.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    Icon: Heart,
    title: "Counseling Sessions",
    desc: "Fund professional counseling for vulnerable teenagers who cannot pay.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    Icon: Building2,
    title: "School Materials",
    desc: "Provide stationery, workbooks, and learning resources to beneficiaries.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    Icon: Target,
    title: "Career Workshops",
    desc: "Run career guidance and life-skills workshops across partner schools.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    Icon: Globe,
    title: "Outreach & Expansion",
    desc: "Extend our reach to more schools and under-served communities.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    Icon: Sprout,
    title: "Program Operations",
    desc: "Cover coordination, administration, and monitoring & evaluation tools.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
];

const sources = [
  { label: "Program Fees", pct: 42, color: "bg-blue-600" },
  { label: "Grants & Donations", pct: 35, color: "bg-amber-500" },
  { label: "Founder Contributions", pct: 15, color: "bg-green-500" },
  { label: "Partnerships & Sponsorships", pct: 8, color: "bg-purple-500" },
];

export default function FundingUsesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Where money goes */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            Transparency
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Where Your Money Goes</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Every cent is tracked and reported. Here's how your contributions translate into
            direct impact for teenagers in Nyamasheke.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {uses.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center mb-4`}>
                <f.Icon className={`w-6 h-6 ${f.color}`} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Funding sources */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Expected Funding Sources</h2>
          <p className="text-sm text-gray-400 mb-6">
            How the program sustains itself at scale  ,  ensuring long-term independence.
          </p>
          <div className="space-y-5">
            {sources.map((f) => (
              <div key={f.label}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium text-gray-700">{f.label}</span>
                  <span className="font-bold text-gray-900">{f.pct}%</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${f.color} rounded-full`}
                    style={{ width: `${f.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 leading-relaxed mt-6 pt-4 border-t border-gray-100">
            Grants and donations are critical especially in early years as program fees grow with
            enrollment. We welcome multi-year funding commitments from foundations and impact
            investors.
          </p>
        </div>
      </div>
    </section>
  );
}
