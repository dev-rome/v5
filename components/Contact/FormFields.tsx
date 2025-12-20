"use client";

import { motion, AnimatePresence } from "motion/react";
import { FieldValues } from "react-hook-form";
import { FormInputProps, FormTextareaProps } from "@/types/contact";
import styles from "./ContactForm.module.css";

export function FormInput<T extends FieldValues>({ id, label, type = "text", placeholder, register, error, className }: FormInputProps<T>) {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <div className="relative">
                <motion.input
                    type={type}
                    id={id}
                    {...register(id)}
                    className={`${styles.input} ${error ? styles.inputError : ""} ${className || ""}`}
                    placeholder={placeholder}
                    animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                />
            </div>
            <AnimatePresence>
                {error && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={styles.errorMessage}
                    >
                        {error.message}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}

export function FormTextarea<T extends FieldValues>({ id, label, placeholder, register, error, className }: FormTextareaProps<T>) {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <div className="relative">
                <motion.textarea
                    id={id}
                    {...register(id)}
                    className={`${styles.textarea} ${error ? styles.inputError : ""} ${className || ""}`}
                    placeholder={placeholder}
                    animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                />
            </div>
            <AnimatePresence>
                {error && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={styles.errorMessage}
                    >
                        {error.message}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}
