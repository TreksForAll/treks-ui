import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Leaf, MapPin, Clock, Star, Heart, ArrowRight, Accessibility, HandHeart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const InclusiveUSPSection = () => {
  const uspFeatures = [
    {
      icon: Shield,
      title: 'Safety First',
      description: '35+ years of expertise, certified guides, global safety standards.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Trek leaders, disability professionals, and counsellors working together.'
    },
    {
      icon: Accessibility,
      title: 'Inclusive by Design',
      description: 'Built for all abilities - dignity, access, and full participation.'
    },
    {
      icon: HandHeart,
      title: 'Buddy System with Empathy',
      description: 'Respectful, independence-focused support - never dependence.'
    },
    {
      icon: Leaf,
      title: 'Eco-Responsible',
      description: 'Low-impact treks, zero-waste mindset, community-positive travel.'
    },
    {
      icon: Star,
      title: 'Value for Money',
      description: 'High-quality experiences, trusted expertise, honest pricing'
    }
  ];

  return (
    <section className="py-20 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-10"
        >
          <div className="flex flex-col items-start mb-2 w-fit">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] mb-2 bg-gradient-to-b from-[#3b3939] to-[#929192] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              Why Treks for All?
            </h2>
            <div className="w-full h-0.5 mb-3" style={{ backgroundColor: '#f3b815' }}></div>
          </div>
          <p className="text-xl text-earth-600 max-w-3xl ml-0 leading-snug">
            Nothing can match the healing, transformative power of shared experiences on the trail – where people of all abilities walk, laugh and grow together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uspFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-left group"
              >
                <div className="relative w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                  <IconComponent className="h-6 w-6 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h3 className="text-lg font-bold text-earth-800 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-earth-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-left mt-16"
        >
          <p className="text-xl text-earth-600 max-w-3xl ml-0 leading-relaxed">
            Come for an adventure. Leave with a new way of seeing the world - and yourself.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InclusiveUSPSection;
