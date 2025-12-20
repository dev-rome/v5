"use client";

import { motion } from "motion/react";
import styles from "./HeroAvatar.module.css";

export function HeroAvatar() {
  return (
    <div
      className={`${styles.container} group`}
      role="img"
      aria-label="Interactive character avatar: A hacker in a hoodie. Hover to reveal hobbies and interests."
    >
      <motion.div
        className={styles.bgPulse}
      />
      <motion.div
        className={styles.characterContainer}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="hoodieGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#252525" />
              <stop offset="100%" stopColor="#111" />
            </linearGradient>
            <filter id="neonGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <mask id="characterMask">
              <path
                d="M80 400 L60 380 Q40 320 80 280 L110 260 L290 260 L320 280 Q360 320 340 380 L320 400 Z"
                fill="white"
              />
              <path
                d="M100 280 Q80 140 200 60 Q320 140 300 280 Q250 300 200 320 Q150 300 100 280"
                fill="white"
              />
            </mask>
            <pattern id="scanlinePattern" x="0" y="0" width="1" height="4" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="1" height="4" fill="transparent" />
              <rect x="0" y="2" width="1" height="1" fill="rgba(0, 255, 157, 0.1)" />
            </pattern>
          </defs>
          {/* Character Group */}
          <g>
            {/* Shoulders / Upper Body */}
            <path
              d="M80 400 L60 380 Q40 320 80 280 L110 260 L290 260 L320 280 Q360 320 340 380 L320 400 Z"
              fill="url(#hoodieGradient)"
              stroke="#333"
              strokeWidth="1"
            />
            {/* Hoodie Zipper/Seam */}
            <path d="M200 260 L200 400" stroke="#1a1a1a" strokeWidth="4" />
            {/* The Hood (Back layer) */}
            <path d="M120 260 Q100 120 200 70 Q300 120 280 260" fill="#222" />
            {/* The Hood (Front draping) */}
            <path
              d="M100 280 Q80 140 200 60 Q320 140 300 280 Q250 300 200 320 Q150 300 100 280"
              fill="url(#hoodieGradient)"
            />
            {/* Inner Shadow (Face Void) */}
            <ellipse cx="200" cy="190" rx="60" ry="70" fill="#000" />
            {/* Glowing Eyes (Hidden in shadow) */}
            <g filter="url(#neonGlow)">
              <motion.path
                d="M170 190 L185 195 L170 200"
                fill="none"
                stroke="#00ff9d"
                strokeWidth="2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.path
                d="M230 190 L215 195 L230 200"
                fill="none"
                stroke="#00ff9d"
                strokeWidth="2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </g>
            {/* Tech Accents on Hoodie */}
            {/* Neon Line on Rim */}
            <path d="M110 270 Q100 150 200 85 Q300 150 290 270" fill="none" stroke="#00ff9d" strokeWidth="2" strokeOpacity="0.5" strokeDasharray="10 10" />
            {/* Headphones / Cybergear ear pieces */}
            <rect x="85" y="180" width="20" height="60" rx="5" fill="#333" />
            <rect x="295" y="180" width="20" height="60" rx="5" fill="#333" />
            <circle cx="95" cy="210" r="5" fill="#00ff9d" fillOpacity="0.5" className={styles.pulseAnimation} />
            <circle cx="305" cy="210" r="5" fill="#00ff9d" fillOpacity="0.5" className={styles.pulseAnimation} />
            {/* Drawstrings (Tech cables) */}
            <path d="M180 320 C180 350 170 380 160 390" fill="none" stroke="#444" strokeWidth="3" />
            <rect x="155" y="390" width="10" height="15" fill="#00ff9d" rx="2" opacity="0.8" />
            <path d="M220 320 C220 350 230 380 240 390" fill="none" stroke="#444" strokeWidth="3" />
            <rect x="235" y="390" width="10" height="15" fill="#bd00ff" rx="2" opacity="0.8" />
            {/* Scanline Overlay (Inside SVG, masked, animated via CSS/Framer) */}
            <motion.rect
              x="0"
              y="0"
              width="400"
              height="400"
              fill="url(#scanlinePattern)"
              mask="url(#characterMask)"
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
