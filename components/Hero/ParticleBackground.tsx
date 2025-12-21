"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Star } from "@/types/hero";
import styles from "./ParticleBackground.module.css";


export function ParticleBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 64rem)").matches);
    };
    checkMobile();

    window.addEventListener("resize", checkMobile);

    const newStars: Star[] = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1, // 1px to 3px
      delay: Math.random() * 5,
    }));
    setStars(newStars);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.nightGradient} />
      {/* 2. The Moon (Optimized) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className={styles.moonWrapper}
        style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
      >
        <svg viewBox="0 0 100 100" className={styles.moonSvg}>
          <defs>
            <radialGradient id="moonGradient" cx="30%" cy="30%" r="80%">
              <stop offset="0%" stopColor="#fdfdfd" />
              <stop offset="50%" stopColor="#e2e2e2" />
              <stop offset="100%" stopColor="#a0a0a0" />
            </radialGradient>
          </defs>
          {/* Main Body */}
          <circle cx="50" cy="50" r="48" fill="url(#moonGradient)" />
          {/* Maria (Dark Spots) - Simplified Opacity */}
          <path d="M30,30 Q40,20 55,35 T70,50 Q60,65 45,55 T30,30" fill="#ccc" opacity="0.4" />
          <path d="M60,20 Q70,15 80,25 T75,40 Q65,45 55,35" fill="#ccc" opacity="0.3" />
          <path d="M40,60 Q50,55 65,65 T70,80 Q55,85 45,75" fill="#ccc" opacity="0.4" />
          {/* Atmosphere/Glow Ring */}
          <circle cx="50" cy="50" r="48" fill="none" stroke="#fff" strokeWidth="1" opacity="0.2" />
        </svg>
      </motion.div>
      {/* 3. Twinkling Stars (CSS Animation) */}
      {stars.map((star, i) => (
        <div
          key={i}
          className={styles.star}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: isMobile ? 0.6 : undefined,
            animationDuration: isMobile ? '0s' : `${Math.random() * 3 + 2}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      {!isMobile && (
        <div className={styles.clouds} />
      )}
      {!isMobile && (
        <>
          <motion.div
            className={`${styles.shootingStarContainer} ${styles.shootingStar1}`}
            initial={{ opacity: 0 }}
            animate={{
              x: [-50, -600],
              y: [0, 600],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "easeIn"
            }}
          >
            <div className={styles.starTrail}>
              <div className={`${styles.trailLine} ${styles.whiteTrail}`} />
              {/* Star Shape Head */}
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.starHead}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </motion.div>
          <motion.div
            className={`${styles.shootingStarContainer} ${styles.shootingStar2}`}
            initial={{ opacity: 0 }}
            animate={{
              x: [-50, -800],
              y: [0, 800],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 8,
              delay: 2,
              ease: "easeOut"
            }}
          >
            <div className={styles.starTrail}>
              <div className={`${styles.trailLine} ${styles.cyanTrail}`} />
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.cyanHead}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </motion.div>
          <motion.div
            className={`${styles.shootingStarContainer} ${styles.shootingStar3}`}
            initial={{ opacity: 0 }}
            animate={{
              x: [-20, -400],
              y: [0, 400],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 12,
              delay: 5,
              ease: "easeIn"
            }}
          >
            <div className={styles.starTrail}>
              <div className={`${styles.trailLine} ${styles.purpleTrail}`} />
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.purpleHead}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}
