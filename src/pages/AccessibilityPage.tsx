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
    <div className="pt-20 min-h-screen bg-white">
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
      <section className="py-16 bg-gradient-to-br from-primary-900 via-primary-800 to-adventure-900 text-white relative overflow-hidden">
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
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Accessibility className="h-8 w-8 text-adventure-400" />
              <h1 className="text-4xl md:text-5xl font-bold">Our Accessibility Commitment</h1>
            </div>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Breaking barriers, building bridges, and proving that adventure truly knows no limits
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-6">
              Comprehensive Accessibility Support
            </h2>
            <p className="text-lg text-earth-600 max-w-3xl mx-auto">
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
                  className="bg-earth-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`${getColorClasses(feature.color)} rounded-full w-16 h-16 flex items-center justify-center`}>
                      <IconComponent className="h-8 w-8 text-earth-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-earth-800">{feature.title}</h3>
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
      <section className="py-20 bg-earth-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Inclusion Principles
            </h2>
            <p className="text-lg text-earth-200 max-w-3xl mx-auto">
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
                  className="text-center"
                >
                  <div className="bg-earth-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-10 w-10 text-adventure-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-earth-200 leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Accessibility Team */}
      <section className="py-16 bg-earth-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-6">
              Questions About Accessibility?
            </h2>
            <p className="text-lg text-earth-600 mb-8 max-w-2xl mx-auto">
              Our accessibility specialists are here to discuss your specific needs and create the perfect adventure experience for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="bg-warning-400 text-earth-900 px-8 py-4 rounded-md font-semibold hover:bg-warning-500 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Accessibility Support</span>
              </a>
              <Link
                to="/contact"
                className="border border-earth-300 text-earth-700 px-8 py-4 rounded-md font-semibold hover:bg-earth-50 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Send Message</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityPage;