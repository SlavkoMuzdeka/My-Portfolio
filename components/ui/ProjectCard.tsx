"use client";

import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Info, X } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    tags: string[];
    deploy_link: string;
    github_link: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative"
      >
        <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800 flex flex-col h-full">
          {/* Image section */}
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent opacity-90" />

            {/* Tech elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Title overlay on image */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Content section */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Description */}
            <div className="mb-6 flex-grow">
              <p className="text-slate-300">{project.description}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 rounded-full bg-slate-700 border border-slate-600 text-blue-300 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3">
              {/* View Details button */}
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                size="sm"
                onClick={() => setShowDetails(true)}
              >
                View Details
                <Info className="ml-2 w-4 h-4" />
              </Button>

              {/* External links */}
              <div className="flex gap-2">
                <a
                  href={project.deploy_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </a>
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowDetails(false)}
          ></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-slate-800 border border-slate-700 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-auto z-10"
          >
            <div className="sticky top-0 z-20 flex justify-between items-center p-4 bg-slate-800/90 backdrop-blur-sm border-b border-slate-700">
              <h3 className="text-xl font-bold text-blue-400">
                {project.title}
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowDetails(false)}
                className="rounded-full hover:bg-slate-700"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6">
              <div className="relative aspect-video mb-8 overflow-hidden rounded-lg border border-slate-700">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="object-cover w-full h-full"
                />

                {/* Image overlay with tech elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-blue-500" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-blue-500" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-blue-500" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-blue-500" />
                </div>
              </div>

              <div className="space-y-8">
                {/* About section with styled container */}
                <div className="bg-slate-900/50 rounded-lg border border-slate-700 p-6">
                  <h4 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                    <span className="w-1.5 h-6 bg-blue-500 rounded-full mr-3"></span>
                    About this project
                  </h4>

                  <div className="project-details-content">
                    {project.longDescription ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: project.longDescription,
                        }}
                        className="text-slate-300 space-y-4 text-justify leading-relaxed"
                      />
                    ) : (
                      <div className="text-slate-300 space-y-4 text-justify leading-relaxed">
                        <p>{project.description}</p>
                        <p>
                          This project showcases my skills in{" "}
                          {project.tags.join(", ")}. I focused on creating a
                          solution that is both technically robust and
                          user-friendly.
                        </p>
                        <p>
                          The development process involved careful planning,
                          implementation of best practices, and rigorous testing
                          to ensure a high-quality final product.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Technologies section with styled container */}
                <div className="bg-slate-900/50 rounded-lg border border-slate-700 p-6">
                  <h4 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                    <span className="w-1.5 h-6 bg-blue-500 rounded-full mr-3"></span>
                    Technologies Used
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-sm px-3 py-1.5 rounded-full bg-slate-800 border border-slate-600 text-blue-300 hover:border-blue-500 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons in a styled container */}
                <div className="bg-slate-900/50 rounded-lg border border-slate-700 p-6">
                  <h4 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                    <span className="w-1.5 h-6 bg-blue-500 rounded-full mr-3"></span>
                    Project Links
                  </h4>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.deploy_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="px-6">
                        Visit Live Project
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="px-6">
                        View Source Code
                        <Github className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
