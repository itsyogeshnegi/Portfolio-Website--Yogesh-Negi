import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, Download, Menu, Send, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Nav({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop or ESC press
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      {/* Background backdrop to close menu when clicking anywhere on screen */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <motion.header
        ref={navRef}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2.5 bg-background/70 backdrop-blur-xl border-b border-white/5" : "py-4 sm:py-5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
          <a 
            href="#top" 
            onClick={() => setOpen(false)}
            className={`group flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs sm:text-sm transition ${
              scrolled ? "glass-strong" : "glass"
            }`}
            aria-label="Yogesh Negi Home"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="text-foreground/90 font-medium">yogesh<span className="text-cyan">.</span>negi</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className={`hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex ${scrolled ? "glass-strong" : "glass"}`}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 text-xs lg:text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setOpen(false);
                onOpenPalette();
              }}
              className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/10 bg-white/[0.03] px-2.5 sm:px-3 py-1.5 font-mono text-xs text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
              aria-label="Open command palette"
            >
              <Command className="h-3.5 w-3.5 text-cyan" />
              <span className="hidden sm:inline">K</span>
            </button>
            <a
              href="#contact"
              className="hidden rounded-full bg-gradient-to-br from-primary via-primary to-accent px-4 py-1.5 text-xs font-medium text-primary-foreground shadow-[0_0_25px_-4px_oklch(0.72_0.22_255/0.6)] transition hover:shadow-[0_0_35px_-4px_oklch(0.68_0.24_305/0.7)] sm:inline-flex"
            >
              Let's talk →
            </a>
            <button
              className="rounded-full border border-white/10 bg-white/[0.03] p-2 text-foreground transition hover:bg-white/10 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mx-4 mt-2 overflow-hidden rounded-2xl glass-strong border border-white/10 p-4 md:hidden shadow-2xl backdrop-blur-2xl"
            >
              <div className="grid grid-cols-2 gap-1.5 border-b border-white/5 pb-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2.5 text-xs font-medium text-muted-foreground transition hover:bg-white/5 hover:text-foreground active:bg-white/10"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
              <div className="mt-3 flex flex-col gap-2 pt-1">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent py-2.5 text-xs font-semibold text-primary-foreground"
                >
                  <Send className="h-3.5 w-3.5" /> Let's talk
                </a>
                <a
                  href="/resume.pdf"
                  download="Yogesh_Negi_Resume.pdf"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-2 text-xs font-medium text-muted-foreground hover:text-foreground"
                >
                  <Download className="h-3.5 w-3.5" /> Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
