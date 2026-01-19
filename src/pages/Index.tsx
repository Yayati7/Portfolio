
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaChevronDown, FaCode, FaExternalLinkAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { Sun, Moon } from "lucide-react";

const projects = [
  {
    title: "MeetNest",
    desc: "Full-stack real-time video conferencing web application for hosting secure online meetings with live video, audio, chat, and screen sharing. Developed a real-time video conferencing platform using WebRTC, Socket.IO and MERN. Implemented peer-to-peer WebRTC mesh architecture with Socket.IO-based signaling for multi-user video calls",
    repo: "https://github.com/Yayati7/MeetNest",
    live: "https://meetnestfrontend.onrender.com/",
    tech: ["WebRTC", "Socket.IO", "MERN", "Docker", "Github Actions(CI/CD)", "AWS EC2"],
    date: "Dec'25"
  },
   {
    title: "WanderLust",
    desc: "Full-Stack travel web app to explore, add and view travel destinations on an interactive map. Developed a feature-rich travel website using Node.js, Express.js, MongoDB, and Mapbox API. Users can explore, add, and manage travel listings with geospatial visualization. Implemented RESTful routing, dynamic data handling, and a responsive UI using Bootstrap.",
    repo: "https://github.com/Yayati7/WanderLust",
    live: "https://wanderlust-r0x5.onrender.com/listings",
    tech: ["Node.js", "Express.js", "MongoDB", "Mapbox API","Apache Kafka ", "Confluent Cloud (Managed Kafka)"],
    date: "June'25"
  },
  {
    title: "MedCare",
    desc: "Hospital management dashboard to view, add and manage doctors, patients and medical tests. Built a medical dashboard using React, TypeScript, shadcn-ui, and Tailwind CSS. Enables real-time tracking of doctors, patients, and diagnostics with dynamic filtering. Integrated responsive design and reusable components for admin workflows.",
    repo: "https://github.com/Yayati7/MedCare",
    live: "https://med-care-db.vercel.app/",
    tech: ["React", "TypeScript", "shadcn-ui", "Tailwind CSS"],
    date: "April'25"
  },
];

const skills = {
  "Programming Languages": ["C++", "C", "Java", "JavaScript"],
  "Web Development": ["Node.js", "React", "Express.js", "HTML", "CSS"],
  "Real Time & Event-Driven Systems": ["WebRTC", "Socket.IO", "Peer-to-Peer Communication"],
  "Event-Driven Backend Systems": ["Apache Kafka", "Kafka Producers & Consumers", " Event-Based Processing"],
  "Databases": ["MongoDB", "MySQL"],
  "Deployment & Automation" : ["Docker(basic)", "Docker Compose", "GitHub Actions(basic CI/CD)", "AWS EC2 (basic deployment)"],
  "Cloud & Backend Infrastructure" : ["Confluent Cloud (Managed Kafka)"], 
  "Other Skills": ["RESTful APIs", "Authentication & Authorization", "Git"]
};

const certifications = [
  {
    title: "Certificate of Completion(Web Dev)",
    issuer: "Apna College",
    year: "2025",
    link: "https://mycourse.app/HfvUmwIr8Wa0rz90C" 
  },
  {
    title: "Coding Interview Preparation",
    issuer: "Coursera",
    year: "2025",
    link: "https://coursera.org/share/3daa7224658236bf1ee8b6e9f4112e98" // Replace with actual certificate link
  },
  {
    title: "Data Structures",
    issuer: "Coursera", 
    year: "2024",
    link: "https://coursera.org/share/8b4b9cc7370203cd72f4fb30a586d14a" // Replace with actual certificate link
  }
];

const education = [
  {
    institution: "Manipal Institute of Technology Bengaluru (MIT Blr), India",
    degree: "CSE Core",
    grade: "CGPA: 7.01",
    duration: "2023 - 2027 (expected)"
  },
  {
    institution: "Sri Venkateshwar International School, India",
    degree: "CBSE (Class XII)",
    grade: "Aggregate: 90%",
    duration: "2021 - 2022"
  },
  {
    institution: "Sri Venkateshwar International School, India",
    degree: "CBSE (Class X)",
    grade: "Aggregate: 90%",
    duration: "2019 - 2020"
  }
];

