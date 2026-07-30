import { useEffect, useRef } from "react";

export function BackgroundFX() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, oklch(0.72 0.22 255 / 0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 90% 110%, oklch(0.68 0.24 305 / 0.16), transparent 60%), radial-gradient(ellipse 60% 50% at 10% 100%, oklch(0.85 0.18 200 / 0.10), transparent 60%)",
        }}
      />
      {/* grid */}
      <div className="absolute inset-0 grid-bg opacity-70" />
      {/* mouse glow */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), oklch(0.72 0.22 255 / 0.10), transparent 60%)",
        }}
      />
      {/* floating orbs */}
      <div className="absolute left-[-10%] top-1/3 h-96 w-96 rounded-full blur-3xl opacity-30 animate-float-slow"
           style={{ background: "oklch(0.72 0.22 255 / 0.35)" }} />
      <div className="absolute right-[-8%] top-2/3 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-25 animate-float-slow"
           style={{ background: "oklch(0.68 0.24 305 / 0.35)", animationDelay: "-4s" }} />
      {/* scanlines */}
      <div className="absolute inset-0 scanline opacity-40 mix-blend-overlay" />
      {/* vignette */}
      <div className="absolute inset-0"
           style={{ background: "radial-gradient(ellipse at center, transparent 40%, black 100%)", opacity: 0.6 }} />
    </div>
  );
}
