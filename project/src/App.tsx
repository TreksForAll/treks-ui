import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PartnersPage from './pages/PartnersPage';
import TripsPage from './pages/TripsPage';
import TripDetailPage from './pages/TripDetailPage';
import ContactPage from './pages/ContactPage';
import FAQsPage from './pages/FAQsPage';
import CampsPage from './pages/CampsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import PerformanceOptimizer from './components/ui/PerformanceOptimizer';
import VSheshRecognitionsSection from './components/home/VSheshRecognitionsSection';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PerformanceOptimizer />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/partners" element={<PartnersPage />} />
          <Route path="/trips" element={<TripsPage />} />
          <Route path="/trip/:id" element={<TripDetailPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/camps" element={<CampsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
        </Routes>
        <VSheshRecognitionsSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;