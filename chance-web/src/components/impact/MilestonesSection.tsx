const milestones = [
  {
    date: "Sep 2025",
    event: "CHANCE For ALL established in Ntendezi, Nyamasheke District",
    status: "done",
  },
  {
    date: "Oct–Dec 2025",
    event: "Operational systems and frameworks developed",
    status: "done",
  },
  {
    date: "Feb 2026",
    event: "Market validation survey conducted among 150+ parents",
    status: "done",
  },
  {
    date: "Mar 2026",
    event: "Strategic plan and program framework completed",
    status: "done",
  },
  {
    date: "Jun 2026",
    event: "First school partnerships formalized (target: 2 schools)",
    status: "upcoming",
  },
  {
    date: "Dec 2026",
    event: "4 partner schools; 300 students enrolled",
    status: "upcoming",
  },
  {
    date: "Jun 2027",
    event: "300 paying families; 35% operational costs self-funded",
    status: "upcoming",
  },
  {
    date: "Dec 2027",
    event: "150+ vulnerable teens served via cross-subsidy model",
    status: "upcoming",
  },
  {
    date: "Dec 2028",
    event: "Expansion to 2+ additional districts; 800+ students total",
    status: "upcoming",
  },
];

export default function MilestonesSection() {
  const done = milestones.filter((m) => m.status === "done").length;
  const total = milestones.length;

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            Our Progress
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Growth Milestones</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A transparent timeline of where we've been and where we're headed.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Progress bar */}
          <div className="bg-gray-100 rounded-full h-2.5 mb-3">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000"
              style={{ width: `${(done / total) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400 mb-10">
            <span>{done} milestones achieved</span>
            <span>{total - done} upcoming</span>
          </div>

          <div className="relative">
            <div className="absolute left-3 top-3 bottom-3 w-0.5 bg-gray-100" />
            <div className="space-y-6">
              {milestones.map((m) => (
                <div key={m.date} className="flex gap-5 items-start">
                  <div
                    className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      m.status === "done"
                        ? "bg-blue-600"
                        : "bg-white border-2 border-gray-200"
                    }`}
                  >
                    {m.status === "done" && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <div
                    className={`flex-1 rounded-2xl p-4 ${
                      m.status === "done"
                        ? "bg-blue-50 border border-blue-100"
                        : "bg-gray-50 border border-gray-100"
                    }`}
                  >
                    <div
                      className={`text-xs font-bold mb-1 ${
                        m.status === "done" ? "text-blue-600" : "text-gray-400"
                      }`}
                    >
                      {m.date}
                    </div>
                    <p
                      className={`text-sm ${
                        m.status === "done" ? "text-gray-700" : "text-gray-500"
                      }`}
                    >
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
