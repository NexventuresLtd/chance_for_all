import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { PICSUM } from "../../lib/constants";

export default function GraceStorySection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden bg-blue-100">
              <img
                src={PICSUM("student-hopeful", 600, 700)}
                alt="A student looking towards the future"
                className="w-full h-full object-cover"
              />
              {/* Dark overlay at bottom */}
              <div className="absolute inset-0 bg-blue-900/20" />
            </div>
            {/* Quote bubble */}
            <div className="absolute -bottom-6 -right-4 lg:right-8 bg-white rounded-2xl shadow-xl p-5 max-w-xs border border-gray-100">
              <Quote className="w-6 h-6 text-amber-500 mb-2" />
              <p className="text-gray-700 text-sm italic leading-relaxed">
                "I felt lost and alone. My mentor at Chance for All helped me believe in my future again."
              </p>
              <p className="text-blue-600 font-bold text-xs mt-2"> ,  Grace, Student</p>
            </div>
          </div>

          {/* Content side */}
          <div className="lg:pl-8">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-5">
              Student Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              Meet Grace  ,  The Student Who Almost Gave Up
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Grace was 16 when her parents left. With no family support and mounting school
                fees, she was on the verge of dropping out. Her teachers noticed her struggles,
                but had no resources or training to help.
              </p>
              <p>
                When CHANCE For ALL came to her school in Nyamasheke, Grace was identified as a
                student in need. She received free weekly counseling sessions, one-on-one
                mentorship, and school materials funded by the cross-subsidy model.
              </p>
              <p>
                Today, Grace is in her final year  ,  planning to apply for university. Her story
                is why we exist.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8">
              <p className="text-sm font-semibold text-blue-800">
                Your $50 donation funds a full term of mentorship for one student like Grace.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/impact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors"
              >
                See Our Impact <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/get-involved"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
