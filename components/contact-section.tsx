"use client";

import Button from "./ui/Button";
import { Mail } from "lucide-react";
import type { RefObject } from "react";
import { motion } from "framer-motion";
import { InputField } from "./ui/InputField";
import { socialNetworks } from "@/lib/socialNetworks";

interface ContactSectionProps {
  contactRef: RefObject<HTMLDivElement | null>;
}

export default function ContactSection({ contactRef }: ContactSectionProps) {
  return (
    <section ref={contactRef} className="relative py-20 md:py-32">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-md bg-slate-800 border border-slate-700 text-blue-400 text-sm font-mono mb-4">
            {"contact.send(message);"}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-slate-300 text-lg">
            Have a project in mind or want to discuss potential collaborations?
            I'm always open to new opportunities and challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

            <form className="space-y-6">
              <InputField id="name" label="Your Name" />
              <InputField id="email" label="Your Email" type="email" />
              <InputField id="message" label="Your Message" rows={5} />

              <Button className="w-full py-6">Send Message</Button>
            </form>
          </motion.div>

          {/* Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            {/* Contact Info */}
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-600/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <p className="text-slate-400">muzdekaslavko@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-600/30 flex items-center justify-center flex-shrink-0">
                    <img
                      src="location.png"
                      alt="Location Icon"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className="text-slate-400">
                      Banja Luka, Bosnia and Herzegovina
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialNetworks.map((platform, idx) => (
                  <a
                    key={idx}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="justify-start w-full">
                      <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-600/30 flex items-center justify-center mr-2">
                        <img
                          src={platform.icon}
                          alt={platform.name}
                          className="w-5 h-5"
                        />
                      </div>
                      {platform.name}
                    </Button>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-slate-600/5 rounded-xl blur-[30px] -z-10" />
              <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-8 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <h3 className="text-lg font-bold">
                    Currently Available for Work
                  </h3>
                </div>
                <p className="text-slate-400 mb-4">
                  I'm open to freelance opportunities, contract work, full-time
                  and part-time positions
                </p>
                <a
                  href="https://calendly.com/muzdekaslavko/chat-about-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full">Schedule a Call</Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
