import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, HandHeart, Mountain, Award, ExternalLink, Accessibility, Heart, Shield } from 'lucide-react';
import SEO from '../components/ui/SEO';

const PartnersPage = () => {
  const partners = [
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
      logo: '/V-Shesh.webp',
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

  const achievements = [
    { 
      title: 'Accessibility Innovation Award',
      year: '2024',
      description: 'Recognized for groundbreaking adaptive outdoor equipment design',
      icon: Award,
      color: 'primary'
    },
    {
      title: 'Community Impact Recognition',
      year: '2024', 
      description: 'Honored for inclusive tourism and community development initiatives',
      icon: Heart,
      color: 'success'
    },
    {
      title: 'Safety Excellence Certification',
      year: '2025',
      description: 'Certified for enhanced safety protocols in adaptive adventure travel',
      icon: Shield,
      color: 'adventure'
    }
  ];

  const getColorClasses = (color: string, variant: 'bg' | 'text' | 'border' = 'bg') => {
    const colorMap = {
      primary: {
        bg: 'bg-primary-100',
        text: 'text-primary-600',
        border: 'border-primary-200'
      },
      adventure: {
        bg: 'bg-adventure-100', 
        text: 'text-adventure-600',
        border: 'border-adventure-200'
      },
      success: {
        bg: 'bg-success-100',
        text: 'text-success-600', 
        border: 'border-success-200'
      }
    };
    return colorMap[color as keyof typeof colorMap]?.[variant] || colorMap.primary[variant];
  };

  return (
    <div className="pt-28 min-h-screen bg-white">
      <SEO
        title="Our partners - Treks for All | Making accessible adventure possible"
        description="Meet the organizations behind Treks for All: Aquaterra Adventures brings 30+ years of Himalayan expertise, v-shesh provides disability inclusion leadership, and Metores Trust ensures community development. Together, we're creating India's most comprehensive accessible adventure travel experiences."
        keywords="Aquaterra Adventures, Metores Trust, v-shesh, accessible adventure partners, inclusive tourism partners, disability inclusion India"
        image="https://treksforall.in/treks-for-all.webp"
        url="https://treksforall.in/about/partners"
      />
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="flex flex-col items-start mb-6 w-fit">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] mb-4 bg-gradient-to-b from-[#3b3939] to-[#929192] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
                Our Founding Partners
              </h1>
              <div className="w-full h-0.5 mb-4" style={{ backgroundColor: '#f3b815' }}></div>
            </div>
            <p className="text-xl text-earth-600 max-w-3xl ml-0">
              Meet the visionary organizations that united to make outdoor adventures accessible to everyone
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Partner Logo & Overview */}
                <div className={`order-2 lg:order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="text-left lg:text-left">
                    <div className="inline-block rounded-full w-24 h-24 flex items-center justify-center mb-6 overflow-hidden">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="w-20 h-20 object-contain"
                        width="80"
                        height="80"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-earth-800 mb-2">{partner.name}</h3>
                    <p className="text-lg font-semibold mb-4 text-earth-700">
                      {partner.role}
                    </p>
                    <p className="text-earth-600 leading-relaxed mb-6 text-lg">
                      {partner.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-left p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-earth-800">{partner.established}</div>
                        <div className="text-sm text-earth-600">Established</div>
                      </div>
                      <div className="text-left p-4 bg-white rounded-lg">
                        <div className="text-xs font-medium text-earth-800 leading-tight">{partner.impact}</div>
                        <div className="text-sm text-earth-600 mt-1">Impact</div>
                      </div>
                    </div>

                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-earth-800 hover:text-earth-900 hover:underline font-semibold"
                    >
                      <span>Visit {partner.name}</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Partner Details */}
                <div className={`order-1 lg:order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-white rounded-2xl p-8">
                    <h4 className="text-xl font-bold text-earth-800 mb-6">Key Contributions</h4>
                    <ul className="space-y-3 mb-8">
                      {partner.keyContributions.map((contribution, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-earth-700"></div>
                          <span className="text-earth-700">{contribution}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-xl font-bold text-earth-800 mb-4">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-sm font-medium bg-earth-100 text-earth-700 border border-earth-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborative Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left mb-16"
          >
            <div className="flex flex-col items-start mb-6 w-fit">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] mb-4 bg-gradient-to-b from-[#3b3939] to-[#929192] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
                Collaborative Achievements
              </h2>
              <div className="w-full h-0.5 mb-4" style={{ backgroundColor: '#f3b815' }}></div>
            </div>
            <p className="text-xl text-earth-600 max-w-3xl ml-0">
              Together, our partners have created groundbreaking innovations in accessible adventure travel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-left border border-earth-100"
                >
                  <div className="bg-earth-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-earth-700" />
                  </div>
                  <div className="text-lg font-bold text-earth-700 mb-2">{achievement.year}</div>
                  <h3 className="text-xl font-bold text-earth-800 mb-3">{achievement.title}</h3>
                  <p className="text-earth-600 leading-relaxed">{achievement.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who's Journeyed With Us So Far */}
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
                  Who's Journeyed With Us
                </h2>
                <div className="w-full h-0.5 mb-4" style={{ backgroundColor: '#f3b815' }}></div>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-earth-600 font-semibold uppercase" style={{ fontWeight: 600 }}>
                So Far
              </p>
            </div>
            <p className="text-xl text-earth-600 max-w-3xl ml-0">
              Redefining what's possible. Every step, a milestone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-earth-50 rounded-2xl p-8 border border-earth-100"
            >
              <div className="text-4xl font-bold text-earth-900 mb-2">82 guests & counting</div>
              <div className="text-earth-600">Total Participants</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-earth-50 rounded-2xl p-8 border border-earth-100"
            >
              <div className="text-4xl font-bold text-earth-900 mb-2">65 %</div>
              <div className="text-earth-600">Persons with Disabilities</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-earth-50 rounded-2xl p-8 border border-earth-100"
            >
              <div className="text-4xl font-bold text-earth-900 mb-2">10+</div>
              <div className="text-earth-600">Unique Disability Types</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-earth-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
           >
             <div className="flex flex-col items-start mb-6 w-fit">
               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] mb-4 bg-gradient-to-b from-[#3b3939] to-[#929192] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
                 Ready to Explore Together?
               </h2>
               <div className="w-full h-0.5 mb-4" style={{ backgroundColor: '#f3b815' }}></div>
             </div>
             <p className="text-lg text-earth-600 mb-8 text-left">
               Join us in making outdoor adventures accessible to everyone
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link
                 to="/trips"
                 className="bg-warning-400 hover:bg-warning-500 text-earth-900 px-8 py-3 rounded-xl font-semibold transition-all duration-300 text-left transform hover:scale-105"
               >
                 View Our Trips
               </Link>
               <Link
                 to="/contact"
                 className="border-2 border-earth-300 text-earth-800 hover:bg-earth-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 text-left"
               >
                 Contact Us
               </Link>
             </div>
           </motion.div>
         </div>
       </section>
     </div>
   );
 };
 
 export default PartnersPage;
