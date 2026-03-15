import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';

const BlogPreview = () => {
  return (
    <section className="py-24 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <SectionTitle
            title="MEDIA & BLOG"
            subtitle="Wisdom from the Mountains. Stories from the Heart."
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

              <div className="md:col-span-2 p-8 lg:p-10">
                <div className="mb-4">
                  <span className="inline-block bg-[#fef3d1] text-[#f3b815] px-4 py-1 rounded-lg text-sm font-semibold">
                    The Better India
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-earth-800 mb-4">
                  From Amputees to the Visually Impaired: How a Diverse Group of Trekkers Conquered the Himalayas
                </h3>

                <p className="text-earth-500 leading-relaxed mb-6">
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
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-left mt-12"
        >
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 bg-[#f3b815] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#e5a800] transition-all duration-300 transform hover:scale-105"
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
