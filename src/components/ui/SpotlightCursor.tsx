"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";

export default function SpotlightCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [isClicking, setIsClicking] = useState(false);

  // Smooth out the mouse movement
  // We'll use a slightly stiffer spring for the "tight" feel the user wants
  const springConfig = { damping: 25, stiffness: 400 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Normal: 120px (very focused). Click: 80px (pinpoint).
  // Opacity slightly higher to compensate for smaller size.
  const size = isClicking ? 30 : 60;
  const opacity = isClicking ? 0.35 : 0.2;

  const background = useMotionTemplate`radial-gradient(
    ${size}px circle at ${springX}px ${springY}px,
    rgba(29, 78, 216, ${opacity}),
    transparent 80%
  )`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Only show on desktop/if available
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Track if we should show the cursor (desktop only)
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    // Check initial state
    const checkPointer = () => {
      setShowCursor(window.matchMedia("(pointer: fine)").matches);
    };
    checkPointer();

    // Optional: Listen for changes
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const handleChange = (e: MediaQueryListEvent) => setShowCursor(e.matches);

    // Modern browsers support addEventListener on MediaQueryList
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // Don't render anything if not on a "fine" pointer device (mobile/tablet)
  if (!showCursor) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: background,
      }}
    />
  );
}
