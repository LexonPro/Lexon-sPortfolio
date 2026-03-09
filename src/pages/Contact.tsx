import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Terminal, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contactLinks = [
  { icon: Mail, label: "shikharkumarmaurya@gmail.com", href: "mailto:shikharkumarmaurya@gmail.com" },
  { icon: Phone, label: "+91 8004522805", href: "tel:+918004522805" },
  { icon: Github, label: "github.com/LexonPro", href: "https://github.com/LexonPro" },
  { icon: Linkedin, label: "linkedin.com/in/LexonPro", href: "https://www.linkedin.com/in/LexonPro" },
  { icon: Terminal, label: "leetcode.com/LexonPro", href: "https://leetcode.com/LexonPro" },
];

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
              I'm always open to discussing projects, collaborations, or opportunities. Feel free to reach out!
            </p>
            <div className="space-y-3">
              {contactLinks.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto") || item.href.startsWith("tel") ? undefined : "_blank"}
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 group glass-card p-3 rounded-lg"
                >
                  <item.icon size={18} className="text-primary group-hover:drop-shadow-[0_0_6px_hsl(173,80%,50%)] transition-all" />
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </motion.a>
              ))}
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
              className="w-full px-4 py-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
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

export default Contact;
