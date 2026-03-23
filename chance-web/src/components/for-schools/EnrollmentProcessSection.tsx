import { MessageCircle, UserCheck, ClipboardList, CalendarCheck, Star } from "lucide-react";
import { whatsappMsg } from "../../lib/constants";

const WHATSAPP_ENROLL = whatsappMsg(
  "Hello! I would like to enroll my child in CHANCE For ALL. Please guide me through the process."
);

const steps = [
  {
    Icon: MessageCircle,
    step: "1",
    title: "Get in Touch",
    desc: "Contact us via WhatsApp or fill out the inquiry form on our Contact page. Tell us about your child and which services interest you.",
  },
  {
    Icon: UserCheck,
    step: "2",
    title: "Initial Assessment",
    desc: "We conduct a brief intake conversation with the parent/guardian to understand your child's needs and match them with the right support.",
  },
  {
    Icon: ClipboardList,
    step: "3",
    title: "School Verification",
    desc: "We confirm your child attends one of our partner schools in Nyamasheke District and coordinate with school administrators.",
  },
  {
    Icon: CalendarCheck,
    step: "4",
    title: "Enrollment & First Session",
    desc: "Once enrolled, your child is scheduled for their first session. We share the program schedule and communication guidelines.",
  },
  {
    Icon: Star,
    step: "5",
    title: "Ongoing Support & Reporting",
    desc: "You receive regular progress updates. Our team remains available for any questions or concerns throughout the program.",
  },
];

export default function EnrollmentProcessSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-4">
            How to Enroll
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Simple Enrollment Process</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Getting your child enrolled is easy. Here's what to expect from start to finish.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-5 mb-12">
            {steps.map((s, i) => (
              <div key={s.title} className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <s.Icon className="w-5 h-5" />
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-5 flex-1 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      Step {s.step}
                    </span>
                    <h3 className="font-bold text-gray-900">{s.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={WHATSAPP_ENROLL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              Start Enrollment via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
