import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Leaf, MapPin, Clock, Star, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const USPSection = () => {
  const uspFeatures = [
    {
      icon: Shield,
      title: 'Top-Tier Safety',
      description: 'Comprehensive safety protocols and certified rescue training'
    },
    {
      icon: Award,
      title: 'Pioneers of Rafting',
      description: 'First to introduce commercial rafting in India since 1999'
    },
    {
      icon: Users,
      title: 'Expert Guides',
      description: 'Certified professionals with decades of wilderness experience'
    },
    {
      icon: Leaf,
      title: 'Leave-No-Trace',
      description: 'Committed to sustainable and responsible adventure travel'
    },
    {
      icon: Star,
      title: 'Small Groups',
      description: 'Intimate group sizes for personalized experiences'
    },
    {
      icon: Heart,
      title: 'Authentic Experiences',
      description: 'Deep cultural immersion and local community engagement'
    },
    {
      icon: MapPin,
      title: 'Exclusive Access',
      description: 'Unique routes and destinations not found elsewhere'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance before, during, and after trips'
    }
  ];

  return (
    <section className="py-20 bg-warning-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.25em] mb-4 bg-gradient-to-b from-[#4a4a4a] to-[#6a6a6a] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              Why Choose Treks for All
            </h2>
            <div className="w-32 md:w-48 h-1 mb-4" style={{ backgroundColor: '#FFD700' }}></div>
          </div>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Founded on three decades of adventure expertise combined with cutting-edge accessibility innovation,
            setting the new gold standard for inclusive, safe, and transformative outdoor experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {uspFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h3 className="text-lg font-bold text-earth-800 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-earth-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-earth-800 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready for Your Next Adventure?
            </h3>
            <p className="text-earth-300 text-lg mb-8 max-w-2xl mx-auto">
              Join our growing community of adventurers who are breaking barriers and discovering the extraordinary with Treks for All
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-warning-400 text-earth-900 px-8 py-4 rounded-md font-semibold text-lg hover:bg-warning-500 transition-all duration-300 transform hover:scale-105"
            >
              <span>Start Planning</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default USPSection;