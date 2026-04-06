import PageWrapper from "@/components/PageWrapper";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SpendIQ",
    description: "Smart expense tracking application that helps users manage their finances with intuitive categorization and spending analytics.",
    tags: ["JavaScript", "Finance", "Web App"],
    github: "https://github.com/LexonPro/SpendIQ",
  },
  {
    title: "Smart Crop Advisory System",
    description: "AI-powered system that recommends optimal crops based on soil conditions, weather data, and regional patterns.",
    tags: ["CSS", "AI", "Agriculture", "Web"],
    github: "https://github.com/LexonPro/smart-crop-advisory-system",
  },
  {
    title: "Resume Analyzer AI",
    description: "Intelligent resume parsing and analysis tool that provides feedback and scoring using NLP techniques.",
    tags: ["Python", "NLP", "AI", "Machine Learning"],
    github: "https://github.com/LexonPro/resume-analyzer-ai",
  },
  {
    title: "Movie Recommendation System",
    description: "Content-based and collaborative filtering recommendation engine for personalized movie suggestions.",
    tags: ["Jupyter Notebook", "Python", "ML", "Data Science"],
    github: "https://github.com/LexonPro/Movie-recommendation-system",
  },
  {
    title: "Expense Prediction ML",
    description: "Machine learning model that predicts future expenses based on historical spending patterns and user behavior.",
    tags: ["Jupyter Notebook", "Python", "ML", "Finance"],
    github: "https://github.com/LexonPro/Expense-Prediction-ML",
  },
  {
    title: "Student Performance EDA",
    description: "Exploratory data analysis on student performance data to uncover patterns and insights in academic outcomes.",
    tags: ["Jupyter Notebook", "Python", "EDA", "Data Science"],
    github: "https://github.com/LexonPro/Student-Performance-EDA",
  },
  {
    title: "Daily LeetCode",
    description: "Daily competitive programming solutions with clean implementations and detailed approach explanations.",
    tags: ["C++", "DSA", "Competitive Programming"],
    github: "https://github.com/LexonPro/Daily_LeetCode",
  },
  {
    title: "DSA Practice",
    description: "Comprehensive collection of Data Structures and Algorithms practice problems with optimized solutions.",
    tags: ["C++", "DSA", "Algorithms"],
    github: "https://github.com/LexonPro/DSA_Practice",
  },
  {
    title: "DSA C++ Revision",
    description: "Structured revision notes and code for Data Structures and Algorithms concepts in C++.",
    tags: ["HTML", "C++", "DSA", "Notes"],
    github: "https://github.com/LexonPro/dsa-cpp-revision",
  },
  {
    title: "FullStack Development",
    description: "Full-stack web development projects and practice covering frontend and backend technologies.",
    tags: ["CSS", "JavaScript", "Full Stack"],
    github: "https://github.com/LexonPro/FullStack",
  },
  {
    title: "Python Practice",
    description: "Collection of Python programs covering core concepts, OOP, file handling, and data manipulation.",
    tags: ["Python", "Programming", "Practice"],
    github: "https://github.com/LexonPro/Python",
  },
  {
    title: "Lexon's Portfolio",
    description: "Modern developer portfolio website built with React, TypeScript, and Framer Motion animations.",
    tags: ["TypeScript", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/LexonPro/Lexon-sPortfolio",
    demo: "https://lexonpro.lovable.app",
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
          Real projects from my GitHub — spanning AI/ML, web development, and competitive programming.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.08 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  </PageWrapper>
);

export default Projects;
