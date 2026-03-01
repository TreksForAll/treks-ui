import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = 'Treks for All - Inclusive adventure travel for everyone',
  description = 'Where outdoors belong to everyone and adventure knows no barrier. Accessible trekking, river expeditions, and adventure stays designed for people of all abilities.',
  keywords = 'accessible trekking, inclusive adventure, wheelchair accessible travel, adaptive adventure, disability travel, Himalayan treks, accessible camping, inclusive tourism, barrier-free travel, adventure for all',
  image = 'https://treksforall.in/Home-Accessible.webp',
  url,
  type = 'website'
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = url || `https://treksforall.in${location.pathname}`;

  useEffect(() => {
    document.title = title;

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: currentUrl },
      { property: 'og:type', content: type },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = name || property;
      let element = document.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement;

      if (element) {
        element.content = content;
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        element.content = content;
        document.head.appendChild(element);
      }
    });

    const canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalLink) {
      canonicalLink.href = currentUrl;
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = currentUrl;
      document.head.appendChild(link);
    }
  }, [title, description, keywords, image, currentUrl, type]);

  return null;
};

export default SEO;
