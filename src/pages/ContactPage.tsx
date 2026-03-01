import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Accessibility } from 'lucide-react';
import SEO from '../components/ui/SEO';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tripInterest: '',
    groupSize: '',
    preferredDates: '',
    message: '',
    assistiveDevices: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseKey) {
        console.error('Missing Supabase configuration');
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(`${supabaseUrl}/functions/v1/send-email`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'contact',
          formData
        }),
      });

      const result = await response.json();
      console.log('Response:', result);

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          tripInterest: '',
          groupSize: '',
          preferredDates: '',
          message: '',
          assistiveDevices: []
        });
      } else {
        console.error('Server error:', result);
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
    if (e.target instanceof HTMLInputElement && e.target.type === 'checkbox') {
      const value = e.target.value;
      setFormData(prev => ({
        ...prev,
        assistiveDevices: e.target.checked
          ? [...prev.assistiveDevices, value]
          : prev.assistiveDevices.filter(item => item !== value)
      }));
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO
        title="Contact us - Treks for All | Plan your accessible adventure"
        description="Get in touch with Treks for All to plan your accessible adventure. Our accessibility specialists are ready to design your perfect inclusive outdoor experience. Contact our team for personalized trekking, camping, and adventure travel information tailored to your needs."
        keywords="contact Treks for All, accessible adventure inquiry, inclusive trekking information, accessible travel contact, disability travel support"
        image="https://treksforall.in/Home-Accessible.webp"
        url="https://treksforall.in/contact"
      />
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-earth-800 mb-6"
          >
            Start Your Accessible Adventure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-earth-600 max-w-3xl mx-auto"
          >
            Ready to break barriers and explore new possibilities? Our accessibility specialists are here to design your perfect inclusive adventure.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-earth-50">
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
              <div>
                <div className="flex flex-col items-start mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.2em] mb-3 bg-gradient-to-b from-[#3b3939] to-[#929192] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
                    Get in Touch
                  </h2>
                  <div className="w-24 md:w-32 h-0.5 mb-3" style={{ backgroundColor: '#FFD700' }}></div>
                </div>
                <p className="text-earth-600 leading-relaxed mb-8">
                  We recognise that every person has unique needs and aspirations. We craft adaptive adventures that meet your requirements and expand what you believe is possible while ensuring dignity, privacy, confidentiality, and uncompromised safety at every step.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-earth-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-earth-800">Phone</h3>
                    <p className="text-earth-600">Sakshi: +91 82796 24879</p>
                    <p className="text-earth-600">Vaishnavi: +91 85277 52157</p>
                    <p className="text-earth-600">Himanshu: +91 96431 84862</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-earth-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-earth-800">Email</h3>
                    <p className="text-earth-600"><a href="mailto:admin@treksforall.in" className="text-earth-800 hover:text-earth-900 underline">admin@treksforall.in</a></p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-earth-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-earth-800">Address</h3>
                    <p className="text-earth-600">
                      S-507, Ground Floor<br />
                      Greater Kailash – 2<br />
                      New Delhi – 110048<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-earth-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-earth-800">Office Hours</h3>
                    <p className="text-earth-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-earth-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-earth-600"><strong>Accessibility Support: 24/7 available</strong></p>
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
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex flex-col items-start mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.2em] mb-3 bg-gradient-to-b from-[#3b3939] to-[#929192] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
                    Accessibility Requirements
                  </h3>
                  <div className="w-24 md:w-32 h-0.5 mb-3" style={{ backgroundColor: '#FFD700' }}></div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Assistive Devices Section */}
                  <div className="bg-earth-50 border border-earth-200 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-earth-800 mb-3 flex items-center space-x-2">
                      <Accessibility className="h-5 w-5" />
                      <span>Assistive devices used (Select all that apply)</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <label className="flex items-center space-x-2 text-sm text-earth-700">
                        <input type="checkbox" name="assistiveDevices" value="none" checked={formData.assistiveDevices.includes('none')} onChange={handleChange} className="rounded border-earth-300" />
                        <span>Not using any assistive device</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm text-earth-700">
                        <input type="checkbox" name="assistiveDevices" value="manual-wheelchair" checked={formData.assistiveDevices.includes('manual-wheelchair')} onChange={handleChange} className="rounded border-earth-300" />
                        <span>Manual wheelchair</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm text-earth-700">
                        <input type="checkbox" name="assistiveDevices" value="powered-wheelchair" checked={formData.assistiveDevices.includes('powered-wheelchair')} onChange={handleChange} className="rounded border-earth-300" />
                        <span>Powered/Electric wheelchair</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm text-earth-700">
                        <input type="checkbox" name="assistiveDevices" value="crutches-walker" checked={formData.assistiveDevices.includes('crutches-walker')} onChange={handleChange} className="rounded border-earth-300" />
                        <span>Crutches / Walker</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm text-earth-700">
                        <input type="checkbox" name="assistiveDevices" value="cane-walking-stick" checked={formData.assistiveDevices.includes('cane-walking-stick')} onChange={handleChange} className="rounded border-earth-300" />
                        <span>Cane / Walking stick</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm text-earth-700">
                        <input type="checkbox" name="assistiveDevices" value="lower-limb-prosthesis" checked={formData.assistiveDevices.includes('lower-limb-prosthesis')} onChange={handleChange} className="rounded border-earth-300" />
                        <span>Lower-limb prosthesis</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm text-earth-700">
                        <input type="checkbox" name="assistiveDevices" value="upper-limb-prosthesis" checked={formData.assistiveDevices.includes('upper-limb-prosthesis')} onChange={handleChange} className="rounded border-earth-300" />
                        <span>Upper-limb prosthesis</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm text-earth-700">
                        <input type="checkbox" name="assistiveDevices" value="orthotic-braces" checked={formData.assistiveDevices.includes('orthotic-braces')} onChange={handleChange} className="rounded border-earth-300" />
                        <span>Orthotic braces / Calipers</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm text-earth-700">
                        <input type="checkbox" name="assistiveDevices" value="hearing-aid" checked={formData.assistiveDevices.includes('hearing-aid')} onChange={handleChange} className="rounded border-earth-300" />
                        <span>Hearing aid / Cochlear implant</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm text-earth-700">
                        <input type="checkbox" name="assistiveDevices" value="white-cane" checked={formData.assistiveDevices.includes('white-cane')} onChange={handleChange} className="rounded border-earth-300" />
                        <span>White cane / AI navigation cane</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm text-earth-700">
                        <input type="checkbox" name="assistiveDevices" value="magnifier" checked={formData.assistiveDevices.includes('magnifier')} onChange={handleChange} className="rounded border-earth-300" />
                        <span>Magnifier / Low-vision aid</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm text-earth-700">
                        <input type="checkbox" name="assistiveDevices" value="noise-cancelling" checked={formData.assistiveDevices.includes('noise-cancelling')} onChange={handleChange} className="rounded border-earth-300" />
                        <span>Noise-cancelling headphones (assistive use)</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm text-earth-700">
                        <input type="checkbox" name="assistiveDevices" value="sensory-regulation" checked={formData.assistiveDevices.includes('sensory-regulation')} onChange={handleChange} className="rounded border-earth-300" />
                        <span>Sensory regulation aids (fidget / weighted supports)</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm text-earth-700">
                        <input type="checkbox" name="assistiveDevices" value="others" checked={formData.assistiveDevices.includes('others')} onChange={handleChange} className="rounded border-earth-300" />
                        <span>Others (Please specify in Accessibility Needs & Preferences)</span>
                      </label>
                    </div>
                  </div>
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
                      Accessibility Needs & Preferences
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
                    className="w-full bg-warning-400 text-earth-900 py-4 rounded-lg font-semibold hover:bg-warning-500 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Accessibility className="h-5 w-5" />
                    <span>{isSubmitting ? 'Sending...' : 'Request Accessible Adventure'}</span>
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
            className="text-center"
          >
            <div className="flex flex-col items-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.2em] mb-3 bg-gradient-to-b from-[#3b3939] to-[#929192] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
                Visit Aquaterra Adventures
              </h3>
              <div className="w-24 md:w-32 h-0.5 mb-3" style={{ backgroundColor: '#FFD700' }}></div>
            </div>
            <p className="text-earth-600 mb-6">
              Our adventure camp partner is located in New Delhi.
            </p>

            <div className="bg-earth-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-6">
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
                className="inline-flex items-center space-x-2 bg-warning-400 text-earth-900 px-6 py-3 rounded-lg font-semibold hover:bg-warning-500 transition-colors duration-300"
              >
                <MapPin className="h-5 w-5" />
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;