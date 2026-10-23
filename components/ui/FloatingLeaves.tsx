"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function LeafSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17 1.05.3 1.84.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5c0 1.87 1.38 2.9 1.5 3.07C5.52 10.4 10.5 8.5 17 8z" />
    </svg>
  );
}

type LeafData = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rotateStart: number;
  opacity: number;
};

function Leaf({ leaf }: { leaf: LeafData }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pushX = useMotionValue(0);
  const pushY = useMotionValue(0);
  const springX = useSpring(pushX, { stiffness: 120, damping: 14 });
  const springY = useSpring(pushY, { stiffness: 120, damping: 14 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = cx - e.clientX;
      const dy = cy - e.clientY;
      const dist = Math.hypot(dx, dy);
      const radius = 120;
      if (dist < radius) {
        const force = (1 - dist / radius) * 45;
        const angle = Math.atan2(dy, dx);
        pushX.set(Math.cos(angle) * force);
        pushY.set(Math.sin(angle) * force);
      } else {
        pushX.set(0);
        pushY.set(0);
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [pushX, pushY]);

  return (
    <motion.div
      ref={wrapRef}
      initial={{ y: "-10vh", x: 0, rotate: leaf.rotateStart, opacity: 0 }}
      animate={{
        y: "110vh",
        x: [0, leaf.drift, -leaf.drift / 2, 0],
        rotate: leaf.rotateStart + 360,
        opacity: [0, leaf.opacity, leaf.opacity, 0],
      }}
      transition={{
        duration: leaf.duration,
        delay: leaf.delay,
        repeat: Infinity,
        ease: "linear",
        x: { duration: leaf.duration, repeat: Infinity, ease: "easeInOut" },
      }}
      style={{ left: `${leaf.left}%`, width: leaf.size, height: leaf.size }}
      className="absolute top-0"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className="h-full w-full text-brand-brown"
      >
        <LeafSVG className="h-full w-full" />
      </motion.div>
    </motion.div>
  );
}

export default function FloatingLeaves() {
  const [leaves, setLeaves] = useState<LeafData[]>([]);

  useEffect(() => {
    setLeaves(
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 14 + Math.random() * 16,
        duration: 14 + Math.random() * 10,
        delay: Math.random() * -20,
        drift: 40 + Math.random() * 60,
        rotateStart: Math.random() * 360,
        opacity: 0.12 + Math.random() * 0.18,
      }))
    );
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
    >
      {leaves.map((leaf) => (
        <Leaf key={leaf.id} leaf={leaf} />
      ))}
    </div>
  );
}
