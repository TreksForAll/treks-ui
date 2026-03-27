import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

const VSheshRecognitionsSection = () => {

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
  const marqueeItems = [...allItems, ...allItems, ...allItems]; // Tripled to ensure smooth infinite scrolling

  return (
    <section className="py-10 md:py-12 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6 md:p-8 relative bg-white border border-[#d1ebed] shadow-sm flex flex-col overflow-hidden"
        >
          <div className="z-10 w-full bg-white pb-2 relative border-b border-[#e8f5f6]">
            <SectionTitle 
              title="Affiliations & Recognitions"
              description="Honors received by the founding organisations for excellence in adventure travel and disability inclusion"
              align="left"
              className="mb-0"
            />
          </div>

          <div className="relative w-full overflow-hidden mt-6 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-white after:to-transparent">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 75, repeat: Infinity }}
              className="flex items-stretch gap-8 w-max"
            >
              {marqueeItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-start py-4 h-auto w-56 flex-shrink-0 transition-all duration-300 hover:scale-105 bg-[#e8f5f6]/30 border border-[#e8f5f6] rounded-xl px-2 group"
                >
                  <div className="h-28 w-full flex items-center justify-center mb-3 bg-white rounded-lg p-3 shadow-sm border border-[#d1ebed] group-hover:border-[#377d87]/30 transition-colors">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[0.7rem] text-[#2c646c] text-center leading-snug font-semibold flex-1 px-1">
                    {item.title}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VSheshRecognitionsSection;
