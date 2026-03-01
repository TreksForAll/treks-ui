import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const skipLinkRef = useRef<HTMLAnchorElement>(null);
  const heroRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    if (isVideoPlaying) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVideoPlaying]);

  const heroContent = {
    src: '/Video-Cover.webp',
    alt: 'Accessible mountain trekking with adaptive equipment and inclusive support in Himalayan landscape',
    cta: 'Choose Your Adventure',
    secondaryCta: 'Watch Our Story',
    link: '/trips',
    videoId: 'g50DXEXofpM'
  };

  return (
    <>
      {/* Skip Navigation Link for Screen Readers */}
      <a
        ref={skipLinkRef}
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-warning-400 text-earth-900 px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
      >
        Skip to main content
      </a>

      <section
        ref={heroRef}
        className="relative w-full min-h-screen overflow-hidden mt-20"
        role="banner"
        aria-label="Hero section showcasing accessible adventure experiences"
      >
        {/* Background Image */}
        <motion.div
          className="absolute inset-0"
          role="img"
          aria-label={heroContent.alt}
          style={{ y }}
        >
          <img
            src={heroContent.src}
            alt={heroContent.alt}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            width="1920"
            height="1080"
            style={{
              imageRendering: 'optimizeQuality'
            }}
          />
        </motion.div>

        {/* Main Content - Properly Positioned */}
        <div className="relative z-20 min-h-screen flex items-end pt-8 pb-32 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex items-center justify-center">
              {/* Main Content - Centered */}
              <div className="text-white text-center max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                  className="space-y-6 sm:space-y-8"
                >
                  {/* Tagline in Cursive */}
                  <p
                    className="text-4xl sm:text-5xl text-white/90 shadows-into-light"
                  >
                    Different abilities. One journey
                  </p>

                  {/* CTA Buttons - Touch-Friendly Sizing */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center items-center px-4">
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="w-full sm:w-auto group bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 border border-white/30 min-h-[3rem] focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent text-base sm:text-lg flex items-center justify-center space-x-2"
                      aria-label="Watch our story video"
                    >
                      <Play className="h-5 w-5" />
                      <span>{heroContent.secondaryCta}</span>
                    </button>

                    <Link
                      to={heroContent.link}
                      className="w-full sm:w-auto group bg-warning-400 text-earth-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-warning-500 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-warning-300 focus:ring-offset-2 focus:ring-offset-transparent inline-flex items-center justify-center space-x-2 min-h-[3rem] text-base sm:text-lg"
                      aria-label={`${heroContent.cta} - Navigate to accessible adventures`}
                    >
                      <span>{heroContent.cta}</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Centered Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.5 }}
          className="absolute bottom-20 sm:bottom-12 left-0 right-0 z-20"
          role="navigation"
          aria-label="Scroll to explore more content"
        >
          <div className="flex flex-col items-center justify-center w-full">
            <button
              onClick={() => {
                const nextSection = document.querySelector('#main-content');
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2"
              aria-label="Scroll to next section"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-6 h-10 sm:w-7 sm:h-12 border-2 border-white/40 rounded-full flex justify-center mx-auto"
              >
                <div className="w-1 h-3 sm:h-4 bg-white/70 rounded-full mt-2 sm:mt-3"></div>
              </motion.div>
            </button>
          </div>
        </motion.div>

        {/* Mobile Touch Indicators */}
        <div className="sm:hidden absolute bottom-8 left-4 right-4 z-20">
          <div className="text-center">
            <span className="text-white/60 text-xs bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
              Explore accessible adventures below
            </span>
          </div>
        </div>

      </section>

      {/* Video Modal - Outside section for proper z-index */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setIsVideoPlaying(false)}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute -top-14 right-0 text-white hover:text-gray-300 transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-white rounded-full bg-black/70 hover:bg-black/90"
                aria-label="Close video"
                type="button"
              >
                <X className="h-8 w-8" />
              </button>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${heroContent.videoId}?autoplay=1`}
                  title="Treks For All Story Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroSection;