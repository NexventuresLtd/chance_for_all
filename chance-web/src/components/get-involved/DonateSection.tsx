import { Heart, MessageCircle, Check } from "lucide-react";
import { whatsappMsg } from "../../lib/constants";

const impacts = [
  { amount: 25, impact: "Funds one week of mentorship for a vulnerable student." },
  { amount: 50, impact: "Funds a full term of mentorship for one student like Grace." },
  { amount: 100, impact: "Funds counseling sessions for two students for a month." },
  { amount: 500, impact: "Sponsors a student's full year of program support." },
];

export default function DonateSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-4">
            Donate
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Your Donation Creates a Chance
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            100% of donations go toward program delivery. Choose an amount below to see
            your exact impact on a teenager's life in Nyamasheke.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {impacts.map((item) => (
            <div
              key={item.amount}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-amber-200 transition-all flex flex-col"
            >
              <div className="text-3xl font-extrabold text-amber-500 mb-2">${item.amount}</div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{item.impact}</p>
              <a
                href={whatsappMsg(
                  `Hello! I would like to donate $${item.amount} to CHANCE For ALL. Please guide me through the process.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-sm transition-colors"
              >
                <Heart className="w-4 h-4" />
                Donate ${item.amount}
              </a>
            </div>
          ))}
        </div>

        {/* Custom amount */}
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-7 max-w-2xl mx-auto text-center mb-10">
          <h3 className="font-bold text-amber-900 mb-2">Want to donate a custom amount?</h3>
          <p className="text-amber-700 text-sm mb-4">
            Send us a WhatsApp message and we'll guide you through the donation process via
            MTN MoMo or any preferred method.
          </p>
          <a
            href={whatsappMsg(
              "Hello! I would like to make a donation to CHANCE For ALL. Please let me know the options."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Donate via WhatsApp
          </a>
        </div>

        {/* Promises */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            "100% of donations fund program delivery",
            "Full transparency through annual impact reports",
            "Aligned with SDG 3 and SDG 4",
          ].map((promise) => (
            <div key={promise} className="flex items-start gap-2.5 text-sm text-gray-600">
              <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
              {promise}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
