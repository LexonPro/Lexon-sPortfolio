import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  image?: string;
}

const CertificateCard = ({ title, issuer, date, link, image }: CertificateCardProps) => (
  <motion.div
    whileHover={{ scale: 1.03, y: -4 }}
    className="group glass-card rounded-lg overflow-hidden"
  >
    {image ? (
      <div className="aspect-video bg-secondary overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
    ) : (
      <div className="aspect-video bg-secondary/50 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <Award size={48} className="text-primary/30 group-hover:text-primary/50 transition-colors" />
      </div>
    )}
    <div className="p-4">
      <h3 className="text-sm font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-xs text-muted-foreground">{issuer}</p>
      <p className="text-xs text-primary/60 mt-1">{date}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 mt-3 text-xs font-display text-primary/70 hover:text-primary transition-colors"
        >
          <ExternalLink size={12} /> View Certificate
        </a>
      )}
    </div>
  </motion.div>
);

export default CertificateCard;
