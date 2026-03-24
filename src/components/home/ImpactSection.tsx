import React from 'react';
import { motion } from 'framer-motion';

const ImpactSection = () => {
  const stats = [
    {
      value: '82+',
      label: 'Adventurers',
      description: 'and counting'
    },
    {
      value: '66%',
      label: 'Persons with Disabilities',
      description: 'on every trip'
    },
    {
      value: '10+',
      label: 'Unique Disability Types',
      description: 'represented & welcomed'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-14"
        >
          <div className="border-l-[5px] border-[#e0aa04] pl-4 mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] text-[#e0aa04]" style={{ fontWeight: 700 }}>
              Our Impact
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#fef8e8] rounded-2xl p-8 text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-[#e0aa04] leading-none mb-3" style={{ fontWeight: 800 }}>
                {stat.value}
              </div>
              <div className="text-base font-semibold text-earth-800 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-earth-500">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
