import React from 'react';
import { motion } from 'framer-motion';
import { FileText, MapPin, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Professional portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 dark:bg-blue-900 rounded-lg -z-10"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Hello! I'm John Doe.
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I am a passionate software engineer with over 5 years of experience building innovative web and mobile applications. My journey in technology began with a fascination for solving complex problems and has evolved into a career focused on creating intuitive, high-performance digital experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              With expertise in both frontend and backend technologies, I enjoy the full spectrum of software development - from designing elegant user interfaces to architecting robust server systems. I'm particularly interested in React, Node.js, and cloud technologies, always staying current with the latest industry trends.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center">
                <MapPin className="text-blue-600 mr-3" size={24} />
                <span className="text-gray-700 dark:text-gray-300">San Francisco, CA</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="text-blue-600 mr-3" size={24} />
                <span className="text-gray-700 dark:text-gray-300">Available for Freelance</span>
              </div>
              <div className="flex items-center">
                <FileText className="text-blue-600 mr-3" size={24} />
                <a href="#" className="text-blue-600 hover:underline">Download Resume</a>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Let's Talk
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;