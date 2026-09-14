import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

// PageLoader covers the page until window load (then fades for 0.5s), or for ~1.3s on
// in-app navigation. Slide in only after that, so the entrance isn't hidden behind it.
const REVEAL_DELAY_MS = 1400;
const LOADER_MAX_MS = 4600;

const KarwaanBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let revealTimer: number | undefined;
    const reveal = () => {
      revealTimer = window.setTimeout(() => setVisible(true), REVEAL_DELAY_MS);
    };

    if (document.readyState === 'complete') {
      reveal();
    } else {
      window.addEventListener('load', reveal, { once: true });
    }
    const safetyTimer = window.setTimeout(() => setVisible(true), LOADER_MAX_MS);

    return () => {
      window.removeEventListener('load', reveal);
      window.clearTimeout(revealTimer);
      window.clearTimeout(safetyTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: '105%' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 90, damping: 16 }}
          // Sits just below the fixed navbar (h-16 / sm:h-20 / md:h-28). z-index is inline because
          // index.css forces `.fixed { z-index: 50 }`, which would put this above the open mobile menu.
          className="fixed right-0 top-[4.75rem] sm:top-[5.75rem] md:top-32"
          style={{ zIndex: 40 }}
        >
          <Link
            to="/karwaan"
            className="group flex items-center gap-2 sm:gap-3 rounded-l-2xl border border-r-0 border-[#e0aa04]/60 bg-[#141211]/85 backdrop-blur-md py-2 pl-2 pr-2.5 sm:py-2.5 sm:pl-3 sm:pr-4 shadow-xl shadow-black/30 transition-colors duration-300 hover:border-[#e0aa04] hover:bg-[#141211]/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#e0aa04]"
          >
            <span className="relative flex-shrink-0 inline-flex items-center gap-1 rounded-md sm:rounded-lg bg-[#e0aa04] px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.14em] text-[#201e1d]">
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
              </span>
              <Sparkles className="hidden sm:block h-3.5 w-3.5" aria-hidden="true" />
              New
            </span>

            <span className="min-w-0 text-left">
              <span className="block text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.08em] leading-tight text-white">
                Karwaan
              </span>
              <span className="block whitespace-nowrap text-[11px] sm:text-xs md:text-sm font-semibold leading-tight text-[#e0aa04]">
                Making &ldquo;someday&rdquo; possible
              </span>
              <span className="hidden lg:block mt-1 max-w-[13.5rem] text-xs leading-snug text-white/70">
                Full or partial sponsorship for eligible treks &amp; camps
              </span>
            </span>

            <span className="flex-shrink-0 flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-[#e0aa04] text-[#201e1d] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-105">
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default KarwaanBanner;
