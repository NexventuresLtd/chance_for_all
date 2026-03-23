import { useState } from "react";
import { Users } from "lucide-react";
import { PICSUM } from "../../lib/constants";

const founder = {
  name: "Chancelline Niyotugendana",
  role: "Founder & Program Director",
  id: "Ntendezi, Nyamasheke District, Rwanda",
  bio: "Passionate about youth mental health and rural development, Chancelline founded CHANCE For ALL to ensure every teenager in Nyamasheke has access to the guidance they deserve.",
  photo: "/founder.jpg",
  picsum: PICSUM("professional-woman-portrait", 400, 480),
};

const team = [
  {
    name: "Jean-Paul Habimana",
    role: "Program Coordinator",
    id: "Nyamasheke District, Rwanda",
    bio: "Jean-Paul oversees day-to-day program delivery across partner schools, ensuring mentorship sessions run smoothly and outcomes are tracked with care.",
    picsum: PICSUM("professional-man-rwanda", 400, 480),
  },
  {
    name: "Marie-Claire Uwimana",
    role: "Lead Counselor",
    id: "Nyamasheke District, Rwanda",
    bio: "A trained psychosocial counselor, Marie-Claire leads our one-on-one and group sessions for students navigating trauma, grief, and academic pressure.",
    picsum: PICSUM("professional-woman-counselor", 400, 480),
  },
  {
    name: "Emmanuel Ndayishimiye",
    role: "Community Outreach Officer",
    id: "Western Province, Rwanda",
    bio: "Emmanuel bridges the gap between CHANCE For ALL and local families, building trust within communities and identifying teenagers most in need of support.",
    picsum: PICSUM("community-outreach-man", 400, 480),
  },
  {
    name: "Solange Mukamana",
    role: "Mentor Trainer",
    id: "Kigali, Rwanda",
    bio: "Solange designs and facilitates training workshops for volunteer mentors, equipping them with the tools to guide students through career discovery and personal growth.",
    picsum: PICSUM("trainer-woman-professional", 400, 480),
  },
];

function FounderCard() {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-64 bg-blue-50">
        <img
          src={imgError ? founder.picsum : founder.photo}
          alt={founder.name}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
        <div className="absolute inset-0 bg-[#0c1e35]/10" />
      </div>
      <div className="p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Users className="w-4 h-4 text-blue-600" />
          <span className="text-blue-600 font-medium text-sm">{founder.role}</span>
        </div>
        <h3 className="font-bold text-gray-900 text-lg mb-0.5">{founder.name}</h3>
        <div className="text-gray-400 text-xs mb-4">{founder.id}</div>
        <p className="text-sm text-gray-500 leading-relaxed">{founder.bio}</p>
      </div>
    </div>
  );
}

function TeamCard({ member }: { member: typeof team[0] }) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-52 bg-blue-50">
        <img
          src={member.picsum}
          alt={member.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0c1e35]/10" />
      </div>
      <div className="p-5 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Users className="w-4 h-4 text-blue-600" />
          <span className="text-blue-600 font-medium text-xs">{member.role}</span>
        </div>
        <h3 className="font-bold text-gray-900 text-base mb-0.5">{member.name}</h3>
        <div className="text-gray-400 text-xs mb-3">{member.id}</div>
        <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );
}

export default function FounderTeamSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            Our People
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Meet Our Team</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Driven by purpose, guided by values — meet the people behind CHANCE For ALL.
          </p>
        </div>

        {/* Founder featured */}
        <div className="grid sm:grid-cols-1 gap-8 max-w-sm mx-auto mb-10">
          <FounderCard />
        </div>

        {/* Rest of team */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {team.map((t) => (
            <TeamCard key={t.name} member={t} />
          ))}
        </div>

        {/* Founder quote */}
        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 max-w-3xl mx-auto text-center">
          <p className="text-blue-800 text-lg italic leading-relaxed mb-4">
            "I started Chance for All because I saw brilliant students dropping out not because
            they weren't smart, but because they had no one to guide them through their struggles."
          </p>
          <p className="text-blue-600 font-bold text-sm">
            Chancelline Niyotugendana, Founder
          </p>
        </div>
      </div>
    </section>
  );
}
