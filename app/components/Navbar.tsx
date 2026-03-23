"use client";

import React from "react";
import SketchLogo from "./SketchLogo";
import ThemeToggle from "./ThemeToggle";
import { WobblyButton } from "./Button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b-2 border-pencil/10">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <SketchLogo />
        
        <div className="hidden md:flex items-center gap-8 font-body text-lg">
          <a 
            href="/home" 
            className={`transition-colors relative group ${isActive("/home") ? "text-accent" : "hover:text-accent"}`}
          >
            Home
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all origin-left ${isActive("/home") ? "w-full" : "w-full scale-x-0 group-hover:scale-x-100"}`} />
          </a>

          <a href="#projects" className="hover:text-accent transition-colors relative group">
            Projects
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </a>
          <a href="#skills" className="hover:text-accent transition-colors relative group">
            Skills
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </a>
          <ThemeToggle />
          <WobblyButton size="sm" variant="accent">Hire Me!</WobblyButton>
        </div>
      </div>
    </nav>
  );
}
