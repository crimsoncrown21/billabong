"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: "pre-prep",
    label: "Pre-Prep",
    tagline: "Where curiosity begins",
    description: "A nurturing start for children aged 4–7, building confidence through play and wonder.",
    gradient: "from-[#10375C] via-[#10375C]/60 to-transparent",
    accentColor: "#F3C623",
    btnVariant: "gold",
    sceneBg: ["#0b2a47", "#13406e"],
    sceneAccent: "#F3C623",
  },
  {
    id: "junior",
    label: "Junior School",
    tagline: "Discovery through learning",
    description: "Academically rigorous yet joyful — pupils aged 7–11 find their passions and build strong foundations.",
    gradient: "from-[#844685] via-[#844685]/50 to-transparent",
    accentColor: "#FAF4FF",
    btnVariant: "light",
    sceneBg: ["#5c2e5e", "#7a3c7c"],
    sceneAccent: "#FAF4FF",
  },
  {
    id: "senior",
    label: "Senior School",
    tagline: "Ambition meets excellence",
    description: "Students aged 11–16 thrive in a stimulating, supportive environment of intellectual ambition.",
    gradient: "from-[#10375C]/90 via-[#10375C]/40 to-transparent",
    accentColor: "#F3C623",
    btnVariant: "gold",
    sceneBg: ["#0d2f4e", "#1a4f7a"],
    sceneAccent: "#F3C623",
  },
  {
    id: "sixth-form",
    label: "Sixth Form",
    tagline: "Ready for the world",
    description: "Preparing students aged 16–18 for the world's leading universities with depth and ambition.",
    gradient: "from-[#844685]/90 via-[#10375C]/60 to-transparent",
    accentColor: "#F3C623",
    btnVariant: "gold",
    sceneBg: ["#3d1f5a", "#10375C"],
    sceneAccent: "#F3C623",
  },
];

const INTERVAL = 5500;

