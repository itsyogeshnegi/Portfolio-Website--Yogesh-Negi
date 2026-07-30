import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";

const commands = [
  { label: "Go to About", href: "#about" },
  { label: "Go to Skills", href: "#skills" },
  { label: "Go to Projects", href: "#projects" },
  { label: "Go to Experience", href: "#experience" },
  { label: "Go to Services", href: "#services" },
  { label: "Go to Contact", href: "#contact" },
  { label: "Download Resume", href: "/resume.pdf" },
  { label: "Email Yogesh", href: "mailto:yyogesh.singh.negi@gmail.com" },
  { label: "Open LinkedIn", href: "https://www.linkedin.com/in/yogesh-negi-7b8568302" },
  { label: "Open GitHub", href: "https://github.com/" },
];

export function CommandPalette({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [q, setQ] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(q.toLowerCase()));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-start justify-center bg-black/60 px-4 pt-24 backdrop-blur-sm"
          onClick={() => onOpenChange(false)}
        >
          <motion.div
            initial={{ y: -20, opacity: 0, scale: 0.98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-2xl glass-strong"
          >
            <div className="flex items-center gap-3 border-b border-white/5 px-4 py-3">
              <Search className="h-4 w-4 text-cyan" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Type a command or search…"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              <kbd className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">ESC</kbd>
            </div>
            <div className="max-h-72 overflow-auto p-2">
              {filtered.length === 0 && (
                <p className="p-6 text-center text-sm text-muted-foreground">No results</p>
              )}
              {filtered.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  onClick={() => onOpenChange(false)}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-foreground/85 transition hover:bg-white/5 hover:text-foreground"
                >
                  <span>{c.label}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
