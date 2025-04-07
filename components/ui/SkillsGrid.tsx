"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/skillsList";

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name || index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.03 }}
          className="relative aspect-square rounded-lg overflow-hidden bg-slate-800/80 backdrop-blur-sm border border-slate-700 group hover:border-blue-500/50 transition-colors"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
            <div className="text-2xl mb-1">
              <img
                src={skill.icon || "/placeholder.svg"}
                alt={skill.name}
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="font-medium text-sm group-hover:text-blue-400 transition-colors">
              {skill.name}
            </div>
            <div className="w-full mt-2 px-2">
              <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                />
              </div>
            </div>
          </div>

          {/* Grid cell decorative elements */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-500" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-500" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
