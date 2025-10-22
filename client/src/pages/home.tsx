import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import FeatureCards from "@/components/feature-cards";
import PricingSection from "@/components/pricing-section";
import PortfolioSection from "@/components/portfolio-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative">
      {/* Background Effects */}
      <div className="fixed inset-0 mesh-gradient opacity-60"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/50 to-slate-900"></div>
      
      {/* Background Particles Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-ping animation-delay-1s"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-500 rounded-full opacity-40 animate-ping animation-delay-3s"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-800 rounded-full opacity-50 animate-ping animation-delay-5s"></div>
      </div>

      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeatureCards />
      <PricingSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
