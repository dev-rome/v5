"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Star } from "@/types/hero";
import styles from "./ParticleBackground.module.css";

export function ParticleBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const generatedStars: Star[] = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
    setTimeout(() => setStars(generatedStars), 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 64rem)").matches);
    };
    setTimeout(handleResize, 0);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.container} aria-hidden="true">
      <div className={styles.nightGradient} />
      {/* Moon */}
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
          <circle cx="50" cy="50" r="48" fill="url(#moonGradient)" />
          <path d="M30,30 Q40,20 55,35 T70,50 Q60,65 45,55 T30,30" fill="#ccc" opacity="0.4" />
          <path d="M60,20 Q70,15 80,25 T75,40 Q65,45 55,35" fill="#ccc" opacity="0.3" />
          <path d="M40,60 Q50,55 65,65 T70,80 Q55,85 45,75" fill="#ccc" opacity="0.4" />
          <circle cx="50" cy="50" r="48" fill="none" stroke="#fff" strokeWidth="1" opacity="0.2" />
        </svg>
      </motion.div>
      {/* Stars */}
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
            animationDuration: isMobile ? "0s" : `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      {/* Clouds */}
      {!isMobile && <div className={styles.clouds} />}
      {/* Shooting Stars */}
      {!isMobile && (
        <>
          <motion.div
            className={`${styles.shootingStarContainer} ${styles.shootingStar1}`}
            initial={{ opacity: 0 }}
            animate={{ x: [-50, -600], y: [0, 600], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 5, ease: "easeIn" }}
          >
            <div className={styles.starTrail}>
              <div className={`${styles.trailLine} ${styles.whiteTrail}`} />
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.starHead}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </motion.div>
          <motion.div
            className={`${styles.shootingStarContainer} ${styles.shootingStar2}`}
            initial={{ opacity: 0 }}
            animate={{ x: [-50, -800], y: [0, 800], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 8, delay: 2, ease: "easeOut" }}
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
            animate={{ x: [-20, -400], y: [0, 400], opacity: [0, 1, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 12, delay: 5, ease: "easeIn" }}
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
