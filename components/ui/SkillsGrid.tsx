"use client";

import { skills } from "@/lib/skillsList";
import { motion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

export default function SkillsGrid() {
  const isMobile = useMobile();
  const gridSize = isMobile ? 4 : 8;

  const cells = [];
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const index = i * gridSize + j;
      if (index >= skills.length) {
        break;
      }
      const skill = index < skills.length ? skills[index] : null;

      cells.push(
        <motion.div
          key={`${i}-${j}`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: (i + j) * 0.03 }}
          className={`relative aspect-square rounded-lg overflow-hidden "bg-gradient-to-br from-gray-900/80 to-gray-900/40" backdrop-blur-sm border border-purple-800/20 group hover:border-cyan-500/50 transition-colors`}
        >
          {skill && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
              <div className="text-2xl mb-1">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="font-medium text-sm group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </div>
              <div className="w-full mt-2 px-2">
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Grid cell decorative elements */}
          <div className="absolute inset-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400" />
          </div>
        </motion.div>
      );
    }
  }

  return (
    <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-4">
      {cells}
    </div>
  );
}
