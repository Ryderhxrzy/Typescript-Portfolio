"use client";

import React from "react";
import { cn } from "@/app/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
}

const WobblyButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-white shadow-hand hover:bg-primary-hover hover:shadow-hand-hover",
      secondary: "bg-muted hover:bg-secondary hover:text-white shadow-hand hover:shadow-hand-hover",
      accent: "bg-accent text-white shadow-hand hover:bg-accent/90 hover:shadow-hand-hover",
    };


    const sizes = {
      sm: "px-4 py-1.5 text-lg",
      md: "px-6 py-2.5 text-xl",
      lg: "px-8 py-3.5 text-2xl",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "wobbly-all inline-flex cursor-pointer items-center justify-center font-body border-[3px] border-pencil outline-none transition-all active:shadow-none active:translate-x-1 active:translate-y-1 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        style={{
          borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
        }}
        {...props}
      />
    );
  }
);

WobblyButton.displayName = "WobblyButton";

export { WobblyButton };
