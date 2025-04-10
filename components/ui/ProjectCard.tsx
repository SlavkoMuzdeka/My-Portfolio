"use client";

import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    deploy_link: string;
    github_link: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-xl border border-slate-700 aspect-video bg-slate-800">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={400}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent opacity-90" />

        {/* Tech elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-300 mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 rounded-full bg-slate-700 border border-slate-600 text-blue-300 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <a
              href={project.deploy_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="w-fit border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                View Project
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="w-fit border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                <Github className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
