// src/components/ui/Contact.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  FileText,
  MapPin,
  Calendar,
  User,
  Sparkles,
  ChevronRight,
  Copy,
  CheckCircle2,
  MessageCircle,
  Download,
  Code,
} from "lucide-react";

const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Floating particles effect (matching Skills page)
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 5 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 2,
  }));

  // Contact information
  const contactInfo = {
    name: "Harsh Kumar Mishra",
    title: "Full Stack Developer",
    email: "mishrakumarharsh@gmail.com",
    phone: "+91 74610 79371",
    location: "Munger, Bihar, India",
    resumeLink: "/HARSH-KUMAR-MISHRA-resume.pdf",
    availability: "Open to opportunities",
    experience: "1+ Years",
    projects: "4+ Live Projects",
  };

  // Social links with details
  const socialLinks = [
    {
      platform: "GitHub",
      username: "@Harsh-Kumar-Mishra2006",
      url: "https://github.com/Harsh-Kumar-Mishra2006",
      icon: <Github className="w-6 h-6" />,
      color: "from-gray-600 to-gray-400",
      bgColor: "bg-gray-900",
      stats: "20+ repositories",
    },
    {
      platform: "LinkedIn",
      username: "in/harsh-kumar-702a33323",
      url: "https://www.linkedin.com/in/harsh-kumar-702a33323/",
      icon: <Linkedin className="w-6 h-6" />,
      color: "from-blue-600 to-blue-400",
      bgColor: "bg-blue-900",
      stats: "500+ connections",
    },
    {
      platform: "Leetcode",
      username: "@Harsh_Kumar-Mishra2006",
      url: "https://leetcode.com/u/Harsh_Kumar-Mishra2006/",
      icon: <Code className="w-6 h-6" />,
      color: "from-pink-600 to-purple-500",
      bgColor: "bg-pink-900",
      stats: "100+ problems solved",
    },
    {
      platform: "Email",
      username: contactInfo.email,
      url: `mailto:${contactInfo.email}`,
      icon: <Mail className="w-6 h-6" />,
      color: "from-red-500 to-orange-400",
      bgColor: "bg-red-900",
      stats: "24h response time",
    },
    {
      platform: "Phone",
      username: contactInfo.phone,
      url: `tel:${contactInfo.phone}`,
      icon: <Phone className="w-6 h-6" />,
      color: "from-green-500 to-emerald-400",
      bgColor: "bg-green-900",
      stats: "WhatsApp available",
    },
  ];

  // Quick contact options
  const quickContacts = [
    {
      method: "Email",
      value: contactInfo.email,
      icon: <Mail className="w-5 h-5" />,
      action: "Send message",
      color: "from-red-500 to-orange-400",
    },
    {
      method: "WhatsApp",
      value: contactInfo.phone,
      icon: <MessageCircle className="w-5 h-5" />,
      action: "Chat now",
      color: "from-green-500 to-emerald-400",
    },
    {
      method: "Resume",
      value: "Download PDF",
      icon: <FileText className="w-5 h-5" />,
      action: "Get resume",
      color: "from-purple-500 to-pink-400",
    },
  ];

  // Availability schedule
  const availability = [
    { day: "Monday - Friday", hours: "6:00 PM - 11:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 9:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 9:00 PM" },
  ];

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
      {/* Animated Background - Matching Skills page */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [-50, 50, -50],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-3xl"
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
            backgroundImage: `linear-gradient(to right, #a855f7 1px, transparent 1px),
                            linear-gradient(to bottom, #a855f7 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Title - Matching Skills page style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 mb-4">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-sm font-semibold text-pink-300">
              Let's Connect
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-4">
            Contact Me
          </h2>
          <p className="text-gray-200 font-semibold text-lg md:text-xl max-w-3xl mx-auto">
            Get in touch for collaborations, opportunities, or just a friendly
            chat
          </p>
        </motion.div>

        {/* Profile Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Profile Avatar */}
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                <div className="w-28 h-28 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <User className="w-14 h-14 text-gray-300" />
                  </div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900"
                />
              </motion.div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {contactInfo.name}
                </h3>
                <p className="text-xl text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold mb-4">
                  {contactInfo.title}
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-gray-300">
                      {contactInfo.location}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20">
                    <Calendar className="w-4 h-4 text-pink-400" />
                    <span className="text-sm text-gray-300">
                      {contactInfo.experience} experience
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-gray-300">
                      {contactInfo.availability}
                    </span>
                  </div>
                </div>
              </div>

              {/* Resume Button */}
              <motion.a
                href={contactInfo.resumeLink}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FileText className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Download Resume</span>
                <Download className="w-4 h-4 relative z-10 group-hover:translate-y-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Social Links - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 w-1 h-8 rounded-full mr-3" />
                Connect With Me
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    onHoverStart={() => setHoveredCard(link.platform)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="group relative p-5 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${link.color} bg-opacity-20 group-hover:scale-110 transition-transform`}
                      >
                        {link.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {link.platform}
                        </h4>
                        <p className="text-sm text-gray-400 mb-2">
                          {link.username}
                        </p>
                        <p className="text-xs text-gray-500">{link.stats}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                    </div>

                    {/* Hover Tooltip */}
                    <AnimatePresence>
                      {hoveredCard === link.platform && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute -top-2 right-4 px-2 py-1 rounded bg-purple-500 text-xs text-white"
                        >
                          Click to connect
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Actions - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Quick Contact Cards */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">
                Quick Contact
              </h3>

              <div className="space-y-3">
                {quickContacts.map((contact, index) => (
                  <motion.div
                    key={contact.method}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 group hover:border-${contact.color.split(" ")[1]}/30 transition-all`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div
                            className={`p-2 rounded-lg bg-gradient-to-r ${contact.color}`}
                          >
                            {contact.icon}
                          </div>
                          <span className="text-gray-200 font-medium">
                            {contact.method}
                          </span>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(contact.value, contact.method)
                          }
                          className="p-1.5 rounded-lg hover:bg-gray-700/50 transition-colors"
                        >
                          {copiedField === contact.method ? (
                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                      </div>
                      <p className="text-sm text-gray-400 truncate">
                        {contact.value}
                      </p>
                      <p className="text-xs text-cyan-400 mt-2">
                        {contact.action} →
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">
                Availability
              </h3>

              <div className="space-y-3">
                {availability.map((slot, index) => (
                  <motion.div
                    key={slot.day}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="flex justify-between items-center py-2 border-b border-gray-700/50 last:border-0"
                  >
                    <span className="text-gray-400 text-sm">{slot.day}</span>
                    <span
                      className={`text-sm font-medium ${
                        slot.hours === "Closed"
                          ? "text-red-400"
                          : "text-green-400"
                      }`}
                    >
                      {slot.hours}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20"
              >
                <p className="text-xs text-green-400 text-center">
                  ⚡ Usually responds within 24 hours
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
