import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Users, Mountain, Filter, ArrowRight, Compass, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const TripFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedSeason, setSelectedSeason] = useState('all');

  const destinations = [
    { id: 'all', name: 'All Areas' },
    { id: 'uttarakhand', name: 'Uttarakhand' },
  ];

  const difficulties = [
    { id: 'all', name: 'All Levels' },
    { id: 'easy', name: 'Easy' },
    { id: 'moderate', name: 'Moderate' },
    { id: 'challenging', name: 'Challenging' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const durations = [
    { id: 'all', name: 'Any Duration' },
    { id: '1-3', name: '1-3 Days' },
    { id: '4-7', name: '4-7 Days' },
    { id: '8-14', name: '8-14 Days' },
    { id: '15+', name: '15+ Days' }
  ];

  const seasons = [
    { id: 'all', name: 'Any Season' },
    { id: 'spring', name: 'Spring (Mar-May)' },
    { id: 'summer', name: 'Summer (Jun-Aug)' },
    { id: 'autumn', name: 'Autumn (Sep-Nov)' },
    { id: 'winter', name: 'Winter (Dec-Feb)' }
  ];

  const handleSearch = () => {
    const params = new URLSearchParams();
    
    if (searchTerm) params.append('search', searchTerm);
    if (selectedDestination !== 'all') params.append('destination', selectedDestination);
    if (selectedDifficulty !== 'all') params.append('difficulty', selectedDifficulty);
    if (selectedDuration !== 'all') params.append('duration', selectedDuration);
    if (selectedSeason !== 'all') params.append('season', selectedSeason);

    window.location.href = `/trips${params.toString() ? '?' + params.toString() : ''}`;
  };

  const quickFilters = [
    { name: 'Accessible Treks', link: '/trips?category=treks', icon: '🏔️', color: 'from-primary-500 to-adventure-500' },
    { name: 'Adaptive Rivers', link: '/trips?category=rivers', icon: '🚣', color: 'from-success-500 to-primary-500' },
    { name: 'Inclusive Stays', link: '/trips?category=stays', icon: '🏕️', color: 'from-success-500 to-primary-500' },
    { name: 'Winter Accessible', link: '/trips?season=winter', icon: '❄️', color: 'from-adventure-500 to-error-500' },
  ];

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background with diagonal split */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-warning-50 to-primary-50"></div>
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-adventure-50/50 via-transparent to-transparent transform skew-x-12 origin-top-right"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Layout Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12 md:mb-16">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-adventure-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 w-fit">
              <Compass className="h-4 w-4" />
              <span>DISCOVER YOUR PERFECT ACCESSIBLE ADVENTURE</span>
            </div>

            <div className="flex flex-col items-start mb-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.25em] mb-4 bg-gradient-to-b from-[#4a4a4a] to-[#6a6a6a] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
                Adventure Finder
              </h2>
              <div className="w-32 md:w-48 h-1 mb-4" style={{ backgroundColor: '#FFD700' }}></div>
            </div>
            <h3 className="text-lg md:text-xl font-medium text-primary-600 mb-4 md:mb-6">
              Tailored for Every Ability
            </h3>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Tell us your accessibility needs and preferences, and we'll help you find the perfect inclusive adventure 
              that matches your abilities, schedule, and dreams.
            </p>
          </motion.div>

          {/* Right: Quick Filters */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 md:gap-4"
          >
            {quickFilters.map((filter, index) => (
              <motion.div
                key={filter.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={filter.link}
                  className="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 block"
                >
                  <div className={`text-2xl md:text-3xl mb-2 md:mb-3 p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-r ${filter.color} text-white inline-block group-hover:scale-110 transition-transform duration-300`}>
                    {filter.icon}
                  </div>
                  <div className="font-bold text-sm md:text-base text-slate-800 group-hover:text-primary-600 transition-colors duration-300">
                    {filter.name}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Horizontal Search Interface */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-white/50"
        >
          {/* Search Bar */}
          <div className="relative mb-4 md:mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by destination, accessibility features, or activity type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 md:py-4 border border-slate-200 rounded-xl md:rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 bg-white/70 text-sm md:text-base"
            />
          </div>

          {/* Horizontal Filter Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
            <div>
              <label className="flex items-center space-x-2 text-xs md:text-sm font-medium text-slate-700 mb-2">
                <MapPin className="h-4 w-4 text-primary-600" />
                <span>Destination</span>
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-200 transition-all duration-300 bg-white/70 text-sm"
              >
                {destinations.map(dest => (
                  <option key={dest.id} value={dest.id}>{dest.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center space-x-2 text-xs md:text-sm font-medium text-slate-700 mb-2">
                <Mountain className="h-4 w-4 text-adventure-600" />
                <span>Difficulty</span>
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-200 transition-all duration-300 bg-white/70 text-sm"
              >
                {difficulties.map(diff => (
                  <option key={diff.id} value={diff.id}>{diff.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center space-x-2 text-xs md:text-sm font-medium text-slate-700 mb-2">
                <Calendar className="h-4 w-4 text-teal-600" />
                <span>Duration</span>
              </label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-200 transition-all duration-300 bg-white/70 text-sm"
              >
                {durations.map(duration => (
                  <option key={duration.id} value={duration.id}>{duration.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center space-x-2 text-xs md:text-sm font-medium text-slate-700 mb-2">
                <Calendar className="h-4 w-4 text-green-600" />
                <span>Season</span>
              </label>
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-200 transition-all duration-300 bg-white/70 text-sm"
              >
                {seasons.map(season => (
                  <option key={season.id} value={season.id}>{season.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="text-center">
            <button
              onClick={handleSearch}
              className="bg-gradient-to-r from-success-500 via-adventure-500 via-warning-500 via-primary-500 to-error-500 text-white px-6 md:px-8 py-3 rounded-xl font-semibold hover:from-success-600 hover:via-adventure-600 hover:via-warning-600 hover:via-primary-600 hover:to-error-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 text-sm md:text-base"
            >
              <Target className="h-5 w-5" />
              <span>Find My Perfect Adventure</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16"
        >
          <div className="bg-gradient-to-r from-slate-900 via-adventure-900 to-slate-900 rounded-2xl md:rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-adventure-400/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary-400/20 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                Need Personalized Support?
              </h3>
              <p className="text-sm md:text-base text-slate-300 mb-6 md:mb-8 max-w-3xl mx-auto">
                Can't find what you're looking for? Our accessibility specialists are here 
                to create the perfect custom itinerary designed specifically for your unique needs and dreams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-success-500 via-adventure-500 via-warning-500 via-primary-500 to-error-500 text-white px-5 md:px-6 py-3 rounded-xl font-semibold hover:from-success-600 hover:via-adventure-600 hover:via-warning-600 hover:via-primary-600 hover:to-error-600 transition-all duration-300 inline-flex items-center justify-center space-x-2 text-sm md:text-base"
                >
                  <Users className="h-4 w-4" />
                  <span>Speak to Accessibility Expert</span>
                </Link>
                <Link
                  to="/trips"
                  className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-5 md:px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center space-x-2 text-sm md:text-base"
                >
                  <span>Browse All Accessible Trips</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TripFinder;