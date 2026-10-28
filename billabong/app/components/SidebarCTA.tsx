"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SidebarCTA() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col shadow-2xl hidden md:flex">
      {/* VISIT */}
      <a
        href="#"
        onMouseEnter={() => setHovered("visit")}
        onMouseLeave={() => setHovered(null)}
        className="relative bg-[#10375C] flex items-center justify-center w-11 py-7 hover:bg-[#844685] transition-colors duration-300 group overflow-hidden"
        aria-label="Book a Visit"
      >
        <motion.span
          animate={{ width: hovered === "visit" ? 80 : 44 }}
          className="absolute left-0 top-0 bottom-0 bg-[#844685] origin-right"
          transition={{ duration: 0.3 }}
          style={{ display: "none" }}
        />
        <span className="sidebar-cta text-[#FAF4FF] text-[0.58rem] tracking-[0.22em] relative z-10">
          VISIT
        </span>
      </a>

      {/* Divider */}
      <div className="w-full h-px bg-[#F3C623]/30" />

      {/* APPLY */}
      <a
        href="#"
        onMouseEnter={() => setHovered("apply")}
        onMouseLeave={() => setHovered(null)}
        className="relative bg-[#F3C623] flex items-center justify-center w-11 py-7 group overflow-hidden"
        aria-label="Apply Now"
      >
        {/* Hover ripple */}
        <motion.div
          animate={hovered === "apply"
            ? { scale: 4, opacity: 0 }
            : { scale: 0, opacity: 0.2 }
          }
          transition={{ duration: 0.5 }}
          className="absolute w-8 h-8 rounded-full bg-[#10375C] pointer-events-none"
        />
        <span className="sidebar-cta text-[#10375C] font-black text-[0.58rem] tracking-[0.22em] relative z-10">
          APPLY
        </span>
      </a>
    </div>
  );
}
