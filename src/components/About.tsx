import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Part of the 100 Startup Program
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <a
          href="https://www.100startups.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://www.100startups.com/static/media/Logo.44de207bb74bdcb780192b7edfb6c2ca.svg"
            alt="Startup Program"
            className="w-full rounded-lg shadow-2xl p-10 border border-white/20"
          />
          <div className="h-10 relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 blur-sm" />
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2" />
          </div>
        </a>
        <p className="text-gray-300">
          Selected for the prestigious 100 Startup Program, accelerating our
          growth through expert guidance, networking, and resources.
        </p>
      </motion.div>
    </section>
  );
}