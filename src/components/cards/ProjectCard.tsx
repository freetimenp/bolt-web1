import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    technologies: string[];
    category: string[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden group"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
          <div className="relative z-10">
            <div className="flex flex-wrap gap-2 mb-2">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-blue-600/80 text-white text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-gray-600/80 text-white text-xs rounded-full">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
            <Link 
              to={`/projects/${project.id}`}
              className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
            >
              View Details <ExternalLink size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;