import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const ProjectCard = ({ title, description, tags, github, demo }: ProjectCardProps) => (
  <motion.div
    whileHover={{ scale: 1.03, y: -4 }}
    className="group glass-card rounded-lg p-6"
  >
    <div className="mb-4">
      <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <span key={tag} className="text-xs font-display px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
          {tag}
        </span>
      ))}
    </div>
    <div className="flex gap-3">
      {github && (
        <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
          <Github size={14} /> Code
        </a>
      )}
      {demo && (
        <a href={demo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
          <ExternalLink size={14} /> Demo
        </a>
      )}
    </div>
  </motion.div>
);

export default ProjectCard;
