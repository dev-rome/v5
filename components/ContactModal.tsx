"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, Send } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Portfolio Mission: ${formData.name}`, // Custom subject
                })
            });

            if (response.ok) {
                setSubmitted(true);
                setTimeout(() => {
                    setSubmitted(false);
                    onClose();
                    setFormData({ name: "", email: "", message: "" });
                }, 3000);
            } else {
                console.error("Transmission failed");
                alert("Transmission failed. Please try again or email manually.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Transmission error. Check logs.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50 px-4"
                    >
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                            {/* Background Decor */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <h2 className="text-2xl font-bold text-white mb-2 font-mono">INITIALIZE_COMMS</h2>
                            <p className="text-neutral-400 text-sm mb-6">Send a secure transmission. I'll respond ASAP.</p>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="py-12 text-center"
                                >
                                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Send className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-neutral-400">Transmission successful.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-mono text-neutral-500 mb-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                                            placeholder="Jane Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-xs font-mono text-neutral-500 mb-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                                            placeholder="jane@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-xs font-mono text-neutral-500 mb-1">Message</label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all resize-none"
                                            placeholder="Project details or just saying hello..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                                    >
                                        {isSubmitting ? "TRANSMITTING..." : "SEND MESSAGE"}
                                        {!isSubmitting && <Send className="w-4 h-4" />}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
