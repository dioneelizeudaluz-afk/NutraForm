import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "soft";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  ghost: "btn-ghost",
  soft: "btn-soft"
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={`${variantClass[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
