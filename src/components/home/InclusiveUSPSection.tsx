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
    <section className="py-24 bg-[#1a2e35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="border-l-[5px] border-[#e0aa04] pl-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Treks for All?
            </h2>
            <p className="text-lg text-[#a3d7db] max-w-2xl leading-relaxed">
              Nothing can match the healing, transformative power of shared experiences on the trail – where people of all abilities walk, laugh and grow together.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
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
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#e0aa04] rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#a3d7db] leading-relaxed text-sm">
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
          className="text-center mt-16"
        >
          <p className="text-lg text-[#a3d7db] max-w-3xl mx-auto leading-relaxed">
            Come for an adventure. Leave with a new way of seeing the world - and yourself.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InclusiveUSPSection;
