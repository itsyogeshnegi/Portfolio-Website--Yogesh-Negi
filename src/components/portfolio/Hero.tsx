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
    <section id="top" className="relative flex min-h-dvh items-center pt-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* status */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1 font-mono text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          <span>available for freelance & full-time</span>
          <span className="text-white/20">·</span>
          <span className="text-cyan">Delhi, IN</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-mono text-sm text-muted-foreground"
        >
          <span className="text-cyan">$</span> whoami
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-2 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Hi, I'm{" "}
          <span className="text-gradient">Yogesh Negi</span>
          <span className="block mt-2 text-3xl font-medium text-foreground/70 sm:text-4xl md:text-5xl">
            <span className="font-mono">&gt;_</span> {text}
            <span className="animate-blink text-cyan">▊</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          Software Developer with <span className="text-foreground">3+ years of experience</span> building scalable{" "}
          <span className="text-foreground">React.js, Next.js, TypeScript</span> and{" "}
          <span className="text-foreground">Node.js</span> applications. Delivered enterprise solutions for PVR Cinemas, INOX Movies, and loyalty platforms supporting 1M+ users.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-primary via-primary to-accent px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_40px_-8px_oklch(0.72_0.22_255/0.7)] transition hover:shadow-[0_0_50px_-6px_oklch(0.68_0.24_305/0.7)]">
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:border-primary/40">
            Contact Me
          </a>
          <a href="/resume.pdf" download="Yogesh_Negi_Resume.pdf" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground">
            <Download className="h-4 w-4" /> Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="mt-10 flex items-center gap-5 text-muted-foreground"
        >
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="transition hover:text-foreground" aria-label="GitHub"><Github className="h-5 w-5" /></a>
          <a href="https://www.linkedin.com/in/yogesh-negi-7b8568302" target="_blank" rel="noreferrer" className="transition hover:text-foreground" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
          <a href="mailto:yyogesh.singh.negi@gmail.com" className="transition hover:text-foreground" aria-label="Email"><Mail className="h-5 w-5" /></a>
        </motion.div>

        {/* code preview card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-16 max-w-2xl rounded-2xl glass-strong p-1"
        >
          <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">~/portfolio/about.ts</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
            <span className="text-muted-foreground">// Frontend Developer @ Wemonde · ex-Locad</span>{"\n"}
            <span className="text-accent">const</span> <span className="text-cyan">yogesh</span> <span className="text-muted-foreground">=</span> {"{"}
            {"\n"}  role: <span className="text-primary">"Software Developer"</span>,
            {"\n"}  exp: <span className="text-primary">"3+ Years"</span>,
            {"\n"}  stack: [<span className="text-primary">"React.js"</span>, <span className="text-primary">"Next.js"</span>, <span className="text-primary">"TypeScript"</span>, <span className="text-primary">"Node.js"</span>],
            {"\n"}  enterprise: [<span className="text-primary">"PVR Cinemas"</span>, <span className="text-primary">"CellXchange"</span>, <span className="text-primary">"Aelixar"</span>],
            {"\n"}  usersSupported: <span className="text-cyan">1_000_000</span>,
            {"\n"}{"}"};
          </pre>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
      >
        <MousePointer2 className="h-4 w-4 animate-bounce" />
        <span className="font-mono text-[10px] uppercase tracking-widest">scroll</span>
      </motion.div>
    </section>
  );
}
