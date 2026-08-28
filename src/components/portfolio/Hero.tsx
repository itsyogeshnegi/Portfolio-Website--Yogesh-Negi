import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, MousePointer2 } from "lucide-react";

const roles = ["Full Stack Developer", "Frontend Engineer", "MERN Engineer", "AI Automation Builder"];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");

  useEffect(() => {
    const full = roles[idx];
    let t: number;
    if (phase === "typing") {
      if (text.length < full.length) {
        t = window.setTimeout(() => setText(full.slice(0, text.length + 1)), 55);
      } else t = window.setTimeout(() => setPhase("pause"), 1400);
    } else if (phase === "pause") {
      t = window.setTimeout(() => setPhase("deleting"), 600);
    } else {
      if (text.length > 0) {
        t = window.setTimeout(() => setText(full.slice(0, text.length - 1)), 28);
      } else {
        setIdx((i) => (i + 1) % roles.length);
        setPhase("typing");
        t = window.setTimeout(() => { }, 0);
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, idx]);

  return (
    <section id="top" className="relative flex min-h-[90dvh] lg:min-h-dvh items-center pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Status chip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1 }}
          className="mb-4 sm:mb-6 inline-flex flex-wrap items-center gap-2 rounded-full glass px-3 py-1 font-mono text-[11px] sm:text-xs text-muted-foreground max-w-full"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          <span>available for freelance & full-time</span>
          <span className="text-white/20">·</span>
          <span className="text-cyan">Delhi, IN</span>
        </motion.div>

        {/* Terminal prompt */}
        <motion.p
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }}
          className="font-mono text-xs sm:text-sm text-muted-foreground"
        >
          <span className="text-cyan">$</span> whoami
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.08] tracking-tight"
        >
          Hi, I'm{" "}
          <span className="text-gradient">Yogesh Negi</span>
          <span className="block mt-2 text-2xl sm:text-4xl md:text-5xl font-medium text-foreground/75 min-h-[2rem] sm:min-h-[2.75rem]">
            <span className="font-mono text-cyan">&gt;_</span> {text}
            <span className="animate-blink text-cyan ml-1">▊</span>
          </span>
        </motion.h1>

        {/* Bio summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.45 }}
          className="mt-5 sm:mt-8 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground"
        >
          Software Developer with <span className="text-foreground font-medium">3+ years of experience</span> building scalable{" "}
          <span className="text-foreground font-medium">React.js, Next.js, TypeScript</span> and{" "}
          <span className="text-foreground font-medium">Node.js</span> applications. Delivered enterprise solutions for PVR Cinemas, INOX Movies, and loyalty platforms supporting 1M+ users.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3"
        >
          <a 
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-primary via-primary to-accent px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_35px_-8px_oklch(0.72_0.22_255/0.7)] transition hover:shadow-[0_0_45px_-6px_oklch(0.68_0.24_305/0.7)] text-center"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a 
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:border-primary/40 text-center"
          >
            Contact Me
          </a>
          <a 
            href="/resume.pdf" 
            download="Yogesh_Negi_Resume.pdf" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-white/25 transition text-center"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.75 }}
          className="mt-8 sm:mt-10 flex items-center gap-5 text-muted-foreground"
        >
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-1 transition hover:text-foreground" aria-label="GitHub"><Github className="h-5 w-5" /></a>
          <a href="https://www.linkedin.com/in/yogesh-negi-7b8568302" target="_blank" rel="noreferrer" className="p-1 transition hover:text-foreground" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
          <a href="mailto:yyogesh.singh.negi@gmail.com" className="p-1 transition hover:text-foreground" aria-label="Email"><Mail className="h-5 w-5" /></a>
        </motion.div>

        {/* Code preview card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-10 sm:mt-14 max-w-2xl rounded-2xl glass-strong border border-white/10 p-1 overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5 bg-white/[0.02]">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            </div>
            <span className="font-mono text-[11px] sm:text-xs text-muted-foreground">~/portfolio/about.ts</span>
            <span className="font-mono text-[10px] text-cyan hidden sm:inline">TypeScript</span>
          </div>
          <pre className="overflow-x-auto p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-foreground/90">
            <span className="text-muted-foreground">// Frontend Developer @ Wemonde · ex-Locad</span>{"\n"}
            <span className="text-accent">const</span> <span className="text-cyan">yogesh</span> <span className="text-muted-foreground">=</span> {"{"}
            {"\n"}  role: <span className="text-primary">"Software Developer"</span>,
            {"\n"}  exp: <span className="text-primary">"3+ Years"</span>,
            {"\n"}  stack: [<span className="text-primary">"React"</span>, <span className="text-primary">"Next.js"</span>, <span className="text-primary">"TypeScript"</span>, <span className="text-primary">"Node.js"</span>],
            {"\n"}  enterprise: [<span className="text-primary">"PVR Cinemas"</span>, <span className="text-primary">"CellXchange"</span>, <span className="text-primary">"Aelixar"</span>],
            {"\n"}  usersSupported: <span className="text-cyan">1_000_000</span>,
            {"\n"}{"}"};
          </pre>
        </motion.div>
      </div>

      {/* Scroll indicator for desktop */}
      <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.2 }}
        className="hidden lg:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-muted-foreground/60 pointer-events-none"
      >
        <MousePointer2 className="h-3.5 w-3.5 animate-bounce text-cyan" />
        <span className="font-mono text-[9px] uppercase tracking-widest">scroll</span>
      </motion.div>
    </section>
  );
}
