import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";

const techStack = [
  "Python", "R", "SQL", "TensorFlow", "PyTorch", "Scikit-learn",
  "Pandas", "NumPy", "Matplotlib", "Tableau", "Power BI",
  "Docker", "Git", "AWS", "MongoDB", "PostgreSQL"
];

const About = () => (
  <PageWrapper>
    <section className="container mx-auto px-6 py-20">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <h1 className="text-3xl sm:text-5xl font-display font-bold mb-4">
          About <span className="text-gradient">Me</span>
        </h1>
        <div className="h-1 w-16 bg-primary rounded mb-10" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm a B.Tech Data Science student with a deep passion for machine learning, 
            statistical analysis, and building data-driven applications. Currently in my 
            third year, I've been working on projects ranging from NLP systems to computer 
            vision pipelines.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            My journey started with a curiosity about how platforms like Netflix and Spotify 
            create such personalized experiences. That led me down the rabbit hole of 
            recommendation systems, and eventually into the broader world of AI/ML.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not training models, you'll find me contributing to open-source projects, 
            writing technical blogs, or exploring new datasets on Kaggle.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <h2 className="font-display text-lg font-semibold text-foreground mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className="px-3 py-1.5 text-xs font-display rounded-md bg-secondary text-secondary-foreground border border-border hover:border-primary/40 hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 p-4 bg-card border border-border rounded-lg glow-border">
            <h3 className="font-display text-sm font-semibold text-primary mb-2">Education</h3>
            <p className="text-sm text-foreground">B.Tech in Data Science & AI</p>
            <p className="text-xs text-muted-foreground">University of Technology • 2023 - 2027</p>
            <p className="text-xs text-primary/60 mt-1">CGPA: 9.2 / 10</p>
          </div>
        </motion.div>
      </div>
    </section>
  </PageWrapper>
);

export default About;
