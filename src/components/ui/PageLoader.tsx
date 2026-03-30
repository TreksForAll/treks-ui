import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const PageLoader = () => {
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setVisible(true);

    const hide = () => setVisible(false);

    // If page is already fully loaded (cached navigation), hide quickly
    if (document.readyState === 'complete') {
      const t = setTimeout(hide, 800);
      return () => clearTimeout(t);
    }

    // Otherwise wait for window load (all images/resources)
    window.addEventListener('load', hide, { once: true });

    // Safety timeout — never block for more than 4s
    const t = setTimeout(hide, 4000);

    return () => {
      window.removeEventListener('load', hide);
      clearTimeout(t);
    };
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white"
          aria-live="polite"
          aria-label="Loading page"
        >
          <DotLottieReact
            src="/lottie/camping_nature.lottie"
            loop
            autoplay
            style={{ width: 220, height: 220 }}
          />
          <p className="mt-4 text-[#377d87] text-sm font-medium tracking-widest uppercase animate-pulse">
            Loading…
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
