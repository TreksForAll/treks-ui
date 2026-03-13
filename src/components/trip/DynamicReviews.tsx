import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, MapPin, Calendar, ExternalLink, RefreshCw } from 'lucide-react';

interface Review {
  id: string;
  customerName: string;
  location: string;
  tripName: string;
  rating: number;
  quote: string;
  date: string;
  source: 'tripadvisor' | 'google' | 'internal';
  verified: boolean;
  profileImage?: string;
}

interface DynamicReviewsProps {
  tripId: string;
  tripName: string;
}

const DynamicReviews: React.FC<DynamicReviewsProps> = ({ tripId, tripName }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock reviews data - In production, this would come from API
  const mockReviews: Review[] = [
    {
      id: '1',
      customerName: 'Sunitha Kumar',
      location: 'Bangalore, India',
      tripName: 'Dayara Bugyal Trek',
      rating: 5,
      quote: 'Rafting on the Siang was life-changing! The guides were exceptional and the experience unforgettable.',
      date: '2024-12-15',
      source: 'google',
      verified: true,
      profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      id: '2',
      customerName: 'Rajesh Patel',
      location: 'Mumbai, India',
      tripName: 'Dodital Lake Trek',
      rating: 5,
      quote: 'The frozen river trek was absolutely magical. Professional guides and impeccable safety standards.',
      date: '2024-12-10',
      source: 'tripadvisor',
      verified: true,
      profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    {
      id: '3',
      customerName: 'Sarah Mitchell',
      location: 'London, UK',
      tripName: 'Camp Aquaterra',
      rating: 5,
      quote: 'Perfect blend of luxury and adventure. The riverside lodge exceeded all expectations.',
      date: '2024-12-08',
      source: 'google',
      verified: true,
      profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
    },
    {
      id: '4',
      customerName: 'Amit Singh',
      location: 'Delhi, India',
      tripName: 'Dodital Lake Trek',
      rating: 5,
      quote: 'The skeleton lake trek was challenging but incredibly rewarding. Outstanding organization!',
      date: '2024-12-05',
      source: 'internal',
      verified: true
    },
    {
      id: '5',
      customerName: 'Lisa Johnson',
      location: 'Sydney, Australia',
      tripName: 'Camp Aquaterra',
      rating: 5,
      quote: 'Kashmir is truly paradise on earth. The lakes were pristine and the experience divine.',
      date: '2024-12-02',
      source: 'tripadvisor',
      verified: true,
      profileImage: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'
    }
  ];

  // Simulate API call to fetch reviews
  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Filter reviews for current trip or show general reviews
        const filteredReviews = mockReviews.filter(review => 
          review.tripName === tripName || Math.random() > 0.3
        );
        
        setReviews(filteredReviews.slice(0, 6));
      } catch (err) {
        setError('Failed to load reviews. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [tripId, tripName]);

  // Auto-rotate reviews every 4 seconds
  useEffect(() => {
    if (reviews.length === 0) return;

    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Shuffle reviews to simulate new data
    const shuffledReviews = [...mockReviews].sort(() => Math.random() - 0.5);
    setReviews(shuffledReviews.slice(0, 6));
    setCurrentReviewIndex(0);
    setIsRefreshing(false);
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'tripadvisor':
        return '🦉'; // TripAdvisor owl
      case 'google':
        return '🌟'; // Google
      default:
        return '✅'; // Internal/verified
    }
  };

  const getSourceName = (source: string) => {
    switch (source) {
      case 'tripadvisor':
        return 'TripAdvisor';
      case 'google':
        return 'Google Reviews';
      default:
        return 'Verified Customer';
    }
  };

  if (isLoading) {
    return (
      <section className="py-12 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
            <p className="text-earth-600 mt-4">Loading reviews...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <p className="text-error-600 mb-4">{error}</p>
            <button
              onClick={handleRefresh}
              className="bg-warning-400 text-earth-900 px-4 py-2 rounded-md hover:bg-warning-500 transition-colors duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">
              What Our Adventurers Say
            </h2>
            <p className="text-lg text-earth-600">
              Real experiences from fellow adventurers across the globe
            </p>
          </div>
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="bg-white border border-earth-200 px-4 py-2 rounded-lg hover:bg-earth-50 transition-colors duration-300 flex items-center space-x-2"
            aria-label="Refresh reviews"
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>

        {/* Featured Review */}
        <div className="mb-12">
          <AnimatePresence mode="wait">
            {reviews.length > 0 && (
              <motion.div
                key={currentReviewIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
              >
                <div className="flex items-start space-x-6">
                  <Quote className="h-12 w-12 text-adventure-500 flex-shrink-0" />
                  
                  <div className="flex-1">
                    <blockquote className="text-xl md:text-2xl text-earth-800 font-medium leading-relaxed mb-6">
                      "{reviews[currentReviewIndex].quote}"
                    </blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {reviews[currentReviewIndex].profileImage && (
                          <img
                            src={reviews[currentReviewIndex].profileImage}
                            alt={reviews[currentReviewIndex].customerName}
                            className="h-12 w-12 rounded-full object-cover border-2 border-adventure-200"
                          />
                        )}
                        <div>
                          <div className="font-bold text-earth-800 text-lg">
                            {reviews[currentReviewIndex].customerName}
                          </div>
                          <div className="flex items-center space-x-2 text-earth-600">
                            <MapPin className="h-4 w-4" />
                            <span>{reviews[currentReviewIndex].location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(reviews[currentReviewIndex].rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                          ))}
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-earth-600">
                          <span>{getSourceIcon(reviews[currentReviewIndex].source)}</span>
                          <span>{getSourceName(reviews[currentReviewIndex].source)}</span>
                          {reviews[currentReviewIndex].verified && (
                            <span className="text-success-600 font-medium">✓ Verified</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Review Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-left">
            <div className="text-3xl font-bold text-adventure-600 mb-2">4.9</div>
            <div className="flex justify-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
              ))}
            </div>
            <p className="text-earth-600">Average Rating</p>
          </div>
          
          <div className="text-left">
            <div className="text-3xl font-bold text-adventure-600 mb-2">2,340+</div>
            <p className="text-earth-600">Total Reviews</p>
          </div>
          
          <div className="text-left">
            <div className="text-3xl font-bold text-adventure-600 mb-2">98%</div>
            <p className="text-earth-600">Would Recommend</p>
          </div>
        </div>

        {/* External Links */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="#"
            className="flex items-center space-x-2 text-earth-600 hover:text-adventure-600 transition-colors duration-300"
            aria-label="View TripAdvisor reviews"
          >
            <span>🦉</span>
            <span>TripAdvisor Reviews</span>
            <ExternalLink className="h-4 w-4" />
          </a>
          
          <a
            href="#"
            className="flex items-center space-x-2 text-earth-600 hover:text-adventure-600 transition-colors duration-300"
            aria-label="View Google reviews"
          >
            <span>🌟</span>
            <span>Google Reviews</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DynamicReviews;