const Navbar = ({ toggleTheme, darkMode, activeSection }) => {
  const sections = ["intro", "skills", "projects", "education", "certificates", "contact"];
  
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full ${
        darkMode 
          ? "bg-zinc-900/95 text-white border-zinc-700/50" 
          : "bg-white/95 text-zinc-900 border-zinc-200/50"
      } backdrop-blur-xl border-b z-50 transition-all duration-500`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-bold ${
              darkMode ? "text-zinc-100" : "text-zinc-800"
            }`}
          >
            Yayati Mann Singh
          </motion.div>
          
          <ul className="flex items-center space-x-6">
            {sections.map((section) => (
              <li key={section}>
                <motion.a
                  href={`#${section}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-3 py-2 font-medium transition-all duration-300 ${
                    activeSection === section
                      ? darkMode ? "text-zinc-100" : "text-zinc-800"
                      : darkMode
                      ? "text-zinc-400 hover:text-zinc-100"
                      : "text-zinc-600 hover:text-zinc-800"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                        darkMode ? "bg-zinc-100" : "bg-zinc-800"
                      }`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              </li>
            ))}
            <li>
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`text-xl p-2 rounded-lg transition-all duration-300 ${
                  darkMode 
                    ? "hover:bg-zinc-800 text-zinc-300" 
                    : "hover:bg-zinc-100 text-zinc-700"
                }`}
              >
                <AnimatePresence mode="wait">
                  {darkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

const SectionSeparator = ({ darkMode }) => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: "easeInOut" }}
    className={`h-px w-full ${
      darkMode 
        ? "bg-gradient-to-r from-transparent via-zinc-600 to-transparent" 
        : "bg-gradient-to-r from-transparent via-zinc-300 to-transparent"
    } my-20 origin-left`}
  />
);

