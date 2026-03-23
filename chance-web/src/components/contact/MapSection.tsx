import { MapPin } from "lucide-react";

export default function MapSection() {
  return (
    <section className="bg-white py-8 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-gray-900">Find Us in Nyamasheke</h3>
          </div>
          <p className="text-gray-500 text-sm">
            Ntendezi, Nyamasheke District, Western Province, Rwanda
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm h-80">
          <iframe
            title="Ntendezi, Nyamasheke District, Rwanda"
            src="https://www.google.com/maps?q=Ntendezi,+Nyamasheke+District,+Western+Province,+Rwanda&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
