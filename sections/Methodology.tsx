"use client";

import { motion } from "motion/react";
import { FlipCard } from "../components/methodology/FlipCard";

export function Methodology() {
    const methods = [
        {
            number: "01",
            title: "Make It",
            description: "I bring designs to life directly in the browser, creating interactive experiences teams can rally around. I focus on transforming ideas into tangible, functional prototypes that showcase a project's potential in real-time."
        },
        {
            number: "02",
            title: "Collaborate",
            description: "Collaboration is at the heart of every successful project. I work closely with teams and clients to bring ideas to life, ensuring clear communication and alignment throughout the process. I focus on creating functional solutions that align with a shared vision."
        },
        {
            number: "03",
            title: "Accessible",
            description: "I prioritize building inclusive and user-friendly experiences that cater to people of all abilities. By following accessibility standards and best practices, I ensure solutions are meaningful, equitable, and easy to use for everyone."
        },
        {
            number: "04",
            title: "Keep Learning",
            description: "I believe continuous learning is key to staying ahead in a constantly evolving industry. Whether it's exploring new technologies, refining existing skills, or adopting innovative practices, I stay curious and committed to growth."
        }
    ];

    return (
        <section className="py-32 w-full px-4 md:px-8 bg-[#050505] relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col md:flex-row md:items-end gap-2 md:gap-4 border-b border-white/10 pb-4"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        METHODOLOGY
                    </h2>
                    <span className="text-neutral-600 font-mono text-sm mb-1 md:mb-2">OPERATING_PROTOCOLS</span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {methods.map((method, index) => (
                        <motion.div
                            key={method.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <FlipCard {...method} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
