import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Accessibility, 
  Eye, 
  Ear, 
  Brain, 
  HandHeart,
  Users,
  Shield,
  Award,
  CheckCircle,
  Heart,
  Phone,
  Mail
} from 'lucide-react';
import VSheshRecognitionsSection from '../components/home/VSheshRecognitionsSection';

const AccessibilityPage = () => {
  const accessibilityFeatures = [
    {
      icon: Accessibility,
      title: 'Locomotor Disabilities',
      description: 'Wheelchair-accessible routes, all-terrain mobility aids, adaptive equipment, and transfer assistance',
      features: [
        'All-terrain wheelchairs and adaptive equipment',
        'Accessible camping facilities and restrooms',
        'Portable ramps and transfer assistance',
        'Modified trail routes with firm surfaces',
        'Specialized transport vehicles'
      ],
      color: 'primary'
    },
    {
      icon: Eye,
      title: 'Visual Impairments',
      description: 'Audio descriptions, tactile guides, sighted guide training, and enhanced safety protocols',
      features: [
        'Trained sighted guides for one-on-one support',
        'Detailed audio descriptions of surroundings',
        'Tactile trail markers and rope guides',
        'Guide dog accommodation and support',
        'Enhanced verbal communication systems'
      ],
      color: 'success'
    },
    {
      icon: Ear,
      title: 'Hearing Impairments',
      description: 'Sign language interpretation, visual communication systems, and vibrating alert devices',
      features: [
        'Certified sign language interpreters',
        'Visual emergency signals and communication',
        'Written safety briefings and materials',
        'Vibrating alert systems for emergencies',
        'Hearing aid compatible equipment'
      ],
      color: 'adventure'
    },
    {
      icon: Brain,
      title: 'Neurodivergent Support',
      description: 'Sensory-friendly environments, flexible scheduling, and specialized communication approaches',
      features: [
        'Sensory break areas and quiet spaces',
        'Flexible itineraries and pacing',
        'Visual schedules and reminder systems',
        'Trained staff in neurodiversity support',
        'Modified activity approaches'
      ],
      color: 'warning'
    }
  ];

  const inclusionPrinciples = [
    {
      icon: HandHeart,
      title: 'Empathy First',
      description: 'Every interaction begins with understanding and respect for individual experiences and needs'
    },
    {
      icon: Users,
      title: 'Nothing About Us, Without Us',
      description: 'People with disabilities are involved in all stages of program design and evaluation'
    },
    {
      icon: Shield,
      title: 'Safety Without Compromise',
      description: 'Enhanced safety protocols that never sacrifice adventure for accommodation'
    },
    {
      icon: Heart,
      title: 'Authentic Experiences',
      description: 'Real adventures, real challenges, real achievements - not watered-down alternatives'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: 'bg-primary-50 border-primary-200 text-primary-800',
      success: 'bg-success-50 border-success-200 text-success-800',
      adventure: 'bg-adventure-50 border-adventure-200 text-adventure-800',
      warning: 'bg-warning-50 border-warning-200 text-warning-800'
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <div className="pt-20 md:pt-28 min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="bg-white border-b border-earth-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/about"
            className="inline-flex items-center space-x-2 text-earth-600 hover:text-adventure-600 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to About</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-[#1a2e35] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 15c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15zm0 5c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Accessibility className="h-8 w-8 text-[#e0aa04]" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Our Accessibility Commitment</h1>
            </div>
            <p className="text-xl text-[#a3d7db] max-w-3xl ml-0">
              Breaking barriers, building bridges, and proving that adventure truly knows no limits
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-12 md:py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c646c] mb-6">
              Comprehensive Accessibility Support
            </h2>
            <p className="text-lg text-[#377d87] max-w-3xl ml-0">
              Our adventures are designed with universal access principles, ensuring meaningful participation for all abilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {accessibilityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 border border-[#d1ebed]"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-[#fef3d1] rounded-xl w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-[#e0aa04]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2c646c]">{feature.title}</h3>
                      <p className="text-earth-600">{feature.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-success-600 mt-0.5 flex-shrink-0" />
                        <span className="text-earth-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inclusion Principles */}
      <section className="py-12 md:py-20 bg-[#1a2e35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Inclusion Principles
            </h2>
            <p className="text-lg text-[#a3d7db] max-w-3xl ml-0">
              The core values that guide every decision we make and every adventure we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {inclusionPrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-left"
                >
                  <div className="bg-[#e0aa04] rounded-xl w-14 h-14 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-7 w-7 md:h-10 md:w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-[#a3d7db] leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Accessibility Team */}
      <section className="py-16 bg-[#e8f5f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="border-l-[5px] border-[#e0aa04] pl-4 mb-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] text-[#e0aa04]" style={{ fontWeight: 700 }}>
                Questions About Accessibility?
              </h2>
            </div>
            <p className="text-lg text-[#377d87] mb-8 max-w-2xl ml-0">
              Our accessibility specialists are here to discuss your specific needs and create the perfect adventure experience for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <a
                href="tel:+919876543210"
                className="bg-[#e0aa04] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d9a513] transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Accessibility Support</span>
              </a>
              <Link
                to="/contact"
                className="border-2 border-[#377d87] text-[#2c646c] px-8 py-4 rounded-xl font-semibold hover:bg-[#d1ebed] transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Send Message</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <VSheshRecognitionsSection />
    </div>
  );
};

export default AccessibilityPage;
