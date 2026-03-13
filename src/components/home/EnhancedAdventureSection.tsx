import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Waves, Home, Mountain, ArrowRight, MapPin, Users, Calendar } from 'lucide-react';

const EnhancedAdventureSection = () => {
  const adventureCategories = [
    {
      id: 'river-expeditions',
      title: 'River Expeditions',
      subtitle: 'Conquer Nature\'s Liquid Highways',
      icon: Waves,
      emoji: '🚣',
      description: 'Navigate through thundering rapids and pristine wilderness corridors where ancient rivers carve their timeless stories through dramatic landscapes.',
      highlights: [
        'World-class white-water rafting on legendary Himalayan rivers',
        'Multi-day expeditions through remote gorges and untouched valleys',
        'Expert raft guides with decades of river rescue experience'
      ],
      image: '/Home-01.webp',
      link: '/trips?category=rivers',
      accentColor: 'blue',
      stats: { duration: '3-14 Days', difficulty: 'All Levels', locations: '8 Rivers' }
    },
    {
      id: 'adventure-stays',
      title: 'Adventure Stays',
      subtitle: 'Camp Under the Stars',
      icon: Home,
      emoji: '🏕️',
      description: 'Experience comfort redefined in spectacular natural settings, where premium accommodations seamlessly blend with raw wilderness beauty.',
      highlights: [
        'Eco-luxury lodges positioned in pristine wilderness locations',
        'Authentic cultural immersion with local communities',
        'Farm-to-table dining featuring regional specialties and organic ingredients'
      ],
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
      link: '/trips?category=stays',
      accentColor: 'emerald',
      stats: { duration: '2-7 Days', comfort: 'Luxury', locations: '12 Lodges' }
    },
    {
      id: 'global-climbs',
      title: 'Global Climbs',
      subtitle: 'Summit Dreams Beyond Borders',
      icon: Mountain,
      emoji: '🏔️',
      description: 'Ascend legendary peaks across continents, from Himalayan giants to international summits, pushing personal boundaries at altitude.',
      highlights: [
        'Technical climbing expeditions on world-renowned mountain ranges',
        'Professional high-altitude guides and comprehensive safety protocols',
        'International destinations including Everest, Kilimanjaro, and Andes peaks'
      ],
      image: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg',
      link: '/trips?category=climbs',
      accentColor: 'slate',
      stats: { altitude: 'Up to 8,848m', duration: '14-60 Days', difficulty: 'Advanced' }
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-earth-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M50 30L70 70H30z'/%3E%3C/g%3E%3C/svg%3E")`
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
            <span>🌟</span>
            <span>Premium Adventure Experiences</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-earth-800 mb-8 leading-tight">
            Where Adventure
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-adventure-600 to-primary-600 block">
              Meets Excellence
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-earth-600 max-w-4xl ml-0 leading-relaxed">
            Embark on extraordinary journeys that challenge your limits, awaken your spirit, and create memories that last a lifetime.
            From roaring rapids to towering peaks, discover adventures crafted for the truly passionate.
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
                      
                      {/* Floating Stats */}
                      <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                        <div className="text-left">
                          <div className="text-3xl mb-2">{category.emoji}</div>
                          <div className="text-sm text-earth-600 font-medium">
                            {Object.entries(category.stats).map(([key, value], idx) => (
                              <div key={key} className={idx > 0 ? 'mt-1' : ''}>
                                <span className="capitalize">{key}:</span> <span className="font-semibold text-earth-800">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Overlay Icon */}
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
                        <span>✨</span>
                        <span>Experience Highlights</span>
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

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mt-20 pt-16 border-t border-earth-200"
        >
          <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-adventure-900 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Write Your Adventure Story?
              </h3>
              <p className="text-xl text-primary-200 mb-8 max-w-3xl ml-0 leading-relaxed">
                Join thousands of adventurers who have discovered extraordinary experiences with Aquaterra. 
                Your next life-changing journey is just one click away.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/trips"
                  className="bg-warning-400 text-earth-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-warning-500 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
                >
                  <span>View All Adventures</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                >
                  <span>Plan Custom Trip</span>
                  <Users className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedAdventureSection;
