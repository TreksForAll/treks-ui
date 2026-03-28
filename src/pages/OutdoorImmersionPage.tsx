import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Instagram, Facebook, Send } from 'lucide-react';
import SEO from '../components/ui/SEO';
import SectionTitle from '../components/ui/SectionTitle';
import { submitForm } from '../lib/xano';

const OutdoorImmersionPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  const [form, setForm] = useState({ name: '', email: '', city: '', message: '' });
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
        formType: 'immersion',
        name: form.name,
        email: form.email,
        organisation: form.city,
        message: form.message,
      });
      if (result.success) {
        setStatus('success');
        setForm({ name: '', email: '', city: '', message: '' });
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
        title="Outdoor Immersion Programs – Treks for All | Accessible Trail Walks & Day Adventures"
        description="Treks for All creates accessible outdoor immersion experiences — trail walks and single day adventures for people with disabilities and their allies, thoughtfully curated for safe and enjoyable participation."
        keywords="outdoor immersion programs, accessible trail walks, inclusive day adventures, disability outdoor walks, trail walk community, accessible nature experiences"
        url="https://treksforall.in/outdoor-immersions"
      />

      {/* Hero with parallax */}
      <section ref={heroRef} className="relative min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y }}>
          <img
            src="/immersions/Trail_walk_Mangar.jpeg"
            alt="Trail walk at Mangar"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <SectionTitle
              title="Outdoor Immersion Programs"
              subtitle="Gentler beginnings into the outdoors"
              align="left"
              light={true}
              className="mb-5"
            />
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-[#f0f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left – description */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#e0aa04]"
              >
                <p className="text-earth-700 leading-relaxed mb-6">
                  At Treks for All, we believe engaging with the outdoors starts with gentler beginnings closer home. We want to create spaces where people with disabilities and their allies can connect, explore, and enjoy the outdoors safely and comfortably.
                </p>
                <p className="text-earth-700 leading-relaxed">
                  The intention behind each gathering is to ensure it is thoughtfully curated to ensure participation is accessible, enjoyable, and engaging for everyone.
                </p>
              </motion.div>

              {/* Social media follow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-[#18363a] rounded-2xl p-8 shadow-lg"
              >
                <SectionTitle title="Stay Updated" align="left" className="mb-6" light={true} />
                <p className="text-white/80 leading-relaxed mb-6">
                  Follow us on our social media to stay updated on our walks and single day adventures!
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.instagram.com/treks.for.all/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>Follow on Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61576013662188"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    <Facebook className="h-5 w-5" />
                    <span>Follow on Facebook</span>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right – contact */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#18363a] rounded-2xl p-6 border border-[#2a5a63] shadow-lg"
              >
                <h3 className="text-lmd text-[#e0aa04] mb-2">Write to us to organise a TFA immersion in your city.</h3>
                <p className="text-white/70 text-sm mb-5">
                  
                </p>
                <a
                  href="mailto:admin@treksforall.in"
                  className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-colors duration-300"
                >
                  <Mail className="h-5 w-5 text-[#e0aa04] flex-shrink-0" />
                  <span className="text-white font-medium text-sm">admin@treksforall.in</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 bg-[#18363a]" id="enquiry">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle title="Write to Us" align="left" light={true} className="mb-2" />
              <p className="text-white/70 mb-8">Interested in bringing a TFA trail walk to your community? Fill out the form below.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#e0aa04] transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#e0aa04] transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#e0aa04] transition-all"
                    placeholder="Your city"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Tell us about your community</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#e0aa04] transition-all resize-none"
                    placeholder="Tell us about your community, the number of participants, any accessibility requirements..."
                  />
                </div>

                {status === 'success' && (
                  <div className="bg-[#e0aa04]/20 border border-[#e0aa04]/50 text-[#e0aa04] px-4 py-3 rounded-lg">
                    Thank you! We've received your message and will be in touch shortly.
                  </div>
                )}
                {status === 'error' && (
                  <div className="bg-red-900/30 border border-red-500/40 text-red-300 px-4 py-3 rounded-lg">
                    Something went wrong. Please email us at{' '}
                    <a href="mailto:admin@treksforall.in" className="underline">admin@treksforall.in</a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-[#e0aa04] text-[#18363a] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#c99903] transition-all duration-300 inline-flex items-center space-x-2 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                  <span>{submitting ? 'Sending…' : 'Send Message'}</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OutdoorImmersionPage;