const ProfessionalCard = ({ children, className = "", darkMode }) => (
  <motion.div
    whileHover={{ 
      scale: 1.02,
      transition: { duration: 0.2 }
    }}
    className={`${
      darkMode 
        ? "bg-zinc-800/50 border-zinc-700/50 shadow-xl shadow-zinc-900/20" 
        : "bg-white border-zinc-200 shadow-xl shadow-zinc-200/50"
    } border rounded-xl p-6 backdrop-blur-sm transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("intro");
  const { scrollYProgress } = useScroll();
  
  const toggleTheme = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "skills", "projects", "education", "certificates", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className={`transition-all duration-700 ${
      darkMode 
        ? "bg-zinc-900 text-white" 
        : "bg-zinc-50 text-zinc-900"
    }`}>
      {/* Progress Bar */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 ${
          darkMode ? "bg-zinc-100" : "bg-zinc-800"
        } origin-left z-50`}
        style={{ scaleX: scrollYProgress }}
      />
      
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} activeSection={activeSection} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section id="intro" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6">
          <div className={`absolute inset-0 ${
            darkMode 
              ? "bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" 
              : "bg-gradient-to-br from-zinc-50 via-white to-zinc-100"
          }`} />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center z-10 max-w-4xl"
          >
            <FloatingElement>
              <motion.h1
                variants={itemVariants}
                className={`text-6xl md:text-8xl font-bold mb-6 ${
                  darkMode 
                    ? "text-white" 
                    : "text-zinc-900"
                }`}
              >
                Yayati Mann Singh
              </motion.h1>
            </FloatingElement>
            
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <motion.p
                className={`text-xl md:text-2xl mb-4 font-medium ${
                  darkMode ? "text-zinc-300" : "text-zinc-700"
                }`}
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Computer Science Student & Full-Stack Developer
              </motion.p>
              <p className={`text-lg max-w-2xl mx-auto ${
                darkMode ? "text-zinc-400" : "text-zinc-600"
              }`}>
                CSE Student at Manipal Institute of Technology specializing in MERN Stack development 
                and full-stack web applications.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <motion.a
                href="https://www.linkedin.com/in/yayati-singh-96783736b/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-8 py-4 font-semibold rounded-lg shadow-lg transition-all duration-300 ${
                  darkMode
                    ? "bg-zinc-700 hover:bg-zinc-600 text-white shadow-zinc-900/50"
                    : "bg-zinc-800 hover:bg-zinc-700 text-white shadow-zinc-200/50"
                }`}
              >
                <FaLinkedin size={20} /> LinkedIn
              </motion.a>
              
              <motion.a
                href="https://github.com/Yayati7"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-8 py-4 font-semibold rounded-lg shadow-lg transition-all duration-300 ${
                  darkMode
                    ? "bg-zinc-800 hover:bg-zinc-700 text-white shadow-zinc-900/50"
                    : "bg-zinc-700 hover:bg-zinc-600 text-white shadow-zinc-300/50"
                }`}
              >
                <FaGithub size={20} /> GitHub
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10"
          >
            <FaChevronDown size={24} className={darkMode ? "text-zinc-400" : "text-zinc-600"} />
          </motion.div>
        </section>

        <SectionSeparator darkMode={darkMode} />

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`text-5xl md:text-6xl font-bold mb-16 text-center ${
                darkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              Skills
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  variants={itemVariants}
                >
                  <ProfessionalCard darkMode={darkMode} className="h-full">
                    <h3 className={`text-2xl font-bold mb-4 ${
                      darkMode ? "text-zinc-100" : "text-zinc-800"
                    }`}>
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            darkMode
                              ? "bg-zinc-700 text-zinc-300 border border-zinc-600"
                              : "bg-zinc-100 text-zinc-700 border border-zinc-200"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </ProfessionalCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <SectionSeparator darkMode={darkMode} />

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`text-5xl md:text-6xl font-bold mb-16 text-center ${
                darkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              Projects
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <ProfessionalCard darkMode={darkMode} className="h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className={`text-2xl font-bold ${
                          darkMode ? "text-zinc-100" : "text-zinc-800"
                        }`}>
                          {project.title}
                        </h3>
                        <span className={`text-sm ${
                          darkMode ? "text-zinc-400" : "text-zinc-600"
                        }`}>
                          {project.date}
                        </span>
                      </div>
                      <p className={`mb-6 flex-grow ${
                        darkMode ? "text-zinc-300" : "text-zinc-600"
                      }`}>
                        {project.desc}
                      </p>
                      
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                darkMode
                                  ? "bg-zinc-700 text-zinc-300 border border-zinc-600"
                                  : "bg-zinc-100 text-zinc-700 border border-zinc-200"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <motion.a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                            darkMode
                              ? "bg-zinc-700 hover:bg-zinc-600 text-white"
                              : "bg-zinc-200 hover:bg-zinc-300 text-zinc-800"
                          }`}
                        >
                          <FaCode size={16} /> GitHub
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                            darkMode
                              ? "bg-zinc-600 hover:bg-zinc-500 text-white"
                              : "bg-zinc-800 hover:bg-zinc-700 text-white"
                          }`}
                        >
                          <FaExternalLinkAlt size={14} /> Live Demo
                        </motion.a>
                      </div>
                    </div>
                  </ProfessionalCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <SectionSeparator darkMode={darkMode} />

                {/* Education Section */}
        <section id="education" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`text-5xl md:text-6xl font-bold mb-16 text-center ${
                darkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              Education
            </motion.h2>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <ProfessionalCard darkMode={darkMode}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`text-xl font-bold ${
                        darkMode ? "text-zinc-100" : "text-zinc-800"
                      }`}>
                        {edu.institution}
                      </h3>
                      <span className={`text-sm ${
                        darkMode ? "text-zinc-400" : "text-zinc-600"
                      }`}>
                        {edu.duration}
                      </span>
                    </div>
                    <p className={`text-lg font-medium mb-1 ${
                      darkMode ? "text-zinc-200" : "text-zinc-700"
                    }`}>
                      {edu.degree}
                    </p>
                    <p className={`${
                      darkMode ? "text-zinc-300" : "text-zinc-600"
                    }`}>
                      {edu.grade}
                    </p>
                  </ProfessionalCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SectionSeparator darkMode={darkMode} />

        {/* Certificates Section */}
        <section id="certificates" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`text-5xl md:text-6xl font-bold mb-16 text-center ${
                darkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              Certifications
            </motion.h2>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <ProfessionalCard darkMode={darkMode}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-4 flex-shrink-0 ${
                          darkMode ? "bg-zinc-100" : "bg-zinc-800"
                        }`} />
                        <div>
                          <p className={`text-lg font-medium ${
                            darkMode ? "text-zinc-200" : "text-zinc-700"
                          }`}>
                            {cert.title}
                          </p>
                          <p className={`text-sm ${
                            darkMode ? "text-zinc-400" : "text-zinc-500"
                          }`}>
                            {cert.issuer}, {cert.year}
                          </p>
                        </div>
                      </div>
                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          darkMode
                            ? "bg-zinc-700 hover:bg-zinc-600 text-white"
                            : "bg-zinc-200 hover:bg-zinc-300 text-zinc-800"
                        }`}
                      >
                        View Certificate
                      </motion.a>
                    </div>
                  </ProfessionalCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SectionSeparator darkMode={darkMode} />

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`text-5xl md:text-6xl font-bold mb-16 ${
                darkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              Let's Connect
            </motion.h2>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <ProfessionalCard darkMode={darkMode} className="max-w-2xl mx-auto">
                <div className="space-y-6">
                  <motion.p
                    className={`text-xl ${
                      darkMode ? "text-zinc-300" : "text-zinc-600"
                    }`}
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Looking forward to connecting and learning more
                  </motion.p>
                  
                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-center gap-3 text-lg"
                    >
                      <FaEnvelope className={darkMode ? "text-zinc-400" : "text-zinc-500"} />
                      <a
                        href="mailto:yayatimannsingh7@gmail.com"
                        className={`font-medium transition-colors duration-300 ${
                          darkMode
                            ? "text-zinc-100 hover:text-zinc-300"
                            : "text-zinc-800 hover:text-zinc-600"
                        }`}
                      >
                        yayatimannsingh7@gmail.com
                      </a>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-center gap-3 text-lg"
                    >
                      <FaPhone className={darkMode ? "text-zinc-400" : "text-zinc-500"} />
                      <span className={`font-medium ${
                        darkMode ? "text-zinc-100" : "text-zinc-800"
                      }`}>
                        +91-8800806746
                      </span>
                    </motion.div>
                  </div>
                </div>
              </ProfessionalCard>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`py-12 text-center border-t ${
            darkMode 
              ? "border-zinc-700 text-zinc-400" 
              : "border-zinc-200 text-zinc-600"
          }`}
        >
          <p>
            © 2024 Yayati Mann Singh. Built with React & TypeScript.
          </p>
        </motion.footer>
      </main>
    </div>
  );
};

export default App;
