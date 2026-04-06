import { motion } from "framer-motion";
import { Brain, TrendingUp, AlertTriangle, Lightbulb, UserCheck } from "lucide-react";
import type { AIAnalysis } from "@/types/analysis";

interface InsightsPanelProps {
  analysis: AIAnalysis;
}

const Section = ({ title, icon: Icon, children, delay = 0 }: { title: string; icon: any; children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    className="glass-card rounded-2xl p-5"
  >
    <div className="flex items-center gap-2 mb-4">
      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon size={14} className="text-primary" />
      </div>
      <h3 className="font-semibold text-sm">{title}</h3>
    </div>
    {children}
  </motion.div>
);

const InsightsPanel = ({ analysis }: InsightsPanelProps) => {
  return (
    <div className="space-y-4">
      {/* Skill Summary */}
      <Section title="AI Skill Summary" icon={Brain} delay={0.1}>
        <p className="text-sm text-muted-foreground leading-relaxed">{analysis.skillSummary}</p>
      </Section>

      {/* Strengths */}
      <Section title="Strengths" icon={TrendingUp} delay={0.2}>
        <div className="space-y-2">
          {analysis.strengths.map((s, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              <span className="text-muted-foreground">{s}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Weaknesses */}
      <Section title="Areas to Improve" icon={AlertTriangle} delay={0.3}>
        <div className="space-y-2">
          {analysis.weaknesses.map((w, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              <span className="text-muted-foreground">{w}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Missing Skills */}
      <Section title="Missing Skills" icon={Lightbulb} delay={0.4}>
        <div className="flex flex-wrap gap-2">
          {analysis.missingSkills.map((skill) => (
            <span key={skill} className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20">
              {skill}
            </span>
          ))}
        </div>
      </Section>

      {/* Recruiter View */}
      <Section title="Recruiter Perspective" icon={UserCheck} delay={0.5}>
        <p className="text-sm text-muted-foreground leading-relaxed italic">"{analysis.recruiterInsights}"</p>
      </Section>

      {/* Overall Advice */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="rounded-2xl p-5 border border-primary/20 bg-primary/5"
      >
        <p className="text-sm text-foreground leading-relaxed">{analysis.overallAdvice}</p>
      </motion.div>
    </div>
  );
};

export default InsightsPanel;
