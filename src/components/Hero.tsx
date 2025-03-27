import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";

interface HeroProps {
  opacity: any;
  scale: any;
}

export function Hero({ opacity, scale }: HeroProps) {
  return (
    <div id="home" className="w-[calc(100%-4rem)] mx-auto rounded-md overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor={["#FFFFFF", "#87CEEB", "#E6E6FA"]}
        />
      </div>
      <motion.header
        style={{ opacity, scale }}
        className="h-screen flex flex-col items-center justify-center text-center px-4 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Pioneering Experimental AI Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            We are an experimental studio building Gen AI products
          </p>
        </motion.div>
      </motion.header>
    </div>
  );
}