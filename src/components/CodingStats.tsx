import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Zap, Users, Rocket, Award, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Counter = ({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration: 2, ease: "easeOut" });
      const unsub = rounded.on("change", (v) => setDisplay(v));
      return () => { controls.stop(); unsub(); };
    }
  }, [isInView, target, count, rounded]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-4xl sm:text-5xl font-display font-bold text-primary">
        {display}{suffix}
      </span>
      <p className="text-sm text-muted-foreground mt-2 font-display">{label}</p>
    </div>
  );
};

const stats = [
  { icon: Rocket, target: 15, suffix: "+", label: "Projects Built" },
  { icon: Zap, target: 500, suffix: "+", label: "Problems Solved" },
  { icon: Award, target: 8, suffix: "+", label: "Certifications" },
  { icon: Users, target: 3, suffix: "+", label: "Years Coding" },
];

const techStack = [
  { name: "Python", level: 90 },
  { name: "C++", level: 85 },
  { name: "React / TypeScript", level: 80 },
  { name: "Machine Learning", level: 75 },
  { name: "Data Structures", level: 88 },
  { name: "SQL / Databases", level: 70 },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm font-display">
        <span className="text-foreground">{name}</span>
        <span className="text-primary">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent skill-bar-glow"
        />
      </div>
    </div>
  );
};

const CodingStats = () => {
  return (
    <>
      {/* Animated Counters */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3">
            By the <span className="text-gradient">Numbers</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A snapshot of my journey so far.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass-card rounded-lg p-6 flex flex-col items-center gap-3"
            >
              <s.icon size={28} className="text-primary" />
              <Counter target={s.target} suffix={s.suffix} label={s.label} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Technologies I work with and my proficiency levels.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto glass-card rounded-lg p-8 space-y-6">
          {techStack.map((tech, i) => (
            <SkillBar key={tech.name} name={tech.name} level={tech.level} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center glass-card rounded-2xl p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 relative z-10">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto relative z-10">
            I'm always open to new opportunities, collaborations, and exciting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity glow-primary"
            >
              Explore Projects <ChevronRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
            >
              Let's Talk
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default CodingStats;
