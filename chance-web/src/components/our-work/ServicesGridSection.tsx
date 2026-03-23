import { useState } from "react";
import { Heart, Sprout, Target, HandHeart, Check } from "lucide-react";

const services = [
  {
    id: "counseling",
    Icon: Heart,
    iconColor: "text-rose-600",
    headerBg: "bg-rose-600",
    border: "border-rose-200",
    accent: "text-rose-600",
    bg: "bg-rose-50",
    label: "A",
    title: "School-Based Counseling",
    subtitle: "Emotional Well-being Support",
    focus:
      "Professional, trauma-informed counseling to help students manage emotional stress, anxiety, and trauma. Safe, confidential sessions within the school.",
    approach: [
      "Professional counseling sessions within school environments",
      "One-on-one private counseling for individual support",
      "Group emotional support sessions to build peer resilience",
      "Collaboration with teachers to identify students needing support",
    ],
    impact:
      "Students gain improved emotional stability, stronger self-confidence, and better focus in their academic and personal lives.",
    partner: "Solid Minds Clinic",
  },
  {
    id: "mentorship",
    Icon: Sprout,
    iconColor: "text-blue-600",
    headerBg: "bg-blue-600",
    border: "border-blue-200",
    accent: "text-blue-600",
    bg: "bg-blue-50",
    label: "B",
    title: "Mentorship & Life Skills",
    subtitle: "Personal Development",
    focus:
      "Trained mentors guide students through personal growth, leadership, and decision-making, building confidence and resilience.",
    approach: [
      "Regular mentorship sessions with trained mentors",
      "Workshops on leadership, communication, and goal-setting",
      "Peer mentorship circles for collaborative learning",
      "Exposure to positive role models and professional guidance",
    ],
    impact:
      "Students develop stronger self-esteem, improved decision-making, and a supportive guidance network.",
    partner: "Trained Mentor Network",
  },
  {
    id: "career",
    Icon: Target,
    iconColor: "text-amber-600",
    headerBg: "bg-amber-600",
    border: "border-amber-200",
    accent: "text-amber-600",
    bg: "bg-amber-50",
    label: "C",
    title: "Opportunity Readiness",
    subtitle: "Career Guidance Training",
    focus:
      "Career exploration, university application guidance, and workshops on professional communication to prepare students for their future.",
    approach: [
      "Career exploration sessions introducing professional pathways",
      "Guidance on university applications, scholarships, and training",
      "Workshops on goal-setting and professional communication",
      "Opportunity-readiness training for internships and employment",
    ],
    impact:
      "Students gain clarity on career choices, increased motivation to succeed academically, and better future preparedness.",
    partner: "Community Professionals",
  },
  {
    id: "support",
    Icon: HandHeart,
    iconColor: "text-green-600",
    headerBg: "bg-green-700",
    border: "border-green-200",
    accent: "text-green-600",
    bg: "bg-green-50",
    label: "D",
    title: "Support for Vulnerable Teens",
    subtitle: "For Those Who Need It Most",
    focus:
      "Cross-subsidized financial assistance for school fees and materials for abandoned or estranged students to prevent dropouts.",
    approach: [
      "Partial assistance for school-related needs",
      "Tailored mentorship for abandoned and vulnerable students",
      "Partnerships with schools and community organizations",
      "Support funded through cross-subsidy model and donations",
    ],
    impact:
      "Vulnerable teenagers receive support to remain in school, strengthen emotional well-being, and pursue better opportunities.",
    partner: "NGO & Community Partners",
  },
];

export default function ServicesGridSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            Integrated Support Model
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Four key service components delivered directly within partner schools  ,  ensuring
            accessibility, consistency, and student engagement.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          <button
            onClick={() => setActive(null)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              active === null
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All Services
          </button>
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(active === s.id ? null : s.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                active === s.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <s.Icon className="w-4 h-4" />
              {s.title.split(" ").slice(0, 2).join(" ")}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services
            .filter((s) => active === null || active === s.id)
            .map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className={`${s.headerBg} p-6 flex items-start gap-4`}>
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                    <s.Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white">
                    <div className="text-xs font-bold uppercase tracking-widest opacity-70 mb-0.5">
                      Component {s.label}
                    </div>
                    <h3 className="text-xl font-bold">{s.title}</h3>
                    <div className="text-sm opacity-80">{s.subtitle}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm font-medium text-gray-600 italic mb-4 border-l-2 border-gray-200 pl-3">
                    {s.focus}
                  </p>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
                    Our Approach
                  </h4>
                  <ul className="space-y-2 mb-5">
                    {s.approach.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className={`w-4 h-4 ${s.accent} mt-0.5 shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className={`${s.bg} rounded-xl p-3 border ${s.border} mb-3`}>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                      Impact:{" "}
                    </span>
                    <span className="text-xs text-gray-600">{s.impact}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">Partner:</span>
                    <span className={`text-xs font-semibold ${s.accent}`}>{s.partner}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
