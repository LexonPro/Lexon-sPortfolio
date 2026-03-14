import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Target, Rocket, Layers, GitBranch } from "lucide-react";

const stats = [
  { icon: Target, value: 500, suffix: "+", label: "Problems Solved" },
  { icon: Rocket, value: 10, suffix: "+", label: "Projects Built" },
  { icon: Layers, value: 15, suffix: "+", label: "Technologies Learned" },
  { icon: GitBranch, value: 200, suffix: "+", label: "GitHub Contributions" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (displayRef.current) displayRef.current.textContent = `${v}${suffix}`;
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return (
    <span ref={ref}>
      <span ref={displayRef}>0{suffix}</span>
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3">
          By the <span className="text-gradient">Numbers</span>
        </h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          A snapshot of my coding journey and continuous learning.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.05 }}
            className="glass-card rounded-xl p-6 text-center group cursor-default"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <stat.icon size={24} className="text-primary group-hover:drop-shadow-[0_0_8px_hsl(173,80%,50%)] transition-all" />
            </div>
            <div className="text-3xl font-display font-bold text-foreground mb-1">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-xs text-muted-foreground font-display">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
