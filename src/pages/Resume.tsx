import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const Resume = () => (
  <PageWrapper>
    <section className="container mx-auto px-6 py-20">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <h1 className="text-3xl sm:text-5xl font-display font-bold mb-4">
          My <span className="text-gradient">Resume</span>
        </h1>
        <div className="h-1 w-16 bg-primary rounded mb-10" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl"
      >
        <div className="bg-card border border-border rounded-lg p-8 glow-border">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/10">
              <FileText size={32} className="text-primary" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">Alex Chen - Resume</h2>
              <p className="text-sm text-muted-foreground">B.Tech Data Science & AI • Updated Feb 2026</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <ResumeSection title="Experience">
              <ResumeItem title="Data Science Intern" subtitle="TechCorp AI Labs" date="Jun 2025 - Aug 2025" />
              <ResumeItem title="ML Research Assistant" subtitle="University AI Lab" date="Jan 2025 - May 2025" />
            </ResumeSection>
            <ResumeSection title="Education">
              <ResumeItem title="B.Tech Data Science & AI" subtitle="University of Technology" date="2023 - 2027" />
            </ResumeSection>
            <ResumeSection title="Key Skills">
              <p className="text-sm text-muted-foreground">
                Python, R, SQL, TensorFlow, PyTorch, Scikit-learn, Docker, AWS, Git, Tableau
              </p>
            </ResumeSection>
          </div>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity glow-primary"
          >
            <Download size={16} /> Download PDF
          </a>
          <p className="text-xs text-muted-foreground mt-3">
            Tip: Add your actual resume PDF to the public folder as "resume.pdf"
          </p>
        </div>
      </motion.div>
    </section>
  </PageWrapper>
);

const ResumeSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="font-display text-xs uppercase tracking-widest text-primary mb-2">{title}</h3>
    <div className="space-y-2 pl-3 border-l border-border">{children}</div>
  </div>
);

const ResumeItem = ({ title, subtitle, date }: { title: string; subtitle: string; date: string }) => (
  <div>
    <p className="text-sm font-medium text-foreground">{title}</p>
    <p className="text-xs text-muted-foreground">{subtitle} • {date}</p>
  </div>
);

export default Resume;
