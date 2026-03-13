import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);

  const testimonials = [
    {
      name: 'Mohit',
      description: 'I once struggled to accept my white cane and with it, my blindness',
      quote: '',
      videoId: 't2GEvn0c5zk',
      thumbnail: '/Video-Mohit.webp'
    },
    {
      name: 'Madhuri',
      description: 'My focus was on offering support when needed while fostering independence',
      quote: '',
      videoId: '2bXUKIky3uM',
      thumbnail: '/Video-Madhuri.webp'
    },
    {
      name: 'Sakshi',
      description: 'No safe arrangements for inclusive adventures existed for us',
      quote: '',
      videoId: '8v4t78aTwsA',
      thumbnail: '/Video-Sakshi-web.webp'
    },
    {
      name: 'Pratishtha Gogia',
      description: 'Out here I feel I have faced my fears and conquered them',
      quote: '',
      videoId: 'FOTEsqhk-sw',
      thumbnail: '/Video-Pratishtha-Web.webp'
    },
    {
      name: 'Meenakshi',
      description: 'I felt at peace at the camp. It was wonderful to see Aarush explore new adventures and become a more independent version of himself!',
      quote: '',
      videoId: 'CLZtcnNXIGM',
      thumbnail: '/meenakshi.webp'
    }
  ];

  const itemsPerPage = 4;
  const maxIndex = Math.max(0, testimonials.length - 1);
  const maxDesktopIndex = Math.max(0, testimonials.length - itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? maxIndex : prev + 1));
  };

  const handlePreviousDesktop = () => {
    setDesktopIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNextDesktop = () => {
    setDesktopIndex((prev) => (prev >= maxDesktopIndex ? maxDesktopIndex : prev + 1));
  };

  return (
    <>
      <section className="py-20 bg-earth-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left mb-16"
          >
            <div className="flex flex-col items-start mb-6">
              <div className="w-fit flex flex-col">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.05em] sm:tracking-[0.08em] md:tracking-[0.08em] mb-4 bg-gradient-to-b from-[#3b3939] to-[#929192] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
                  VOICES FROM THE TRAIL
                </h2>
                <div className="w-full h-0.5 mb-4" style={{ backgroundColor: '#f3b815' }}></div>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-earth-600 font-semibold uppercase" style={{ fontWeight: 600 }}>
                In conversation with guests who walked with us.
              </p>
            </div>
          </motion.div>

          {/* Mobile Carousel */}
          <div className="relative flex items-stretch justify-center gap-6 sm:gap-8 pb-8 md:hidden">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors z-10 disabled:opacity-50 disabled:cursor-not-allowed self-center"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600" />
            </button>

            <div className="overflow-hidden w-full max-w-xs sm:max-w-sm flex items-stretch">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer flex-shrink-0 w-full flex"
                    onClick={() => setActiveVideo(testimonial.videoId)}
                  >
                    <div className="relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col bg-white w-full">
                      <div className="relative w-full aspect-[9/16] overflow-hidden rounded-t-2xl flex-shrink-0">
                        <img
                          src={testimonial.thumbnail}
                          alt={`${testimonial.name} testimonial`}
                          className={`w-full h-full object-cover ${index < 2 ? 'object-center' : 'object-top'}`}
                          width="450"
                          height="800"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play className="h-8 w-8 text-primary-600 ml-1" />
                          </div>
                        </div>
                      </div>
                      <div className="p-5 sm:p-6 flex flex-col rounded-b-2xl bg-white flex-grow">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-earth-800 text-left mb-3 break-words">
                          {testimonial.name}
                        </h3>
                        <p className="text-earth-600 text-left text-sm sm:text-base break-words leading-relaxed">
                          {testimonial.description}
                        </p>
                        {testimonial.quote && (
                          <p className="text-earth-600 text-sm leading-relaxed text-justify mt-3">
                            {testimonial.quote}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors z-10 disabled:opacity-50 disabled:cursor-not-allowed self-center"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600" />
            </button>
          </div>

          {/* Desktop Carousel */}
          <div className="hidden md:block relative">
            <button
              onClick={handlePreviousDesktop}
              disabled={desktopIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 bg-white hover:bg-earth-50 text-earth-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={handleNextDesktop}
              disabled={desktopIndex >= maxDesktopIndex}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 bg-white hover:bg-earth-50 text-earth-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>

            <div className="overflow-hidden pb-8">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(calc(-${desktopIndex} * (25% + 18px)))` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.name}
                    className="flex-shrink-0 w-[calc(25%-18px)] flex"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group cursor-pointer w-full flex"
                      onClick={() => setActiveVideo(testimonial.videoId)}
                    >
                      <div className="relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col bg-white w-full">
                        <div className="relative w-full aspect-[9/16] overflow-hidden rounded-t-2xl flex-shrink-0">
                          <img
                            src={testimonial.thumbnail}
                            alt={`${testimonial.name} testimonial`}
                            className={`w-full h-full object-cover ${index < 2 ? 'object-center' : 'object-top'}`}
                            width="450"
                            height="800"
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Play className="h-8 w-8 text-primary-600 ml-1" />
                            </div>
                          </div>
                        </div>
                        <div className="p-5 sm:p-6 flex flex-col rounded-b-2xl bg-white flex-grow">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-earth-800 text-left mb-3 break-words">
                            {testimonial.name}
                          </h3>
                          <p className="text-earth-600 text-left text-sm sm:text-base break-words leading-relaxed">
                            {testimonial.description}
                          </p>
                          {testimonial.quote && (
                            <p className="text-earth-600 text-sm leading-relaxed text-justify mt-3">
                              {testimonial.quote}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setActiveVideo(null)}
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
                onClick={() => setActiveVideo(null)}
                className="absolute -top-14 right-0 text-white hover:text-gray-300 transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-white rounded-full bg-black/70 hover:bg-black/90"
                aria-label="Close video"
                type="button"
              >
                <X className="h-8 w-8" />
              </button>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  title="Participant Testimonial"
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

export default VideoTestimonials;
