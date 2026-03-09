import PageWrapper from "@/components/PageWrapper";
import CertificateCard from "@/components/CertificateCard";
import { motion } from "framer-motion";

const certificates = [
  { title: "Machine Learning Specialization", issuer: "Stanford Online (Coursera)", date: "Jan 2025" },
  { title: "Deep Learning Specialization", issuer: "deeplearning.ai", date: "Mar 2025" },
  { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "Jun 2025" },
  { title: "TensorFlow Developer Certificate", issuer: "Google", date: "Aug 2025" },
  { title: "Data Science Professional Certificate", issuer: "IBM (Coursera)", date: "Nov 2024" },
  { title: "SQL for Data Science", issuer: "UC Davis (Coursera)", date: "Sep 2024" },
  { title: "Tableau Desktop Specialist", issuer: "Tableau", date: "Dec 2025" },
  { title: "Python for Data Science & AI", issuer: "IBM", date: "Jul 2024" },
];

const Certificates = () => (
  <PageWrapper>
    <section className="container mx-auto px-6 py-20">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <h1 className="text-3xl sm:text-5xl font-display font-bold mb-4">
          <span className="text-gradient">Certificates</span>
        </h1>
        <div className="h-1 w-16 bg-primary rounded mb-4" />
        <p className="text-muted-foreground mb-10 max-w-xl">
          Continuous learning is key. Here are some certifications I've earned along the way.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.08 }}
          >
            <CertificateCard {...cert} />
          </motion.div>
        ))}
      </div>
    </section>
  </PageWrapper>
);

export default Certificates;
