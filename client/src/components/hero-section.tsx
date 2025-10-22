import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleHireMe = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewWork = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative z-10" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center relative">
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-float hidden lg:block"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-float animation-delay-2s hidden lg:block"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-800/30 rounded-full blur-lg animate-float animation-delay-4s hidden lg:block"></div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Animated Flash Background for "Welcome to" only */}
            <div className="absolute inset-0 flex justify-center items-start">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-r from-blue-400/30 via-blue-500/40 to-blue-400/30 rounded-full animate-flash-glow -z-10"></div>
              {/* Zig-Zag Lightning Bolts */}
              <svg
                className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-40 -z-10 animate-lightning"
                style={{ animationDelay: "0s" }}
                viewBox="0 0 100 120"
                fill="none"
              >
                <path
                  d="M50 5 L35 30 L55 35 L30 60 L50 65 L25 90 L45 95 L20 120"
                  stroke="url(#lightning1)"
                  strokeWidth="3"
                  fill="none"
                />
                <defs>
                  <linearGradient
                    id="lightning1"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#93C5FD" stopOpacity="1" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                className="absolute top-12 left-1/2 transform -translate-x-1/2 w-28 h-36 -z-10 animate-lightning"
                style={{ animationDelay: "0.3s" }}
                viewBox="0 0 100 120"
                fill="none"
              >
                <path
                  d="M50 5 L65 25 L45 30 L70 55 L50 60 L75 85 L55 90 L80 115"
                  stroke="url(#lightning2)"
                  strokeWidth="2"
                  fill="none"
                />
                <defs>
                  <linearGradient
                    id="lightning2"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                className="absolute top-6 left-1/2 transform -translate-x-1/2 w-36 h-44 -z-10 animate-lightning"
                style={{ animationDelay: "0.7s" }}
                viewBox="0 0 100 120"
                fill="none"
              >
                <path
                  d="M50 5 L30 20 L60 30 L25 50 L55 60 L20 80 L50 90 L15 110"
                  stroke="url(#lightning3)"
                  strokeWidth="2.5"
                  fill="none"
                />
                <defs>
                  <linearGradient
                    id="lightning3"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight relative z-10">
              Welcome to
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-800 bg-clip-text text-transparent">
                ATOMIC TECH
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Delivering Smart Solutions with a{" "}
              <span className="text-blue-400 font-semibold">
                Technical Edge
              </span>
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              {/* Primary CTA Button */}
              <Button
                onClick={handleHireMe}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500 text-white font-semibold py-6 px-8 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 animate-glow-pulse border-0"
              >
                <span className="relative z-10">Hire Me</span>
              </Button>

              {/* Secondary CTA */}
              <Button
                onClick={handleViewWork}
                variant="ghost"
                className="glassmorphism text-white font-medium py-6 px-8 text-lg rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
