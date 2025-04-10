"use client";

import type React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Button from "@/components/ui/Button";
import HomeSection from "@/components/home-section";
import { useState, useEffect, useRef } from "react";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import { AnimatePresence, motion } from "framer-motion";
import ContactSection from "@/components/contact-section";
import ParticleField from "@/components/ui/particle-field";
import ProjectsSection from "@/components/projects-section";
import { Zap, User, Code, MessageSquare, Terminal, X } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      const sections = [
        { ref: homeRef, id: "home" },
        { ref: projectsRef, id: "projects" },
        { ref: skillsRef, id: "skills" },
        { ref: aboutRef, id: "about" },
        { ref: contactRef, id: "contact" },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const { ref, id } = sections[i];
        if (ref.current && scrollPosition >= ref.current.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    {
      name: "Home",
      ref: homeRef,
      icon: <Terminal className="w-4 h-4 text-blue-400" />,
    },
    {
      name: "Projects",
      ref: projectsRef,
      icon: <Code className="w-4 h-4 text-purple-400" />,
    },
    {
      name: "Skills",
      ref: skillsRef,
      icon: <Zap className="w-4 h-4 text-yellow-400" />,
    },
    {
      name: "About",
      ref: aboutRef,
      icon: <User className="w-4 h-4 text-cyan-400" />,
    },
    {
      name: "Contact",
      ref: contactRef,
      icon: <MessageSquare className="w-4 h-4 text-orange-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 overflow-hidden">
      {/* Tech Background */}
      <div className="fixed inset-0 z-0">
        <ParticleField />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900" />
      </div>

      {/* Header */}
      <Header
        scrollToSection={scrollToSection}
        activeSection={activeSection}
        navItems={navItems}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
              <nav className="flex flex-col items-center justify-center gap-8 flex-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.ref)}
                    className="flex items-center gap-2 text-xl font-medium"
                  >
                    {item.icon}
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Home Section */}
      <HomeSection
        homeRef={homeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        scrollToSection={scrollToSection}
      />

      {/* Projects Section */}
      <ProjectsSection projectsRef={projectsRef} />

      {/* Skills Section */}
      <SkillsSection skillsRef={skillsRef} />

      {/* About Section */}
      <AboutSection aboutRef={aboutRef} />

      {/* Contact Section */}
      <ContactSection contactRef={contactRef} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
