"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const newsItems = [
  {
    id: 1,
    title: "Billabong Hosts Model United Nations",
    date: "15 October 2025",
    category: "Events",
    excerpt:
      "Over 200 students from 14 schools participated in our annual Model United Nations conference, tackling global challenges with diplomacy and debate.",
    visual: (
      <svg viewBox="0 0 600 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="mun-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10375C" />
            <stop offset="100%" stopColor="#0d2b48" />
          </linearGradient>
        </defs>
        <rect width="600" height="400" fill="url(#mun-bg)" />
        {/* Spotlights */}
        {[100, 200, 300, 400, 500].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy={28} r={14} fill="#F3C623" opacity="0.85" />
            <path d={`M ${x} 42 L ${x - 52} 260 L ${x + 52} 260 Z`} fill="#F3C623" opacity="0.05" />
          </g>
        ))}
        {/* Stage backdrop */}
        <rect x="80" y="80" width="440" height="200" fill="#844685" opacity="0.5" />
        <text x="300" y="190" textAnchor="middle" fontSize="36" fill="#FAF4FF" fontFamily="Georgia, serif" fontWeight="bold" opacity="0.9">MUN 2025</text>
        {/* Audience */}
        {[60, 135, 210, 290, 370, 450, 525].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy={290 + (i % 2) * 16} r={15} fill={["#F3C623", "#FAF4FF", "#F3C623"][i % 3]} opacity="0.85" />
            <rect x={x - 12} y={305 + (i % 2) * 16} width="24" height="42" rx="4" fill={i % 2 === 0 ? "#844685" : "#10375C"} />
          </g>
        ))}
        {/* Country flags (abstract) */}
        {[100, 170, 240].map((x, i) => (
          <rect key={i} x={x} y={85} width={16} height={40} rx="1" fill={["#F3C623", "#FAF4FF", "#844685"][i]} opacity="0.7" />
        ))}
      </svg>
    ),
  },
  {
    id: 2,
    title: "New Chair of Governors Appointed",
    date: "8 October 2025",
    category: "Announcement",
    excerpt:
      "We are delighted to announce the appointment of our new Chair of Governors, bringing 25 years of educational leadership experience.",
    visual: (
      <svg viewBox="0 0 600 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="gov-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#844685" />
            <stop offset="100%" stopColor="#10375C" />
          </linearGradient>
        </defs>
        <rect width="600" height="400" fill="url(#gov-bg)" />
        {/* Building facade */}
        {[80, 220, 360, 490].map(x =>
          [110, 220].map((y, j) => (
            <rect key={`${x}-${y}`} x={x} y={y} width="88" height="96" rx="3" fill="#F3C623" opacity={0.6 + j * 0.15} />
          ))
        )}
        {/* Feature figure */}
        <circle cx="300" cy="195" r="38" fill="#F3C623" opacity="0.95" />
        <rect x="265" y="233" width="70" height="100" rx="8" fill="#FAF4FF" opacity="0.85" />
        {/* Decorative arch */}
        <path d="M220 400 L220 290 Q300 230 380 290 L380 400 Z" fill="#10375C" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Sixth Form Students Win Science Olympiad",
    date: "2 October 2025",
    category: "Achievement",
    excerpt:
      "Our Sixth Form science team claimed gold at the National Schools Science Olympiad, excelling in chemistry and physics challenges.",
    visual: (
      <svg viewBox="0 0 600 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect width="600" height="400" fill="#10375C" />
        {/* Trophy */}
        <path d="M258 60 L342 60 L355 180 Q380 205 355 230 L330 230 L330 275 L375 288 L375 312 L225 312 L225 288 L270 275 L270 230 L245 230 Q220 205 245 180 Z" fill="#F3C623" opacity="0.95" />
        <circle cx="300" cy="195" r="24" fill="#10375C" />
        <text x="300" y="202" textAnchor="middle" fontSize="14" fill="#F3C623" fontFamily="Georgia" fontWeight="bold">1st</text>
        {/* Stars */}
        {[[150, 100], [430, 85], [180, 280], [420, 270], [110, 180], [480, 195]].map(([x, y], i) => (
          <g key={i} transform={`translate(${x},${y})`}>
            <polygon points="0,-10 2.4,-3.3 9.5,-3.3 4,-1.2 6.4,6 0,2 -6.4,6 -4,1.2 -9.5,-3.3 -2.4,-3.3"
              fill="#FAF4FF" opacity={0.3 + (i % 3) * 0.15} />
          </g>
        ))}
        {/* Podium */}
        <rect x="200" y="315" width="200" height="55" rx="3" fill="#844685" opacity="0.6" />
        <rect x="240" y="295" width="120" height="75" rx="3" fill="#844685" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Record Oxbridge Acceptances in 2025",
    date: "25 September 2025",
    category: "Results",
    excerpt:
      "A record-breaking 28 students received offers from Oxford and Cambridge, reflecting our commitment to academic excellence.",
    visual: (
      <svg viewBox="0 0 600 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="ox-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10375C" />
            <stop offset="100%" stopColor="#844685" />
          </linearGradient>
        </defs>
        <rect width="600" height="400" fill="url(#ox-bg)" />
        {/* Big number */}
        <text x="300" y="175" textAnchor="middle" fontSize="120" fill="#F3C623" opacity="0.18" fontFamily="Georgia, serif" fontWeight="bold">28</text>
        {/* Graduate figures */}
        {[[165, 258], [255, 240], [345, 258], [435, 240]].map(([cx, cy], i) => (
          <g key={i} opacity="0.85">
            <circle cx={cx} cy={cy} r={22} fill="#F3C623" />
            {/* Graduation cap */}
            <rect x={cx - 20} y={cy - 28} width="40" height="7" rx="1" fill="#10375C" />
            <rect x={cx - 7} y={cy - 34} width="14" height="9" rx="1" fill="#10375C" />
            <line x1={cx + 14} y1={cy - 26} x2={cx + 22} y2={cy - 18} stroke="#F3C623" strokeWidth="1.5" />
            <circle cx={cx + 22} cy={cy - 16} r="3" fill="#F3C623" />
            <path d={`M${cx - 26} ${cy + 26} L${cx} ${cy + 88} L${cx + 26} ${cy + 26} Q${cx} ${cy + 55} ${cx} ${cy + 26} Z`}
              fill="#FAF4FF" opacity="0.8" />
          </g>
        ))}
        {/* Banner */}
        <rect x="100" y="340" width="400" height="40" rx="3" fill="#F3C623" opacity="0.15" />
        <text x="300" y="366" textAnchor="middle" fontSize="12" fill="#FAF4FF" fontFamily="system-ui" fontWeight="bold" letterSpacing="3">RECORD YEAR 2025</text>
      </svg>
    ),
  },
];

const categoryColor: Record<string, string> = {
  Events: "bg-[#844685]/10 text-[#844685]",
  Announcement: "bg-[#10375C]/10 text-[#10375C]",
  Achievement: "bg-[#F3C623]/15 text-[#856b10]",
  Results: "bg-[#F3C623]/15 text-[#856b10]",
};

export default function NewsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [page, setPage] = useState(0);
  const perPage = 2;
  const pages = Math.ceil(newsItems.length / perPage);
  const visible = newsItems.slice(page * perPage, page * perPage + perPage);

  return (
    <section ref={ref} className="bg-[#FAF4FF] py-24 md:py-32 px-4 md:px-6 border-b border-[#844685]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-px bg-[#F3C623]" />
              <span className="text-[#844685] text-xs tracking-[0.25em] uppercase font-sans font-bold">
                Latest news
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#10375C]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Billabong <em className="text-[#844685] not-italic">News</em>
            </h2>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#10375C] border-2 border-[#10375C] px-6 py-3 text-xs uppercase tracking-widest font-sans font-bold hover:bg-[#10375C] hover:text-[#FAF4FF] transition-all duration-300 group shrink-0"
          >
            All news
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>

        {/* Cards */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            >
              {visible.map((item) => (
                <article
                  key={item.id}
                  className="news-card group cursor-pointer bg-white shadow-[0_4px_24px_rgba(16,55,92,0.08)] overflow-hidden border border-[#844685]/8 hover:shadow-[0_16px_48px_rgba(16,55,92,0.16)] transition-shadow duration-400"
                >
                  {/* Visual */}
                  <div className="overflow-hidden aspect-[16/9]">
                    {item.visual}
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-7">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-[0.65rem] px-2.5 py-1 font-bold uppercase tracking-wider font-sans rounded-sm ${categoryColor[item.category] ?? "bg-gray-100 text-gray-600"}`}>
                        {item.category}
                      </span>
                      <span className="text-[#10375C]/40 text-xs font-sans">
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-[#10375C] text-lg md:text-xl font-bold tracking-tight font-sans group-hover:text-[#844685] transition-colors duration-200 leading-snug mb-3">
                      {item.title}
                    </h3>

                    <p className="text-[#10375C]/60 text-sm leading-relaxed mb-5">
                      {item.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-[#844685] text-xs font-bold uppercase tracking-wider font-sans group-hover:text-[#F3C623] transition-colors">
                      Read more
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-10 md:mt-12">
          <div className="flex gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === page ? "w-10 bg-[#844685]" : "w-4 bg-[#844685]/25 hover:bg-[#844685]/50"
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-11 h-11 flex items-center justify-center border border-[#10375C]/20 text-[#10375C] hover:bg-[#10375C] hover:text-[#FAF4FF] hover:border-[#10375C] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setPage(p => Math.min(pages - 1, p + 1))}
              disabled={page === pages - 1}
              className="w-11 h-11 flex items-center justify-center bg-[#F3C623] text-[#10375C] hover:bg-[#844685] hover:text-[#FAF4FF] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
