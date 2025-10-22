import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "React", level: 88 },
      { name: "TypeScript", level: 85 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "API Design", level: 88 }
    ]
  },
  {
    category: "Tools & Automation",
    skills: [
      { name: "n8n", level: 95 },
      { name: "Docker", level: 75 },
      { name: "Git", level: 88 },
      { name: "CI/CD", level: 80 }
    ]
  }
];

const techStack = [
  "JavaScript", "TypeScript", "React", "Node.js", "Express", "PostgreSQL", 
  "MongoDB", "n8n", "Docker", "AWS", "Git", "REST APIs", "GraphQL"
];

export default function AboutSection() {
  return (
    <section className="relative z-10 py-20" id="about">
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
            About <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="glassmorphism rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">My Mission</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              I'm a passionate full-stack developer specializing in creating innovative digital solutions 
              that bridge the gap between complex technical challenges and user-friendly experiences. 
              With expertise in modern web technologies and automation tools, I help businesses transform 
              their ideas into powerful, scalable applications.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              My approach combines cutting-edge technology with strategic thinking to deliver solutions 
              that not only meet current needs but also scale for future growth. Whether it's building 
              responsive web applications, designing robust APIs, or automating complex workflows with n8n, 
              I'm committed to excellence in every project.
            </p>
            
            {/* Tech Stack Badges */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-white">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30 transition-colors"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.category} className="glassmorphism rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4">{category.category}</h4>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut" 
                          }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}