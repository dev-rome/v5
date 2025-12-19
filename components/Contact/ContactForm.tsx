"use client";

import { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput, FormTextarea } from "./FormFields";
import { SuccessMessage } from "./SuccessMessage";
import { ContactFormProps } from "@/types/contact";
import { Send } from "lucide-react";
import styles from "./ContactForm.module.css";

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Please enter a valid email"),
    subject: z.string().min(5, "Subject must be at least 5 characters").transform(s => s || undefined).optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;


export function ContactForm({ onSuccess, className = "" }: ContactFormProps) {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema)
    });

    const onSubmit = async (data: ContactFormData) => {
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
            alert("Transmission failed. Please try again.");
        }
    };

    if (submitted) {
        return <SuccessMessage className={className} />;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} ${className}`} noValidate>
            <FormInput
                id="name"
                label="NAME"
                placeholder="Name"
                register={register}
                error={errors.name}
            />
            <FormInput
                id="email"
                label="EMAIL"
                type="email"
                placeholder="Email"
                register={register}
                error={errors.email}
            />
            <FormInput
                id="subject"
                label="SUBJECT"
                placeholder="Subject"
                register={register}
                error={errors.subject}
            />
            <FormTextarea
                id="message"
                label="MESSAGE"
                placeholder="Message"
                register={register}
                error={errors.message}
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
