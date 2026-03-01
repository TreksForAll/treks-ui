import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Users,
  Star,
  Clock,
  Filter,
  Search,
  Calendar,
  Mountain,
  ArrowRight,
  ChevronDown,
  Check,
  Heart,
  Shield
} from 'lucide-react';
import { trips } from '../data/trips';
import SEO from '../components/ui/SEO';

const CampsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const campTrips = trips.filter(trip => trip.category === 'camps');

  const durations = [
    { id: 'all', name: 'Any Duration' },
    { id: 'short', name: '1-5 Days' },
    { id: 'medium', name: '6-10 Days' },
    { id: 'long', name: '11+ Days' }
  ];

  const filteredTrips = campTrips.filter(camp => {
    const matchesSearch = camp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         camp.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDuration = selectedDuration === 'all' ||
                           (selectedDuration === 'short' && parseInt(camp.duration) <= 5) ||
                           (selectedDuration === 'medium' && parseInt(camp.duration) >= 6 && parseInt(camp.duration) <= 10) ||
                           (selectedDuration === 'long' && parseInt(camp.duration) >= 11);

    return matchesSearch && matchesDuration;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-success-600 bg-success-100';
      case 'Moderate': return 'text-adventure-600 bg-adventure-100';
      case 'Challenging': return 'text-warning-600 bg-warning-100';
      case 'Advanced': return 'text-error-600 bg-error-100';
      default: return 'text-earth-600 bg-earth-100';
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO
        title="Adventure camps - Treks for All | Accessible camping experiences"
        description="Immerse yourself in nature's beauty at our carefully curated accessible adventure camps. Experience inclusive camping with activities like rafting, kayaking, rock climbing, and yoga, all adapted for people of all abilities in stunning Himalayan locations with full accessibility support."
        keywords="accessible camping India, inclusive adventure camps, wheelchair accessible camps, adaptive camping, accessible nature stays, barrier-free camping"
        image="https://treksforall.in/camping/Camp-Aquaterra-New-01.webp"
        url="https://treksforall.in/camps"
      />
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-earth-800 mb-6">
              Adventure Camps
            </h1>
            <p className="text-xl text-earth-600 max-w-3xl mx-auto">
              Immerse yourself in nature's beauty at our carefully curated adventure camps
            </p>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => setShowFilters(!showFilters)}
              aria-label="Toggle filters"
              aria-expanded={showFilters}
              className="bg-warning-400 text-earth-900 px-6 py-3 rounded-lg font-semibold hover:bg-warning-500 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Filter className="h-5 w-5" />
              <span>Filter Camps</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      {showFilters && (
        <motion.section
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="py-8 bg-white border-b border-earth-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-earth-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search camps by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              />
            </div>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-2">Duration</label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full px-3 py-2 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500"
                >
                  {durations.map(duration => (
                    <option key={duration.id} value={duration.id}>{duration.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedDuration('all');
              }}
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              Clear All Filters
            </button>
          </div>
        </motion.section>
      )}

      {/* Results Count */}
      <section className="py-4 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-earth-600">
            Showing <span className="font-semibold text-earth-800">{filteredTrips.length}</span> of {campTrips.length} camps
          </p>
        </div>
      </section>

      {/* Camp Cards Grid */}
      <section className="py-16 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTrips.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTrips.map((camp, index) => (
                <motion.div
                  key={camp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/trip/${camp.id}`} className="block h-full">
                    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer h-full flex flex-col">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={camp.image}
                          alt={camp.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(camp.difficulty)}`}>
                            {camp.difficulty}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                          <span>Available</span>
                        </div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center space-x-2 text-earth-600 text-sm mb-2">
                          <MapPin className="h-4 w-4" />
                          <span>{camp.location}</span>
                        </div>

                        <h3 className="text-xl font-bold text-earth-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                          {camp.title}
                        </h3>

                        <p className="text-earth-600 mb-4 leading-relaxed line-clamp-3">
                          {camp.description}
                        </p>

                        {/* Departure Dates */}
                        <div className="bg-primary-50 border border-primary-200 rounded-lg p-3 mb-4">
                          <h4 className="font-semibold text-primary-800 mb-2 flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Departure Dates</span>
                          </h4>
                          <div className="space-y-1">
                            {camp.departureDates.map((date, idx) => (
                              <div key={idx} className="text-sm text-primary-700 font-medium">
                                📅 {date}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-earth-600 mb-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{camp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{camp.groupSize}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                          <div className="text-lg font-bold text-primary-600 whitespace-nowrap">
                            {camp.price}
                          </div>
                          <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                            <span>View Details</span>
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Mountain className="h-16 w-16 text-earth-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-earth-600 mb-2">No camps found</h3>
              <p className="text-earth-500">Try adjusting your filters to see more results</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Camps */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Adventure Camps?
            </h2>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Experience the perfect balance of adventure, comfort, and authentic local culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Safety First',
                description: 'Comprehensive safety protocols and trained staff ensure your peace of mind'
              },
              {
                icon: Heart,
                title: 'Authentic Experiences',
                description: 'Deep cultural immersion with local communities and traditions'
              },
              {
                icon: Mountain,
                title: 'Prime Locations',
                description: 'Carefully selected sites offering the best of nature and adventure'
              },
              {
                icon: Users,
                title: 'Expert Guidance',
                description: 'Professional guides with years of local knowledge and experience'
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-primary-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-adventure-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-primary-200 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-earth-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-6">
              Ready for Your Camp Adventure?
            </h2>
            <p className="text-lg text-earth-600 mb-8 max-w-2xl mx-auto">
              Join us for an unforgettable experience where adventure meets comfort in some of India's most beautiful locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-warning-400 text-earth-900 px-8 py-4 rounded-md font-semibold hover:bg-warning-500 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Your Stay</span>
              </Link>
              <Link
                to="/contact"
                className="border border-earth-300 text-earth-700 px-8 py-4 rounded-md font-semibold hover:bg-earth-50 transition-colors duration-300"
              >
                Get More Information
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CampsPage;
