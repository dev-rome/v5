import styles from "./ParticleBackground.module.css";

export function Moon() {
    return (
        <div
            className={styles.moonWrapper}
            style={{ willChange: "transform", transform: "translateZ(0)" }}
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
        </div>
    );
}
