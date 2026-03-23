import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle, MapPin, Calendar, Heart } from "lucide-react";
import { WHATSAPP_URL } from "../lib/constants";

const links = [
  { label: "Home", to: "/" },
  { label: "Our Story", to: "/about" },
  { label: "Our Work", to: "/our-work" },
  { label: "For Schools & Parents", to: "/for-schools" },
  { label: "Impact & Research", to: "/impact" },
  { label: "Get Involved", to: "/get-involved" },
  { label: "Contact", to: "/contact" },
];

const sdgs = ["SDG 3   ,   Good Health & Well-being", "SDG 4   ,   Quality Education"];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/logo.png" alt="CHANCE For ALL" className="h-10 w-auto object-contain" />
              <div>
                <span className="font-extrabold text-white text-lg">CHANCE</span>
                <span className="font-bold text-amber-400 text-lg"> For ALL</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-sm">
              A school-based counseling and mentorship social enterprise in Nyamasheke District,
              Rwanda. Empowering adolescents with professional emotional support, structured
              mentorship, and career readiness.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-pink-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-green-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Navigation</h3>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm hover:text-blue-400 transition-colors"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-gray-500 text-xs mb-0.5">Location</div>
                  <div className="text-gray-300">Ntendezi, Nyamasheke District, Rwanda</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Calendar className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-gray-500 text-xs mb-0.5">Established</div>
                  <div className="text-gray-300">September 2025</div>
                </div>
              </li>
              <li>
                <div className="text-gray-500 text-xs mb-1">SDG Alignment</div>
                {sdgs.map((s) => (
                  <div key={s} className="text-xs text-blue-400 mb-0.5">{s}</div>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* WhatsApp CTA bar */}
        <div className="bg-gray-900 rounded-2xl px-6 py-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-green-400" />
            <span className="text-sm text-gray-300">Have questions? Chat with us directly on WhatsApp.</span>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold rounded-xl transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© 2026 CHANCE For ALL · Chancelline Niyotugendana, Founder</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500" /> for Rwanda's youth
          </p>
        </div>
      </div>
    </footer>
  );
}
