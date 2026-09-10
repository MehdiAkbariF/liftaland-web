import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "tech";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  const styles = {
    default:
      "bg-slate-100 text-slate-800 dark:bg-industrial-800 dark:text-slate-300 border border-slate-200 dark:border-industrial-700",
    success:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40",
    warning:
      "bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800/40",
    tech:
      "bg-blue-50 text-techBlue-600 dark:bg-techBlue-900/30 dark:text-blue-400 border border-blue-200 dark:border-techBlue-900/50 font-mono tracking-tight",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium select-none",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}