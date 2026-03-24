import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach(script => {
        if (!script.hasAttribute('async') && !script.hasAttribute('defer')) {
          script.setAttribute('defer', '');
        }
      });
    };

    // Implement resource hints for commonly accessed domains
    const addResourceHints = () => {
      const domains = [
        'https://images.pexels.com',
        'https://videos.pexels.com',
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];

      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      });
    };

    // Reduce memory usage by cleaning up unused resources
    const cleanupResources = () => {
      // Defer only external Google Fonts stylesheets, not app CSS
      const externalFonts = document.querySelectorAll('link[rel="stylesheet"][href*="fonts.googleapis.com"], link[rel="stylesheet"][href*="fonts.cdnfonts.com"]');
      externalFonts.forEach(sheet => {
        if (!sheet.hasAttribute('data-critical')) {
          (sheet as HTMLLinkElement).media = 'print';
          (sheet as HTMLLinkElement).onload = function() {
            (this as HTMLLinkElement).media = 'all';
          };
        }
      });
    };

    // Initialize optimizations
    optimizeThirdPartyScripts();
    addResourceHints();

    // Cleanup on component mount
    const timeoutId = setTimeout(cleanupResources, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Intersection Observer for lazy loading elements
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Trigger any data loading for elements coming into view
          if (element.dataset.lazyLoad) {
            element.classList.add('animate-fade-in');
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    // Observe all elements with lazy-load data attribute
    document.querySelectorAll('[data-lazy-load]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default PerformanceOptimizer;
