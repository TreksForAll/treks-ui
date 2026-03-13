import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'landscape';
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  aspectRatio,
  loading = 'lazy',
  decoding = 'async',
  onLoad,
  onError,
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case 'video': return 'aspect-video';
      case 'square': return 'aspect-square';
      case 'portrait': return 'aspect-[3/4]';
      case 'landscape': return 'aspect-[4/3]';
      default: return '';
    }
  };

  const placeholderSrc = placeholder || `data:image/svg+xml;base64,${btoa(`
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="18" fill="#9ca3af" text-anchor="middle" dy=".3em">
        Loading...
      </text>
    </svg>
  `)}`;

  return (
    <div ref={imgRef} className={`relative overflow-hidden bg-earth-100 ${getAspectRatioClass()}`}>
      {/* Placeholder/Loading State */}
      {!isLoaded && !hasError && (
        <div className={`absolute inset-0 bg-earth-100 ${className}`}>
          <div className="w-full h-full bg-gradient-to-br from-earth-100 to-earth-200 animate-pulse rounded-lg flex items-center justify-center">
            <div className="text-earth-400 text-left">
              <div className="w-8 h-8 mx-auto mb-2 bg-earth-300 rounded animate-pulse"></div>
              <div className="text-sm">Loading...</div>
            </div>
          </div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className={`absolute inset-0 bg-earth-200 flex items-center justify-center ${className}`}>
          <div className="text-earth-500 text-left">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Image unavailable</div>
          </div>
        </div>
      )}

      {/* Actual image */}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : loading}
          decoding={decoding}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0,
            scale: isLoaded ? 1 : 1.05
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      )}
    </div>
  );
};

export default LazyImage;
