// src/components/ui/Projects.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Code,
  Sparkles,
  Server,
  Globe,
  Lock,
  Zap,
  ChevronRight,
  Star,
  GitFork,
  Users,
  Cpu,
  Database,
  Cloud,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  Link as LinkIcon,
  Image as ImageIcon,
  X,
  Maximize2,
} from "lucide-react";

interface ProjectImage {
  url: string;
  caption: string;
}

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  longDescription?: string[];
  images: ProjectImage[];
  technologies: {
    name: string;
    icon: React.ReactNode;
    color: string;
  }[];
  features: string[];
  challenges?: string[];
  solutions?: string[];
  liveLink: string;
  githubLink: string;
  category: "ecommerce" | "education" | "communication" | "tool";
  stats?: {
    stars?: number;
    forks?: number;
    contributors?: number;
  };
  duration?: string;
  role?: string;
  highlights?: string[];
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    caption: string;
  } | null>(null);

  // Floating particles effect
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  // Projects data
  const projects: Project[] = [
    {
      id: "krishnaova-fpc",
      title: "Krishnaova FPC E-commerce",
      shortDescription:
        "Modern e-commerce platform for Makhana products with serverless architecture",
      fullDescription:
        "A fully functional e-commerce website developed for Krishnaova FPC, featuring a modern React-based frontend with serverless integration for order management.",
      longDescription: [
        "Developed and deployed a production-ready e-commerce platform using React and TypeScript, focusing on creating 50+ reusable UI components that ensure consistency across the application.",
        "Engineered custom React hooks for complex state management, implementing Redux Toolkit to optimize data flow and reduce redundant API calls by 30%, significantly improving server response handling.",
        "Created an innovative serverless integration with Google Sheets API to handle 100% of order data and customer inquiries, eliminating infrastructure overhead while maintaining data reliability.",
        "Designed a secure backend routing system that efficiently manages both bulk B2B inquiries and direct-to-consumer transactions, ensuring smooth business operations.",
      ],
      images: [
        {
          url: "/projects/krishnaova-1.jpg",
          caption: "Homepage - Modern e-commerce interface",
        },
        {
          url: "/projects/krishnaova-2.jpg",
          caption: "Product listing with filters",
        },
        {
          url: "/projects/krishnaova-3.jpg",
          caption: "Shopping cart and checkout flow",
        },
      ],
      technologies: [
        {
          name: "React",
          icon: <Code className="w-3 h-3" />,
          color: "from-blue-500 to-cyan-400",
        },
        {
          name: "TypeScript",
          icon: <Cpu className="w-3 h-3" />,
          color: "from-blue-600 to-blue-400",
        },
        {
          name: "Redux Toolkit",
          icon: <Database className="w-3 h-3" />,
          color: "from-purple-500 to-pink-400",
        },
        {
          name: "Google Sheets API",
          icon: <Cloud className="w-3 h-3" />,
          color: "from-green-500 to-emerald-400",
        },
        {
          name: "Tailwind CSS",
          icon: <Sparkles className="w-3 h-3" />,
          color: "from-cyan-500 to-blue-400",
        },
      ],
      features: [
        "50+ reusable UI components built with React and TypeScript",
        "Serverless order management system using Google Sheets API",
        "Custom hooks for optimized data fetching and caching",
        "Responsive design with mobile-first approach",
        "Secure B2B and D2C transaction handling",
        "Real-time inventory updates",
      ],
      challenges: [
        "Integrating e-commerce functionality without a traditional backend",
        "Managing complex state across multiple product categories",
        "Handling concurrent user sessions during flash sales",
      ],
      solutions: [
        "Implemented serverless architecture using Google Sheets as a database",
        "Utilized Redux Toolkit with optimized selectors for efficient state management",
        "Built custom rate limiting and request queuing system",
      ],
      liveLink: "https://www.krishanova.in",
      githubLink: "https://github.com/Harsh-Kumar-Mishra2006/KRISHNOVA_FPC",
      category: "ecommerce",
      stats: {
        stars: 12,
        forks: 4,
        contributors: 1,
      },
      duration: "June 2025 - July 2025",
      role: "Lead Frontend Developer",
      highlights: [
        "Reduced API calls by 30% through optimized state management",
        "Achieved 95+ Lighthouse performance score",
        "Implemented zero-cost serverless infrastructure",
      ],
    },
    {
      id: "edulearn",
      title: "EduLearn E-learning Platform",
      shortDescription:
        "Comprehensive MERN stack learning platform with course management and secure payments",
      fullDescription:
        "A feature-rich e-learning platform built with the MERN stack, offering dynamic course management, secure authentication, and integrated payment processing.",
      longDescription: [
        "Built a scalable MERN stack application featuring comprehensive course management, secure user authentication with JWT, and integrated payment processing using modern payment gateways.",
        "Optimized educational content delivery by implementing Cloudinary SDK for media management, achieving sub-2-second load times for media-heavy pages while reducing server storage load by 60%.",
        "Engineered efficient database schemas with MongoDB, implementing strategic indexing that improved query response times by 30% for course catalogs and user progress tracking.",
        "Developed an intuitive admin panel for course creation, teacher management, and student enrollment tracking.",
      ],
      images: [
        {
          url: "/projects/edulearn-1.jpg",
          caption: "Course dashboard",
        },
        {
          url: "/projects/edulearn-2.jpg",
          caption: "Video lesson player",
        },
        {
          url: "/projects/edulearn-3.jpg",
          caption: "Admin panel interface",
        },
      ],
      technologies: [
        {
          name: "MongoDB",
          icon: <Database className="w-3 h-3" />,
          color: "from-green-600 to-green-400",
        },
        {
          name: "Express.js",
          icon: <Server className="w-3 h-3" />,
          color: "from-gray-600 to-gray-400",
        },
        {
          name: "React",
          icon: <Code className="w-3 h-3" />,
          color: "from-blue-500 to-cyan-400",
        },
        {
          name: "Node.js",
          icon: <Zap className="w-3 h-3" />,
          color: "from-green-500 to-emerald-400",
        },
        {
          name: "Cloudinary",
          icon: <Cloud className="w-3 h-3" />,
          color: "from-blue-400 to-indigo-400",
        },
        {
          name: "JWT",
          icon: <Lock className="w-3 h-3" />,
          color: "from-red-500 to-pink-400",
        },
      ],
      features: [
        "Secure JWT-based authentication with role-based access control",
        "Cloudinary integration for optimized media delivery",
        "Interactive course player with progress tracking",
        "Admin dashboard for course and user management",
        "Payment gateway integration for course enrollment",
        "Automated email notifications for course updates",
      ],
      challenges: [
        "Handling concurrent video streaming for multiple users",
        "Implementing secure payment processing",
        "Managing complex user-course relationships",
      ],
      solutions: [
        "Utilized MongoDB GridFS for efficient video chunking",
        "Integrated Stripe with webhook verification",
        "Designed optimized database schema with proper indexing",
      ],
      liveLink: "https://edulearn-93zy.onrender.com",
      githubLink: "https://github.com/Harsh-Kumar-Mishra2006/Edulearn",
      category: "education",
      stats: {
        stars: 25,
        forks: 8,
        contributors: 2,
      },
      duration: "November 2025 - February 2026",
      role: "Full Stack Developer",
      highlights: [
        "60% reduction in server storage load",
        "30% faster query response times",
        "99.9% uptime during peak usage",
      ],
    },
    {
      id: "tarang-chat",
      title: "Tarang Chat Application",
      shortDescription:
        "Real-time communication platform with Socket.io and optimized message delivery",
      fullDescription:
        "A high-performance real-time chat application built with Socket.io and Node.js, featuring optimized message delivery and efficient data management.",
      longDescription: [
        "Architectured a robust real-time communication engine using Socket.io and Node.js, successfully supporting thousands of concurrent user sessions with a 99.9% message delivery rate.",
        "Optimized chat history retrieval by implementing Mongoose lean queries and strategic database indexing, reducing initial chat load times by 35% through a sophisticated 50-message pagination system.",
        "Implemented strict server-side validation with a 2,000-character message limit, preventing memory overflow and achieving a 25% reduction in server heap usage during peak traffic periods.",
        "Enhanced user experience with real-time typing indicators, read receipts, and online/offline status tracking.",
      ],
      images: [
        {
          url: "/projects/tarang-1.jpg",
          caption: "Chat interface",
        },
        {
          url: "/projects/tarang-2.jpg",
          caption: "Real-time messaging",
        },
        {
          url: "/projects/tarang-3.jpg",
          caption: "User presence system",
        },
      ],
      technologies: [
        {
          name: "Socket.io",
          icon: <Globe className="w-3 h-3" />,
          color: "from-gray-700 to-gray-500",
        },
        {
          name: "Node.js",
          icon: <Zap className="w-3 h-3" />,
          color: "from-green-500 to-emerald-400",
        },
        {
          name: "MongoDB",
          icon: <Database className="w-3 h-3" />,
          color: "from-green-600 to-green-400",
        },
        {
          name: "React",
          icon: <Code className="w-3 h-3" />,
          color: "from-blue-500 to-cyan-400",
        },
        {
          name: "Express",
          icon: <Server className="w-3 h-3" />,
          color: "from-gray-600 to-gray-400",
        },
      ],
      features: [
        "Real-time bidirectional communication",
        "Message pagination with 50 messages per load",
        "Typing indicators and read receipts",
        "User presence system (online/offline)",
        "Message history with search functionality",
        "End-to-end message encryption",
      ],
      challenges: [
        "Maintaining connection stability under load",
        "Efficient message broadcasting to multiple rooms",
        "Preventing memory leaks during peak usage",
      ],
      solutions: [
        "Implemented connection pooling and heartbeat mechanism",
        "Used Redis for pub/sub across multiple server instances",
        "Applied strict message size limits and validation",
      ],
      liveLink: "https://chatapp-frontend-79jv.onrender.com",
      githubLink: "https://github.com/Harsh-Kumar-Mishra2006/Chatapp-Frontend",
      category: "communication",
      stats: {
        stars: 18,
        forks: 6,
        contributors: 1,
      },
      duration: "October 2025 - December 2025",
      role: "Lead Backend Developer",
      highlights: [
        "99.9% message delivery reliability",
        "35% faster chat load times",
        "25% reduction in server memory usage",
      ],
    },
    {
      id: "url-shortener",
      title: "URL Shortener Service",
      shortDescription:
        "High-performance URL shortening service with Redis caching and MongoDB persistence",
      fullDescription:
        "A scalable URL shortening service leveraging Redis caching for lightning-fast redirects and MongoDB for reliable data persistence.",
      longDescription: [
        "Engineered a high-throughput MERN-Stack URL shortening service using Node.js and Redis, achieving a 70% reduction in redirection latency by implementing an intelligent cache-aside strategy for frequently accessed URLs.",
        "Leveraged MongoDB for persistent storage with strategic indexing, while utilizing Redis for in-memory caching to support a system capable of handling 100+ requests per minute with O(1) lookup efficiency.",
        "Built a robust validation layer using Joi and Validator.js, reducing malformed data entries and potential NoSQL injection risks by 95% through strict schema enforcement and input sanitization.",
        "Implemented analytics tracking for each shortened URL, providing insights into click rates, geographic distribution, and referrer sources.",
      ],
      images: [
        {
          url: "/projects/urlshortener-1.jpg",
          caption: "URL shortening interface",
        },
        {
          url: "/projects/urlshortener-2.jpg",
          caption: "Analytics dashboard",
        },
        {
          url: "/projects/urlshortener-3.jpg",
          caption: "Link management",
        },
      ],
      technologies: [
        {
          name: "Node.js",
          icon: <Zap className="w-3 h-3" />,
          color: "from-green-500 to-emerald-400",
        },
        {
          name: "Redis",
          icon: <Database className="w-3 h-3" />,
          color: "from-red-500 to-red-400",
        },
        {
          name: "MongoDB",
          icon: <Database className="w-3 h-3" />,
          color: "from-green-600 to-green-400",
        },
        {
          name: "Express",
          icon: <Server className="w-3 h-3" />,
          color: "from-gray-600 to-gray-400",
        },
        {
          name: "React",
          icon: <Code className="w-3 h-3" />,
          color: "from-blue-500 to-cyan-400",
        },
      ],
      features: [
        "Custom alias support for shortened URLs",
        "Redis caching for instant redirects",
        "Comprehensive click analytics",
        "QR code generation for each URL",
        "Link expiration and management",
        "RESTful API for programmatic access",
      ],
      challenges: [
        "Maintaining cache consistency across distributed systems",
        "Preventing URL injection attacks",
        "Handling high concurrency for popular links",
      ],
      solutions: [
        "Implemented cache-aside pattern with TTL",
        "Strict input validation and sanitization",
        "Rate limiting and request queuing",
      ],
      liveLink: "https://urlshortner-frontend-lkyq.onrender.com",
      githubLink:
        "https://github.com/Harsh-Kumar-Mishra2006/URLShortner-frontend",
      category: "tool",
      stats: {
        stars: 15,
        forks: 3,
        contributors: 1,
      },
      duration: "August 2025 - September 2025",
      role: "Full Stack Developer",
      highlights: [
        "70% faster redirection with Redis caching",
        "95% reduction in security vulnerabilities",
        "100+ requests per minute handling capacity",
      ],
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: <Code className="w-4 h-4" /> },
    {
      id: "ecommerce",
      name: "E-commerce",
      icon: <ShoppingCart className="w-4 h-4" />,
    },
    {
      id: "education",
      name: "Education",
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      id: "communication",
      name: "Communication",
      icon: <MessageCircle className="w-4 h-4" />,
    },
    { id: "tool", name: "Tools", icon: <LinkIcon className="w-4 h-4" /> },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="projects" className="relative py-16 md:py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900" />

        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [-50, 50, -50],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-3xl"
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
            className="absolute rounded-full bg-gradient-to-r from-purple-400/30 to-pink-300/30"
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
            backgroundImage: `linear-gradient(to right, #a855f7 1px, transparent 1px),
                            linear-gradient(to bottom, #a855f7 1px, transparent 1px)`,
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
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 mb-4">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-sm font-semibold text-pink-300">My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-200 font-semibold text-lg md:text-xl max-w-3xl mx-auto">
            Real-world applications built with modern technologies and best
            practices
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 overflow-hidden">
                {/* Project Image/Preview Area */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.category === "ecommerce" && (
                      <ShoppingCart className="w-16 h-16 text-purple-500/30" />
                    )}
                    {project.category === "education" && (
                      <BookOpen className="w-16 h-16 text-purple-500/30" />
                    )}
                    {project.category === "communication" && (
                      <MessageCircle className="w-16 h-16 text-purple-500/30" />
                    )}
                    {project.category === "tool" && (
                      <LinkIcon className="w-16 h-16 text-purple-500/30" />
                    )}
                  </div>

                  {/* Image Gallery Preview */}
                  <div className="absolute bottom-2 right-2 flex space-x-1">
                    {project.images.map((img, idx) => (
                      <motion.div
                        key={idx}
                        className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/80 to-pink-500/80 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                        onClick={() => setSelectedImage(img)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ImageIcon className="w-4 h-4 text-white" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
                      {categories.find((c) => c.id === project.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 text-xs rounded-full bg-gradient-to-r ${tech.color} bg-opacity-20 text-white border border-white/10 flex items-center space-x-1`}
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  {project.stats && (
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                      {project.stats.stars && (
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>{project.stats.stars}</span>
                        </div>
                      )}
                      {project.stats.forks && (
                        <div className="flex items-center space-x-1">
                          <GitFork className="w-4 h-4" />
                          <span>{project.stats.forks}</span>
                        </div>
                      )}
                      {project.stats.contributors && (
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{project.stats.contributors}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>

                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center space-x-1 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-300 hover:to-pink-300 transition-all"
                      whileHover={{ x: 5 }}
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/20 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-300" />
                </button>

                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                      {selectedProject.role} • {selectedProject.duration}
                    </p>
                  </div>

                  {/* Image Gallery */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                      <ImageIcon className="w-5 h-5 text-purple-400" />
                      <span>Project Gallery</span>
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {selectedProject.images.map((image, idx) => (
                        <motion.div
                          key={idx}
                          className="relative aspect-video rounded-xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 overflow-hidden cursor-pointer group/image"
                          onClick={() => setSelectedImage(image)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <ImageIcon className="w-8 h-8 text-purple-500/50 group-hover/image:text-purple-400 transition-colors" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity flex items-end justify-center p-2">
                            <p className="text-xs text-white text-center line-clamp-2">
                              {image.caption}
                            </p>
                          </div>
                          <div className="absolute top-1 right-1 opacity-0 group-hover/image:opacity-100 transition-opacity">
                            <Maximize2 className="w-4 h-4 text-white" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Overview
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {selectedProject.fullDescription}
                    </p>
                    {selectedProject.longDescription && (
                      <div className="space-y-3">
                        {selectedProject.longDescription.map((desc, idx) => (
                          <p key={idx} className="text-gray-300">
                            {desc}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges & Solutions */}
                  {selectedProject.challenges && selectedProject.solutions && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                          Challenges
                        </h3>
                        <ul className="space-y-2">
                          {selectedProject.challenges.map((challenge, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2"
                            >
                              <span className="text-red-400 mt-1">⚠️</span>
                              <span className="text-gray-300">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                          Solutions
                        </h3>
                        <ul className="space-y-2">
                          {selectedProject.solutions.map((solution, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2"
                            >
                              <span className="text-green-400 mt-1">✓</span>
                              <span className="text-gray-300">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${tech.color} bg-opacity-20 text-white border border-white/10 flex items-center space-x-2`}
                        >
                          {tech.icon}
                          <span>{tech.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  {selectedProject.highlights && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        Key Achievements
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {selectedProject.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20"
                          >
                            <p className="text-sm text-gray-300">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gray-700 text-white font-semibold hover:bg-gray-600 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Preview Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-purple-500/30 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <ImageIcon className="w-20 h-20 text-purple-500/30 mx-auto mb-4" />
                      <p className="text-gray-400">Image preview placeholder</p>
                      <p className="text-sm text-gray-500 mt-2">
                        {selectedImage.caption}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-4 -right-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors border border-purple-500/30"
                >
                  <X className="w-5 h-5 text-gray-300" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
