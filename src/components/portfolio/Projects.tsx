import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "./About";

type Project = {
  id: string;
  index: string;
  role: string;
  title: string;
  tagline: string;
  description: string;
  highlight: string;
  tags: string[];
  category: "AI" | "Frontend" | "Full Stack";
  image: string;
  live?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    id: "pvr",
    index: "01",
    role: "Frontend Developer",
    title: "PVR Cinemas · INOX · PVR Lanka",
    tagline: "High-performance movie booking platform",
    description:
      "Developed and optimized a high-performance movie booking platform using React.js, Next.js, JavaScript, and REST APIs, supporting 1Million+ users with 35% faster page load times.",
    highlight:
      "Built the Cinema Advertisement Booking (Ad-Sales) module for 1000+ cinema screens, improved performance by 40% via lazy loading and code splitting, and resolved 150+ UI issues.",
    tags: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Ad-Sales"],
    category: "Frontend",
    image: "/projects/pvr.png",
    live: "https://www.pvrcinemas.com/",
  },
  {
    id: "cellxchange",
    index: "02",
    role: "Full Stack Developer",
    title: "CellXchange",
    tagline: "Full Stack Device Marketplace & Custom CMS",
    description:
      "Designed and developed a full-stack device buy/sell platform using Next.js, Node.js, Express.js, MongoDB, and REST APIs, supporting secure device listings and customer management.",
    highlight:
      "Built a custom CMS/Admin Dashboard for inventory, pricing, device verification, and Cloudinary uploads (slashing operations by 70%) with 40% faster page performance.",
    tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "Cloudinary", "REST APIs"],
    category: "Full Stack",
    image: "/projects/cellxchange.png",
    live: "https://cellxchange.in/",
  },
  {
    id: "aelixar",
    index: "03",
    role: "Frontend Developer",
    title: "Aelixar",
    tagline: "Travel eSIM & pSIM Activation Platform",
    description:
      "Architected a scalable frontend using Next.js 15, JavaScript, and Tailwind CSS, building 50+ reusable components and reducing development time by 33%.",
    highlight:
      "Developed a multi-step eSIM and pSIM activation workflow (improving activation success by 30%) and integrated Stripe Payment Gateway with secure webhooks (99.9% reliability).",
    tags: ["Next.js 15", "Stripe", "eSIM", "Tailwind CSS", "JavaScript"],
    category: "Full Stack",
    image: "/projects/aelixar.png",
    live: "#contact",
  },
  {
    id: "movietime",
    index: "04",
    role: "Frontend Developer",
    title: "MovieTime Cinemas",
    tagline: "Online Movie Ticket Booking Platform",
    description:
      "Developed and enhanced a responsive online movie ticket booking platform using React.js, delivering 20+ production-ready features and enhancing user experience.",
    highlight:
      "Integrated Razorpay Payment Gateway with real-time confirmation (99.9% transaction reliability) and improved page responsiveness by 20% through API optimization.",
    tags: ["React.js", "Razorpay", "Tailwind CSS", "API Optimization"],
    category: "Frontend",
    image: "/projects/movietime.png",
    live: "#contact",
  },
  {
    id: "automate-ai",
    index: "05",
    role: "AI Automation Developer",
    title: "Automate-AI",
    tagline: "YouTube Shorts Automation Pipeline",
    description:
      "Built automated AI workflows using Ollama and local LLMs, reducing content generation time by 70% and streamlining video publishing.",
    highlight:
      "Integrated video editing, caption generation, and scheduling for 100+ YouTube Shorts, cutting manual editing effort by 80% and increasing publishing speed 3x.",
    tags: ["Ollama", "Local LLMs", "React", "Node.js", "Express", "MongoDB"],
    category: "AI",
    image: "/projects/automate-ai.png",
    repo: "https://github.com/",
  },
  {
    id: "evolve-loyalty",
    index: "06",
    role: "Frontend Developer",
    title: "Evolve Loyalty Platform",
    tagline: "Enterprise CMS & Loyalty Management Platform",
    description:
      "Built 10+ enterprise-grade CMS and loyalty management platforms from scratch using React.js, Next.js, and REST APIs, supporting 50,000+ active users.",
    highlight:
      "Developed 50+ reusable UI components (reducing dev time by 45%) and integrated 100+ REST APIs, boosting frontend responsiveness by 40%.",
    tags: ["React.js", "Next.js", "REST APIs", "Tailwind CSS", "CMS"],
    category: "Frontend",
    image: "/projects/evolve-loyalty.png",
    live: "#contact",
  },
];

const filters = ["All", "AI", "Frontend", "Full Stack"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeader tag="03 / work" title={<>Selected <span className="text-gradient">builds</span> that shipped.</>} />
          
          <div className="flex flex-wrap gap-1 rounded-full glass p-1 self-start sm:self-auto">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  filter === f ? "bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 sm:mt-12 grid gap-6 lg:grid-cols-2">
          {list.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-40px" }} 
              transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl glass-strong border border-white/10 p-5 sm:p-6 transition hover:border-primary/40 flex flex-col justify-between"
            >
              {/* Header */}
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs text-cyan">
                      {p.index} · <span className="text-muted-foreground">{p.role}</span>
                    </p>
                    <h3 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-foreground">{p.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{p.tagline}</p>
                  </div>
                  {p.live && p.live.startsWith("http") ? (
                    <a 
                      href={p.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label={`Open ${p.title} live website`}
                      className="rounded-full border border-white/10 p-2 text-muted-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground shrink-0"
                    >
                      <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  ) : null}
                </div>

                {/* Preview Image */}
                <div className="group/img relative mt-5 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-surface to-background">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-40 transition-opacity group-hover/img:opacity-20" />
                  <div className="absolute left-3 top-3 flex gap-1.5 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur border border-white/10">
                    <span className="h-2 w-2 rounded-full bg-red-500/80" />
                    <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                    <span className="h-2 w-2 rounded-full bg-green-500/80" />
                  </div>
                  <div className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 font-mono text-[10px] text-cyan backdrop-blur border border-white/10">
                    {p.category}
                  </div>
                </div>

                {/* Description & Highlight */}
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/85">
                  <span className="text-cyan">▸</span> {p.highlight}
                </p>
              </div>

              {/* Tags & Action links */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[10px] sm:text-[11px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  {p.live && (
                    <a 
                      href={p.live} 
                      target={p.live.startsWith("http") ? "_blank" : "_self"} 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg border border-white/10 px-2.5 py-1.5 text-xs text-foreground/85 hover:border-primary/40 hover:text-foreground transition"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> {p.live.startsWith("http") ? "Live Site" : "Overview"}
                    </a>
                  )}
                  {p.repo && (
                    <a 
                      href={p.repo} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg border border-white/10 px-2.5 py-1.5 text-xs text-foreground/85 hover:border-primary/40 hover:text-foreground transition"
                    >
                      <Github className="h-3.5 w-3.5" /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
