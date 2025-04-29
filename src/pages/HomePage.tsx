import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Publications from '../components/sections/Publications';
import Exposure from '../components/sections/Exposure';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';

const HomePage: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const publicationsRef = useRef<HTMLDivElement>(null);
  const exposureRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <Hero 
        scrollToAbout={() => scrollToSection(aboutRef)}
      />
      
      <motion.div 
        ref={aboutRef}
        variants={fadeInUpVariants}
        viewport={{ once: true }}
        whileInView="visible"
        initial="hidden"
      >
        <About />
      </motion.div>
      
      <motion.div 
        ref={projectsRef}
        variants={fadeInUpVariants}
        viewport={{ once: true }}
        whileInView="visible"
        initial="hidden"
      >
        <Projects />
      </motion.div>
      
      <motion.div 
        ref={publicationsRef}
        variants={fadeInUpVariants}
        viewport={{ once: true }}
        whileInView="visible"
        initial="hidden"
      >
        <Publications />
      </motion.div>
      
      <motion.div 
        ref={exposureRef}
        variants={fadeInUpVariants}
        viewport={{ once: true }}
        whileInView="visible"
        initial="hidden"
      >
        <Exposure />
      </motion.div>
      
      <motion.div 
        ref={skillsRef}
        variants={fadeInUpVariants}
        viewport={{ once: true }}
        whileInView="visible"
        initial="hidden"
      >
        <Skills />
      </motion.div>
      
      <motion.div 
        ref={contactRef}
        variants={fadeInUpVariants}
        viewport={{ once: true }}
        whileInView="visible"
        initial="hidden"
      >
        <Contact />
      </motion.div>
    </motion.main>
  );
};

export default HomePage;