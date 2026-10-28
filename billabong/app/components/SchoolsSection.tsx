"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const schools = [
  {
    id: "pre-prep",
    title: "Pre-Prep",
    ages: "Ages 4–7",
    tagline: "Where curiosity begins",
    bg: "bg-[#844685]",
    accentBg: "bg-[#F3C623]",
    textColor: "text-[#FAF4FF]",
    badgeColor: "text-[#F3C623]",
    hoverGlow: "shadow-[0_20px_50px_rgba(132,70,133,0.45)]",
    description:
      "A nurturing start for our youngest pupils — building confidence, curiosity, and a love of learning through play-based discovery.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <circle cx="24" cy="18" r="10" stroke="#F3C623" strokeWidth="2" />
        <path d="M14 40c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#F3C623" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 26s4-6 16-6 16 6 16 6" stroke="#F3C623" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    visual: (
      <svg viewBox="0 0 360 240" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="pp-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FAF4FF" />
            <stop offset="100%" stopColor="#ede5f5" />
          </linearGradient>
        </defs>
        <rect width="360" height="240" fill="url(#pp-bg)" />
        <rect x="0" y="175" width="360" height="65" fill="#10375C" opacity="0.9" />
        {/* Playground slide */}
        <path d="M240 80 L310 175" stroke="#F3C623" strokeWidth="10" strokeLinecap="round" />
        <rect x="240" y="65" width="10" height="115" rx="2" fill="#844685" />
        <rect x="220" y="165" width="100" height="10" rx="3" fill="#10375C" opacity="0.4" />
        {/* Trees */}
        <ellipse cx="70" cy="105" rx="50" ry="55" fill="#844685" opacity="0.85" />
        <ellipse cx="70" cy="85" rx="34" ry="40" fill="#10375C" opacity="0.9" />
        <rect x="63" y="145" width="14" height="70" fill="#10375C" />
        {/* Children */}
        {[[145, 115], [190, 105], [155, 100]].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={15 + i * 2} fill="#F3C623" />
            <rect x={cx - 11} y={cy + 15} width={22 + i * 2} height={30} rx="4" fill={i % 2 === 0 ? "#844685" : "#10375C"} />
          </g>
        ))}
        {/* Sun */}
        <circle cx="310" cy="45" r="30" fill="#F3C623" opacity="0.2" />
        <circle cx="310" cy="45" r="18" fill="#F3C623" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: "junior",
    title: "Junior",
    ages: "Ages 7–11",
    tagline: "Discovery through learning",
    bg: "bg-[#10375C]",
    accentBg: "bg-[#F3C623]",
    textColor: "text-[#FAF4FF]",
    badgeColor: "text-[#F3C623]",
    hoverGlow: "shadow-[0_20px_50px_rgba(16,55,92,0.45)]",
    description:
      "Academically rigorous yet joyful — pupils discover their passions and build strong foundations across all disciplines.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <rect x="8" y="12" width="32" height="24" rx="2" stroke="#F3C623" strokeWidth="2" />
        <path d="M24 12v24M16 20h6M16 28h6M26 20h6M26 28h6" stroke="#F3C623" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    visual: (
      <svg viewBox="0 0 360 240" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect width="360" height="240" fill="#FAF4FF" />
        <rect x="20" y="20" width="320" height="190" fill="#FAF4FF" stroke="#844685" strokeWidth="0.5" />
        {/* Blackboard */}
        <rect x="40" y="30" width="280" height="90" rx="3" fill="#10375C" />
        <text x="100" y="68" fontSize="18" fill="#F3C623" fontFamily="Georgia, serif" fontWeight="bold">Learning Together</text>
        <text x="130" y="92" fontSize="13" fill="#FAF4FF" fontFamily="Georgia, serif">Est. 1965</text>
        {/* Chalk lines */}
        <line x1="55" y1="105" x2="305" y2="105" stroke="#FAF4FF" strokeWidth="1" opacity="0.3" />
        {/* Desks */}
        {[[75, 145], [170, 135], [265, 145]].map(([x, y], i) => (
          <g key={i}>
            <rect x={x - 45} y={y} width="90" height="10" rx="2" fill="#844685" opacity="0.7" />
            <rect x={x - 8} y={y + 10} width="16" height="55" fill="#10375C" opacity="0.4" />
            <circle cx={x} cy={y - 22} r={16} fill={i % 2 === 0 ? "#F3C623" : "#FAF4FF"} />
            <rect x={x - 13} y={y - 6} width="26" height="36" rx="4" fill={i % 2 === 0 ? "#10375C" : "#844685"} />
          </g>
        ))}
      </svg>
    ),
  },
  {
    id: "senior",
    title: "Senior",
    ages: "Ages 11–16",
    tagline: "Ambition meets excellence",
    bg: "bg-[#F3C623]",
    accentBg: "bg-[#10375C]",
    textColor: "text-[#10375C]",
    badgeColor: "text-[#844685]",
    hoverGlow: "shadow-[0_20px_50px_rgba(243,198,35,0.45)]",
    description:
      "Where intellectual ambition meets co-curricular excellence. Students thrive in a stimulating, supportive community.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <path d="M24 8l4 8 9 1.3-6.5 6.3 1.5 9L24 28l-8 4.6 1.5-9L11 17.3l9-1.3z" stroke="#10375C" strokeWidth="2" strokeLinejoin="round" />
        <path d="M24 36v6M18 40h12" stroke="#10375C" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    visual: (
      <svg viewBox="0 0 360 240" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect width="360" height="240" fill="#FAF4FF" />
        {/* Athletics track */}
        <ellipse cx="180" cy="155" rx="145" ry="70" fill="none" stroke="#10375C" strokeWidth="3" opacity="0.2" />
        <ellipse cx="180" cy="155" rx="120" ry="52" fill="none" stroke="#10375C" strokeWidth="1.5" opacity="0.15" />
        {/* Hurdles */}
        {[90, 180, 270].map((x, i) => (
          <g key={i}>
            <rect x={x - 22} y={100 - i * 6} width="44" height="6" rx="2" fill={["#844685", "#F3C623", "#844685"][i]} />
            <rect x={x - 3} y={106 - i * 6} width="6" height="22" fill="#10375C" opacity="0.5" />
          </g>
        ))}
        {/* Runners */}
        {[[105, 92], [200, 82], [295, 92]].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={16} fill="#F3C623" opacity="0.9" />
            <path d={`M${cx} ${cy + 16} Q${cx + 10} ${cy + 30} ${cx + 5} ${cy + 45}`} stroke="#10375C" strokeWidth="3" strokeLinecap="round" />
            <path d={`M${cx} ${cy + 16} Q${cx - 10} ${cy + 30} ${cx - 5} ${cy + 45}`} stroke="#10375C" strokeWidth="3" strokeLinecap="round" />
          </g>
        ))}
        {/* Lab equipment */}
        {[40, 305].map((x, i) => (
          <g key={i}>
            <rect x={x} y={60} width="28" height="60" rx="4" fill="#844685" opacity={0.15 + i * 0.1} />
            <circle cx={x + 14} cy={55} r={12} fill="none" stroke="#844685" strokeWidth="2" opacity="0.5" />
          </g>
        ))}
      </svg>
    ),
  },
  {
    id: "sixth-form",
    title: "Sixth Form",
    ages: "Ages 16–18",
    tagline: "Ready for the world",
    bg: "bg-[#844685]",
    accentBg: "bg-[#F3C623]",
    textColor: "text-[#FAF4FF]",
    badgeColor: "text-[#F3C623]",
    hoverGlow: "shadow-[0_20px_50px_rgba(132,70,133,0.45)]",
    description:
      "Preparing our students for the world's leading universities and careers, with depth, breadth, and genuine ambition.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <path d="M24 6L44 18l-20 8L4 18z" stroke="#F3C623" strokeWidth="2" strokeLinejoin="round" />
        <path d="M4 18v14M44 18v14M14 22v14M34 22v14" stroke="#F3C623" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 32c0 4 7 8 16 8s16-4 16-8" stroke="#F3C623" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    visual: (
      <svg viewBox="0 0 360 240" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="sf-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FAF4FF" />
            <stop offset="100%" stopColor="#ede5f5" />
          </linearGradient>
        </defs>
        <rect width="360" height="240" fill="url(#sf-bg)" />
        <rect x="0" y="155" width="360" height="85" fill="#10375C" opacity="0.95" />
        {/* Historic building */}
        <rect x="80" y="80" width="200" height="120" fill="#10375C" opacity="0.8" />
        <rect x="80" y="60" width="200" height="20" fill="#0a2238" />
        <polygon points="80,60 180,20 280,60" fill="#5c2e5e" />
        {/* Windows */}
        {[100, 155, 215].map(x =>
          [90, 140].map((y, j) => (
            <rect key={`${x}-${y}`} x={x} y={y} width="38" height="40" rx="2" fill="#F3C623" opacity={0.5 + j * 0.2} />
          ))
        )}
        {/* Door */}
        <rect x="158" y="155" width="44" height="45" rx="4" fill="#844685" />
        {/* Graduates */}
        {[[120, 152], [180, 148], [240, 152]].map(([cx, cy], i) => (
          <g key={i} opacity="0.8">
            <circle cx={cx} cy={cy} r={14} fill="#F3C623" />
            {/* Graduation cap */}
            <rect x={cx - 16} y={cy - 18} width="32" height="6" rx="1" fill="#10375C" />
            <rect x={cx - 6} y={cy - 22} width="12" height="8" rx="1" fill="#10375C" />
            <rect x={cx - 12} y={cy + 14} width="24" height="35" rx="4" fill="#FAF4FF" opacity="0.85" />
          </g>
        ))}
      </svg>
    ),
  },
];

