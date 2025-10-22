import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "Basit delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and technical expertise is outstanding. Our sales increased by 40% within the first month!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Operations Manager, AutoFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "The n8n automation workflows Basit created saved us 20+ hours per week. The integration with our existing systems was seamless and the documentation was comprehensive."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder, DataViz Pro",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "Working with Basit was a game-changer for our data visualization platform. The performance optimizations and user experience improvements were exactly what we needed."
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO, FinanceFlow",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "Basit's API development skills are top-notch. The payment gateway integration was flawless and the security implementation gave us complete confidence in our system."
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Marketing Director, GrowthCo",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "The CRM automation suite transformed our lead management process. Response times improved dramatically and our conversion rates increased by 35%. Highly recommended!"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-slate-400"
        }`}
      />
    ));
  };

  return (
    <section className="relative z-10 py-20" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Client <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto mb-8">
            Don't just take my word for it - here's what my clients say about working with me.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glassmorphism rounded-2xl p-8 md:p-12 text-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 italic">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Client Info */}
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-16 h-16 border-2 border-blue-400/50">
                <AvatarImage 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                />
                <AvatarFallback className="bg-blue-500/20 text-blue-400">
                  {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div>
                <h4 className="text-white font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-slate-400 text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
              
              {/* Rating Stars */}
              <div className="flex space-x-1">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-400 scale-125"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Grid - Alternative View */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glassmorphism border-slate-700/50 hover:bg-white/15 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-slate-300 text-sm mb-4 line-clamp-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-blue-500/20 text-blue-400 text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-white font-medium text-sm">{testimonial.name}</p>
                      <p className="text-slate-400 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}