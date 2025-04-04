import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroAvatar() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute w-full h-full rounded-full border-2 border-purple-500/30"
      />

      {/* Middle ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
        animate={{ opacity: 1, scale: 0.8, rotate: 360 }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
        className="absolute w-4/5 h-4/5 rounded-full border border-cyan-400/20 flex items-center justify-center"
      />

      {/* Inner content */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative w-4/5 h-4/5 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center overflow-hidden"
      >
        {/* Profile image */}
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image
            src="./me4.png"
            alt="Profile"
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />

          {/* Futuristic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent" />

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
        </div>
      </motion.div>
    </div>
  );
}
