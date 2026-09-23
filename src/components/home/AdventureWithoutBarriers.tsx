import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import LazyImage from '../ui/LazyImage';

interface Partner {
  id: string;
  name: string;
  role: string;
  shortDescription: string;
  description: string;
  logo: string;
  website: string;
  keyContributions: string[];
  expertise: string[];
  established: string;
  impact: string;
}

const AdventureWithoutBarriers: React.FC = () => {
  const [selectedPartnerIndex, setSelectedPartnerIndex] = useState(0);

  const partners: Partner[] = [
    {
      id: 'aquaterra-adventures',
      name: 'Aquaterra Adventures',
      role: 'Adventure Partner',
      shortDescription: 'Premier adventure travel company with 30+ years of Himalayan expertise',
      description:
        'Premier adventure travel company with 30+ years of Himalayan expertise, specialising in treks and river rafting across the Indian Himalayas. The team brings operational excellence, robust safety protocols, deep wilderness knowledge, and personalized itineraries to deliver world-class adventure experiences.',
      logo: '/ATA.webp',
      website: 'https://aquaterra.in',
      keyContributions: [
        'Expedition planning and logistics',
        'Safety protocols and risk management',
        'Wilderness expertise and route knowledge',
        'Personalized itineraries for diverse groups',
        'High-quality equipment and operational excellence',
        'Ability to support inclusive and adaptive adventure experiences'
      ],
      expertise: [
        'Himalayan Expeditions',
        'River Adventures',
        'Safety Management',
        'Wilderness Navigation',
        'Outdoor Leadership',
        'Inclusive Experiences'
      ],
      established: '1995',
      impact: '30+ years of adventure excellence'
    },
    {
      id: 'metores-trust',
      name: 'Metores Trust',
      role: 'Community Partner',
      shortDescription: 'Non-profit organization dedicated to inclusive outdoor experiences',
      description:
        'Building self-sustaining economically vibrant rural communities through community engagement, local partnerships, and inclusive social impact programs.',
      logo: '/Metores.webp',
      website: 'https://metorestrust.org/',
      keyContributions: [
        'Community engagement and development',
        'Local partnership building',
        'Social impact measurement',
        'Support in designing socially inclusive and accessible approaches'
      ],
      expertise: [
        'Community development and inclusion',
        'Stakeholder coordination',
        'Partnership building',
        'Participatory approaches grounded in community needs'
      ],
      established: '2010',
      impact: '750+ Entrepreneurs Supported, 3556+ beneficiaries'
    },
    {
      id: 'v-shesh',
      name: 'v-shesh',
      role: 'Inclusion Partner',
      shortDescription: 'Leading accessibility advocate and adaptive sports pioneer',
      description:
        'Leading Impact enterprise working on disability inclusion, empowering people with disabilities through assistive technology, accessibility consulting, and barrier-free outdoor immersion.',
      logo: '/v-shesh.webp',
      website: 'https://v-shesh.com/',
      keyContributions: [
        'Inclusion training for guides, staff and buddies',
        'Integration of assistive technologies',
        'Design inputs on accessible trails and campsite features',
        'Development of inclusive activity protocols',
        'On-ground support for participants with disabilities'
      ],
      expertise: [
        'Accessibility consulting (built & natural environments)',
        'Assistive technology integration',
        'Training for inclusive practices',
        'On-ground support for persons with disabilities'
      ],
      established: '2010',
      impact: '15 years on social and economic inclusion'
    }
  ];

  const activePartner = partners[selectedPartnerIndex];

  return (
    <section id="partners" className="py-12 sm:py-16 md:py-24 bg-[#e8f5f6]/30 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <SectionTitle
            title="ADVENTURE"
            subtitle="Without Barriers"
            align="left"
            className="mb-6"
          />
          <p className="text-base sm:text-xl font-semibold text-earth-700 max-w-full">
            <span className="uppercase">
              When people <strong>with & without disabilities</strong> walk side by side
            </span>
            <br />
            <span className="uppercase">
              we discover the joy of <strong>shared adventure.</strong>
            </span>
          </p>
        </motion.div>

        {/* 2-Column Overview (Text + 3 Partner Selectors) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm sm:text-lg text-earth-600 leading-snug sm:leading-relaxed mb-4 sm:mb-6 text-left">
              Everyone deserves to experience the healing and transformative power of being in the
              outdoors. But too often, people with diverse needs are left out. That's why Treks for All was
              created — a one-of-a-kind collaboration between Aquaterra Adventures, Metores Trust, and
              v-shesh, offering thoughtfully designed outdoor experiences with inclusion, safety, and
              dignity at the core. With experienced guides and trained buddies, we make sure every
              participant feels safe, respected, and free to explore the outdoors at their own pace.
            </p>
            <div className="text-left space-y-4">
              <p className="text-xl sm:text-2xl font-bold text-earth-800 uppercase">
                This isn't just about reaching a summit.
              </p>
              <p className="text-sm sm:text-lg text-earth-600 leading-snug sm:leading-relaxed">
                It's about belonging, community, & the freedom to
                <br />
                experience adventure <span className="underline">on your own terms.</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4"
          >
            {partners.map((partner, index) => {
              const isSelected = selectedPartnerIndex === index;
              return (
                <div
                  key={partner.name}
                  onClick={() => setSelectedPartnerIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedPartnerIndex(index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className={`w-full text-left flex items-center rounded-xl p-4 sm:p-5 transition-all duration-300 group cursor-pointer border ${
                    isSelected
                      ? 'bg-white border-[#e0aa04] shadow-md ring-2 ring-[#e0aa04]/20'
                      : 'bg-white/80 hover:bg-white border-[#e2e8f0] hover:shadow-lg'
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center p-2 flex-shrink-0 shadow-sm transition-colors ${
                      isSelected ? 'bg-amber-50/70 border border-[#e0aa04]/30' : 'bg-[#f8fafc]'
                    }`}
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain"
                      width="128"
                      height="128"
                      loading="eager"
                    />
                  </div>
                  <div className="ml-4 sm:ml-5 flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3
                        className={`text-base font-bold transition-colors ${
                          isSelected ? 'text-[#18363a]' : 'text-earth-800 group-hover:text-[#377d87]'
                        }`}
                      >
                        {partner.name}
                      </h3>
                      {isSelected && (
                        <span className="text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#e0aa04]/15 text-[#c79100]">
                          Selected
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-earth-500 line-clamp-2">{partner.shortDescription}</p>
                  </div>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 text-earth-400 group-hover:text-[#e0aa04] transition-colors flex-shrink-0 ml-2 hover:bg-slate-100 rounded-lg"
                    aria-label={`Visit ${partner.name} website`}
                    title={`Visit ${partner.name} website`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Detailed Partner Card Section */}
        <div className="pt-2 sm:pt-4">
          {/* Quick Switcher Pills */}
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#377d87]">
                Partner Profile
              </span>
              <span className="text-xs text-earth-400">
                ({selectedPartnerIndex + 1} of {partners.length})
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-[#e2e8f0] shadow-sm">
              {partners.map((partner, index) => (
                <button
                  key={partner.id}
                  onClick={() => setSelectedPartnerIndex(index)}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                    selectedPartnerIndex === index
                      ? 'bg-[#214b51] text-white shadow-sm'
                      : 'text-earth-600 hover:text-earth-900 hover:bg-slate-100'
                  }`}
                >
                  {partner.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Partner Full Details Card (Matching Pic 1) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePartner.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="bg-[#f8fafc] rounded-xl sm:rounded-[1.75rem] border border-[#e2e8f0] p-4 sm:p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
                {/* Left Column: Logo & Main Info */}
                <div className="flex-1 text-left">
                  <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6 mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl sm:rounded-2xl bg-white border border-[#e2e8f0] flex items-center justify-center p-3 sm:p-4 flex-shrink-0 shadow-sm">
                      <LazyImage
                        src={activePartner.logo}
                        alt={`${activePartner.name} logo`}
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    </div>
                    <div className="pt-1 sm:pt-2">
                      <div className="inline-flex items-center rounded-full px-3 py-1.5 text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.15em] bg-white border border-[#e0aa04]/40 text-[#c79100] mb-3 shadow-[0_2px_10px_rgba(224,170,4,0.05)]">
                        {activePartner.role}
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-[1.75rem] font-bold text-[#18363a]">
                        {activePartner.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-earth-600 mb-6 sm:mb-8">
                    {activePartner.description}
                  </p>

                  <div className="flex flex-wrap gap-8 mb-8">
                    <div>
                      <div className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.15em] text-[#377d87]">
                        Established
                      </div>
                      <div className="mt-1.5 text-xl sm:text-2xl font-bold text-[#18363a]">
                        {activePartner.established}
                      </div>
                    </div>
                    <div className="flex-1 min-w-[200px]">
                      <div className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.15em] text-[#377d87]">
                        Impact
                      </div>
                      <div className="mt-1.5 text-sm sm:text-base font-medium text-earth-700">
                        {activePartner.impact}
                      </div>
                    </div>
                  </div>

                  <a
                    href={activePartner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[0.95rem] font-bold text-[#214b51] hover:text-[#e0aa04] underline decoration-[1.5px] underline-offset-4 transition-colors"
                  >
                    <span>Visit website</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                {/* Right Column: Key Contributions & Areas of Expertise */}
                <div className="lg:w-[380px] xl:w-[440px] flex-shrink-0 space-y-6 text-left">
                  {/* Key Contributions */}
                  <div className="bg-white rounded-[1.25rem] p-5 sm:p-6 border border-[#e2e8f0] shadow-[0_2px_15px_rgba(0,0,0,0.02)] relative overflow-hidden">
                    <h4 className="text-[0.85rem] font-bold text-[#18363a] uppercase tracking-wider mb-5 border-b border-[#e2e8f0] pb-3">
                      Key Contributions
                    </h4>
                    <ul className="space-y-3">
                      {activePartner.keyContributions.map((contribution, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#377d87] mt-2" />
                          <span className="text-[0.9rem] text-earth-600 leading-snug">
                            {contribution}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Areas of Expertise */}
                  <div className="bg-white rounded-[1.25rem] p-5 sm:p-6 border border-[#e2e8f0] shadow-[0_2px_15px_rgba(0,0,0,0.02)] relative overflow-hidden">
                    <h4 className="text-[0.85rem] font-bold text-[#18363a] uppercase tracking-wider mb-4 border-b border-[#e2e8f0] pb-3">
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activePartner.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-[#d1ebed] border border-[#b8e0e3] shadow-sm rounded-lg px-3 py-1.5 text-[0.82rem] sm:text-[0.85rem] font-semibold text-[#18363a]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Know More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-14"
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
