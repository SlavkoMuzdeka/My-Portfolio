"use client";

import Link from "next/link";
import projects from "@/lib/projects";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";
import ParticleField from "@/components/ui/particle-field";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Tech Background */}
      <div className="fixed inset-0 z-0">
        <ParticleField />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900" />
      </div>

      <div className="container mx-auto px-4 py-20 z-10 relative">
        {/* Back button */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-md bg-slate-800 border border-slate-700 text-blue-400 text-sm font-mono mb-4">
            {"<AllProjects />"}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Project Portfolio
          </h1>
          <p className="text-slate-300 text-lg">
            A comprehensive collection of my work, showcasing my skills and
            experience across various technologies and domains.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Additional projects coming soon section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 border border-dashed border-slate-700 rounded-xl text-center"
        >
          <h3 className="text-xl font-bold mb-2">More Projects Coming Soon</h3>
          <p className="text-slate-400">
            I'm constantly working on new projects. Check back soon for updates!
          </p>
        </motion.div>
      </div>

      {/* Simple footer */}
      <footer className="relative py-8 border-t border-slate-800 mt-20">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Slavko Muždeka. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