export default function SchoolsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#10375C] py-24 md:py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#844685]/8" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#F3C623]/5" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-8 h-px bg-[#F3C623]" />
            <span className="text-[#F3C623]/70 text-xs tracking-[0.25em] uppercase font-sans font-bold">
              Our schools
            </span>
            <span className="block w-8 h-px bg-[#F3C623]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF4FF] leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Four Schools,
            <br />
            <em className="text-[#F3C623] not-italic">One Community</em>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6">
          {schools.map((school, i) => (
            <motion.div
              key={school.id}
              initial={{ opacity: 0, y: 48 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`school-card group cursor-pointer bg-[#FAF4FF] overflow-hidden flex flex-col`}
            >
              {/* Visual */}
              <div className="w-full aspect-[3/2] overflow-hidden relative">
                {school.visual}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#10375C]/0 group-hover:bg-[#10375C]/10 transition-colors duration-400" />
              </div>

              {/* Color header */}
              <div className={`${school.bg} px-5 py-5 flex items-start gap-4`}>
                <div className="shrink-0 mt-0.5">{school.icon}</div>
                <div className="min-w-0">
                  <div className={`${school.badgeColor} text-[0.6rem] tracking-[0.22em] uppercase font-sans font-bold mb-1`}>
                    {school.ages}
                  </div>
                  <h3 className={`${school.textColor} text-lg font-black uppercase tracking-widest font-sans leading-none`}>
                    {school.title}
                  </h3>
                  <p className={`${school.textColor} text-[0.7rem] opacity-70 mt-1 font-sans italic`}>
                    {school.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="bg-[#FAF4FF] px-5 py-5 flex-1 flex flex-col">
                <p className="text-[#10375C]/70 text-sm leading-relaxed flex-1">
                  {school.description}
                </p>
                <a
                  href="#"
                  className="mt-5 flex items-center gap-2 text-[#844685] font-bold text-xs uppercase tracking-wider hover:text-[#F3C623] transition-colors font-sans group/link"
                >
                  <span>Learn more</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Building outline illustration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <svg viewBox="0 0 900 260" className="w-full max-w-4xl opacity-[0.1]" preserveAspectRatio="xMidYMid meet">
            <g stroke="#F3C623" strokeWidth="1.5" fill="none">
              <rect x="200" y="60" width="500" height="180" />
              <polygon points="200,60 450,0 700,60" />
              <rect x="390" y="0" width="120" height="60" stroke="#FAF4FF" />
              <circle cx="450" cy="32" r="20" stroke="#FAF4FF" />
              <line x1="450" y1="14" x2="450" y2="32" stroke="#FAF4FF" />
              <line x1="450" y1="32" x2="464" y2="40" stroke="#FAF4FF" />
              {[230, 330, 440, 540, 620].map(x =>
                [85, 165].map(y => (
                  <rect key={`${x}-${y}`} x={x} y={y} width="55" height="70" rx="2" stroke="#F3C623" strokeWidth="1.2" />
                ))
              )}
              <rect x="406" y="200" width="88" height="40" rx="4" stroke="#FAF4FF" />
              <line x1="80" y1="240" x2="820" y2="240" stroke="#FAF4FF" strokeWidth="1.2" />
            </g>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
