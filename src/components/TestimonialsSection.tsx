import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Shikhar has a strong grasp of data science concepts and consistently delivers clean, efficient code. His enthusiasm for ML is infectious.",
    author: "Professor, Data Science Dept.",
    role: "Academic Mentor",
  },
  {
    text: "Working with Shikhar on the SpendIQ project was great. He brought creative AI solutions and had a real eye for user experience.",
    author: "Team Collaborator",
    role: "Project Partner",
  },
  {
    text: "His problem-solving skills on LeetCode are impressive. Shikhar approaches every challenge with analytical thinking and persistence.",
    author: "Peer Developer",
    role: "Coding Community",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3">
          What People <span className="text-gradient">Say</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <div className="glass-card rounded-2xl p-8 sm:p-10 relative text-center">
          <Quote size={32} className="text-primary/20 mx-auto mb-4" />
          <motion.p
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-foreground text-sm sm:text-base leading-relaxed mb-6 italic"
          >
            "{testimonials[current].text}"
          </motion.p>
          <motion.div key={`author-${current}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-sm font-display font-semibold text-primary">
              {testimonials[current].author}
            </p>
            <p className="text-xs text-muted-foreground">{testimonials[current].role}</p>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
