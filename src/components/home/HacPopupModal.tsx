import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  X,
  ArrowRight,
  Sparkles,
  Trophy,
  Waves,
  Calendar,
  MapPin,
  Users
} from 'lucide-react';

const POPUP_DELAY_MS = 5000; // 5 seconds after landing

const HacPopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Check if user already saw or interacted with modal in this session
    const hasSeen = sessionStorage.getItem('hac-popup-shown');

    const timer = window.setTimeout(() => {
      // Trigger after 5 seconds
      setIsOpen(true);
      setIsMinimized(false);
      sessionStorage.setItem('hac-popup-shown', 'true');
    }, POPUP_DELAY_MS);

    // If it was already shown in session, still show minimized tab right away
    if (hasSeen) {
      setIsMinimized(true);
    }

    return () => window.clearTimeout(timer);
  }, []);

  const handleMinimize = () => {
    setIsOpen(false);
    setIsMinimized(true);
  };

  const handleReopen = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* 1. Full Advertisement Popup Modal (Appears after 5 seconds) */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={handleMinimize}
              aria-hidden="true"
            />

            {/* Modal Card - Split horizontally on desktop / laptop, compact stacked on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              className="relative w-full max-w-lg md:max-w-3xl lg:max-w-4xl max-h-[92dvh] sm:max-h-[90dvh] bg-[#102427] text-white rounded-2xl sm:rounded-3xl border border-[#377d87]/40 shadow-2xl shadow-black/80 overflow-hidden z-10 flex flex-col md:flex-row my-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="hac-modal-title"
            >
              {/* Close / Minimize Button */}
              <button
                type="button"
                onClick={handleMinimize}
                className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white/90 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md group"
                title="Minimize to side"
                aria-label="Minimize advertisement"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:rotate-90" />
              </button>

              {/* Visual Column / Banner */}
              <div className="relative md:w-5/12 shrink-0 h-32 sm:h-40 md:h-auto min-h-[140px] md:min-h-[380px] overflow-hidden bg-[#18363a] flex flex-col justify-between">
                <img
                  src="/hac/hac-banner.jpg"
                  alt="The Himalayan Adventure Challenge"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#102427] via-[#102427]/40 to-transparent" />
                <div className="absolute inset-0 bg-black/20" />

                {/* Floating Badges */}
                <div className="relative z-10 p-2.5 sm:p-3 md:p-4 flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#e0aa04] text-[#18363a] text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#18363a] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#18363a]" />
                    </span>
                    Upcoming
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold border border-white/20">
                    <Calendar className="w-3 h-3 text-[#e0aa04]" />
                    Dec 18–20, 2026
                  </span>
                </div>

                {/* Location & Slogan on desktop */}
                <div className="relative z-10 p-2.5 sm:p-3 md:p-4 space-y-1">
                  <p className="hidden md:block text-xs font-semibold italic text-[#8cd6dc]">
                    &ldquo;Raft a river. Hike a ridge. Finish as a team.&rdquo;
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-white/90">
                    <MapPin className="w-3.5 h-3.5 text-[#e0aa04] shrink-0" />
                    <span className="truncate">Atali Ganga &amp; Rishikesh</span>
                  </div>
                </div>
              </div>

              {/* Content Body Column */}
              <div className="flex-1 p-3.5 sm:p-5 md:p-6 overflow-y-auto flex flex-col justify-between space-y-3 sm:space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1 text-[#e0aa04] text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] mb-0.5">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>Now Inclusive · 11th Edition</span>
                  </div>
                  <h3
                    id="hac-modal-title"
                    className="text-lg sm:text-2xl md:text-2.5xl font-extrabold text-white leading-tight tracking-tight"
                  >
                    The Himalayan Adventure Challenge (HAC)
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 mt-1 sm:mt-1.5 leading-relaxed">
                    India&rsquo;s signature adventure race is now open to inclusive teams! 10 km Open Challenge (5 km rafting + 5 km hiking) with handicap scoring on the Ganga.
                  </p>
                </div>

                {/* Key Highlights: 4 Compact Cards */}
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5 text-left">
                  <div className="bg-[#18363a]/80 border border-[#377d87]/30 rounded-xl p-2 sm:p-2.5 space-y-0.5">
                    <div className="flex items-center gap-1.5 text-[#e0aa04]">
                      <Waves className="w-3.5 h-3.5" />
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">Race Course</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-white">10 km Challenge</p>
                    <p className="text-[10px] sm:text-[11px] text-white/60">5 km Raft + 5 km Hike</p>
                  </div>

                  <div className="bg-[#18363a]/80 border border-[#377d87]/30 rounded-xl p-2 sm:p-2.5 space-y-0.5">
                    <div className="flex items-center gap-1.5 text-[#e0aa04]">
                      <Users className="w-3.5 h-3.5" />
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">Team Format</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-white">Teams of 4</p>
                    <p className="text-[10px] sm:text-[11px] text-white/60">2 PwD + 2 Buddies</p>
                  </div>

                  <div className="bg-[#18363a]/80 border border-[#377d87]/30 rounded-xl p-2 sm:p-2.5 space-y-0.5">
                    <div className="flex items-center gap-1.5 text-[#e0aa04]">
                      <Trophy className="w-3.5 h-3.5" />
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">Winning Prize</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-white">Free Holiday + Gifts</p>
                    <p className="text-[10px] sm:text-[11px] text-white/60">Winning team takes it all</p>
                  </div>

                  <div className="bg-[#18363a]/80 border border-[#377d87]/30 rounded-xl p-2 sm:p-2.5 space-y-0.5">
                    <div className="flex items-center gap-1.5 text-[#e0aa04]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">All-Inclusive</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-white">₹12,625 / person</p>
                    <p className="text-[10px] sm:text-[11px] text-white/60">Stay, meals, gala &amp; GST</p>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="pt-0.5 flex items-center gap-2 sm:gap-3">
                  <Link
                    to="/trip/11"
                    onClick={handleMinimize}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#e0aa04] hover:bg-[#c99903] text-[#18363a] font-black text-xs sm:text-sm py-2.5 sm:py-3 px-4 rounded-xl transition-all duration-200 shadow-md shadow-[#e0aa04]/20 group"
                  >
                    <span>Explore &amp; Register</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                  <button
                    type="button"
                    onClick={handleMinimize}
                    className="inline-flex items-center justify-center gap-1 bg-white/10 hover:bg-white/20 text-white/90 font-semibold text-xs sm:text-sm py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl border border-white/20 transition-all duration-200 cursor-pointer"
                  >
                    <span>Minimize</span>
                  </button>
                </div>

                {/* Partner Credit Note */}
                <p className="text-[10px] text-center text-white/50 pt-0.5">
                  Aquaterra Adventures &amp; Atali Ganga × Treks For All
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. Minimized Right-Side Fixed Banner (Slides in and sits snugly below Karwaan) */}
      <AnimatePresence>
        {isMinimized && (
          <motion.div
            initial={{ x: '110%' }}
            animate={{ x: 0 }}
            exit={{ x: '110%' }}
            transition={{ type: 'spring', stiffness: 90, damping: 16 }}
            // Sits snugly below KarwaanBanner (top-[4.75rem] on mobile, sm:top-[5.75rem], md:top-32)
            className="fixed right-0 top-[7.85rem] sm:top-[9.5rem] md:top-52"
            style={{ zIndex: 40 }}
          >
            <div className="group flex items-center gap-1.5 sm:gap-2.5 rounded-l-xl sm:rounded-l-2xl border border-r-0 border-[#377d87]/60 bg-[#102427]/90 backdrop-blur-md shadow-xl shadow-black/40 hover:border-[#e0aa04] hover:bg-[#102427] transition-all duration-300 py-1.5 pl-2 pr-2 sm:py-2 sm:pl-3 sm:pr-3.5">
              {/* Clickable Area to Open Modal */}
              <button
                type="button"
                onClick={handleReopen}
                className="flex items-center gap-1.5 sm:gap-2.5 text-left cursor-pointer focus:outline-none"
                title="View Himalayan Adventure Challenge details"
                aria-label="Open Himalayan Adventure Challenge details"
              >
                {/* Visual Pill Badge */}
                <span className="relative flex-shrink-0 inline-flex items-center gap-1 rounded sm:rounded-md bg-[#377d87] px-1.5 py-0.5 text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-wider text-white">
                  <span className="absolute -top-0.5 -right-0.5 flex h-1.5 w-1.5 sm:h-2 sm:w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#e0aa04] opacity-75 motion-safe:animate-ping" />
                    <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#e0aa04]" />
                  </span>
                  <Waves className="hidden sm:block h-3 w-3 text-[#e0aa04]" aria-hidden="true" />
                  HAC
                </span>

                {/* Text Content */}
                <span className="min-w-0 text-left">
                  <span className="block text-[10.5px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.05em] leading-tight text-white group-hover:text-[#e0aa04] transition-colors">
                    Himalayan Challenge
                  </span>
                  <span className="block whitespace-nowrap text-[9px] sm:text-[11px] md:text-xs font-semibold leading-tight text-[#8cd6dc]">
                    <span className="sm:hidden">10 km Open · Dec 18–20</span>
                    <span className="hidden sm:inline">10 km Open Challenge · Dec 18–20</span>
                  </span>
                  <span className="hidden lg:block mt-0.5 max-w-[13.5rem] text-[11px] leading-snug text-white/60">
                    5 km Rafting + 5 km Hiking · Rishikesh
                  </span>
                </span>
              </button>

              {/* Direct Quick Link to Trip Details */}
              <Link
                to="/trip/11"
                className="flex-shrink-0 flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 rounded-full bg-[#e0aa04] text-[#18363a] transition-transform duration-300 hover:scale-105 shadow-sm"
                title="View Full Trip & Register"
                aria-label="View HAC Trip details"
              >
                <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HacPopupModal;
