import { AlertTriangle, TrendingDown, ThumbsUp } from "lucide-react";

const stats = [
  {
    Icon: TrendingDown,
    value: "40.8%",
    label: "of rural schools offer no counseling or mentorship",
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
    iconBg: "bg-rose-100",
  },
  {
    Icon: AlertTriangle,
    value: "49%",
    label: "of parents rate mental health support as inadequate",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    iconBg: "bg-amber-100",
  },
  {
    Icon: ThumbsUp,
    value: "90%+",
    label: "of parents are willing to pay for quality support",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    iconBg: "bg-blue-100",
  },
];

export default function ProblemStatsSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            The Gap We're Closing
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Rural Rwandan teenagers face a silent crisis  ,  a near-complete absence of professional
            mental health support and structured mentorship in their schools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`${s.bg} border ${s.border} rounded-3xl p-8 text-center hover:shadow-md transition-shadow`}
            >
              <div className={`w-14 h-14 ${s.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                <s.Icon className={`w-7 h-7 ${s.color}`} />
              </div>
              <div className={`text-5xl font-extrabold ${s.color} mb-3`}>{s.value}</div>
              <p className="text-gray-600 text-sm leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-3xl p-8 text-center">
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
            Survey conducted in Nyamasheke District (Feb 2026) among{" "}
            <span className="font-bold text-blue-700">150+ parents and students</span>.
            This data validates the urgent need for our services and confirms the market demand
            for structured, school-based support.
          </p>
        </div>
      </div>
    </section>
  );
}
