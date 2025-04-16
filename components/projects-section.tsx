"use client";

import Link from "next/link";
import Button from "./ui/Button";
import projects from "@/lib/projects";
import { motion } from "framer-motion";
import ProjectCard from "./ui/ProjectCard";
import { ExternalLink } from "lucide-react";

interface ProjectSectionProps {
  projectsRef?: React.RefObject<HTMLDivElement | null>;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projectsRef }) => {
  // Only show the first 4 projects on the home page
  const featuredProjects = projects.slice(0, 4);

  return (
    <section ref={projectsRef} className="relative py-20 md:py-32">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-md bg-slate-800 border border-slate-700 text-blue-400 text-sm font-mono mb-4">
            {"<Projects />"}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Work</h2>
          <p className="text-slate-300 text-lg">
            A selection of my recent development projects, showcasing technical
            expertise across various domains and technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/projects">
            <Button
              variant="outline"
              className="border-slate-700 text-slate-300 hover:bg-slate-800"
            >
              View All Projects
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
