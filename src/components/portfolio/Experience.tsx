import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { SectionHeader } from "./About";

const items = [
  {
    period: "Aug 2024 — Present",
    location: "Delhi, India",
    company: "WEMONDE PVT LTD",
    role: "Frontend Developer",
    type: "Full-time",
    points: [
      "Developed and maintained 10+ React.js and Next.js applications, improving overall performance by 40%.",
      "Delivered 100+ production-ready features through Agile sprints with 95% on-time completion.",
      "Optimized application performance, reducing page load time by 40% and improving overall UX.",
      "Collaborated with 5+ cross-functional teams and fixed 100+ UI and functional defects maintaining high code quality.",
    ],
    tags: ["React.js", "Next.js", "Tailwind CSS", "Performance Optimization", "Agile Sprints"],
    highlights: [
      { stat: "40%", label: "Faster Load Times" },
      { stat: "100+", label: "Features Shipped" },
      { stat: "10+", label: "Next.js Apps" },
      { stat: "95%", label: "On-Time Sprints" },
    ],
  },
  {
    period: "Sep 2022 — Jul 2024",
    location: "Delhi, India",
    company: "LOCAD PVT LTD",
    role: "Software Developer",
    type: "Full-time",
    points: [
      "Built 10+ responsive frontend interfaces and 15+ RESTful APIs using the MERN stack, enhancing scalability.",
      "Implemented secure JWT-based authentication for 3+ enterprise applications, boosting account security.",
      "Participated in 20+ code reviews & Agile sprint cycles, achieving 95% on-time feature delivery.",
      "Collaborated with 8+ engineers, designers & QA to resolve 80+ bugs and stability issues.",
    ],
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
    highlights: [
      { stat: "15+", label: "REST APIs Built" },
      { stat: "3+", label: "JWT Auth Apps" },
      { stat: "80+", label: "Bugs Fixed" },
      { stat: "95%", label: "Feature Delivery" },
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader tag="04 / experience" title={<>A timeline of <span className="text-gradient">shipping</span> at scale.</>} />

        <div className="relative mt-12 sm:mt-16">
          {/* Vertical timeline line */}
          <div className="absolute left-3.5 sm:left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-cyan/20 z-0" />

          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {items.map((it, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={it.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12"
                >
                  {/* Glowing timeline node */}
                  <span className="absolute left-3.5 sm:left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-background border border-primary/60 shadow-[0_0_16px_oklch(0.72_0.22_255/0.8)]">
                    <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-cyan animate-pulse" />
                  </span>

                  {/* Left Column (Desktop) / Main column (Mobile) */}
                  <div className={isEven ? "hidden md:block pr-8 text-right" : "pl-9 sm:pl-10 md:pl-0 md:pr-8"}>
                    {isEven ? (
                      /* Deliverables Card for Wemonde (Desktop Left) */
                      <MetricsCard title="Wemonde Deliverables" highlights={it.highlights} align="right" />
                    ) : (
                      /* Experience Card for Locad */
                      <ExperienceCard item={it} />
                    )}
                  </div>

                  {/* Right Column */}
                  <div className={isEven ? "pl-9 sm:pl-10 md:pl-8" : "hidden md:block pl-8"}>
                    {isEven ? (
                      /* Experience Card for Wemonde */
                      <ExperienceCard item={it} />
                    ) : (
                      /* Deliverables Card for Locad (Desktop Right) */
                      <MetricsCard title="Locad Deliverables" highlights={it.highlights} align="left" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricsCard({ title, highlights, align }: { title: string; highlights: { stat: string; label: string }[]; align: "left" | "right" }) {
  return (
    <div className={`group relative overflow-hidden rounded-3xl glass p-5 sm:p-7 border border-white/10 hover:border-cyan/40 transition duration-300 ${align === "right" ? "text-right" : "text-left"}`}>
      <p className="font-mono text-[11px] text-cyan uppercase tracking-widest">// impact & performance metrics</p>
      <h4 className="mt-1.5 text-base sm:text-lg font-semibold text-foreground">{title}</h4>
      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:gap-3">
        {highlights.map((h) => (
          <div key={h.label} className={`rounded-xl border border-white/5 bg-white/[0.02] p-3 sm:p-4 hover:border-primary/30 transition ${align === "right" ? "text-right" : "text-left"}`}>
            <span className="text-xl sm:text-2xl font-bold text-gradient">{h.stat}</span>
            <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground leading-snug">{h.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ item }: { item: (typeof items)[number] }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl glass-strong border border-white/10 p-5 sm:p-7 text-left transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-10px_oklch(0.72_0.22_255/0.2)]">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Header Row */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-cyan">
            <Briefcase className="h-3.5 w-3.5" />
            <span className="font-medium">{item.company}</span>
            <span className="text-white/20">·</span>
            <span className="text-muted-foreground">{item.type}</span>
          </div>
          <h3 className="mt-1.5 text-xl sm:text-2xl font-semibold tracking-tight text-foreground">{item.role}</h3>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="inline-flex items-center gap-1 rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-cyan">
            <Calendar className="h-3 w-3" />
            {item.period}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {item.location}
          </span>
        </div>
      </div>

      {/* Bullet Points */}
      <ul className="relative z-10 mt-5 space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
        {item.points.map((p) => (
          <li key={p} className="flex items-start gap-2.5">
            <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
            <span>{p}</span>
          </li>
        ))}
      </ul>

      {/* Embedded Highlights on Mobile View only */}
      <div className="relative z-10 mt-5 grid grid-cols-2 gap-2 md:hidden pt-3 border-t border-white/5">
        {item.highlights.map((h) => (
          <div key={h.label} className="rounded-lg bg-white/[0.02] border border-white/5 p-2">
            <span className="text-base font-bold text-gradient">{h.stat}</span>
            <p className="text-[10px] text-muted-foreground">{h.label}</p>
          </div>
        ))}
      </div>

      {/* Tech Tags */}
      <div className="relative z-10 mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
        {item.tags.map((t) => (
          <span key={t} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] sm:text-[11px] text-foreground/80">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
