"use client";

import { motion } from "motion/react";
import { Gamepad2, BookOpen, ChefHat, Dumbbell, Trophy } from "lucide-react";

export function HeroAvatar() {
  return (
    <div
      className="relative group cursor-pointer w-72 h-72 md:w-96 md:h-96 mx-auto perspective-1000"
      role="img"
      aria-label="Interactive character avatar: A hacker in a hoodie. Hover to reveal hobbies and interests."
    >

      {/* Background Pulse */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-4 bg-primary/10 rounded-full blur-2xl"
      />

      {/* Hover Info Popups (Hobbies/Traits) */}
      <motion.div
        className="absolute -left-24 top-10 p-4 bg-black/90 border-l-2 border-primary backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0 z-30 shadow-[0_0_20px_rgba(0,255,157,0.2)] w-40"
      >
        <div className="mb-2 border-b border-white/10 pb-1">
          <span className="text-xs font-bold text-primary tracking-widest">ACTIVE</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-neutral-300">
            <Dumbbell className="w-3 h-3 text-primary" />
            <span className="text-[10px] uppercase font-mono">Working Out</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-300">
            <Trophy className="w-3 h-3 text-primary" />
            <span className="text-[10px] uppercase font-mono">Sports</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-24 top-20 p-4 bg-black/90 border-r-2 border-secondary backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 z-30 shadow-[0_0_20px_rgba(189,0,255,0.2)] w-40"
      >
        <div className="mb-2 border-b border-white/10 pb-1 text-right">
          <span className="text-xs font-bold text-secondary tracking-widest">INTERESTS</span>
        </div>
        <div className="space-y-2 flex flex-col items-end">
          <div className="flex items-center gap-2 text-neutral-300">
            <span className="text-[10px] uppercase font-mono">Video Games</span>
            <Gamepad2 className="w-3 h-3 text-secondary" />
          </div>
          <div className="flex items-center gap-2 text-neutral-300">
            <span className="text-[10px] uppercase font-mono">Reading</span>
            <BookOpen className="w-3 h-3 text-secondary" />
          </div>
          <div className="flex items-center gap-2 text-neutral-300">
            <span className="text-[10px] uppercase font-mono">Baking</span>
            <ChefHat className="w-3 h-3 text-secondary" />
          </div>
        </div>
      </motion.div>

      {/* The Character (Hoodie Silhouette) */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full h-full drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
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
          </defs>

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
          <circle cx="95" cy="210" r="5" fill="#00ff9d" fillOpacity="0.5" className="animate-pulse" />
          <circle cx="305" cy="210" r="5" fill="#00ff9d" fillOpacity="0.5" className="animate-pulse" />

          {/* Drawstrings (Tech cables) */}
          <path d="M180 320 C180 350 170 380 160 390" fill="none" stroke="#444" strokeWidth="3" />
          <rect x="155" y="390" width="10" height="15" fill="#00ff9d" rx="2" opacity="0.8" />

          <path d="M220 320 C220 350 230 380 240 390" fill="none" stroke="#444" strokeWidth="3" />
          <rect x="235" y="390" width="10" height="15" fill="#bd00ff" rx="2" opacity="0.8" />

        </svg>

        {/* Scan line overlay on character only */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-primary/5 to-transparent bg-[length:100%_4px] animate-scanline pointer-events-none mask-image-hoodie" />
      </motion.div>

    </div>
  );
}
