import { motion } from "framer-motion";
import { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => (
  <motion.main
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="pt-16 min-h-screen"
  >
    {children}
  </motion.main>
);

export default PageWrapper;
