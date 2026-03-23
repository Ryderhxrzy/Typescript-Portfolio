import Image from "next/image";
import { cn } from "../lib/utils";
import { WobblyCard } from "../components/Card";
import { SquiggleLine } from "../components/Decorations";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import {
  ExternalLink,
  Code2,
  Palette,
  MessageSquare,
  Mail,
  Star,
  Github
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-paper py-12">
          <div className="max-w-5xl mx-auto px-6">
            <Hero />
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="bg-muted/30 dark:bg-muted/10 py-24 border-y-2 border-pencil/5">
          <div className="max-w-5xl mx-auto px-6 space-y-16">
            <div className="text-center space-y-4">
              <h3 className="text-5xl font-heading italic">Cool Projects</h3>
              <SquiggleLine className="max-w-xs mx-auto text-accent/40" />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <WobblyCard decoration="tape" className="space-y-4 group">
                <div className="aspect-video relative overflow-hidden wobbly-border-md bg-paper border-[3px]">
                  <Image
                    src="/images/project1.png"
                    alt="Project 1"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="text-3xl font-heading">The Sketch App</h4>
                  <p className="text-lg font-body text-pencil/70">
                    A collaboration tool built for creative teams who hate standard whiteboards.
                  </p>
                  <div className="flex gap-4 pt-2">
                    <span className="text-sm font-body px-3 py-0.5 border-2 border-pencil rounded-full">Next.js</span>
                    <span className="text-sm font-body px-3 py-0.5 border-2 border-pencil rounded-full">Canvas</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t-2 border-dashed border-pencil/10">
                  <a href="#" className="flex items-center gap-1 hover:text-accent font-body underline underline-offset-4">
                    Case Study <ExternalLink size={16} />
                  </a>
                  <Github size={20} className="text-pencil/40 hover:text-pencil cursor-pointer" />
                </div>
              </WobblyCard>

              <WobblyCard decoration="tack" variant="yellow" className="space-y-4 group rotate-2">
                <div className="aspect-video relative overflow-hidden wobbly-border-md bg-paper border-[3px]">
                  <Image
                    src="/images/project2.png"
                    alt="Project 2"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="text-3xl font-heading">Marker Dash</h4>
                  <p className="text-lg font-body text-pencil/70">
                    Real-time dashboard for tracking marketing scribble campaigns.
                  </p>
                  <div className="flex gap-4 pt-2">
                    <span className="text-sm font-body px-3 py-0.5 border-2 border-pencil rounded-full">React</span>
                    <span className="text-sm font-body px-3 py-0.5 border-2 border-pencil rounded-full">D3.js</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t-2 border-dashed border-pencil/10">
                  <a href="#" className="flex items-center gap-1 hover:text-accent font-body underline underline-offset-4">
                    View Demo <ExternalLink size={16} />
                  </a>
                  <Github size={20} className="text-pencil/40 hover:text-pencil cursor-pointer" />
                </div>
              </WobblyCard>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="bg-paper py-24">
          <div className="max-w-5xl mx-auto px-6 space-y-12">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3 space-y-6">
                <h3 className="text-5xl font-heading -rotate-2">Skill Stack</h3>
                <p className="text-xl font-body leading-relaxed text-pencil/80">
                  I pick up tools like I pick up pens. Here are the ones I use most often to bring ideas to life.
                </p>
                <div className="w-full h-1 bg-pencil/10 rounded-full" />
                <ul className="space-y-4 font-body text-2xl">
                  <li className="flex items-center gap-3"><Code2 className="text-accent" /> Frontend Dev</li>
                  <li className="flex items-center gap-3"><Palette className="text-secondary" /> UI Design</li>
                  <li className="flex items-center gap-3"><MessageSquare className="text-pencil" /> Strategy</li>
                </ul>
              </div>

              <div className="md:w-2/3 flex flex-wrap gap-6 justify-center">
                {[
                  { name: "React", rot: "rotate-2", bg: "bg-paper" },
                  { name: "TypeScript", rot: "-rotate-3", bg: "bg-highlight" },
                  { name: "Next.js", rot: "rotate-1", bg: "bg-paper" },
                  { name: "Tailwind", rot: "rotate-4", bg: "bg-paper" },
                  { name: "Animations", rot: "-rotate-2", bg: "bg-highlight" },
                  { name: "Figma", rot: "rotate-2", bg: "bg-paper" },
                  { name: "Sketching", rot: "-rotate-1", bg: "bg-paper" },
                  { name: "Prototyping", rot: "rotate-3", bg: "bg-highlight" },
                ].map((skill, i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-32 h-32 p-4 flex items-center justify-center text-center font-heading text-xl shadow-hand hover:scale-110 hover:-rotate-6 transition-all border-2 border-pencil",
                      skill.rot,
                      skill.bg
                    )}
                    style={{
                      borderRadius: "15px 225px 15px 255px / 255px 15px 225px 15px"
                    }}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>


      {/* Footer */}
      <footer className="w-full py-16 bg-pencil text-paper dark:bg-muted dark:text-pencil flex flex-col items-center gap-8 px-6 text-center">
        <h2 className="text-4xl font-heading -rotate-1">Let's build something sketch-worthy!</h2>
        <div className="flex gap-8">
          <a href="#" className="flex items-center gap-2 text-xl font-body hover:text-accent transition-colors">
            <Mail /> Email Me
          </a>
          <a href="#" className="flex items-center gap-2 text-xl font-body hover:text-accent transition-colors">
            <Star /> Follow Along
          </a>
        </div>
        <div className="pt-8 border-t border-pencil/20 dark:border-paper/10 w-full max-w-lg opacity-40 font-body">
          &copy; 2026 RYDERHXRZY. Hand-drawn with caffeine.
        </div>
      </footer>
    </div>
  );
}
