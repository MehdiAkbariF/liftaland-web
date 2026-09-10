import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "warning" | "success" | "tech";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  const styles = {
    // خنثی و صنعتی، کاملاً یکدست در دارک‌مود
    default:
      "bg-slate-100 dark:bg-industrial-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-industrial-700",
    
    // رنگ کهربایی ایمنی تمیز و بدون هاله تیره
    warning:
      "bg-amber-500/10 dark:bg-amber-400/10 text-amber-700 dark:text-amber-300 border border-amber-500/25 dark:border-amber-400/25",
    
    // وضعیت موفقیت
    success:
      "bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 dark:border-emerald-400/25",
    
    // فنی و پارت‌نامبر
    tech:
      "bg-blue-500/10 dark:bg-blue-400/10 text-techBlue-600 dark:text-blue-300 border border-blue-500/25 dark:border-blue-400/25 font-mono",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold select-none transition-colors",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}