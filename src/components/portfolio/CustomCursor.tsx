import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    document.documentElement.style.cursor = "none";
    let rx = 0, ry = 0, tx = 0, ty = 0;
    const move = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${tx - 4}px, ${ty - 4}px, 0)`;
      }
      const target = e.target as HTMLElement;
      if (target && target.closest("a,button,[data-cursor='hover'],input,textarea,label")) {
        setHover(true);
      } else setHover(false);
    };
    const raf = () => {
      rx += (tx - rx) * 0.16;
      ry += (ty - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      requestAnimationFrame(raf);
    };
    window.addEventListener("mousemove", move);
    const id = requestAnimationFrame(raf);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(id);
      document.documentElement.style.cursor = "";
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-cyan" style={{ boxShadow: "0 0 12px oklch(0.85 0.18 200)" }} />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border transition-[width,height,background-color,border-color] duration-200"
        style={{
          width: hover ? 56 : 36,
          height: hover ? 56 : 36,
          borderColor: hover ? "oklch(0.68 0.24 305 / 0.9)" : "oklch(0.72 0.22 255 / 0.7)",
          background: hover ? "oklch(0.68 0.24 305 / 0.12)" : "transparent",
          boxShadow: hover ? "0 0 30px oklch(0.68 0.24 305 / 0.4)" : "0 0 20px oklch(0.72 0.22 255 / 0.25)",
        }}
      />
    </>
  );
}
