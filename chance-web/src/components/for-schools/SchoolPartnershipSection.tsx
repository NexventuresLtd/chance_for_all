import { Link } from "react-router-dom";
import { Building2, Check, Users, ArrowRight, MessageCircle } from "lucide-react";
import { whatsappMsg, PICSUM } from "../../lib/constants";

const WHATSAPP_SCHOOL = whatsappMsg(
  "Hello! I am a school administrator interested in partnering with CHANCE For ALL. Please tell me more."
);

const benefits = [
  "Improved student discipline and emotional stability",
  "Reduced dropout rates among at-risk students",
  "Professional counseling at no cost to the school",
  "Structured mentorship fully integrated into school schedule",
  "Regular progress reports and impact data",
  "Strengthened student-teacher relationships",
];

export default function SchoolPartnershipSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-5">
              For Schools
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Enhance Student Well-being and Performance at Your School
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We bring professional counseling and mentorship directly to your students, reducing
              your burden and improving student outcomes. No infrastructure required  ,  we integrate
              seamlessly into your existing structure.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-gray-600 text-sm">{b}</span>
                </li>
              ))}
            </ul>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8">
              <h4 className="font-bold text-blue-900 mb-2">Partnership Process</h4>
              <p className="text-sm text-blue-700 leading-relaxed">
                We work with school administrators to identify students, integrate sessions into
                the school calendar, and provide formal MoU-based partnerships with clear terms
                and accountability measures.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={WHATSAPP_SCHOOL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Partner with Us
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-blue-300 text-gray-700 font-bold rounded-xl transition-colors"
              >
                Send an Inquiry <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Image + stats */}
          <div className="space-y-5">
            <div className="relative h-72 rounded-3xl overflow-hidden bg-blue-100">
              <img
                src={PICSUM("school-classroom-africa", 600, 400)}
                alt="School partnership"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/20" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { Icon: Building2, label: "Partner Schools", value: "4 (target 2026)" },
                { Icon: Users, label: "Students Reached", value: "300+ by 2026" },
              ].map((s) => (
                <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                    <s.Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-xl font-bold text-blue-600 mb-0.5">{s.value}</div>
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
