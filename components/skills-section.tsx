"use client";

import { motion } from "framer-motion";
import SkillsGrid from "./ui/SkillsGrid";
import skillCategories from "@/lib/skillCategories";

interface SkillsSectionProps {
  skillsRef: React.RefObject<HTMLDivElement | null>;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skillsRef }) => {
  return (
    <section ref={skillsRef} className="relative py-20 md:py-32">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-md bg-slate-800 border border-slate-700 text-blue-400 text-sm font-mono mb-4">
            {"function getSkills() { ... }"}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Technical Expertise
          </h2>
          <p className="text-slate-300 text-lg">
            The technologies, languages, and frameworks I use to build
            efficient, scalable, and maintainable software solutions.
          </p>
        </motion.div>

        <SkillsGrid />

        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-600/30 flex items-center justify-center mb-6">
                  <img
                    src={category.icon}
                    alt={category.title}
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-slate-400 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-sm text-slate-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
