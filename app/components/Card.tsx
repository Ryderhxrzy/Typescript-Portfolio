"use client";

import React from "react";
import { cn } from "@/app/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  decoration?: "none" | "tape" | "tack";
  variant?: "white" | "yellow" | "muted";
}

const WobblyCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, decoration = "none", variant = "white", children, ...props }, ref) => {
    const variants = {
      white: "bg-paper",
      yellow: "bg-highlight",
      muted: "bg-muted",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative border-2 border-pencil p-6 transition-all hover:-rotate-1 shadow-hand",
          variants[variant],
          className
        )}
        style={{
          borderRadius: "125px 8px 110px 8px / 8px 110px 8px 125px",
        }}
        {...props}
      >
        {decoration === "tape" && (
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 bg-[#e5e0d8]/60 dark:bg-pencil/20 rotate-2 border-x border-pencil/5 flex items-center justify-center pointer-events-none z-20"
            style={{
              borderRadius: "4px 2px 5px 3px / 2px 4px 3px 5px",
            }}
          />
        )}


        {decoration === "tack" && (
          <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-5 h-5 bg-accent rounded-full border-2 border-pencil flex items-center justify-center pointer-events-none shadow-sm">
            <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
          </div>
        )}
        {children}
      </div>
    );
  }
);

WobblyCard.displayName = "WobblyCard";

export { WobblyCard };
