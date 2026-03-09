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
        <div className="glass-card rounded-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/10">
              <FileText size={32} className="text-primary" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">Shikhar Maurya - Resume</h2>
              <p className="text-sm text-muted-foreground">B.Tech Data Science • Software Developer</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <ResumeSection title="Education">
              <ResumeItem title="B.Tech in Data Science" subtitle="Currently Pursuing" date="Present" />
            </ResumeSection>
            <ResumeSection title="Key Skills">
              <p className="text-sm text-muted-foreground">
                C++, Python, DSA, Machine Learning, React, Node.js, SQL, Git, Linux, Web Development
              </p>
            </ResumeSection>
            <ResumeSection title="Projects">
              <ResumeItem title="SpendIQ" subtitle="AI-powered expense tracker" date="React, Node.js, MongoDB" />
              <ResumeItem title="DSA Practice Tracker" subtitle="Coding progress tracker" date="React, Node.js" />
              <ResumeItem title="Portfolio Website" subtitle="Personal portfolio" date="React, TypeScript" />
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
