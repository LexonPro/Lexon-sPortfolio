import { motion } from "framer-motion";

interface ScoreRingProps {
  score: number;
  size?: number;
}

const ScoreRing = ({ score, size = 140 }: ScoreRingProps) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const color = score >= 70 ? "hsl(var(--primary))" : score >= 40 ? "hsl(40, 90%, 55%)" : "hsl(var(--destructive))";

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 100 100" className="-rotate-90">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="hsl(var(--border))" strokeWidth="6" />
        <motion.circle
          cx="50" cy="50" r={radius} fill="none" stroke={color} strokeWidth="6"
          className="score-ring"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          style={{ strokeDasharray: circumference }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="text-3xl font-bold"
          style={{ color }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {score}
        </motion.span>
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Score</span>
      </div>
    </div>
  );
};

export default ScoreRing;
