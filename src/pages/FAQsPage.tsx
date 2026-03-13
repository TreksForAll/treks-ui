import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Accessibility,
  Eye,
  Ear,
  Brain,
  Phone,
  Mail,
  Users,
  Shield,
  Target,
  Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';

const FAQsPage = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const faqSections = [
    {
      id: 'general',
      title: 'General',
      icon: HelpCircle,
      color: 'blue',
      faqs: [
        {
          question: 'How do I register?',
          answer: 'You can register by visiting our Adventures page and signing up for any upcoming trip using the link provided. Once you\'ve registered, our team will get in touch with you to understand your needs, preferences, and any adaptive equipment required so we can plan the perfect adventure for you.'
        },
        {
          question: 'How far in advance should I book?',
          answer: 'We recommend booking your adventure 4–6 weeks in advance so we can complete accessibility checks and prepare any adaptive equipment you may need. We also try our best to accommodate short-notice requests, depending on availability and resources.\n\nFor outstation travel, please book refundable tickets, as plans may shift due to weather or unforeseen circumstances. Travel costs cannot be refunded under any circumstances.'
        },
        {
          question: 'What is the cancellation policy?',
          answer: 'If you cancel your booking, you will receive a credit note for the paid amount. This credit can be redeemed for any future Treks for All adventure within the validity period.'
        },
        {
          question: 'Do I need prior trekking experience?',
          answer: 'No prior experience is needed. Our team will guide and support you through every step, from preparation to completion.'
        },
        {
          question: 'How should a first-time adventurer prepare for their trek?',
          answer: 'We love it when someone reaches out to us for their first journey into the outdoors! We strongly advise our adventurers to be physically fit and start working out in the month building up to the adventure. This can be any kind of movement or physical activity that you enjoy- quick jogs around the park, a leisurely evening walk, or even regular yoga sessions.'
        },
        {
          question: 'Can I join as a solo traveller?',
          answer: 'We welcome both solo travellers and groups! Whether you arrive alone or with friends, you\'ll almost certainly leave with many more. Our only requirement is that all non-disabled guests remain open to being a buddy to a guest with a disability—sharing the tent and trail, and helping create a supportive, inclusive experience for everyone.'
        },
        {
          question: 'How many guests share a tent?',
          answer: 'On all our treks and camps, two trekkers share a tent, ensuring comfort while fostering companionship and inclusivity. If you prefer single accommodation, you must pay a single supplement fee, which can shared with you on request.'
        },
        {
          question: 'What toilet and bathing facilities are available at campsites and along the trek?',
          answer: '<strong>At Camps:</strong> Our campsites have fixed toilet units equipped with both Indian and Western toilets, along with basic bathing facilities for added comfort during your stay.\n\n<strong>On Treks:</strong> At every campsite along the trail, we set up portable toilet tents. Each tent includes:\n• A deep pit with a portable Western-style seat\n• A dry-toilet system using toilet paper (no water)\n• A mound of soil and shovel to cover waste\n• Room freshener for added hygiene\n\nDry toilets are the most environmentally friendly and hygienic option in the wilderness, ensuring a clean and safe experience for all trekkers.'
        },
        {
          question: 'What meals and snacks are provided during the trek and camp?',
          answer: 'We provide healthy, nutritious meals three times a day, along with snacks in between and sometimes pocket snacks for the trail. You\'ll enjoy delicious cuisine, including local specialties and, where possible, non-vegetarian options. There will also be plenty of hot chai and soup to keep you warm and energized throughout your trek.'
        },
        {
          question: 'Is the water on the trek and camp safe to drink?',
          answer: 'Trekking trails are planned keeping in mind water sources nearby. Additionally, our team always carries filtration systems and filters water at every point to ensure that it is safe to drink. However, if you wish, you can also carry a personal water filter or water purification tablets for extra peace of mind.'
        },
        {
          question: 'What should I bring for the adventure?',
          answer: 'A detailed packing list will be shared before your trek or camp. Essentials usually include weather-appropriate clothing, personal medication, and basic outdoor gear depending on the activities you wish to participate in.'
        }
      ]
    },
    {
      id: 'locomotor',
      title: 'Locomotor Disability',
      icon: Accessibility,
      color: 'teal',
      faqs: [
        {
          question: 'Can I join if I use a prosthetic limb/crutches/calipers?',
          answer: 'Absolutely! Please share:\n• Type of amputation or condition (e.g., polio)\n• Mobility aid(s) used\n• Need for assistance – in the tent\n• Other accommodation needs'
        },
        {
          question: 'What kind of support is offered for persons with locomotor disability?',
          answer: 'You can choose bus travel without wearing your prosthetic limb or calliper if that is more comfortable for long journeys. Support will be provided while boarding and deboarding the bus to ensure safety and ease.\n\nIf you want to take a break and remove your mobility aid temporarily, our team will ensure you do so in comfort and privacy even while on trail.\n\nIf you prefer using crutches at the campsite or while on trail, instead of your artificial limb, we can help carry your crutches so that they\'re available when you need them. This helps reduce stress on your limb and ensures ease of movement around camp.\n\nA knowledgeable guide trained to support diverse needs / empathetic buddy will be with you throughout on the trail.'
        },
        {
          question: 'As a person with a locomotor condition, what if I cannot move on the trail or have a fall during the trek?',
          answer: 'If your condition prevents you from participating safely, we recommend not attempting the trek, as your safety is our top priority. You can contact our team at admin@treksforall.in to explore alternative ways to engage with our adventures or plan for future treks when feasible.\n\nIf an issue arises on the trail, we provide horses for support or evacuation, ensuring that you can continue safely or be assisted without compromising your well-being.'
        },
        {
          question: 'Any disability specific preparation tip other than the details shared?',
          answer: '1. Build stamina with daily walks, stretches and light strength exercises. Practice walking on stairs and uneven surfaces like gravel or grass to prepare for trekking terrain\n2. Ensure your prosthetic limb, calipers, or crutches are in good working condition\n3. Carrying Anti-Rash Cream is especially important for prosthetic users or those using calipers to prevent skin irritation due to sweat and friction.\n4. Purchase / rent well fitted shoes well in advance so that you can get comfortable with them before the trek'
        }
      ]
    },
    {
      id: 'vision',
      title: 'Vision Impairment',
      icon: Eye,
      color: 'green',
      faqs: [
        {
          question: 'Are camp activities and treks suitable for Persons with Vision Impairment?',
          answer: 'Absolutely! Please share:\n• Level of your vision loss? (Totally blind / Low vision)\n• Mobility aid(s) used\n• Need for sighted guidance – in the tent\n• Other accommodation needs'
        },
        {
          question: 'What kind of support is offered for Persons with Vision impairment?',
          answer: 'A sensitive and knowledgeable guide trained to support diverse needs.\n\nClear verbal instructions for navigating the trail and campsite.\n\nHelp with orientation when needed.\n\nSupport in packing, unpacking, and organizing belongings.\n\nA buddy to ensure safety and comfort throughout the trek.'
        },
        {
          question: 'Any disability specific preparation tip other than the details shared?',
          answer: '1. Build stamina with daily walks, stretches, and light strength exercises. Practice walking on stairs and uneven surfaces like gravel or grass to prepare for trekking terrain\n2. Use your cane to navigate and understand outdoor terrain, for ex steps, slopes, and surface changes\n3. Carry UV-protective sunglasses to reduce eye irritation from dust and light\n4. Use a checklist and assign fixed spots in your bag for easy access. Count your items while packing and on arrival to ensure nothing is left behind'
        }
      ]
    },
    {
      id: 'hearing',
      title: 'Deaf/Hard of Hearing',
      icon: Ear,
      color: 'orange',
      faqs: [
        {
          question: 'Are the treks and camp activities suitable for adventurers with hearing impairment/Deafness?',
          answer: 'Absolutely! Please share:\n• Level of hearing loss – partial hearing/ hard of hearing, Deaf\n• Preferred method of communication\n• Use any hearing devices or assistive technology\n• Need for assistance – in the tent / on the trail\n• Other accommodation needs\n• Previous experience on trails'
        },
        {
          question: 'What kind of support is offered for Persons with Hearing Impairment/Deafness?',
          answer: 'A sensitive and knowledgeable guide trained to support diverse needs.\n\nBuddies who can use sign language, lip reading, writing, or combinations.\n\nA buddy to ensure safety and comfort throughout the trek.'
        },
        {
          question: 'Any disability specific preparation tip other than the details shared?',
          answer: '1. If you use hearing aids or cochlear implants, carry spare batteries and a waterproof power backup.\n2. Stay within the visual line of the group. This ensures you don\'t miss important signals or direction changes.\n3. Carry a Whistle\n4. Use a waterproof pouch for Hearing Devices (If Applicable).'
        }
      ]
    },
    {
      id: 'neurodivergence',
      title: 'Neurodivergence',
      icon: Brain,
      color: 'blue',
      faqs: [
        {
          question: 'Are the treks and camp activities suitable for adventurer with neurodivergence?',
          answer: 'Absolutely! Please share:\n• Diagnosis Details\n• Sensitivities (e.g., noise, crowds, animals)\n• Preferred routines or communication preferences\n• Need for assistance – in the tent / on the trail\n• Other accommodation needs\n• Previous experience on trails'
        },
        {
          question: 'What kind of support is offered for neurodivergent adventurers?',
          answer: '1. A sensitive and knowledgeable guide trained to support neurodivergent needs.\n2. Clear, step-by-step verbal instructions for navigating the trail and campsite.\n3. Help with orientation and adjustments if needed to reduce sensory overload.\n4. A buddy to ensure safety and comfort throughout the trek.'
        },
        {
          question: 'Any disability specific preparation tip other than the details shared?',
          answer: '1. Build stamina with daily walks, stretches, and light strength exercises. Practice walking on stairs and uneven surfaces like gravel or grass to prepare for trekking terrain\n2. Set a daily routine in advance to ease into the trek with structure and confidence.'
        }
      ]
    },
    {
      id: 'buddies',
      title: 'Buddies',
      icon: Users,
      color: 'green',
      faqs: [
        {
          question: 'What are the pre-requisites for being a buddy?',
          answer: '<strong>Physical Fitness:</strong>\n• Preferably has prior trekking experience\n• Able to walk long distances on uneven or hilly terrain\n• Has the stamina to remain alert and helpful throughout the trek duration\n\n<strong>Empathetic & Calm Demeanour:</strong>\n• Patient and a good listener\n• Doesn\'t panic in unpredictable situations\n• Creates a safe, non-judgmental space for the person they\'re paired with'
        },
        {
          question: 'Is past experience of working with Persons with disability a must have?',
          answer: 'While basic knowledge of disability is a plus, it is not mandatory.\n\n<strong>What matters most is the willingness to learn and experience something new:</strong>\n• Openness to attending a basic orientation or sensitization session before the trek\n• Willingness to learn about your partners specific needs\n• Ability to adapt your assistance based on individual preferences and comfort\n\n<strong>Past experience in following may help:</strong>\n• An understanding of common needs of persons with disabilities (such as those with locomotor, vision, neurodivergent, or Deaf experiences)\n• Use of inclusive and empathetic language'
        },
        {
          question: 'What should I be mindful of as a Buddy?',
          answer: '<strong>1. Being an enabler and not a caregiver</strong>\nBe supportive, aware, and helpful—offer assistance when needed, but avoid over-involvement.\nThe goal is to enable independence, not create emotional or physical dependence.\nRespect privacy and boundaries—be available but not be intrusive\n\n<strong>2. Create space for open communication</strong>\nUnderstand and support your buddy\'s needs while respecting their autonomy. Encourage open sharing and be a steady, positive presence to build trust and confidence.\n\n<strong>3. Facilitate inclusive group interactions</strong>\nHelping participant stay connected\n\n<strong>4. Celebrate achievements equally</strong>\nRegardless of pace or method'
        },
        {
          question: 'What is my role while on the trail?',
          answer: '1. Walking beside or slightly ahead. You may need to hold hands too and help navigate difficult terrain safely (as needed).\n2. Respect their pace and preferences - Be patient. Everyone moves at a different pace or may have unique comfort zones. Let your partner set their rhythm and make choices that suit them.\n3. Monitor for signs of fatigue / distress and assist. Simple check-ins like "Need a break?" or "How\'s the pace?" show care without infringing on their independence\n4. For blind - Offer verbal or physical guidance when asked, helping in identifying obstacles, steep paths, or breaks\n5. Be alert to changing weather or trail conditions and inform the participant.'
        },
        {
          question: 'What is my role while at the campsite?',
          answer: '1. Assist with setting up and organizing the personal space of your partner (if needed)\n2. Support daily routines by checking in first before offering help—such as medication reminders, hydration, assistance to the washroom, serving food, and filling water bottles. Be vigilant about safety in the camp environment (e.g., helping navigate at night, managing flashlight or other aids).\n3. Help with any adaptive equipment or personal belongings as requested.'
        },
        {
          question: 'Can I speak to a buddy to gain more understanding?',
          answer: 'Yes, absolutely! We\'d be happy to connect you with a buddy from a previous trek upon request. In the meantime, you can also get a glimpse of a buddy\'s experience through this short <a href="https://www.instagram.com/reel/DJhC1B0B6uV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" class="text-adventure-600 hover:text-adventure-700 underline" target="_blank" rel="noopener noreferrer">Instagram reel</a>.\n\nFeel free to let us know, and we\'ll set it up for you!'
        }
      ]
    }
  ];

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 text-blue-900',
      teal: 'bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200 text-teal-900',
      green: 'bg-gradient-to-br from-green-50 to-green-100 border-success-200 text-green-900',
      orange: 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 text-orange-900'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: 'text-adventure-600',
      teal: 'text-teal-600',
      green: 'text-green-600',
      orange: 'text-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="pt-28 min-h-screen bg-white">
      <SEO
        title="FAQs - Treks for All | Accessible adventure questions answered"
        description="Find answers to frequently asked questions about accessible trekking, inclusive camping, and adventure travel with Treks for All. Get detailed information about accessibility features, safety protocols, equipment, disability-specific support, and what to expect on your inclusive outdoor adventure."
        keywords="accessible trekking FAQs, inclusive adventure questions, disability travel questions, accessible camping FAQ, adaptive adventure information"
        image="https://treksforall.in/Home-Accessible.webp"
        url="https://treksforall.in/faqs"
      />

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left lg:text-left"
            >
              <div className="flex flex-col items-start mb-6 w-fit">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] mb-4 bg-gradient-to-b from-[#3b3939] to-[#929192] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
                  Frequently Asked Questions
                </h1>
                <div className="w-full h-0.5 mb-4" style={{ backgroundColor: '#f3b815' }}></div>
              </div>
              <p className="text-lg text-earth-600">
                Everything you need to know about accessible adventures with Treks for All
              </p>
            </motion.div>

            {/* Right: Quick Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-earth-50 rounded-2xl p-6 border border-earth-200"
            >
              <h3 className="text-lg font-bold text-earth-800 mb-4 flex items-center space-x-2">
                <Compass className="h-5 w-5 text-earth-700" />
                <span>Need Direct Support?</span>
              </h3>
              <p className="text-earth-600 mb-4 text-sm">
                Our accessibility specialists are available 24/7 for personalized assistance
              </p>
              <div className="space-y-3">
                <Link
                  to="/contact"
                  className="flex items-center space-x-3 p-3 bg-white rounded-xl hover:bg-earth-100 transition-colors duration-300 border border-earth-200"
                >
                  <Mail className="h-4 w-4 text-earth-700" />
                  <div>
                    <div className="font-medium text-earth-800 text-sm">Send Message</div>
                    <div className="text-earth-600 text-xs">Detailed inquiry</div>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Grid Layout */}
      <section className="py-20 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* FAQ Sections - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqSections.map((section, sectionIndex) => {
              const IconComponent = section.icon;

              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-earth-100"
                >
                  <div className="p-6 bg-earth-50 border-l-4 border-l-earth-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white p-2 rounded-xl shadow-md border border-earth-200">
                          <IconComponent className="h-5 w-5 text-earth-700" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-earth-800">{section.title}</h3>
                          <span className="text-sm text-earth-600">({section.faqs.length} question{section.faqs.length > 1 ? 's' : ''})</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-2 bg-white">
                    {section.faqs.map((faq, faqIndex) => {
                      const faqId = `${section.id}-${faqIndex}`;
                      const isOpen = openFAQ === faqId;

                      return (
                        <div
                          key={faqIndex}
                          className="border-b border-slate-200 py-4"
                        >
                          <button
                            onClick={() => toggleFAQ(faqId)}
                            className="w-full flex items-start justify-between text-left focus:outline-none group"
                          >
                            <span className="text-base font-semibold text-earth-900 pr-4 group-hover:text-earth-700 transition-colors">
                              {faq.question}
                            </span>
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-6 h-6 rounded-full bg-warning-400 flex items-center justify-center text-earth-900 text-sm font-bold">
                                {isOpen ? '−' : '+'}
                              </div>
                            </div>
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="pt-3 text-slate-700 leading-relaxed text-sm whitespace-pre-line" dangerouslySetInnerHTML={{ __html: faq.answer }}>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-left bg-earth-50 rounded-2xl p-8 border border-earth-200"
          >
            <p className="text-earth-700 text-lg">
              Still have questions? Please reach out to us at{' '}
              <a
                href="mailto:admin@treksforall.in"
                className="text-earth-900 hover:text-earth-800 underline font-semibold"
              >
                admin@treksforall.in
              </a>
              . Our team will respond to you within 2-3 business days.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQsPage;
