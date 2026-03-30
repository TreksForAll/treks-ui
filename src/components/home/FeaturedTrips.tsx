import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Users, MapPin, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import { getDifficultyIcon } from '../../utils/difficultyUtils';
import SectionTitle from '../ui/SectionTitle';
import { trips } from '../../data/trips';

const FeaturedTrips = () => {
  const dayaraTrek = trips.find(trip => trip.id === '1');
  const campBagi = trips.find(trip => trip.id === '7');

  const featuredTrips = [
    {
      id: '1',
      title: 'Dayara Bugyal Trek',
      location: dayaraTrek?.location || 'Garhwal, Uttarakhand',
      duration: '4 Days / 3 Nights',
      difficulty: dayaraTrek?.difficulty || 'Moderate',
      price: dayaraTrek?.price || '₹27,500',
      groupSize: dayaraTrek?.groupSize || 'Max 18',
      departureDate: dayaraTrek?.departureDates?.[0],
      departureDates: dayaraTrek?.departureDates,
      image: '/dayara/Dayara-Cover.webp',
      description: 'Dayara, often called India\'s most beautiful meadow, is a 20 km trek in Uttarakhand offering sweeping views of Thalaysagar, Bandarpoonch, Kedarnath, and more. The trek has been successfully completed by participants with visual, locomotor, and hearing disabilities...',
      accessibility: 'Buddy support system available'
    },
    {
      id: '7',
      title: 'Camp Bagi \n (Tons River)',
      subtitle: '',
      location: campBagi?.location || 'Tons Valley, Uttarakhand',
      duration: '4 Days / 3 Nights',
      difficulty: campBagi?.difficulty || 'Easy',
      price: campBagi?.price || '₹15,000 + 5% GST',
      groupSize: campBagi?.groupSize || 'Max 20',
      departureDates: campBagi?.departureDates,
      image: '/camping/camp-bagi-1.webp',
      description: 'Real camping on a beachfront amidst lush Himalayan forests on the banks of the Tons River. Combine river rafting, hikes, and overnight treks — only 410 km from Delhi. A perfect inclusive family getaway at 3,500 ft in the Jaunsar Bawar region of Uttarakhand.',
      activities: 'River Rafting | Hiking | Camping | Nature Walks',
      accessibility: 'Inclusive Experience'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <SectionTitle
            title="UPCOMING"
            subtitle="ADVENTURES"
            description="Join these exciting inclusive adventures departing soon with limited spots available."
            align="left"
          />
        </motion.div>

        <div className="space-y-8">
          {featuredTrips.map((trip, index) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-[#d1ebed]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                  {/* Large Image Section */}
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-auto overflow-hidden group">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      width="1440"
                      height="1029"
                      loading="eager"
                      fetchPriority="high"
                    />

                    {/* Dark Gradient Overlay for Text Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

                    {/* Title Overlay on Image */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-left px-6">
                      <div className="max-w-5xl w-full">
                        <div className="border-l-[5px] border-[#e0aa04] pl-4 mb-4">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-white uppercase tracking-[0.3em] mb-2 drop-shadow-2xl" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.9)', fontWeight: 400 }}>
                          {trip.title}
                        </h3>
                        {trip.subtitle && (
                          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white uppercase tracking-tight leading-none drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,1)', fontWeight: 700 }}>
                            {trip.subtitle}
                          </p>
                        )}
                        </div>
                      </div>
                    </div>

                    {/* Date Badge Overlay */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-[#e0aa04] text-white px-5 py-2 rounded-xl font-semibold text-base shadow-lg">
                        {trip.departureDate || trip.departureDates?.[0]}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      {/* Location */}
                      <div className="flex items-center text-[#377d87] mb-6">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="font-medium">{trip.location}</span>
                      </div>

                      {/* Activities for camps */}
                      {trip.activities && (
                        <p className="text-earth-700 mb-4 font-medium">
                          {trip.activities}
                        </p>
                      )}

                      {/* Description */}
                      <p className="text-earth-600 leading-relaxed mb-6">
                        {trip.description}
                      </p>

                      {/* Trip Details Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center space-x-2 text-earth-700">
                          <Clock className="h-5 w-5 text-[#e0aa04]" />
                          <div>
                            <p className="text-xs text-[#377d87]">Duration</p>
                            <p className="font-semibold text-sm">{trip.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-earth-700">
                          <Users className="h-5 w-5 text-[#e0aa04]" />
                          <div>
                            <p className="text-xs text-[#377d87]">Group Size</p>
                            <p className="font-semibold text-sm">{trip.groupSize}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-earth-700">
                          <TrendingUp className="h-5 w-5 text-[#e0aa04]" />
                          <div>
                            <p className="text-xs text-[#377d87]">Difficulty</p>
                            <p className="font-semibold text-sm">{trip.difficulty}</p>
                          </div>
                        </div>
                      </div>

                      {/* Additional Dates for Camps */}
                      {trip.departureDates && trip.departureDates.length > 1 && (
                        <div className="mb-6">
                          <p className="text-sm font-semibold text-earth-700 mb-2">More Dates:</p>
                          <div className="flex flex-wrap gap-2">
                            {trip.departureDates.slice(1).map((date, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-earth-100 text-earth-700 px-3 py-1 rounded-full"
                              >
                                {date}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-earth-200">
                      <div>
                        <p className="text-sm text-[#377d87] mb-1">Starting from</p>
                        <p className="text-2xl sm:text-3xl font-bold text-earth-900">
                          {trip.price}
                        </p>
                        <p className="text-xs text-[#377d87] mt-1">(all inclusive)</p>
                      </div>
                      <Link
                        to={`/trip/${trip.id}`}
                        className="bg-[#e0aa04] text-white px-5 sm:px-8 py-3 rounded-xl font-bold hover:bg-[#d9a513] transition-all duration-300 inline-flex items-center space-x-2 shadow-sm hover:shadow-lg"
                      >
                        <span>View Details</span>
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-left mt-12"
        >
          <Link
            to="/trips"
            className="inline-flex items-center space-x-2 bg-[#e0aa04] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d9a513] transition-all duration-300 shadow-sm"
          >
            <Calendar className="h-5 w-5" />
            <span>View Full Calendar</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedTrips;
