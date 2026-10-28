"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const navItems = [
  { label: "About", href: "#" },
  { label: "News", href: "#" },
  { label: "Pre-Prep", href: "#" },
  { label: "Junior", href: "#" },
  { label: "Senior", href: "#" },
  { label: "Sixth Form", href: "#" },
  { label: "Admissions", href: "#" },
];

const secondaryNav = [
  "Our Community",
  "Support Us",
  "Sports",
  "Book & Hire",
  "Work With Us",
  "Contact",
];

const overlayVariants: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    clipPath: "inset(0 0 100% 0)",
    opacity: 0,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.08 + i * 0.055, duration: 0.45, ease: "easeOut" },
  }),
};

const secondaryVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.05, duration: 0.4, ease: "easeOut" },
  }),
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF4FF]/96 backdrop-blur-xl shadow-[0_2px_20px_rgba(16,55,92,0.12)]"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-stretch justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 bg-[#10375C] px-6 md:px-8 group" aria-label="Billabong School home">
            <span className="text-[#FAF4FF] font-black text-xl md:text-2xl tracking-[0.2em] uppercase font-sans leading-none select-none">
              Billabong
            </span>
            <span className="hidden md:block w-px h-6 bg-[#F3C623]/40" />
            <span
              className="hidden md:block text-[#F3C623]/70 text-[0.6rem] tracking-[0.22em] uppercase font-sans font-semibold leading-tight"
              style={{ writingMode: "horizontal-tb" }}
            >
              Est. 1965
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-0 flex-1 px-8">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onMouseEnter={() => setHovered(label)}
                onMouseLeave={() => setHovered(null)}
                className={`relative px-4 h-full flex items-center text-xs font-bold tracking-widest uppercase font-sans transition-colors duration-200 ${
                  scrolled ? "text-[#10375C]" : "text-[#FAF4FF]"
                } hover:text-[#F3C623]`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#F3C623] transition-transform duration-300 origin-left ${
                    hovered === label ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-stretch gap-0">
            {/* Search (desktop) */}
            <button
              className={`hidden md:flex items-center justify-center w-12 transition-colors ${
                scrolled ? "text-[#10375C] hover:bg-[#10375C]/8" : "text-[#FAF4FF] hover:bg-white/10"
              }`}
              aria-label="Search"
            >
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.2-5.2m0 0A7.5 7.5 0 1 0 5.8 5.8a7.5 7.5 0 0 0 10.5 10.5Z" />
              </svg>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="bg-[#10375C] flex flex-col gap-[5px] items-center justify-center w-14 md:w-16 h-full hover:bg-[#844685] transition-colors duration-300 group"
              aria-label="Open navigation"
              aria-expanded={menuOpen}
            >
              <span className="block w-5 md:w-6 h-px bg-[#FAF4FF] transition-transform duration-300" />
              <span className="block w-3 md:w-4 h-px bg-[#F3C623] transition-all duration-300 group-hover:w-5 md:group-hover:w-6" />
              <span className="block w-5 md:w-6 h-px bg-[#FAF4FF] transition-transform duration-300" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen overlay menu ─────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[100] bg-[#10375C] flex flex-col"
          >
            {/* Subtle noise texture */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />

            {/* Menu header */}
            <div className="relative flex items-center justify-between border-b border-[#FAF4FF]/10 bg-[#10375C]/80 backdrop-blur-sm">
              <a href="#" className="flex items-center gap-3 px-6 md:px-8 py-5" onClick={close}>
                <span className="text-[#FAF4FF] font-black text-xl tracking-[0.2em] uppercase font-sans">
                  Billabong
                </span>
              </a>
              <div className="flex">
                <button
                  className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 text-[#FAF4FF] hover:text-[#F3C623] hover:bg-[#FAF4FF]/8 transition-all"
                  aria-label="Login"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0" />
                  </svg>
                </button>
                <button
                  className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 text-[#10375C] bg-[#F3C623] hover:bg-[#F3C623]/90 transition-colors"
                  aria-label="Search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.2-5.2m0 0A7.5 7.5 0 1 0 5.8 5.8a7.5 7.5 0 0 0 10.5 10.5Z" />
                  </svg>
                </button>
                <button
                  onClick={close}
                  className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 text-[#10375C] bg-[#FAF4FF] hover:bg-[#F3C623] transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Main content */}
            <div className="relative flex-1 flex flex-col lg:flex-row overflow-y-auto">
              {/* Primary nav */}
              <nav className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-10 lg:py-0">
                {navItems.map(({ label, href }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={close}
                    className="group flex items-center gap-4 py-3 lg:py-2 border-b border-[#FAF4FF]/8 last:border-0"
                  >
                    <span className="text-[#F3C623]/40 text-xs font-mono w-5 shrink-0 transition-colors duration-200 group-hover:text-[#F3C623]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#FAF4FF] text-3xl sm:text-4xl md:text-5xl lg:text-[3.5vw] xl:text-5xl font-bold uppercase tracking-tight leading-none transition-all duration-300 group-hover:text-[#F3C623] group-hover:translate-x-1 font-sans">
                      {label}
                    </span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                      <svg className="w-5 h-5 text-[#F3C623]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* Sidebar: secondary + info */}
              <div className="lg:w-72 xl:w-80 border-t lg:border-t-0 lg:border-l border-[#FAF4FF]/10 flex flex-col">
                {/* Secondary links */}
                <div className="flex flex-col gap-0 px-8 lg:px-10 py-8 lg:pt-14">
                  <p className="text-[#F3C623]/60 text-[0.6rem] tracking-[0.25em] uppercase font-sans font-semibold mb-5">
                    Quick links
                  </p>
                  {secondaryNav.map((item, i) => (
                    <motion.a
                      key={item}
                      href="#"
                      custom={i}
                      variants={secondaryVariants}
                      initial="hidden"
                      animate="visible"
                      onClick={close}
                      className="group flex items-center justify-between py-2.5 border-b border-[#FAF4FF]/8 last:border-0 text-[#FAF4FF]/65 hover:text-[#FAF4FF] transition-colors text-sm font-sans"
                    >
                      {item}
                      <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </motion.a>
                  ))}
                </div>

                {/* CTA block */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mt-auto mx-8 lg:mx-10 mb-8 lg:mb-10 bg-[#F3C623] p-6"
                >
                  <p className="text-[#10375C] text-xs font-bold tracking-widest uppercase font-sans mb-2">
                    Join Us
                  </p>
                  <p className="text-[#10375C]/80 text-sm leading-relaxed mb-5 font-sans">
                    Discover how Billabong can inspire your child.
                  </p>
                  <a
                    href="#"
                    className="block text-center bg-[#10375C] text-[#FAF4FF] text-xs font-bold tracking-widest uppercase py-3 px-6 font-sans hover:bg-[#844685] transition-colors"
                    onClick={close}
                  >
                    Book an Open Day →
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
