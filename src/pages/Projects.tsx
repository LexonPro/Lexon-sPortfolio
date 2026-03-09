import PageWrapper from "@/components/PageWrapper";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Sentiment Analysis Engine",
    description: "Real-time sentiment analysis of Twitter data using BERT and transformers. Processes 10K+ tweets per minute with 94% accuracy.",
    tags: ["Python", "BERT", "FastAPI", "Redis"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Stock Price Predictor",
    description: "LSTM-based time series forecasting model for stock prices with interactive dashboard built in Streamlit.",
    tags: ["Python", "TensorFlow", "Streamlit", "Yahoo Finance API"],
    github: "https://github.com",
  },
  {
    title: "Image Classification Pipeline",
    description: "End-to-end computer vision pipeline for medical image classification using transfer learning with ResNet50.",
    tags: ["PyTorch", "OpenCV", "Docker", "AWS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Recommendation System",
    description: "Collaborative filtering recommendation engine for movies using matrix factorization and deep learning approaches.",
    tags: ["Python", "Scikit-learn", "Flask", "PostgreSQL"],
    github: "https://github.com",
  },
  {
    title: "COVID-19 Data Dashboard",
    description: "Interactive visualization dashboard tracking COVID-19 trends globally with real-time data updates and predictive modeling.",
    tags: ["Python", "Plotly", "Pandas", "Dash"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Chatbot with RAG",
    description: "Retrieval-Augmented Generation chatbot for Q&A over custom documents using LangChain and vector databases.",
    tags: ["LangChain", "Pinecone", "OpenAI", "React"],
    github: "https://github.com",
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
          A collection of data science and ML projects I've built. Each one taught me something new.
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
