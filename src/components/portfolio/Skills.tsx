import { motion } from "framer-motion";
import { SectionHeader } from "./About";

const orbits = [
  { r: 120, dur: 22, items: ["React", "Next.js", "TS", "JS"] },
  { r: 200, dur: 34, items: ["Node.js", "Express", "FastAPI", "MongoDB", "Tailwind"] },
  { r: 280, dur: 48, items: ["Stripe", "Razorpay", "Ollama", "Firebase", "Supabase", "Git"] },
];

const groups = [
  { title: "Frameworks & Libraries", items: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Node.js", "FastAPI", "Express.js"] },
  { title: "Programming Languages", items: ["JavaScript", "TypeScript", "HTML", "CSS"] },
  { title: "Databases", items: ["MongoDB", "Firebase", "Supabase"] },
  { title: "Tools & Platforms", items: ["Git", "GitHub", "Vercel", "Jenkins", "BitBucket", "npm", "Webpack", "Postman", "Jira"] },
  { title: "AI & Automation", items: ["Local LLMs", "Ollama", "Generative AI Automations"] },
  { title: "Payments & APIs", items: ["Stripe Integration", "Razorpay Integration", "RESTful APIs", "JWT Auth"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader tag="02 / stack" title={<>An interactive galaxy of the tools I ship with <span className="text-gradient">every day</span>.</>} />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          {/* Orbit visual */}
          <div className="relative order-2 lg:order-1 lg:col-span-2">
            <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
              {/* rings */}
              {orbits.map((o) => (
                <div
                  key={o.r}
                  className="absolute rounded-full border border-white/8"
                  style={{ width: o.r * 2, height: o.r * 2 }}
                />
              ))}
              {/* core */}
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full glass-strong">
                <div className="absolute inset-0 animate-pulse-glow rounded-full" style={{ boxShadow: "0 0 60px oklch(0.72 0.22 255 / 0.55)" }} />
                <span className="font-mono text-sm text-cyan">yn.dev</span>
              </div>
              {/* orbiting items */}
              {orbits.map((o, oi) => (
                <div
                  key={oi}
                  className="absolute"
                  style={{ width: o.r * 2, height: o.r * 2, animation: `orbit ${o.dur}s linear infinite`, animationDirection: oi % 2 ? "reverse" : "normal" }}
                >
                  {o.items.map((it, i) => {
                    const angle = (360 / o.items.length) * i;
                    return (
                      <div
                        key={it}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{ transform: `rotate(${angle}deg) translate(${o.r}px) rotate(-${angle}deg)` }}
                      >
                        <div
                          className="rounded-md glass px-2 py-1 font-mono text-[11px] text-foreground/90"
                          style={{ animation: `orbit ${o.dur}s linear infinite reverse`, animationDirection: oi % 2 ? "normal" : "reverse" }}
                        >
                          {it}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="order-1 grid gap-4 sm:grid-cols-2 lg:order-2 lg:col-span-3">
            {groups.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl glass p-5 transition hover:border-primary/40"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition group-hover:opacity-100" />
                <p className="font-mono text-[11px] uppercase tracking-widest text-cyan">{g.title}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <span key={it} className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-xs text-foreground/85">
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
