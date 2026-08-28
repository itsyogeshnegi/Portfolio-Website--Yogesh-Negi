export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl glass-strong border border-white/10 p-4 sm:p-5 font-mono text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            <span className="ml-2.5 text-[11px] text-muted-foreground/70">~/yogesh — zsh</span>
          </div>
          <div className="mt-3 space-y-1 text-xs">
            <p><span className="text-cyan">$</span> echo "Thanks for scrolling."</p>
            <p className="text-foreground/80">Thanks for scrolling.</p>
            <p><span className="text-cyan">$</span> uptime</p>
            <p className="text-foreground/80 leading-relaxed">
              © {new Date().getFullYear()} Yogesh Negi · shipping since 2022 · designed & built in Delhi, IN <span className="animate-blink text-cyan">▊</span>
            </p>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/5 pt-3 text-[11px]">
            <div className="flex items-center gap-4">
              <a href="#top" className="hover:text-foreground transition">home</a>
              <a href="#about" className="hover:text-foreground transition">about</a>
              <a href="#projects" className="hover:text-foreground transition">work</a>
              <a href="#contact" className="hover:text-foreground transition">contact</a>
            </div>
            <span className="text-muted-foreground/60 text-[10px] sm:text-[11px]">
              Press <kbd className="rounded border border-white/10 px-1 py-0.5 font-mono text-[10px]">⌘K</kbd> / <kbd className="rounded border border-white/10 px-1 py-0.5 font-mono text-[10px]">Ctrl+K</kbd> for command palette
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
