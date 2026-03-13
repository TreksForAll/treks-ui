import React from 'react';
import { motion } from 'framer-motion';
import { Users, Accessibility, Award } from 'lucide-react';

const ImpactSection = () => {
  const stats = [
    {
      icon: Users,
      value: '53',
      label: 'Adventurers',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Accessibility,
      value: '66%',
      label: 'Persons with Disabilities',
      color: 'from-adventure-500 to-adventure-600'
    },
    {
      icon: Award,
      value: '10',
      label: 'Unique Disabilities represented',
      color: 'from-success-500 to-success-600'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-earth-800 via-earth-700 to-earth-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 15c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15zm0 5c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
            <div className="flex flex-col items-start w-fit">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] mb-4 bg-gradient-to-b from-gray-200 to-white bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              Our Impact
            </h2>
            <div className="w-full h-1 mb-4" style={{ backgroundColor: '#f3b815' }}></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} mb-4`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-white/80">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
