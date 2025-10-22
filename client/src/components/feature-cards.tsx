import { motion } from "framer-motion";
import { Monitor, Smartphone, Zap } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Modern, responsive websites built with cutting-edge technologies and best practices."
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Cross-platform mobile applications that deliver exceptional user experiences."
  },
  {
    icon: Zap,
    title: "Smart Solutions",
    description: "Innovative technical solutions tailored to solve complex business challenges."
  }
];

export default function FeatureCards() {
  return (
    <section className="relative z-10 py-16" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const gradients = [
              "from-blue-400 to-blue-500",
              "from-blue-500 to-blue-800",
              "from-blue-800 to-blue-400"
            ];
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glassmorphism-card rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${gradients[index]} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
