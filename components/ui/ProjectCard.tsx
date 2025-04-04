"use client";

import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
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
      <div className="relative overflow-hidden rounded-xl border border-purple-800/30 aspect-video">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={400}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70" />

        {/* Futuristic elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Scanning line */}
          <motion.div
            initial={{ top: "100%" }}
            animate={{ top: ["100%", "0%"] }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute left-0 right-0 h-px bg-cyan-400/50 opacity-0 group-hover:opacity-100"
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 rounded-full bg-purple-950/50 border border-purple-800/30 text-purple-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-fit border-cyan-800 text-cyan-400 hover:bg-cyan-950/20"
          >
            View Project
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
