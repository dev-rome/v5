"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput, FormTextarea } from "./FormFields";
import { SuccessMessage } from "./SuccessMessage";
import { ContactFormProps } from "@/types/contact";
import { contactSchema, ContactFormData } from "@/lib/contact";
import { Send } from "lucide-react";
import styles from "./ContactForm.module.css";

export function ContactForm({ onSuccess, className = "" }: ContactFormProps) {
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema)
    });

    const onSubmit = async (data: ContactFormData) => {
        setSubmitError(null);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setSubmitted(true);
                reset();

                if (onSuccess) {
                    setTimeout(() => {
                        onSuccess();
                        setSubmitted(false);
                    }, 3000);
                } else {
                    setTimeout(() => setSubmitted(false), 5000);
                }
            } else {
                throw new Error("Failed to send");
            }
        } catch (error) {
            console.error("Error:", error);
            setSubmitError("Transmission failed. Please try again.");
        }
    };

    if (submitted) {
        return <SuccessMessage className={className} />;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} ${className}`} noValidate>
            {submitError && (
                <div className={styles.errorBanner} role="alert">
                    {submitError}
                </div>
            )}
            <FormInput
                id="name"
                label="NAME"
                placeholder="Name"
                register={register}
                error={errors.name}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
            />
            <FormInput
                id="email"
                label="EMAIL"
                type="email"
                placeholder="Email"
                register={register}
                error={errors.email}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
            />
            <FormInput
                id="subject"
                label="SUBJECT"
                placeholder="Subject"
                register={register}
                error={errors.subject}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
            />
            <FormTextarea
                id="message"
                label="MESSAGE"
                placeholder="Message"
                register={register}
                error={errors.message}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
            />
            <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
            >
                {isSubmitting ? "TRANSMITTING..." : "SEND MESSAGE"}
                {!isSubmitting && <Send size={18} />}
            </button>
        </form>
    );
}
