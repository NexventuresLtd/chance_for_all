import { PICSUM } from "../../lib/constants";

const images = [
  { seed: "mentorship-group-session", label: "Group mentorship sessions" },
  { seed: "life-skills-workshop", label: "Life-skills workshops" },
  { seed: "school-partnership-meeting", label: "School partnership" },
  { seed: "career-guidance-day", label: "Career guidance day" },
  { seed: "community-outreach-africa", label: "Community outreach" },
  { seed: "student-celebration-graduation", label: "Student celebrations" },
];

export default function PhotoGallerySection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            Photo Gallery
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Our Impact in Action</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Real moments from our programs, workshops, and community engagement activities
            across Nyamasheke District.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img) => (
            <div
              key={img.seed}
              className="relative rounded-2xl overflow-hidden h-52 bg-blue-100 group"
            >
              <img
                src={PICSUM(img.seed, 600, 400)}
                alt={img.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-900/35 flex items-end p-4">
                <span className="text-white font-semibold text-sm drop-shadow">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          * Placeholder images shown. Real program photos from Nyamasheke District will be
          displayed here.
        </p>
      </div>
    </section>
  );
}
