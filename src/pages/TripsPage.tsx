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
  ChevronDown,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import TripComparison from '../components/trip/TripComparison';
import DifficultyHelpModal from '../components/trip/DifficultyHelpModal';
import { trips } from '../data/trips';
import SEO from '../components/ui/SEO';
import VSheshRecognitionsSection from '../components/home/VSheshRecognitionsSection';

const monthNames: { [key: string]: number } = {
  'january': 0, 'february': 1, 'march': 2, 'april': 3, 'may': 4, 'june': 5,
  'july': 6, 'august': 7, 'september': 8, 'october': 9, 'november': 10, 'december': 11,
  'jan': 0, 'feb': 1, 'mar': 2, 'apr': 3, 'jun': 5, 'jul': 6, 'aug': 7, 'sep': 8, 'sept': 8, 'oct': 9, 'nov': 10, 'dec': 11
};

export const parseDepartureDateRange = (str: string): { start: Date; end: Date } | null => {
  if (!str || str.toLowerCase().includes('to be announced')) return null;
  const clean = str.replace(/\s*\([^)]*\)/g, '').trim();
  const yearMatch = clean.match(/(\d{4})/);
  const year = yearMatch ? parseInt(yearMatch[1], 10) : new Date().getFullYear();

  // Range across two months: 'February 20 - March 12, 2026'
  const crossMonth = clean.match(/^([a-zA-Z]+)\s+(\d+)\s*-\s*([a-zA-Z]+)\s+(\d+)/);
  if (crossMonth) {
    const m1 = monthNames[crossMonth[1].toLowerCase()];
    const d1 = parseInt(crossMonth[2], 10);
    const m2 = monthNames[crossMonth[3].toLowerCase()];
    const d2 = parseInt(crossMonth[4], 10);
    if (m1 !== undefined && m2 !== undefined) {
      const endYear = m2 < m1 ? year + 1 : year;
      return {
        start: new Date(year, m1, d1, 0, 0, 0),
        end: new Date(endYear, m2, d2, 23, 59, 59)
      };
    }
  }

  // Range in single month: 'June 8 - 13, 2026' or single day: 'June 8, 2026'
  const singleMonth = clean.match(/^([a-zA-Z]+)\s+(\d+)\s*(?:-\s*(\d+))?/);
  if (singleMonth) {
    const m = monthNames[singleMonth[1].toLowerCase()];
    const d1 = parseInt(singleMonth[2], 10);
    const d2 = singleMonth[3] ? parseInt(singleMonth[3], 10) : d1;
    if (m !== undefined) {
      return {
        start: new Date(year, m, d1, 0, 0, 0),
        end: new Date(year, m, d2, 23, 59, 59)
      };
    }
  }

  return null;
};

// Check if a trip has any future/ongoing departure date or is To Be Announced
export const isTripUpcoming = (departureDates: string[], now: Date = new Date()): boolean => {
  if (!departureDates || departureDates.length === 0) return false;
  return departureDates.some(dateStr => {
    if (dateStr && dateStr.toLowerCase().includes('to be announced')) {
      return true;
    }
    const range = parseDepartureDateRange(dateStr);
    return range !== null && range.end.getTime() >= now.getTime();
  });
};

export const getNextUpcomingDepartureDate = (departureDates: string[], now: Date = new Date()): Date | null => {
  const future: Date[] = [];
  let hasTBA = false;
  departureDates.forEach(d => {
    if (d && d.toLowerCase().includes('to be announced')) {
      hasTBA = true;
      return;
    }
    const range = parseDepartureDateRange(d);
    if (range && range.end.getTime() >= now.getTime()) {
      future.push(range.start);
    }
  });
  if (future.length > 0) {
    future.sort((a, b) => a.getTime() - b.getTime());
    return future[0];
  }
  if (hasTBA) {
    // Return a distant future date so TBA trips appear at the end of the upcoming list
    return new Date(9999, 11, 31);
  }
  return null;
};

export const getLatestDepartureDate = (departureDates: string[]): Date | null => {
  const all: Date[] = [];
  departureDates.forEach(d => {
    const range = parseDepartureDateRange(d);
    if (range) {
      all.push(range.end);
    }
  });
  if (all.length === 0) return null;
  all.sort((a, b) => b.getTime() - a.getTime());
  return all[0];
};

const TripsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const statusParam = searchParams.get('status');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<'upcoming' | 'completed' | 'all'>(() => {
    if (statusParam === 'completed' || statusParam === 'all' || statusParam === 'upcoming') {
      return statusParam;
    }
    return 'upcoming';
  });
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

  useEffect(() => {
    if (statusParam === 'completed' || statusParam === 'all' || statusParam === 'upcoming') {
      setSelectedStatus(statusParam);
    }
  }, [statusParam]);

  const handleStatusChange = (status: 'upcoming' | 'completed' | 'all') => {
    setSelectedStatus(status);
    const newParams = new URLSearchParams(searchParams);
    if (status === 'upcoming') {
      newParams.delete('status');
    } else {
      newParams.set('status', status);
    }
    setSearchParams(newParams, { replace: true });
  };

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

  const now = new Date();

  // Base filtered trips based on search, category, difficulty, duration
  const baseFilteredTrips = trips.filter(trip => {
    const matchesSearch = trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trip.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || trip.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || trip.difficulty === selectedDifficulty;
    const matchesDuration = selectedDuration === 'all' ||
                           (selectedDuration === 'short' && parseInt(trip.duration) <= 5) ||
                           (selectedDuration === 'medium' && parseInt(trip.duration) >= 6 && parseInt(trip.duration) <= 10) ||
                           (selectedDuration === 'long' && parseInt(trip.duration) >= 11);
    const matchesSeason = selectedSeason === 'all';

    return matchesSearch && matchesCategory && matchesDifficulty && matchesDuration && matchesSeason;
  });

  const upcomingCount = baseFilteredTrips.filter(t => isTripUpcoming(t.departureDates, now)).length;
  const completedCount = baseFilteredTrips.filter(t => !isTripUpcoming(t.departureDates, now)).length;
  const allCount = baseFilteredTrips.length;

  // Filter trips based on selected criteria and selected timing status
  const filteredTrips = baseFilteredTrips.filter(trip => {
    const upcoming = isTripUpcoming(trip.departureDates, now);
    if (selectedStatus === 'upcoming') return upcoming;
    if (selectedStatus === 'completed') return !upcoming;
    return true;
  }).sort((a, b) => {
    if (selectedStatus === 'completed') {
      const dateA = getLatestDepartureDate(a.departureDates);
      const dateB = getLatestDepartureDate(b.departureDates);
      if (!dateA && !dateB) return 0;
      if (!dateA) return 1;
      if (!dateB) return -1;
      return dateB.getTime() - dateA.getTime();
    } else if (selectedStatus === 'upcoming') {
      const dateA = getNextUpcomingDepartureDate(a.departureDates, now);
      const dateB = getNextUpcomingDepartureDate(b.departureDates, now);
      if (!dateA && !dateB) return 0;
      if (!dateA) return 1;
      if (!dateB) return -1;
      return dateA.getTime() - dateB.getTime();
    } else {
      const aUp = isTripUpcoming(a.departureDates, now);
      const bUp = isTripUpcoming(b.departureDates, now);
      if (aUp && !bUp) return -1;
      if (!aUp && bUp) return 1;
      if (aUp && bUp) {
        const dA = getNextUpcomingDepartureDate(a.departureDates, now);
        const dB = getNextUpcomingDepartureDate(b.departureDates, now);
        if (!dA && !dB) return 0;
        if (!dA) return 1;
        if (!dB) return -1;
        return dA.getTime() - dB.getTime();
      } else {
        const dA = getLatestDepartureDate(a.departureDates);
        const dB = getLatestDepartureDate(b.departureDates);
        if (!dA && !dB) return 0;
        if (!dA) return 1;
        if (!dB) return -1;
        return dB.getTime() - dA.getTime();
      }
    }
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
    bestSeason: 'Summer',
    highlights: trip.highlights
  }));

  if (showComparison) {
    return (
      <div className="pt-20 md:pt-28">
        <TripComparison 
          availableTrips={tripsForComparison}
          maxComparisons={3}
        />
      </div>
    );
  }

  return (
    <div className="pt-16 sm:pt-20 md:pt-28 min-h-screen bg-white">
      <SEO
        title="All adventures - Treks for All | Accessible trekking & camping"
        description="Discover our complete collection of accessible adventures across India and beyond. Browse inclusive Himalayan treks, river expeditions, and adventure camps designed for all abilities. Filter by difficulty, duration, and accessibility features to find your perfect outdoor experience."
        keywords="accessible Himalayan treks, inclusive camping India, wheelchair accessible trekking, adaptive adventure trips, accessible river rafting, inclusive adventure tours"
        image="https://treksforall.in/dayara/Dayara-Cover.webp"
        url="https://treksforall.in/trips"
      />
      {/* Header */}
      <section className="pt-12 sm:pt-20 pb-6 sm:pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left mb-6 sm:mb-8"
          >
            <div className="border-l-[5px] border-[#e0aa04] pl-4 mb-3 sm:mb-5">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] text-[#e0aa04]" style={{ fontWeight: 700 }}>
                {selectedStatus === 'upcoming'
                  ? 'Upcoming Adventures'
                  : selectedStatus === 'completed'
                  ? 'Completed Adventures'
                  : 'All Adventures'}
              </h1>
            </div>
            <p className="text-sm sm:text-lg text-earth-600 max-w-3xl ml-0">
              {selectedStatus === 'upcoming'
                ? 'Discover upcoming trips scheduled in the future across India and beyond. Reserve your spot today.'
                : selectedStatus === 'completed'
                ? 'Browse past inclusive expeditions and memorable adventures successfully completed.'
                : 'Discover our complete collection of adventures across India and beyond.'}
            </p>
          </motion.div>

          {/* Top Filter Bar: Upcoming vs Completed Pills + Action Buttons */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-2 border-b border-earth-200/60">
            {/* Status Segmented Pill Tabs */}
            <div className="inline-flex p-1.5 bg-[#f0f4f5] rounded-2xl border border-[#d1ebed] shadow-inner gap-1 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => handleStatusChange('upcoming')}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  selectedStatus === 'upcoming'
                    ? 'bg-[#e0aa04] text-white shadow-md'
                    : 'text-[#2c646c] hover:bg-white/60 hover:text-[#e0aa04]'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Upcoming Trips</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-extrabold ${
                    selectedStatus === 'upcoming'
                      ? 'bg-black/20 text-white'
                      : 'bg-[#d1ebed] text-[#2c646c]'
                  }`}
                >
                  {upcomingCount}
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleStatusChange('completed')}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  selectedStatus === 'completed'
                    ? 'bg-[#377d87] text-white shadow-md'
                    : 'text-[#2c646c] hover:bg-white/60 hover:text-[#377d87]'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Completed</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-extrabold ${
                    selectedStatus === 'completed'
                      ? 'bg-black/20 text-white'
                      : 'bg-[#d1ebed] text-[#2c646c]'
                  }`}
                >
                  {completedCount}
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleStatusChange('all')}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  selectedStatus === 'all'
                    ? 'bg-[#2c646c] text-white shadow-md'
                    : 'text-[#2c646c] hover:bg-white/60 hover:text-[#2c646c]'
                }`}
              >
                <Mountain className="w-4 h-4" />
                <span>All Adventures</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-extrabold ${
                    selectedStatus === 'all'
                      ? 'bg-black/20 text-white'
                      : 'bg-[#d1ebed] text-[#2c646c]'
                  }`}
                >
                  {allCount}
                </span>
              </button>
            </div>

            {/* Action Buttons: Filter & Compare */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                aria-label="Toggle filters"
                aria-expanded={showFilters}
                className="bg-[#377d87] text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-[#2c646c] transition-all duration-300 flex items-center justify-center space-x-2 text-sm shadow-sm cursor-pointer"
              >
                <Filter className="h-4 w-4" />
                <span>Filter Adventures</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
              </button>
              <button
                onClick={() => setShowComparison(true)}
                aria-label="Compare adventures"
                className="border-2 border-[#377d87] text-[#377d87] px-5 py-2.5 rounded-xl font-semibold hover:bg-[#e8f5f6] transition-all duration-300 flex items-center justify-center space-x-2 text-sm cursor-pointer"
              >
                <Mountain className="h-4 w-4" />
                <span>Compare Adventures</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section Drawer */}
      {showFilters && (
        <motion.section
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="py-8 bg-[#f5f7fa] border-b border-[#d1ebed]"
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
                className="w-full pl-10 pr-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 bg-white"
              />
            </div>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-2">Trip Timing</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => handleStatusChange(e.target.value as 'upcoming' | 'completed' | 'all')}
                  className="w-full px-3 py-2 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500 bg-white"
                >
                  <option value="upcoming">Upcoming Trips ({upcomingCount})</option>
                  <option value="completed">Completed Trips ({completedCount})</option>
                  <option value="all">All Adventures ({allCount})</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-earth-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500 bg-white"
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
                  className="w-full px-3 py-2 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500 bg-white"
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
                  className="w-full px-3 py-2 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500 bg-white"
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
                  className="w-full px-3 py-2 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500 bg-white"
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
                handleStatusChange('upcoming');
                setSelectedCategory('all');
                setSelectedDifficulty('all');
                setSelectedDuration('all');
                setSelectedSeason('all');
              }}
              className="text-primary-600 hover:text-primary-700 text-sm font-medium cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        </motion.section>
      )}

      {/* Trip Cards Grid */}
      <section className="pb-16 bg-white pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTrips.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {filteredTrips.map((trip, index) => {
                const tripIsUpcoming = isTripUpcoming(trip.departureDates, now);

                return (
                  <motion.div
                    key={trip.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link to={`/trip/${trip.id}`} className="block h-full">
                      <div className="group bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-500 cursor-pointer h-full flex flex-col border border-[#d1ebed]">
                        <div className="relative h-48 md:h-64 overflow-hidden">
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

                          {/* Dynamic Trip Status Badge */}
                          <div className="absolute top-4 right-4">
                            {tripIsUpcoming ? (
                              <div className="bg-emerald-700/85 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1.5 shadow-sm border border-emerald-400/30">
                                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                                <span>Upcoming</span>
                              </div>
                            ) : (
                              <div className="bg-slate-800/85 backdrop-blur-sm text-slate-200 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1.5 shadow-sm border border-slate-500/30">
                                <span className="w-2 h-2 rounded-full bg-slate-400" />
                                <span>Completed</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="p-4 sm:p-6 flex-1 flex flex-col">
                          <div className="flex items-center space-x-2 text-earth-600 text-xs sm:text-sm mb-2">
                            <MapPin className="h-4 w-4" />
                            <span>{trip.location}</span>
                          </div>
                          
                          <h3 className="text-base sm:text-xl font-bold text-[#2c646c] mb-2 sm:mb-3 group-hover:text-[#e0aa04] transition-colors duration-300">
                            {trip.title}
                          </h3>
                          
                          <p className="text-sm sm:text-base text-earth-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                            {trip.description}
                          </p>

                          {/* Departure Dates */}
                          <div className={`border rounded-xl p-3 mb-4 ${
                            tripIsUpcoming ? 'bg-[#fef3d1] border-[#e0aa04]/20' : 'bg-[#f5f5f4] border-earth-200'
                          }`}>
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-[#2c646c] flex items-center space-x-1 text-sm">
                                <Calendar className="h-4 w-4 text-[#e0aa04]" />
                                <span>Departure Dates</span>
                              </h4>
                              {tripIsUpcoming ? (
                                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                                  Future Dates
                                </span>
                              ) : (
                                <span className="text-[10px] font-bold uppercase tracking-wider text-earth-600 bg-earth-200 px-1.5 py-0.5 rounded">
                                  Completed
                                </span>
                              )}
                            </div>
                            <div className="space-y-1.5">
                              {trip.departureDates.map((date, idx) => {
                                const isTBA = date.toLowerCase().includes('to be announced');
                                const range = parseDepartureDateRange(date);
                                const isDateFuture = isTBA || (range ? range.end.getTime() >= now.getTime() : false);

                                return (
                                  <div
                                    key={idx}
                                    className={`text-xs sm:text-sm font-medium flex items-center justify-between gap-1 ${
                                      date.includes('HAC-PwD')
                                        ? 'text-[#377d87] bg-[#e8f5f6] px-2 py-1 rounded-md'
                                        : isDateFuture
                                        ? 'text-[#2c646c]'
                                        : 'text-earth-500'
                                    }`}
                                  >
                                    <span className="truncate">
                                      {date.includes('HAC-PwD') ? '⭐ ' : '📅 '}
                                      {date}
                                    </span>
                                    {isDateFuture && (
                                      <span className="shrink-0 text-[9px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold uppercase tracking-wider">
                                        Upcoming
                                      </span>
                                    )}
                                  </div>
                                );
                              })}
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

                          <div className="flex items-center justify-between mt-auto pt-2">
                            <div className="text-base sm:text-lg font-bold text-earth-900 whitespace-nowrap">
                              {trip.price}
                            </div>
                            <div className="flex items-center text-[#377d87] text-sm sm:text-base font-medium group-hover:translate-x-1 transition-transform duration-300">
                              <span>{tripIsUpcoming ? 'View Details' : 'View Trip Details'}</span>
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <Mountain className="h-16 w-16 text-earth-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-earth-600 mb-2">
                No {selectedStatus === 'upcoming' ? 'upcoming' : selectedStatus === 'completed' ? 'completed' : ''} adventures found
              </h3>
              <p className="text-earth-500 max-w-md mx-auto mb-4 text-sm">
                {selectedStatus === 'upcoming'
                  ? 'There are no upcoming adventures matching your filter criteria. Try viewing completed trips or clear filters.'
                  : selectedStatus === 'completed'
                  ? 'No completed adventures match your current filters.'
                  : 'Try adjusting your filters to see more results.'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  handleStatusChange('all');
                  setSelectedCategory('all');
                  setSelectedDifficulty('all');
                  setSelectedDuration('all');
                  setSelectedSeason('all');
                }}
                className="bg-[#377d87] text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-[#2c646c] transition-all text-sm cursor-pointer"
              >
                Reset All Filters
              </button>
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
