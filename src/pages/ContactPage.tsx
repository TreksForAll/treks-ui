import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Accessibility } from 'lucide-react';
import SEO from '../components/ui/SEO';
import { submitForm } from '../lib/xano';
import VSheshRecognitionsSection from '../components/home/VSheshRecognitionsSection';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tripInterest: '',
    groupSize: '',
    preferredDates: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await submitForm({
        formType: 'contact',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        tripInterest: formData.tripInterest || undefined,
        groupSize: formData.groupSize || undefined,
        preferredDates: formData.preferredDates || undefined,
        message: formData.message,
      });

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          tripInterest: '',
          groupSize: '',
          preferredDates: '',
          message: ''
        });
      } else {
        console.error('Submission failed:', result.message);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-28 min-h-screen bg-white">
      <SEO
        title="Contact us - Treks for All | Plan your accessible adventure"
        description="Get in touch with Treks for All to plan your accessible adventure. Our accessibility specialists are ready to design your perfect inclusive outdoor experience. Contact our team for personalized trekking, camping, and adventure travel information tailored to your needs."
        keywords="contact Treks for All, accessible adventure inquiry, inclusive trekking information, accessible travel contact, disability travel support"
        image="https://treksforall.in/Home-Accessible.webp"
        url="https://treksforall.in/contact"
      />
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-l-[5px] border-[#e0aa04] pl-4 mb-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] text-[#e0aa04]" style={{ fontWeight: 700 }}>
                Start Your Accessible Adventure
              </h1>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-[#377d87] max-w-3xl ml-0"
          >
            Ready to break barriers and explore new possibilities? Our accessibility specialists are here to design your perfect inclusive adventure.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-[#214b51]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-[#214b51] rounded-2xl p-8">
                <div>
                  <div className="border-l-[5px] border-[#e0aa04] pl-4 mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.08em] text-[#e0aa04]" style={{ fontWeight: 700 }}>
                      Get in Touch
                    </h2>
                  </div>
                  <p className="text-[#a3d7db] leading-relaxed mb-8">
                    We recognise that every person has unique needs and aspirations. We craft adaptive adventures that meet your requirements and expand what you believe is possible while ensuring dignity, privacy, confidentiality, and uncompromised safety at every step.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-[#e0aa04]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Phone</h3>
                      <p className="text-[#a3d7db]">Sakshi: +91 82796 24879</p>
                      <p className="text-[#a3d7db]">Vaishnavi: +91 85277 52157</p>
                      <p className="text-[#a3d7db]">Himanshu: +91 96431 84862</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-[#e0aa04]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-[#a3d7db]"><a href="mailto:admin@treksforall.in" className="text-[#a3d7db] hover:text-white underline">admin@treksforall.in</a></p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-[#e0aa04]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Address</h3>
                      <p className="text-[#a3d7db]">
                        S-507, Ground Floor<br />
                        Greater Kailash – 2<br />
                        New Delhi – 110048<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-[#e0aa04]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Office Hours</h3>
                      <p className="text-[#a3d7db]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-[#a3d7db]">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-white font-semibold">Accessibility Support: 24/7 available</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-sm p-8 border border-[#d1ebed]">
                <div className="border-l-[5px] border-[#e0aa04] pl-4 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.08em] text-[#e0aa04]" style={{ fontWeight: 700 }}>
                    Accessibility Requirements
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-earth-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-earth-400 focus:ring-1 focus:ring-earth-400 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-earth-400 focus:ring-1 focus:ring-earth-400 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-earth-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-earth-400 focus:ring-1 focus:ring-earth-400 transition-all duration-300"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="tripInterest" className="block text-sm font-medium text-earth-700 mb-2">
                        Inclusive Adventure Interest
                      </label>
                      <select
                        id="tripInterest"
                        name="tripInterest"
                        value={formData.tripInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-earth-400 focus:ring-1 focus:ring-earth-400 transition-all duration-300"
                      >
                        <option value="">Select adventure type</option>
                        <option value="treks">Inclusive Treks</option>
                        <option value="camping">Inclusive Camping Experiences</option>
                        <option value="day-adventures">Adaptive Day Adventures</option>
                        <option value="customized-adventures">Customized Adventures</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="groupSize" className="block text-sm font-medium text-earth-700 mb-2">
                        Group Size
                      </label>
                      <select
                        id="groupSize"
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-earth-400 focus:ring-1 focus:ring-earth-400 transition-all duration-300"
                      >
                        <option value="">Select group size</option>
                        <option value="1-2">1-2 people</option>
                        <option value="3-5">3-5 people</option>
                        <option value="6-10">6-10 people</option>
                        <option value="11-15">11-15 people</option>
                        <option value="16+">16+ people</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="preferredDates" className="block text-sm font-medium text-earth-700 mb-2">
                        Preferred Dates
                      </label>
                      <input
                        type="text"
                        id="preferredDates"
                        name="preferredDates"
                        value={formData.preferredDates}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-earth-400 focus:ring-1 focus:ring-earth-400 transition-all duration-300"
                        placeholder="e.g., May 2025"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-earth-700 mb-2">
                      Special Needs & Preferences
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-earth-400 focus:ring-1 focus:ring-earth-400 transition-all duration-300 resize-none"
                      placeholder="Please describe any specific accessibility needs, adaptive equipment requirements, medical considerations, dietary restrictions, or other support needs that would help us create the perfect adventure for you..."
                    ></textarea>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-success-100 border border-success-400 text-success-800 px-4 py-3 rounded-lg mb-4">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-error-100 border border-error-400 text-error-800 px-4 py-3 rounded-lg mb-4">
                      Sorry, there was an error sending your message. Please try again or email us directly at <a href="mailto:admin@treksforall.in" className="text-earth-900 hover:text-earth-800 underline">admin@treksforall.in</a>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#e0aa04] text-white py-4 rounded-xl font-semibold hover:bg-[#d9a513] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Accessibility className="h-5 w-5" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Enquiry'}</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="border-l-[5px] border-[#e0aa04] pl-4 mb-4">
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.08em] text-[#e0aa04]" style={{ fontWeight: 700 }}>
                Visit Treks For All
              </h3>
            </div>
            <p className="text-earth-600 mb-6">
              Our adventure camp partner is located in New Delhi.
            </p>

            <div className="bg-[#e8f5f6] rounded-2xl p-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.7567!2d77.2419357!3d28.5297059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d53fffffff%3A0xc0e02fb0a4887399!2sAquaterra%20Adventures!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aquaterra Adventures Location"
                  className="w-full h-96"
                ></iframe>
              </div>

              <a
                href="https://www.google.com/maps/place/Aquaterra+Adventures/@28.5297059,77.2419357,17z/data=!4m14!1m7!3m6!1s0x390ce3d53fffffff:0xc0e02fb0a4887399!2sAquaterra+Adventures!8m2!3d28.5297059!4d77.2445106!16s%2Fg%2F1tgcwfm4!3m5!1s0x390ce3d53fffffff:0xc0e02fb0a4887399!8m2!3d28.5297059!4d77.2445106!16s%2Fg%2F1tgcwfm4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#e0aa04] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#d9a513] transition-colors duration-300"
              >
                <MapPin className="h-5 w-5" />
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <VSheshRecognitionsSection />
    </div>
  );
};

export default ContactPage;
