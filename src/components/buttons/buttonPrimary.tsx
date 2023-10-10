import React from "react";

interface ButtonPrimaryProps {
    buttonText: string,
    onClick: () => void
}

export default function ButtonPrimary({ buttonText, onClick }: ButtonPrimaryProps) {
    return (
        <button className="bg-primary rounded-6 transition-colors hover:bg-secondary text-white px-4 py-2" onClick={() => onClick()}>{buttonText}</button>
    )
}