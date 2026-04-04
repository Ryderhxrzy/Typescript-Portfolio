"use client";

import React from "react";
import Image from "next/image";
import { WobblyButton } from "../Button";
import { CurlyArrow } from "../Decorations";
import { 
  Github, 
  Linkedin, 
  Facebook, 
  Monitor, 
  GraduationCap, 
  Rocket, 
  Eye 
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative grid md:grid-cols-2 gap-12 items-center py-10 w-full">

      <div className="space-y-6 relative z-10">
        <p className="font-body text-xl text-pencil/60">Hello, I'm</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading leading-tight text-pencil whitespace-nowrap">
          Jhay-R <span className="text-primary">Cervantes</span>
        </h2>


        <p className="font-body text-xl text-pencil/60">
          Also known as <span className="text-accent italic font-heading text-2xl">Ryder Hxrzy</span>
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <span className="inline-flex items-center gap-1.5 bg-highlight px-4 py-1 border-2 border-pencil -rotate-1 shadow-hand-hover font-body text-base hover:scale-110 hover:rotate-0 transition-all cursor-default">
            <Monitor size={16} strokeWidth={2.5} /> Freelance Developer
          </span>
          <span className="inline-flex items-center gap-1.5 bg-muted px-4 py-1 border-2 border-pencil rotate-1 shadow-hand-hover font-body text-base text-pencil hover:scale-110 hover:rotate-0 transition-all cursor-default">
            <GraduationCap size={16} strokeWidth={2.5} /> IT Student
          </span>
          <span className="inline-flex items-center gap-1.5 bg-muted px-4 py-1 border-2 border-pencil -rotate-1 shadow-hand-hover font-body text-base text-pencil hover:scale-110 hover:rotate-0 transition-all cursor-default">
            <Rocket size={16} strokeWidth={2.5} /> Since 2023
          </span>
        </div>


        <p className="text-xl md:text-2xl font-body max-w-lg leading-relaxed text-pencil/80">
          I'm an <strong>Information Technology student</strong> passionate about creating{" "}
          <strong>modern, responsive, and user-friendly web applications.</strong> I focus on
          building projects that are functional, clean, and visually engaging — and I'm available
          for <strong>freelance projects</strong> right now.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a href="#projects">
            <WobblyButton variant="primary" className="gap-2">
              <Eye size={20} />
              See My Work
            </WobblyButton>
          </a>

          <div className="flex items-center gap-4 px-4">
            <a href="#" className="p-2 border-2 border-pencil rounded-full hover:bg-pencil hover:text-white transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <a href="#" className="p-2 border-2 border-pencil rounded-full hover:bg-pencil hover:text-white transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-2 border-2 border-pencil rounded-full hover:bg-pencil hover:text-white transition-all hover:scale-110">
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center md:justify-end items-center group/profile">

        {/* Decorative arrow pointing to CTA */}
        <CurlyArrow className="absolute -left-16 bottom-0 hidden lg:block -rotate-12" />

        <div className="relative w-full aspect-square max-w-sm transition-transform duration-500 group-hover/profile:scale-105 cursor-pointer">
          <div className="absolute inset-0 bg-accent wobbly-border rotate-3 -translate-x-2 -translate-y-2 group-hover/profile:rotate-1 transition-transform" />
          <div className="absolute inset-0 bg-paper wobbly-border -rotate-2 overflow-hidden shadow-hand-lg group-hover/profile:rotate-0 transition-transform">
            <Image
              src="/images/profile.png"
              alt="Avatar Sketch"
              fill
              className="object-cover opacity-90 transition-all duration-500"
            />

          </div>
        </div>
      </div>


    </section>
  );
}
