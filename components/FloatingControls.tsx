"use client";

import { motion } from "motion/react";
import { FileDown, Mail } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "./ContactModal";

export function FloatingControls() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <>
            {/* Desktop Floating Dock */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40 hidden md:flex"
            >
                <a
                    href="/resume.pdf"
                    download
                    className="p-3 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full hover:bg-white hover:text-black transition-all group relative cursor-pointer"
                    aria-label="Download CV"
                >
                    <FileDown className="w-5 h-5" />
                    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 text-xs font-mono bg-white text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Download CV
                    </span>
                </a>

                <button
                    onClick={() => setIsContactOpen(true)}
                    className="p-3 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full hover:bg-white hover:text-black transition-all group relative cursor-pointer"
                    aria-label="Contact Me"
                >
                    <Mail className="w-5 h-5" />
                    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 text-xs font-mono bg-white text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Contact Me
                    </span>
                </button>
            </motion.div>

            {/* Mobile Fixed Bottom Bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 md:hidden z-40"
            >
                <a
                    href="/resume.pdf"
                    download
                    className="flex items-center gap-2 px-6 py-3 bg-black/80 backdrop-blur-md border border-white/10 text-white text-xs font-mono rounded-full shadow-lg"
                >
                    <FileDown className="w-4 h-4" />
                    <span>CV</span>
                </a>
                <button
                    onClick={() => setIsContactOpen(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-black/80 backdrop-blur-md border border-white/10 text-white text-xs font-mono rounded-full shadow-lg"
                >
                    <Mail className="w-4 h-4" />
                    <span>Contact</span>
                </button>
            </motion.div>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    );
}
