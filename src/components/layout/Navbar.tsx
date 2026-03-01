import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [adventuresOpen, setAdventuresOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setAdventuresOpen(false);
  }, [location]);

  const adventuresDropdown = [
    { name: 'All Adventures', path: '/trips' },
    { name: 'Treks', path: '/trips?category=treks' },
    { name: 'Camps', path: '/camps' }
  ];

  const navLinks = [
    { name: 'Our Story', path: '/about' },
    { name: 'Adventures', path: '/trips', hasDropdown: true },
    { name: 'Partners', path: '/about/partners' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Media & Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }

    const currentPath = location.pathname.split('?')[0];

    if (currentPath === path) {
      return true;
    }

    if (path === '/trips') {
      return currentPath.startsWith('/trips') || currentPath === '/camps';
    }

    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-xl border-b border-slate-200/50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="group">
            <img
              src="/Treks-For-All-Logo.webp"
              alt="Treks for All"
              className="h-20 w-auto transition-all duration-300 group-hover:scale-105"
              width="114"
              height="100"
              loading="eager"
            />
          </Link>

          {/* Horizontal Navigation Bar */}
          <div className="hidden lg:flex items-center bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 border border-slate-200/50">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setAdventuresOpen(true)}
                  onMouseLeave={() => setAdventuresOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                      isActive(link.path)
                        ? 'text-earth-900 bg-warning-400'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-warning-400 hover:text-earth-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                  <AnimatePresence>
                    {adventuresOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-slate-200/50 overflow-hidden"
                      >
                        {adventuresDropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-warning-400 hover:text-earth-900 transition-all duration-300"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-earth-900 bg-warning-400'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-warning-400 hover:text-earth-900'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-xl transition-all duration-300 flex items-center justify-center ${
                isOpen
                  ? 'text-earth-900 bg-warning-400'
                  : 'text-slate-700 hover:bg-warning-400 hover:text-earth-900'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Slide-down */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/50"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setAdventuresOpen(!adventuresOpen)}
                      className={`w-full flex items-center justify-start text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        isActive(link.path)
                          ? 'text-earth-900 bg-warning-400'
                          : 'text-slate-700 hover:bg-warning-400 hover:text-earth-900'
                      }`}
                    >
                      {link.name}
                    </button>
                    <AnimatePresence>
                      {adventuresOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 mt-2 space-y-2"
                        >
                          {adventuresDropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-warning-400 hover:text-earth-900 transition-all duration-300"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isActive(link.path)
                        ? 'text-earth-900 bg-warning-400'
                        : 'text-slate-700 hover:bg-warning-400 hover:text-earth-900'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;