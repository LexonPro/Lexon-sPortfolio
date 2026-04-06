import { motion } from "framer-motion";
import { Rocket, Wrench, FileText } from "lucide-react";
import type { AIAnalysis } from "@/types/analysis";

interface SuggestionsPanelProps {
  analysis: AIAnalysis;
}

const SuggestionsPanel = ({ analysis }: SuggestionsPanelProps) => {
  return (
    <div className="space-y-6">
      {/* Project Ideas */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Rocket size={16} className="text-primary" />
          <h3 className="font-semibold">Project Ideas</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {analysis.projectIdeas.map((idea, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="glass-card rounded-xl p-4 space-y-2"
            >
              <h4 className="font-semibold text-sm">{idea.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{idea.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {idea.technologies.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-secondary text-[10px] text-muted-foreground">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Repo Improvements */}
      {analysis.repoImprovements.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Wrench size={16} className="text-accent" />
            <h3 className="font-semibold">Repo Improvements</h3>
          </div>
          <div className="space-y-2">
            {analysis.repoImprovements.map((imp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="glass-card rounded-xl p-4 flex items-start gap-3"
              >
                <code className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded font-mono shrink-0">{imp.repo}</code>
                <p className="text-sm text-muted-foreground">{imp.suggestion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Resume Bullets */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <FileText size={16} className="text-primary" />
          <h3 className="font-semibold">ATS Resume Bullets</h3>
          <span className="text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">Copy-ready</span>
        </div>
        <div className="glass-card rounded-xl p-5 space-y-3">
          {analysis.resumeBullets.map((bullet, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05 * i }}
              className="flex items-start gap-3 text-sm group"
            >
              <span className="text-primary font-mono text-xs mt-0.5">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors cursor-default">{bullet}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestionsPanel;
