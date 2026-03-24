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
    <section className="py-24 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-14"
        >
          <div className="border-l-[5px] border-[#e0aa04] pl-4 mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] text-[#e0aa04]" style={{ fontWeight: 700 }}>
              Why Choose Treks for All
            </h2>
          </div>
          <p className="text-lg text-earth-600 max-w-3xl ml-0 leading-relaxed">
            Founded on three decades of adventure expertise combined with cutting-edge accessibility innovation,
            setting the new gold standard for inclusive, safe, and transformative outdoor experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {uspFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#fef3d1] rounded-xl mb-5 group-hover:bg-[#e0aa04] transition-colors duration-300">
                  <IconComponent className="h-6 w-6 text-[#e0aa04] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base font-bold text-earth-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-earth-500 leading-relaxed text-sm">
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
          className="mt-16"
        >
          <div className="bg-[#214b51] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready for Your Next Adventure?
              </h3>
              <p className="text-[#a3d7db] text-base max-w-xl">
                Join our growing community of adventurers who are breaking barriers and discovering the extraordinary with Treks for All
              </p>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 inline-flex items-center space-x-2 bg-[#e0aa04] text-[#214b51] px-8 py-4 rounded-xl font-bold text-base hover:bg-[#e5a800] transition-all duration-300"
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
