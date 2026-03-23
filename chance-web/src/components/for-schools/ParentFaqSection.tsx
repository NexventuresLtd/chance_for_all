import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much does the program cost?",
    a: "The program is priced at $15 per month or $45 per school term. Free introductory sessions are available for new families so you can experience the program before committing.",
  },
  {
    q: "Where are services delivered?",
    a: "All services are delivered within partner secondary schools in Nyamasheke District. Your child receives support in a safe, familiar environment  ,  no travel required.",
  },
  {
    q: "How is my child's privacy protected?",
    a: "All counseling sessions are private and conducted according to professional ethical standards. No information is shared without the student's and parent's consent.",
  },
  {
    q: "Can my child receive free support?",
    a: "Yes. Vulnerable and abandoned teenagers are identified in collaboration with school administrators and local leaders. Our cross-subsidy model funds free services for those who qualify.",
  },
  {
    q: "How do I know if my child's school is a partner?",
    a: "Contact us via WhatsApp or our contact form. We'll let you know if your child's school is a partner or if we can initiate a partnership.",
  },
  {
    q: "What results can I expect?",
    a: "Parents typically report improved emotional well-being, better academic focus, and stronger confidence in their children within the first term. We provide regular progress reports.",
  },
];

export default function ParentFaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Everything parents and schools need to know before getting started.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
