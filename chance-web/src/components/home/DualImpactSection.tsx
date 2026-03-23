import { Link } from "react-router-dom";
import { Users, ArrowRight, Heart, Building2 } from "lucide-react";

export default function DualImpactSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-4">
            Dual-Impact Model
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            One Program, Dual Impact
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Your contribution helps a teenager like Grace. Our cross-subsidy model creates a
            self-sustaining cycle of impact that reaches every student.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 mb-16">
          {/* Paying Families */}
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 text-center w-full max-w-xs">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="font-bold text-amber-800 text-lg mb-2">Paying Families</h3>
            <p className="text-amber-700 text-sm">
              Families who can afford it pay $15/month for premium mentorship & counseling.
            </p>
          </div>

          {/* Arrow */}
          <div className="flex flex-col lg:flex-row items-center gap-2 px-4">
            <div className="hidden lg:block w-12 h-0.5 bg-amber-300" />
            <div className="text-xs font-bold text-amber-600 bg-amber-100 px-3 py-1.5 rounded-full whitespace-nowrap">
              Pay for Services
            </div>
            <div className="hidden lg:block w-12 h-0.5 bg-amber-300" />
          </div>

          {/* CHANCE For ALL center */}
          <div className="bg-[#0c1e35] rounded-3xl p-8 text-center w-full max-w-xs shadow-xl">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-extrabold text-white text-xl mb-2">CHANCE For ALL</h3>
            <p className="text-blue-200 text-sm">
              Revenue is reinvested to fund free services for vulnerable teenagers.
            </p>
            <div className="mt-4 inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Cross-Subsidy Model
            </div>
          </div>

          {/* Arrow */}
          <div className="flex flex-col lg:flex-row items-center gap-2 px-4">
            <div className="hidden lg:block w-12 h-0.5 bg-blue-300" />
            <div className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1.5 rounded-full whitespace-nowrap">
              Receive Support
            </div>
            <div className="hidden lg:block w-12 h-0.5 bg-blue-300" />
          </div>

          {/* Vulnerable Students */}
          <div className="bg-blue-50 border border-blue-200 rounded-3xl p-8 text-center w-full max-w-xs">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-blue-800 text-lg mb-2">Vulnerable Students</h3>
            <p className="text-blue-700 text-sm">
              Abandoned and at-risk teenagers receive the same quality services at no cost.
            </p>
          </div>
        </div>

        {/* Caption */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-6 max-w-lg mx-auto">
            "One program, dual impact. Your contribution helps a teenager like Grace."
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors"
            >
              Explore Our Programs <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/for-schools"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors"
            >
              Enroll Your Child
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
