import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Users,
  Mountain,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  HelpCircle,
  Send,
  Phone,
  Mail,
  AlertTriangle,
  Camera,
  Share2,
  Bookmark,
  TrendingUp,
  Expand,
  ArrowRight,
  X,
  Download,
  Play,
  CreditCard
} from 'lucide-react';
import { trips } from '../data/trips';
import { getDifficultyIcon, getDifficultyColor } from '../utils/difficultyUtils';
import DifficultyHelpModal from '../components/trip/DifficultyHelpModal';
import PackingTools from '../components/trip/PackingTools';
import TripAssessment from '../components/trip/TripAssessment';
import WeatherClimate from '../components/trip/WeatherClimate';
import Lightbox from '../components/ui/Lightbox';
import SEO from '../components/ui/SEO';
import { submitForm } from '../lib/xano';
import VSheshRecognitionsSection from '../components/home/VSheshRecognitionsSection';

const TripDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [trip, setTrip] = useState(trips[0]); // Default to first trip
  const [activeTab, setActiveTab] = useState('overview');
  const [showDifficultyHelp, setShowDifficultyHelp] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);
  const [bookmarkSuccess, setBookmarkSuccess] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    departureDate: '',
    groupSize: '1',
    message: ''
  });
  const [isSubmittingBooking, setIsSubmittingBooking] = useState(false);
  const [bookingSubmitStatus, setBookingSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [bookingIntent, setBookingIntent] = useState<'enquiry' | 'payment' | null>(null);

  const parseBasePrice = (priceStr: string): number => {
    const match = priceStr.replace(/,/g, '').match(/[\d]+/);
    return match ? parseInt(match[0]) : 0;
  };
  const priceHasGst = (priceStr: string) => priceStr.toLowerCase().includes('gst');

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Check if hint should be shown (first time on mobile)
    const hasSeenHint = localStorage.getItem('aquaterra-scroll-hint-seen');
    if (!hasSeenHint && window.innerWidth < 1024) {
      setShowScrollHint(true);
      localStorage.setItem('aquaterra-scroll-hint-seen', 'true');
    }

    if (id) {
      const foundTrip = trips.find(t => t.id === id);
      if (foundTrip) {
        setTrip(foundTrip);

        const bookmarkedTrips = JSON.parse(localStorage.getItem('bookmarkedTrips') || '[]');
        setIsBookmarked(bookmarkedTrips.includes(foundTrip.id));
      }
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [id]);

  useEffect(() => {
    if (isVideoPlaying) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVideoPlaying]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isVideoPlaying) {
        setIsVideoPlaying(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isVideoPlaying]);

  const dismissScrollHint = () => {
    setShowScrollHint(false);
  };
  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingBooking(true);
    setBookingSubmitStatus('idle');

    try {
      const result = await submitForm({
        formType: 'booking',
        name: bookingForm.name,
        email: bookingForm.email,
        phone: bookingForm.phone,
        tripName: trip.title,
        departureDate: bookingForm.departureDate,
        groupSize: bookingForm.groupSize,
        message: bookingForm.message,
      });

      if (result.success) {
        setBookingSubmitStatus('success');
        setBookingForm({
          name: '',
          email: '',
          phone: '',
          departureDate: '',
          groupSize: '',
          message: ''
        });
      } else {
        console.error('Booking submission failed:', result.message);
        setBookingSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setBookingSubmitStatus('error');
    } finally {
      setIsSubmittingBooking(false);
    }
  };

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: trip.title,
          text: trip.description,
          url: window.location.href,
        });
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 2000);
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          console.log('Share failed');
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 2000);
      } catch (error) {
        console.error('Failed to copy to clipboard');
      }
    }
  };

  const handleBookmark = () => {
    const newBookmarkState = !isBookmarked;
    setIsBookmarked(newBookmarkState);

    const bookmarkedTrips = JSON.parse(localStorage.getItem('bookmarkedTrips') || '[]');

    if (newBookmarkState) {
      if (!bookmarkedTrips.includes(trip.id)) {
        bookmarkedTrips.push(trip.id);
        localStorage.setItem('bookmarkedTrips', JSON.stringify(bookmarkedTrips));
      }
    } else {
      const index = bookmarkedTrips.indexOf(trip.id);
      if (index > -1) {
        bookmarkedTrips.splice(index, 1);
        localStorage.setItem('bookmarkedTrips', JSON.stringify(bookmarkedTrips));
      }
    }

    setBookmarkSuccess(true);
    setTimeout(() => setBookmarkSuccess(false), 2000);
  };

  // Generate gallery images from trip data
  const galleryImages = (trip as any).gallery ?
    (trip as any).gallery.map((src: string, idx: number) => ({
      src,
      alt: `${trip.title} - Image ${idx + 1}`,
      title: `View ${idx + 1}`
    })) :
    [
      { src: trip.image, alt: trip.title, title: 'Main View' },
      { src: 'https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg', alt: 'Mountain landscape', title: 'Scenic Route' },
      { src: 'https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg', alt: 'Himalayan vista', title: 'Summit Views' },
      { src: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg', alt: 'Mountain trail', title: 'Trek Route' },
      { src: 'https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg', alt: 'Mountain camp', title: 'Base Camp' },
      { src: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg', alt: 'Alpine lake', title: 'High Lake' }
    ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setShowLightbox(true);
  };

  if (!trip) {
    return (
      <div className="pt-20 md:pt-28 min-h-screen bg-earth-50 flex items-center justify-center">
        <div className="text-left">
          <h2 className="text-2xl font-bold text-earth-800 mb-4">Trip Not Found</h2>
          <p className="text-earth-600 mb-6">The trip you're looking for doesn't exist.</p>
          <Link
            to="/trips"
            className="bg-warning-400 text-earth-900 px-6 py-3 rounded-lg font-semibold hover:bg-warning-500 transition-colors duration-300"
          >
            Browse All Trips
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 sm:pt-20 md:pt-28 min-h-screen bg-white">
      <SEO
        title={`${trip.title} - Treks for All | ${trip.location}`}
        description={`${trip.description} Join us for this ${trip.difficulty.toLowerCase()} ${trip.duration} adventure in ${trip.location}. Accessible and inclusive adventure travel.`}
        keywords={`${trip.title}, accessible ${trip.location} trek, inclusive ${trip.category}, ${trip.difficulty} trek, ${trip.duration} adventure, wheelchair accessible trek`}
        image={`https://treksforall.in${trip.image}`}
        url={`https://treksforall.in/trip/${trip.id}`}
        type="article"
      />
      {/* Back Button */}
      <div className="bg-white border-b border-earth-200 sticky top-20 md:top-28 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/trips"
              className="inline-flex items-center space-x-2 text-earth-600 hover:text-adventure-600 transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back to All Adventures</span>
              <span className="sm:hidden">Back</span>
            </Link>

            <div className="flex items-center space-x-3">
              <div className="relative">
                <button
                  onClick={handleBookmark}
                  className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center ${
                    isBookmarked
                      ? 'bg-adventure-100 text-adventure-600'
                      : 'bg-earth-100 text-earth-600 hover:bg-adventure-100 hover:text-adventure-600'
                  }`}
                  title={isBookmarked ? 'Remove bookmark' : 'Bookmark this trip'}
                  aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark this trip'}
                >
                  <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>
                <AnimatePresence>
                  {bookmarkSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-success-600 text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg z-50"
                    >
                      {isBookmarked ? 'Saved!' : 'Removed'}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="relative">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full bg-earth-100 text-earth-600 hover:bg-primary-100 hover:text-primary-600 transition-all duration-300 flex items-center justify-center"
                  title="Share this trip"
                  aria-label="Share this trip"
                >
                  <Share2 className="h-5 w-5" />
                </button>
                <AnimatePresence>
                  {shareSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg z-50"
                    >
                      Link copied!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[45vh] sm:h-96 md:h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${trip.image}')` }}
      >
        <div className="text-left text-white px-3 sm:px-4 max-w-4xl py-6 sm:py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trip Category */}
            <div className="inline-flex items-center space-x-2 bg-adventure-500/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span>🗻</span>
              <span>{trip.category === 'treks' ? 'Himalayan Trek' : trip.category === 'rivers' ? 'River Expedition' : 'Adventure Experience'}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              {trip.title}
            </h1>

            {/* Play Button - Only for Dayara Bugyal */}
            {trip.id === '1' && (
              <div className="mb-6">
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="group bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 border border-white/30 focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent inline-flex items-center space-x-2"
                  aria-label="Watch trek video"
                >
                  <Play className="h-5 w-5" />
                  <span>Watch Video</span>
                </button>
              </div>
            )}

            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center max-w-3xl ml-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center justify-center">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mb-1 text-adventure-400" />
                <div className="text-xs sm:text-sm font-medium">{trip.location}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center justify-center">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 mb-1 text-adventure-400" />
                <div className="text-xs sm:text-sm font-medium">{trip.duration}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center justify-center">
                <div className="mb-1 text-adventure-400 flex items-center justify-center">
                  {getDifficultyIcon(trip.difficulty)}
                </div>
                <div className="text-xs sm:text-sm font-medium">{trip.difficulty}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center justify-center">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 mb-1 text-adventure-400" />
                <div className="text-xs sm:text-sm font-medium">{trip.groupSize}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trip Info Bar */}
      <section className="bg-white border-b border-earth-200 sticky top-[7rem] md:top-36 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-earth-600">{getDifficultyIcon(trip.difficulty)}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(trip.difficulty)}`}>
                  {trip.difficulty}
                </span>
                <button
                  onClick={() => setShowDifficultyHelp(true)}
                  className="text-earth-500 hover:text-adventure-600 transition-colors duration-300 focus:outline-none"
                  title="Learn about difficulty levels"
                >
                  <HelpCircle className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-2xl md:text-3xl font-bold text-earth-800">{trip.price}</div>
                <div className="text-sm text-earth-600">per person</div>
              </div>
              <button
                onClick={() => {
                  setBookingIntent(null);
                  setActiveTab('booking');
                  setTimeout(() => {
                    document.getElementById('tab-navigation')?.scrollIntoView({ behavior: 'smooth' });
                  }, 50);
                }}
                className="bg-warning-400 text-earth-900 px-8 py-3 rounded-lg font-bold hover:bg-warning-500 transition-all duration-300 transform hover:scale-105"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative" id="tab-navigation">
            {/* Mobile Scrollable Tab Navigation */}
            <div className="flex overflow-x-auto scrollbar-hide border-b border-earth-200 lg:flex-wrap lg:overflow-x-visible" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              <style>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
            {[
              { id: 'overview', name: 'Overview' },
              { id: 'itinerary', name: 'Itinerary' },
              { id: 'gallery', name: 'Gallery' },
              { id: 'assessment', name: 'Trip Assessment' },
              { id: 'weather', name: 'Weather' },
              ...(trip.id !== '3' && trip.id !== '7' ? [{ id: 'packing', name: 'Packing Tools' }] : []),
              ...(trip.id === '3' || trip.id === '7' ? [{ id: 'campPacking', name: 'Packing List' }] : []),
              ...(trip.id === '3' ? [{ id: 'faqs', name: 'FAQs' }] : []),
              { id: 'inclusions', name: 'What\'s Included' },
              { id: 'booking', name: 'Book Trip' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 py-2.5 font-semibold transition-all duration-300 border-b-2 whitespace-nowrap text-sm focus:outline-none ${
                  activeTab === tab.id
                    ? 'border-adventure-500 text-adventure-600'
                    : 'border-transparent text-earth-600 hover:text-adventure-600'
                }`}
              >
                {tab.name}
              </button>
            ))}
            </div>
            
            {/* Scroll Indicators for Mobile */}
            <div className="lg:hidden absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            <div className="lg:hidden absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            
            {/* Mobile Scroll Hint */}
            <AnimatePresence>
              {showScrollHint && isMobile && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute top-full left-4 right-4 mt-2 z-50"
                >
                  <div className="bg-warning-400 text-earth-900 rounded-xl p-4 shadow-2xl border border-adventure-400 relative">
                    {/* Pointer arrow */}
                    <div className="absolute -top-2 left-8 w-4 h-4 bg-adventure-500 rotate-45 border-l border-t border-adventure-400"></div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                          <ArrowRight className="h-5 w-5 text-white animate-pulse" />
                        </div>
                        <div>
                          <p className="font-semibold text-white mb-1">
                            Swipe to explore more sections
                          </p>
                          <p className="text-adventure-100 text-sm">
                            Scroll horizontally through the menu tabs
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={dismissScrollHint}
                        className="bg-white/20 hover:bg-white/30 rounded-full p-1 ml-3 transition-colors duration-300 flex-shrink-0"
                        aria-label="Dismiss hint"
                      >
                        <X className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-10 sm:py-16 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              {/* Trip Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                <div className="md:col-span-2 space-y-6 sm:space-y-8">
                  {/* About This Trip */}
                  <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-earth-800 mb-4 sm:mb-6">{trip.id === '3' ? 'Camp Aquaterra' : 'About This Adventure'}</h2>
                    <div className="text-sm sm:text-base text-earth-600 leading-relaxed mb-4 sm:mb-6">
                      {trip.description.split(' Weather:').map((part, index) => (
                        <React.Fragment key={index}>
                          {index === 0 ? (
                            <span>{part}</span>
                          ) : (
                            <>
                              <br /><br />
                              <strong className="text-earth-800">Weather:</strong>
                              {part}
                            </>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-earth-800">{trip.id === '3' ? 'Camp Highlights' : 'Trip Highlights'}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {trip.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-success-600 mt-0.5 flex-shrink-0" />
                            <span className="text-earth-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Trip Info Sidebar */}
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-earth-800 mb-6">Trip Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-earth-600 shrink-0">Duration</span>
                        <span className="font-semibold text-earth-800 text-right">{trip.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-earth-600 shrink-0">Difficulty</span>
                        <div className="flex items-center space-x-1 ml-auto">
                          <button
                            onClick={() => setShowDifficultyHelp(true)}
                            className="text-earth-500 hover:text-adventure-600 transition-colors duration-300 focus:outline-none"
                          >
                            <HelpCircle className="h-4 w-4" />
                          </button>
                          <span className={`px-2.5 py-0.5 rounded-full text-sm font-medium ${getDifficultyColor(trip.difficulty)}`}>
                            {trip.difficulty}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-earth-600 shrink-0">Max Altitude</span>
                        <span className="font-semibold text-earth-800 text-right">{trip.maxAltitude}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-earth-600 shrink-0">Group Size</span>
                        <span className="font-semibold text-earth-800 text-right">{trip.groupSize}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-earth-600 shrink-0">Price</span>
                        <span className="text-base font-bold text-earth-900 text-right">{trip.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Departure Dates */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-earth-800 mb-4">Departure Dates</h3>
                    <div className="space-y-3">
                      {trip.departureDates.map((date, index) => (
                        <div key={index} className={`flex items-center p-3 rounded-lg ${date.includes('HAC-PwD') ? 'bg-adventure-100 border-2 border-adventure-300' : 'bg-earth-50'}`}>
                          <div className="flex items-center space-x-2">
                            {date.includes('HAC-PwD') && <span className="text-adventure-600">⭐</span>}
                            <span className={date.includes('HAC-PwD') ? 'text-adventure-800 font-semibold' : 'text-earth-700'}>{date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-gradient-to-br from-primary-50 to-adventure-50 rounded-2xl p-6 border border-primary-200">
                    <h3 className="text-lg font-bold text-primary-800 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <button
                        onClick={() => setActiveTab('assessment')}
                        className="w-full bg-white text-primary-700 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-300 flex items-center justify-center space-x-2"
                      >
                        <TrendingUp className="h-4 w-4" />
                        <span>Take Trip Assessment</span>
                      </button>
                      <button
                        onClick={() => setActiveTab(trip.id === '3' || trip.id === '7' ? 'campPacking' : 'packing')}
                        className="w-full bg-white text-adventure-700 py-3 rounded-lg font-semibold hover:bg-adventure-50 transition-colors duration-300 flex items-center justify-center space-x-2"
                      >
                        <CheckCircle className="h-4 w-4" />
                        <span>Packing {trip.id === '3' || trip.id === '7' ? 'List' : 'Checklist'}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('weather')}
                        className="w-full bg-white text-earth-700 py-3 rounded-lg font-semibold hover:bg-earth-50 transition-colors duration-300 flex items-center justify-center space-x-2"
                      >
                        <Mountain className="h-4 w-4" />
                        <span>Weather Guide</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-earth-800 mb-8 flex items-center space-x-2">
                  <Camera className="h-8 w-8 text-adventure-500" />
                  <span>Photo Gallery</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryImages.map((image: { src: string; alt: string; title: string }, index: number) => (
                    <div
                      key={index}
                      className="relative h-48 md:h-56 rounded-lg overflow-hidden group cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <Expand className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Itinerary Tab */}
          {activeTab === 'itinerary' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {trip.id === '1' && (
                <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-earth-800 mb-6">Trek Route Map</h2>
                  <div className="w-full rounded-lg overflow-hidden border border-earth-200">
                    <iframe
                      width="100%"
                      height="600"
                      frameBorder="0"
                      src="https://fatmap.com/routeid/2838885/dayara-bugyal-trek?fmid=em"
                      title="Dayara Bugyal Trek Route Map"
                      className="w-full"
                    ></iframe>
                  </div>
                </div>
              )}
              <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-earth-800">Day-by-Day Itinerary</h2>
                  <a
                    href="/documents/trek-preparation.pdf"
                    download="trek-preparation.pdf"
                    className="inline-flex items-center justify-center space-x-2 bg-adventure-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-adventure-600 transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download Trek Preparation Guide</span>
                  </a>
                </div>
                <p className="text-sm text-earth-500 italic mb-8 border-l-4 border-warning-400 pl-3">
                  Note: This itinerary is tentative. The final plan will depend on weather conditions, group ability, and inclination.
                </p>
              <div className="space-y-6">
                {trip.itinerary.map((day, index) => (
                  <div key={index} className="border-l-4 border-adventure-500 pl-6 pb-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-warning-400 text-earth-900 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {day.day}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-earth-800 mb-2">{day.title}</h3>
                        <p className="text-earth-600 mb-4 leading-relaxed">{day.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-earth-700">Accommodation:</span>
                            <div className="text-earth-600">{day.accommodation}</div>
                          </div>
                          <div>
                            <span className="font-medium text-earth-700">Altitude:</span>
                            <div className="text-earth-600">{day.altitude}</div>
                          </div>
                          <div>
                            <span className="font-medium text-earth-700">Trek Time:</span>
                            <div className="text-earth-600">{day.trekTime}</div>
                          </div>
                          <div>
                            <span className="font-medium text-earth-700">Difficulty:</span>
                            <div className={`inline-block px-2 py-1 rounded-full text-xs ${getDifficultyColor(day.difficulty)}`}>
                              {day.difficulty}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </motion.div>
          )}

          {/* Trip Assessment Tab */}
          {activeTab === 'assessment' && (
            <TripAssessment
              tripId={trip.id}
              tripName={trip.title}
              difficulty={trip.difficulty}
              duration={trip.duration}
              maxAltitude={trip.maxAltitude}
              activities={trip.highlights}
            />
          )}

          {/* Weather Tab */}
          {activeTab === 'weather' && (
            <WeatherClimate
              destination={trip.location}
              altitude={trip.maxAltitude}
              season="Summer"
            />
          )}

          {/* Packing Tools Tab */}
          {activeTab === 'packing' && (
            <PackingTools
              tripId={trip.id}
              tripName={trip.title}
              destination={trip.location}
              season="Summer"
              activity={trip.category}
              difficulty={trip.difficulty}
              duration={trip.duration}
            />
          )}

          {/* Camp Packing List Tab */}
          {activeTab === 'campPacking' && (trip.id === '3' || trip.id === '7') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-earth-800 mb-8">Packing List</h2>
              <p className="text-earth-600 mb-8">
                Here's everything you need to pack for your camp adventure. Check off items as you pack to ensure you don't forget anything!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { num: '01', item: 'Woollens / thermal undergarments' },
                  { num: '02', item: 'Wind/rain proof jacket' },
                  { num: '03', item: 'GOOD sandals - something which will last the trip. Or, spare sneakers/flip flops will be handy' },
                  { num: '04', item: 'Socks' },
                  { num: '05', item: 'Head lamp - important' },
                  { num: '06', item: 'Sun Shade / Hat' },
                  { num: '07', item: 'Sunscreen / Sun block with SPF 70 and above' },
                  { num: '08', item: 'Vaseline / Lip Salve' },
                  { num: '09', item: 'Insect Repellent' },
                  { num: '10', item: 'Personal Toiletries - towels/soap etc.' },
                  { num: '11', item: 'Long trousers / long shirts / t-shirts etc.' },
                  { num: '12', item: 'Good pair of shorts, quick dry clothes for raft' },
                  { num: '13', item: 'Swim suit for ladies or a bikini top and bottom is great for wearing under a quick drying T-shirt' },
                  { num: '14', item: 'Alcohol/cigarettes are not available at camp' },
                  { num: '15', item: 'Sunglasses with eyeglass retainers' },
                  { num: '16', item: 'Power bank 20000mAh for charging cell phones or car charger' },
                  { num: '17', item: 'If you want to work, laptop DC-AC car charger' },
                  { num: '18', item: 'Only Jio/Airtel work at Camp' }
                ].map((packItem, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-earth-50 rounded-xl hover:bg-adventure-50 transition-colors duration-300"
                  >
                    <div className="bg-warning-400 text-earth-900 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {packItem.num}
                    </div>
                    <span className="text-earth-700 leading-relaxed">{packItem.item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-warning-50 border border-warning-200 rounded-xl">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-warning-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-warning-800 mb-2">Important Note</h3>
                    <p className="text-warning-700 text-sm">
                      Pack light but smart! The camp provides basic amenities, but having these essentials will make your experience more comfortable. Weather can change quickly in the mountains, so layering is key.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}


          {/* Inclusions Tab */}
          {activeTab === 'inclusions' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Inclusions */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-success-800 mb-6 flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6" />
                  <span>What's Included</span>
                </h2>
                <div className="space-y-3">
                  {trip.inclusions.map((inclusion, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success-600 mt-0.5 flex-shrink-0" />
                      <span className="text-earth-700">{inclusion}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exclusions */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-error-800 mb-6 flex items-center space-x-2">
                  <XCircle className="h-6 w-6" />
                  <span>Not Included</span>
                </h2>
                <div className="space-y-3">
                  {trip.exclusions.map((exclusion, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <XCircle className="h-5 w-5 text-error-600 mt-0.5 flex-shrink-0" />
                      <span className="text-earth-700">{exclusion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* FAQs Tab */}
          {activeTab === 'faqs' && trip.id === '3' && trip.faqs && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-earth-800 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {trip.faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-earth-800 mb-3">{faq.question}</h3>
                    <p className="text-earth-600 leading-relaxed whitespace-pre-line">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}


          {/* Booking Tab */}
          {activeTab === 'booking' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Booking Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-bold text-earth-800 mb-6">Book This Adventure</h2>
                  
                  {/* Intent selector */}
                  {!bookingIntent && (
                    <div className="space-y-4">
                      <p className="text-earth-600">How would you like to proceed?</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <button
                          onClick={() => setBookingIntent('enquiry')}
                          className="flex flex-col items-center text-center border-2 border-primary-200 hover:border-primary-500 rounded-xl p-6 transition-all duration-300 hover:bg-primary-50 group"
                        >
                          <Mail className="h-8 w-8 text-primary-500 mb-3 group-hover:scale-110 transition-transform" />
                          <span className="font-bold text-earth-800 text-lg mb-1">Submit Enquiry</span>
                          <span className="text-sm text-earth-500">Fill the form and our team will get back to you</span>
                        </button>
                        <button
                          onClick={() => setBookingIntent('payment')}
                          className="flex flex-col items-center text-center border-2 border-warning-300 hover:border-warning-500 rounded-xl p-6 transition-all duration-300 hover:bg-warning-50 group"
                        >
                          <CreditCard className="h-8 w-8 text-warning-600 mb-3 group-hover:scale-110 transition-transform" />
                          <span className="font-bold text-earth-800 text-lg mb-1">Make Payment</span>
                          <span className="text-sm text-earth-500">Calculate total and pay securely online</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Enquiry Form */}
                  {bookingIntent === 'enquiry' && (
                    <form onSubmit={handleBookingSubmit} className="space-y-6">
                      <button type="button" onClick={() => setBookingIntent(null)} className="text-sm text-earth-500 hover:text-earth-700 flex items-center space-x-1 focus:outline-none">
                        <span>← Back</span>
                      </button>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-earth-700 mb-2">Full Name *</label>
                          <input type="text" id="name" name="name" required value={bookingForm.name} onChange={handleBookingChange}
                            className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300"
                            placeholder="Your full name" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-2">Email Address *</label>
                          <input type="email" id="email" name="email" required value={bookingForm.email} onChange={handleBookingChange}
                            className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300"
                            placeholder="your.email@example.com" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-earth-700 mb-2">Phone Number</label>
                          <input type="tel" id="phone" name="phone" value={bookingForm.phone} onChange={handleBookingChange}
                            className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300"
                            placeholder="+91 98765 43210" />
                        </div>
                        <div>
                          <label htmlFor="departureDate" className="block text-sm font-medium text-earth-700 mb-2">Preferred Departure Date</label>
                          <select id="departureDate" name="departureDate" value={bookingForm.departureDate} onChange={handleBookingChange}
                            className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300">
                            <option value="">Select departure date</option>
                            {trip.departureDates.map((date, index) => (
                              <option key={index} value={date}>{date}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="groupSize" className="block text-sm font-medium text-earth-700 mb-2">Number of Travelers</label>
                        <input type="number" id="groupSize" name="groupSize" min="1" max="60" value={bookingForm.groupSize} onChange={handleBookingChange}
                          className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300"
                          placeholder="e.g. 2" />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-earth-700 mb-2">Additional Requirements or Questions</label>
                        <textarea id="message" name="message" rows={4} value={bookingForm.message} onChange={handleBookingChange}
                          className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300 resize-none"
                          placeholder="Tell us about any dietary requirements, medical conditions, or special requests..."></textarea>
                      </div>
                      {bookingSubmitStatus === 'success' && (
                        <div className="bg-success-100 border border-success-400 text-success-800 px-4 py-3 rounded-lg">
                          Thank you! Your booking inquiry has been sent. We'll contact you soon to confirm details.
                        </div>
                      )}
                      {bookingSubmitStatus === 'error' && (
                        <div className="bg-error-100 border border-error-400 text-error-800 px-4 py-3 rounded-lg">
                          Sorry, there was an error. Please try again or email us at <a href="mailto:admin@treksforall.in" className="text-adventure-600 hover:text-adventure-700 underline">admin@treksforall.in</a>
                        </div>
                      )}
                      <button type="submit" disabled={isSubmittingBooking}
                        className="w-full bg-primary-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
                        <Send className="h-5 w-5" />
                        <span>{isSubmittingBooking ? 'Sending...' : 'Submit Enquiry'}</span>
                      </button>
                    </form>
                  )}

                  {/* Payment Calculator */}
                  {bookingIntent === 'payment' && (() => {
                    const persons = Math.max(1, parseInt(bookingForm.groupSize) || 1);
                    const basePerPerson = parseBasePrice(trip.price);
                    const subtotal = basePerPerson * persons;
                    const gstApplies = priceHasGst(trip.price);
                    const gstAmount = gstApplies ? Math.round(subtotal * 0.05) : 0;
                    const total = subtotal + gstAmount;
                    const formattedTotal = '₹' + total.toLocaleString('en-IN');
                    return (
                      <div className="space-y-6">
                        <button type="button" onClick={() => setBookingIntent(null)} className="text-sm text-earth-500 hover:text-earth-700 flex items-center space-x-1 focus:outline-none">
                          <span>← Back</span>
                        </button>
                        <div>
                          <label className="block text-sm font-medium text-earth-700 mb-2">Number of Persons</label>
                          <input type="number" min="1" max="60" value={bookingForm.groupSize}
                            onChange={(e) => setBookingForm({ ...bookingForm, groupSize: e.target.value })}
                            className="w-32 px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300" />
                        </div>
                        <div className="bg-earth-50 rounded-xl p-5 space-y-3 border border-earth-200">
                          <div className="flex justify-between text-earth-700">
                            <span>Price per person</span>
                            <span>₹{basePerPerson.toLocaleString('en-IN')}</span>
                          </div>
                          <div className="flex justify-between text-earth-700">
                            <span>× {persons} person{persons > 1 ? 's' : ''}</span>
                            <span>₹{subtotal.toLocaleString('en-IN')}</span>
                          </div>
                          {gstApplies && (
                            <div className="flex justify-between text-earth-700">
                              <span>GST (5%)</span>
                              <span>₹{gstAmount.toLocaleString('en-IN')}</span>
                            </div>
                          )}
                          <div className="border-t border-earth-300 pt-3 flex justify-between font-bold text-lg text-earth-800">
                            <span>Total Amount</span>
                            <span className="text-adventure-600">{formattedTotal}</span>
                          </div>
                        </div>
                        <a
                          href="https://payments.aquaterra.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-warning-400 text-earth-900 py-4 rounded-lg font-bold text-lg hover:bg-warning-500 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                        >
                          <CreditCard className="h-5 w-5" />
                          <span>Pay {formattedTotal} via Aquaterra</span>
                        </a>
                        <p className="text-xs text-earth-500 text-center">You will be redirected to Aquaterra's secure payment gateway</p>
                      </div>
                    );
                  })()}
                </div>
              </div>

              {/* Contact Info Sidebar */}
              <div className="space-y-6">
                <div className="bg-primary-50 rounded-2xl p-6 border border-primary-200">
                  <h3 className="text-lg font-bold text-primary-800 mb-4">Need Help Booking?</h3>
                  <p className="text-primary-700 mb-4">
                    Our adventure specialists are here to help you plan the perfect trip.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary-600" />
                      <div>
                        <div className="font-semibold text-primary-800">+91 96431 84862</div>
                        <div className="text-sm text-primary-600">Mon-Fri 9AM-6PM</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary-600" />
                      <div>
                        <div className="font-semibold text-primary-800"><a href="mailto:admin@treksforall.in" className="text-adventure-600 hover:text-adventure-700 underline">admin@treksforall.in</a></div>
                        <div className="text-sm text-primary-600">24-hour response</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-warning-50 rounded-2xl p-6 border border-warning-200">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-6 w-6 text-warning-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-warning-800 mb-2">Important Notes</h3>
                      <ul className="text-warning-700 text-sm space-y-1">
                        <li>• Booking confirmation requires 30% advance payment</li>
                        <li>• Trip dates subject to weather conditions</li>
                        <li>• Cancellation policy applies</li>
                        <li>• Travel insurance recommended</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Photo Lightbox */}
      <Lightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        isOpen={showLightbox}
        onClose={() => setShowLightbox(false)}
        onNavigate={setLightboxIndex}
      />

      {/* Difficulty Help Modal */}
      <DifficultyHelpModal
        isOpen={showDifficultyHelp}
        onClose={() => setShowDifficultyHelp(false)}
        tripType="all"
      />

      {/* Video Modal - Only for Dayara Bugyal */}
      {trip.id === '1' && (
        <AnimatePresence>
          {isVideoPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
              onClick={() => setIsVideoPlaying(false)}
              style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-6xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsVideoPlaying(false)}
                  className="absolute -top-14 right-0 text-white hover:text-gray-300 transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-white rounded-full bg-black/70 hover:bg-black/90"
                  aria-label="Close video"
                  type="button"
                >
                  <X className="h-8 w-8" />
                </button>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/fuYWq4LvEv4?autoplay=1"
                    title="Dayara Bugyal Trek Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      <VSheshRecognitionsSection />
    </div>
  );
};

export default TripDetailPage;
