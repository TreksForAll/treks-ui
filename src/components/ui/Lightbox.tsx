import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  ChevronLeft, 
  ChevronRight,
  Maximize2
} from 'lucide-react';

interface LightboxImage {
  src: string;
  alt: string;
  title?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate
}) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Reset state when image changes
  useEffect(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case '+':
        case '=':
          handleZoom(0.3);
          break;
        case '-':
          handleZoom(-0.3);
          break;
        case '0':
          resetView();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(images.length - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0);
    }
  };

  const handleZoom = useCallback((delta: number) => {
    setZoom(prev => Math.max(0.5, Math.min(3, prev + delta)));
  }, []);

  const resetView = useCallback(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
      e.preventDefault();
    }
  }, [zoom, position]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  }, [isDragging, dragStart, zoom]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      {/* Main Image Container */}
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-full max-h-full w-auto h-auto object-contain cursor-grab active:cursor-grabbing select-none"
            style={{
              transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
              transition: isDragging ? 'none' : 'transform 0.3s ease',
              maxWidth: '100%',
              maxHeight: '100%'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            draggable={false}
          />
        </motion.div>
      </div>

      {/* Top Controls */}
      <div className="absolute top-4 left-4 right-4 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              {currentIndex + 1} of {images.length}
            </span>
            {currentImage.title && (
              <span className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                {currentImage.title}
              </span>
            )}
          </div>
          
          <button
            onClick={onClose}
            className="bg-black/70 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/80 transition-colors duration-300"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-sm text-white p-4 rounded-full hover:bg-black/80 transition-all duration-300 transform hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-sm text-white p-4 rounded-full hover:bg-black/80 transition-all duration-300 transform hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </>
      )}

      {/* Bottom Controls */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="flex justify-center">
            <div className="bg-black/70 backdrop-blur-sm rounded-full p-3 flex items-center space-x-2 overflow-x-auto max-w-full">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => onNavigate(index)}
                  className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentIndex
                      ? 'ring-2 ring-white scale-110'
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Lightbox;
