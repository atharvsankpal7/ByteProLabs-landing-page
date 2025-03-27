import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

interface Testimonial {
  name: string;
  // role: string;
  image: string;
  // content: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

function TestimonialCard({ name, image }: Testimonial) {
  return (
    <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors duration-300 transform hover:scale-105">
      <CardContent className="p-8">
        <div className="flex flex-col items-center">
          <div className="h-24 w-24 mb-6 ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-800 overflow-hidden rounded-lg">
            <img src={image} alt={name} className="w-full h-full object-contain bg-white" />
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold text-white tracking-tight">{name}</h4>
          </div>
        </div>
      </CardContent>
    </Card>  );
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-center mb-20 text-white tracking-tight"
      >
        What Our Clients Say
      </motion.h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="hover:transform hover:translate-y-[-8px] transition-transform duration-300"
          >
            <TestimonialCard {...testimonial} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}