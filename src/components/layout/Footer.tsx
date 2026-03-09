import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Accessibility, ArrowRight, Target } from 'lucide-react';
import { submitNewsletter } from '../../lib/xano';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await submitNewsletter(email);

      if (result.success) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        console.error('Newsletter subscription failed:', result.message);
        setSubmitStatus('error');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('Error submitting newsletter:', msg);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-adventure-900/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-primary-900/30 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">

        {/* Split Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12 items-stretch">

          {/* Left: Brand */}
          <div className="flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <Link to="/" className="group flex-shrink-0">
                <img
                  src="/Treks-For-All-Logo.webp"
                  alt="Treks for All"
                  className="h-14 sm:h-16 w-auto transition-transform duration-300 group-hover:scale-110"
                  width="114"
                  height="100"
                  loading="lazy"
                />
              </Link>
              <div className="flex items-center space-x-2">
                <Accessibility className="h-4 sm:h-5 w-4 sm:w-5 text-adventure-400 flex-shrink-0" />
                <span className="font-semibold text-primary-300 text-sm sm:text-base">
                  WHERE OUTDOORS BELONG TO EVERYONE
                </span>
              </div>
            </div>

            <p className="text-slate-300 mb-6 text-sm leading-relaxed max-w-lg">
              Inclusive adventure travel designed for people of all abilities, founded through partnership with v-shesh,
              Aquaterra Adventures, and Metores Trust. Breaking barriers, building bridges.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/profile.php?id=61576013662188" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/20 transition-all duration-300" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/treks.for.all/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/20 transition-all duration-300" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/treks-for-all/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/20 transition-all duration-300" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right: Newsletter */}
          <div className="bg-gradient-to-br from-adventure-900/50 to-primary-900/50 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-white/10 flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center space-x-2">
              <Target className="h-5 w-5 text-adventure-400 flex-shrink-0" />
              <span>Join Our Inclusive Community</span>
            </h3>
            <p className="text-slate-300 mb-4 sm:mb-6 text-sm">
              Get accessibility updates, inspiring stories, and inclusive adventure tips
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-primary-400 disabled:opacity-50 text-sm sm:text-base"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-warning-400 text-earth-900 px-6 py-2 rounded-xl hover:bg-warning-500 transition-all duration-300 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {submitStatus === 'success' && (
                <p className="text-success-400 text-sm">
                  Thank you for subscribing! We'll keep you updated.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-error-400 text-sm">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Compact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          
          {/* Adventures */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-white text-sm sm:text-base">Inclusive Adventures</h4>
            <ul className="space-y-2">
              <li><Link to="/trips?category=treks" className="text-slate-300 hover:text-primary-400 transition-colors duration-300 text-sm flex items-start space-x-1">
                <ArrowRight className="h-3 w-3 flex-shrink-0 mt-0.5" />
                <span>Inclusive Treks</span>
              </Link></li>
              <li><Link to="/camps" className="text-slate-300 hover:text-primary-400 transition-colors duration-300 text-sm flex items-start space-x-1">
                <ArrowRight className="h-3 w-3 flex-shrink-0 mt-0.5" />
                <span>Inclusive Camping</span>
              </Link></li>
              <li><Link to="/trips?category=day-adventures" className="text-slate-300 hover:text-primary-400 transition-colors duration-300 text-sm flex items-start space-x-1">
                <ArrowRight className="h-3 w-3 flex-shrink-0 mt-0.5" />
                <span>Adaptive Day Adventures</span>
              </Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-white text-sm sm:text-base">Our Mission</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-300 hover:text-adventure-400 transition-colors duration-300 text-sm flex items-start space-x-1">
                <ArrowRight className="h-3 w-3 flex-shrink-0 mt-0.5" />
                <span>Our Story</span>
              </Link></li>
              <li><Link to="/about/partners" className="text-slate-300 hover:text-adventure-400 transition-colors duration-300 text-sm flex items-start space-x-1">
                <ArrowRight className="h-3 w-3 flex-shrink-0 mt-0.5" />
                <span>Partners</span>
              </Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-white text-sm sm:text-base">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/faqs" className="text-slate-300 hover:text-success-400 transition-colors duration-300 text-sm flex items-start space-x-1">
                <ArrowRight className="h-3 w-3 flex-shrink-0 mt-0.5" />
                <span>FAQs</span>
              </Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-success-400 transition-colors duration-300 text-sm flex items-start space-x-1">
                <ArrowRight className="h-3 w-3 flex-shrink-0 mt-0.5" />
                <span>Contact</span>
              </Link></li>
              <li><Link to="/blog" className="text-slate-300 hover:text-success-400 transition-colors duration-300 text-sm flex items-start space-x-1">
                <ArrowRight className="h-3 w-3 flex-shrink-0 mt-0.5" />
                <span>Media & Blog</span>
              </Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-white text-sm sm:text-base">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-success-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">+91 96431 84862</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-primary-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:admin@treksforall.in" className="text-slate-300 text-sm hover:text-adventure-400 transition-colors break-words">admin@treksforall.in</a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-adventure-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">S-507, Ground Floor, Greater Kailash – 2, New Delhi – 110048, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 gap-4">
            <div className="space-y-2 w-full md:w-auto">
              <div className="flex items-center space-x-2">
                <Accessibility className="h-4 w-4 text-adventure-400 flex-shrink-0" />
                <p className="text-slate-400 text-xs sm:text-sm">
                  © {new Date().getFullYear()} Treks for All. Empowering accessible adventures. All rights reserved.
                </p>
              </div>
              <div className="text-slate-400 text-xs sm:text-sm flex items-center space-x-2">
                <span className="w-4"></span>
                <span>
                  Website Powered by{' '}
                  <a
                    href="https://photoindia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-adventure-400 hover:text-adventure-300 transition-colors duration-300"
                  >
                    PhotoIndia.com
                  </a>
                </span>
              </div>
            </div>
            <div className="flex space-x-6 pl-6 md:pl-0">
              <Link to="/privacy" className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;