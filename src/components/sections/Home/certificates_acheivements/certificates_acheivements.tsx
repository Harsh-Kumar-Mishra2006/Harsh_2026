// src/components/ui/CertificatesAchievements.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Trophy,
  Medal,
  Zap,
  Calendar,
  MapPin,
  Link as LinkIcon,
  Github,
  ExternalLink,
  Code2,
  Rocket,
  Cpu,
  Globe,
  CheckCircle2,
  Star,
  Target,
  TrendingUp,
  Clock,
  FileText,
} from "lucide-react";

const CertificatesAchievements: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Floating particles effect
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 3,
  }));

  // Hackathon Data
  const hackathons = [
    {
      id: "sih-2024",
      title: "Smart India Hackathon 2024",
      subtitle: "Internal Hackathon - College Level",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-yellow-600 to-orange-500",
      date: "September 2024",
      location: "Darbhanga College of Engineering",
      team: "Equinox Engineers",
      problem: "Assured Contract Farming Solutions in India",
      description: [
        "Participated in internal SIH with my team Equinox Engineers, working on a critical problem statement for Indian agriculture",
        "Developed innovative solutions for assured contract farming to protect farmers and buyers from market volatility",
        "Collaborated effectively as a first-time team, learning valuable technical and problem-solving skills",
        "Gained hands-on experience in rapid prototyping and presentation under strict time constraints",
      ],
      achievements: [
        "Team Collaboration Mastery",
        "Problem-Solving Excellence",
        "Technical Innovation",
      ],
      impact:
        "First major team hackathon experience that built foundation for future collaborations",
      links: {
        certificate: "#",
        project: "#",
      },
    },
    {
      id: "sih-2025",
      title: "Smart India Hackathon 2025",
      subtitle: "Internal Hackathon - College Level",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-yellow-600 to-orange-500",
      date: "September 2025",
      location: "Darbhanga College of Engineering",
      team: "Equinox Engineers",
      problem: "Algorithmic Design Tools",
      description: [
        "Presented researched solutions for algorithmic design tools, focusing on optimization and efficiency",
        "Applied data structures and algorithms knowledge to real-world problem solving",
        "Enhanced presentation and technical communication skills through rigorous mentoring sessions",
      ],
      achievements: [
        "Research Presentation",
        "Algorithmic Optimization",
        "Technical Communication",
      ],
      impact:
        "Deepened understanding of algorithm applications in real-world scenarios",
      links: {
        certificate: "#",
        project: "#",
      },
    },
  ];

  // Bootcamp Data - Enhanced with Drone Bootcamp details
  const bootcamps = [
    {
      id: "drone-bootcamp",
      title: "Drone & Allied Technology Bootcamp",
      subtitle: "Comprehensive Drone Technology Program",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-blue-600 to-cyan-500",
      date: "March 2024",
      location: "Darbhanga College of Engineering",
      duration: "1 Week Intensive Program",
      description: [
        "Immersive 1-week bootcamp covering comprehensive drone and UAV technology, from fundamental principles to advanced applications",
        "Learned about internal drone structure, assembly procedures, flight control systems, and programming interfaces",
        "Studied flight dynamics, stabilization algorithms, and autonomous navigation systems",
        "Gained hands-on experience with drone setup, calibration, and safety protocols",
        "Explored real-world applications in agriculture, surveillance, and emergency response",
      ],
      technicalModules: [
        "UAV Aerodynamics & Design",
        "Flight Controller Programming",
        "Sensor Integration (GPS, IMU, Cameras)",
        "Telemetry Systems",
        "Autonomous Flight Path Planning",
        "Safety & Regulatory Compliance",
      ],
      project: {
        title: "Mosquito Breeding Solution Using Drone Technology",
        description:
          "Presented a comprehensive PPT addressing mosquito-borne disease prevention through innovative drone applications",
        highlights: [
          "Proposed drone-based surveillance for stagnant water detection",
          "Designed targeted larvicide dispersal mechanism",
          "Integrated GIS mapping for breeding hotspot analysis",
          "Developed cost-effective solution for rural and urban areas",
        ],
      },
      skills: [
        "UAV Technology",
        "Flight Dynamics",
        "Sensor Integration",
        "Autonomous Systems",
        "Data Collection",
        "Aerial Surveillance",
      ],
      impact:
        "Gained cutting-edge knowledge in emerging drone technology with focus on social impact applications",
      links: {
        presentation: "#",
        certificate: "#",
      },
    },
    {
      id: "wot-bootcamp",
      title: "Website of Things (WOT) Initiative",
      subtitle: "Startup Development Program",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-600 to-pink-500",
      date: "January 2025 - Present",
      location: "Darbhanga College of Engineering",
      duration: "Ongoing",
      description: [
        "Working on innovative startup idea with team to democratize web presence for local businesses",
        "Developing low-cost, high-quality website solutions with advanced technical features",
        "Focusing on bridging the digital divide for small and medium local enterprises",
      ],
      features: [
        "Affordable pricing model for local businesses",
        "Modern tech stack implementation",
        "User-friendly content management",
        "Mobile-responsive designs",
        "SEO optimization",
        "Analytics integration",
      ],
      impact:
        "Aiming to empower 100+ local businesses with professional web presence",
      links: {
        project: "#",
      },
    },
  ];

  // Certifications & Open Source
  const certifications = [
    {
      id: "hacktoberfest-2025",
      title: "Hacktoberfest 2025",
      subtitle: "Level 1 Contributor Badge",
      icon: <Github className="w-6 h-6" />,
      color: "from-orange-600 to-red-500",
      date: "October 2025",
      duration: "1-31 October 2025",
      description: [
        "Contributed to 10+ international open-source repositories, collaborating with global maintainers",
        "Resolved critical UI/UX inconsistencies and complex JavaScript logic bugs across diverse projects",
        "Refactored React components and optimized core JavaScript for improved frontend reliability",
        "Demonstrated mastery of Software Development Lifecycle through successful PR management",
        "Enhanced project documentation and established clear code standards for future contributors",
      ],
      contributions: [
        "10+ Repositories Contributed",
        "UI/UX Bug Fixes",
        "JavaScript Optimization",
        "Documentation Enhancement",
        "Code Review Participation",
      ],
      technologies: ["React", "JavaScript", "TypeScript", "Node.js", "CSS"],
      impact:
        "Recognized with Level 1 Badge for consistent high-quality contributions to global developer ecosystem",
      links: {
        badge: "#",
        profile: "https://github.com/Harsh-Kumar-Mishra2006",
      },
    },
  ];

  // Research & Publications (from the internship application)
  const research = [
    {
      id: "research-highlights",
      title: "Research & System Optimization",
      subtitle: "Quantitative Impact Studies",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-600 to-emerald-500",
      date: "2024-2025",
      findings: [
        {
          metric: "API Call Reduction",
          value: "30%",
          description:
            "Using Redux Toolkit for global state management in E-commerce platform",
        },
        {
          metric: "Latency Reduction",
          value: "70%",
          description: "Redis cache-aside strategy in URL shortener service",
        },
        {
          metric: "Security Risk Mitigation",
          value: "95%",
          description: "NoSQL injection prevention through schema enforcement",
        },
        {
          metric: "Query Response Time",
          value: "30%",
          description: "MongoDB indexing optimization in E-learning platform",
        },
        {
          metric: "Server Storage Load",
          value: "60%",
          description: "Cloudinary integration for media handling",
        },
      ],
      links: {
        paper: "#",
      },
    },
  ];

  // Combine all items for filtering
  const allItems = [
    ...hackathons.map((h) => ({ ...h, type: "hackathon" })),
    ...bootcamps.map((b) => ({ ...b, type: "bootcamp" })),
    ...certifications.map((c) => ({ ...c, type: "certification" })),
    ...research.map((r) => ({ ...r, type: "research" })),
  ];

  const filteredItems =
    activeFilter === "all"
      ? allItems
      : allItems.filter((item) => item.type === activeFilter);

  return (
    <section
      id="certificates"
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Animated Background - Matching Skills page */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-600/20 to-orange-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [-50, 50, -50],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 70, 0],
            y: [0, -70, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-300/20"
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
            backgroundImage: `linear-gradient(to right, #f97316 1px, transparent 1px),
                            linear-gradient(to bottom, #f97316 1px, transparent 1px)`,
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
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/20 mb-4">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-300">
              Certifications & Achievements
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
            Milestones & Recognition
          </h2>
          <p className="text-gray-200 font-semibold text-lg md:text-xl max-w-3xl mx-auto">
            A showcase of hackathon participations, technical bootcamps, and
            open-source contributions
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">2x</div>
            <div className="text-gray-300 text-sm">SIH Participant</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
            <div className="text-gray-300 text-sm">Open Source Repos</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">5</div>
            <div className="text-gray-300 text-sm">Research Metrics</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
            <div className="text-gray-300 text-sm">Bootcamps</div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === "all"
                ? "bg-gradient-to-r from-yellow-600 to-orange-500 text-white shadow-lg shadow-orange-500/30"
                : "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:border-yellow-500/30 hover:text-white"
            }`}
          >
            All Achievements
          </button>
          <button
            onClick={() => setActiveFilter("hackathon")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
              activeFilter === "hackathon"
                ? "bg-gradient-to-r from-yellow-600 to-orange-500 text-white shadow-lg"
                : "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:border-yellow-500/30 hover:text-white"
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Hackathons</span>
          </button>
          <button
            onClick={() => setActiveFilter("bootcamp")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
              activeFilter === "bootcamp"
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                : "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:border-blue-500/30 hover:text-white"
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Bootcamps</span>
          </button>
          <button
            onClick={() => setActiveFilter("certification")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
              activeFilter === "certification"
                ? "bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-lg"
                : "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:border-orange-500/30 hover:text-white"
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Certifications</span>
          </button>
          <button
            onClick={() => setActiveFilter("research")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
              activeFilter === "research"
                ? "bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg"
                : "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:border-green-500/30 hover:text-white"
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Research</span>
          </button>
        </motion.div>

        {/* Achievements Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-r ${item.color}`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-lg">{item.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{item.date}</span>
                    </div>
                    {"location" in item && (
                      <div className="flex items-center space-x-2 text-gray-300">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Main Description */}
                  <div className="lg:col-span-2 space-y-4">
                    {"description" in item && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <FileText className="w-4 h-4 mr-2 text-yellow-400" />
                          Overview
                        </h4>
                        <ul className="space-y-2">
                          {item.description.map((desc, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <CheckCircle2 className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">
                                {desc}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Drone Bootcamp Specific - Technical Modules */}
                    {"technicalModules" in item && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Cpu className="w-4 h-4 mr-2 text-blue-400" />
                          Technical Modules Covered
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technicalModules.map((module, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs"
                            >
                              {module}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Project Highlight for Drone Bootcamp */}
                    {"project" in item && (
                      <div className="p-4 rounded-xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-cyan-500/20">
                        <h4 className="text-md font-semibold text-cyan-400 mb-2 flex items-center">
                          <Rocket className="w-4 h-4 mr-2" />
                          {item.project.title}
                        </h4>
                        <p className="text-gray-300 text-sm mb-2">
                          {item.project.description}
                        </p>
                        <ul className="space-y-1">
                          {item.project.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="flex items-start space-x-2 text-xs"
                            >
                              <Zap className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-400">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Research Metrics */}
                    {"findings" in item && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {item.findings.map((finding, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-lg bg-gray-800/30 border border-gray-700/50"
                          >
                            <div className="text-xl font-bold text-green-400">
                              {finding.value}
                            </div>
                            <div className="text-xs text-gray-400">
                              {finding.metric}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Sidebar - Achievements, Skills, Links */}
                  <div className="space-y-4">
                    {/* Achievements/Badges */}
                    {"achievements" in item && (
                      <div className="p-4 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50">
                        <h4 className="text-md font-semibold text-white mb-3 flex items-center">
                          <Medal className="w-4 h-4 mr-2 text-yellow-400" />
                          Key Achievements
                        </h4>
                        <div className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2"
                            >
                              <Star className="w-3 h-3 text-yellow-400" />
                              <span className="text-sm text-gray-300">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Contributions for Hacktoberfest */}
                    {"contributions" in item && (
                      <div className="p-4 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50">
                        <h4 className="text-md font-semibold text-white mb-3 flex items-center">
                          <Github className="w-4 h-4 mr-2 text-orange-400" />
                          Contributions
                        </h4>
                        <div className="space-y-2">
                          {item.contributions.map((contribution, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle2 className="w-3 h-3 text-green-400" />
                              <span className="text-sm text-gray-300">
                                {contribution}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Skills/Tags */}
                    {"skills" in item && (
                      <div className="p-4 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50">
                        <h4 className="text-md font-semibold text-white mb-3 flex items-center">
                          <Code2 className="w-4 h-4 mr-2 text-blue-400" />
                          Skills Gained
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies for Hacktoberfest */}
                    {"technologies" in item && (
                      <div className="p-4 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50">
                        <h4 className="text-md font-semibold text-white mb-3 flex items-center">
                          <Zap className="w-4 h-4 mr-2 text-purple-400" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Impact Statement */}
                    {"impact" in item && (
                      <div className="p-4 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50">
                        <h4 className="text-md font-semibold text-white mb-2 flex items-center">
                          <Target className="w-4 h-4 mr-2 text-green-400" />
                          Impact
                        </h4>
                        <p className="text-sm text-gray-400">{item.impact}</p>
                      </div>
                    )}

                    {/* Links */}
                    {"links" in item && (
                      <div className="flex space-x-2">
                        {Object.entries(item.links).map(
                          ([key, value]) =>
                            value !== "#" && (
                              <a
                                key={key}
                                href={value}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-3 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 text-gray-300 hover:text-white text-xs flex items-center justify-center space-x-1 transition-all"
                              >
                                <ExternalLink className="w-3 h-3" />
                                <span className="capitalize">{key}</span>
                              </a>
                            ),
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline/Additional Info */}
                {"duration" in item && (
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>Duration: {item.duration}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Featured Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Hackathon Feature */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/20">
            <Trophy className="w-8 h-8 text-yellow-400 mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">
              Hackathon Veteran
            </h4>
            <p className="text-sm text-gray-400">
              Two-time Smart India Hackathon participant, solving real-world
              problems in agriculture and algorithmic design.
            </p>
          </div>

          {/* Drone Tech Feature */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20">
            <Cpu className="w-8 h-8 text-blue-400 mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">
              Drone Technology
            </h4>
            <p className="text-sm text-gray-400">
              Completed intensive drone bootcamp with project on mosquito
              breeding solutions using UAV technology.
            </p>
          </div>

          {/* Open Source Feature */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20">
            <Github className="w-8 h-8 text-orange-400 mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">
              Open Source Contributor
            </h4>
            <p className="text-sm text-gray-400">
              Hacktoberfest 2025 Level 1 contributor with 10+ international
              repository contributions.
            </p>
          </div>
        </motion.div>

        {/* Research Impact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 p-8 rounded-3xl bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="p-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">
                  Research Impact Summary
                </h4>
                <p className="text-green-300">
                  Quantifiable improvements through system optimization
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-xs text-gray-400">
                  Security Risk Reduction
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">70%</div>
                <div className="text-xs text-gray-400">Latency Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">60%</div>
                <div className="text-xs text-gray-400">
                  Storage Optimization
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesAchievements;
