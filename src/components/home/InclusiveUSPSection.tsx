import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Leaf, MapPin, Clock, Star, Heart, ArrowRight, Accessibility, HandHeart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';

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
    <section className="py-16 sm:py-20 md:py-24 bg-[#18363a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <SectionTitle
            title="Why Treks for All"
            description="Nothing can match the healing, transformative power of shared experiences on the trail – where people of all abilities walk, laugh and grow together."
            align="left"
            light={true}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-14">
          {uspFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-left group bg-white/95 border border-white/20 p-5 sm:p-6 md:p-8 rounded-2xl shadow-md hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Top thin yellow accent line */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#e0aa04] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#e8f5f6] text-[#214b51] rounded-xl mb-6 group-hover:bg-[#e0aa04] group-hover:text-white transition-colors duration-300 shadow-sm border border-[#d1ebed] group-hover:border-transparent">
                  <IconComponent className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-[#18363a] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#377d87] leading-relaxed text-sm">
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
          className="mt-16"
        >
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug text-center italic max-w-4xl mx-auto">
            Come for an adventure. Leave with a new way of seeing the world — and yourself.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InclusiveUSPSection;
