import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const VoicesFromTrail = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedIndexes(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const itemsPerPage = 4;

  const testimonials = [
    {
      name: 'Sanjay Chabra',
      location: 'Singapore',
      event: 'Aquaterra Camp • Sep 2025',
      role: 'Buddy',
      image: '/Sanjay.webp',
      quote: 'I am currently living in Singapore. As part of my journey to reconnect with my roots, I joined the camp thinking I came to help as a buddy- but instead, I found healing. It was an experience to witness firsthand how independent and high-spirited people with disabilities are, taking on new challenges undeterred by their disabilities. So many of my own prejudices dissolved through this experience; the differences, I realized, are only in our minds. I would recommend this to everyone — I also ended up befriending several lovely, fearless souls along the way.',
      readMore: true
    },
    {
      name: 'Jyotirmayee Nayak',
      location: 'Behrampur, Orissa',
      event: 'Dayara Bugyal Trek & Aquaterra Camp • April 2025 & Sep 2025',
      role: 'Participant with Albinism and Blood Disorder',
      image: '/Jyotirmayee-Nayak.webp',
      quote: 'Living with albinism, severe anemia, and the challenges of small-town life, I grew up believing the outdoors weren\'t for me. A friend\'s encouragement led me to join Treks for All\'s first trek, and within three months, I found myself enduring a 48-hour, three-mode journey just to return to camp. The love, encouragement, unfiltered laughter, and friendships I found here keep me coming back again and again.',
      readMore: true
    },
    {
      name: 'Meenakshi (Aarush\'s mother)',
      location: 'Delhi',
      event: 'Aquaterra Camp • Sep 2025',
      role: 'Caregiver to child with autism',
      image: '/Meenakshi-Aarush.webp',
      quote: 'My son Aarush, is a teenager with autism. He\'s never been allowed to join school camps because of his disability. I came to the Treks for All camp reluctantly, prepared to stay on the sidelines — bracing myself for yet another experience of exclusion. But what I witnessed was beyond anything I imagined. The Aquaterra team was extraordinary; patient, inclusive, and so effortlessly natural in the way they engaged him. Watching Aarush lead the pack on the trail, laughing and connecting with others, made me feel free — truly carefree.',
      readMore: true
    },
    {
      name: 'Sakshi Chauhan',
      location: 'Rishikesh, Uttrakhand',
      event: 'Dayara Bugyal Trek Apr 2025 & Aquaterra Camp • Sep 2025',
      role: 'Founding Team Member – Treks for All, Disability Rights Advocacy, International Wheelchair Basketball Player, Participant with amputation',
      image: '/Sakshi.webp',
      quote: 'After my accident, which led to an amputation, trekking became a distant dream; a hope I held onto against all odds. For someone who\'s always been a mountain girl, it felt devastating to imagine life without the trails. But everything changed as I climbed Dayara Bugyal… and reached the summit. The gentle care, the unwavering one-to-one support, the love, and the warmth of my buddy made the impossible feel possible again.',
      readMore: true
    }
  ];

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = currentIndex * itemsPerPage;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-20 bg-earth-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M50 15l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z' fill='%23000' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.25em] mb-4 bg-gradient-to-b from-[#3b3939] to-[#929192] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              GUESTS SPEAK
            </h2>
            <div className="w-32 md:w-48 h-0.5 mb-4" style={{ backgroundColor: '#FFD700' }}></div>
            <p className="text-lg md:text-xl lg:text-2xl text-earth-800 font-black uppercase tracking-tight leading-tight text-center" style={{ fontWeight: 900 }}>
              LIFE-CHANGING MOMENTS. JOURNEYS THAT TRANSFORM
            </p>
          </div>
        </motion.div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 bg-white hover:bg-earth-50 text-earth-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 bg-white hover:bg-earth-50 text-earth-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visibleTestimonials.map((testimonial, index) => {
              const actualIndex = startIndex + index;
              const isExpanded = expandedIndexes.includes(actualIndex);
              return (
                <motion.div
                  key={actualIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-64 object-cover"
                    width="400"
                    height="256"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-earth-800 mb-1">
                      {testimonial.name} from {testimonial.location}
                    </h3>
                    <p className="text-primary-600 font-medium mb-4">
                      {testimonial.event}
                    </p>
                    <p className="text-base text-earth-700 leading-relaxed mb-4">
                      {isExpanded ? testimonial.quote : truncateText(testimonial.quote)}
                    </p>
                    <button
                      onClick={() => toggleExpanded(actualIndex)}
                      className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoicesFromTrail;
