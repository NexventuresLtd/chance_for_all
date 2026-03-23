import { FileText, Download, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const reports = [
  {
    title: "2025 Program Launch Report",
    desc: "Overview of CHANCE For ALL's establishment, operational setup, and early framework development in Nyamasheke District.",
    year: "2025",
    status: "available",
    badge: "Available",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    title: "2026 Market Validation Study",
    desc: "Survey results from 150+ parents and students in Nyamasheke District validating the demand for school-based mentorship and counseling.",
    year: "2026",
    status: "available",
    badge: "Available",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    title: "2026 Annual Impact Report",
    desc: "Comprehensive report on enrollment, student outcomes, financial sustainability, and program effectiveness.",
    year: "2026",
    status: "coming",
    badge: "Coming Dec 2026",
    badgeColor: "bg-amber-100 text-amber-700",
  },
  {
    title: "Financial Transparency Statement",
    desc: "Detailed breakdown of program funding sources, expenses, and allocation  ,  ensuring full donor accountability.",
    year: "Ongoing",
    status: "available",
    badge: "On Request",
    badgeColor: "bg-blue-100 text-blue-700",
  },
];

export default function ReportsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            Transparency
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            Annual Reports &amp; Documents
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We are committed to full transparency. Our reports give donors, partners, and the
            public a clear view of our progress and financial stewardship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reports.map((r) => (
            <div
              key={r.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${r.badgeColor}`}>
                  {r.badge}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{r.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{r.desc}</p>
              {r.status === "available" ? (
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  <Download className="w-4 h-4" /> Request Report
                </Link>
              ) : (
                <div className="inline-flex items-center gap-1.5 text-sm text-gray-400">
                  <Clock className="w-4 h-4" /> In Preparation
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
