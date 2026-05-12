import * as React from "react";

export function CustomCursor() {
  const ringRef = React.useRef<HTMLDivElement>(null);
  const dotRef = React.useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    // Disable on touch devices
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;
    setEnabled(true);

    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let dx = rx;
    let dy = ry;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      dx = e.clientX;
      dy = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      }
    };

    const tick = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest("a, button, [role=button], input, textarea, select, label");
      ringRef.current?.classList.toggle("cc-hover", interactive);
    };

    document.body.classList.add("cc-active");
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.body.classList.remove("cc-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className="cc-ring" aria-hidden />
      <div ref={dotRef} className="cc-dot" aria-hidden />
    </>
  );
}
