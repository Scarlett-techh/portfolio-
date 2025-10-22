import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { SiGithub, SiLinkedin, SiFiverr, SiWhatsapp } from "react-icons/si";

const fiverServices = [
  {
    title: "Web Development",
    icon: SiFiverr,
    href: "https://www.fiverr.com/s/DBXpLrV",
    color: "hover:text-green-400"
  },
  {
    title: "Automation Solutions",
    icon: SiFiverr,
    href: "https://www.fiverr.com/s/pdrEqzp",
    color: "hover:text-green-400"
  },
  {
    title: "API Integration",
    icon: SiFiverr,
    href: "https://www.fiverr.com/s/Q7gkK4e",
    color: "hover:text-green-400"
  },
  {
    title: "Custom Solutions",
    icon: SiFiverr,
    href: "https://www.fiverr.com/s/2KLbqZX",
    color: "hover:text-green-400"
  }
];

const contactMethods = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:basitbalogun234@gmail.com?subject=Project%20Inquiry&body=Hello%20Basit%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.",
    value: "basitbalogun234@gmail.com",
    color: "hover:text-blue-400"
  },
  {
    name: "WhatsApp",
    icon: SiWhatsapp,
    href: "https://wa.me/2349044071910?text=Hello%20Basit%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.",
    value: "+234 904 407 1910",
    color: "hover:text-green-400"
  }
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#pricing" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" }
];

const services = [
  "Web Development",
  "Mobile Applications", 
  "API Integration",
  "Workflow Automation",
  "Technical Consulting"
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 py-16 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <div className="text-3xl font-bold text-white mb-4">
                <span className="text-blue-400">Basit</span>
                <span className="text-white">Tech</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Delivering smart technical solutions with a modern edge. Specializing in web development, 
                automation, and innovative digital experiences.
              </p>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              {contactMethods.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={contact.name}
                    href={contact.href}
                    target={contact.href.includes('wa.me') ? '_blank' : '_self'}
                    rel={contact.href.includes('wa.me') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center space-x-3 text-slate-400 ${contact.color} transition-colors duration-300 text-sm group`}
                  >
                    <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{contact.value}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Fiverr Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-lg mb-6">Hire Me on Fiverr</h4>
            <div className="space-y-3">
              {fiverServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <a
                    key={service.title}
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 text-slate-400 ${service.color} transition-colors duration-300 text-sm group`}
                  >
                    <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{service.title}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Contact Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="glassmorphism rounded-xl p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h5 className="text-white font-medium mb-1">Ready to start your project?</h5>
              <p className="text-slate-400 text-sm">Let's discuss how I can help bring your ideas to life.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex space-x-6">
                <a
                  href="mailto:basitbalogun234@gmail.com?subject=Project%20Inquiry&body=Hello%20Basit%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you."
                  className="flex items-center space-x-2 text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Email Me</span>
                </a>
                <a
                  href="https://wa.me/2349044071910?text=Hello%20Basit%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-400 hover:text-green-400 transition-colors"
                >
                  <SiWhatsapp className="w-4 h-4" />
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <p className="text-slate-400 text-sm">
            © 2025 Basit Tech. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-slate-400">
            <button className="hover:text-blue-400 transition-colors">Privacy Policy</button>
            <button className="hover:text-blue-400 transition-colors">Terms of Service</button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}