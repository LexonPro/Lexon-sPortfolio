import PageWrapper from "@/components/PageWrapper";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SpendIQ",
    description: "AI-powered expense tracking application with analytics dashboard and category-based spending insights.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/LexonPro",
  },
  {
    title: "Portfolio Website",
    description: "Personal developer portfolio website showcasing projects, certificates, and coding profiles with modern UI effects.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/LexonPro",
  },
  {
    title: "DSA Practice Tracker",
    description: "System for tracking solved coding problems and monitoring coding progress across multiple platforms.",
    tags: ["React", "Node.js", "SQL"],
    github: "https://github.com/LexonPro",
  },
];

const Projects = () => (
  <PageWrapper>
    <section className="container mx-auto px-6 py-20">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <h1 className="text-3xl sm:text-5xl font-display font-bold mb-4">
          My <span className="text-gradient">Projects</span>
        </h1>
        <div className="h-1 w-16 bg-primary rounded mb-4" />
        <p className="text-muted-foreground mb-10 max-w-xl">
          A collection of projects I've built. Each one taught me something new.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  </PageWrapper>
);

export default Projects;
