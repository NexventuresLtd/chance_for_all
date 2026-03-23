import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much does the program cost?",
    a: "The program is priced at $15 per month or $45 per school term. Free introductory sessions are available for new families. Vulnerable students receive services free of charge through our cross-subsidy model.",
  },
  {
    q: "Where are services delivered?",
    a: "All services are delivered within partner secondary schools in Nyamasheke District. Students receive support in a safe, familiar environment  ,  no travel required.",
  },
  {
    q: "Who qualifies as a beneficiary?",
    a: "Vulnerable and abandoned teenagers in partner schools are identified in collaboration with school administrators and local leaders using defined vulnerability criteria.",
  },
  {
    q: "How is confidentiality maintained?",
    a: "All counseling sessions are private and conducted according to professional ethical standards. No information is shared without the student's and parent's consent.",
  },
  {
    q: "Is the organization registered?",
    a: "Chance for All is in the process of registering through the Rwanda Development Board (RDB) as a social enterprise, fully complying with all child protection and education regulations.",
  },
  {
    q: "How can my organization partner with you?",
    a: "Schools, NGOs, and community organizations can reach out via the contact form or WhatsApp to discuss formal partnership through MoUs and multi-year agreements.",
  },
];

export default function ContactFaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-2xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
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
