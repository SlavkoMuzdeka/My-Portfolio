"use client";

import Button from "./ui/Button";
import { ChevronDown } from "lucide-react";
import ImageAvatar from "./ui/ImageAvatar";
import { motion, useScroll, useTransform } from "framer-motion";

interface HomeSectionProps {
  homeRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({
  homeRef,
  projectsRef,
  contactRef,
  scrollToSection,
}) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <section
      ref={homeRef}
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex flex-wrap gap-2 px-4 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-sm font-mono">
              <span className="text-blue-400">const</span> softwareEng = {"{"}
              <span className="text-green-400">"Full Stack"</span>,
              <span className="text-green-400">"Blockchain"</span>
              <span className="text-green-400">"AI"</span>
              {"}"};
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight font-sans">
              <span className="block text-slate-400">Hi, I'm</span>
              <span className="block text-blue-500">Slavko Muždeka</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl">
              Need someone who can solve tough problems with modern tech? That’s
              exactly what I do — from full-stack apps to blockchain and AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button
                className="px-8 py-6"
                onClick={() => scrollToSection(projectsRef)}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6"
                onClick={() => scrollToSection(contactRef)}
              >
                Contact Me
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 aspect-square max-w-md mx-auto">
              <ImageAvatar />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-slate-600/10 rounded-full blur-[100px] opacity-50" />
          </motion.div>
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-500 text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <ChevronDown className="w-6 h-6 text-blue-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
