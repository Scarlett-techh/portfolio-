import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Filter } from "lucide-react";
import { useState, useEffect } from "react";

// E-Commerce Platform Images
import nnnn from "@assets/nnnn.jpg";
import nnn8 from "@assets/nnn8.jpg";
import nnn9 from "@assets/nnn9.jpg";
import nnn10 from "@assets/nnn10.jpg";

// Workflow Automation Images
import screenshot6 from "@assets/Screenshot (6)_1749537672989.png";
import nnn4 from "@assets/nnn4.jpg";
import nnn5 from "@assets/nnn5.jpg";
import nnn6 from "@assets/nnn6.jpg";
import nnn7 from "@assets/nnn7.jpg";
import screenshot73 from "@assets/Screenshot (73)_1749537615387.png";
import screenshot69 from "@assets/Screenshot (69)_1749538542258.png";
import screenshot70 from "@assets/Screenshot (70)_1749538542260.png";
import screenshot79 from "@assets/Screenshot (79)_1749537631731.png";

// Real Estate Dashboard Images
import real1 from "@assets/real1_1749538448127.jfif";
import realImg from "@assets/Real_1749538448129.jfif";
import screenshot81 from "@assets/Screenshot (81)_1749537502372.png";
import realEstate from "@assets/8CB556D3-0BB5-42AF-A9DA-D05BB298AE20_1749537523172.jpeg";

// Payment Gateway Images
import paymentImg from "@assets/IMG-20250423-WA0054_1749538629994.jpg";
import intricateImg from "@assets/Intricate a_1749538629996.jpg";

