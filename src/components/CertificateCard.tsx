import { Award } from "lucide-react";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  image?: string;
}

const CertificateCard = ({ title, issuer, date, image }: CertificateCardProps) => (
  <div className="group bg-card border border-border rounded-lg overflow-hidden card-hover glow-border">
    {image ? (
      <div className="aspect-video bg-secondary overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
    ) : (
      <div className="aspect-video bg-secondary flex items-center justify-center">
        <Award size={48} className="text-primary/30" />
      </div>
    )}
    <div className="p-4">
      <h3 className="text-sm font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-xs text-muted-foreground">{issuer}</p>
      <p className="text-xs text-primary/60 mt-1">{date}</p>
    </div>
  </div>
);

export default CertificateCard;
