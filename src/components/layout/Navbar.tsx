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
    { name: 'Customised Trips', path: '/customised-trips' },
    { name: 'Immersions', path: '/outdoor-immersions' },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-slate-200 transition-all duration-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-28">
          {/* Logo */}
          <Link to="/" className="group focus:outline-none">
            <img
              src="/Treks-For-All-Logo.webp"
              alt="Treks for All"
              className="h-12 sm:h-16 md:h-24 w-auto transition-all duration-300 group-hover:scale-105 py-1"
              width="190"
              height="170"
              loading="eager"
            />
          </Link>

          {/* Horizontal Navigation Bar */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                {index > 0 && <span className="text-slate-300 mx-0.5 select-none text-sm">|</span>}
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setAdventuresOpen(true)}
                    onMouseLeave={() => setAdventuresOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`px-3 py-1.5 text-sm uppercase tracking-wider font-medium transition-colors duration-200 focus:outline-none ${
                        isActive(link.path)
                          ? 'text-earth-900 border-b-2 border-warning-400'
                          : 'text-slate-600 hover:text-earth-900 hover:border-b-2 hover:border-warning-400 border-b-2 border-transparent'
                      }`}
                    >
                      {link.name}
                    </Link>
                    <AnimatePresence>
                      {adventuresOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-44 bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden"
                        >
                          {adventuresDropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-4 py-2.5 text-sm uppercase tracking-wider font-medium text-slate-600 hover:text-earth-900 hover:text-earth-900 hover:bg-warning-50 transition-colors duration-150"
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
                    to={link.path}
                    className={`px-3 py-1.5 text-sm uppercase tracking-wider font-medium transition-colors duration-200 focus:outline-none ${
                      isActive(link.path)
                        ? 'text-earth-900 border-b-2 border-warning-400'
                        : 'text-slate-600 hover:text-earth-900 hover:border-b-2 hover:border-warning-400 border-b-2 border-transparent'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-200 flex items-center justify-center ${
                isOpen
                  ? 'text-earth-900'
                  : 'text-slate-600 hover:text-earth-900'
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
            className="lg:hidden bg-white border-t border-slate-200"
          >
            <div className="px-3 py-4 space-y-1">
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setAdventuresOpen(!adventuresOpen)}
                      className={`w-full flex items-center justify-start text-left px-4 py-3 text-sm uppercase tracking-wider font-medium transition-colors duration-200 ${
                        isActive(link.path)
                          ? 'text-earth-900 border-b-2 border-warning-400'
                          : 'text-slate-600 hover:text-earth-900 hover:border-b-2 hover:border-warning-400 border-b-2 border-transparent'
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
                              className="block px-4 py-2 text-xs uppercase tracking-wider font-medium text-slate-500 hover:text-earth-900 border-b-2 border-warning-400 transition-colors duration-150"
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
                    className={`block px-4 py-3 text-sm uppercase tracking-wider font-medium transition-colors duration-200 ${
                      isActive(link.path)
                        ? 'text-earth-900 border-b-2 border-warning-400'
                        : 'text-slate-600 hover:text-earth-900 hover:border-b-2 hover:border-warning-400 border-b-2 border-transparent'
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
