import { useEffect, useState, useRef } from "react";

export const MouseTrail = () => {
  const [bubbles, setBubbles] = useState([]);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();

      // Throttle: spawn every 40ms
      if (now - lastSpawnRef.current > 40) {
        spawnBubbleCluster(e.clientX, e.clientY);
        lastSpawnRef.current = now;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Spawn a subtle cluster of tiny bubbles
  const spawnBubbleCluster = (x, y) => {
    const cluster = [];
    const count = 3 + Math.floor(Math.random() * 3); // 3–5 bubbles per cluster

    for (let i = 0; i < count; i++) {
      const id = Date.now() + Math.random();
      cluster.push({
        id,
        x: x + (Math.random() - 0.5) * 25, // random spread left/right
        y: y + (Math.random() - 0.5) * 20, // small vertical jitter
        size: Math.random() * 2 + 1,       // very tiny bubbles 1–3px
        driftX: (Math.random() - 0.5) * 30, // sideways drift
        driftY: -30 - Math.random() * 30,   // float upward
        duration: 1.5 + Math.random() * 1.5, // 1.5–3s life
        delay: Math.random() * 0.2,
      });
    }

    setBubbles((prev) => [...prev, ...cluster]);

    // Cleanup after max duration
    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => !cluster.some((c) => c.id === b.id)));
    }, 4000);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {bubbles.map((b) => (
        <div
          key={b.id}
          style={{
            position: "absolute",
            left: b.x + "px",
            top: b.y + "px",
            width: b.size + "px",
            height: b.size + "px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.4)",
            animation: `bubbleFloat ${b.duration}s ease-out forwards`,
            animationDelay: `${b.delay}s`,
            "--driftX": `${b.driftX}px`,
            "--driftY": `${b.driftY}px`,
          }}
        />
      ))}

      <style>{`
        @keyframes bubbleFloat {
          0%   { transform: translate(0, 0) scale(0.6); opacity: 0.6; }
          30%  { transform: translate(calc(var(--driftX) * 0.3), calc(var(--driftY) * 0.3)) scale(0.9); opacity: 0.5; }
          60%  { transform: translate(calc(var(--driftX) * 0.6), calc(var(--driftY) * 0.6)) scale(1.1); opacity: 0.3; }
          100% { transform: translate(var(--driftX), var(--driftY)) scale(1.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
};
