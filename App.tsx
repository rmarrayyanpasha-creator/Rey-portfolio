import { useState } from 'react';
import { Menu, X, Instagram, Linkedin, Github, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import instagramQR from '../imports/image-1.png';
import profilePhoto from '../imports/foto-rey.jpg.jpeg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-gray-800 font-bold text-xl">Rey</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => setShowAbout(true)} className="hover:text-gray-500 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-gray-500 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-gray-500 transition-colors">
                Contact Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <button onClick={() => setShowAbout(true)} className="block w-full text-left hover:text-gray-500 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left hover:text-gray-500 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-gray-500 transition-colors">
                Contact Me
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Profile Photo */}
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-200 shadow-2xl shadow-gray-300/30">
                  <img
                    src={profilePhoto}
                    alt="Rey Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Digital Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              I am specialized in turning programming logic and
            </p>
            <p className="text-xl text-gray-600 mb-8">
              UI/UX designs into functional and visually appealing code
            </p>
            <div className="inline-block px-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-gray-700 text-sm">
              #Rey
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-40 left-10 w-64 h-64 bg-gray-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-60 right-10 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">About Me</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Hello! I'm Rey - dedicated to my role in turning programming logic and UI/UX designs into visually appealing code. Over the past few years, I have honed my coding abilities and developed a strong foundation in various programming languages and frameworks.
              </p>
              <p>
                I am a student at Universitas Gunadarma, specializing in Software and AI, Information System program. My passion lies in creating digital solutions that are both functional and aesthetically pleasing.
              </p>
              <p>
                Currently, I'm working as a freelancer, taking on various projects that challenge my skills and allow me to grow professionally. I specialize in web development, AI integration, and creating seamless user experiences.
              </p>
              <button
                onClick={() => setShowAbout(false)}
                className="mt-6 px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Client & Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-all"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-800">Gemini AI Chatbot</h3>
              <p className="text-gray-600 mb-4">
                Interactive AI chatbot powered by Google's Gemini AI, featuring natural language processing and contextual conversations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Gemini AI</span>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-all"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-800">AI Content Generator</h3>
              <p className="text-gray-600 mb-4">
                Smart content generation tool using Gemini AI to create blog posts, social media content, and marketing copy.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Gemini AI</span>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-all"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-800">Image Analysis Tool</h3>
              <p className="text-gray-600 mb-4">
                Advanced image recognition and analysis application leveraging Gemini AI's vision capabilities for object detection.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Gemini AI</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact Me</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Options */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Let's get in touch</h3>

                <a
                  href="https://wa.me/6289615181523"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl transition-all group"
                >
                  <MessageCircle className="text-gray-600 group-hover:scale-110 transition-transform" size={24} />
                  <span>Call or WhatsApp</span>
                </a>

                <a
                  href="mailto:rmarrayyanpasha@gmail.com"
                  className="flex items-center space-x-3 p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl transition-all group"
                >
                  <Mail className="text-gray-600 group-hover:scale-110 transition-transform" size={24} />
                  <span>Email us</span>
                </a>

                <div className="pt-6">
                  <p className="text-sm text-gray-400 mb-4">Find me on LinkedIn and GitHub, you can also See my Instagram on QR Code</p>
                  <div className="flex space-x-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-all">
                      <Linkedin className="text-gray-600" size={24} />
                    </a>
                    <a href="https://github.com/rmarrayyanpasha-creator" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-all">
                      <Github className="text-gray-600" size={24} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Instagram QR Code */}
              <div className="flex items-center justify-center">
                <div className="bg-white p-6 rounded-2xl">
                  <img
                    src={instagramQR}
                    alt="Instagram QR Code - @Rey"
                    className="w-full max-w-xs"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>&copy; 2025 <span className="text-gray-800 font-semibold">Rey</span> | All rights reserved</p>
        </div>
      </footer>

      {/* About Modal Overlay */}
      {showAbout && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowAbout(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white border-2 border-gray-300 rounded-3xl p-8 md:p-12 max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">About Me</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Hello! I'm <span className="text-gray-800 font-semibold">Rey (Rey)</span> - dedicated to my role in turning programming logic and UI/UX designs into visually appealing code. Over the past few years, I have honed my coding abilities and developed a strong foundation in various programming languages and frameworks.
              </p>
              <p>
                I am a student at <span className="text-gray-800 font-semibold">Universitas Gunadarma</span>, pursuing a Bachelor's degree in <span className="text-gray-800 font-semibold">Information Systems (S1 Sistem Informasi)</span>, with a specialization in Software and AI. My passion lies in creating digital solutions that are both functional and aesthetically pleasing.
              </p>
              <p>
                Currently, I'm working as a <span className="text-gray-800 font-semibold">freelancer</span>, taking on various projects that challenge my skills and allow me to grow professionally. I specialize in:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Web Development (React, Next.js, TypeScript)</li>
                <li>AI Integration (Gemini AI, Machine Learning)</li>
                <li>UI/UX Design Implementation</li>
                <li>Full-stack Application Development</li>
                <li>Responsive & Modern Web Applications</li>
              </ul>
              <p>
                My journey in tech has been driven by curiosity and a desire to create meaningful digital experiences. Whether it's building intelligent chatbots, creating content generation tools, or developing complex web applications, I approach every project with dedication and attention to detail.
              </p>
              <p className="text-gray-700 font-medium">
                Let's build something amazing together!
              </p>
              <button
                onClick={() => setShowAbout(false)}
                className="mt-6 px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors font-semibold"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
