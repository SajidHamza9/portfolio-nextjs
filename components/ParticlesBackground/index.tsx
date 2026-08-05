"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "styled-components";
import { Canvas } from "./styles";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

// Distance (px) under which two particles get linked, and the wider radius
// around the cursor within which particles get linked to the mouse + nudged.
const LINK_DISTANCE = 130;
const MOUSE_RADIUS = 170;

/** "#04e8b9" -> "4, 232, 185" so we can build rgba() strings for fading lines. */
const hexToRgb = (hex: string) => {
  const value = hex.replace("#", "");
  const full =
    value.length === 3
      ? value
          .split("")
          .map((c) => c + c)
          .join("")
      : value;
  const int = parseInt(full, 16);
  return `${(int >> 16) & 255}, ${(int >> 8) & 255}, ${int & 255}`;
};

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const theme = useTheme();
  const rgb = hexToRgb(theme.primaryColor);

  useEffect(() => {
    // Respect users who prefer less motion — skip the animation entirely.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let frame = 0;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Scale particle count to screen area, capped so large monitors stay light.
      const count = Math.min(120, Math.floor((width * height) / 14000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap softly by bouncing off the edges.
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Gentle push away from the cursor for the "reacts to mouse" feel.
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mDist = Math.hypot(mdx, mdy);
        if (mDist < MOUSE_RADIUS && mDist > 0) {
          const force = (MOUSE_RADIUS - mDist) / MOUSE_RADIUS;
          p.x += (mdx / mDist) * force * 0.8;
          p.y += (mdy / mDist) * force * 0.8;

          // Link the particle to the cursor.
          ctx.strokeStyle = `rgba(${rgb}, ${force * 0.5})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        ctx.fillStyle = `rgba(${rgb}, 0.8)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // Link nearby particles to each other, fading with distance.
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(${rgb}, ${
              (1 - dist / LINK_DISTANCE) * 0.35
            })`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      frame = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    // Pause when the tab is hidden to avoid burning CPU in the background.
    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
      } else {
        frame = requestAnimationFrame(draw);
      }
    };

    resize();
    frame = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [rgb]);

  return <Canvas ref={canvasRef} aria-hidden="true" />;
};

export default ParticlesBackground;
