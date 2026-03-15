import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mountain, Waves, Home, Globe, ArrowRight } from 'lucide-react';

const CoreOfferingsGrid = () => {
  const offerings = [
    {
      title: 'Trekking',
      description: 'Himalayan expeditions and high-altitude adventures',
      image: 'https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg',
      icon: Mountain,
      link: '/trips?category=treks'
    },
    {
      title: 'River Expeditions',
      description: 'White-water rafting and river adventures',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
      icon: Waves,
      link: '/trips?category=rivers'
    },
    {
      title: 'Camps',
      description: 'Premium camping and adventure stays',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
      icon: Home,
      link: '/trips?category=camps'
    },
    {
      title: 'Global Climbs',
      description: 'International expeditions and climbing adventures',
      image: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg',
      icon: Globe,
      link: '/trips?category=climbs'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-14"
        >
          <div className="border-l-[5px] border-[#f3b815] pl-4 mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] text-[#f3b815]" style={{ fontWeight: 700 }}>
              Four Pillars of Adventure
            </h2>
          </div>
          <p className="text-lg text-earth-600 max-w-3xl ml-0 leading-relaxed">
            From the highest peaks of the Himalayas to the wildest rivers of India,
            we curate experiences that challenge, inspire, and transform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((offering, index) => {
            const IconComponent = offering.icon;
            return (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={offering.link} className="block group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={offering.image}
                        alt={offering.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        width="800"
                        height="600"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-[#f3b815] rounded-lg">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-earth-800 mb-1 group-hover:text-[#377d87] transition-colors duration-300">
                        {offering.title}
                      </h3>
                      <p className="text-sm text-earth-500 mb-3">
                        {offering.description}
                      </p>
                      <span className="inline-flex items-center text-sm font-semibold text-[#f3b815] group-hover:translate-x-1 transition-transform duration-300">
                        Explore <ArrowRight className="h-4 w-4 ml-1" />
                      </span>
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
