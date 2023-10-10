import React from "react";

interface ButtonSecondaryProps {
    buttonText: string,
    onClick: () => void
}

export default function ButtonSecondary({ buttonText, onClick }: ButtonSecondaryProps) {
    return (
        <button onClick={() => onClick()}>{buttonText}</button>
    )
}