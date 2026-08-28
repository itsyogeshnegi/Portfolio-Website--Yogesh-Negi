import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Disable on touch devices and screens under 768px
    const isTouch = window.matchMedia("(pointer: coarse), (hover: none)").matches || window.innerWidth < 768;
    if (isTouch) {
      setEnabled(false);
      return;
    }

    setEnabled(true);
    let rx = -100, ry = -100, tx = -100, ty = -100;
    let hasMoved = false;

    const move = (e: MouseEvent) => {
      if (!hasMoved) {
        hasMoved = true;
        setVisible(true);
        document.documentElement.style.cursor = "none";
      }
      tx = e.clientX; 
      ty = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${tx - 4}px, ${ty - 4}px, 0)`;
      }
      const target = e.target as HTMLElement;
      if (target && target.closest("a,button,[data-cursor='hover'],input,textarea,label,select")) {
        setHover(true);
      } else {
        setHover(false);
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => {
      if (hasMoved) setVisible(true);
    };

    const raf = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx - (hover ? 28 : 18)}px, ${ry - (hover ? 28 : 18)}px, 0)`;
      }
      requestAnimationFrame(raf);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    const id = requestAnimationFrame(raf);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(id);
      document.documentElement.style.cursor = "";
    };
  }, []);

  if (!enabled || !visible) return null;

  return (
    <div className="hidden md:block">
      <div 
        ref={dot} 
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-cyan transition-opacity duration-150" 
        style={{ boxShadow: "0 0 12px oklch(0.85 0.18 200)" }} 
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border transition-[width,height,background-color,border-color,opacity] duration-200"
        style={{
          width: hover ? 56 : 36,
          height: hover ? 56 : 36,
          borderColor: hover ? "oklch(0.68 0.24 305 / 0.9)" : "oklch(0.72 0.22 255 / 0.7)",
          background: hover ? "oklch(0.68 0.24 305 / 0.12)" : "transparent",
          boxShadow: hover ? "0 0 30px oklch(0.68 0.24 305 / 0.4)" : "0 0 20px oklch(0.72 0.22 255 / 0.25)",
        }}
      />
    </div>
  );
}
