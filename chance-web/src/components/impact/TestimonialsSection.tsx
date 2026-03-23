import { Quote } from "lucide-react";
import { PICSUM } from "../../lib/constants";

const testimonials = [
  {
    quote:
      "I felt lost and alone. My mentor at Chance for All helped me believe in my future again. For the first time, I have a plan.",
    name: "Grace",
    role: "Student, Ntendezi, Nyamasheke District",
    image: PICSUM("young-woman-hopeful", 200, 200),
  },
  {
    quote:
      "The mentorship program has given my son focus. He's more confident and serious about his studies. I see a real change.",
    name: "Parent",
    role: "Parent of enrolled student",
    image: PICSUM("african-parent-smiling", 200, 200),
  },
  {
    quote:
      "We've seen a remarkable improvement in student discipline and emotional well-being since the program began at our school.",
    name: "School Administrator",
    role: "Partner School, Nyamasheke",
    image: PICSUM("teacher-professional", 200, 200),
  },
  {
    quote:
      "Being a mentor here has been one of the most rewarding experiences of my life. These students are hungry to grow.",
    name: "Program Mentor",
    role: "Volunteer Mentor, CHANCE For ALL",
    image: PICSUM("mentor-young-professional", 200, 200),
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            Words from Our Community
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Real stories from students, parents, teachers, and mentors who have experienced
            the impact of CHANCE For ALL.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-3xl p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="w-8 h-8 text-amber-400 mb-4" />
              <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover bg-blue-100"
                />
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          * Some names withheld for privacy and child protection compliance.
        </p>
      </div>
    </section>
  );
}
