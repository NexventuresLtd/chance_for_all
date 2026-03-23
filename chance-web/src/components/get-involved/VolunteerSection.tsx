import { Check, MessageCircle, Sprout } from "lucide-react";
import { whatsappMsg, PICSUM } from "../../lib/constants";

const WHATSAPP_VOLUNTEER = whatsappMsg(
  "Hello! I am interested in volunteering as a mentor with CHANCE For ALL. Please tell me about the process."
);

const requirements = [
  "Background in counseling, psychology, education, or related field",
  "Passion for youth development and mental health",
  "Ability to commit to regular weekly sessions",
  "Willingness to complete our safeguarding training",
  "Good communication and interpersonal skills",
  "Fluency in Kinyarwanda and/or English/French",
];

const mentorBenefits = [
  "Comprehensive mentor training provided",
  "Ongoing support and supervision",
  "Certificate of volunteering and impact",
  "Join a passionate community of change-makers",
];

export default function VolunteerSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="space-y-5">
            <div className="relative h-72 rounded-3xl overflow-hidden bg-blue-100">
              <img
                src={PICSUM("mentor-youth-volunteer", 600, 400)}
                alt="Volunteer mentor with students"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/20" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 rounded-2xl p-4">
                  <p className="text-sm font-semibold text-gray-900">
                    "Being a mentor here has been one of the most rewarding experiences of my life."
                  </p>
                  <p className="text-blue-600 text-xs mt-1"> ,  Program Mentor, CHANCE For ALL</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <Sprout className="w-5 h-5" />
                What Mentors Receive
              </h4>
              <ul className="space-y-2">
                {mentorBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-blue-700">
                    <Check className="w-4 h-4 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-5">
              Volunteer
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Become a Mentor</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Do you have a background in counseling, psychology, education, or social work? We are
              always looking for passionate volunteers to join our mentorship team.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              <span className="font-semibold text-gray-800">Training is provided.</span> You'll
              receive comprehensive onboarding before working with any student, ensuring you
              have the tools and confidence to make a real difference.
            </p>

            <h4 className="font-bold text-gray-900 mb-3">We're Looking For</h4>
            <ul className="space-y-2 mb-8">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-600">{r}</span>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_VOLUNTEER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              Apply to Volunteer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
