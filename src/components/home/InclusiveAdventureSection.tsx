import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Waves, Home, Mountain, ArrowRight, MapPin, Users, Calendar, Accessibility, HandHeart, Eye } from 'lucide-react';

const InclusiveAdventureSection = () => {
  const adventureCategories = [
    {
      id: 'accessible-trekking',
      title: 'Accessible Trekking',
      subtitle: 'Mountains for Every Ability',
      icon: Mountain,
      emoji: '🗻',
      description: 'Experience the majesty of the Himalayas through carefully designed accessible routes, adaptive equipment, and specialized support systems.',
      highlights: [
        'Wheelchair-accessible base camps and viewpoints',
        'Adaptive hiking equipment and mobility aids available',
        'Trained guides specializing in inclusive outdoor experiences'
      ],
      image: '/Home-Accessible.webp',
      link: '/trips?category=treks',
      accentColor: 'primary',
      stats: { duration: '2-14 Days', accessibility: 'All Abilities', locations: '15+ Routes' }
    },
    {
      id: 'inclusive-water-adventures',
      title: 'Inclusive Water Adventures',
      subtitle: 'Rivers Welcome Everyone',
      icon: Waves,
      emoji: '🚣',
      description: 'Navigate pristine waters with specialized rafts, adaptive gear, and supportive guides ensuring safe water adventures for all ability levels.',
      highlights: [
        'Adaptive rafting equipment for various physical needs',
        'Multi-sensory water experiences for visually impaired participants',
        'Calm water options alongside thrilling rapids'
      ],
      image: '/water-adventures/Home-Rafting.webp',
      link: '/trips?category=rivers',
      accentColor: 'blue',
      stats: { duration: '1-7 Days', difficulty: 'Adaptive Levels', locations: '6 Rivers' }
    },
    {
      id: 'adaptive-wilderness-stays',
      title: 'Adaptive Wilderness Stays',
      subtitle: 'Comfort Meets Accessibility',
      icon: Home,
      emoji: '🏕️',
      description: 'Fully accessible lodges and camps designed with universal access in mind, ensuring comfort and independence in spectacular natural settings.',
      highlights: [
        'Universal design principles in all accommodations',
        'Accessible bathrooms, ramps, and navigation aids',
        'Sensory-friendly spaces and quiet zones available'
      ],
      image: '/camping/Camp-Aquaterra-01.webp',
      link: '/camps',
      accentColor: 'emerald',
      stats: { comfort: 'Fully Accessible', locations: '8 Camps', amenities: 'Universal Design' }
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-earth-50 via-white to-primary-50 relative overflow-hidden">
      {/* Accessibility symbol background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M50 15c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15zm0 5c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-adventure-100 text-adventure-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Accessibility className="h-4 w-4" />
            <span>Breaking Barriers, Building Bridges</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-earth-800 mb-8 leading-tight">
            Adventure
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-adventure-600 to-primary-600 block">
              Knows No Barrier
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-earth-600 max-w-4xl ml-0 leading-relaxed">
            Through our founding partnership with v-shesh, Aquaterra Adventures, and Metores Trust, 
            we've created adventures that welcome everyone. Every journey is thoughtfully designed 
            to be accessible, inclusive, and transformative.
          </p>
        </motion.div>

        {/* Adventure Categories Grid */}
        <div className="space-y-12">
          {adventureCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isReversed = index % 2 === 1;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative ${isReversed ? 'lg:col-start-2' : ''}`}>
                    <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-700">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      
                      {/* Accessibility Indicator */}
                      <div className="absolute top-6 left-6 bg-warning-400 text-earth-900 rounded-full p-3 shadow-lg">
                        <Accessibility className="h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`space-y-8 ${isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-primary-100 rounded-full p-3">
                          <IconComponent className="h-6 w-6 text-primary-600" />
                        </div>
                        <span className="text-lg font-semibold text-earth-600 tracking-wide uppercase">
                          {category.id.replace('-', ' ')}
                        </span>
                      </div>
                      
                      <h3 className="text-4xl md:text-5xl font-bold text-earth-800 mb-4 leading-tight">
                        {category.title}
                      </h3>
                      
                      <p className="text-xl font-semibold text-adventure-600 mb-6">
                        {category.subtitle}
                      </p>
                      
                      <p className="text-lg text-earth-600 leading-relaxed mb-8">
                        {category.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-earth-800 flex items-center space-x-2">
                        <span>♿</span>
                        <span>Accessibility Features</span>
                      </h4>
                      <ul className="space-y-3">
                        {category.highlights.map((highlight, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-3 group/item"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary-500 mt-3 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                            <span className="text-earth-700 leading-relaxed group-hover/item:text-earth-800 transition-colors duration-300">
                              {highlight}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Link
                        to={category.link}
                        className="inline-flex items-center space-x-3 bg-warning-400 text-earth-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-warning-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group/button"
                      >
                        <span>Explore {category.title}</span>
                        <ArrowRight className="h-5 w-5 group-hover/button:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Special Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-success-100 to-primary-100 rounded-3xl p-8 md:p-12"
        >
          <div className="text-left mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-earth-800 mb-4">
              Our Accessibility Commitment
            </h3>
            <p className="text-lg text-earth-600 max-w-3xl ml-0">
              Every adventure includes comprehensive accessibility assessments, 
              adaptive equipment, and personalized support to ensure everyone can participate fully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-left">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <HandHeart className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="font-bold text-earth-800 mb-2">25% Scholarship Program</h4>
              <p className="text-earth-600">Financial support for participants with disabilities</p>
            </div>
            
            <div className="text-left">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-adventure-600" />
              </div>
              <h4 className="font-bold text-earth-800 mb-2">Buddy System</h4>
              <p className="text-earth-600">Paired support for enhanced safety and friendship</p>
            </div>
            
            <div className="text-left">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-success-600" />
              </div>
              <h4 className="font-bold text-earth-800 mb-2">Empathy Training</h4>
              <p className="text-earth-600">All staff trained in disability awareness and support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InclusiveAdventureSection;
