import { motion } from "framer-motion";

const DataGridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
    {/* Floating nodes */}
    {Array.from({ length: 8 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1.5 h-1.5 rounded-full bg-primary/30"
        style={{
          left: `${10 + i * 12}%`,
          top: `${15 + (i % 3) * 25}%`,
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4 + i * 0.5,
          repeat: Infinity,
          delay: i * 0.3,
        }}
      />
    ))}
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
  </div>
);

export default DataGridBackground;
