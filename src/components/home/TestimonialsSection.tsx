import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      trip: 'Accessible Roopkund Trek',
      rating: 5,
      text: 'The accessible Roopkund trek with Treks for All was absolutely phenomenal. The adaptive equipment, empathetic guides, and accessibility support exceeded every expectation. The mysterious lake and inclusive community will stay with me forever.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      accessibility: 'Wheelchair user with limited mobility'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      trip: 'Adaptive Tons River Rafting',
      rating: 5,
      text: 'As someone with visual impairment, I never thought river rafting was possible. Treks for All proved me wrong with their incredible adaptive techniques, audio guidance, and supportive buddy system. Pure magic on the water!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      accessibility: 'Visual impairment with guide dog'
    },
    {
      name: 'Sarah Mitchell',
      location: 'London, UK',
      trip: 'Inclusive Ladakh Expedition',
      rating: 5,
      text: "Traveling from London with my cognitive differences, I was amazed by Treks for All's understanding and flexibility. The sensory-friendly accommodations, patient guides, and inclusive community made this life-changing.",
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      accessibility: 'Neurodivergent with sensory needs'
    }
  ];

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="border-l-[5px] border-[#e0aa04] pl-4 mb-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] text-[#e0aa04]" style={{ fontWeight: 700 }}>
                Accessible Adventure Success Stories
              </h2>
            </div>
            <p className="text-[#377d87] text-lg">
              Hear from adventurers who have experienced the magic of barrier-free exploration
            </p>
          </motion.div>

          {/* Stats inline */}
          <div className="flex items-center gap-8 flex-shrink-0">
            <div className="text-left">
              <div className="w-6 h-[3px] bg-[#e0aa04] mb-2"></div>
              <div className="text-4xl font-bold text-[#377d87]" style={{ fontWeight: 800 }}>98%</div>
              <div className="text-xs uppercase tracking-widest text-[#377d87]/60 mt-1">Would recommend</div>
            </div>
            <div className="w-px h-12 bg-[#d1ebed]"></div>
            <div className="text-left">
              <div className="w-6 h-[3px] bg-[#e0aa04] mb-2"></div>
              <div className="text-4xl font-bold text-[#377d87]" style={{ fontWeight: 800 }}>4.9</div>
              <div className="text-xs uppercase tracking-widest text-[#377d87]/60 mt-1">Avg. rating</div>
            </div>
          </div>
        </div>

        {/* Testimonial card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="border border-[#d1ebed]"
            >
              <div className="h-[4px] bg-[#377d87] w-full"></div>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Quote */}
                <div className="lg:col-span-2 p-8 md:p-12 bg-white">
                  <Quote className="h-10 w-10 text-[#e0aa04] mb-6" />
                  <blockquote className="text-lg md:text-xl text-[#2c646c] leading-relaxed mb-8 font-medium">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#e0aa04] text-[#e0aa04]" />
                    ))}
                  </div>
                </div>

                {/* Author panel */}
                <div className="bg-[#e8f5f6] p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#d1ebed]">
                  <div>
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="h-16 w-16 object-cover mb-4 border-2 border-[#e0aa04]"
                    />
                    <div className="font-bold text-[#214b51] text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-[#377d87] text-sm mt-1">
                      {testimonials[currentTestimonial].location}
                    </div>
                    <div className="text-[#377d87] text-sm font-medium mt-3 uppercase tracking-wide text-xs">
                      {testimonials[currentTestimonial].trip}
                    </div>
                  </div>
                  <div className="mt-6 inline-block bg-[#377d87]/10 text-[#214b51] px-3 py-1.5 text-xs font-semibold uppercase tracking-wide">
                    {testimonials[currentTestimonial].accessibility}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`transition-all duration-300 ${
                    i === currentTestimonial ? 'w-8 h-2 bg-[#e0aa04]' : 'w-2 h-2 bg-[#d1ebed] hover:bg-[#377d87]'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 border border-[#d1ebed] flex items-center justify-center text-[#377d87] hover:bg-[#e8f5f6] hover:border-[#377d87] transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 border border-[#d1ebed] flex items-center justify-center text-[#377d87] hover:bg-[#e8f5f6] hover:border-[#377d87] transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      trip: 'Accessible Roopkund Trek',
      rating: 5,
      text: 'The accessible Roopkund trek with Treks for All was absolutely phenomenal. The adaptive equipment, empathetic guides, and accessibility support exceeded every expectation. The mysterious lake and inclusive community will stay with me forever.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      accessibility: 'Wheelchair user with limited mobility'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      trip: 'Adaptive Tons River Rafting',
      rating: 5,
      text: 'As someone with visual impairment, I never thought river rafting was possible. Treks for All proved me wrong with their incredible adaptive techniques, audio guidance, and supportive buddy system. Pure magic on the water!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      accessibility: 'Visual impairment with guide dog'
    },
    {
      name: 'Sarah Mitchell',
      location: 'London, UK',
      trip: 'Inclusive Ladakh Expedition',
      rating: 5,
      text: 'Traveling from London with my cognitive differences, I was amazed by Treks for All\'s understanding and flexibility. The sensory-friendly accommodations, patient guides, and inclusive community made this life-changing.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      accessibility: 'Neurodivergent with sensory needs'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Geometric background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-adventure-900/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-2/3 bg-gradient-to-tl from-primary-900/30 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-adventure-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 bg-adventure-500/20 text-primary-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <MessageSquare className="h-4 w-4" />
                <span>TRANSFORMATIVE STORIES</span>
              </div>

              <div className="border-l-[5px] border-[#e0aa04] pl-4 mb-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] text-[#e0aa04]" style={{ fontWeight: 700 }}>
                  Accessible Adventure Success Stories
                </h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                Hear from adventurers who have experienced the magic of barrier-free exploration with Treks for All
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-1 flex items-center justify-center">
            <div className="text-left text-white">
              <div className="text-4xl font-bold text-primary-400 mb-2">98%</div>
              <div className="text-slate-300">Would recommend to others</div>
              <div className="text-2xl font-bold text-adventure-400 mb-2 mt-4">4.9</div>
              <div className="text-slate-300">Average rating</div>
            </div>
          </div>
        </div>

        {/* Testimonial Cards in Masonry Style */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Featured Testimonial */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 h-full"
                >
                  <div className="flex flex-col h-full">
                    <Quote className="h-12 w-12 text-primary-400 mb-6" />
                    
                    <blockquote className="text-lg text-white leading-relaxed mb-8 flex-1">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>

                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="h-16 w-16 rounded-full object-cover border-2 border-adventure-400/50"
                      />
                      <div>
                        <div className="font-bold text-white text-lg">
                          {testimonials[currentTestimonial].name}
                        </div>
                        <div className="text-slate-300">
                          {testimonials[currentTestimonial].location} • {testimonials[currentTestimonial].trip}
                        </div>
                        <div className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-medium mt-1">
                          {testimonials[currentTestimonial].accessibility}
                        </div>
                        <div className="flex items-center space-x-1 mt-2">
                          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Side Panel with All Testimonials */}
            <div className="lg:col-span-1 space-y-4">
              {testimonials.map((testimonial, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-white/20 border-2 border-adventure-400/50'
                      : 'bg-white/5 hover:bg-white/10 border border-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-white text-sm truncate">
                        {testimonial.name}
                      </div>
                      <div className="text-slate-400 text-xs truncate">
                        {testimonial.trip}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-current text-yellow-400" />
                      <span className="text-white text-xs">{testimonial.rating}</span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
