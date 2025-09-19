import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`px-5 py-2 rounded-xl font-medium shadow ${className}`}
    >
      {children}
    </button>
  );
}
