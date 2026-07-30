import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [visible, setVisible] = useState(true);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const tick = (t: number) => {
      const d = Math.min(1, (t - start) / 1400);
      setPct(Math.floor(d * 100));
      if (d < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setVisible(false), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
        >
          <div className="w-full max-w-md px-6 font-mono text-xs">
            <div className="flex items-center gap-2 text-cyan">
              <span className="h-2 w-2 rounded-full bg-cyan animate-pulse" />
              <span>yn.os · boot sequence</span>
            </div>
            <div className="mt-4 space-y-1 text-muted-foreground">
              <p>[ok] initializing display driver</p>
              <p>[ok] loading design system tokens</p>
              <p>[ok] mounting react runtime</p>
              <p className="text-foreground">[..] fetching portfolio payload {pct}%</p>
            </div>
            <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan via-primary to-accent"
                animate={{ width: `${pct}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <p className="mt-3 text-right text-muted-foreground">{pct}%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
