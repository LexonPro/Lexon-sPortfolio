import { motion } from "framer-motion";

const CodingStats = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3">
          Coding <span className="text-gradient">Activity</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          My GitHub contributions and LeetCode progress at a glance.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* GitHub Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-lg p-6"
        >
          <h3 className="font-display text-sm text-primary tracking-widest uppercase mb-4">
            GitHub Contributions
          </h3>
          <div className="overflow-hidden rounded-md">
            <img
              src="https://ghchart.rshah.org/2dd4bf/LexonPro"
              alt="LexonPro's GitHub contribution graph"
              className="w-full"
              loading="lazy"
            />
          </div>
          <div className="mt-4">
            <img
              src="https://github-readme-stats.vercel.app/api?username=LexonPro&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&title_color=2dd4bf&icon_color=2dd4bf&text_color=94a3b8"
              alt="LexonPro's GitHub stats"
              className="w-full"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* LeetCode Stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-lg p-6"
        >
          <h3 className="font-display text-sm text-primary tracking-widest uppercase mb-4">
            LeetCode Progress
          </h3>
          <div className="overflow-hidden rounded-md">
            <img
              src="https://leetcard.jacoblin.cool/LexonPro?theme=dark&font=Source%20Code%20Pro&ext=heatmap&border=0&radius=8"
              alt="LexonPro's LeetCode stats"
              className="w-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingStats;
