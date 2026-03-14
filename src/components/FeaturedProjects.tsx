import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "SpendIQ",
    description: "AI-powered expense tracking with analytics dashboard and smart category insights.",
    tags: ["React", "Node.js", "MongoDB", "AI"],
    github: "https://github.com/LexonPro",
    gradient: "from-primary/20 to-accent/10",
  },
  {
    title: "Portfolio Website",
    description: "Personal developer portfolio with modern UI effects, animations, and data-driven design.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/LexonPro",
    gradient: "from-accent/20 to-primary/10",
  },
  {
    title: "DSA Practice Tracker",
    description: "Track solved coding problems and monitor progress across multiple competitive platforms.",
    tags: ["Python", "SQL", "React"],
    github: "https://github.com/LexonPro",
    gradient: "from-primary/15 to-accent/15",
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
          Some of my recent work that I'm proud of.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -8, rotateY: 3, rotateX: -2 }}
            style={{ perspective: 800, transformStyle: "preserve-3d" }}
            className="glass-card rounded-xl overflow-hidden group"
          >
            {/* Project preview area */}
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
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={13} /> Source Code
                  </a>
                )}
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
