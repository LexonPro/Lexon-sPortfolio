import PageWrapper from "@/components/PageWrapper";
import CodingStats from "@/components/CodingStats";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Database, BarChart3, Code2, Cpu, Globe, Terminal, GitBranch } from "lucide-react";

const skills = [
  { icon: Code2, label: "C++ / Python" },
  { icon: Brain, label: "Machine Learning" },
  { icon: Database, label: "DSA" },
  { icon: Globe, label: "Web Dev" },
];

const Index = () => {
  return (
    <PageWrapper>
      <section className="container mx-auto px-6 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="font-display text-sm text-primary mb-4 tracking-widest uppercase">
            B.Tech Data Science Student | Software Developer
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-gradient">Shikhar Maurya</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            I am a B.Tech Data Science student passionate about software development,
            machine learning, and solving Data Structures and Algorithms problems.
            I enjoy building intelligent applications and exploring data-driven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity glow-primary"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>

        {/* Coding Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-14 flex flex-wrap gap-4 justify-center"
        >
          {[
            { label: "GitHub", href: "https://github.com/LexonPro", icon: GitBranch },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/LexonPro", icon: Globe },
            { label: "LeetCode", href: "https://leetcode.com/LexonPro", icon: Terminal },
          ].map((profile) => (
            <motion.a
              key={profile.label}
              href={profile.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              className="glass-card flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-display text-muted-foreground hover:text-primary transition-all duration-300 group"
            >
              <profile.icon size={18} className="group-hover:text-primary transition-colors" />
              {profile.label}
            </motion.a>
          ))}
        </motion.div>

        {/* Floating skill icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.label}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
              whileHover={{ scale: 1.08 }}
              className="glass-card flex flex-col items-center gap-2 p-4 rounded-lg group cursor-default"
            >
              <skill.icon size={24} className="text-primary group-hover:drop-shadow-[0_0_8px_hsl(173,80%,50%)] transition-all" />
              <span className="text-xs font-display text-muted-foreground">{skill.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Terminal decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 w-full max-w-lg glass-card rounded-lg p-4 text-left"
        >
          <div className="flex gap-1.5 mb-3">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-accent/40" />
            <div className="w-3 h-3 rounded-full bg-primary/40" />
          </div>
          <code className="text-xs font-display text-muted-foreground">
            <span className="text-primary">$</span> python train_model.py --epochs 100
            <br />
            <span className="text-primary">→</span> Loading dataset... <span className="text-primary">✓</span>
            <br />
            <span className="text-primary">→</span> Training accuracy: <span className="text-primary">98.7%</span>
            <br />
            <span className="text-primary">→</span> Model saved successfully <span className="animate-pulse-glow text-primary">█</span>
          </code>
        </motion.div>
      </section>

      <CodingStats />
    </PageWrapper>
  );
};

export default Index;
