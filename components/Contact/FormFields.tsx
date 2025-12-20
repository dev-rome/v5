import { FieldValues } from "react-hook-form";
import { FormInputProps, FormTextareaProps } from "@/types/contact";
import styles from "./ContactForm.module.css";

export function FormInput<T extends FieldValues>({ id, label, type = "text", placeholder, register, error, className }: FormInputProps<T>) {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <div className="relative">
                <input
                    key={error?.message}
                    type={type}
                    id={id}
                    {...register(id)}
                    className={`${styles.input} ${error ? styles.inputError : ""} ${className || ""}`}
                    placeholder={placeholder}
                />
            </div>
            {error && (
                <p
                    className={styles.errorMessage}
                >
                    {error.message}
                </p>
            )}
        </div>
    );
}

export function FormTextarea<T extends FieldValues>({ id, label, placeholder, register, error, className }: FormTextareaProps<T>) {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <div className="relative">
                <textarea
                    key={error?.message}
                    id={id}
                    {...register(id)}
                    className={`${styles.textarea} ${error ? styles.inputError : ""} ${className || ""}`}
                    placeholder={placeholder}
                />
            </div>
            {error && (
                <p
                    className={styles.errorMessage}
                >
                    {error.message}
                </p>
            )}
        </div>
    );
}
