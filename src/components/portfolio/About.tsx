import { motion } from "framer-motion";
import { Users, Briefcase, Rocket, Award } from "lucide-react";

const stats = [
  { icon: Users, label: "Users supported on PVR/INOX", value: "1M+" },
  { icon: Briefcase, label: "Years of experience", value: "3+" },
  { icon: Rocket, label: "Production features shipped", value: "100+" },
  { icon: Award, label: "Performance boost achieved", value: "40%" },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader tag="01 / story" title={<>Software Developer building <span className="text-gradient">high-performance</span> enterprise applications.</>} />
        
        <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-4 sm:space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              I am a <span className="text-foreground font-medium">Software Developer with 3+ years of experience</span> architecting and optimizing high-performance web applications using <span className="text-foreground font-medium">React.js, Next.js, JavaScript, TypeScript, Node.js, and Express</span>.
            </p>
            <p>
              I have delivered production enterprise platforms for <span className="text-foreground font-medium">PVR Cinemas, INOX Movies, Aelixar</span>, and multi-tenant loyalty CMS platforms. Passionate about solving complex frontend challenges, reducing load times by <span className="text-foreground font-medium">up to 40%</span>, and implementing secure payment integrations with <span className="text-foreground font-medium">Stripe & Razorpay</span>.
            </p>
            <p>
              At <span className="text-foreground font-medium">Wemonde Pvt Ltd</span>, I develop and maintain 10+ React and Next.js applications. Previously at <span className="text-foreground font-medium">Locad Pvt Ltd</span>, I built 10+ responsive frontend interfaces and 15+ RESTful APIs using the MERN stack while driving 95% on-time sprint deliveries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="rounded-2xl glass-strong border border-white/10 p-5 sm:p-6">
              <p className="font-mono text-xs text-cyan">// current focus</p>
              <h3 className="mt-2.5 text-xl sm:text-2xl font-semibold leading-snug">
                High-performance React & Next.js apps, payment systems & AI automation.
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Movie ticket booking platforms, Ad-Sales modules, multi-step eSIM workflows, and local LLM pipelines.
              </p>
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                {["Next.js 15", "React.js", "Stripe", "Razorpay", "FastAPI", "Ollama"].map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] sm:text-[11px] text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass border border-white/10 p-4 sm:p-5"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-accent/20" />
              <s.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan" />
              <div className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient">{s.value}</div>
              <div className="mt-1 text-[11px] sm:text-xs text-muted-foreground leading-snug">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ tag, title, sub }: { tag: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="max-w-3xl">
      <motion.p
        initial={{ opacity: 0, x: -10 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.2em] text-cyan"
      >
        {tag}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        className="mt-2.5 sm:mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.12] tracking-tight"
      >
        {title}
      </motion.h2>
      {sub && <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{sub}</p>}
    </div>
  );
}
