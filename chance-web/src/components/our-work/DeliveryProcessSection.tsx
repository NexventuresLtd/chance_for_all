import { Building2, Search, ClipboardList, Handshake, Lightbulb, BarChart2 } from "lucide-react";
import { PICSUM } from "../../lib/constants";

const steps = [
  {
    step: 1,
    Icon: Building2,
    title: "School Partnership Development",
    desc: "Chance for All identifies and partners with secondary schools to implement the program within their environment.",
  },
  {
    step: 2,
    Icon: Search,
    title: "Student Identification",
    desc: "Partner schools help identify students  ,  both vulnerable beneficiaries and paying clients  ,  using defined criteria.",
  },
  {
    step: 3,
    Icon: ClipboardList,
    title: "Program Enrollment & Assessment",
    desc: "Students are registered in the mentorship and counseling program and individual needs are assessed.",
  },
  {
    step: 4,
    Icon: Handshake,
    title: "Mentorship & Counseling Sessions",
    desc: "Mentors conduct regular sessions on personal development, emotional well-being, and academic support.",
  },
  {
    step: 5,
    Icon: Lightbulb,
    title: "Life Skills Workshops",
    desc: "Students participate in structured workshops that build confidence, leadership, and resilience.",
  },
  {
    step: 6,
    Icon: BarChart2,
    title: "Support Services & Follow-up",
    desc: "Beneficiaries may receive school materials or assistance. Progress is tracked via monitoring and evaluation tools.",
  },
];

export default function DeliveryProcessSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Steps */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-5">
              How It Works
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Our Service Delivery Process
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed">
              A structured, step-by-step approach that ensures every student receives consistent,
              quality support within their school environment.
            </p>

            <div className="relative">
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-blue-100 hidden md:block" />
              <div className="space-y-5">
                {steps.map((p) => (
                  <div key={p.step} className="flex gap-6 items-start">
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-blue-600 text-white flex flex-col items-center justify-center shrink-0 shadow-md">
                      <p.Icon className="w-5 h-5" />
                      <span className="text-xs font-bold opacity-60 mt-0.5">{p.step}</span>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-2xl p-5 flex-1 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Image + stats */}
          <div className="space-y-6 lg:pt-16">
            <div className="relative h-72 rounded-3xl overflow-hidden bg-blue-100">
              <img
                src={PICSUM("mentorship-session-school", 600, 400)}
                alt="Mentorship session in school"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/30" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 rounded-2xl p-4">
                  <p className="text-sm font-semibold text-gray-900">
                    "A structured process that meets students where they are."
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "6", label: "Step Delivery Process" },
                { value: "Weekly", label: "Session Frequency" },
                { value: "100%", label: "School-Based" },
                { value: "2", label: "Types of Support" },
              ].map((s) => (
                <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm">
                  <div className="text-2xl font-extrabold text-blue-600 mb-1">{s.value}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
