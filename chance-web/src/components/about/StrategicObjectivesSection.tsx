const objectives = [
  {
    num: "01",
    title: "Market Establishment",
    date: "Dec 2026",
    text: "Formalize partnerships with at least 4 secondary schools in Nyamasheke District and enroll a minimum of 300 students.",
    color: "border-blue-300 bg-blue-50",
  },
  {
    num: "02",
    title: "Revenue & Sustainability",
    date: "Jun 2027",
    text: "Enroll at least 300 paying families, generating revenue to cover 35% of operational costs through the cross-subsidy model.",
    color: "border-amber-300 bg-amber-50",
  },
  {
    num: "03",
    title: "Social Impact",
    date: "Dec 2027",
    text: "Provide fully subsidized services to at least 150 vulnerable or abandoned teenagers through strategic partnerships.",
    color: "border-green-300 bg-green-50",
  },
  {
    num: "04",
    title: "Geographic Expansion",
    date: "Dec 2028",
    text: "Expand to at least two additional districts, increasing total enrollment to 800 students across all partner schools.",
    color: "border-purple-300 bg-purple-50",
  },
  {
    num: "05",
    title: "Brand & Quality Assurance",
    date: "2028",
    text: "Achieve 85% parent satisfaction, 90% student retention, and annual impact reporting on emotional and academic outcomes.",
    color: "border-rose-300 bg-rose-50",
  },
];

export default function StrategicObjectivesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            Our Roadmap
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Strategic Objectives</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Clear, time-bound goals that keep us accountable to the students and communities we serve.
          </p>
        </div>

        <div className="space-y-5 max-w-4xl mx-auto">
          {objectives.map((o) => (
            <div key={o.num} className={`border rounded-2xl p-6 flex gap-6 items-start ${o.color}`}>
              <span className="text-4xl font-extrabold text-gray-300 shrink-0 leading-none">{o.num}</span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-bold text-gray-900 text-lg">{o.title}</h3>
                  <span className="text-xs font-semibold bg-white border border-gray-200 text-gray-600 px-2.5 py-0.5 rounded-full">
                    {o.date}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{o.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
