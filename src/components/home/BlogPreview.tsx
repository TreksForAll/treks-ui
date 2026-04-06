import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';

const BlogPreview = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#18363a]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-14"
        >
          <SectionTitle
            title="MEDIA & BLOG"
            subtitle="Wisdom from the Mountains. Stories from the Heart."
            align="left"
            light
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl ml-0"
        >
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <a
                href="https://thebetterindia.com/441694/treks-for-all-disabled-people-india-himalayas-uttarakhand-dayara-bugyal-rishikesh-v-shesh-aquaterra-adventures-metores/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:col-span-1 relative h-64 md:h-auto"
              >
                <img
                  src="/treks-for-all-disabled-persons-7-1748608748.webp"
                  alt="From Amputees to the Visually Impaired: How a Diverse Group of Trekkers Conquered the Himalayas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </a>

              <div className="md:col-span-2 p-4 sm:p-8 lg:p-10">
                <div className="mb-3 sm:mb-4">
                  <span className="inline-block bg-[#fef3d1] text-[#e0aa04] px-3 sm:px-4 py-1 rounded-lg text-xs sm:text-sm font-semibold">
                    The Better India
                  </span>
                </div>

                <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#18363a] mb-3 sm:mb-4">
                  From Amputees to the Visually Impaired: How a Diverse Group of Trekkers Conquered the Himalayas
                </h3>

                <p className="text-sm sm:text-base text-earth-600 leading-snug sm:leading-relaxed mb-4 sm:mb-6">
                  The mountain gods of Dayara Bugyal (12,000 ft above sea level), a meadow in the Garhwal Himalayas, are no strangers to beautiful sights. Every spring (March and April), the meadow turns into a floral rhapsody of sorts; oak, rhododendron, pine and maple colour its alpine landscape.
                </p>

                <a
                  href="https://thebetterindia.com/441694/treks-for-all-disabled-people-india-himalayas-uttarakhand-dayara-bugyal-rishikesh-v-shesh-aquaterra-adventures-metores/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[#377d87] hover:text-[#2c646c] font-semibold transition-colors group"
                >
                  <span>Read the full story on The Better India</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
          className="max-w-4xl ml-0 mt-6"
        >
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <a
                href="https://www.adventuretravelnews.com/treks-for-all-making-the-outdoors-truly-inclusive"
                target="_blank"
                rel="noopener noreferrer"
                className="md:col-span-1 relative h-64 md:h-auto"
              >
                <img
                  src="/dayara/Dayara-Bugyal-Trek-05.webp"
                  alt="Treks For All: Making the Outdoors Truly Inclusive"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </a>

              <div className="md:col-span-2 p-4 sm:p-8 lg:p-10">
                <div className="mb-3 sm:mb-4">
                  <span className="inline-block bg-[#fef3d1] text-[#e0aa04] px-3 sm:px-4 py-1 rounded-lg text-xs sm:text-sm font-semibold">
                    Adventure Travel Trade Association
                  </span>
                </div>

                <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#18363a] mb-3 sm:mb-4">
                  Treks for All: Making the Outdoors Truly Inclusive
                </h3>

                <p className="text-sm sm:text-base text-earth-600 leading-snug sm:leading-relaxed mb-4 sm:mb-6">
                  Rather than treating inclusion as an add-on, Treks For All integrates adaptive design into every stage of the experience — from route selection and logistics to staffing, equipment, and on-trail support. This approach reflects growing global demand for purpose-driven travel and demonstrates how inclusive design can strengthen overall trip quality for all travelers.
                </p>

                <a
                  href="https://www.adventuretravelnews.com/treks-for-all-making-the-outdoors-truly-inclusive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[#377d87] hover:text-[#2c646c] font-semibold transition-colors group"
                >
                  <span>Read the full story on Adventure Travel News</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-left mt-12"
        >
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 bg-[#e0aa04] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#e5a800] transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Blog Posts</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;
