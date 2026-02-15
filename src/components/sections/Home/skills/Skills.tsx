// src/components/ui/Skills.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Palette,
  Server,
  Database,
  GitBranch,
  Cpu,
  Globe,
  Shield,
  Zap,
  Sparkles,
  Layers,
  Box,
  Terminal,
  MonitorCog,
  Wrench,
  BookOpen,
  Award,
  CheckCircle2,
} from "lucide-react";

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Floating particles effect
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 5 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 2,
  }));

  // Skills data from resume
  const skillCategories = [
    {
      id: "languages",
      name: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-400",
      skills: [
        { name: "C", level: 85, icon: <Terminal className="w-4 h-4" /> },
        { name: "C++", level: 85, icon: <Terminal className="w-4 h-4" /> },
        { name: "JavaScript", level: 90, icon: <Code2 className="w-4 h-4" /> },
        { name: "TypeScript", level: 85, icon: <Code2 className="w-4 h-4" /> },
      ],
    },
    {
      id: "frontend",
      name: "Frontend Development",
      icon: <Palette className="w-6 h-6" />,
      color: "from-purple-500 to-pink-400",
      skills: [
        { name: "React.js", level: 92, icon: <Globe className="w-4 h-4" /> },
        { name: "Next.js", level: 88, icon: <Zap className="w-4 h-4" /> },
        {
          name: "JavaScript (ES6+)",
          level: 90,
          icon: <Code2 className="w-4 h-4" />,
        },
        { name: "TypeScript", level: 85, icon: <Code2 className="w-4 h-4" /> },
        {
          name: "HTML5 & CSS3",
          level: 90,
          icon: <Layers className="w-4 h-4" />,
        },
        { name: "Redux Toolkit", level: 88, icon: <Box className="w-4 h-4" /> },
        {
          name: "Context API",
          level: 85,
          icon: <GitBranch className="w-4 h-4" />,
        },
        { name: "React Query", level: 82, icon: <Zap className="w-4 h-4" /> },
      ],
    },
    {
      id: "backend",
      name: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-400",
      skills: [
        { name: "Node.js", level: 88, icon: <Server className="w-4 h-4" /> },
        { name: "Express.js", level: 90, icon: <Server className="w-4 h-4" /> },
        { name: "REST APIs", level: 92, icon: <Globe className="w-4 h-4" /> },
        { name: "Socket.io", level: 85, icon: <Zap className="w-4 h-4" /> },
        {
          name: "JWT & Bcrypt",
          level: 88,
          icon: <Shield className="w-4 h-4" />,
        },
        { name: "Helmet.js", level: 85, icon: <Shield className="w-4 h-4" /> },
      ],
    },
    {
      id: "database",
      name: "Databases",
      icon: <Database className="w-6 h-6" />,
      color: "from-orange-500 to-yellow-400",
      skills: [
        { name: "MongoDB", level: 88, icon: <Database className="w-4 h-4" /> },
        { name: "MySQL", level: 85, icon: <Database className="w-4 h-4" /> },
        {
          name: "PostgreSQL",
          level: 82,
          icon: <Database className="w-4 h-4" />,
        },
        { name: "Redis", level: 80, icon: <Zap className="w-4 h-4" /> },
      ],
    },
    {
      id: "devops",
      name: "Tools & DevOps",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-gray-600 to-gray-400",
      skills: [
        {
          name: "Git & GitHub",
          level: 92,
          icon: <GitBranch className="w-4 h-4" />,
        },
        { name: "Docker", level: 78, icon: <Box className="w-4 h-4" /> },
        { name: "Vercel", level: 90, icon: <Zap className="w-4 h-4" /> },
        { name: "Render", level: 85, icon: <Server className="w-4 h-4" /> },
        { name: "Cloudinary", level: 88, icon: <Globe className="w-4 h-4" /> },
        { name: "Postman", level: 90, icon: <Terminal className="w-4 h-4" /> },
      ],
    },
    {
      id: "core",
      name: "Core CSE",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-400",
      skills: [
        {
          name: "Data Structures",
          level: 85,
          icon: <Box className="w-4 h-4" />,
        },
        { name: "Algorithms", level: 85, icon: <Cpu className="w-4 h-4" /> },
        { name: "OOP", level: 88, icon: <Code2 className="w-4 h-4" /> },
        {
          name: "Cyber Security",
          level: 75,
          icon: <Shield className="w-4 h-4" />,
        },
        {
          name: "Operating Systems",
          level: 88,
          icon: <MonitorCog className="w-4 h-4" />,
        },
        {
          name: "DataBase Management Systems",
          level: 80,
          icon: <Database className="w-4 h-4" />,
        },
        {
          name: "Computer Organization & Architecture",
          level: 88,
          icon: <Cpu className="w-4 h-4" />,
        },
      ],
    },
  ];

  // Featured skills highlights
  const featuredSkills = [
    {
      name: "React.js",
      projects: "Eulearn, Krishnova",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      name: "Node.js",
      projects: "Tarang Chat, URLShortner",
      icon: <Server className="w-4 h-4" />,
    },
    {
      name: "Socket.io",
      projects: "Tarang Chat",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      name: "MongoDB",
      projects: "All Projects",
      icon: <Database className="w-4 h-4" />,
    },
    {
      name: "Redis",
      projects: "URLShortner",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      name: "TypeScript",
      projects: "Krishnova FPC",
      icon: <Code2 className="w-4 h-4" />,
    },
  ];

  // Filter skills by category
  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="relative py-16 md:py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-900" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [-50, 50, -50],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full blur-3xl"
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
              rotate: [0, 180, 360],
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
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                            linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300">
              Technical Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-200 font-semibold text-lg md:text-xl max-w-3xl mx-auto">
            A comprehensive overview of my technical toolkit and proficiency
            levels
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                : "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:border-blue-500/30 hover:text-white"
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:border-blue-500/30 hover:text-white"
              }`}
            >
              <span className="w-4 h-4">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-8">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {category.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {category.skills.length} technologies mastered
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative"
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      <div className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <div
                              className={`p-1.5 rounded-md bg-gradient-to-r ${category.color} bg-opacity-20`}
                            >
                              {skill.icon}
                            </div>
                            <span className="text-gray-200 font-medium">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-cyan-400 text-sm font-semibold">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-2 rounded-full bg-gray-700/50 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: index * 0.1 + 0.2,
                            }}
                            viewport={{ once: true }}
                            className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                          />
                        </div>

                        {/* Hover Details */}
                        <AnimatePresence>
                          {hoveredSkill === skill.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full px-3 py-1 rounded-lg bg-gray-800 border border-cyan-500/30 text-xs text-cyan-400 whitespace-nowrap"
                            >
                              Proficiency: {skill.level}%
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Featured Skills Section - Skills used in projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-600 to-orange-500">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Featured Skills in Action
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {skill.name}
                      </h4>
                      <p className="text-gray-400 text-sm mt-1">
                        Used in: {skill.projects}
                      </p>
                      <div className="flex items-center space-x-1 mt-2 text-cyan-400 text-xs">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Production Ready</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Learning & Growth Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Open Source Contributions */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500">
                <GitBranch className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white">Open Source</h4>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Contributed to 10+ international open-source repositories during
              Hacktoberfest 2025, collaborating with global maintainers to
              resolve UI/UX inconsistencies and optimize JavaScript logic.
            </p>
            <div className="mt-3 flex items-center space-x-2 text-xs">
              <span className="px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                Level 1 Contributor
              </span>
              <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                10+ Repos
              </span>
            </div>
          </div>

          {/* Continuous Learning */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-500">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white">
                Continuous Learning
              </h4>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Currently specializing in Cyber Security at Darbhanga College of
              Engineering, while mastering modern web technologies through
              hands-on project development.
            </p>
            <div className="mt-3 flex items-center space-x-2 text-xs">
              <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                B.Tech CSE
              </span>
              <span className="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                CGPA: 7.75
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
