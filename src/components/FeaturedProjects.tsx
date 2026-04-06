import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Smart Crop Advisory System",
    description: "AI-powered system recommending optimal crops based on soil, weather, and regional data.",
    tags: ["CSS", "AI", "Agriculture", "Web"],
    github: "https://github.com/LexonPro/smart-crop-advisory-system",
    gradient: "from-primary/20 to-accent/10",
  },
  {
    title: "Resume Analyzer AI",
    description: "Intelligent resume parsing and scoring tool using NLP techniques for actionable feedback.",
    tags: ["Python", "NLP", "AI", "ML"],
    github: "https://github.com/LexonPro/resume-analyzer-ai",
    gradient: "from-accent/20 to-primary/10",
  },
  {
    title: "Movie Recommendation System",
    description: "Content-based & collaborative filtering engine for personalized movie suggestions.",
    tags: ["Python", "ML", "Jupyter", "Data Science"],
    github: "https://github.com/LexonPro/Movie-recommendation-system",
    gradient: "from-primary/15 to-accent/15",
  },
  {
    title: "SpendIQ",
    description: "Smart expense tracker with analytics dashboard and category-based spending insights.",
    tags: ["JavaScript", "Finance", "Web App"],
    github: "https://github.com/LexonPro/SpendIQ",
    gradient: "from-accent/15 to-primary/20",
  },
  {
    title: "Expense Prediction ML",
    description: "ML model predicting future expenses from historical spending patterns.",
    tags: ["Python", "ML", "Jupyter", "Finance"],
    github: "https://github.com/LexonPro/Expense-Prediction-ML",
    gradient: "from-primary/20 to-accent/15",
  },
  {
    title: "Student Performance EDA",
    description: "Exploratory analysis uncovering patterns in student academic performance data.",
    tags: ["Python", "EDA", "Jupyter", "Data Science"],
    github: "https://github.com/LexonPro/Student-Performance-EDA",
    gradient: "from-accent/10 to-primary/20",
  },
];

const FeaturedProjects = () => {
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
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          Highlights from my GitHub — AI/ML, data science, and full-stack work.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            whileHover={{ y: -8, rotateY: 3, rotateX: -2 }}
            style={{ perspective: 800, transformStyle: "preserve-3d" }}
            className="glass-card rounded-xl overflow-hidden group"
          >
            <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary)) 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }} />
              <div className="absolute bottom-3 left-4 right-4">
                <div className="flex gap-1.5 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                </div>
                <div className="h-1.5 w-16 rounded bg-foreground/10 mb-1" />
                <div className="h-1.5 w-24 rounded bg-foreground/10" />
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-base font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-display px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={13} /> Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
        className="text-center mt-10"
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-primary font-display hover:underline"
        >
          View All Projects <ArrowRight size={14} />
        </Link>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;
