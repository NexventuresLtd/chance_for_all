import { MapPin, Calendar, MessageCircle, HeartPulse, BookOpen, Mail, Phone } from "lucide-react";
import { WHATSAPP_URL } from "../../lib/constants";

export default function ContactInfoSection() {
  return (
    <div className="space-y-5">
      {/* Contact details */}
      <div className="bg-[#0c1e35] rounded-3xl p-7 text-white">
        <h3 className="font-bold text-lg mb-5">Contact Information</h3>
        <div className="space-y-4 text-sm">
          {[
            { Icon: MapPin, label: "Address", val: "Ntendezi, Nyamasheke District, Western Province, Rwanda" },
            { Icon: Mail, label: "Email", val: "info@chanceforall.rw" },
            { Icon: Phone, label: "Phone", val: "+250 780 000 000" },
            { Icon: Calendar, label: "Founded", val: "September 2025" },
          ].map((c) => (
            <div key={c.label} className="flex gap-3 items-start">
              <c.Icon className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
              <div>
                <div className="text-blue-400 text-xs font-semibold">{c.label}</div>
                <div className="text-blue-100">{c.val}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 pt-5 border-t border-blue-700">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-full px-4 py-2.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors text-sm"
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* SDG Alignment */}
      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
        <h3 className="font-bold text-amber-800 mb-3">SDG Alignment</h3>
        <div className="space-y-2">
          <div className="flex gap-2 items-center text-sm text-amber-700">
            <HeartPulse className="w-4 h-4 shrink-0" /> SDG 3  ,  Good Health &amp; Well-being
          </div>
          <div className="flex gap-2 items-center text-sm text-amber-700">
            <BookOpen className="w-4 h-4 shrink-0" /> SDG 4  ,  Quality Education
          </div>
        </div>
      </div>

      {/* Founder card */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-0.5">Chancelline Niyotugendana</h3>
        <div className="text-blue-600 text-sm mb-0.5">Founder &amp; Program Director</div>
        <div className="text-gray-400 text-xs">Founder, CHANCE For ALL · Nyamasheke, Rwanda</div>
      </div>

      {/* Social media */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-3">Follow Us</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <p>Instagram: <span className="text-blue-600">@chanceforall.rw</span></p>
          <p>Facebook: <span className="text-blue-600">CHANCE For ALL</span></p>
          <p>WhatsApp: <span className="text-blue-600">+250 780 000 000</span></p>
        </div>
      </div>
    </div>
  );
}
