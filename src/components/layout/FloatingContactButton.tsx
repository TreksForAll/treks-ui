import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="mb-4 space-y-3"
            >
              <Link
                to="/contact"
                className="flex items-center space-x-3 bg-white rounded-full shadow-lg px-5 py-3 hover:shadow-xl transition-all duration-300 group w-max ml-auto"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-earth-700 font-medium group-hover:text-primary-600 transition-colors">
                  Contact Form
                </span>
                <div className="w-10 h-10 rounded-full bg-warning-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-5 w-5 text-earth-900" />
                </div>
              </Link>

              <a
                href="mailto:admin@treksforall.in"
                className="flex items-center space-x-3 bg-white rounded-full shadow-lg px-5 py-3 hover:shadow-xl transition-all duration-300 group w-max ml-auto"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-earth-700 font-medium group-hover:text-primary-600 transition-colors">
                  Email Us
                </span>
                <div className="w-10 h-10 rounded-full bg-warning-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-5 w-5 text-earth-900" />
                </div>
              </a>

              <a
                href="tel:+919643184862"
                className="flex items-center space-x-3 bg-white rounded-full shadow-lg px-5 py-3 hover:shadow-xl transition-all duration-300 group w-max ml-auto"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-earth-700 font-medium group-hover:text-primary-600 transition-colors">
                  Call Now
                </span>
                <div className="w-10 h-10 rounded-full bg-warning-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-5 w-5 text-earth-900" />
                </div>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-warning-400 text-earth-900 shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center hover:scale-110 focus:outline-none focus:ring-4 focus:ring-warning-300 relative group"
          aria-label={isOpen ? 'Close contact menu' : 'Open contact menu'}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-7 w-7" />
              </motion.div>
            ) : (
              <motion.div
                key="phone"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <Phone className="h-7 w-7" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-white/30 rounded-full"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {!isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -top-14 right-0 bg-earth-800 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="text-sm font-medium">Contact Us</span>
            <div className="absolute bottom-0 right-6 transform translate-y-full">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-earth-800"></div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default FloatingContactButton;
