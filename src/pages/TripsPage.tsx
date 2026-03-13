import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
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
  ChevronDown
} from 'lucide-react';
import TripComparison from '../components/trip/TripComparison';
import DifficultyHelpModal from '../components/trip/DifficultyHelpModal';
import { trips } from '../data/trips';
import SEO from '../components/ui/SEO';

const TripsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedSeason, setSelectedSeason] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [showDifficultyHelp, setShowDifficultyHelp] = useState(false);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const categories = [
    { id: 'all', name: 'All Adventures' },
    { id: 'treks', name: 'Himalayan Treks' },
    { id: 'rivers', name: 'River Expeditions' },
    { id: 'camps', name: 'Camps' },
    { id: 'climbs', name: 'Global Climbs' }
  ];

  const difficulties = [
    { id: 'all', name: 'All Levels' },
    { id: 'Easy', name: 'Easy' },
    { id: 'Moderate', name: 'Moderate' },
    { id: 'Challenging', name: 'Challenging' },
    { id: 'Advanced', name: 'Advanced' }
  ];

  const durations = [
    { id: 'all', name: 'Any Duration' },
    { id: 'short', name: '1-5 Days' },
    { id: 'medium', name: '6-10 Days' },
    { id: 'long', name: '11+ Days' }
  ];

  const seasons = [
    { id: 'all', name: 'All Seasons' },
    { id: 'spring', name: 'Spring' },
    { id: 'summer', name: 'Summer' },
    { id: 'autumn', name: 'Autumn' },
    { id: 'winter', name: 'Winter' }
  ];

  const parseFirstDepartureDate = (departureDates: string[]): Date | null => {
    if (!departureDates || departureDates.length === 0) return null;
    const firstDate = departureDates[0];
    if (firstDate === 'To Be Announced' || firstDate.toLowerCase().includes('to be announced')) {
      return null;
    }
    const match = firstDate.match(/^(\w+)\s+(\d+)/);
    if (!match) return null;
    const monthNames: { [key: string]: number } = {
      'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
      'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
    };
    const month = monthNames[match[1]];
    const day = parseInt(match[2]);
    const yearMatch = firstDate.match(/(\d{4})/);
    const year = yearMatch ? parseInt(yearMatch[1]) : new Date().getFullYear();
    if (month === undefined) return null;
    return new Date(year, month, day);
  };

  // Filter trips based on selected criteria
  const filteredTrips = trips.filter(trip => {
    const matchesSearch = trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trip.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || trip.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || trip.difficulty === selectedDifficulty;
    const matchesDuration = selectedDuration === 'all' ||
                           (selectedDuration === 'short' && parseInt(trip.duration) <= 5) ||
                           (selectedDuration === 'medium' && parseInt(trip.duration) >= 6 && parseInt(trip.duration) <= 10) ||
                           (selectedDuration === 'long' && parseInt(trip.duration) >= 11);
    const matchesSeason = selectedSeason === 'all'; // Add season matching logic as needed

    return matchesSearch && matchesCategory && matchesDifficulty && matchesDuration && matchesSeason;
  }).sort((a, b) => {
    const dateA = parseFirstDepartureDate(a.departureDates);
    const dateB = parseFirstDepartureDate(b.departureDates);
    if (!dateA && !dateB) return 0;
    if (!dateA) return 1;
    if (!dateB) return -1;
    return dateA.getTime() - dateB.getTime();
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

  // Convert trips data to match TripComparison interface
  const tripsForComparison = trips.map(trip => ({
    ...trip,
    difficulty: trip.difficulty as 'Easy' | 'Moderate' | 'Challenging' | 'Advanced',
    fitnessLevel: trip.difficulty === 'Easy' ? 'Low' as const : 
                  trip.difficulty === 'Moderate' ? 'Moderate' as const :
                  trip.difficulty === 'Challenging' ? 'High' as const : 'Very High' as const,
    maxAltitude: trip.maxAltitude,
    bestSeason: 'Summer', // This would be dynamic based on trip data
    highlights: trip.highlights
  }));

  if (showComparison) {
    return (
      <div className="pt-28">
        <TripComparison 
          availableTrips={tripsForComparison}
          maxComparisons={3}
        />
      </div>
    );
  }

  return (
    <div className="pt-28 min-h-screen bg-white">
      <SEO
        title="All adventures - Treks for All | Accessible trekking & camping"
        description="Discover our complete collection of accessible adventures across India and beyond. Browse inclusive Himalayan treks, river expeditions, and adventure camps designed for all abilities. Filter by difficulty, duration, and accessibility features to find your perfect outdoor experience."
        keywords="accessible Himalayan treks, inclusive camping India, wheelchair accessible trekking, adaptive adventure trips, accessible river rafting, inclusive adventure tours"
        image="https://treksforall.in/dayara/Dayara-Cover.webp"
        url="https://treksforall.in/trips"
      />
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left mb-12"
          >
            <div className="w-fit flex flex-col mb-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] mb-4 bg-gradient-to-b from-[#3b3939] to-[#929192] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
                All Adventures
              </h1>
              <div className="w-full h-0.5" style={{ backgroundColor: '#f3b815' }}></div>
            </div>
            <p className="text-lg text-earth-600 max-w-3xl ml-0">
              Discover our complete collection of adventures across India and beyond
            </p>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start mb-8">
            <button
              onClick={() => setShowFilters(!showFilters)}
              aria-label="Toggle filters"
              aria-expanded={showFilters}
              className="bg-warning-400 text-earth-900 px-6 py-3 rounded-lg font-semibold hover:bg-warning-500 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Filter className="h-5 w-5" />
              <span>Filter Adventures</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            <button
              onClick={() => setShowComparison(true)}
              aria-label="Compare adventures"
              className="border-2 border-adventure-500 text-adventure-600 px-6 py-3 rounded-lg font-semibold hover:bg-adventure-50 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Mountain className="h-5 w-5" />
              <span>Compare Adventures</span>
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
                placeholder="Search adventures by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              />
            </div>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-earth-700 mb-2">Difficulty</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-3 py-2 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty.id} value={difficulty.id}>{difficulty.name}</option>
                  ))}
                </select>
              </div>

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

              <div>
                <label className="block text-sm font-medium text-earth-700 mb-2">Season</label>
                <select
                  value={selectedSeason}
                  onChange={(e) => setSelectedSeason(e.target.value)}
                  className="w-full px-3 py-2 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500"
                >
                  {seasons.map(season => (
                    <option key={season.id} value={season.id}>{season.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedDifficulty('all');
                setSelectedDuration('all');
                setSelectedSeason('all');
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
          <p className="text-left text-earth-600">
            Showing <span className="font-semibold text-earth-800">{filteredTrips.length}</span> of {trips.length} adventures
          </p>
        </div>
      </section>

      {/* Trip Cards Grid */}
      <section className="py-16 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTrips.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTrips.map((trip, index) => (
                <motion.div
                  key={trip.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/trip/${trip.id}`} className="block h-full">
                    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer h-full flex flex-col">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={trip.image}
                          alt={trip.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(trip.difficulty)}`}>
                            {trip.difficulty}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                          <span>Available</span>
                        </div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center space-x-2 text-earth-600 text-sm mb-2">
                          <MapPin className="h-4 w-4" />
                          <span>{trip.location}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-earth-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                          {trip.title}
                        </h3>
                        
                        <p className="text-earth-600 mb-4 leading-relaxed line-clamp-3">
                          {trip.description}
                        </p>

                        {/* Departure Dates */}
                        <div className="bg-primary-50 border border-primary-200 rounded-lg p-3 mb-4">
                          <h4 className="font-semibold text-primary-800 mb-2 flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Departure Dates</span>
                          </h4>
                          <div className="space-y-1">
                            {trip.departureDates.map((date, idx) => (
                              <div key={idx} className={`text-sm font-medium ${date.includes('HAC-PwD') ? 'text-adventure-700 bg-adventure-100 px-2 py-1 rounded-md' : 'text-primary-700'}`}>
                                {date.includes('HAC-PwD') ? '⭐ ' : '📅 '}{date}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-earth-600 mb-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{trip.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{trip.groupSize}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                          <div className="text-lg font-bold text-primary-600 whitespace-nowrap">
                            {trip.price}
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
            <div className="text-left py-16">
              <Mountain className="h-16 w-16 text-earth-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-earth-600 mb-2">No adventures found</h3>
              <p className="text-earth-500">Try adjusting your filters to see more results</p>
            </div>
          )}
        </div>
      </section>

      {/* Difficulty Help Modal */}
      <DifficultyHelpModal
        isOpen={showDifficultyHelp}
        onClose={() => setShowDifficultyHelp(false)}
        tripType="all"
      />
    </div>
  );
};

export default TripsPage;
