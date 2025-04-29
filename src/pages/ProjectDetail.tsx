import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';
import ImageGallery from '../components/ImageGallery';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  
  useEffect(() => {
    if (id) {
      const foundProject = projects.find(p => p.id.toString() === id);
      setProject(foundProject);
      
      // Set document title
      if (foundProject) {
        document.title = `${foundProject.title} | Portfolio`;
      }
    }
    
    return () => {
      document.title = 'Portfolio';
    };
  }, [id]);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Project not found</p>
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-16 px-4 md:px-8 max-w-6xl mx-auto"
    >
      <div className="mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ChevronLeft size={20} />
          <span>Back to all projects</span>
        </Link>
      </div>
      
      <article>
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            {project.technologies.map((tech: string, index: number) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            )}
            
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </header>
        
        <div className="mb-10">
          <ImageGallery images={project.images} />
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="mb-6">{project.longDescription}</p>
          
          {project.features && project.features.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="list-disc pl-5 mb-6">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="mb-2">{feature}</li>
                ))}
              </ul>
            </>
          )}
          
          {project.challenges && (
            <>
              <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
              <p className="mb-6">{project.challenges}</p>
            </>
          )}
        </div>
      </article>
    </motion.div>
  );
};

export default ProjectDetail;