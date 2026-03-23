import { Eye, Zap } from "lucide-react";
import { PICSUM } from "../../lib/constants";

export default function MissionVisionSection() {
  return (
    <section className="bg-white">
      {/* Origin story banner */}
      <div className="relative h-64 sm:h-80 overflow-hidden bg-[#0c1e35]">
        <img
          src={PICSUM("nyamasheke-landscape", 1600, 500)}
          alt="Ntendezi, Nyamasheke District, Rwanda"
          className="w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow mb-3">
            Where We Come From
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl drop-shadow leading-relaxed">
            Born in Nyamasheke  ,  one of Rwanda's most underserved districts  ,  CHANCE For ALL was
            founded to give every abandoned child a universe of untold potential.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative bg-[#164a8a] rounded-3xl p-8 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-10 translate-x-10" />
            <div className="relative">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Vision Statement</h2>
              <p className="text-blue-100 leading-relaxed">
                To become the leading school-based adolescent counseling and mentorship social
                enterprise in rural Rwanda by 2030, setting the national standard for accessible,
                high-quality mental health support, career guidance, and opportunity readiness for
                secondary school students.
              </p>
            </div>
          </div>

          <div className="relative bg-amber-500 rounded-3xl p-8 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-10 translate-x-10" />
            <div className="relative">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Mission Statement</h2>
              <p className="text-amber-50 leading-relaxed">
                Chance for All exists to address the gap in accessible, structured mental health
                and career readiness support for secondary school students in rural Rwanda  , 
                through a sustainable cross-subsidy model that engages paying families while
                supporting vulnerable and abandoned teenagers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