// Elegant geometric scene visuals
const SceneVisual = ({ slide, isActive }: { slide: typeof slides[0]; isActive: boolean }) => {
  const [bg1, bg2] = slide.sceneBg;
  const accent = slide.sceneAccent;

  if (slide.id === "pre-prep") return (
    <svg viewBox="0 0 1440 900" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky-pp" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={bg1} />
          <stop offset="100%" stopColor={bg2} />
        </linearGradient>
        <radialGradient id="sun-pp" cx="70%" cy="25%" r="20%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1440" height="900" fill="url(#sky-pp)" />
      <rect width="1440" height="900" fill="url(#sun-pp)" />
      {/* Ground */}
      <ellipse cx="720" cy="950" rx="1000" ry="260" fill="#0a2038" />
      {/* Abstract trees */}
      {[100, 240, 420, 720, 1020, 1200, 1340].map((x, i) => (
        <g key={i} opacity={0.85 - (i % 3) * 0.1}>
          <rect x={x - 8} y={440 + (i % 2) * 40} width="16" height={200 - (i % 3) * 30} fill={bg1} />
          <ellipse cx={x} cy={400 + (i % 2) * 40} rx={50 + (i % 2) * 20} ry={55 + (i % 3) * 15}
            fill={i % 2 === 0 ? "#844685" : bg2} opacity="0.9" />
          <ellipse cx={x + 18} cy={370 + (i % 2) * 40} rx={32} ry={38}
            fill={accent} opacity={0.2 + (i % 3) * 0.08} />
        </g>
      ))}
      {/* Soft horizon mist */}
      <rect x="0" y="600" width="1440" height="100" fill={bg1} opacity="0.3" />
      {/* Sun halo */}
      <circle cx="1008" cy="225" r="80" fill={accent} opacity="0.08" />
      <circle cx="1008" cy="225" r="50" fill={accent} opacity="0.12" />
      <circle cx="1008" cy="225" r="25" fill={accent} opacity="0.25" />
      {/* Children silhouettes */}
      {[[600, 520], [680, 500], [760, 515]].map(([cx, cy], i) => (
        <g key={i} opacity="0.7">
          <circle cx={cx} cy={cy} r={14 + i * 2} fill={accent} />
          <rect x={cx - 10 - i} y={cy + 14} width={20 + i * 2} height={28 + i * 2} rx="4" fill="#FAF4FF" opacity="0.8" />
        </g>
      ))}
    </svg>
  );

  if (slide.id === "junior") return (
    <svg viewBox="0 0 1440 900" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bg-jr" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bg1} />
          <stop offset="100%" stopColor={bg2} />
        </linearGradient>
      </defs>
      <rect width="1440" height="900" fill="url(#bg-jr)" />
      {/* Large classroom window */}
      <rect x="160" y="140" width="520" height="620" rx="4" fill="#FAF4FF" opacity="0.05" />
      <line x1="420" y1="140" x2="420" y2="760" stroke="#FAF4FF" strokeWidth="2" opacity="0.1" />
      <line x1="160" y1="450" x2="680" y2="450" stroke="#FAF4FF" strokeWidth="2" opacity="0.1" />
      {/* Book shelves */}
      {[820, 960, 1100, 1240].map((x, si) => (
        <g key={si}>
          <rect x={x} y="100" width="100" height="760" fill={bg1} opacity="0.5" />
          {[0, 1, 2, 3, 4, 5, 6, 7].map(row => (
            [0, 1, 2].map(col => (
              <rect key={`${row}-${col}`} x={x + 10 + col * 26} y={120 + row * 90}
                width="20" height={55 + Math.sin(si + row + col) * 12} rx="2"
                fill={["#F3C623", "#FAF4FF", "#844685", "#10375C"][(si + row + col) % 4]}
                opacity="0.75" />
            ))
          ))}
        </g>
      ))}
      {/* Whiteboard */}
      <rect x="200" y="180" width="420" height="220" rx="4" fill="#FAF4FF" opacity="0.88" />
      <text x="410" y="260" textAnchor="middle" fontSize="28" fill="#10375C" fontFamily="Georgia, serif" fontWeight="bold">Excellence in</text>
      <text x="410" y="300" textAnchor="middle" fontSize="28" fill="#844685" fontFamily="Georgia, serif">Scholarship</text>
      {/* Students at desks */}
      {[[280, 500], [400, 520], [530, 505]].map(([cx, cy], i) => (
        <g key={i}>
          <rect x={cx - 50} y={cy} width="100" height="10" rx="3" fill={accent} opacity="0.6" />
          <circle cx={cx} cy={cy - 26} r={18} fill={accent} opacity="0.9" />
          <rect x={cx - 14} y={cy - 8} width="28" height="38" rx="4" fill="#FAF4FF" opacity="0.7" />
        </g>
      ))}
    </svg>
  );

  if (slide.id === "senior") return (
    <svg viewBox="0 0 1440 900" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bg-sr" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={bg1} />
          <stop offset="100%" stopColor={bg2} />
        </linearGradient>
        <radialGradient id="glow-sr" cx="50%" cy="40%" r="30%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.15" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1440" height="900" fill="url(#bg-sr)" />
      <rect width="1440" height="900" fill="url(#glow-sr)" />
      {/* Laboratory equipment silhouettes */}
      {[200, 500, 800, 1100].map((x, i) => (
        <g key={i} opacity="0.7">
          <circle cx={x + 30} cy={450 - i * 20} r={28} fill="none" stroke={accent} strokeWidth="1.5" />
          <rect x={x} y={478 - i * 20} width="60" height="80" rx="4" fill={bg1} stroke={accent} strokeWidth="1" />
          <line x1={x + 30} y1={556 - i * 20} x2={x + 30} y2={630} stroke={accent} strokeWidth="1.5" />
        </g>
      ))}
      {/* Grand arch */}
      <path d="M560 900 L560 380 Q720 260 880 380 L880 900 Z" fill="none" stroke="#FAF4FF" strokeWidth="1.5" opacity="0.12" />
      <path d="M600 900 L600 400 Q720 300 840 400 L840 900 Z" fill="none" stroke={accent} strokeWidth="1" opacity="0.2" />
      {/* Students */}
      {[[640, 620], [720, 600], [800, 620]].map(([cx, cy], i) => (
        <g key={i} opacity="0.75">
          <circle cx={cx} cy={cy} r={20} fill="#F3C623" />
          <rect x={cx - 15} y={cy + 20} width="30" height="50" rx="4" fill={i % 2 === 0 ? "#FAF4FF" : "#844685"} />
        </g>
      ))}
    </svg>
  );

  // Sixth Form
  return (
    <svg viewBox="0 0 1440 900" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bg-sf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bg1} />
          <stop offset="100%" stopColor={bg2} />
        </linearGradient>
      </defs>
      <rect width="1440" height="900" fill="url(#bg-sf)" />
      {/* Historic facade */}
      <rect x="320" y="200" width="800" height="620" fill={bg2} opacity="0.8" />
      <rect x="320" y="140" width="800" height="60" fill={bg1} opacity="0.9" />
      <polygon points="320,140 720,50 1120,140" fill="#5c2e5e" opacity="0.9" />
      {/* Pillars */}
      {[380, 540, 700, 860, 1020].map(x => (
        <rect key={x} x={x} y={200} width="18" height={620} fill="#FAF4FF" opacity="0.07" />
      ))}
      {/* Windows */}
      {[380, 540, 680, 820, 960, 1080].map(x =>
        [220, 360, 500].map((y, j) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="80" height="100" rx="3" fill={accent} opacity={0.06 + j * 0.06} />
        ))
      )}
      {/* Grand door */}
      <path d="M690 820 L690 560 Q720 510 750 560 L750 820 Z" fill="#2d1840" />
      <circle cx="720" cy="560" r="30" fill="none" stroke={accent} strokeWidth="2" opacity="0.5" />
      {/* Clock tower */}
      <rect x="665" y="50" width="110" height="90" fill={bg1} />
      <circle cx="720" cy="100" r="32" fill="none" stroke={accent} strokeWidth="2" opacity="0.7" />
      <line x1="720" y1="82" x2="720" y2="100" stroke={accent} strokeWidth="2" opacity="0.7" />
      <line x1="720" y1="100" x2="734" y2="107" stroke={accent} strokeWidth="2" opacity="0.7" />
      {/* Crest */}
      <path d="M1100 160 L1060 210 L1060 320 Q1100 360 1140 320 L1140 210 Z"
        fill="none" stroke={accent} strokeWidth="2" opacity="0.5" />
    </svg>
  );
};

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const total = slides.length;

  const goTo = useCallback((i: number) => {
    setCurrent(i);
    setProgress(0);
  }, []);

  const goNext = useCallback(() => {
    setCurrent(c => (c + 1) % total);
    setProgress(0);
  }, [total]);

  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min(elapsed / INTERVAL, 1));
    }, 16);
    const slide = setTimeout(goNext, INTERVAL);
    return () => { clearInterval(tick); clearTimeout(slide); };
  }, [current, goNext]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-screen min-h-[560px] overflow-hidden">
      {/* Background scenes */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <SceneVisual slide={slide} isActive />
          {/* Multi-layer gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Slide number indicator */}
      <div className="absolute top-24 md:top-28 right-6 md:right-10 z-10 flex items-center gap-2">
        <span className="text-[#F3C623] font-black text-2xl font-sans leading-none">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="text-[#FAF4FF]/30 text-sm font-sans">/</span>
        <span className="text-[#FAF4FF]/40 text-sm font-sans">
          {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-24 px-6 md:px-14 lg:px-20 max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start gap-5"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="block w-8 h-px bg-[#F3C623]" />
              <span className="text-[#F3C623] text-xs tracking-[0.25em] uppercase font-sans font-bold">
                {slide.tagline}
              </span>
            </motion.div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold text-[#FAF4FF] leading-[0.92] tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {slide.label}
            </h1>

            {/* Description */}
            <p className="text-[#FAF4FF]/75 text-sm md:text-base max-w-md leading-relaxed font-sans hidden sm:block">
              {slide.description}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-4 mt-2">
              {slide.btnVariant === "gold" ? (
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#F3C623] text-[#10375C] font-black text-xs tracking-[0.16em] uppercase px-8 py-4 font-sans hover:bg-[#FAF4FF] transition-all duration-300 shadow-lg shadow-[#F3C623]/20 group"
                >
                  Discover More
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              ) : (
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border-2 border-[#FAF4FF] text-[#FAF4FF] font-black text-xs tracking-[0.16em] uppercase px-8 py-4 font-sans hover:bg-[#FAF4FF] hover:text-[#10375C] transition-all duration-300 group"
                >
                  Discover More
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              )}
              <a
                href="#intro"
                className="text-[#FAF4FF]/60 text-xs tracking-widest uppercase font-sans hover:text-[#FAF4FF] transition-colors"
              >
                Our Story →
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide controls (right side) */}
      <div className="absolute right-6 md:right-10 bottom-20 md:bottom-24 z-10 flex flex-col gap-1.5">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="flex items-center gap-2 group"
            aria-label={`Go to slide ${i + 1}: ${s.label}`}
          >
            <span
              className={`transition-all duration-400 rounded-full ${
                i === current
                  ? "w-10 h-1 bg-[#F3C623]"
                  : "w-5 h-1 bg-[#FAF4FF]/35 group-hover:bg-[#FAF4FF]/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FAF4FF]/10 z-10">
        <div
          className="h-full bg-[#F3C623] transition-none"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 group"
        aria-label="Scroll to content"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-[#FAF4FF]/50 text-[0.6rem] tracking-[0.2em] uppercase font-sans group-hover:text-[#FAF4FF] transition-colors">
          Scroll
        </span>
        <svg className="w-4 h-4 text-[#FAF4FF]/50 group-hover:text-[#F3C623] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.button>
    </section>
  );
}
