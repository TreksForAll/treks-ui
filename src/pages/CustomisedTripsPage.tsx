import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, Mail, Phone, Play, X, Send } from 'lucide-react';
import SEO from '../components/ui/SEO';
import SectionTitle from '../components/ui/SectionTitle';
import { submitForm } from '../lib/xano';

const CustomisedTripsPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', organisation: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('idle');
    try {
      const result = await submitForm({
        formType: 'b2b',
        name: form.name,
        email: form.email,
        phone: form.phone,
        organisation: form.organisation,
        message: form.message,
      });
      if (result.success) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', organisation: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      <SEO
        title="Customised Trips / B2B – Treks for All | Inclusive Group Outdoor Experiences"
        description="Treks for All organises inclusive outdoor trips for schools, workplaces, and communities. Group experiences without barriers — accessible nature walks, short treks, and day trips."
        keywords="customised inclusive trips, B2B outdoor experiences, accessible group treks, inclusive school trips, corporate inclusive outings, disability inclusion outdoor"
        url="https://treksforall.in/customised-trips"
      />

      {/* Hero with embedded video */}
      <section ref={heroRef} className="relative min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden">
        {/* Background image / parallax */}
        <motion.div className="absolute inset-0" style={{ y }}>
          <img
            src="/Video-Cover.webp"
            alt="Group inclusive outdoor experience"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        {/* Hero text + play button */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-adventure-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              B2B &amp; Customised Trips
            </span>
            <h1 className="text-white mb-4 leading-tight" style={{ fontFamily: 'Anton', fontWeight: 400, fontStyle: 'normal', fontSize: '44px' }}>
              Group Outdoor Experiences Without Barriers
            </h1>
            <button
              onClick={() => setIsVideoPlaying(true)}
              className="inline-flex items-center space-x-3 bg-white/15 backdrop-blur-sm border border-white/40 text-white px-6 py-3 rounded-xl hover:bg-white/25 transition-all duration-300"
            >
              <div className="bg-white rounded-full p-1.5">
                <Play className="h-4 w-4 text-earth-900 fill-earth-900" />
              </div>
              <span className="font-medium">Watch: Amazon India's Inclusive Camp with Treks for All</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left – description */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <SectionTitle title="Our Approach" className="mb-6" />
                <p className="text-earth-700 leading-relaxed mb-6">
                  Treks for All organises inclusive outdoor trips for schools, workplaces, and communities that include people with disabilities. Our programmes create opportunities for groups to experience nature together in environments designed with accessibility and participation in mind.
                </p>
                <p className="text-earth-700 leading-relaxed">
                  Each trip is carefully planned to ensure that participants with diverse access needs can meaningfully take part in outdoor experiences such as nature walks, short treks, and day trips.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <SectionTitle title="We Work With" className="mb-6" />
                <div className="space-y-4">
                  {[
                    'Inclusive schools looking to organise accessible outdoor excursions for their students',
                    'Workplaces and organisations that want to host inclusive team outings or engagement activities',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-adventure-600 mt-0.5 flex-shrink-0" />
                      <span className="text-earth-700">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-earth-700 leading-relaxed mt-6">
                  Our team supports planning, accessibility considerations, and on-ground coordination to ensure that the experience is safe, welcoming, and enjoyable for all participants.
                </p>
              </motion.div>
            </div>

            {/* Right – contact */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary-50 to-adventure-50 rounded-2xl p-6 border border-primary-200 shadow-lg"
              >
                <h3 className="text-lg font-bold text-primary-800 mb-2">Need help planning an inclusive adventure for a group?</h3>
                <p className="text-primary-700 text-sm mb-5">Write to us with your requirements and we'll get back to you.</p>
                <div className="space-y-3">
                  <a href="mailto:admin@treksforall.in"
                    className="flex items-center space-x-3 bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <Mail className="h-5 w-5 text-adventure-600 flex-shrink-0" />
                    <span className="text-earth-800 font-medium text-sm">admin@treksforall.in</span>
                  </a>
                  <a href="tel:+919643718789"
                    className="flex items-center space-x-3 bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <Phone className="h-5 w-5 text-adventure-600 flex-shrink-0" />
                    <div>
                      <div className="text-earth-800 font-medium text-sm">+91 9643718789</div>
                      <div className="text-earth-500 text-xs">Mon–Fri, 9 am to 5 pm</div>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 bg-white" id="enquiry">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle title="Fill the Enquiry Form" className="mb-8" />
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-earth-700 mb-1">Full Name *</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange}
                    className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500 transition-all"
                    placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-earth-700 mb-1">Email *</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange}
                    className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500 transition-all"
                    placeholder="your.email@example.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-earth-700 mb-1">Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                    className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500 transition-all"
                    placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-earth-700 mb-1">School / Organisation</label>
                  <input type="text" name="organisation" value={form.organisation} onChange={handleChange}
                    className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500 transition-all"
                    placeholder="Organisation name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-1">Tell us about your requirements</label>
                <textarea name="message" rows={5} value={form.message} onChange={handleChange}
                  className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:border-primary-500 transition-all resize-none"
                  placeholder="Group size, preferred location, dates, accessibility needs..." />
              </div>

              {status === 'success' && (
                <div className="bg-success-100 border border-success-400 text-success-800 px-4 py-3 rounded-lg">
                  Thank you! We've received your enquiry and will be in touch shortly.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-error-100 border border-error-400 text-error-800 px-4 py-3 rounded-lg">
                  Something went wrong. Please email us at <a href="mailto:admin@treksforall.in" className="underline">admin@treksforall.in</a>
                </div>
              )}

              <button type="submit" disabled={submitting}
                className="bg-warning-400 text-earth-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-warning-500 transition-all duration-300 inline-flex items-center space-x-2 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                <Send className="h-5 w-5" />
                <span>{submitting ? 'Sending…' : 'Submit Enquiry'}</span>
              </button>
            </form>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 text-white bg-black/60 hover:bg-black/90 rounded-full p-2 transition-colors"
              aria-label="Close video"
            >
              <X className="h-7 w-7" />
            </button>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/rNAC19gJQ2I?autoplay=1"
                title="Amazon India's inclusive camp with Treks for All"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CustomisedTripsPage;
