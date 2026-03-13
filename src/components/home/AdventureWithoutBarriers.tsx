import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

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
      name: 'V-Shesh',
      logo: '/v-shesh.webp',
      description: 'Leading accessibility advocate and adaptive sports pioneer',
      website: 'https://v-shesh.com/'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <div className="flex flex-col items-start mb-6">
            <div className="w-fit flex flex-col">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] mb-4 bg-gradient-to-b from-[#3b3939] to-[#929192] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
                ADVENTURE
              </h2>
              <div className="w-full h-0.5 mb-4" style={{ backgroundColor: '#f3b815' }}></div>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl text-earth-600 font-semibold uppercase " style={{ fontWeight: 600 }}>
              Without Barriers
            </p>
          </div>
          <p className="text-xl font-semibold text-earth-700 max-w-full mb-6">
            <span className="uppercase">When people <strong style={{ color: '#f3b815' }}>with & without disabilities</strong> walk side by side,</span><br />
            <span className="uppercase">we discover <strong style={{ color: '#f3b815' }}>the joy of shared adventure.</strong></span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl ml-0 mb-16"
        >
          <p className="text-lg text-earth-600 leading-relaxed mb-6 text-left">
            Everyone deserves to experience the healing and transformative power of being in the
            outdoors. But too often, persons with disabilities are left out. That's why Treks for All was
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex flex-col h-full">
                <div className="w-40 h-40 rounded-xl flex items-center justify-center mx-auto mb-6 p-2 shrink-0">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain"
                    width="128"
                    height="128"
                    loading="eager"
                  />
                </div>
                <h3 className="text-xl font-bold text-earth-800 mb-3 text-left">{partner.name}</h3>
                <p className="text-earth-600 leading-relaxed mb-4">{partner.description}</p>
                <div className="flex items-center justify-start text-primary-600 group-hover:text-primary-700 transition-colors mt-auto pt-4">
                  <span className="text-sm font-medium">Visit Website</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

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
