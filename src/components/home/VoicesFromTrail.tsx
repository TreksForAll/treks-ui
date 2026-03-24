import KeyboardArrowLeftRounded from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MobileStepper from '@mui/material/MobileStepper';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const VoicesFromTrail = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sanjay Chabra',
      location: 'Singapore',
      event: 'Aquaterra Camp • Sep 2025',
      role: 'Buddy',
      image: '/Sanjay.webp',
      quote: 'I am currently living in Singapore. As part of my journey to reconnect with my roots, I joined the camp thinking I came to help as a buddy- but instead, I found healing. It was an experience to witness firsthand how independent and high-spirited people with disabilities are, taking on new challenges undeterred by their disabilities. So many of my own prejudices dissolved through this experience; the differences, I realized, are only in our minds. I would recommend this to everyone — I also ended up befriending several lovely, fearless souls along the way.'
    },
    {
      name: 'Jyotirmayee Nayak',
      location: 'Behrampur, Orissa',
      event: 'Dayara Bugyal Trek & Aquaterra Camp • April 2025 & Sep 2025',
      role: 'Participant with Albinism and Blood Disorder',
      image: '/Jyotirmayee-Nayak.webp',
      quote: 'Living with albinism, severe anemia, and the challenges of small-town life, I grew up believing the outdoors weren\'t for me. A friend\'s encouragement led me to join Treks for All\'s first trek, and within three months, I found myself enduring a 48-hour, three-mode journey just to return to camp. The love, encouragement, unfiltered laughter, and friendships I found here keep me coming back again and again.'
    },
    {
      name: 'Meenakshi (Aarush\'s mother)',
      location: 'Delhi',
      event: 'Aquaterra Camp • Sep 2025',
      role: 'Caregiver to child with autism',
      image: '/Meenakshi-Aarush.webp',
      quote: 'My son Aarush, is a teenager with autism. He\'s never been allowed to join school camps because of his disability. I came to the Treks for All camp reluctantly, prepared to stay on the sidelines — bracing myself for yet another experience of exclusion. But what I witnessed was beyond anything I imagined. The Aquaterra team was extraordinary; patient, inclusive, and so effortlessly natural in the way they engaged him. Watching Aarush lead the pack on the trail, laughing and connecting with others, made me feel free — truly carefree.'
    },
    {
      name: 'Sakshi Chauhan',
      location: 'Rishikesh, Uttrakhand',
      event: 'Dayara Bugyal Trek Apr 2025 & Aquaterra Camp • Sep 2025',
      role: 'Founding Team Member – Treks for All, Disability Rights Advocacy, International Wheelchair Basketball Player, Participant with amputation',
      image: '/Sakshi.webp',
      quote: 'After my accident, which led to an amputation, trekking became a distant dream; a hope I held onto against all odds. For someone who\'s always been a mountain girl, it felt devastating to imagine life without the trails. But everything changed as I climbed Dayara Bugyal… and reached the summit. The gentle care, the unwavering one-to-one support, the love, and the warmth of my buddy made the impossible feel possible again.'
    }
  ];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => window.clearInterval(intervalId);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-[#f5f5f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="border-l-[5px] border-[#e0aa04] pl-4 mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] text-[#e0aa04]" style={{ fontWeight: 700 }}>
              GUESTS SPEAK
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-[#377d87] font-semibold uppercase mt-1" style={{ fontWeight: 600 }}>
              LIFE-CHANGING MOMENTS. JOURNEYS THAT TRANSFORM
            </p>
          </div>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-stretch border-l-[6px] border-[#e0aa04]"
            >
              {/* Photo */}
              <div className="flex items-center justify-center p-8 md:p-10 flex-shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-[#e0aa04] ring-offset-4 flex-shrink-0">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                    width="224"
                    height="224"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 md:p-10 md:pl-4 flex flex-col justify-center">
                <blockquote className="text-lg md:text-xl text-[#2c3e50] leading-relaxed mb-6 font-medium">
                  {current.quote}
                </blockquote>
                <div>
                  <p className="font-bold text-[#1a1a1a] text-lg">— {current.name}</p>
                  <p className="text-[#666] text-sm mt-0.5">{current.role}, {current.location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <Box className="mt-8 flex justify-end">
            <MobileStepper
              variant="dots"
              steps={testimonials.length}
              position="static"
              activeStep={currentIndex}
              backButton={
                <IconButton
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  size="small"
                  sx={{
                    width: 36,
                    height: 36,
                    border: '1px solid #d7dce2',
                    color: '#6b7280',
                    bgcolor: '#ffffff',
                    boxShadow: '0 4px 14px rgba(15, 23, 42, 0.06)',
                    '&:hover': {
                      bgcolor: '#ffffff',
                      borderColor: '#377d87',
                      color: '#377d87'
                    }
                  }}
                >
                  <KeyboardArrowLeftRounded fontSize="small" />
                </IconButton>
              }
              nextButton={
                <IconButton
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  size="small"
                  sx={{
                    width: 36,
                    height: 36,
                    border: '1px solid #d7dce2',
                    color: '#6b7280',
                    bgcolor: '#ffffff',
                    boxShadow: '0 4px 14px rgba(15, 23, 42, 0.06)',
                    '&:hover': {
                      bgcolor: '#ffffff',
                      borderColor: '#377d87',
                      color: '#377d87'
                    }
                  }}
                >
                  <KeyboardArrowRightRounded fontSize="small" />
                </IconButton>
              }
              sx={{
                width: 'fit-content',
                maxWidth: '100%',
                px: 0,
                bgcolor: 'transparent',
                gap: 1.5,
                alignItems: 'center',
                '.MuiMobileStepper-dot': {
                  width: 10,
                  height: 10,
                  mx: '4px',
                  bgcolor: '#d9dee7'
                },
                '.MuiMobileStepper-dotActive': {
                  bgcolor: '#5b5ce6'
                },
                '.MuiMobileStepper-dots': {
                  flex: '0 1 auto',
                  px: 0,
                  mx: 1
                }
              }}
            />
          </Box>
        </div>
      </div>
    </section>
  );
};

export default VoicesFromTrail;
