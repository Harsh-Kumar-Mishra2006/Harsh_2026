// src/components/layout/Footer.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  ArrowUp,
  Github,
  Linkedin,
  Code,
  Mail,
} from "lucide-react";
import { socialLinks } from "../../data/navigation";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const floatingShapes = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    type: i % 3 === 0 ? "circle" : i % 3 === 1 ? "square" : "triangle",
    size: Math.random() * 10 + 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 4 + 3,
  }));

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    leetcode: Code,
    mail: Mail,
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900/50 to-gray-900 border-t border-blue-500/20">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingShapes.map((shape) => (
          <motion.div
            key={shape.id}
            className={`absolute ${
              shape.type === "circle"
                ? "rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
                : shape.type === "square"
                  ? "bg-gradient-to-r from-blue-600/10 to-cyan-400/10"
                  : "bg-gradient-to-r from-cyan-500/10 to-blue-400/10"
            }`}
            style={{
              width: shape.size,
              height: shape.size,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              clipPath:
                shape.type === "triangle"
                  ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                  : "none",
            }}
            animate={{
              y: [0, -40, 0],
              rotate: shape.type === "square" ? [0, 90, 0] : 0,
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-70" />
                  <div className="relative p-3 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Portfolio
                  </h2>
                  <p className="text-sm text-blue-300/80 mt-1">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed max-w-md">
                Crafting exceptional digital experiences with modern
                technologies and clean code. Let's build something amazing
                together.
              </p>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="pt-4"
              >
                <p className="text-sm font-semibold text-blue-300 mb-3">
                  Stay Updated
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-blue-900/30 border border-blue-500/30 text-white placeholder-blue-300/50 focus:outline-none focus:border-cyan-400/50"
                  />
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                    Join
                  </button>
                </div>
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                {
                  title: "Navigation",
                  links: [
                    "Home",
                    "About",
                    "Projects",
                    "Skills",
                    "Experience",
                    "Contact",
                  ],
                },
                {
                  title: "Projects",
                  links: [
                    "Web Apps",
                    "Mobile Apps",
                    "UI/UX Design",
                    "Open Source",
                  ],
                },
                {
                  title: "Tech Stack",
                  links: [
                    "React",
                    "TypeScript",
                    "Node.js",
                    "Next.js",
                    "Tailwind",
                    "GraphQL",
                  ],
                },
                {
                  title: "Resources",
                  links: ["Blog", "Tutorials", "Documentation", "GitHub"],
                },
              ].map((section, sectionIndex) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold text-blue-300 mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: sectionIndex * 0.1 + linkIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        <a
                          href="#"
                          className="text-gray-300 hover:text-cyan-300 transition-colors group flex items-center"
                        >
                          <span className="w-0 h-px bg-cyan-400 group-hover:w-3 mr-2 transition-all duration-300" />
                          {link}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Social Links & Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-blue-500/20"
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon =
                    socialIcons[social.icon as keyof typeof socialIcons];
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 hover:border-cyan-400/30 group"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Icon className="w-5 h-5 text-blue-400 group-hover:text-cyan-300 transition-colors" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="text-gray-300 text-sm flex items-center justify-center md:justify-end space-x-1">
                  <span>© {currentYear} Made with</span>
                  <Heart className="w-4 h-4 text-red-400 animate-pulse inline mx-1" />
                  <span className="text-cyan-300 font-semibold ml-1">
                    Harsh
                  </span>
                  <span className="text-gray-400">,</span>
                  <span className="text-blue-300 font-semibold">Kumar</span>
                  <span className="text-gray-400">&</span>
                  <span className="text-teal-300 font-semibold">Mishra</span>
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  Designed with passion • Built with precision
                </p>
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                className="p-3 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/20 hover:border-cyan-400/30 group"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowUp className="w-5 h-5 text-blue-400 group-hover:text-cyan-300 group-hover:rotate-360 transition-all duration-500" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-cyan-500 to-transparent" />
    </footer>
  );
};

export default Footer;
