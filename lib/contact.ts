import * as z from "zod";

export const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Please enter a valid email"),
    subject: z.string().refine(val => val === "" || val.length >= 5, {
        message: "Subject must be at least 5 characters",
    }),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
