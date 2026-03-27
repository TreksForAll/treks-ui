import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, HandHeart, Mountain, Users } from 'lucide-react';
import SEO from '../components/ui/SEO';
import LazyImage from '../components/ui/LazyImage';
import VSheshRecognitionsSection from '../components/home/VSheshRecognitionsSection';

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const CountUp = ({ target, suffix = '', duration = 2500 }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const timer = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(progress * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

type PartnerColor = 'adventure' | 'success' | 'primary';

const PartnersPage = () => {
  const heroStats = [
    { label: 'Founding partners', target: 3, suffix: '', icon: Users },
    { label: 'Shared focus', value: 'Access +\nsafety', icon: HandHeart },
    { label: 'Adventure depth', target: 30, suffix: '+ years', icon: Mountain }
  ];

  const accentStyles = {
    adventure: {
      shell: 'bg-white',
      panel: 'bg-white',
      badge: 'bg-[#f4f6f8] text-[#475569] border-transparent',
    },
    success: {
      shell: 'bg-white',
      panel: 'bg-white',
      badge: 'bg-[#f4f6f8] text-[#475569] border-transparent',
    },
    primary: {
      shell: 'bg-white',
      panel: 'bg-white',
      badge: 'bg-[#f4f6f8] text-[#475569] border-transparent',
    }
  } as const;

  const partners: Array<{
    id: string;
    name: string;
    role: string;
    description: string;
    logo: string;
    website: string;
    keyContributions: string[];
    expertise: string[];
    color: PartnerColor;
    established: string;
    impact: string;
  }> = [
    {
      id: 'aquaterra-adventures',
      name: 'Aquaterra Adventures',
      role: 'Adventure Partner',
      description: 'Premier adventure travel company with 30+ years of Himalayan expertise, specialising in treks and river rafting across the Indian Himalayas. The team brings operational excellence, robust safety protocols, deep wilderness knowledge, and personalized itineraries to deliver world-class adventure experiences.',
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
      expertise: ['Himalayan Expeditions', 'River Adventures', 'Safety Management', 'Wilderness Navigation', 'Outdoor Leadership', 'Inclusive Experiences'],
      color: 'adventure',
      established: '1995',
      impact: '30+ years of adventure excellence'
    },
    {
      id: 'metores-trust',
      name: 'Metores Trust',
      role: 'Community Partner',
      description: 'Building self-sustaining economically vibrant rural communities',
      logo: '/Metores.webp',
      website: 'https://metorestrust.org/',
      keyContributions: [
        'Community engagement and development',
        'Local partnership building',
        'Social impact measurement',
        'Support in designing socially inclusive and accessible approaches'
      ],
      expertise: ['Community development and inclusion', 'Stakeholder coordination', 'Partnership building', 'Participatory approaches grounded in community needs'],
      color: 'success',
      established: '2010',
      impact: '750+ Entrepreneurs Supported, 3556+ beneficiaries'
    },
    {
      id: 'v-shesh',
      name: 'v-shesh',
      role: 'Inclusion Partner',
      description: 'Leading Impact enterprise working on disability inclusion',
      logo: '/v-shesh.webp',
      website: 'https://v-shesh.com/',
      keyContributions: [
        'Inclusion training for guides, staff and buddies',
        'Integration of assistive technologies',
        'Design inputs on accessible trails and campsite features',
        'Development of inclusive activity protocols',
        'On-ground support for participants with disabilities'
      ],
      expertise: ['Accessibility consulting (built & natural environments)', 'Assistive technology integration', 'Training for inclusive practices', 'On-ground support for persons with disabilities'],
      color: 'primary',
      established: '2010',
      impact: '15 years on social and economic inclusion'
    }
  ];



  return (
    <div className="pt-24 min-h-screen bg-white">
      <SEO
        title="Our partners - Treks for All | Making accessible adventure possible"
        description="Meet the organizations behind Treks for All: Aquaterra Adventures brings 30+ years of Himalayan expertise, v-shesh provides disability inclusion leadership, and Metores Trust ensures community development. Together, we're creating India's most comprehensive accessible adventure travel experiences."
        keywords="Aquaterra Adventures, Metores Trust, v-shesh, accessible adventure partners, inclusive tourism partners, disability inclusion India"
        image="https://treksforall.in/treks-for-all.webp"
        url="https://treksforall.in/about/partners"
      />
      {/* Hero Section */}
      <section className="relative py-12 md:py-16">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-10"
          >
            <div className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center xl:gap-24">
              <div className="text-left pr-4">
                <div className="border-l-[5px] border-[#e0aa04] pl-4 mb-5">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] text-[#e0aa04]" style={{ fontWeight: 700 }}>
                    Our Founding Partners
                  </h1>
                </div>
                <p className="text-lg leading-relaxed text-earth-600 md:text-xl">
                  Meet the organisations shaping Treks for All with operational depth, disability inclusion expertise, and community-rooted impact.
                </p>
              </div>

              <div className="grid gap-5 grid-cols-1 sm:grid-cols-3 lg:gap-6">
                {heroStats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="rounded-[2rem] bg-[#375a5e] p-7 md:p-8 text-left flex flex-col min-h-[220px] md:min-h-[240px]"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-white text-[#18363a] mb-auto">
                        <Icon className="h-6 w-6 stroke-[1.5]" />
                      </div>
                      <div className="mt-6">
                        <div className="text-3xl md:text-4xl font-bold text-white mb-2 whitespace-pre-line leading-[1.1] tracking-tight">
                          {stat.target !== undefined ? (
                            <CountUp target={stat.target} suffix={stat.suffix} />
                          ) : (
                            stat.value
                          )}
                        </div>
                        <div className="text-[15px] md:text-base font-semibold text-[#c8e5e8] leading-tight">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-6 md:py-10">
        <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f8fafc] rounded-[1.75rem] border border-[#e2e8f0] p-6 md:p-10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                  {/* Left Column: Logo & Main Info */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white border border-[#e2e8f0] flex items-center justify-center p-4 flex-shrink-0 shadow-sm">
                        <LazyImage
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="w-full h-full object-contain mix-blend-multiply"
                        />
                      </div>
                      <div className="pt-2">
                        <div className="inline-flex items-center rounded-full px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.15em] bg-white border border-[#e0aa04]/40 text-[#c79100] mb-3 shadow-[0_2px_10px_rgba(224,170,4,0.05)]">
                          {partner.role}
                        </div>
                        <h3 className="text-2xl sm:text-[1.75rem] font-bold text-[#18363a]">{partner.name}</h3>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg leading-relaxed text-earth-600 mb-8">
                      {partner.description}
                    </p>
                    <div className="flex flex-wrap gap-8 mb-8">
                      <div>
                        <div className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#377d87]">Established</div>
                        <div className="mt-1.5 text-xl font-bold text-[#18363a]">{partner.established}</div>
                      </div>
                      <div className="flex-1 min-w-[200px]">
                        <div className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#377d87]">Impact</div>
                        <div className="mt-1.5 text-sm sm:text-base font-medium text-earth-700">{partner.impact}</div>
                      </div>
                    </div>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[0.95rem] font-bold text-[#214b51] hover:text-[#e0aa04] underline decoration-[1.5px] underline-offset-4 transition-colors"
                    >
                      Visit website
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Right Column: Experience Details */}
                  <div className="md:w-[360px] lg:w-[440px] flex-shrink-0 space-y-6">
                    <div className="bg-white rounded-[1.25rem] p-6 border border-[#e2e8f0] shadow-[0_2px_15px_rgba(0,0,0,0.02)] relative overflow-hidden">
                      <h4 className="text-[0.85rem] font-bold text-[#18363a] uppercase tracking-wider mb-5 border-b border-[#e2e8f0] pb-3">Key Contributions</h4>
                      <ul className="space-y-3">
                        {partner.keyContributions.map((contribution, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#377d87] mt-1.5"></div>
                            <span className="text-[0.9rem] text-earth-600 leading-snug">{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white rounded-[1.25rem] p-6 border border-[#e2e8f0] shadow-[0_2px_15px_rgba(0,0,0,0.02)] relative overflow-hidden">
                      <h4 className="text-[0.85rem] font-bold text-[#18363a] uppercase tracking-wider mb-4 border-b border-[#e2e8f0] pb-3">Areas of Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {partner.expertise.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-[#d1ebed] border border-[#b8e0e3] shadow-sm rounded-lg px-3 py-1.5 text-[0.85rem] font-semibold text-[#18363a]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[2rem] bg-[#214b51] p-8 shadow-lg md:p-10"
          >
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <div className="border-l-[5px] border-[#e0aa04] pl-4 mb-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] text-[#e0aa04]" style={{ fontWeight: 700 }}>
                    Ready to Explore Together?
                  </h2>
                </div>
                <p className="max-w-2xl text-lg text-[#c8e5e8]">
                  Join us in making outdoor adventures accessible to everyone.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-start lg:justify-end">
                <Link
                  to="/trips"
                  className="bg-[#e0aa04] hover:bg-[#d9a513] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 text-center"
                >
                  View Our Trips
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-[#a3d7db] text-white hover:bg-[#2c646c] px-8 py-3 rounded-xl font-semibold transition-all duration-300 text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <VSheshRecognitionsSection />
    </div>
  );
};

export default PartnersPage;
