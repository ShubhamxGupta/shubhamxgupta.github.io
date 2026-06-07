"use client";

import { useEffect, useRef } from "react";

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particleCount = 120; // Flow field looks best with a good density of particles
    let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Track theme changes dynamically
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e: MediaQueryListEvent) => {
      isDark = e.matches;
      // Re-initialize particles to update their color palettes
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleThemeChange);
    } else {
      mediaQuery.addListener(handleThemeChange);
    }

    const createParticle = () => {
      // Premium curated HSL colors for AI vibe (purple/indigo/blue)
      const colors = isDark 
        ? ["99, 102, 241", "139, 92, 246", "59, 130, 246"] // Indigo, Purple, Blue
        : ["59, 130, 246", "37, 99, 235", "79, 70, 229"]; // Vivid blues and indigos
      const color = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        speed: Math.random() * 1.2 + 0.6,
        size: Math.random() * 1.5 + 1.2,
        color: color,
        alpha: Math.random() * 0.35 + 0.2,
      };
    };

    const particles = Array.from({ length: particleCount }, createParticle);

    // Mouse tracking physics
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    let animationFrameId: number;

    function animate() {
      if (!ctx || !canvas) return;

      // Soft trails by painting semi-transparent background
      ctx.fillStyle = isDark ? "rgba(15, 23, 42, 0.07)" : "rgba(248, 250, 252, 0.07)";
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse position
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      const time = Date.now() * 0.0003;

      particles.forEach((p) => {
        // Generative Flow Field: vector angle changes based on x, y coordinates and time
        const angle = Math.sin(p.x * 0.002 + time) * Math.cos(p.y * 0.002 + time) * Math.PI * 2;
        
        // Target velocity from the flow field
        const targetVx = Math.cos(angle) * p.speed;
        const targetVy = Math.sin(angle) * p.speed;

        // Smoothly steer towards flow field vectors
        p.vx += (targetVx - p.vx) * 0.03;
        p.vy += (targetVy - p.vy) * 0.03;

        // Mouse interaction (gravity & vortex)
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 220) {
            const force = (1 - dist / 220) * 0.8;
            const angleToMouse = Math.atan2(dy, dx);
            
            // Swirl / Vortex force (perpendicular vector)
            const swirlAngle = angleToMouse + Math.PI / 2;
            p.vx += Math.cos(swirlAngle) * force * 0.3;
            p.vy += Math.sin(swirlAngle) * force * 0.3;

            // Weak gravity pulling towards cursor
            p.vx += Math.cos(angleToMouse) * force * 0.1;
            p.vy += Math.sin(angleToMouse) * force * 0.1;
          }
        }

        // Apply velocity
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle trail lines (vector representation)
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * 3.5, p.y - p.vy * 3.5);
        ctx.strokeStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.lineWidth = p.size;
        ctx.stroke();

        // Draw glowing particle head
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha * 1.5})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleThemeChange);
      } else {
        mediaQuery.removeListener(handleThemeChange);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-40 dark:opacity-30"
    />
  );
}
