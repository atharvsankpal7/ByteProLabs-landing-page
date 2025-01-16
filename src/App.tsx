import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { InstagramIcon, LockIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { BackgroundGradient } from "./components/ui/background-gradient";
import { Vortex } from "./components/ui/vertox";
function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const [productRef, productInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mentorRef, mentorInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const projects = [
    {
      icon: InstagramIcon,
      iconColor: "text-pink-500",
      title: "RealShop",
      description:
        "AI-powered Instagram bot that discovers and shops outfits from reels",
      animation: -50,
    },
    {
      icon: LockIcon,
      iconColor: "text-blue-500",
      title: "Stealth Project",
      description: "Building Apps on Superchain",
      animation: 50,
    },
  ];
  const ProjectCard = ({
    icon: Icon,
    iconColor,
    title,
    description,
    animation,
    inView,
  }: {
    icon: React.ElementType;
    iconColor: string;
    title: string;
    description: string;
    animation: number;
    inView: boolean;
  }) => (
    <motion.div
      initial={{ opacity: 0, x: animation }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: animation }}
      transition={{ duration: 0.5, delay: animation < 0 ? 0.2 : 0.4 }}
    >
      <BackgroundGradient>
        <div className="bg-gray-800 rounded-3xl p-8 cursor-pointer h-64 ">
          <Icon className={`w-12 h-12 mb-4 ${iconColor} `} />
          <h3 className="text-2xl font-bold mb-2 ">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </BackgroundGradient>
    </motion.div>
  );
  return (
    
    <div ref={containerRef} className="min-h-screen bg-gray-900 text-white">
      <div className="w-[calc(100%-4rem)] mx-auto rounded-md overflow-hidden">
        <Vortex
          backgroundColor="transparent"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <motion.header
            style={{ opacity, scale }}
            className="h-screen flex flex-col items-center justify-center text-center px-4"
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
        </Vortex>
      </div>

      <section className="py-20 px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Our Products
        </motion.h2>
        <div
          ref={productRef}
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} inView={productInView} />
          ))}
        </div>{" "}
      </section>

      <section className="py-20 px-4 bg-gray-800">
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
              {/* Gradients */}
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
      <footer className="bg-gray-800 py-12 px-4">
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
    </div>
  );
}

export default App;
