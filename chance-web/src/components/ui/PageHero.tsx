interface PageHeroProps {
  badge: string;
  title: string;
  highlight?: string;
  subtitle: string;
  badgeColor?: string;
}

export default function PageHero({ badge, title, highlight, subtitle, badgeColor = "blue" }: PageHeroProps) {
  const bgColors: Record<string, string> = {
    blue: "bg-[#0c1e35]",
    emerald: "bg-[#0c1e35]",
    amber: "bg-amber-700",
    purple: "bg-[#0c1e35]",
    rose: "bg-[#0c1e35]",
    green: "bg-[#0c1e35]",
  };

  const badgeBg: Record<string, string> = {
    blue: "bg-white/10 text-blue-100 border-white/20",
    emerald: "bg-white/10 text-blue-100 border-white/20",
    amber: "bg-amber-600/60 text-amber-100 border-amber-500",
    purple: "bg-white/10 text-blue-200 border-white/20",
    rose: "bg-white/10 text-blue-100 border-white/20",
    green: "bg-white/10 text-blue-100 border-white/20",
  };

  return (
    <div className={`relative ${bgColors[badgeColor] || bgColors.blue} py-20 px-6 text-center overflow-hidden`}>
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <span className={`inline-block text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full mb-5 ${badgeBg[badgeColor] || badgeBg.blue}`}>
          {badge}
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
          {title} {highlight && <span className="text-amber-400">{highlight}</span>}
        </h1>
        <p className="text-lg text-white/70 max-w-xl mx-auto">{subtitle}</p>
      </div>
    </div>
  );
}
