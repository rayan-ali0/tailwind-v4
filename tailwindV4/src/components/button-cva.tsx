// Button.tsx
import { cva } from 'class-variance-authority';
import React, {type ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    onClick?: () => void
}

export default function ButtonCVA({
    children,
    variant = 'primary',
    size = 'md',
    disabled = false,
    onClick,
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const buttonVariants = cva(
        baseStyles,
        {
            variants: {
                variant: {
                    primary: 'btn-primary',
                    secondary: 'btn-secondary',
                    danger: 'btn-danger',
                    ghost: 'btn-ghost',
                },
                size: {
                    sm: "btn-sm",
                    md: "btn-md",
                    lg: "btn-lg",
                },
            },
            defaultVariants: {
                variant: "primary",
                size: "md",
            },
        }
    );

    return (
        <button className={buttonVariants({ variant, size })} {...props} key="btn-cva" onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}