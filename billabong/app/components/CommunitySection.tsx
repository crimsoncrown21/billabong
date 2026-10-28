"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    ),
  },
  {
    label: "Instagram",
    href: "#",
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
    href: "#",
    icon: (
      <>
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
      </>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    ),
  },
];

const columns = [
  {
    id: "community",
    title: "Our Community",
    body: "Connect with fellow parents, alumni, and staff. Together we form a vibrant, caring school family that lasts a lifetime.",
    cta: { label: "Learn more", href: "#" },
  },
  {
    id: "follow",
    title: "Follow Us",
    body: "Stay connected with daily life at Billabong — events, achievements, and stories from across our schools.",
    social: true,
  },
  {
    id: "work",
    title: "Work With Us",
    body: "Join our team of passionate educators and support staff dedicated to inspiring the next generation of leaders.",
    cta: { label: "View vacancies", href: "#" },
  },
];

export default function CommunitySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#FAF4FF] py-0 border-b border-[#844685]/12 overflow-hidden">
      {/* ── Header strip ─────────────────────────────────── */}
      <div className="bg-[#10375C] py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-7 h-px bg-[#F3C623]/70" />
              <span className="text-[#F3C623]/70 text-[0.6rem] tracking-[0.25em] uppercase font-sans font-bold">
                Join the family
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF4FF] leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Life at <em className="text-[#F3C623] not-italic font-bold">Billabong</em>
            </h2>
          </motion.div>

          {/* Back to top */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 text-[#FAF4FF]/60 hover:text-[#F3C623] transition-colors text-xs font-sans font-semibold tracking-widest uppercase group shrink-0"
            aria-label="Back to top"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
            Back to top
          </motion.button>
        </div>
      </div>

      {/* ── Three columns ────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#844685]/15">
          {columns.map((col, i) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="px-6 md:px-10 lg:px-14 py-14 md:py-16 flex flex-col"
            >
              {/* Icon */}
              <div className="w-11 h-11 flex items-center justify-center bg-[#10375C] mb-7 shrink-0">
                <svg className="w-5 h-5 text-[#F3C623]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  {col.id === "community" && (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  )}
                  {col.id === "follow" && (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                  )}
                  {col.id === "work" && (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  )}
                </svg>
              </div>

              <h3
                className="text-2xl md:text-[1.6rem] font-normal mb-5 leading-tight text-[#10375C]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {col.title}
              </h3>

              <p className="text-[#10375C]/65 text-sm leading-relaxed mb-7 flex-1">
                {col.body}
              </p>

              {col.social ? (
                <div className="flex gap-3 flex-wrap">
                  {socials.map(({ label, href, icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-11 h-11 border border-[#844685]/30 flex items-center justify-center text-[#844685] hover:bg-[#844685] hover:text-[#FAF4FF] hover:border-[#844685] transition-all duration-250 group"
                    >
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                        {icon}
                      </svg>
                    </a>
                  ))}
                </div>
              ) : col.cta ? (
                <a
                  href={col.cta.href}
                  className="inline-flex items-center gap-2 border-2 border-[#10375C] text-[#10375C] font-bold px-7 py-3 text-xs uppercase tracking-widest font-sans hover:bg-[#10375C] hover:text-[#FAF4FF] transition-all duration-300 mt-auto group w-fit"
                >
                  {col.cta.label}
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── CTA band ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="bg-[#F3C623] px-6 py-8 md:py-10"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[#10375C] font-bold text-base md:text-lg font-sans text-center sm:text-left">
            Ready to discover Billabong? Book an Open Day and experience our community.
          </p>
          <a
            href="#"
            className="shrink-0 inline-flex items-center gap-2 bg-[#10375C] text-[#FAF4FF] font-black px-8 py-4 text-xs uppercase tracking-widest font-sans hover:bg-[#844685] transition-all duration-300 group shadow-lg"
          >
            Book an Open Day
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
