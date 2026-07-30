export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl glass-strong p-5 font-mono text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            <span className="ml-3 text-muted-foreground/70">~/yogesh — zsh</span>
          </div>
          <div className="mt-3 space-y-1">
            <p><span className="text-cyan">$</span> echo "Thanks for scrolling."</p>
            <p className="text-foreground/80">Thanks for scrolling.</p>
            <p><span className="text-cyan">$</span> uptime</p>
            <p className="text-foreground/80">© {new Date().getFullYear()} Yogesh Negi · shipping since 2022 · designed & built in Delhi, IN <span className="animate-blink text-cyan">▊</span></p>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 border-t border-white/5 pt-3 text-[11px]">
            <a href="#top" className="hover:text-foreground">home</a>
            <a href="#projects" className="hover:text-foreground">work</a>
            <a href="#contact" className="hover:text-foreground">contact</a>
            <span className="ml-auto">Press <kbd className="rounded border border-white/10 px-1">⌘K</kbd> for command palette</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
