"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FeesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="grid grid-cols-1 md:grid-cols-2">
      {/* ── Left: Fees info ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: -36 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#844685] px-8 md:px-14 py-16 md:py-20 flex flex-col justify-center relative overflow-hidden"
      >
        {/* Decorative circles */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#FAF4FF]/5 pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-[#10375C]/15 pointer-events-none" />

        <div className="relative">
          {/* Label */}
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-7 h-px bg-[#F3C623]/70" />
            <span className="text-[#F3C623]/75 text-[0.6rem] tracking-[0.25em] uppercase font-sans font-bold">
              Accessibility matters
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-[2.75rem] font-normal text-[#FAF4FF] mb-7 leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Fees &amp; Financial
            <br />
            <strong className="font-bold">Support</strong>
          </h2>

          <p className="text-[#FAF4FF]/82 text-sm md:text-base leading-relaxed mb-8">
            As a registered charity, we are able to offer financial support towards
            school fees to eligible families applying to Billabong at 7+, 11+ and 16+.
            Bursaries can cover up to{" "}
            <strong className="text-[#F3C623] font-bold">100% of the fees</strong>{" "}
            throughout a pupil&apos;s education at Billabong, making it more accessible to
            a wider group of academically able children.
          </p>

          {/* Links */}
          <div className="flex flex-col gap-3">
            {[
              "Find out more about our bursaries",
              "View our current school fees",
            ].map((label, i) => (
              <a
                key={i}
                href="#"
                className="group inline-flex items-center gap-2.5 text-[#F3C623] text-sm font-semibold font-sans hover:text-[#FAF4FF] transition-colors duration-200"
              >
                <span className="w-5 h-px bg-[#F3C623]/60 group-hover:w-7 transition-all duration-300" />
                {label}
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Right: Quote ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 36 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#10375C] px-8 md:px-14 py-16 md:py-20 flex flex-col justify-center relative overflow-hidden border-l border-[#844685]/25"
      >
        {/* Decorative */}
        <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-[#844685]/10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F3C623]/30 to-transparent pointer-events-none" />

        <div className="relative">
          {/* Big quote mark */}
          <svg className="w-14 h-14 text-[#F3C623] mb-6 opacity-60" viewBox="0 0 56 56" fill="currentColor">
            <path d="M0 24c0-13.255 10.745-24 24-24h2v8h-2c-8.837 0-16 7.163-16 16v4h12v20H0V24zm32 0c0-13.255 10.745-24 24-24h0v8h0c-8.837 0-16 7.163-16 16v4h12v20H32V24z" />
          </svg>

          <blockquote
            className="text-[#FAF4FF] text-xl sm:text-2xl md:text-3xl leading-relaxed font-light mb-8"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Being a bursary recipient has allowed me to reach new levels and grasp
            opportunities that I otherwise wouldn&apos;t have been able to.
          </blockquote>

          <div className="flex items-center gap-4">
            {/* Avatar placeholder */}
            <div className="w-10 h-10 rounded-full bg-[#F3C623]/20 border border-[#F3C623]/40 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#F3C623]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0" />
              </svg>
            </div>
            <div>
              <cite className="text-[#F3C623] text-sm not-italic font-bold tracking-wider font-sans">
                Jamie
              </cite>
              <p className="text-[#FAF4FF]/50 text-xs font-sans mt-0.5">
                Bursary Graduate, Class of 2024
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
