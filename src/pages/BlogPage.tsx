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
import VSheshRecognitionsSection from '../components/home/VSheshRecognitionsSection';

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

  const heroPost = posts.length > 0 ? posts[0] : null;
  const gridPosts = posts.length > 1 ? posts.slice(1) : [];

  return (
    <div className="pt-16 sm:pt-20 md:pt-28 min-h-screen bg-white">
      <SEO
        title="Blog - Treks for All | Stories from inclusive adventures"
        description="Read stories, experiences, and insights from our inclusive adventure community. Discover inspiring journeys of people with disabilities conquering mountains, accessibility tips for outdoor adventures, personal reflections from participants, and expert advice on adaptive equipment and inclusive travel across India."
        keywords="accessible adventure blog, inclusive travel stories, disability adventure experiences, accessible trekking blog, outdoor inclusion stories"
        image="https://treksforall.in/beyond-the-trail.jpg"
        url="https://treksforall.in/blog"
      />
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-16"
          >
            <SectionTitle
              title="MEDIA & BLOG"
              subtitle="Wisdom from the Mountains. Stories from the Heart."
              align="left"
            />
          </motion.div>

          {heroPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-5xl ml-0 mb-10 sm:mb-20"
            >
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-[#d1ebed]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div className="md:col-span-5 relative h-56 sm:h-72 md:h-auto overflow-hidden">
                    <img
                      src={heroPost.image}
                      alt={heroPost.title}
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).src = '/Home-01.webp'; }}
                    />
                  </div>

                  <div className="md:col-span-7 p-5 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <span className="inline-block bg-[#fef3d1] text-[#e0aa04] px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                        {heroPost.category}
                      </span>
                      <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#377d87]">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{heroPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{heroPost.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#2c646c] mb-3 sm:mb-4 leading-tight">
                      {heroPost.title}
                    </h3>

                    <p className="text-sm sm:text-base text-earth-600 leading-relaxed mb-4 sm:mb-6">
                      {heroPost.excerpt}
                    </p>

                    <div>
                      {heroPost.externalLink ? (
                        <a
                          href={heroPost.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-[#377d87] hover:text-[#2c646c] font-semibold transition-colors group"
                        >
                          <span>Read More</span>
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      ) : (
                        <Link
                          to={`/blog/${heroPost.slug}`}
                          className="inline-flex items-center space-x-2 text-[#377d87] hover:text-[#2c646c] font-semibold transition-colors group"
                        >
                          <span>Read More</span>
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

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
          ) : gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
              {gridPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-500 border border-[#d1ebed]"
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={(post as any).image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => { (e.target as HTMLImageElement).src = '/Home-01.webp'; }}
                    />
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-[#377d87] mb-2 sm:mb-3">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{(post as any).author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{(post as any).readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-xl font-bold text-[#2c646c] mb-2 sm:mb-3 group-hover:text-[#e0aa04] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm sm:text-base text-earth-600 mb-3 sm:mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {(post as any).externalLink ? (
                      <a
                        href={(post as any).externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-[#377d87] hover:text-[#e0aa04] font-semibold transition-colors group/link"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </a>
                    ) : (
                      <Link
                        to={`/blog/${(post as any).slug}`}
                        className="inline-flex items-center space-x-2 text-[#377d87] hover:text-[#e0aa04] font-semibold transition-colors group/link"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </Link>
                    )}
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

      <VSheshRecognitionsSection />
    </div>
  );
};

export default BlogPage;
