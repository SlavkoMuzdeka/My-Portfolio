"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroAvatar() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer border */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute w-full h-full rounded-xl border border-slate-700"
      />

      {/* Inner content */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative w-4/5 h-4/5 rounded-xl bg-slate-800/80 backdrop-blur-sm border border-slate-700 flex items-center justify-center overflow-hidden"
      >
        {/* Profile image */}
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src="./softwareengineer.png"
            alt="Profile"
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />

          {/* Code-like overlay */}
          <div className="absolute inset-0 mix-blend-overlay opacity-10">
            <div className="h-full w-full overflow-hidden font-mono text-[6px] text-blue-300 p-2">
              {Array(20)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="whitespace-nowrap">
                    {`function developer() { const skills = ['JavaScript', 'TypeScript', 'React', 'Node.js']; return skills.map(skill => implement(skill)); }`}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
