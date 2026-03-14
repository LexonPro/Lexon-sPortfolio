import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Database, Globe, BarChart3 } from "lucide-react";

const skills = [
  { icon: Code2, label: "Python", level: 90, color: "from-primary to-accent" },
  { icon: Brain, label: "Machine Learning", level: 80, color: "from-accent to-primary" },
  { icon: Database, label: "Data Structures", level: 85, color: "from-primary to-primary" },
  { icon: Globe, label: "Web Development", level: 75, color: "from-accent to-accent" },
  { icon: BarChart3, label: "Data Analysis", level: 78, color: "from-primary to-accent" },
];

const SkillsSection = () => {
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
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          Technologies and tools I work with daily.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="glass-card rounded-xl p-5 group cursor-default"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <skill.icon size={20} className="text-primary group-hover:drop-shadow-[0_0_8px_hsl(173,80%,50%)] transition-all" />
              </div>
              <div>
                <h3 className="text-sm font-display font-semibold text-foreground">{skill.label}</h3>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${skill.color} skill-bar-glow`}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 1.2, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
