// src/components/ui/About.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  Sparkles,
  Award,
  Globe,
  Users,
  Cpu,
  Database,
  Server,
  Zap,
} from "lucide-react";
import EducationSection from "./EducationSection";

const About: React.FC = () => {
  // Floating particles effect
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  // Skills data with proper icons
  const skills = [
    {
      name: "React.js",
      level: 90,
      icon: <Code className="w-4 h-4" />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "TypeScript",
      level: 85,
      icon: <Cpu className="w-4 h-4" />,
      color: "from-blue-600 to-blue-400",
    },
    {
      name: "Node.js",
      level: 80,
      icon: <Server className="w-4 h-4" />,
      color: "from-green-500 to-emerald-400",
    },
    {
      name: "Express.js",
      level: 75,
      icon: <Zap className="w-4 h-4" />,
      color: "from-gray-600 to-gray-400",
    },
    {
      name: "MySQL",
      level: 88,
      icon: <Database className="w-4 h-4" />,
      color: "from-orange-500 to-yellow-400",
    },
    {
      name: "MongoDB",
      level: 78,
      icon: <Database className="w-4 h-4" />,
      color: "from-green-600 to-green-400",
    },
  ];

  // Education timeline
  const education = [
    {
      year: "2023 - Present",
      degree: "Bachelor of Technology in Cyber Security Engineering",
      institution: "Darbhanga College of Engineering",
      board: "Bihar Engineering University",
      description:
        "Third Year BTECH Student in Darbhanga College of Engineering,Branch Computer Science Engineering Specialized in Cyber Security",
    },
    {
      year: "2021 - 2023",
      degree: "12th Board",
      institution: "Saraswati Vidya Mandir,PuraniGanj,Munger",
      board: "Central Board of Secondary Education(CBSE)",
      description:
        "Science Stream with Physics, Chemistry, and Mathematics as Major subjects",
    },
    {
      year: "2020 - 2021",
      degree: "10th Board",
      institution: "Saraswati Vidya Mandir,PuraniGanj,Munger",
      board: "Central Board of Secondary Education(CBSE)",
      description: "Completed 10th Board with 84% marks",
    },
  ];

  // Achievements data
  const achievements = [
    {
      title: "Smart India Hackathon",
      description: "Participant 202",
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: "Open Source Contributor",
      description: "5+ Repositories",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: "Certified Developer",
      description: "AWS & Google Certifications",
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: "Hackathon Winner",
      description: "2x Hackathon Champion",
      icon: <Briefcase className="w-5 h-5" />,
    },
  ];

  return (
    <section id="about" className="relative py-16 md:py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-900" />

        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [-50, 50, -50],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-cyan-300/30"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                            linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Title - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent mb-4">
            My Journey & Education
          </h2>
          <p className="text-gray-200 font-semibold text-lg md:text-xl max-w-3xl mx-auto">
            Passionate developer crafting exceptional digital experiences with
            modern technologies
          </p>
        </motion.div>

        {/* About Me Card - Full Width Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full mb-12"
        >
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex flex-row md:flex-row items-start md:items-center gap-6 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/20">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Harsh Kumar Mishra
                </h3>
                <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-semibold">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Top Row - Description */}
              <div className="grid gap-8">
                <div className="space-y-4">
                  <p className="text-gray-300 text-lg">
                    I'm a passionate Full Stack Developer with a strong
                    foundation in modern web technologies. My journey in
                    programming began with curiosity about how digital
                    experiences are crafted, which evolved into a deep love for
                    creating elegant solutions to complex problems.
                  </p>
                  <p className="text-gray-300 text-lg">
                    I believe in writing clean, maintainable code and creating
                    intuitive user experiences. When I'm not coding, you'll find
                    me exploring new technologies, contributing to open-source
                    projects, or sharing knowledge with the developer community.
                  </p>
                </div>
                <div>{/* Empty div to maintain grid structure */}</div>
              </div>

              {/* Bottom Row - Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 text-center hover:opacity-50 hover:scale-105 hover:brightness-105">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    1+
                  </div>
                  <div className="text-gray-300 font-medium">
                    Years Experience
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 text-center hover:opacity-150 hover:scale-105 hover:brightness-105">
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    4+
                  </div>
                  <div className="text-gray-300 font-medium">Live Projects</div>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 text-center hover:opacity-50 hover:scale-105 hover:brightness-105">
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    10+
                  </div>
                  <div className="text-gray-300 font-medium">Technologies</div>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 backdrop-blur-sm border border-orange-500/20 text-center hover:opacity-50 hover:scale-105 hover:brightness-105">
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    2+
                  </div>
                  <div className="text-gray-300 font-medium">Hackathons</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two Column Layout for Education & Achievements */}
        <div className=" gap-16">
          <h2 className="text-4xl text-center md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Educational Background
          </h2>
          <EducationSection />
        </div>
      </div>
    </section>
  );
};

export default About;
