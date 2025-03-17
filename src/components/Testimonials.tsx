import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

function TestimonialCard({ name, role, image, content }: Testimonial) {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-white">{name}</h4>
            <p className="text-sm text-gray-400">{role}</p>
          </div>
        </div>
        <p className="text-gray-300 italic">&ldquo;{content}&rdquo;</p>
      </CardContent>
    </Card>
  );
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        What Our Clients Say
      </motion.h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <TestimonialCard {...testimonial} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}