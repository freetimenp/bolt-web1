import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

interface PublicationCardProps {
  publication: {
    id: number;
    title: string;
    journal: string;
    date: string;
    link: string;
    abstract: string;
    image?: string;
    status: 'published' | 'in-review' | 'drafting';
  };
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  const statusColors = {
    published: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-400',
    'in-review': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-400',
    drafting: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-400',
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      {publication.image && (
        <div className="md:w-1/3 bg-gray-200 dark:bg-gray-800">
          <img 
            src={publication.image} 
            alt={publication.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className={`p-6 ${publication.image ? 'md:w-2/3' : 'w-full'}`}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {publication.title}
          </h3>
          <span className={`px-2 py-1 rounded-full text-xs ${statusColors[publication.status]}`}>
            {publication.status.charAt(0).toUpperCase() + publication.status.slice(1)}
          </span>
        </div>
        
        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
          <span className="mr-4">{publication.journal}</span>
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            <span>{publication.date}</span>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {publication.abstract}
        </p>
        
        <a 
          href={publication.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Read Publication <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default PublicationCard;