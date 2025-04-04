"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Add mouse position tracking
    const mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
      radius: 150,
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      baseSize: number;
      speedX: number;
      speedY: number;
      color: string;
      baseColor: string;
      density: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseSize = Math.random() * 2 + 0.5;
        this.size = this.baseSize;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.density = Math.random() * 30 + 1;

        // Color palette: cyan, blue, purple
        const colors = [
          "rgba(34, 211, 238, 0.8)",
          "rgba(59, 130, 246, 0.8)",
          "rgba(147, 51, 234, 0.8)",
        ];
        this.baseColor = colors[Math.floor(Math.random() * colors.length)];
        this.color = this.baseColor;
      }

      update() {
        // Basic movement
        this.x += this.speedX;
        this.y += this.speedY;

        // Mouse interaction
        if (mouse.x !== undefined && mouse.y !== undefined) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            // Calculate force direction
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;

            // Calculate force strength (stronger when closer)
            const force = (mouse.radius - distance) / mouse.radius;

            // Apply force to particle
            const directionX = forceDirectionX * force * this.density * 0.6;
            const directionY = forceDirectionY * force * this.density * 0.6;

            this.speedX += directionX;
            this.speedY += directionY;

            // Increase size and change color when near mouse
            this.size = this.baseSize + force * 3;

            // Shift color towards cyan when near mouse
            this.color = "rgba(34, 211, 238, 0.9)";
          } else {
            // Return to base size and color when away from mouse
            if (this.size > this.baseSize) {
              this.size -= 0.1;
            }
            this.color = this.baseColor;
          }
        }

        // Apply friction to slow particles down
        this.speedX *= 0.96;
        this.speedY *= 0.96;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particleCount = Math.min(
      100,
      Math.floor((canvas.width * canvas.height) / 10000)
    );
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 z-0"
    />
  );
}
