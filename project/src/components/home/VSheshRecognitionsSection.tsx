import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const VSheshRecognitionsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const affiliations = [
    { image: '/ATOAI.webp', alt: 'ATOAI - Adventure Tour Operators Association of India', title: 'Adventure Tour Operators Association of India' },
    { image: '/ATTA.webp', alt: 'ATTA - Adventure Travel Trade Association', title: 'Adventure Travel Trade Association' },
    { image: '/IMF.webp', alt: 'IMF - Indian Mountaineering Foundation', title: 'Indian Mountaineering Foundation' },
    { image: '/MOTI.webp', alt: 'Ministry of Tourism India', title: 'Ministry of Tourism India' },
    { image: '/NatGeo.webp', alt: 'National Geographic - Best Adventure Travel Companies', title: 'National Geographic Best Adventure Travel' },
    { image: '/Outlook.webp', alt: 'Outlook Responsible Tourism', title: 'Outlook Responsible Tourism' },
    { image: '/TripAdvisor.webp', alt: 'TripAdvisor Certificate of Excellence', title: 'TripAdvisor Certificate of Excellence' }
  ];

  const recognitions = [
    {
      image: '/V-Shesh-Award.webp',
      alt: '10th Emerging India Award',
      title: 'Social business of the year 10th Emerging India Awards'
    },
    {
      image: '/V-Shesh-disability-affaris-government-of-india.webp',
      alt: 'Department of Empowerment of Persons with Disabilities',
      title: 'Member of Sugamya Bharat Abhiyaan Accessible India Campaign'
    },
    {
      image: '/V-Shesh-Global-Diversity.webp',
      alt: 'The Global Diversity List',
      title: 'List on the Global Diversity Consultant list supported by The Economist'
    },
    {
      image: '/V-shesh-Govt.webp',
      alt: 'Government of India Recognition',
      title: 'National Award from Empowerment of Persons with Disabilities'
    },
    {
      image: '/V-Shesh-ministry-labour-government-of-india.webp',
      alt: 'Ministry of Labour Government of India',
      title: 'Vocational Rehabilitation Center Training and placement'
    },
    {
      image: '/V-Shesh-NCPEDP.webp',
      alt: 'NCPEDP Recognition',
      title: 'NCPEDP Mphasis Award'
    },
    {
      image: '/V-Shesh-NCPEDP-Hellen.webp',
      alt: 'NCPEDP Helen Keller Award',
      title: 'NCPEDP Helen Keller Award'
    },
    {
      image: '/V-Shesh-United.webp',
      alt: 'United Way Chennai',
      title: 'United Way Chennai Champion'
    }
  ];

  const allItems = [...affiliations, ...recognitions];

  return (
    <section className="py-16 bg-earth-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.25em] mb-4 bg-gradient-to-b from-[#3b3939] to-[#929192] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
            Affiliations & Recognitions
          </h2>
          <div className="w-32 md:w-48 h-0.5 mx-auto mb-4" style={{ backgroundColor: '#FFD700' }}></div>
        </motion.div>

        <div className="rounded-2xl p-8 md:p-12 relative bg-white">
          <p className="text-center text-earth-600 mb-8 text-base md:text-lg">
            Honors received by the founding organisations for excellence in adventure travel and disability inclusion
          </p>

          <button
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-earth-800" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-earth-800" />
          </button>

          <div ref={scrollContainerRef} className="overflow-x-auto pb-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>{`
              .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="flex items-center gap-8 md:gap-12 min-w-max px-12">
              {allItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center h-40 w-56 flex-shrink-0 transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="max-h-28 max-w-full object-contain mb-2"
                    width="224"
                    height="112"
                    loading="lazy"
                  />
                  <p className="text-xs text-earth-700 text-center leading-tight px-2">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSheshRecognitionsSection;
