import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Mountain, ExternalLink } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const FoundingPartnersSection = () => {
  const partners = [
    {
      name: 'Aquaterra Adventures',
      logo: '/ATA.webp',
      description: 'Premier adventure travel company with 30+ years of Himalayan expertise',
      role: 'Adventure Operations Partner',
      color: 'adventure'
    },
    {
      name: 'Metores Trust',
      logo: '/Metores.webp',
      description: 'Non-profit organization dedicated to inclusive outdoor experiences',
      role: 'Community Impact Partner',
      color: 'success'
    },
    {
      name: 'v-shesh',
      logo: '/v-shesh.webp',
      description: 'Leading accessibility advocate and adaptive sports pioneer',
      role: 'Accessibility Innovation Partner',
      color: 'primary'
    }
  ];

  const achievements = [
    { label: 'Launch Date', value: 'March 2025', icon: '🚀' },
    { label: 'Accessible Adventures', value: '3', icon: '♿' },
    { label: 'Partner Organizations', value: '3', icon: '🤝' }
  ];

  return (
    <section className="py-20 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-900 to-adventure-900 rounded-2xl p-8 md:p-12 text-white text-left mb-16"
        >
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Journey</h3>
            <p className="text-primary-200 text-lg max-w-3xl ml-0">
              Born from the collaboration of three visionary organizations,
              Treks for All launched in March 2025 with a mission to make outdoor adventures accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-adventure-400 mb-2">
                  {achievement.value}
                </div>
                <div className="text-primary-200 text-sm">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <SectionTitle
            title="FOUNDING PARTNERS"
            subtitle="United in Our Vision"
            align="center"
            className="mb-4"
          />
          <p className="text-lg text-earth-600 max-w-2xl ml-0 text-left">
            Making adventure accessible to everyone, regardless of ability
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-left">
                <div className="w-32 h-32 rounded-xl flex items-center justify-center mx-auto mb-6 overflow-hidden p-4">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain"
                    width="128"
                    height="128"
                    loading="eager"
                  />
                </div>
                <h3 className="text-xl font-bold text-earth-800 mb-2">{partner.name}</h3>
                <p className="text-sm font-semibold text-adventure-600 mb-4">{partner.role}</p>
                <p className="text-earth-600 leading-relaxed">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Past Adventures Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-earth-800 mb-4 flex items-center space-x-2">
                <Mountain className="h-6 w-6 text-adventure-500" />
                <span>Our First Success: Dayara Trek</span>
              </h3>
              <p className="text-earth-600 leading-relaxed mb-6">
                Our inaugural accessible trek to Dayara Bugyal demonstrated that with proper planning, 
                adaptive equipment, and inclusive design, even high-altitude adventures can welcome participants 
                with diverse abilities. This groundbreaking expedition set the foundation for all our future programs.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-success-100 text-success-700 px-3 py-1 rounded-full text-sm font-medium">
                  ♿ Wheelchair Accessible Base
                </span>
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  👥 15 Participants
                </span>
                <span className="bg-adventure-100 text-adventure-700 px-3 py-1 rounded-full text-sm font-medium">
                  🏔️ 3,400m Altitude
                </span>
              </div>
            </div>
            
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img
                src="/dayara/Dayarabugyal-06.webp"
                alt="Dayara Trek - Our first accessible adventure"
                className="w-full h-full object-cover"
                width="600"
                height="400"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                <div className="text-white p-4">
                  <div className="font-bold">Dayara Bugyal Trek 2025</div>
                  <div className="text-sm text-white/80">First fully accessible high-altitude trek</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FoundingPartnersSection;
