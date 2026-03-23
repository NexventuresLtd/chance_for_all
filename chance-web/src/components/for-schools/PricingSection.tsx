import { Link } from "react-router-dom";
import { Check, MessageCircle } from "lucide-react";
import { whatsappMsg } from "../../lib/constants";

const WHATSAPP_ENROLL = whatsappMsg(
  "Hello! I would like to enroll my child in CHANCE For ALL. Please tell me more about the process."
);

const plans = [
  {
    name: "Monthly Package",
    price: "$15",
    period: "/month",
    highlight: false,
    features: [
      "4 weekly mentorship sessions",
      "Access to group life-skills workshops",
      "Progress reports to parents",
      "Career guidance resources",
      "Emergency counseling support",
    ],
    cta: "Enroll Monthly",
    badge: "",
  },
  {
    name: "Term Package",
    price: "$45",
    period: "/term",
    highlight: true,
    features: [
      "Everything in Monthly Package",
      "Full term of structured mentorship",
      "Priority access to professional counseling",
      "Detailed end-of-term impact report",
      "One-on-one career readiness session",
      "Save vs. monthly pricing",
    ],
    cta: "Enroll for a Term",
    badge: "Best Value",
  },
];

export default function PricingSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            Pricing
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            Give Your Child the Gift of Confidence
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Affordable packages designed for Rwandan families. Your participation helps us support
            vulnerable students who cannot pay  ,  every enrollment creates dual impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl overflow-hidden shadow-sm ${
                plan.highlight
                  ? "bg-[#0c1e35] border-2 border-[#1d4a7a]"
                  : "bg-white border border-gray-100"
              }`}
            >
              {plan.badge && (
                <div className="bg-amber-500 text-white text-xs font-bold text-center py-2 tracking-wide uppercase">
                  {plan.badge}
                </div>
              )}
              <div className="p-8">
                <h3 className={`font-bold text-xl mb-1 ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <div className={`flex items-end gap-1 mb-6 ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className={`text-sm mb-1.5 ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          plan.highlight ? "text-amber-400" : "text-blue-600"
                        }`}
                      />
                      <span className={`text-sm ${plan.highlight ? "text-blue-100" : "text-gray-600"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_ENROLL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-colors ${
                    plan.highlight
                      ? "bg-amber-500 hover:bg-amber-400 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Why affordable note */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 max-w-3xl mx-auto text-center">
          <p className="text-blue-800 text-sm leading-relaxed">
            <span className="font-bold">Why this works:</span> Our affordable pricing ensures quality
            support is accessible to all families. Your participation directly funds free services for
            the most vulnerable students in Nyamasheke through our cross-subsidy model.
          </p>
        </div>

        {/* Payment note */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            Payment accepted via <span className="font-semibold text-gray-700">MTN MoMo</span> and{" "}
            <span className="font-semibold text-gray-700">Airtel Money</span>.{" "}
            <Link to="/contact" className="text-blue-600 hover:underline font-medium">
              Contact us
            </Link>{" "}
            for payment details.
          </p>
        </div>
      </div>
    </section>
  );
}
