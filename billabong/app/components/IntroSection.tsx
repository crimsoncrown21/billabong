"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const slideIn: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export default function IntroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="intro" ref={ref} className="bg-[#FAF4FF] overflow-hidden">
      {/* ── Tagline banner ──────────────────────────────── */}
      <div className="relative border-b border-[#844685]/12">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center"
        >
          {/* Section label */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-8">
            <span className="block w-8 h-px bg-[#F3C623]" />
            <span className="text-[#844685] text-xs tracking-[0.25em] uppercase font-sans font-bold">
              Welcome to Billabong
            </span>
            <span className="block w-8 h-px bg-[#F3C623]" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-normal leading-[1.35] text-[#10375C]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            A top independent co-educational school, welcoming pupils{" "}
            <em className="text-[#844685] not-italic font-semibold">aged 4 to 18</em>{" "}
            across Pre-Prep, Junior, Senior, and Sixth Form.
          </motion.h2>
        </motion.div>

        {/* Decorative rule */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-[#844685]/40 to-transparent" />
      </div>

      {/* ── Body content ────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-start">

          {/* ── Text column ─────────────────────────────── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {/* Drop-cap paragraph */}
            <motion.p
              variants={slideIn}
              className="text-base md:text-lg leading-relaxed text-[#10375C] mb-6"
            >
              <span
                className="float-left text-6xl md:text-7xl font-black leading-none mr-3 mt-1"
                style={{
                  color: "#FAF4FF",
                  backgroundColor: "#10375C",
                  padding: "4px 14px 4px 12px",
                  fontFamily: "Georgia, serif",
                  lineHeight: 1,
                  borderBottom: "3px solid #F3C623",
                }}
              >
                W
              </span>
              elcome to Billabong School — we are justifiably proud of our{" "}
              60-year history as a leading independent school, founded in the heart of
              our vibrant community.
            </motion.p>

            <motion.p variants={fadeUp} className="text-sm md:text-base leading-relaxed text-[#10375C]/75 mb-5 clear-left">
              Our co-educational school offers high-calibre and academically minded
              teaching with a focus on scholarship and independence for all, rather than
              on exam outcomes alone. Our varied co-curricular activities, and
              wide-reaching programme of partnerships, enable pupils to develop
              interests and hobbies, forge lasting friendships, and learn the value of
              community.
            </motion.p>

            <motion.p variants={fadeUp} className="text-sm md:text-base leading-relaxed text-[#10375C]/75 mb-8">
              We believe in making the most of childhood and adolescence; we want our
              young people to leave us intellectually and emotionally prepared for
              higher education and for work, as well as playing a transformative role
              inside and outside of school.
            </motion.p>

            {/* Signature */}
            <motion.div variants={fadeUp} className="flex items-start gap-4 mb-10 border-l-2 border-[#F3C623] pl-5">
              <div>
                <p className="font-bold text-[#10375C] text-sm font-sans">Dr. Sarah Mitchell</p>
                <p className="text-[#844685] text-xs font-sans tracking-wide uppercase mt-0.5">
                  Headmistress, Billabong School
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 border-2 border-[#10375C] text-[#10375C] px-7 py-3 text-xs uppercase tracking-widest font-sans font-bold hover:bg-[#10375C] hover:text-[#FAF4FF] transition-all duration-300 group"
              >
                Our story
                <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#844685] text-[#FAF4FF] px-7 py-3 text-xs uppercase tracking-widest font-sans font-bold hover:bg-[#10375C] transition-all duration-300 group"
              >
                Book a visit
                <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* ── Visual column ────────────────────────────── */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="relative"
          >
            {/* Main illustration */}
            <div className="relative w-full aspect-[5/4] overflow-hidden shadow-[0_30px_80px_rgba(16,55,92,0.18)] border border-[#844685]/12">
              <svg viewBox="0 0 600 480" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="sky-intro" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10375C" />
                    <stop offset="55%" stopColor="#844685" />
                    <stop offset="100%" stopColor="#FAF4FF" />
                  </linearGradient>
                  <linearGradient id="bldg-intro" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0d2b48" />
                    <stop offset="100%" stopColor="#10375C" />
                  </linearGradient>
                </defs>
                {/* Sky */}
                <rect width="600" height="480" fill="url(#sky-intro)" />
                {/* Soft sun */}
                <circle cx="480" cy="90" r="55" fill="#F3C623" opacity="0.1" />
                <circle cx="480" cy="90" r="32" fill="#F3C623" opacity="0.16" />
                {/* Building */}
                <rect x="50" y="160" width="500" height="295" fill="url(#bldg-intro)" />
                <rect x="50" y="114" width="500" height="46" fill="#0a2238" />
                <polygon points="50,114 300,38 550,114" fill="#5c2e5e" />
                {/* Pillars */}
                {[90, 200, 300, 400, 460].map(x => (
                  <rect key={x} x={x} y={160} width="10" height={295} fill="#FAF4FF" opacity="0.06" />
                ))}
                {/* Windows */}
                {[80, 175, 270, 365, 460].map(x =>
                  [175, 285].map((y, j) => (
                    <g key={`${x}-${y}`}>
                      <rect x={x} y={y} width="70" height="82" rx="2" fill="#F3C623" opacity={0.7 + j * 0.1} />
                      <line x1={x + 35} y1={y} x2={x + 35} y2={y + 82} stroke="#10375C" strokeWidth="1.5" opacity="0.3" />
                    </g>
                  ))
                )}
                {/* Door */}
                <rect x="255" y="310" width="90" height="145" rx="6" fill="#844685" />
                <circle cx="335" cy="388" r="5" fill="#F3C623" />
                {/* Steps */}
                {[0, 1, 2].map(i => (
                  <rect key={i} x={240 - i * 12} y={454 + i * 8} width={120 + i * 24} height={8} rx="1" fill="#F3C623" opacity={0.5 - i * 0.1} />
                ))}
                {/* Trees */}
                {[[60, 195], [520, 195]].map(([cx, cy], i) => (
                  <g key={i}>
                    <ellipse cx={cx} cy={cy} rx={48} ry={52} fill="#844685" opacity="0.85" />
                    <ellipse cx={cx} cy={cy - 18} rx={32} ry={36} fill="#10375C" opacity="0.9" />
                    <rect x={cx - 7} y={cy + 42} width="14" height={90} fill="#10375C" />
                  </g>
                ))}
                {/* Ground */}
                <ellipse cx="300" cy="490" rx="380" ry="60" fill="#10375C" />
              </svg>
            </div>

            {/* Floating stat badge — bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 16 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-5 -left-4 md:-left-7 bg-[#10375C] border-l-4 border-[#F3C623] text-[#FAF4FF] p-5 shadow-2xl"
            >
              <div className="text-4xl md:text-5xl font-black text-[#F3C623] font-sans leading-none">60+</div>
              <div className="text-[0.65rem] tracking-[0.2em] uppercase font-semibold text-[#FAF4FF]/80 mt-1.5 font-sans">
                Years of Excellence
              </div>
            </motion.div>

            {/* Floating stat badge — top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -16 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.65, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -top-5 -right-4 md:-right-7 bg-[#F3C623] border-l-4 border-[#844685] text-[#10375C] p-5 shadow-2xl"
            >
              <div className="text-4xl md:text-5xl font-black font-sans leading-none">94%</div>
              <div className="text-[0.65rem] tracking-[0.18em] uppercase font-semibold mt-1.5 font-sans opacity-80">
                A*–B at A-Level
              </div>
            </motion.div>

            {/* Decorative corner line */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#844685]/30 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
