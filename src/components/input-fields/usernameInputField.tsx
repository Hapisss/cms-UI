import React from "react";

interface UsernameInputFieldProps {
    placeholder?: string,
    namespace: string,
    onChange(namespace: string, value: string): void
}

export default function UsernameInputField({ placeholder, onChange, namespace }: UsernameInputFieldProps) {

    return (
        <input type="text" className="border rounded-6 border-gray-300 placeholder-gray-300 w-80 h-8 px-2 accent-accent outline-none transition-shadow hover:shadow-md" placeholder={placeholder} onChange={(event) => onChange(namespace, event.target.value)} />
    )
}