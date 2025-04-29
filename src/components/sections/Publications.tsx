import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { publications } from '../../data/publications';
import PublicationCard from '../cards/PublicationCard';

const Publications: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'published' | 'in-review' | 'drafting'>('all');
  
  const publishedCount = publications.filter(p => p.status === 'published').length;
  const inReviewCount = publications.filter(p => p.status === 'in-review').length;
  const draftingCount = publications.filter(p => p.status === 'drafting').length;
  const totalCount = publications.length;

  const stats = [
    { label: 'All Publications', count: totalCount, filter: 'all' },
    { label: 'Published', count: publishedCount, filter: 'published' },
    { label: 'In Review', count: inReviewCount, filter: 'in-review' },
    { label: 'Drafting', count: draftingCount, filter: 'drafting' },
  ];

  const filteredPublications = publications.filter(pub => 
    activeFilter === 'all' ? true : pub.status === activeFilter
  );

  return (
    <section id="publications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Publications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Selected articles, research papers, and industry publications I've contributed to.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <motion.button
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveFilter(stat.filter as any)}
              className={`bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center transition-colors ${
                activeFilter === stat.filter 
                  ? 'ring-2 ring-blue-600 dark:ring-blue-400' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <div className={`text-3xl font-bold mb-2 ${
                activeFilter === stat.filter
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-900 dark:text-white'
              }`}>
                {stat.count}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.button>
          ))}
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          layout
        >
          {filteredPublications.map((publication, index) => (
            <motion.div
              key={publication.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              <PublicationCard publication={publication} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;