import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const AdventureWithoutBarriers = () => {
  const partners = [
    {
      name: 'Aquaterra Adventures',
      logo: '/ATA.webp',
      description: 'Premier adventure travel company with 30+ years of Himalayan expertise',
      website: 'https://aquaterra.in'
    },
    {
      name: 'Metores Trust',
      logo: '/Metores.webp',
      description: 'Non-profit organization dedicated to inclusive outdoor experiences',
      website: 'https://metorestrust.org'
    },
    {
      name: 'v-shesh',
      logo: '/v-shesh.webp',
      description: 'Leading accessibility advocate and adaptive sports pioneer',
      website: 'https://v-shesh.com/'
    }
  ];

  return (
    <section className="py-24 bg-[#e8f5f6]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionTitle
            title="ADVENTURE"
            subtitle="Without Barriers"
            align="left"
            className="mb-6"
          />
          <p className="text-xl font-semibold text-earth-700 max-w-full">
            <span className="uppercase">When people <strong>with & without disabilities</strong> walk side by side</span><br />
            <span className="uppercase">we discover the joy of <strong>shared adventure.</strong></span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-earth-600 leading-relaxed mb-6 text-left">
              Everyone deserves to experience the healing and transformative power of being in the
              outdoors. But too often, people with diverse needs are left out. That's why Treks for All was
              created — a one-of-a-kind collaboration between Aquaterra Adventures, Metores Trust, and
              v-shesh, offering thoughtfully designed outdoor experiences with inclusion, safety, and
              dignity at the core. With experienced guides and trained buddies, we make sure every
              participant feels safe, respected, and free to explore the outdoors at their own pace.
            </p>
            <div className="text-left space-y-4">
              <p className="text-2xl font-bold text-earth-800">
                This isn't just about <span className="uppercase">reaching a summit.</span>
              </p>
              <p className="text-xl text-earth-700">It's about belonging, community, & the freedom to<br />experience adventure <span className="underline">on your own terms.</span></p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4"
          >
            {partners.map((partner, index) => (
              <a
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white rounded-xl p-5 hover:shadow-lg transition-all duration-300 group border border-[#e2e8f0]"
              >
                <div className="w-16 h-16 rounded-xl bg-[#f8fafc] flex items-center justify-center p-2 flex-shrink-0 shadow-sm">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain"
                    width="128"
                    height="128"
                    loading="eager"
                  />
                </div>
                <div className="ml-5 flex-1">
                  <h3 className="text-base font-bold text-earth-800 mb-1 group-hover:text-[#377d87] transition-colors">{partner.name}</h3>
                  <p className="text-sm text-earth-500">{partner.description}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-earth-400 group-hover:text-[#e0aa04] transition-colors flex-shrink-0 ml-3" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/about"
            className="inline-block text-primary-600 hover:text-primary-700 font-semibold text-lg underline decoration-2 underline-offset-4 transition-colors"
          >
            know more
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AdventureWithoutBarriers;
