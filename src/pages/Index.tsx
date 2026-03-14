import PageWrapper from "@/components/PageWrapper";
import TypingAnimation from "@/components/TypingAnimation";
import DataGridBackground from "@/components/DataGridBackground";
import StatsSection from "@/components/StatsSection";
import SkillsSection from "@/components/SkillsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import TestimonialsSection from "@/components/TestimonialsSection";
import HomeCertificates from "@/components/HomeCertificates";
import HomeContact from "@/components/HomeContact";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, GitBranch, Globe, Terminal } from "lucide-react";

const Index = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative container mx-auto px-6 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center overflow-hidden">
        <DataGridBackground />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative z-10"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-display text-sm text-primary mb-4 tracking-widest uppercase"
          >
            <TypingAnimation />
          </motion.p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold mb-4 leading-tight">
            Hi, I'm{" "}
            <motion.span
              className="text-gradient inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                backgroundSize: "200% 200%",
                backgroundImage: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Shikhar Maurya
            </motion.span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            I build intelligent solutions using data, code, and creativity.
          </p>
          <p className="text-sm text-muted-foreground/70 max-w-xl mx-auto mb-10 leading-relaxed">
            B.Tech Data Science student passionate about machine learning, 
            software development, and solving complex problems with elegant code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm glow-primary transition-all hover:shadow-[0_0_30px_hsl(173,80%,50%,0.4)]"
              >
                View Projects <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-display font-semibold text-sm hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Coding Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="relative z-10 mt-14 flex flex-wrap gap-4 justify-center"
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
              whileHover={{ scale: 1.08, y: -3 }}
              className="glass-card flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-display text-muted-foreground hover:text-primary transition-all duration-300 group"
            >
              <profile.icon size={18} className="group-hover:text-primary group-hover:drop-shadow-[0_0_6px_hsl(173,80%,50%)] transition-all" />
              {profile.label}
            </motion.a>
          ))}
        </motion.div>

        {/* Terminal decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="relative z-10 mt-16 w-full max-w-lg glass-card rounded-lg p-4 text-left"
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
            <span className="text-primary">→</span> Model saved successfully <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }} className="text-primary">█</motion.span>
          </code>
        </motion.div>
      </section>

      {/* All sections */}
      <StatsSection />
      <SkillsSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <HomeCertificates />
      <HomeContact />
    </PageWrapper>
  );
};

export default Index;
