import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Mentor() {
  const [mentorRef, mentorInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={mentorRef} className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Our Mentor
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={mentorInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl mx-auto bg-gray-800/90 backdrop-blur-sm rounded-xl p-10 text-center shadow-xl border border-white/10 hover:border-white/20 transition-all"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src="https://thecloudside.com/images/ram.jpeg"
          alt="Ram Devaraj"
          className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-blue-500 shadow-lg hover:border-blue-400 transition-colors"
        />
        <h3 className="text-2xl font-bold mb-3 text-white">Ram Devaraj</h3>
        <p className="text-gray-300 mb-6 text-lg">
          CEO & Co-founder at Chronicles | Ex-Founder | 5 Successful Exits
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          Guiding us through technical excellence and business strategy with
          over a decade of entrepreneurial expertise
        </p>
        <motion.a
          href="https://www.linkedin.com/in/ramdevaraj/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-6 text-blue-400 hover:text-blue-300 transition-colors"
        >
          Connect on LinkedIn
        </motion.a>
      </motion.div>
    </section>
  );
}