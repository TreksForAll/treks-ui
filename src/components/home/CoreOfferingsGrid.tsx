import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mountain, Waves, Home, Globe } from 'lucide-react';

const CoreOfferingsGrid = () => {
  const offerings = [
    {
      title: 'TREKKING',
      description: 'Himalayan expeditions and high-altitude adventures',
      image: 'https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg',
      icon: Mountain,
      link: '/trips?category=treks',
      gradient: 'from-primary-600/90 to-primary-800/90'
    },
    {
      title: 'RIVER EXPEDITIONS',
      description: 'White-water rafting and river adventures',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
      icon: Waves,
      link: '/trips?category=rivers',
      gradient: 'from-blue-600/90 to-blue-800/90'
    },
    {
      title: 'CAMPS',
      description: 'Premium camping and adventure stays',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
      icon: Home,
      link: '/trips?category=camps',
      gradient: 'from-adventure-600/90 to-adventure-800/90'
    },
    {
      title: 'GLOBAL CLIMBS',
      description: 'International expeditions and climbing adventures',
      image: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg',
      icon: Globe,
      link: '/trips?category=climbs',
      gradient: 'from-earth-600/90 to-earth-800/90'
    }
  ];

  return (
    <section className="py-20 bg-warning-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <div className="flex flex-col items-start mb-6 w-fit">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] mb-4 bg-gradient-to-b from-[#3b3939] to-[#929192] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              Four Pillars of Adventure
            </h2>
            <div className="w-full h-0.5 mb-4" style={{ backgroundColor: '#f3b815' }}></div>
          </div>
          <p className="text-xl text-earth-600 max-w-3xl ml-0 leading-relaxed">
            From the highest peaks of the Himalayas to the wildest rivers of India,
            we curate experiences that challenge, inspire, and transform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((offering, index) => {
            const IconComponent = offering.icon;
            return (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={offering.link} className="block">
                  <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                    <img
                      src={offering.image}
                      alt={offering.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      width="800"
                      height="600"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} transition-opacity duration-300 group-hover:opacity-90`}></div>
                    
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                      <IconComponent className="h-12 w-12 mb-4 text-adventure-400 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-left">
                        {offering.title}
                      </h3>
                      <p className="text-lg text-left text-white/90 group-hover:text-white transition-colors duration-300">
                        {offering.description}
                      </p>
                      <div className="mt-6 border-b-2 border-adventure-400 w-16 group-hover:w-24 transition-all duration-300"></div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreOfferingsGrid;
