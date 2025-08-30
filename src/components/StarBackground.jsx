import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    generateParticles();

    const handleResize = () => {
      generateParticles();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generate floating bubble-like particles
  const generateParticles = () => {
    const numberOfParticles = Math.floor(
      (window.innerWidth * window.innerHeight) / 12000
    );

    const newParticles = [];
    for (let i = 0; i < numberOfParticles; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 6 + 3, // 3–9px
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.4 + 0.2, // 20–60%
        animationDuration: Math.random() * 12 + 8, // 8–20s
        delay: Math.random() * 10,
      });
    }
    setParticles(newParticles);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background with transparency */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#0a0f0f",
          backgroundImage: "url('/portfolio/imgs/pattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.02, // only affects background
        }}
      />

      {/* Floating particles above background */}
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            width: p.size + "px",
            height: p.size + "px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.6)", // brighter bubbles
            position: "absolute",
            left: p.x + "%",
            top: p.y + "%",
            opacity: p.opacity,
            animation: `floatAround ${p.animationDuration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <style>{`
        @keyframes floatAround {
          0%   { transform: translate(0, 0) scale(1); }
          25%  { transform: translate(-20px, -40px) scale(1.1); }
          50%  { transform: translate(20px, -80px) scale(0.95); }
          75%  { transform: translate(-15px, -120px) scale(1.05); }
          100% { transform: translate(0, -160px) scale(1); opacity: 0; }
        }
      `}</style>
    </div>
  );
};
