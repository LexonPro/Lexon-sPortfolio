import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";

const skills = [
  { name: "C++", level: 85 },
  { name: "Python", level: 80 },
  { name: "DSA", level: 90 },
  { name: "Machine Learning", level: 70 },
  { name: "Web Development", level: 75 },
  { name: "React", level: 75 },
  { name: "Node.js", level: 65 },
  { name: "SQL", level: 70 },
  { name: "Git", level: 80 },
  { name: "Linux", level: 65 },
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
            I'm Shikhar Maurya, a B.Tech Data Science student passionate about software development,
            machine learning, and solving Data Structures and Algorithms problems.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I enjoy building intelligent applications and exploring data-driven solutions.
            My journey into tech started with competitive programming, which led me to
            explore the broader world of software engineering and AI/ML.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not coding, you'll find me solving problems on LeetCode,
            contributing to open-source projects, or exploring new technologies.
          </p>

          <div className="mt-8 glass-card p-4 rounded-lg">
            <h3 className="font-display text-sm font-semibold text-primary mb-2">Education</h3>
            <p className="text-sm text-foreground">B.Tech in Data Science</p>
            <p className="text-xs text-muted-foreground">Currently Pursuing</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <h2 className="font-display text-lg font-semibold text-foreground mb-6">Skills & Proficiency</h2>
          <div className="space-y-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.06 }}
                className="group"
              >
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-display text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-xs text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.8 + i * 0.08, duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent skill-bar-glow"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </PageWrapper>
);

export default About;
