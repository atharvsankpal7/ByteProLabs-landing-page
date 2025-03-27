import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ServicesProps {
  services: Service[];
}

function ServiceCard({ icon: Icon, title, description }: Service) {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardContent className="p-6">
        <Icon className="w-12 h-12 mb-4 text-blue-400" />
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}

export function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="py-20 px-4 bg-gray-800/50">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Our Services
      </motion.h2>
      <div className="max-w-7xl mx-auto grid  md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}