// Web and Mobile App Development Images
import webApp1 from "@assets/IMG-20250323-WA0044_1749539607650.jpg";
import webApp2 from "@assets/IMG-20250323-WA0053_1749539607654.jpg";
import screenshot1 from "@assets/Screenshot (1)_1749539620914.png";
import screenshot2 from "@assets/Screenshot (2)_1749539620915.png";
import screenshot4 from "@assets/Screenshot (4)_1749539636171.png";
import screenshot8 from "@assets/Screenshot (8)_1749539655547.png";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Apps",
    description:
      "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    coverImage: nnnn,
    images: [nnnn, nnn9, nnn10, nnn8],
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Workflow Automation Tool",
    category: "Automation",
    description:
      "Custom n8n workflows for business process automation. Integrated with multiple APIs to streamline operations and reduce manual tasks.",
    coverImage: screenshot6,
    images: [screenshot6, nnn4, nnn5, nnn6, nnn7],
    technologies: ["n8n", "Node.js", "REST APIs", "Webhooks"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Real Estate Dashboard",
    category: "Web Apps",
    description:
      "Property management dashboard with advanced search, analytics, and CRM features. Built with modern React and TypeScript.",
    coverImage: real1,
    images: [real1, realImg, screenshot81, realEstate],
    technologies: ["React", "TypeScript", "Chart.js", "Express"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Payment Gateway API",
    category: "API Integration",
    description:
      "Secure payment processing API with multiple gateway support. Includes comprehensive documentation and SDK for easy integration.",
    coverImage: paymentImg,
    images: [paymentImg, intricateImg],
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Web and Mobile App Development",
    category: "Web Apps",
    description:
      "Custom web and mobile app development with modern frameworks and technologies. Responsive design, performance optimization, and user-centric approach.",
    coverImage: webApp1,
    images: [
      webApp1,
      webApp2,
      screenshot1,
      screenshot2,
      screenshot4,
      screenshot8,
      screenshot73,
      screenshot69,
      screenshot70,
      screenshot79,
    ],
    technologies: ["React", "React Native", "Node.js", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const categories = ["All", "Web Apps", "Automation", "API Integration"];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const openLightbox = (projectId: number, imageIndex: number = 0) => {
    const project = projects.find((p) => p.id === projectId);
    if (!project || project.images.length === 0) return;

    setSelectedProject(projectId);
    setSelectedImageIndex(imageIndex);
    setIsLightboxOpen(true);
    setImageLoading(true);
    setImageError(false);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedProject(null);
    setSelectedImageIndex(0);
    setImageLoading(false);
    setImageError(false);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedProject) return;
    const project = projects.find((p) => p.id === selectedProject);
    if (!project) return;

    setImageLoading(true);
    setImageError(false);

    if (direction === "prev") {
      setSelectedImageIndex((prev) =>
        prev > 0 ? prev - 1 : project.images.length - 1,
      );
    } else {
      setSelectedImageIndex((prev) =>
        prev < project.images.length - 1 ? prev + 1 : 0,
      );
    }
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      switch (event.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          navigateImage("prev");
          break;
        case "ArrowRight":
          navigateImage("next");
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <section className="relative z-10 py-20" id="portfolio">
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
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto mb-8">
            Explore my latest projects showcasing modern web development,
            automation solutions, and API integrations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`glassmorphism transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-blue-400 text-white border-0"
                  : "text-slate-300 hover:text-white hover:bg-white/20"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl glassmorphism hover:bg-white/15 transition-all duration-300"
            >
              {/* Project Image */}
              <div
                className={`relative overflow-hidden aspect-video ${project.images.length > 0 ? "cursor-pointer" : ""}`}
                onClick={
                  project.images.length > 0
                    ? () => openLightbox(project.id)
                    : undefined
                }
              >
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 portfolio-image"
                />
                {/* Image Count Badge */}
                {project.images.length > 0 && (
                  <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                    {project.images.length} images
                  </div>
                )}
                {/* Click to View Badge - Subtle overlay */}
                {project.images.length > 0 && (
                  <div className="absolute top-2 left-2 bg-black/40 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to view gallery
                  </div>
                )}
                {/* Minimal Overlay - Only bottom section */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-24">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <Badge className="bg-black/60 backdrop-blur-sm text-white border-0">
                      {project.category}
                    </Badge>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/20 text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle external link
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/20 text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle github link
                        }}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-slate-700/50 text-slate-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">
            Interested in working together on your next project?
          </p>
          <Button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 border-0"
          >
            Start Your Project
          </Button>
        </motion.div>

        {/* Lightbox Modal */}
        {isLightboxOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Project Title */}
              <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                <h3 className="font-semibold text-sm">
                  {(() => {
                    const project = projects.find(
                      (p) => p.id === selectedProject,
                    );
                    return project?.title || "";
                  })()}
                </h3>
              </div>

              {/* Keyboard Instructions */}
              <div className="absolute top-4 right-16 z-10 bg-black/40 backdrop-blur-sm text-white px-3 py-2 rounded-full text-xs opacity-70">
                Use ← → keys or click to navigate
              </div>

              {(() => {
                const project = projects.find((p) => p.id === selectedProject);
                if (!project || project.images.length === 0) return null;

                return (
                  <>
                    {/* Loading Spinner */}
                    {imageLoading && (
                      <div className="flex items-center justify-center h-[50vh]">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
                      </div>
                    )}

                    {/* Error State */}
                    {imageError && (
                      <div className="flex items-center justify-center h-[50vh] text-white">
                        <div className="text-center">
                          <p className="text-lg mb-2">Failed to load image</p>
                          <button
                            onClick={() => {
                              setImageError(false);
                              setImageLoading(true);
                            }}
                            className="text-white hover:text-gray-300 underline"
                          >
                            Try again
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Main Image - Ultra HD Quality */}
                    {!imageError && (
                      <motion.img
                        key={`${selectedProject}-${selectedImageIndex}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{
                          opacity: imageLoading ? 0 : 1,
                          scale: imageLoading ? 0.95 : 1,
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        src={project.images[selectedImageIndex]}
                        alt={`${project.title} - Image ${selectedImageIndex + 1}`}
                        className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl portfolio-image"
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        style={{
                          display: imageLoading ? "none" : "block",
                        }}
                      />
                    )}

                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={() => navigateImage("prev")}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => navigateImage("next")}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>

                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium">
                          {selectedImageIndex + 1} / {project.images.length}
                        </div>

                        {/* Thumbnail Navigation */}
                        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-md overflow-x-auto pb-2">
                          {project.images.map((image, index) => (
                            <button
                              key={index}
                              onClick={() => setSelectedImageIndex(index)}
                              className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                                index === selectedImageIndex
                                  ? "border-white scale-110 shadow-lg"
                                  : "border-white/30 hover:border-white/60"
                              }`}
                            >
                              <img
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover portfolio-image"
                              />
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
