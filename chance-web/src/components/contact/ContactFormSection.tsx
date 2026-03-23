import { useState } from "react";
import { Building2, Users, Handshake, Sprout, Check, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, whatsappMsg } from "../../lib/constants";

const roles = [
  {
    id: "school",
    Icon: Building2,
    title: "School / Institution",
    desc: "Partner with us to bring structured mentorship and counseling to your students.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: "parent",
    Icon: Users,
    title: "Parent / Guardian",
    desc: "Enroll your child in our affordable term-based mentorship and counseling program.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    id: "donor",
    Icon: Handshake,
    title: "Donor / NGO",
    desc: "Fund the cross-subsidy model enabling free services for vulnerable teenagers.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    id: "mentor",
    Icon: Sprout,
    title: "Volunteer / Mentor",
    desc: "Join our trained mentor network and guide teenagers through personal development.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

export default function ContactFormSection() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", org: "", subject: "General", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedRoleLabel = roles.find((r) => r.id === selectedRole)?.title ?? "General";

  return (
    <div className="space-y-10">
      {/* WhatsApp quick bar */}
      <div className="bg-green-50 border border-green-200 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shrink-0">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-green-900">Prefer a quick chat?</p>
            <p className="text-sm text-green-700">Message us directly on WhatsApp  ,  we respond fast.</p>
          </div>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors shrink-0"
        >
          <MessageCircle className="w-4 h-4" /> Open WhatsApp
        </a>
      </div>

      {/* Role selector */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-3 text-center">How Would You Like to Connect?</h2>
        <p className="text-gray-500 text-center text-sm mb-6">Select your role to tailor your message.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {roles.map((r) => (
            <button
              key={r.id}
              onClick={() => setSelectedRole(selectedRole === r.id ? null : r.id)}
              className={`text-left rounded-2xl p-5 border-2 transition-all hover:shadow-md ${
                selectedRole === r.id
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-gray-200 bg-white hover:border-blue-300"
              }`}
            >
              <div className={`w-11 h-11 ${r.bg} rounded-xl flex items-center justify-center mb-3`}>
                <r.Icon className={`w-5 h-5 ${r.color}`} />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{r.title}</h3>
              <p className="text-xs text-gray-500">{r.desc}</p>
              {selectedRole === r.id && (
                <div className="mt-2 flex items-center gap-1 text-xs font-bold text-blue-600">
                  <Check className="w-3 h-3" /> Selected
                </div>
              )}
            </button>
          ))}
        </div>

        {selectedRole && (
          <div className="mt-5 text-center">
            <a
              href={whatsappMsg(
                `Hello! I am interested in CHANCE For ALL as a ${selectedRoleLabel}. I would like to learn more.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp us as a {selectedRoleLabel}
            </a>
          </div>
        )}
      </div>

      {/* Contact form */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          {selectedRole ? `Contact Us  ,  ${selectedRoleLabel}` : "Send Us a Message"}
        </h2>

        {submitted ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thank you!</h3>
            <p className="text-gray-500 text-sm mb-6">
              We've received your message and will be in touch within 2–3 business days.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", org: "", subject: "General", message: "" });
                }}
                className="px-5 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Another Message
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-green-600 text-white rounded-xl text-sm font-semibold hover:bg-green-500 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Follow up on WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Organization / School{" "}
                  <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  value={form.org}
                  onChange={(e) => setForm({ ...form, org: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                  placeholder="School or organization"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                >
                  <option>Parent Inquiry</option>
                  <option>School Partnership</option>
                  <option>Donation</option>
                  <option>Volunteer / Mentor</option>
                  <option>General</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                placeholder={
                  selectedRole === "school"
                    ? "Tell us about your school and how you'd like to partner..."
                    : selectedRole === "parent"
                    ? "Tell us about your child and which services interest you..."
                    : selectedRole === "donor"
                    ? "Tell us about your organization and how you'd like to support..."
                    : "How can we help you?"
                }
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md text-sm"
            >
              Send Message
            </button>
            <p className="text-xs text-gray-400 text-center">
              We respond within 2–3 business days. Or chat instantly on WhatsApp.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
