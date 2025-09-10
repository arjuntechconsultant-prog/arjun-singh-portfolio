import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profilePic from './assets/profile.jpg';

// Navigation Component
const Navigation = ({ activeSection, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Connect' }
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="section-padding py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold nike-heading"
            whileHover={{ scale: 1.05 }}
          >
            AS
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nike-text font-medium transition-all duration-300 hover:text-nike-orange ${
                  activeSection === item.id ? 'text-nike-orange' : 'text-nike-black'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <motion.div
              className="w-6 h-0.5 bg-nike-black"
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 8 : 0
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-6 h-0.5 bg-nike-black"
              animate={{
                opacity: mobileMenuOpen ? 0 : 1
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-6 h-0.5 bg-nike-black"
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -8 : 0
              }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{
            height: mobileMenuOpen ? 'auto' : 0,
            opacity: mobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="pt-4 pb-2 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left py-3 px-4 nike-text font-medium transition-all duration-300 hover:bg-nike-light-gray hover:text-nike-orange ${
                  activeSection === item.id ? 'text-nike-orange bg-nike-light-gray' : 'text-nike-black'
                }`}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section id="hero" ref={ref} className="min-h-screen flex items-center justify-center bg-white">
      <div className="section-padding w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-center gap-12"
        >
          {/* Profile Picture Placeholder */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/*<div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-nike-orange to-nike-red flex items-center justify-center shadow-2xl">
              <div className="w-44 h-44 md:w-60 md:h-60 rounded-full bg-nike-light-gray flex items-center justify-center">
                <svg className="w-20 h-20 md:w-24 md:h-24 text-nike-gray" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>*/}
            {/*<img src={profilePic} alt="Arjun Singh" className="w-44 h-44 md:w-60 md:h-60 rounded-full object-cover shadow-lg"/>*/}
            <img src={profilePic} alt="Arjun Singh" className="w-44 h-44 md:w-60 md:h-60 rounded-full object-cover object-top shadow-lg"/>
            <p className="text-center mt-4 nike-text text-sm text-nike-gray">Arjun Singh</p>
          </motion.div>

          {/* Content */}
          <div className="text-center md:text-left flex-1">
            <h1 className="nike-hero text-5xl md:text-7xl lg:text-8xl mb-6">
              ARJUN
              <br />
              <span className="text-nike-orange">SINGH</span>
            </h1>
            
            <motion.p 
              className="nike-text text-lg md:text-xl max-w-3xl mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              UT Dallas MBA Class 2027 | Open to Summer 2026 MBA Internship
              <br />
              <span className="font-semibold">Product Management • Operations • Supply Chain</span>
              <br />
              10+ yrs Product Leader | Agile/Scrum | Driving Innovation & Impact
            </motion.p>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="nike-text text-base font-medium text-nike-red">
                Open to relocation across the USA. Do not require visa sponsorship.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a
                href="https://linkedin.com/in/arjunsinghmba"
                target="_blank"
                rel="noopener noreferrer"
                className="nike-button inline-block"
              >
                Connect on LinkedIn
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center bg-nike-light-gray">
      <div className="section-padding w-full max-w-6xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="nike-heading text-5xl md:text-6xl mb-16 text-center">
            ABOUT <span className="text-nike-orange">ME</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="nike-heading text-2xl mb-6">PRODUCT LEADER</h3>
              <p className="nike-text text-lg mb-6">
                I'm Arjun Singh — a product leader who thrives at the intersection of innovation and impact. 
                With over a decade of experience, I craft MVPs that launch in under four months, driving 
                efficiency up by 45% and revenue by 20%.
              </p>
              <p className="nike-text text-lg">
                My journey spans from building intelligent drilling platforms at ExxonMobil to leading 
                agile transformations at DgCrux. I'm fueled by data, design, and a relentless pursuit 
                of excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="nike-heading text-xl mb-4 text-nike-orange">FUN FACTS</h3>
              <ul className="space-y-4">
                <li className="nike-text">🏀 Played basketball as a Klay Thompson–style 3-and-D guard with a 44-inch vertical</li>
                <li className="nike-text">🐎 Learned horseback riding before I could ride a bicycle</li>
                <li className="nike-text">🏆 Sports shaped my approach to challenges, teamwork, and growth</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Experience Section
const ExperienceSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  const experiences = [
    {
      company: "DgCrux",
      role: "Lead Product Manager",
      period: "2020-2024",
      achievements: ["Led agile transformation", "Drove innovation initiatives", "Managed cross-functional teams"]
    },
    {
      company: "ExxonMobil",
      role: "Senior Product Engineer",
      period: "2018-2020",
      achievements: ["Built intelligent drilling platforms", "Optimized operational efficiency", "Led technical innovation"]
    },
    {
      company: "Synechron",
      role: "Product Manager",
      period: "2016-2018",
      achievements: ["Financial services solutions", "Client relationship management", "Product strategy development"]
    },
    {
      company: "Profile Software",
      role: "Senior Software Engineer",
      period: "2014-2016",
      achievements: ["Software architecture design", "Team leadership", "Technical mentoring"]
    }
  ];

  return (
    <section id="experience" ref={ref} className="min-h-screen flex items-center bg-white">
      <div className="section-padding w-full max-w-6xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="nike-heading text-5xl md:text-6xl mb-16 text-center">
            EXPERIENCE <span className="text-nike-orange">TIMELINE</span>
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-nike-orange"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-start mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-nike-light-gray p-6 rounded-lg shadow-md">
                    <h3 className="nike-heading text-xl mb-2">{exp.company}</h3>
                    <h4 className="text-nike-orange font-semibold mb-2">{exp.role}</h4>
                    <p className="nike-text text-sm mb-4 font-medium text-nike-black">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="nike-text text-sm flex items-start">
                          <span className="text-nike-orange mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-nike-orange rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  const skillCategories = [
    {
      category: "Product Strategy",
      skills: ["MVP Development", "Product Roadmapping", "Market Research", "Competitive Analysis"]
    },
    {
      category: "Technical Skills",
      skills: ["Agile/Scrum", "Data Analytics", "Cloud Platforms", "API Design"]
    },
    {
      category: "Leadership",
      skills: ["Stakeholder Alignment", "Team Management", "Cross-functional Collaboration", "Strategic Planning"]
    },
    {
      category: "Design & UX",
      skills: ["UI/UX Design", "User Research", "Wireframing", "Prototyping"]
    }
  ];

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center bg-nike-light-gray">
      <div className="section-padding w-full max-w-6xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="nike-heading text-5xl md:text-6xl mb-16 text-center">
            SKILLS & <span className="text-nike-orange">EXPERTISE</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="nike-heading text-xl mb-6 text-nike-orange">{category.category}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-nike-black rounded-full mr-3"></div>
                      <span className="nike-text">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Education Section
const EducationSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section id="education" ref={ref} className="min-h-screen flex items-center bg-white">
      <div className="section-padding w-full max-w-6xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="nike-heading text-5xl md:text-6xl mb-16 text-center">
            EDUCATION & <span className="text-nike-orange">AWARDS</span>
          </h2>

          <div className="space-y-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-nike-light-gray p-8 rounded-lg max-w-4xl mx-auto">
                <h3 className="nike-heading text-2xl mb-4 text-nike-orange">DUAL DEGREE</h3>
                <h4 className="nike-heading text-xl mb-2">University of Texas at Dallas</h4>
                <p className="nike-text text-lg mb-4">MBA in Product Management & MS in Business Analytics and AI</p>
                <p className="nike-text">Class of 2027 (2025-2027)</p>
              </div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-white border-2 border-nike-black p-8 rounded-lg max-w-4xl mx-auto">
                <h4 className="nike-heading text-xl mb-2">Visvesvaraya Technological University</h4>
                <p className="nike-text text-lg mb-4">Bachelor of Engineering in Information Science</p>
                <p className="nike-text">2008-2012</p>
              </div>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="bg-nike-orange text-white p-6 rounded-lg text-center">
                <h4 className="font-bold text-lg mb-2">UI/UX Certification</h4>
                <p className="text-sm">Design Excellence</p>
              </div>
              <div className="bg-nike-black text-white p-6 rounded-lg text-center">
                <h4 className="font-bold text-lg mb-2">Microsoft Solution Architect</h4>
                <p className="text-sm">Cloud Architecture</p>
              </div>
              <div className="bg-nike-red text-white p-6 rounded-lg text-center">
                <h4 className="font-bold text-lg mb-2">Best Batsman Award</h4>
                <p className="text-sm">Sports Excellence</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center bg-nike-black text-white">
      <div className="section-padding w-full max-w-6xl mx-auto py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            LET'S <span className="text-nike-orange">CONNECT</span>
          </h2>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ready to drive innovation together? Let's create the future of product excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://linkedin.com/in/arjunsinghmba"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-nike-orange text-white px-12 py-4 font-semibold text-xl tracking-wide uppercase transition-all duration-300 hover:bg-white hover:text-nike-black hover:scale-105 focus:outline-none focus:ring-2 focus:ring-nike-orange focus:ring-offset-2 focus:ring-offset-nike-black inline-block"
            >
              Connect on LinkedIn
            </a>
          </motion.div>

          <motion.div
            className="mt-16 pt-8 border-t border-gray-600"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <p className="text-gray-400">Open to relocation across the USA • No visa sponsorship required</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Main App Component
function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}

export default App;