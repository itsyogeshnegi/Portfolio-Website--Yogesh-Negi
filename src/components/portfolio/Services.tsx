import { motion } from "framer-motion";
import { Code2, Server, CreditCard, Plug, Gauge, Cpu } from "lucide-react";
import { SectionHeader } from "./About";

const services = [
  { icon: Code2, title: "Frontend Architecture", desc: "React.js & Next.js 15 applications with reusable component design systems, Tailwind CSS, and high responsiveness." },
  { icon: CreditCard, title: "Payment Gateway Integration", desc: "Secure transaction processing via Stripe and Razorpay with webhook verification and 99.9% reliability." },
  { icon: Server, title: "MERN Stack Development", desc: "Node.js, Express, and MongoDB APIs — built for enterprise scalability with JWT authentication." },
  { icon: Plug, title: "CMS & Loyalty Platforms", desc: "Custom multi-brand CMS platforms and ad-booking modules supporting 50k+ active users." },
  { icon: Gauge, title: "Performance Optimization", desc: "40% page load speed reduction via lazy loading, code splitting, asset optimization, and API tuning." },
  { icon: Cpu, title: "AI & Local LLM Automation", desc: "Automated AI content pipelines using Ollama and local LLMs to slash manual editing effort by up to 80%." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader tag="05 / services" title={<>How I can <span className="text-gradient">help you ship</span>.</>} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition hover:border-primary/40"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-accent/20" />
              <div className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                <s.icon className="h-5 w-5 text-cyan" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
