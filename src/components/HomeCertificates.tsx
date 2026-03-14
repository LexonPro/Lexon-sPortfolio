import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const certificates = [
  { title: "Python Programming", issuer: "Online Platform", date: "2024" },
  { title: "Data Science Foundations", issuer: "Online Platform", date: "2024" },
  { title: "Web Development", issuer: "Online Platform", date: "2024" },
];

const HomeCertificates = () => {
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
          <span className="text-gradient">Certificates</span>
        </h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          Continuous learning through recognized certifications.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="glass-card rounded-xl p-5 text-center group cursor-default"
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Award size={24} className="text-accent group-hover:drop-shadow-[0_0_8px_hsl(270,60%,60%)] transition-all" />
            </div>
            <h3 className="text-sm font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
              {cert.title}
            </h3>
            <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            <p className="text-xs text-primary/50 mt-1">{cert.date}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="text-center mt-8"
      >
        <Link
          to="/certificates"
          className="inline-flex items-center gap-2 text-sm text-primary font-display hover:underline"
        >
          View All Certificates <ArrowRight size={14} />
        </Link>
      </motion.div>
    </section>
  );
};

export default HomeCertificates;
