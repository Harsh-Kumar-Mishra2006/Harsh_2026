// src/components/ui/StatsSection.tsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Clock,
  Layers,
  Trophy,
  TrendingUp,
  Zap,
  Target,
  BarChart3,
} from "lucide-react";

const StatsSection: React.FC = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    experience: 0,
    technologies: 0,
    hackathons: 0,
  });

  const [isCounting, setIsCounting] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const maxValues = {
    projects: 4,
    experience: 1,
    technologies: 10,
    hackathons: 2,
  };

  const stats = [
    {
      id: 1,
      title: "Live Projects",
      value: counts.projects,
      suffix: "+",
      icon: <Rocket className="w-6 h-6 text-white" />,
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      description: "Real-world applications deployed",
    },
    {
      id: 2,
      title: "Years Experience",
      value: counts.experience,
      suffix: "+",
      icon: <Clock className="w-6 h-6 text-white" />,
      color: "from-purple-500 to-pink-400",
      bgColor: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      description: "Professional development experience",
    },
    {
      id: 3,
      title: "Technologies",
      value: counts.technologies,
      suffix: "+",
      icon: <Layers className="w-6 h-6 text-white" />,
      color: "from-green-500 to-emerald-400",
      bgColor: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      description: "Modern tools & frameworks Worked With",
    },
    {
      id: 4,
      title: "Hackathons",
      value: counts.hackathons,
      suffix: "+",
      icon: <Trophy className="w-6 h-6 text-white" />,
      color: "from-orange-500 to-yellow-400",
      bgColor: "bg-gradient-to-br from-orange-500/20 to-yellow-500/20",
      description: "Smart India Hackathon",
    },
  ];

  // Counting animation
  useEffect(() => {
    if (!isCounting) return;

    const incrementCount = () => {
      setCounts((prev) => ({
        projects: Math.min(prev.projects + 0.1, maxValues.projects),
        experience: Math.min(prev.experience + 0.05, maxValues.experience),
        technologies: Math.min(prev.technologies + 0.5, maxValues.technologies),
        hackathons: Math.min(prev.hackathons + 0.1, maxValues.hackathons),
      }));
    };

    intervalRef.current = setInterval(incrementCount, 30);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isCounting]);

  // Reset every 10 seconds
  useEffect(() => {
    const resetInterval = setInterval(() => {
      setIsCounting(false);

      setTimeout(() => {
        setCounts({
          projects: 0,
          experience: 0,
          technologies: 0,
          hackathons: 0,
        });
        setIsCounting(true);
      }, 500);
    }, 10000);

    return () => {
      clearInterval(resetInterval);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Floating particles
  const particles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-900" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [-30, 30, -30],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-pink-500/10 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-300/20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 40 - 20, 0],
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
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main container */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 mb-4">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300">
              My Qualitative Position
            </span>
          </div>

          {/* Timer indicator */}
          <div className="mt-6 flex items-center justify-center space-x-2">
            <div className="flex items-center space-x-1">
              <div
                className={`w-2 h-2 rounded-full ${isCounting ? "bg-green-500 animate-pulse" : "bg-yellow-500"}`}
              />
              <span className="text-xs text-gray-400">
                {isCounting ? "Counting up..." : "Resetting..."}
              </span>
            </div>
            <BarChart3 className="w-4 h-4 text-blue-400" />
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                transition={{
                  duration: 0.5,
                  delay: stat.id * 0.1,
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Outer glow effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500 group-hover:duration-200`}
                />

                {/* Main card */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/30 overflow-hidden">
                  {/* Animated border */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon - FIXED: Removed bg-clip-text and text-transparent */}
                    <div
                      className={`inline-flex p-3 rounded-xl ${stat.bgColor} backdrop-blur-sm mb-4`}
                    >
                      {stat.icon}
                    </div>

                    {/* Number with counting animation */}
                    <div className="flex items-baseline space-x-1 mb-2">
                      <motion.span
                        key={stat.value}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        className="text-4xl md:text-5xl font-bold text-white"
                      >
                        {Math.floor(stat.value)}
                      </motion.span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        {stat.suffix}
                      </span>

                      {/* Decimal animation */}
                      {stat.value % 1 > 0 && (
                        <motion.span
                          className="text-lg text-gray-400"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        >
                          .{Math.floor((stat.value % 1) * 10)}
                        </motion.span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {stat.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm">{stat.description}</p>

                    {/* Progress bar */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-400">Progress</span>
                        <span className="text-xs font-semibold text-cyan-400">
                          {Math.min(
                            100,
                            Math.floor(
                              (stat.value /
                                maxValues[
                                  stat.id === 1
                                    ? "projects"
                                    : stat.id === 2
                                      ? "experience"
                                      : stat.id === 3
                                        ? "technologies"
                                        : "hackathons"
                                ]) *
                                100,
                            ),
                          )}
                          %
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-gray-700/50 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${stat.color}`}
                          initial={{ width: 0 }}
                          animate={{
                            width: `${Math.min(100, (stat.value / maxValues[stat.id === 1 ? "projects" : stat.id === 2 ? "experience" : stat.id === 3 ? "technologies" : "hackathons"]) * 100)}%`,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating elements inside card */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <Target className="w-8 h-8 text-white" />
                  </div>

                  {/* Animated dots */}
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Counter animation indicator */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <TrendingUp className="w-3 h-3 text-white" />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Reset indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        ></motion.div>
      </div>

      {/* Connection lines */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 -z-5 opacity-10 hidden lg:block">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-4 gap-6">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                style={{ gridColumn: `${i + 1} / span 1` }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.5,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
