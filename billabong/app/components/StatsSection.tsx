"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: "94%",
    label: "A Level grades A*–B",
    sublabel: "Class of 2025",
    bg: "bg-[#10375C]",
    valueCls: "text-[#F3C623]",
    labelCls: "text-[#FAF4FF]",
    subCls: "text-[#FAF4FF]/50",
  },
  {
    quote: "The school promotes academic development without discrimination.",
    source: "ISI Inspection Report 2024",
    bg: "bg-[#844685]",
  },
  {
    value: "28",
    label: "Oxbridge acceptances",
    sublabel: "A record-breaking year",
    bg: "bg-[#F3C623]",
    valueCls: "text-[#10375C]",
    labelCls: "text-[#10375C]",
    subCls: "text-[#10375C]/55",
  },
] as const;

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref}>
      {/* ── Stats row + illustration ─────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Stats column */}
        <div className="flex flex-col">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              className={`${"bg" in stat ? stat.bg : ""} px-10 md:px-14 py-12 flex flex-col justify-center min-h-[180px] md:min-h-[210px] relative overflow-hidden`}
            >
              {/* Subtle background circle */}
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-[0.07] bg-white pointer-events-none" />

              {"value" in stat ? (
                <>
                  <div className={`text-6xl md:text-7xl font-black font-sans leading-none ${stat.valueCls}`}>
                    {stat.value}
                  </div>
                  <div className={`text-base font-bold mt-3 font-sans ${stat.labelCls}`}>
                    {stat.label}
                  </div>
                  <div className={`text-xs mt-1 font-sans tracking-wide ${stat.subCls}`}>
                    {stat.sublabel}
                  </div>
                </>
              ) : (
                <>
                  <svg className="w-8 h-8 text-[#F3C623] mb-4 opacity-80" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M0 12c0-6.627 5.373-12 12-12h2v4h-2C6.477 4 2 8.477 2 14v2H8v10H0V12zm20 0c0-6.627 5.373-12 12-12h0v4h0c-5.523 0-10 4.477-10 10v2h6v10H20V12z" />
                  </svg>
                  <blockquote className="text-[#FAF4FF] text-base md:text-lg leading-relaxed italic font-display">
                    {stat.quote}
                  </blockquote>
                  <cite className="text-[#FAF4FF]/60 text-xs mt-4 not-italic font-sans tracking-wider">
                    — {stat.source}
                  </cite>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Architectural illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#10375C] flex items-center justify-center p-8 md:p-12 relative overflow-hidden border-l border-[#844685]/20 min-h-[300px] md:min-h-0"
        >
          {/* Background radial glow */}
          <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(132,70,133,0.18), transparent 70%)" }} />

          <svg viewBox="0 0 520 520" className="w-full max-w-xs md:max-w-sm relative z-10" preserveAspectRatio="xMidYMid meet">
            <g stroke="#F3C623" strokeWidth="1.5" fill="none" opacity="0.92">
              {/* Main building */}
              <rect x="85" y="165" width="350" height="295" />
              <polygon points="85,165 260,72 435,165" />
              {/* Bell tower */}
              <rect x="205" y="72" width="110" height="94" stroke="#FAF4FF" />
              <rect x="220" y="28" width="80" height="48" stroke="#FAF4FF" />
              <circle cx="260" cy="52" r="24" stroke="#FAF4FF" strokeDasharray="4 2" />
              {/* Clock hands */}
              <line x1="260" y1="34" x2="260" y2="52" stroke="#FAF4FF" strokeWidth="2" />
              <line x1="260" y1="52" x2="274" y2="60" stroke="#FAF4FF" strokeWidth="2" />
              {/* Arched door */}
              <path d="M210 460 L210 350 Q260 300 310 350 L310 460" />
              {/* Windows */}
              <rect x="100" y="205" width="65" height="82" rx="3" stroke="#844685" />
              <rect x="215" y="205" width="65" height="82" rx="3" stroke="#844685" />
              <rect x="355" y="205" width="65" height="82" rx="3" stroke="#844685" />
              <rect x="100" y="320" width="65" height="82" rx="3" stroke="#844685" />
              <rect x="355" y="320" width="65" height="82" rx="3" stroke="#844685" />
              {/* Ground line */}
              <line x1="40" y1="460" x2="480" y2="460" stroke="#FAF4FF" strokeWidth="1.2" />
            </g>
            {/* Decorative circles */}
            <circle cx="435" cy="90" r="65" fill="#844685" opacity="0.18" />
            <circle cx="85" cy="430" r="42" fill="#F3C623" opacity="0.12" />
          </svg>
        </motion.div>
      </div>

      {/* ── Award banner ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 md:grid-cols-2"
      >
        {/* Award visual */}
        <div className="relative bg-[#FAF4FF] overflow-hidden flex items-center justify-center min-h-[280px] md:min-h-[340px]">
          {/* Subtle background blobs */}
          <div className="absolute top-6 left-6 w-24 h-24 rounded-full bg-[#844685]/10 blur-xl" />
          <div className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-[#F3C623]/12 blur-xl" />

          <svg viewBox="0 0 700 340" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="award-glow" cx="50%" cy="50%" r="40%">
                <stop offset="0%" stopColor="#F3C623" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#F3C623" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="700" height="340" fill="#FAF4FF" />
            <rect width="700" height="340" fill="url(#award-glow)" />
            {/* Foliage circles */}
            {[60, 150, 540, 630].map((x, i) => (
              <circle key={i} cx={x} cy={180 + (i % 3) * 18} r={25 + (i % 2) * 14} fill={i % 2 === 0 ? "#844685" : "#10375C"} opacity="0.18" />
            ))}
            {/* Outer frame */}
            <rect x="238" y="38" width="224" height="268" rx="6" fill="#10375C" stroke="#F3C623" strokeWidth="3" />
            {/* Inner plaque */}
            <rect x="250" y="50" width="200" height="244" rx="4" fill="#844685" />
            {/* Decorative lines */}
            <line x1="268" y1="108" x2="432" y2="108" stroke="#F3C623" strokeWidth="0.8" opacity="0.5" />
            <line x1="268" y1="186" x2="432" y2="186" stroke="#F3C623" strokeWidth="0.8" opacity="0.5" />
            {/* Text */}
            <text x="350" y="82" textAnchor="middle" fontSize="9" fill="#F3C623" fontFamily="system-ui" letterSpacing="3" fontWeight="bold">THE SUNDAY TIMES</text>
            <text x="350" y="98" textAnchor="middle" fontSize="8" fill="#FAF4FF" fontFamily="system-ui" letterSpacing="2" opacity="0.7">SCHOOLS GUIDE</text>
            <text x="350" y="140" textAnchor="middle" fontSize="42" fill="#F3C623" fontFamily="Georgia, serif" fontWeight="bold">2025</text>
            <text x="350" y="165" textAnchor="middle" fontSize="8" fill="#FAF4FF" fontFamily="system-ui" letterSpacing="2" opacity="0.6">⸻ TOP 20 ⸻</text>
            <text x="350" y="204" textAnchor="middle" fontSize="7.5" fill="#FAF4FF" fontFamily="system-ui" letterSpacing="1.5" opacity="0.75">INDEPENDENT SECONDARY SCHOOL</text>
            <text x="350" y="222" textAnchor="middle" fontSize="7" fill="#F3C623" fontFamily="system-ui" letterSpacing="2" fontWeight="bold">ACADEMIC EXCELLENCE</text>
            {/* Star */}
            <text x="350" y="275" textAnchor="middle" fontSize="22" fill="#F3C623" opacity="0.7">★</text>
          </svg>
        </div>

        {/* Award text */}
        <div className="bg-[#844685] px-10 md:px-14 py-14 md:py-16 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#FAF4FF]/5 pointer-events-none" />

          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-[#F3C623]/60" />
            <span className="text-[#F3C623]/70 text-[0.6rem] tracking-[0.25em] uppercase font-sans font-bold">
              Award winning
            </span>
          </div>

          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#FAF4FF] leading-tight mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Billabong is an<br />
            <em className="text-[#F3C623] not-italic font-bold">Award-Winning</em> School
          </h3>

          <p className="text-[#FAF4FF]/80 text-sm md:text-base leading-relaxed mb-8">
            Billabong School was named Independent School of the Year by the Sunday
            Times Schools Guide 2024, and featured in the Top 20 independent secondary
            schools for academic excellence in their 2025 guide.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 w-fit bg-[#F3C623] text-[#10375C] font-black px-8 py-4 text-xs uppercase tracking-widest font-sans hover:bg-[#FAF4FF] transition-all duration-300 group shadow-lg shadow-[#10375C]/20"
          >
            Visit our Awards page
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
