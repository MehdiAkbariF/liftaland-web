import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "safety";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md select-none";

    const variants = {
      primary:
        "bg-industrial-900 text-white hover:bg-industrial-800 dark:bg-white dark:text-industrial-950 dark:hover:bg-slate-200 focus-visible:ring-industrial-900",
      secondary:
        "bg-industrial-100 text-industrial-900 hover:bg-industrial-200 dark:bg-industrial-800 dark:text-white dark:hover:bg-industrial-700 focus-visible:ring-industrial-400",
      outline:
        "border border-slate-300 dark:border-industrial-700 bg-transparent hover:bg-slate-100 dark:hover:bg-industrial-800 text-industrial-900 dark:text-white",
      ghost:
        "bg-transparent hover:bg-slate-100 dark:hover:bg-industrial-800 text-industrial-900 dark:text-white",
      safety:
        "bg-safety-500 text-industrial-950 font-semibold hover:bg-safety-600 focus-visible:ring-safety-500",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs gap-1.5",
      md: "h-10 px-4 text-sm gap-2",
      lg: "h-12 px-6 text-base gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";