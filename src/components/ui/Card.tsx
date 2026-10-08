import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padded?: boolean;
}

export default function Card({ children, className = "", padded = true, ...rest }: CardProps) {
  return (
    <div className={`card-nf ${padded ? "p-6" : ""} ${className}`} {...rest}>
      {children}
    </div>
  );
}
