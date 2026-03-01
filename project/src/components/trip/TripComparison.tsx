import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, GitCompare as Compare, Calendar, Users, Mountain, Star, Clock, MapPin, Zap, Check, ExternalLink, RefreshCw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Trip {
  id: string;
  title: string;
  location: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Advanced';
  price: string;
  rating: number;
  reviews: number;
  image: string;
  fitnessLevel: 'Low' | 'Moderate' | 'High' | 'Very High';
  maxAltitude: string;
  groupSize: string;
  bestSeason: string;
  highlights: string[];
  description: string;
}

interface TripComparisonProps {
  availableTrips: Trip[];
  maxComparisons?: number;
}

const TripComparison: React.FC<TripComparisonProps> = ({ 
  availableTrips, 
  maxComparisons = 3 
}) => {
  const [selectedTrips, setSelectedTrips] = useState<Trip[]>([]);
  const [isComparing, setIsComparing] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const addTripToComparison = (trip: Trip) => {
    if (selectedTrips.length < maxComparisons && !selectedTrips.find(t => t.id === trip.id)) {
      setSelectedTrips([...selectedTrips, trip]);
    }
    setShowAddModal(false);
  };

  const removeTripFromComparison = (tripId: string) => {
    setSelectedTrips(selectedTrips.filter(trip => trip.id !== tripId));
  };

  const clearAllComparisons = () => {
    setSelectedTrips([]);
    setIsComparing(false);
  };

  const startComparison = () => {
    if (selectedTrips.length >= 2) {
      setIsComparing(true);
    }
  };

  const getDifficultyLevel = (difficulty: string): number => {
    switch (difficulty) {
      case 'Easy': return 1;
      case 'Moderate': return 2;
      case 'Challenging': return 3;
      case 'Advanced': return 4;
      default: return 2;
    }
  };

  const getFitnessLevel = (fitness: string): number => {
    switch (fitness) {
      case 'Low': return 1;
      case 'Moderate': return 2;
      case 'High': return 3;
      case 'Very High': return 4;
      default: return 2;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-success-600 bg-success-100';
      case 'Moderate': return 'text-adventure-600 bg-adventure-100';
      case 'Challenging': return 'text-warning-600 bg-warning-100';
      case 'Advanced': return 'text-error-600 bg-error-100';
      default: return 'text-earth-600 bg-earth-100';
    }
  };

  const getFitnessColor = (fitness: string) => {
    switch (fitness) {
      case 'Low': return 'text-success-600 bg-success-100';
      case 'Moderate': return 'text-adventure-600 bg-blue-100';
      case 'High': return 'text-warning-600 bg-warning-100';
      case 'Very High': return 'text-error-600 bg-error-100';
      default: return 'text-earth-600 bg-earth-100';
    }
  };

  const parsePrice = (price: string): number => {
    return parseInt(price.replace(/[^0-9]/g, ''));
  };

  const findBestValue = (): string | null => {
    if (selectedTrips.length < 2) return null;
    
    const tripValues = selectedTrips.map(trip => ({
      id: trip.id,
      value: trip.rating / (parsePrice(trip.price) / 10000)
    }));
    
    const bestValue = tripValues.reduce((best, current) => 
      current.value > best.value ? current : best
    );
    
    return bestValue.id;
  };

  const availableTripsForAdd = availableTrips.filter(
    trip => !selectedTrips.find(selected => selected.id === trip.id)
  );

  return (
    <div className="bg-white">
      {/* Comparison Tool Header */}
      <div className="sticky top-20 z-40 bg-white border-b border-earth-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Compare className="h-6 w-6 text-primary-600" />
              <h2 className="text-xl font-bold text-earth-800">
                Trip Comparison Tool
              </h2>
              <span className="text-sm text-earth-500">
                ({selectedTrips.length}/{maxComparisons} selected)
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-3">
              {selectedTrips.length > 0 && (
                <button
                  onClick={clearAllComparisons}
                  className="text-error-600 hover:text-error-700 text-sm font-medium flex items-center space-x-1"
                >
                  <RefreshCw className="h-4 w-4" />
                  <span>Clear All</span>
                </button>
              )}
              
              {selectedTrips.length < maxComparisons && (
                <button
                  onClick={() => setShowAddModal(true)}
                  className="bg-warning-400 text-earth-900 px-4 py-2 rounded-md hover:bg-warning-500 transition-colors duration-300 flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Trip</span>
                </button>
              )}
              
              {selectedTrips.length >= 2 && !isComparing && (
                <button
                  onClick={startComparison}
                  className="bg-warning-400 text-earth-900 px-6 py-2 rounded-md hover:bg-warning-500 transition-colors duration-300 font-semibold"
                >
                  Compare Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Trip Selection Area */}
      {selectedTrips.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"
        >
          <Compare className="h-16 w-16 text-earth-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-earth-800 mb-4">
            Compare Your Adventures
          </h3>
          <p className="text-earth-600 max-w-2xl mx-auto mb-8">
            Select 2-3 trips to compare their difficulty, duration, price, and fitness requirements. 
            Make an informed decision for your perfect adventure.
          </p>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-warning-400 text-earth-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-warning-500 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-3"
          >
            <Plus className="h-6 w-6" />
            <span>Select Trips to Compare</span>
          </button>
        </motion.div>
      )}

      {/* Selected Trips Preview */}
      {selectedTrips.length > 0 && !isComparing && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-20 md:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedTrips.map((trip, index) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-earth-50 rounded-xl p-6 border border-earth-200 relative group"
              >
                <button
                  onClick={() => removeTripFromComparison(trip.id)}
                  className="absolute top-2 right-2 bg-error-500 text-white rounded-full p-1 hover:bg-error-600 transition-colors duration-300 opacity-0 group-hover:opacity-100"
                >
                  <X className="h-4 w-4" />
                </button>

                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                
                <h4 className="font-bold text-earth-800 mb-2">{trip.title}</h4>
                <p className="text-earth-600 text-sm mb-4">{trip.location}</p>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-earth-500">Duration:</span>
                    <div className="font-semibold text-earth-800">{trip.duration}</div>
                  </div>
                  <div>
                    <span className="text-earth-500">Price:</span>
                    <div className="font-semibold text-adventure-600">{trip.price}</div>
                  </div>
                  <div>
                    <span className="text-earth-500">Difficulty:</span>
                    <div className={`inline-block px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(trip.difficulty)}`}>
                      {trip.difficulty}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Add More Placeholder */}
            {selectedTrips.length < maxComparisons && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setShowAddModal(true)}
                className="bg-white border-2 border-dashed border-earth-300 rounded-xl p-6 hover:border-primary-400 hover:bg-primary-50 transition-all duration-300 flex flex-col items-center justify-center min-h-[280px] group"
              >
                <Plus className="h-12 w-12 text-earth-400 group-hover:text-primary-500 mb-2" />
                <span className="text-earth-600 group-hover:text-primary-600 font-medium">
                  Add Trip to Compare
                </span>
              </motion.button>
            )}
          </div>
        
        {/* Mobile Controls */}
        <div className="md:hidden mt-4 flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            {selectedTrips.length > 0 && (
              <button
                onClick={clearAllComparisons}
                className="flex-1 border border-error-300 text-error-600 px-4 py-2 rounded-md hover:bg-error-50 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <RefreshCw className="h-4 w-4" />
                <span>Clear All</span>
              </button>
            )}
            
            {selectedTrips.length < maxComparisons && (
              <button
                onClick={() => setShowAddModal(true)}
                className="flex-1 bg-warning-400 text-earth-900 px-4 py-2 rounded-md hover:bg-warning-500 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Add Trip</span>
              </button>
            )}
          </div>
          
          {selectedTrips.length >= 2 && !isComparing && (
            <button
              onClick={startComparison}
              className="w-full bg-warning-400 text-earth-900 px-6 py-3 rounded-md hover:bg-warning-500 transition-colors duration-300 font-bold text-lg"
            >
              Compare {selectedTrips.length} Trips Now
            </button>
          )}
        </div>
        </div>
      )}

      {/* Fixed Mobile Compare Button */}
      <AnimatePresence>
        {selectedTrips.length >= 2 && !isComparing && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
          >
            <button
              onClick={startComparison}
              className="w-full bg-warning-400 text-earth-900 px-6 py-4 rounded-xl font-bold text-lg hover:bg-warning-500 transition-all duration-300 shadow-2xl border border-adventure-400 backdrop-blur-sm flex items-center justify-center space-x-3"
            >
              <Compare className="h-6 w-6" />
              <span>Compare {selectedTrips.length} Trips</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detailed Comparison View */}
      {isComparing && selectedTrips.length >= 2 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          {/* Best Value Indicator */}
          {findBestValue() && (
            <div className="mb-8 text-center">
              <div className="inline-flex items-center space-x-2 bg-success-100 text-success-800 px-4 py-2 rounded-full">
                <Zap className="h-4 w-4" />
                <span className="font-semibold">
                  Best Value: {selectedTrips.find(t => t.id === findBestValue())?.title}
                </span>
              </div>
            </div>
          )}

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-earth-50">
                  <tr>
                    <th className="text-left p-6 font-semibold text-earth-800">
                      Comparison Criteria
                    </th>
                    {selectedTrips.map(trip => (
                      <th key={trip.id} className="text-center p-6 min-w-[250px]">
                        <div className="space-y-3">
                          <img
                            src={trip.image}
                            alt={trip.title}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <div>
                            <h4 className="font-bold text-earth-800">{trip.title}</h4>
                            <p className="text-earth-600 text-sm">{trip.location}</p>
                          </div>
                          {findBestValue() === trip.id && (
                            <div className="bg-success-100 text-success-800 px-2 py-1 rounded-full text-xs font-semibold">
                              🏆 Best Value
                            </div>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Duration Row */}
                  <tr className="border-b border-earth-100">
                    <td className="p-6 font-semibold text-earth-800 flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-primary-600" />
                      <span>Duration</span>
                    </td>
                    {selectedTrips.map(trip => (
                      <td key={trip.id} className="p-6 text-center">
                        <div className="text-lg font-bold text-earth-800">{trip.duration}</div>
                      </td>
                    ))}
                  </tr>

                  {/* Difficulty Row */}
                  <tr className="border-b border-earth-100 bg-earth-25">
                    <td className="p-6 font-semibold text-earth-800 flex items-center space-x-2">
                      <Mountain className="h-5 w-5 text-adventure-600" />
                      <span>Difficulty Level</span>
                    </td>
                    {selectedTrips.map(trip => (
                      <td key={trip.id} className="p-6 text-center">
                        <span className={`inline-block px-3 py-2 rounded-full font-semibold ${getDifficultyColor(trip.difficulty)}`}>
                          {trip.difficulty}
                        </span>
                        <div className="mt-2 flex justify-center">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 mx-1 rounded-full ${
                                i < getDifficultyLevel(trip.difficulty) 
                                  ? 'bg-adventure-500' 
                                  : 'bg-earth-200'
                              }`}
                            />
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Price Row */}
                  <tr className="border-b border-earth-100">
                    <td className="p-6 font-semibold text-earth-800">
                      Price (per person)
                    </td>
                    {selectedTrips.map(trip => (
                      <td key={trip.id} className="p-6 text-center">
                        <div className="text-2xl font-bold text-adventure-600">{trip.price}</div>
                      </td>
                    ))}
                  </tr>

                  {/* Fitness Level Row */}
                  <tr className="border-b border-earth-100 bg-earth-25">
                    <td className="p-6 font-semibold text-earth-800 flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-success-600" />
                      <span>Required Fitness</span>
                    </td>
                    {selectedTrips.map(trip => (
                      <td key={trip.id} className="p-6 text-center">
                        <span className={`inline-block px-3 py-2 rounded-full font-semibold ${getFitnessColor(trip.fitnessLevel)}`}>
                          {trip.fitnessLevel}
                        </span>
                        <div className="mt-2 flex justify-center">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 mx-1 rounded-full ${
                                i < getFitnessLevel(trip.fitnessLevel) 
                                  ? 'bg-success-500' 
                                  : 'bg-earth-200'
                              }`}
                            />
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Rating Row */}

                  {/* Additional Details Row */}
                  <tr className="border-b border-earth-100 bg-earth-25">
                    <td className="p-6 font-semibold text-earth-800">
                      Trip Details
                    </td>
                    {selectedTrips.map(trip => (
                      <td key={trip.id} className="p-6">
                        <div className="space-y-2 text-sm">
                          <div><strong>Max Altitude:</strong> {trip.maxAltitude}</div>
                          <div><strong>Group Size:</strong> {trip.groupSize}</div>
                          <div><strong>Best Season:</strong> {trip.bestSeason}</div>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Highlights Row */}
                  <tr className="border-b border-earth-100">
                    <td className="p-6 font-semibold text-earth-800">
                      Key Highlights
                    </td>
                    {selectedTrips.map(trip => (
                      <td key={trip.id} className="p-6">
                        <ul className="space-y-1">
                          {trip.highlights.slice(0, 3).map((highlight, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm">
                              <Check className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* Action Row */}
                  <tr className="bg-earth-50">
                    <td className="p-6 font-semibold text-earth-800">
                      Actions
                    </td>
                    {selectedTrips.map(trip => (
                      <td key={trip.id} className="p-6 text-center space-y-3">
                        <Link
                          to={`/trip/${trip.id}`}
                          className="block bg-warning-400 text-earth-900 px-4 py-2 rounded-md hover:bg-warning-500 transition-colors duration-300 font-semibold"
                        >
                          View Details
                        </Link>
                        <a
                          href="https://payments.aquaterra.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block border border-adventure-500 text-adventure-600 px-4 py-2 rounded-md hover:bg-adventure-50 transition-colors duration-300 font-semibold"
                        >
                          Book Now
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Comparison Actions */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => setIsComparing(false)}
              className="border border-earth-300 text-earth-700 px-6 py-3 rounded-md hover:bg-earth-50 transition-colors duration-300"
            >
              Edit Selection
            </button>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-warning-400 text-earth-900 px-6 py-3 rounded-md hover:bg-warning-500 transition-colors duration-300 flex items-center space-x-2"
              disabled={selectedTrips.length >= maxComparisons}
            >
              <Plus className="h-4 w-4" />
              <span>Add Another Trip</span>
            </button>
          </div>
        </motion.div>
      )}

      {/* Add Trip Modal */}
      <AnimatePresence>
        {showAddModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowAddModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-earth-200">
                <h3 className="text-xl font-bold text-earth-800">Add Trip to Comparison</h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-earth-600 hover:text-earth-800"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {availableTripsForAdd.map((trip) => (
                    <div
                      key={trip.id}
                      className="border border-earth-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                      onClick={() => addTripToComparison(trip)}
                    >
                      <img
                        src={trip.image}
                        alt={trip.title}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h4 className="font-bold text-earth-800 mb-2 group-hover:text-primary-600">
                        {trip.title}
                      </h4>
                      <p className="text-earth-600 text-sm mb-3">{trip.location}</p>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                        <div>
                          <span className="text-earth-500">Duration:</span>
                          <div className="font-semibold">{trip.duration}</div>
                        </div>
                        <div>
                          <span className="text-earth-500">Difficulty:</span>
                          <div className={`inline-block px-2 py-1 rounded text-xs ${getDifficultyColor(trip.difficulty)}`}>
                            {trip.difficulty}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <span className="font-semibold text-earth-800">{trip.difficulty}</span>
                        </div>
                        <div className="font-bold text-adventure-600">{trip.price}</div>
                      </div>
                      
                      <button className="w-full mt-3 bg-warning-400 text-earth-900 py-2 rounded-md hover:bg-warning-500 transition-colors duration-300 opacity-0 group-hover:opacity-100">
                        Add to Compare
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TripComparison;