import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Sparkles, Zap } from "lucide-react";

interface HeroSectionProps {
  onAnalyze: (username: string) => void;
  isLoading: boolean;
}

const HeroSection = ({ onAnalyze, isLoading }: HeroSectionProps) => {
  const [input, setInput] = useState("");

  const extractUsername = (val: string): string => {
    const trimmed = val.trim();
    // Handle full URLs
    const match = trimmed.match(/github\.com\/([a-zA-Z0-9\-_]+)/);
    if (match) return match[1];
    // Handle plain username
    return trimmed.replace(/^@/, "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const username = extractUsername(input);
    if (username) onAnalyze(username);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-xs text-muted-foreground mb-8">
            <Sparkles size={12} className="text-primary" />
            AI-Powered GitHub Analysis
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 leading-[1.1]">
            <span className="text-gradient-green">LexonPro</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-light mb-3">
            GitHub Profile Analyzer
          </p>
          <p className="text-sm text-muted-foreground/70 max-w-lg mx-auto mb-10">
            Paste any GitHub profile URL and get AI-powered insights — portfolio score, 
            skill analysis, project ideas, and ATS-ready resume bullets.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <div className="flex-1 relative">
              <Github size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="github.com/username or username"
                className="w-full h-12 pl-11 pr-4 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                disabled={isLoading}
              />
            </div>
            <motion.button
              type="submit"
              disabled={isLoading || !input.trim()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="h-12 px-6 rounded-xl bg-primary text-primary-foreground font-semibold text-sm inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-[0_0_30px_hsl(142,72%,50%,0.3)]"
            >
              {isLoading ? (
                <>
                  <Zap size={16} className="animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  Analyze <ArrowRight size={16} />
                </>
              )}
            </motion.button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-muted-foreground/50">
            {["Portfolio Score", "Skill Analysis", "Project Ideas", "Resume Builder", "Recruiter View"].map((f) => (
              <span key={f} className="flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-primary/50" />
                {f}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
