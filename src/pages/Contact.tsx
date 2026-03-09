import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <PageWrapper>
      <section className="container mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h1 className="text-3xl sm:text-5xl font-display font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <div className="h-1 w-16 bg-primary rounded mb-10" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing data science projects, research collaborations, 
              or opportunities. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <ContactInfo icon={Mail} label="hello@alexchen.dev" href="mailto:hello@alexchen.dev" />
              <ContactInfo icon={Github} label="github.com/alexchen" href="https://github.com" />
              <ContactInfo icon={Linkedin} label="linkedin.com/in/alexchen" href="https://linkedin.com" />
              <ContactInfo icon={MapPin} label="Bangalore, India" />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity glow-primary"
            >
              <Send size={16} /> Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </PageWrapper>
  );
};

const ContactInfo = ({ icon: Icon, label, href }: { icon: any; label: string; href?: string }) => (
  <div className="flex items-center gap-3">
    <Icon size={18} className="text-primary" />
    {href ? (
      <a href={href} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
        {label}
      </a>
    ) : (
      <span className="text-sm text-muted-foreground">{label}</span>
    )}
  </div>
);

export default Contact;
