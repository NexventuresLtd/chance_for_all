import { Handshake, Lock, BarChart2, Globe, Building2, Heart } from "lucide-react";

const values = [
  {
    Icon: Handshake,
    title: "Inclusion",
    desc: "Every teenager, regardless of background or socio-economic status, deserves access to professional support.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    Icon: Lock,
    title: "Confidentiality",
    desc: "All counseling sessions are private and handled with the highest ethical standards.",
    color: "text-gray-600",
    bg: "bg-gray-50",
  },
  {
    Icon: BarChart2,
    title: "Measurable Impact",
    desc: "We track emotional resilience, academic engagement, and career readiness outcomes.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    Icon: Globe,
    title: "Sustainability",
    desc: "A cross-subsidy model ensures long-term financial viability and continuous social impact.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    Icon: Building2,
    title: "School-Centered",
    desc: "Services delivered within schools reduce barriers and maximize student engagement.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    Icon: Heart,
    title: "Trauma-Informed",
    desc: "All staff and mentors are trained in adolescent development and ethical safeguarding.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            Our Values
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">What Guides Everything We Do</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
            >
              <div className={`w-12 h-12 ${v.bg} rounded-xl flex items-center justify-center mb-4`}>
                <v.Icon className={`w-6 h-6 ${v.color}`} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
