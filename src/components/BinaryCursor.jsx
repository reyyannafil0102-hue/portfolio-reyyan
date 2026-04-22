import { useEffect, useRef } from "react";

export default function BinaryCursor() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Spawn 3–5 particles per move
      const count = Math.floor(Math.random() * 3) + 3;
      for (let i = 0; i < count; i++) {
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 12,
          y: e.clientY + (Math.random() - 0.5) * 12,
          char: Math.random() > 0.5 ? "1" : "0",
          vx: (Math.random() - 0.5) * 0.8,
          vy: Math.random() * 1.5 + 0.5,
          alpha: 1,
          size: Math.random() * 4 + 6, // 6–10px
          decay: Math.random() * 0.03 + 0.025,
          color: Math.random() > 0.5 ? "#f97316" : "#ea580c",
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((p) => p.alpha > 0);

      for (const p of particles.current) {
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.font = `bold ${p.size}px 'Courier New', monospace`;
        ctx.fillText(p.char, p.x, p.y);

        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.vy += 0.04; // gravity
      }

      ctx.globalAlpha = 1;
      rafId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
