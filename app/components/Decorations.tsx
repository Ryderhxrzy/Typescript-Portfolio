"use client";

import React from "react";
import { cn } from "@/app/lib/utils";

export function CurlyArrow({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 144 115" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={cn("w-32 h-auto text-pencil", className)}
    >
      <path 
        d="M141.5 3C130.5 12.5 102.5 45.5 81.5 69.5C60.5 93.5 19 111.5 3 111.5M3 111.5C12 108 30.5 96.5 37 90M3 111.5C8 102 18.5 80.5 18.5 70" 
        stroke="currentColor" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

export function SquiggleLine({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 400 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={cn("w-full h-auto text-muted", className)}
    >
      <path 
        d="M1 10C1 10 10.5 1 20 1C29.5 1 39 19 48.5 19C58 19 67.5 1 77 1C86.5 1 96 19 105.5 19C115 19 124.5 1C134 1C143.5 1 153 19 162.5 19C172 19 181.5 1 191 1C200.5 1 210 19 219.5 19C229 19 238.5 1 248 1C257.5 1 267 19 276.5 19C286 19 295.5 1 305 1C314.5 1 324 19 333.5 19C343 19 352.5 1 362 1C371.5 1 381 19 390.5 19C400 19 409.5 1 419 1" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
      />
    </svg>
  );
}
