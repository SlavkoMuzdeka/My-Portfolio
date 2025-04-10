"use client";

import type React from "react";

import Image from "next/image";
import Button from "./ui/Button";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectSectionProps {
  aboutRef: React.RefObject<HTMLDivElement | null>;
}

const AboutSection: React.FC<ProjectSectionProps> = ({ aboutRef }) => {
  return (
    <section ref={aboutRef} className="relative py-20 md:py-32">
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            {/* Image Container */}
            <div className="relative w-full">
              <div className="relative z-10 w-full aspect-square overflow-hidden rounded-xl border border-slate-700">
                <Image
                  src={process.env.MY_IMAGE_URL || "/placeholder.png"}
                  alt="Profile"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                {/* Tech overlay elements */}
                <div className="absolute inset-0">
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-blue-500" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-blue-500" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-blue-500" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-blue-500" />

                  {/* Bottom info bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm p-3 border-t border-slate-700">
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-blue-400 font-mono">
                        Software Engineer
                      </div>
                      <div className="text-xs text-blue-400 font-mono">
                        2+ Years Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-slate-600/5 rounded-xl blur-[30px] -z-10" />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-500 mb-1">2+</div>
                <div className="text-sm text-slate-400">
                  Years of Experience
                </div>
              </div>
              <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-500 mb-1">25+</div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-500 mb-1">15+</div>
                <div className="text-sm text-slate-400">
                  Technologies Mastered
                </div>
              </div>
              <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-500 mb-1">95%</div>
                <div className="text-sm text-slate-400">
                  Client Satisfaction
                </div>
              </div>
            </div>

            {/* Resume Button */}
            <Button
              variant="outline"
              className="w-full border-slate-700 text-slate-300 hover:bg-slate-800"
            >
              Download Resume
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-block px-4 py-1 rounded-md bg-slate-800 border border-slate-700 text-blue-400 text-sm font-mono">
              {"class AboutMe extends Developer {"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Software Engineer & Problem Solver
            </h2>
            <div className="space-y-4 text-slate-300">
              <p>
                I've been coding professionally for over 2 years, but my
                hands-on experience with software development started around 4
                years earlier during my academic studies. It taught me how to
                build software that's functional, clean, reliable, and scalable.
              </p>
              <p>
                I'm not just a coder, I have the expertise to design and
                architect entire systems. I focus on designing systems that run
                smoothly, scale effectively, and meet user needs. I enjoy
                planning and deeply understanding how all components of a
                project interact, which allows me to create robust, efficient
                solution.
              </p>
              <p>
                These days, I'm diving deep into the blockchain world and
                working on AI-powered projects that bring intelligent automation
                into real-world applications. I'm also doing full-stack web
                development, which is where I have the most experience — it's
                how I first got into tech and where I really learned how
                everything fits together, from the backend to the frontend.
              </p>
              <p>
                When I'm not immersed in coding, I'm usually checking out the
                latest tech trends, exploring new ideas, or working on side
                projects. In my free time, I've also started exploring the world
                of investing — particularly in crypto — which has become a
                growing interest of mine.
              </p>
              <p>
                I'm constantly reading, whether it's about new technologies,
                personal development, philosophy, spirituality, or anything that
                helps me grow both as an engineer and as a person.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
