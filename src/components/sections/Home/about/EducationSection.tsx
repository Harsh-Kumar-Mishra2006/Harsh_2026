import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
} from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Star,
  Award,
  Calendar,
  Sparkles,
  Microscope,
  School,
} from "lucide-react";
import { useRef } from "react";

const EducationSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const meterHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const smoothMeter = useSpring(meterHeight, { stiffness: 80, damping: 25 });

  // Train position based on scroll
  const trainPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const smoothTrainPosition = useSpring(trainPosition, {
    stiffness: 50,
    damping: 20,
  });

  // Train speed effect
  const scrollVelocity = useVelocity(scrollYProgress);
  const trainSpeed = useTransform(scrollVelocity, [-1, 0, 1], [1.5, 1, 1.5]);
  const trainRotation = useTransform(scrollVelocity, [-1, 0, 1], [-5, 0, 5]);

  // Brightness animation based on position
  const trainBrightness = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [1, 1.5, 1.8, 1.2],
  );

  const education = [
    {
      year: "2023 - Present",
      degree: "Bachelor of Technology in Cyber Security Engineering",
      institution: "Darbhanga College of Engineering",
      board: "Bihar Engineering University",
      description: "Third Year BTECH Student specializing in Cyber Security",
      achievements: [
        "Cybersecurity Fundamentals Certificate",
        "Network Security Course",
        "CTF Participant",
      ],
      side: "right",
      gradient: "from-blue-600 to-cyan-500",
      icon: <GraduationCap color="#000000" />,
    },
    {
      year: "2021 - 2023",
      degree: "12th Board - Science",
      institution: "Saraswati Vidya Mandir, PuraniGanj, Munger",
      board: "Central Board of Secondary Education (CBSE)",
      description: "Science Stream with Physics, Chemistry, and Mathematics",
      achievements: [
        "Science Exhibition Winner",
        "Mathematics Olympiad",
        "85% Aggregate",
      ],
      side: "left",
      gradient: "from-purple-600 to-pink-500",
      icon: <Microscope color="#000000" />,
    },
    {
      year: "2020 - 2021",
      degree: "10th Board",
      institution: "Saraswati Vidya Mandir, PuraniGanj, Munger",
      board: "Central Board of Secondary Education (CBSE)",
      description: "Completed with 84% marks",
      achievements: [
        "Academic Excellence Award",
        "Perfect Attendance",
        "84% Aggregate",
      ],
      side: "right",
      gradient: "from-green-600 to-emerald-500",
      icon: <School color="#000000" />,
    },
  ];

  const stars = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen py-20 px-4 md:px-8 overflow-hidden"
    >
      {/* Animated Background Meter with Train Track Effect */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full">
        {/* Track glow effect */}
        <div className="absolute inset-0 w-full bg-gradient-to-b from-blue-500/20 via-cyan-500/20 to-purple-500/20 blur-xl rounded-full" />

        {/* Main track line */}
        <div className="relative w-full h-full bg-gray-700/30 rounded-full overflow-hidden backdrop-blur-sm border border-gray-600/50">
          {/* Filling meter with gradient */}
          <motion.div
            style={{ height: smoothMeter }}
            className="w-full bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 rounded-full relative"
          >
            {/* Electric current effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent animate-pulse" />

            {/* Sparkle particles along the track */}
            {stars.map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, Math.sin(i) * 10, 0],
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                style={{ top: `${(i + 1) * 12}%` }}
                className="absolute left-1/2 transform -translate-x-1/2"
              >
                <Sparkles className="w-3 h-3 text-yellow-400" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Train Container - Moves along the track */}
        <motion.div
          style={{
            top: smoothTrainPosition,
            filter: `brightness(${trainBrightness})`,
          }}
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        >
          {/* Animated glow under the train */}
          <motion.div
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-purple-500/30 rounded-full blur-xl"
          />

          {/* Train Image - Sideways */}
          <motion.img
            src="/metro front view.webp"
            alt="Train"
            style={{
              rotate: useTransform(trainRotation, (v) => v + 90), // Sideways orientation
              scale: useTransform(trainSpeed, [0.5, 1.5], [0.9, 1.1]),
            }}
            className="relative w-60 h-60 md:w-20 md:h-20 object-contain drop-shadow-2xl"
          />

          {/* Train lights effect */}
          <motion.div
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="absolute top-1/2 -right-2 w-6 h-6 bg-yellow-400/50 rounded-full blur-md"
          />

          {/* Smoke effect from train */}
          <motion.div
            animate={{
              x: [0, 20, 0],
              opacity: [0.3, 0, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-4 -right-8 w-8 h-8 bg-gray-400/30 rounded-full blur-xl"
          />
        </motion.div>

        {/* Track markers (like railway ties) */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
            }}
            style={{ top: `${i * 5}%` }}
            className="absolute left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gray-500/50 rounded-full"
          />
        ))}
      </div>

      {/* Education Cards Container */}
      <div className="relative max-w-6xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: edu.side === "right" ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: index * 0.3,
              type: "spring",
              stiffness: 80,
              damping: 15,
            }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex items-center mb-16 ${
              edu.side === "right" ? "justify-end" : "justify-start"
            }`}
          >
            {/* Card with alternating sides */}
            <div
              className={`w-full md:w-5/12 ${
                edu.side === "right" ? "md:ml-auto" : "md:mr-auto"
              }`}
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
                className="relative group"
              >
                {/* Animated border gradient with train effect */}
                <motion.div
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur"
                />

                {/* Main card with glass morphism */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 overflow-hidden">
                  {/* Animated light sweep effect */}
                  <motion.div
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  />

                  {/* Floating particles on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ y: 0, x: 0 }}
                        animate={{
                          y: [0, -30, 0],
                          x: [0, Math.sin(i) * 15, 0],
                          opacity: [0, 0.8, 0],
                        }}
                        transition={{
                          duration: 4,
                          delay: i * 0.2,
                          repeat: Infinity,
                        }}
                        className="absolute"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                        }}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${edu.gradient} blur-[1px]`}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Rest of the card content remains the same */}
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex p-3 mb-4 rounded-xl bg-gradient-to-r ${edu.gradient} bg-opacity-20`}
                  >
                    <span className="text-2xl">{edu.icon}</span>
                  </motion.div>

                  {/* Year badge with train-inspired design */}
                  <div className="relative overflow-hidden inline-block mb-3">
                    <span className="relative z-10 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-sm font-semibold text-cyan-300">
                      <Calendar className="w-3 h-3 inline mr-1" />
                      {edu.year}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>

                  <h4
                    className={`text-xl font-bold mb-2 bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}
                  >
                    {edu.degree}
                  </h4>

                  <div className="flex items-center space-x-2 text-gray-300 mb-3">
                    <BookOpen
                      className={`w-4 h-4 bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}
                    />
                    <span className="text-sm">{edu.institution}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-gray-400 mb-3">
                    <Award className="w-3 h-3" />
                    <span className="text-xs">{edu.board}</span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  {/* Achievements with animated stars */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider flex items-center">
                      <Sparkles className="w-3 h-3 mr-1 text-yellow-400" />
                      Achievements
                    </p>
                    {edu.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2"
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, 360, 0],
                          }}
                          transition={{
                            duration: 3,
                            delay: i * 0.2,
                            repeat: Infinity,
                            repeatDelay: 2,
                          }}
                        >
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        </motion.div>
                        <span className="text-sm text-gray-300">
                          {achievement}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Timeline dot with train-inspired glow */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: [0, 1.3, 1] }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`w-5 h-5 rounded-full bg-gradient-to-r ${edu.gradient} shadow-lg relative`}
              >
                <div className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
                <motion.div
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.5, 0.3, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                  className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom station glow */}
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0.8, 1], [0, 0.8]),
        }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-t from-blue-500/30 to-transparent rounded-full blur-3xl"
      />

      {/* Top station glow */}
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.2], [0.8, 0]),
        }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-b from-purple-500/30 to-transparent rounded-full blur-3xl"
      />
    </div>
  );
};

export default EducationSection;
