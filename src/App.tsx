import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { InstagramIcon, LockIcon, BookOpen, Bot, Wrench, Code2, Laptop, Brain } from "lucide-react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Mentor } from "./components/Mentor";
import { Footer } from "./components/Footer";

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { name: "Home", section: "home" },
    { name: "Products", section: "products" },
    { name: "Services", section: "services" },
    { name: "About", section: "about" },
    { name: "Testimonials", section: "testimonials" },
    { name: "Contact", section: "contact" },
  ];

  const products = [
    {
      icon: InstagramIcon,
      iconColor: "text-pink-500",
      title: "RealShop",
      description:
        "AI-powered Instagram bot that discovers and shops outfits from reels",
      animation: -50,
    },

    {
      icon: BookOpen,
      iconColor: "text-green-500",
      title: "Student-X",
      description: "AI-powered personalized learning platform for students",
      animation: -50,
      link: "https://student-x.vercel.app/",
    },
    {
      icon: Bot,
      iconColor: "text-purple-500",
      title: "Astro Chatbot",
      description: "Advanced AI chatbot for astronomy enthusiasts",
      animation: 50,
      link: "https://astro-ai-eight.vercel.app/chat",
    },
  ];

  const services = [
 
    {
      icon: Code2,
      title: "Web Development",
      description: "Full-stack web development with modern technologies",
    },
    {
      icon: Laptop,
      title: "Mobile Development",
      description: "Cross-platform mobile app development",
    },
    {
      icon: Brain,
      title: "AI Consulting",
      description: "Expert guidance on implementing AI in your business",
    },
  ];

  const testimonials = [
    {
      name: "Cloudside ",
      // role: "CTO, TechCorp",
      image: "https://thecloudside.com/images/cloudside-logo.png",
      // content: "ByteProLabs transformed our business with their innovative AI solutions. Their team's expertise and dedication are unmatched.",
    },
    {
      name: "Spectra ",
      // role: "Founder, EduTech",

      image: "https://placehold.co/400x400",      // content: "The Student-X platform developed by ByteProLabs has revolutionized how we deliver educational content. Outstanding work!",
    },
    {
      name: "Dance Vibes",
      // role: "Product Manager, AI Innovations",
      image: "https://images.squarespace-cdn.com/content/v1/66be3343cf1b2c4065be772a/dcb9e864-18e2-452d-a66e-5dd1b39cc0bc/Screenshot+2024-12-16+190851.png",
      // content: "Working with ByteProLabs was a game-changer for our AI implementation. Their expertise and support are exceptional.",
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-900 text-white">
      <Navbar navLinks={navLinks} scrollToSection={scrollToSection} />
      
      <div className="pt-16">
        <Hero opacity={opacity} scale={scale} />
        <Products products={products} />
        <Services services={services} />
        <About />
        <Testimonials testimonials={testimonials} />
        <Mentor />
        <Footer />
      </div>
    </div>
  );
}

export default App;