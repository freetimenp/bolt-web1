import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  
  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };
  
  if (images.length === 0) {
    return null;
  }
  
  if (images.length === 1) {
    return (
      <div 
        className="rounded-lg overflow-hidden cursor-pointer"
        onClick={() => openModal(0)}
      >
        <img 
          src={images[0]} 
          alt="Project" 
          className="w-full h-auto"
        />
      </div>
    );
  }
  
  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div 
          className="rounded-lg overflow-hidden relative cursor-pointer"
          onClick={() => openModal(currentIndex)}
        >
          <img 
            src={images[currentIndex]} 
            alt={`Project image ${currentIndex + 1}`} 
            className="w-full h-auto"
          />
          
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        {/* Thumbnails */}
        <div className="grid grid-cols-6 gap-2">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`aspect-video cursor-pointer rounded-md overflow-hidden border-2 ${
                index === currentIndex 
                  ? 'border-blue-600 dark:border-blue-400' 
                  : 'border-transparent'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <img 
                src={image} 
                alt={`Thumbnail ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal View */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={images[currentIndex]} 
                    alt={`Project image ${currentIndex + 1}`} 
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                </AnimatePresence>
                
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <button 
                    onClick={handlePrevious}
                    className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
              
              <div className="mt-4 text-center text-white text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;