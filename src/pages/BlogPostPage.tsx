import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  User,
  Clock,
  ArrowLeft
} from 'lucide-react';
import { BlogService } from '../services/blogService';
import VSheshRecognitionsSection from '../components/home/VSheshRecognitionsSection';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      loadPost(slug);
    }
  }, [slug]);

  const loadPost = async (postSlug: string) => {
    setIsLoading(true);
    try {
      const postData = await BlogService.getPostBySlug(postSlug);
      if (postData) {
        setPost(postData as any);
      }
    } catch (error) {
      console.error('Error loading post:', error);
    } finally {
      setIsLoading(false);
    }
  };


  if (isLoading) {
    return (
      <div className="pt-28 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-earth-200 rounded w-3/4"></div>
            <div className="h-4 bg-earth-200 rounded w-1/2"></div>
            <div className="h-64 bg-earth-200 rounded"></div>
            <div className="space-y-4">
              <div className="h-4 bg-earth-200 rounded"></div>
              <div className="h-4 bg-earth-200 rounded w-5/6"></div>
              <div className="h-4 bg-earth-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-28 min-h-screen bg-white flex items-center justify-center">
        <div className="text-left">
          <h2 className="text-2xl font-bold text-earth-800 mb-4">Article Not Found</h2>
          <p className="text-earth-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="bg-warning-400 text-earth-900 px-6 py-3 rounded-lg font-semibold hover:bg-warning-500 transition-colors duration-300"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  if (post.externalLink) {
    return (
      <div className="pt-28 min-h-screen bg-white">
        <div className="bg-earth-50 border-b border-earth-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-earth-600 hover:text-primary-600 transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog</span>
            </Link>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="mb-12">
            <div className="mb-6">
              <span className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-semibold text-sm">
                {post.category}
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-earth-800 mb-6 leading-tight"
            >
              {post.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-earth-600 leading-relaxed mb-8"
            >
              {post.excerpt}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-earth-600 mb-8"
            >
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-primary-600" />
                <div>
                  <p className="font-semibold text-earth-800">{post.author}</p>
                  {post.authorRole && <p className="text-sm text-earth-500">{post.authorRole}</p>}
                </div>
              </div>

              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>

              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-left"
            >
              <a
                href={post.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-warning-400 text-earth-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-warning-500 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                {post.category === 'Videos' ? 'Watch Now' : 'Read More'}
              </a>
            </motion.div>
          </header>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-earth-200">
              {post.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-earth-100 text-earth-700 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </article>
      </div>
    );
  }

  return (
    <div className="pt-28 min-h-screen bg-white">
      <div className="bg-earth-50 border-b border-earth-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-earth-600 hover:text-primary-600 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="mb-6">
            <span className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-semibold text-sm">
              {post.category}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-earth-800 mb-6 leading-tight"
          >
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-earth-600 leading-relaxed mb-8"
          >
            {post.excerpt}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 text-earth-600 mb-8"
          >
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-primary-600" />
              <div>
                <p className="font-semibold text-earth-800">{post.author}</p>
                {post.authorRole && <p className="text-sm text-earth-500">{post.authorRole}</p>}
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>

            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="prose prose-lg max-w-none mb-12"
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.8',
            color: '#374151'
          }}
        >
          {post.content && post.content.split('\n\n').map((paragraph: string, index: number) => (
            <p key={index} className="mb-6 text-earth-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-earth-200">
            {post.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="bg-earth-100 text-earth-700 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="bg-earth-50 rounded-2xl p-8 border border-earth-200">
          <h3 className="text-xl font-bold text-earth-800 mb-4">About the Author</h3>
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 rounded-full bg-primary-200 flex items-center justify-center flex-shrink-0">
              <User className="h-8 w-8 text-primary-700" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-earth-800">{post.author}</h4>
              {post.authorRole && <p className="text-primary-600 font-medium">{post.authorRole}</p>}
            </div>
          </div>
        </div>
      </article>
      <VSheshRecognitionsSection />
    </div>
  );
};

export default BlogPostPage;
