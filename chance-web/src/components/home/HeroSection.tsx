import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, MapPin } from "lucide-react";
import { PICSUM } from "../../lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0c1e35]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${PICSUM("school-children-africa", 1600, 900)}')` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0c1e35]/78" />
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
        <div className="max-w-3xl">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            <MapPin className="w-4 h-4 text-amber-400" />
            Ntendezi, Nyamasheke District, Rwanda
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Empowering Every Teenager.{" "}
            <span className="text-amber-400">Transforming Rural Rwanda.</span>
          </h1>

          <p className="text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl">
            Chance for All provides school-based counseling and mentorship to ensure every student  , 
            from the abandoned to the aspiring  ,  has the support to thrive.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold text-base rounded-xl transition-colors shadow-lg"
            >
              Donate Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-base rounded-xl transition-colors border border-white/30"
            >
              Our Programs
            </Link>
            <Link
              to="/for-schools"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-xl transition-colors"
            >
              <Users className="w-5 h-5" />
              Enroll Your Child
            </Link>
          </div>

          {/* Quick stats strip */}
          <div className="grid grid-cols-3 gap-4 max-w-xl">
            {[
              { value: "800+", label: "Students by 2028" },
              { value: "4", label: "Partner Schools" },
              { value: "150+", label: "Vulnerable Teens" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 border border-white/15 rounded-2xl p-4 text-center">
                <div className="text-2xl font-extrabold text-amber-400">{s.value}</div>
                <div className="text-xs text-blue-200 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
        <Heart className="w-4 h-4 text-amber-400/60" />
        <div className="w-0.5 h-8 bg-white/20 rounded-full" />
      </div>
    </section>
  );
}
