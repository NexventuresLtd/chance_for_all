import { useCountUp } from "../../hooks/useCountUp";

const stats = [
  { value: 300, suffix: "+", label: "Students Targeted by 2026", color: "text-blue-600" },
  { value: 150, suffix: "+", label: "Vulnerable Teens Served Free", color: "text-amber-500" },
  { value: 4, suffix: "", label: "Partner Schools (2026 Target)", color: "text-green-600" },
  { value: 74, suffix: "%", label: "Parents Willing to Pay", color: "text-blue-600" },
];

function StatCard({
  value,
  suffix,
  label,
  color,
}: {
  value: number;
  suffix: string;
  label: string;
  color: string;
}) {
  const { count, ref } = useCountUp(value, 1500);
  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-md transition-shadow"
    >
      <div className={`text-4xl font-extrabold ${color} mb-1`}>
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm font-medium text-gray-600">{label}</div>
    </div>
  );
}

export default function ImpactStatsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            Your Impact
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            What Our Work Achieves
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Every number represents a real teenager in Nyamasheke District whose life we are
            working to transform through structured support and mentorship.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
