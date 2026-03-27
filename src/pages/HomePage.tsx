import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AdventureWithoutBarriers from '../components/home/AdventureWithoutBarriers';
import VideoTestimonials from '../components/home/VideoTestimonials';
import FeaturedTrips from '../components/home/FeaturedTrips';
import InclusiveUSPSection from '../components/home/InclusiveUSPSection';
import FAQPreview from '../components/home/FAQPreview';
import ImpactSection from '../components/home/ImpactSection';
import VoicesFromTrail from '../components/home/VoicesFromTrail';
import BlogPreview from '../components/home/BlogPreview';
import VSheshRecognitionsSection from '../components/home/VSheshRecognitionsSection';
import FloatingContactButton from '../components/layout/FloatingContactButton';
import SEO from '../components/ui/SEO';
import StructuredData from '../components/ui/StructuredData';

const HomePage = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Treks for All",
    "description": "Inclusive adventure travel company providing accessible trekking, river expeditions, and adventure stays for people of all abilities",
    "url": "https://treksforall.in",
    "logo": "https://treksforall.in/Treks-For-All-Logo.webp",
    "image": "https://treksforall.in/Home-Accessible.webp",
    "telephone": "+91-96431-84862",
    "email": "admin@treksforall.in",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "foundingDate": "2025",
    "founders": [
      {
        "@type": "Organization",
        "name": "v-shesh"
      },
      {
        "@type": "Organization",
        "name": "Aquaterra Adventures"
      },
      {
        "@type": "Organization",
        "name": "Metores Trust"
      }
    ]
  };

  return (
    <main>
      <SEO
        title="Treks for All - Inclusive adventure travel for everyone"
        description="Treks for All offers accessible adventure travel in India for people of all abilities, including those with disabilities. Experience inclusive Himalayan treks, river rafting, and camping with expert support. Founded by v-shesh, Aquaterra Adventures, and Metores Trust."
        keywords="accessible trekking, inclusive adventure, wheelchair accessible travel, adaptive adventure, disability travel, Himalayan treks, accessible camping, inclusive tourism, barrier-free travel, adventure for all"
        image="https://treksforall.in/Home-Accessible.webp"
        url="https://treksforall.in/"
      />
      <StructuredData data={organizationSchema} />
      <HeroSection />
      <div id="main-content">
        <AdventureWithoutBarriers />
        <ImpactSection />
        <VideoTestimonials />
        <FeaturedTrips />
        <InclusiveUSPSection />
        <FAQPreview />
        <VoicesFromTrail />
        <VSheshRecognitionsSection />
        <BlogPreview />
      </div>
      <FloatingContactButton />
    </main>
  );
};

export default HomePage;
