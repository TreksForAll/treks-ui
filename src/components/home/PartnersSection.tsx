import React from 'react';
import { motion } from 'framer-motion';

const PartnersSection = () => {
  const partners = [
    { name: 'National Geographic', logo: 'NG' },
    { name: 'Adventure Travel Trade Association', logo: 'ATTA' },
    { name: 'Indian Mountaineering Foundation', logo: 'IMF' },
    { name: 'Tourism Ministry India', logo: 'TMI' },
    { name: 'Himalayan Club', logo: 'HC' },
    { name: 'Outdoor Industry Association', logo: 'OIA' }
  ];

  const mediaFeatures = [
    'Featured in Conde Nast Traveller',
    'National Geographic Partner',
    'CNN Travel Recommended',
    'Travel + Leisure Featured',
    'BBC Earth Collaboration'
  ];

  return (
    <section className="py-20 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Recognized globally for our commitment to excellence in adventure travel
          </p>
        </motion.div>

        {/* Partners Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
            >
              <div className="text-center">
                <div className="bg-earth-100 text-earth-700 font-bold text-lg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-primary-100 group-hover:text-primary-700 transition-colors duration-300">
                  {partner.logo}
                </div>
                <p className="text-xs text-earth-600 font-medium">{partner.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Media Mentions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-primary-900 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Global Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {mediaFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
              >
                <p className="text-primary-200 font-medium text-sm leading-snug">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;