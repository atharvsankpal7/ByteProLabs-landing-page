import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-gray-400 mb-4">
          3rd Floor, SNR Pavement, 27th Main Rd, near SNN Raj Serenity, HSR
          Layout, Bengaluru, Karnataka 560102
        </p>
        <motion.a
          href="mailto:bpl@byteprolabs.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          thiyagu@byteprolabs.com
        </motion.a>
      </div>
    </footer>
  );
}