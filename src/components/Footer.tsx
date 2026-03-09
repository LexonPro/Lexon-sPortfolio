import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 mt-20">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-display">
        © 2026 Shikhar Maurya. Built with passion.
      </p>
      <div className="flex items-center gap-4">
        <a href="https://github.com/LexonPro" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/LexonPro" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="https://leetcode.com/LexonPro" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Terminal size={20} />
        </a>
        <a href="mailto:shikharkumarmaurya@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
