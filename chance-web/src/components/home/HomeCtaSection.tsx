import { Link } from "react-router-dom";
import { MessageCircle, Handshake, Heart } from "lucide-react";
import { whatsappMsg } from "../../lib/constants";

const WHATSAPP_PARTNER = whatsappMsg("Hello! I am interested in partnering with CHANCE For ALL.");

export default function HomeCtaSection() {
  return (
    <section className="bg-[#0c1e35] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <Heart className="w-12 h-12 text-amber-400 mx-auto mb-5" />
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Join Us in Shaping the Future of{" "}
          <span className="text-amber-400">800 Students by 2028</span>
        </h2>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you donate, partner with us, or enroll your child  ,  every action
          creates a ripple of change for rural Rwandan teenagers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={WHATSAPP_PARTNER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors shadow-md"
          >
            <Handshake className="w-5 h-5" />
            Partner with Us
          </a>
          <Link
            to="/get-involved"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors shadow-md"
          >
            <Heart className="w-5 h-5" />
            Donate Now
          </Link>
          <a
            href={whatsappMsg("Hello! I would like to learn more about CHANCE For ALL.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors border border-white/25"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>

        {/* SDG badges */}
        <div className="flex flex-wrap gap-3 justify-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-2 rounded-full">
            SDG 3  ,  Good Health &amp; Well-being
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-2 rounded-full">
            SDG 4  ,  Quality Education
          </div>
        </div>
      </div>
    </section>
  );
}
