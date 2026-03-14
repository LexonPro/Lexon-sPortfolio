import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const HomeContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section ref={ref} className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          Have a project idea or just want to chat? Drop me a message.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-xl mx-auto"
      >
        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
          />
          <div className="flex items-center justify-between">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm glow-primary transition-opacity hover:opacity-90"
            >
              <Send size={15} /> Send Message
            </motion.button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary font-display transition-colors"
            >
              <Mail size={13} /> Full contact page <ArrowRight size={12} />
            </Link>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default HomeContact;
