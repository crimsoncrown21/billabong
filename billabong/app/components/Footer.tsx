"use client";

import { useEffect, useState } from "react";

const footerLinks: Record<string, string[]> = {
  "Our Schools": ["Sixth Form", "Senior School", "Junior School", "Pre-Prep", "International"],
  Admissions: ["Visit Us", "How to Apply", "Bursaries", "Fees"],
  Parents: ["Parent Portal", "School Calendar", "Uniform", "Lunch Menus"],
  "About Us": ["History", "Head's Welcome", "Governance", "Policies"],
};

const awards = [
  { year: "2025", label: "Top 20 Independent\nSecondary School", source: "Sunday Times" },
  { year: "2024", label: "Independent School\nof the Year", source: "Sunday Times" },
  { year: "2020", label: "Independent School\nof the Year", source: "TES Awards" },
];

const socials = [
  {
    label: "Facebook",
    icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
  },
  {
    label: "Instagram",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <>
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </>
    ),
  },
  {
    label: "X / Twitter",
    icon: <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />,
  },
  {
    label: "LinkedIn",
    icon: <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />,
  },
];

export default function Footer() {
  const [year, setYear] = useState<number | string>(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="bg-[#10375C] border-t-[3px] border-[#F3C623]">
      {/* ── Main footer grid ─────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 xl:gap-12">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-4 xl:col-span-5">
            {/* Logo */}
            <div className="inline-flex items-center gap-3 border border-[#FAF4FF]/20 px-6 py-4 mb-3 group">
              <span className="text-[#FAF4FF] font-black text-xl tracking-[0.22em] uppercase font-sans">
                Billabong
              </span>
            </div>
            <p className="text-[#F3C623]/75 text-xs tracking-[0.22em] uppercase font-sans font-bold mb-2">
              Excellence in Education
            </p>
            <p className="text-[#FAF4FF]/40 text-xs font-sans mb-8 leading-relaxed max-w-xs">
              An independent co-educational school for ages 4–18,
              nurturing curious minds since 1965.
            </p>

            {/* Social icons */}
            <div className="flex gap-2 mb-10 flex-wrap">
              {socials.map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-[#FAF4FF]/20 flex items-center justify-center text-[#FAF4FF]/60 hover:border-[#F3C623] hover:text-[#F3C623] transition-all duration-250"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    {icon}
                  </svg>
                </a>
              ))}
            </div>

            {/* Award badges */}
            <div className="flex flex-wrap gap-3">
              {awards.map((award) => (
                <div
                  key={award.year + award.source}
                  className="border border-[#F3C623]/35 p-3 text-center w-[110px] relative group hover:border-[#F3C623]/70 transition-colors"
                >
                  <div className="text-[#F3C623] text-lg font-black font-sans leading-none mb-1">
                    {award.year}
                  </div>
                  <div className="text-[#FAF4FF]/60 text-[0.6rem] leading-tight font-sans whitespace-pre-line">
                    {award.label}
                  </div>
                  <div className="text-[#F3C623]/45 text-[0.55rem] mt-1.5 font-sans tracking-wider uppercase">
                    {award.source}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="lg:col-span-2">
              <h4 className="text-[#FAF4FF] text-[0.65rem] font-bold uppercase tracking-[0.2em] mb-5 font-sans">
                {section}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#FAF4FF]/55 text-sm hover:text-[#F3C623] transition-colors duration-200 font-sans leading-snug"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Contact bar ──────────────────────────────────── */}
      <div className="border-t border-[#FAF4FF]/8 bg-[#0d2b48]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-[#FAF4FF]/35 text-xs font-sans text-center sm:text-left">
            <span>Tel: +44 (0)20 0000 0000</span>
            <span className="hidden sm:inline text-[#FAF4FF]/20">|</span>
            <span>admissions@billabong.sch.uk</span>
          </div>
          <div className="flex flex-wrap gap-4 text-[#FAF4FF]/35 text-xs font-sans justify-center">
            <a href="#" className="hover:text-[#F3C623] transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-[#F3C623] transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-[#F3C623] transition-colors">Privacy Notice</a>
            <a href="#" className="hover:text-[#F3C623] transition-colors">Accessibility</a>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────── */}
      <div className="bg-[#0a2238] px-6 md:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[#FAF4FF]/28 text-[0.65rem] font-sans">
          <span>Registered charity no. 000000&nbsp;&nbsp;|&nbsp;&nbsp;© {year} Billabong School. All rights reserved.</span>
          <span className="hidden sm:block">Designed with care for excellence</span>
        </div>
      </div>
    </footer>
  );
}
