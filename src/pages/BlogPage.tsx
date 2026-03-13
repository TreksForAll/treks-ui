import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar,
  User,
  ArrowRight,
  BookOpen,
  Clock
} from 'lucide-react';
import { useBlogStore } from '../store/blogStore';
import { BlogService } from '../services/blogService';
import SectionTitle from '../components/ui/SectionTitle';
import SEO from '../components/ui/SEO';

const BlogPage = () => {
  const {
    posts,
    isLoading,
    setPosts,
    setLoading
  } = useBlogStore();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const postsData = await BlogService.getAllPosts();
      setPosts(postsData as any);
    } catch (error) {
      console.error('Error loading blog data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 min-h-screen bg-white">
      <SEO
        title="Blog - Treks for All | Stories from inclusive adventures"
        description="Read stories, experiences, and insights from our inclusive adventure community. Discover inspiring journeys of people with disabilities conquering mountains, accessibility tips for outdoor adventures, personal reflections from participants, and expert advice on adaptive equipment and inclusive travel across India."
        keywords="accessible adventure blog, inclusive travel stories, disability adventure experiences, accessible trekking blog, outdoor inclusion stories"
        image="https://treksforall.in/Vaishnavi-Article.webp"
        url="https://treksforall.in/blog"
      />
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
              title="MEDIA & BLOG"
              subtitle="Wisdom from the Mountains. Stories from the Heart."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl ml-0 mb-20"
          >
            <div className="bg-gradient-to-br from-earth-50 to-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-earth-100">
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
                    <span className="inline-block bg-primary-100 text-primary-800 px-4 py-1 rounded-full text-sm font-semibold">
                      The Better India
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-earth-800 mb-4">
                    From Amputees to the Visually Impaired: How a Diverse Group of Trekkers Conquered the Himalayas
                  </h3>

                  <p className="text-earth-600 leading-relaxed mb-6">
                    The mountain gods of Dayara Bugyal (12,000 ft above sea level), a meadow in the Garhwal Himalayas, are no strangers to beautiful sights. Every spring (March and April), the meadow turns into a floral rhapsody of sorts; oak, rhododendron, pine and maple colour its alpine landscape.
                  </p>

                  <a
                    href="https://thebetterindia.com/441694/treks-for-all-disabled-people-india-himalayas-uttarakhand-dayara-bugyal-rishikesh-v-shesh-aquaterra-adventures-metores/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors group"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-48 bg-earth-200 animate-pulse"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-earth-200 rounded animate-pulse"></div>
                    <div className="h-6 bg-earth-200 rounded animate-pulse"></div>
                    <div className="h-20 bg-earth-200 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={(post as any).image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-earth-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{(post as any).author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{(post as any).readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-earth-800 mb-3 group-hover:text-adventure-600 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-earth-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Link
                      to={`/blog/${(post as any).slug}`}
                      className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors group/link"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-left py-16">
              <BookOpen className="h-16 w-16 text-earth-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-earth-800 mb-2">No articles found</h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
