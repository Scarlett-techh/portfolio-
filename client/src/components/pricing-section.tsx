import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: 299,
    duration: "project",
    popular: false,
    description: "Perfect for small businesses and startups",
    features: [
      "Responsive Website Design",
      "Up to 5 Pages",
      "Contact Form Integration",
      "Mobile Optimization",
      "Basic SEO Setup",
      "1 Month Support"
    ],
    gradient: "from-slate-600 to-slate-500",
    buttonStyle: "outline"
  },
  {
    name: "Standard",
    price: 599,
    duration: "project", 
    popular: true,
    description: "Most popular choice for growing businesses",
    features: [
      "Everything in Basic",
      "Up to 10 Pages",
      "CMS Integration",
      "Advanced SEO",
      "Performance Optimization",
      "Social Media Integration",
      "Analytics Setup",
      "3 Months Support"
    ],
    gradient: "from-blue-500 to-blue-400",
    buttonStyle: "default"
  },
  {
    name: "Premium",
    price: 999,
    duration: "project",
    popular: false,
    description: "Complete solution for enterprise needs",
    features: [
      "Everything in Standard",
      "Unlimited Pages",
      "E-commerce Integration",
      "Custom API Development",
      "n8n Workflow Automation",
      "Advanced Security",
      "Database Design",
      "6 Months Support",
      "Priority Support"
    ],
    gradient: "from-purple-500 to-blue-500",
    buttonStyle: "default"
  }
];

export default function PricingSection() {
  const handleOrderNow = (planName: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-10 py-20" id="pricing">
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
            Services & <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your project needs. All plans include modern design, responsive layout, and professional development.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative group ${plan.popular ? 'transform scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-4 py-1 text-sm font-medium">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className={`glassmorphism rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:bg-white/15 group-hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-blue-400/50' : ''}`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-slate-400 ml-2">/ {plan.duration}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex-shrink-0">
                        <Check className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="text-slate-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <Button
                    onClick={() => handleOrderNow(plan.name)}
                    className={`w-full py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      plan.buttonStyle === 'default' 
                        ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-blue-500/25 text-white border-0` 
                        : 'glassmorphism text-white hover:bg-white/20'
                    }`}
                    variant={plan.buttonStyle === 'default' ? 'default' : 'outline'}
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-400">
            Need a custom solution? 
            <button 
              onClick={() => handleOrderNow('Custom')}
              className="text-blue-400 hover:text-blue-300 ml-2 font-medium transition-colors"
            >
              Let's discuss your requirements
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}