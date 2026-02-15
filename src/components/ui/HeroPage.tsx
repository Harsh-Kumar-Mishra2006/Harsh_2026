// src/components/ui/HeroPage.tsx
import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  Sparkles,
  Code2,
  Server,
  Database,
  Mouse,
  ChevronRight,
  ExternalLink,
  Download,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const HeroPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [textIndex, setTextIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "CSE Student",
    "Tech Enthusiast",
  ];

  const techStack = [
    {
      icon: <Code2 className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-400",
      label: "Frontend",
    },
    {
      icon: <Server className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      label: "Backend",
    },
    {
      icon: <Database className="w-5 h-5" />,
      color: "from-green-500 to-emerald-400",
      label: "Database",
    },
  ];

  // Floating particles effect
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const floatVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-900" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [-50, 50, -50],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
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

      {/* Mouse follower */}
      <motion.div
        className="fixed w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/5 to-cyan-400/5 pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Left Text Content */}
          <motion.div variants={itemVariants} className="lg:w-1/2 space-y-8">
            {/* Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">
                Welcome to my Portfolio
              </span>
            </motion.div>

            {/* Animated Title */}
            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                <span className="block text-gray-300">I'm</span>
                <span className="block bg-gradient-to-r from-blue-400 via-sky-400 text-indigo-400 bg-clip-text text-transparent">
                  Harsh Kumar Mishra
                </span>
              </motion.h1>

              {/* Animated Role Text */}
              <motion.div
                variants={itemVariants}
                className="h-12 flex items-center"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={textIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="h-0.5 w-8 bg-gradient-to-r from-blue-500 to-cyan-500" />
                    <h2 className="text-2xl md:text-3xl font-semibold text-white">
                      {roles[textIndex]}
                    </h2>
                    <div className="h-0.5 w-8 bg-gradient-to-r from-cyan-500 to-purple-500" />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-white font-bold text-lg leading-relaxed max-w-2xl"
            >
              Working everyday on improving my tech skills, buiding something
              new and learning more enthusiastic things is what I love to do.
              This is <span className="text-sky-300">Harsh</span> an
              Enthusiastic Tech aspirant and a Beginner Full Stack Developer,
              who delives in learning new Technologies and upskilling myself
              Everday.
            </motion.p>

            {/* Tech Stack Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50"
                >
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-r ${tech.color}`}
                  >
                    {tech.icon}
                  </div>
                  <span className="text-gray-300 font-medium">
                    {tech.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <div className="h-5"></div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold flex items-center space-x-3 overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 text-white font-semibold flex items-center space-x-3"
              >
                <span>Get in Touch</span>
                <motion.div
                  animate={{ rotate: isHovering ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.div>
              </motion.a>

              <motion.a
                href="/HARSH-KUMAR-MISHRA-resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 py-4 rounded-xl  bg-white/10 backdrop-blur-md border border-white/20shadow-lg  text-black font-semibold flex items-center space-x-2 hover:bg-white/50 hover:text-blue-800 hover:border-cyan-400 "
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.a>
              <div className="h-5"></div>
            </motion.div>
          </motion.div>

          {/* Right Image Content */}
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-cyan-500/30 to-purple-600/30 rounded-full blur-2xl" />

              {/* Image Container */}
              <motion.div
                variants={floatVariants}
                animate="float"
                className="relative"
              >
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 p-1">
                  <img
                    src="/Harsh.png"
                    alt="Harsh Kumar Mishra"
                    className="w-full h-full  rounded-full"
                  />
                </div>

                {/* Floating Tech Badges */}
                {[
                  {
                    image: "/react.png",
                    label: "React",
                    position: "top-0 left-0",
                  },
                  {
                    image: "/mysql.png",
                    label: "MySql",
                    position: "top-0 right-0",
                  },
                  {
                    image: "/node.png",
                    label: "Node.js",
                    position: "bottom-0 left-0",
                  },
                  {
                    image: "/mongodb.png",
                    label: "MongoDB",
                    position: "bottom-0 right-0",
                  },
                ].map((badge, index) => (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`absolute ${badge.position} transform -translate-x-1/2 -translate-y-1/2`}
                  >
                    <div className="p-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-sm border border-gray-700/50 shadow-lg">
                      <img
                        src={badge.image}
                        alt={badge.label}
                        className="w-6 h-6"
                      />
                    </div>
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-300 whitespace-nowrap">
                      {badge.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Animated Rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-500/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.2, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-cyan-500/20"
                animate={{
                  scale: [1.1, 1.3, 1.1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 cursor-pointer"
            onClick={scrollToContent}
          >
            <span className="text-gray-400 text-sm font-medium">
              Scroll down
            </span>
            <div className="p-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20">
              <Mouse className="w-5 h-5 text-cyan-400" />
            </div>
            <ArrowDown className="w-4 h-4 text-gray-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroPage;
