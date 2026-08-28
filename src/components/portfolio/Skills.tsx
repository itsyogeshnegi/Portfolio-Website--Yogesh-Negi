import { motion } from "framer-motion";
import { SectionHeader } from "./About";

const orbits = [
  { r: 85, dur: 22, items: ["React", "Next.js", "TS", "JS"] },
  { r: 140, dur: 34, items: ["Node.js", "Express", "MongoDB", "Tailwind"] },
  { r: 195, dur: 48, items: ["Stripe", "Razorpay", "Ollama", "Git", "REST APIs"] },
];

const groups = [
  { title: "Frameworks & Libraries", items: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Node.js", "FastAPI", "Express.js"] },
  { title: "Programming Languages", items: ["JavaScript", "TypeScript", "HTML5", "CSS3"] },
  { title: "Databases", items: ["MongoDB", "Firebase", "Supabase"] },
  { title: "Tools & Platforms", items: ["Git", "GitHub", "Vercel", "Postman", "npm", "Webpack", "Jira"] },
  { title: "AI & Automation", items: ["Local LLMs", "Ollama", "Generative AI Workflows"] },
  { title: "Payments & Security", items: ["Stripe Integration", "Razorpay", "RESTful APIs", "JWT Auth"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader tag="02 / stack" title={<>An interactive galaxy of the tools I ship with <span className="text-gradient">every day</span>.</>} />

        <div className="mt-10 sm:mt-14 grid gap-8 lg:grid-cols-5 items-center">
          {/* Orbit visual */}
          <div className="relative order-2 lg:order-1 lg:col-span-2 flex justify-center overflow-hidden py-4">
            <div className="relative flex aspect-square w-[340px] sm:w-[420px] max-w-full items-center justify-center scale-90 sm:scale-100">
              {/* rings */}
              {orbits.map((o) => (
                <div
                  key={o.r}
                  className="absolute rounded-full border border-white/10"
                  style={{ width: o.r * 2, height: o.r * 2 }}
                />
              ))}
              {/* core */}
              <div className="relative z-10 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full glass-strong">
                <div className="absolute inset-0 animate-pulse-glow rounded-full" style={{ boxShadow: "0 0 50px oklch(0.72 0.22 255 / 0.55)" }} />
                <span className="font-mono text-xs sm:text-sm font-semibold text-cyan">yn.dev</span>
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
                          className="rounded-md glass px-2 py-0.5 font-mono text-[10px] sm:text-[11px] text-foreground/90 whitespace-nowrap"
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
          <div className="order-1 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:order-2 lg:col-span-3">
            {groups.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl glass p-4 sm:p-5 transition hover:border-primary/40"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition group-hover:opacity-100" />
                <p className="font-mono text-[11px] uppercase tracking-widest text-cyan">{g.title}</p>
                <div className="mt-2.5 sm:mt-3 flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <span key={it} className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-[11px] sm:text-xs text-foreground/85">
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
