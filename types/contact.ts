import { FieldError, UseFormRegister, FieldValues, Path } from "react-hook-form";

export interface ContactFormProps {
    onSuccess?: () => void;
    className?: string;
}

export interface SuccessMessageProps {
    className?: string;
}

export interface FormInputProps<T extends FieldValues> {
    id: Path<T>;
    label: string;
    type?: string;
    placeholder: string;
    register: UseFormRegister<T>;
    error?: FieldError;
    className?: string;
}

export interface FormTextareaProps<T extends FieldValues> {
    id: Path<T>;
    label: string;
    placeholder: string;
    register: UseFormRegister<T>;
    error?: FieldError;
    className?: string;
}

export interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}
