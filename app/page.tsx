"use client";

import type React from "react";
import Image from "next/image";
import projects from "@/lib/projects";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Button from "@/components/ui/Button";
import skillCategories from "@/lib/skillCategories";
import SkillsGrid from "@/components/ui/SkillsGrid";
import ProjectCard from "@/components/ui/ProjectCard";
import ImageAvatar from "@/components/ui/ImageAvatar";
import { InputField } from "@/components/ui/InputField";
import ParticleField from "@/components/ui/particle-field";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  X,
  Zap,
  Mail,
  User,
  Rocket,
  Github,
  Briefcase,
  ChevronDown,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      const sections = [
        { ref: heroRef, id: "hero" },
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
    { name: "Home", ref: heroRef, icon: <Rocket className="w-4 h-4" /> },
    {
      name: "Projects",
      ref: projectsRef,
      icon: <Briefcase className="w-4 h-4" />,
    },
    { name: "Skills", ref: skillsRef, icon: <Zap className="w-4 h-4" /> },
    { name: "About", ref: aboutRef, icon: <User className="w-4 h-4" /> },
    {
      name: "Contact",
      ref: contactRef,
      icon: <MessageSquare className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Particle background */}
      <div className="fixed inset-0 z-0">
        <ParticleField />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
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
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md md:hidden"
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
              <div className="flex justify-center gap-6 p-6 border-t border-purple-900/30">
                <Button variant="ghost" size="icon">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        ref={heroRef}
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
              <div className="inline-flex justify-between px-4 py-1 rounded-full bg-purple-950/50 border border-purple-800/30 text-purple-400 text-sm font-medium w-full">
                <span>Software Engineer</span>
                <span>Full Stack Developer</span>
                <span>Blockchain Developer</span>
                <span>AI Developer</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="block">Hi, I'm</span>
                <span className="block">Slavko Muždeka</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl">
                Building next-generation digital experiences with cutting-edge
                technology. Specializing in immersive web applications and
                AI-powered interfaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-6"
                  onClick={() => scrollToSection(projectsRef)}
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-700 text-gray-300 hover:bg-purple-900/20 px-8 py-6"
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
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full blur-[100px] opacity-70" />
            </motion.div>
          </div>

          <motion.div
            style={{ opacity, scale }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-gray-500 text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            >
              <ChevronDown className="w-6 h-6 text-cyan-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-purple-950/50 border border-purple-800/30 text-purple-400 text-sm font-medium mb-4">
              My Work
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg">
              Explore my latest creations, from immersive web experiences to
              AI-powered applications. Each project represents my commitment to
              innovation and technical excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-purple-700 text-gray-300 hover:bg-purple-900/20"
            >
              View All Projects
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-purple-950/50 border border-purple-800/30 text-purple-400 text-sm font-medium mb-4">
              My Expertise
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Technical Skills
            </h2>
            <p className="text-gray-400 text-lg">
              The technologies and methodologies I use to create effective and
              reliable digital solutions.
            </p>
          </motion.div>

          <SkillsGrid />

          <div className="mt-20">
            <div className="grid md:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-purple-800/30 rounded-xl p-6 hover:border-cyan-800/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                        <span className="text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 md:order-1"
            >
              <div className="relative z-10 aspect-square max-w-md mx-auto overflow-hidden rounded-2xl border border-purple-800/30">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                {/* Futuristic overlay elements */}
                <div className="absolute inset-0">
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />

                  {/* Scanning effect */}
                  <motion.div
                    initial={{ top: "100%" }}
                    animate={{ top: ["100%", "0%", "100%"] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 1,
                    }}
                    className="absolute left-0 right-0 h-px bg-cyan-400/70 shadow-[0_0_10px_2px_rgba(34,211,238,0.7)]"
                  />

                  {/* Data points */}
                  {Array(6)
                    .fill(0)
                    .map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                          duration: 2,
                          delay: i * 0.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 3,
                        }}
                        className="absolute w-2 h-2 rounded-full bg-cyan-400"
                        style={{
                          left: `${15 + i * 15}%`,
                          top: `${20 + (i % 3) * 25}%`,
                        }}
                      />
                    ))}

                  {/* Bottom info bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-3 border-t border-purple-800/30">
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-cyan-400">ID: AQ-2187</div>
                      <div className="text-xs text-cyan-400">
                        STATUS: ONLINE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-xl blur-[30px] -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 order-1 md:order-2"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-purple-950/50 border border-purple-800/30 text-purple-400 text-sm font-medium">
                About Me
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Digital Architect & Tech Innovator
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  With over 8 years of experience in software development, I've
                  dedicated my career to pushing the boundaries of what's
                  possible in digital experiences. My journey began in AI
                  research before transitioning to full-stack development, where
                  I found my passion for creating immersive, user-centric
                  applications.
                </p>
                <p>
                  I specialize in building sophisticated web applications that
                  leverage cutting-edge technologies like WebGL, Three.js, and
                  machine learning to create experiences that feel like they're
                  from the future. My approach combines technical excellence
                  with creative problem-solving to deliver solutions that not
                  only meet but exceed expectations.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring emerging
                  technologies, contributing to open-source projects, or
                  speaking at tech conferences about the future of web
                  development and artificial intelligence.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-900/30 backdrop-blur-sm border border-purple-800/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    8+
                  </div>
                  <div className="text-sm text-gray-400">
                    Years of Experience
                  </div>
                </div>
                <div className="bg-gray-900/30 backdrop-blur-sm border border-purple-800/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    50+
                  </div>
                  <div className="text-sm text-gray-400">
                    Projects Completed
                  </div>
                </div>
                <div className="bg-gray-900/30 backdrop-blur-sm border border-purple-800/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    15+
                  </div>
                  <div className="text-sm text-gray-400">
                    Technologies Mastered
                  </div>
                </div>
                <div className="bg-gray-900/30 backdrop-blur-sm border border-purple-800/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    99%
                  </div>
                  <div className="text-sm text-gray-400">
                    Client Satisfaction
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <Button
                  variant="outline"
                  className="border-purple-700 text-gray-300 hover:bg-purple-900/20"
                >
                  Download Resume
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-purple-950/50 border border-purple-800/30 text-purple-400 text-sm font-medium mb-4">
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-gray-400 text-lg">
              Have a project in mind or want to discuss potential
              collaborations? I'm always open to new opportunities and
              challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-purple-800/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              <form className="space-y-6">
                <InputField id="name" label="Your Name" />
                <InputField id="email" label="Your Email" type="email" />
                <InputField id="message" label="Your Message" rows={5} />

                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-6">
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <div className="bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-purple-800/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Email</h4>
                      <p className="text-gray-400">muzdekaslavko@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 text-white"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Location</h4>
                      <p className="text-gray-400">
                        Banja Luka, Bosnia and Herzegovina
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-purple-800/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Github", url: "https://github.com/SlavkoMuzdeka" },
                    { name: "Twitter", url: "https://x.com/muzdekaa" },
                    {
                      name: "LinkedIn",
                      url: "https://www.linkedin.com/in/slavko-muzdeka/",
                    },
                    {
                      name: "Instagram",
                      url: "https://www.instagram.com/slavko__00/",
                    },
                  ].map((platform, idx) => (
                    <a
                      key={idx}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="border-purple-700 text-gray-300 hover:bg-purple-900/20 justify-start w-full"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mr-2">
                          <span className="text-xs font-bold">
                            {platform.name[0]}
                          </span>
                        </div>
                        {platform.name}
                      </Button>
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-xl blur-[30px] -z-10" />
                <div className="bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-purple-800/30 rounded-xl p-8 relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <h3 className="text-lg font-bold">
                      Currently Available for Work
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-4">
                    I'm open to freelance opportunities, contract work,
                    full-time and part-time positions
                  </p>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
