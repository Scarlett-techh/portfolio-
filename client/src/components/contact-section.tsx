import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mkgbjkrk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      setIsSubmitted(true);
      toast({
        title: "Message Sent Successfully!",
        description: "I'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "basitbalogun234@gmail.com",
      href: "mailto:basitbalogun234@gmail.com?subject=Project%20Inquiry&body=Hello%20Basit%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you."
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+2349044071910",
      href: "https://wa.me/2349044071910?text=Hello%20Basit%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available Worldwide",
      href: null
    }
  ];

  return (
    <section className="relative z-10 py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get In <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-700 text-xl max-w-3xl mx-auto mb-8">
            Ready to bring your ideas to life? Let's discuss your project and how I can help you achieve your goals.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-slate-300 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">Send a Message</h3>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Message Sent!</h4>
                    <p className="text-slate-700">Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-white/50 border-slate-300 text-slate-900 placeholder-slate-500 focus:border-blue-400 transition-all duration-300"
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-white/50 border-slate-300 text-slate-900 placeholder-slate-500 focus:border-blue-400 transition-all duration-300"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-white/50 border-slate-300 text-slate-900 placeholder-slate-500 focus:border-blue-400 transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="bg-white/50 border-slate-300 text-slate-900 placeholder-slate-500 focus:border-blue-400 transition-all duration-300 resize-none"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 border-0"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm border border-slate-300 shadow-lg rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Let's Connect</h3>
              <p className="text-slate-700 mb-8 leading-relaxed">
                I'm always excited to work on new projects and help bring innovative ideas to life. 
                Whether you need a complete web application, automation solutions, or technical consulting, 
                I'm here to help.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.includes('wa.me') ? '_blank' : '_self'}
                            rel={info.href.includes('wa.me') ? 'noopener noreferrer' : undefined}
                            className="text-slate-900 font-medium hover:text-blue-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-slate-900 font-medium">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Response Time */}
              <div className="mt-8 p-4 bg-white/50 backdrop-blur-sm border border-slate-300 rounded-xl">
                <p className="text-blue-400 font-medium text-sm mb-1">Response Time</p>
                <p className="text-slate-900 text-sm">Usually within 24 hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
