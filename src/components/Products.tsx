import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/background-gradient";
import { useInView } from "react-intersection-observer";

interface Product {
  icon: React.ElementType;
  iconColor: string;
  title: string;
  description: string;
  animation: number;
  link?: string;
}

interface ProductsProps {
  products: Product[];
}

function ProjectCard({
  icon: Icon,
  iconColor,
  title,
  description,
  animation,
  link,
  inView,
}: Product & { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: animation }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: animation }}
      transition={{ duration: 0.5, delay: animation < 0 ? 0.2 : 0.4 }}
    >
      <BackgroundGradient>
        <div className="bg-gray-800 rounded-3xl p-8 cursor-pointer h-64">
          <Icon className={`w-12 h-12 mb-4 ${iconColor}`} />
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </BackgroundGradient>
    </motion.div>
  );
}

export function Products({ products }: ProductsProps) {
  const [productRef, productInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="products" className="pb-20 px-4">
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
        className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8"
      >
        {products.map((product, index) => (
          <ProjectCard key={index} {...product} inView={productInView} />
        ))}
      </div>
    </section>
  );
}
