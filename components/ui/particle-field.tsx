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

    // Mouse tracking
    const mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
      radius: 150,
      active: false,
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;

      // Reset active state after a delay for trail effect
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        mouse.active = false;
      }, 100);
    };

    let mouseTimeout: NodeJS.Timeout;

    window.addEventListener("mousemove", handleMouseMove);

    // Create gradient for particles
    const gradient = ctx.createLinearGradient(
      0,
      0,
      canvas.width,
      canvas.height
    );
    gradient.addColorStop(0, "rgba(59, 130, 246, 0.8)"); // Blue
    gradient.addColorStop(0.5, "rgba(79, 70, 229, 0.8)"); // Indigo
    gradient.addColorStop(1, "rgba(16, 185, 129, 0.8)"); // Green

    // Particle class for animated background
    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;
      angle: number;
      velocity: number;
      distance: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 3 + 1;
        this.density = Math.random() * 30 + 1;
        this.color = `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.2})`;
        this.angle = Math.random() * Math.PI * 2;
        this.velocity = Math.random() * 0.2;
        this.distance = Math.random() * 100 + 50;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 5;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      update() {
        // Mouse interaction
        if (mouse.x !== undefined && mouse.y !== undefined && mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;

          // Maximum distance past which the particle is not affected by mouse
          const maxDistance = mouse.radius;

          if (distance < maxDistance) {
            // Repel particles from mouse
            const force = (maxDistance - distance) / maxDistance;
            const directionX = forceDirectionX * force * this.density * -1;
            const directionY = forceDirectionY * force * this.density * -1;

            this.x += directionX;
            this.y += directionY;

            // Change color based on mouse proximity
            const hue = 210 + (distance / maxDistance) * 30;
            this.color = `hsla(${hue}, 80%, 60%, ${
              0.5 + (1 - distance / maxDistance) * 0.5
            })`;
            this.size = Math.min(6, this.size + 0.2);
          } else {
            // Gentle floating motion when not affected by mouse
            this.angle += this.velocity;
            this.x = this.baseX + Math.cos(this.angle) * 2;
            this.y = this.baseY + Math.sin(this.angle) * 2;

            // Return to original size and color
            if (this.size > this.density / 10) {
              this.size -= 0.1;
            }
            this.color = `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.2})`;
          }
        } else {
          // Return to original position with gentle floating
          this.angle += this.velocity;

          if (
            Math.abs(this.x - this.baseX) > 0.1 ||
            Math.abs(this.y - this.baseY) > 0.1
          ) {
            // Return to base position
            this.x += (this.baseX - this.x) * 0.05;
            this.y += (this.baseY - this.y) * 0.05;
          } else {
            // Gentle floating motion
            this.x = this.baseX + Math.cos(this.angle) * 2;
            this.y = this.baseY + Math.sin(this.angle) * 2;
          }

          // Return to original size
          if (this.size > this.density / 10) {
            this.size -= 0.1;
          }
        }
      }
    }

    // Create particles
    const particlesArray: Particle[] = [];
    const particleCount = 150;

    function createParticles() {
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
      }
    }

    createParticles();

    // Digital rain effect (Matrix-like)
    class DigitalRain {
      x: number;
      y: number;
      length: number;
      speed: number;
      characters: string[];
      text: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -100;
        this.length = Math.floor(Math.random() * 15) + 5;
        this.speed = Math.random() * 2 + 1;
        this.characters = "01".split("");
        this.text = "";

        // Generate random binary string
        for (let i = 0; i < this.length; i++) {
          this.text +=
            this.characters[Math.floor(Math.random() * this.characters.length)];
        }
      }

      draw() {
        ctx.font = "10px monospace";
        ctx.fillStyle = "rgba(59, 130, 246, 0.15)";

        // Draw each character with fading effect
        for (let i = 0; i < this.text.length; i++) {
          const opacity = 1 - i / this.text.length;
          ctx.fillStyle = `rgba(59, 130, 246, ${opacity * 0.15})`;
          ctx.fillText(this.text[i], this.x, this.y - i * 12);
        }
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height + 100) {
          this.y = Math.random() * -100;
          this.x = Math.random() * canvas.width;
        }
      }
    }

    // Create digital rain
    const digitalRainDrops: DigitalRain[] = [];
    const rainCount = 20;

    for (let i = 0; i < rainCount; i++) {
      digitalRainDrops.push(new DigitalRain());
    }

    // Animation function
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw digital rain
      digitalRainDrops.forEach((drop) => {
        drop.update();
        drop.draw();
      });

      // Draw connecting lines
      ctx.strokeStyle = "rgba(59, 130, 246, 0.05)";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            // Opacity based on distance
            const opacity = 1 - distance / 100;
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.1})`;

            ctx.beginPath();
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      // Add occasional pulse effect
      if (Math.random() < 0.01) {
        const pulseX = Math.random() * canvas.width;
        const pulseY = Math.random() * canvas.height;

        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 1, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246, 0.8)";
        ctx.fill();

        // Pulse animation
        let pulseSize = 0;
        let pulseOpacity = 0.5;

        const expandPulse = () => {
          pulseSize += 2;
          pulseOpacity -= 0.01;

          ctx.beginPath();
          ctx.arc(pulseX, pulseY, pulseSize, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(59, 130, 246, ${pulseOpacity})`;
          ctx.stroke();

          if (pulseSize < 100 && pulseOpacity > 0) {
            requestAnimationFrame(expandPulse);
          }
        };

        expandPulse();
      }

      requestAnimationFrame(animate);
    }

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(mouseTimeout);
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
