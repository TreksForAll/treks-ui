import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';

const FAQPreview = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What outdoor experiences does Treks For All offer?',
      answer: '<ul class="list-disc pl-5 space-y-2"><li><strong>Inclusive Treks</strong> - Easy to moderate treks designed for everyone—supported by trained guides, adaptive equipment, flexible pacing, and fully inclusive campsite arrangements.</li><li><strong>Inclusive Camping Experiences</strong> - Multi-night camps with river expeditions (rafting, kayaking), high- and low-rope courses, wall climbing, and more. Camps feature expedition-grade tents, strong safety practices, and the magic of bonfires, group activities, and reflective circles.</li><li><strong>Immersive Day Adventures</strong> - Gentle, low-intensity outdoor experiences such as nature trails, sensory immersion, birdwatching and adaptive rock climbing. Perfect for beginners, older adults, families, or anyone seeking a slower pace.</li></ul>'
    },
    {
      question: 'Who can join these experiences?',
      answer: 'Treks for All is designed to give everyone the chance to experience the outdoors, regardless of ability or background. Our treks are open to people with or without disabilities, across all fitness levels, and from every age group. The itineraries are inclusive, flexible, and thoughtfully crafted to accommodate diverse needs.'
    },
    {
      question: 'Is Treks For All only focused on disability inclusion?',
      answer: 'Not at all—disability is just one aspect of diversity at Treks for All. Our programs are designed to include anyone who is often excluded from outdoor experiences, including caregivers, children from underprivileged communities, older adults, individuals with chronic illnesses, and those with limited access to recreation. Our aim is to create meaningful outdoor experiences where everyone - regardless of ability, background, or circumstance—can safely and fully enjoy nature.'
    },
    {
      question: 'What should my fitness level be for a trek?',
      answer: 'Guests must be in good health and possess reasonable physical fitness. Treks require a slightly higher fitness level than our camps, as they involve longer walking hours, uneven terrain, and changing weather conditions. It is essential that any existing medical conditions are communicated to us well in advance of departure. The final decision regarding participation rests solely with the Treks for All team.'
    },
    {
      question: 'What medical support is available during the trek/camp?',
      answer: 'Our founding partners – team Aquattera is trained in first aid, basic emergency care, including CPR. They can monitor participants for signs of dehydration, fatigue, altitude sickness, and other health concerns, and assist with prescribed medication routines if informed in advance. Staff are also skilled in safe evacuation procedures, including the use of stretchers or wheelchairs, and in coordinating with local medical services when needed.<br/><br/>While the team is well-prepared for emergencies, please note that remote locations may limit access to full medical facilities, and any medical or evacuation expenses will be the responsibility of the participant.'
    },
    {
      question: 'Is the team trained to support people with diverse needs?',
      answer: 'Our founding partners—v-shesh, an expert in disability inclusion, and Aquaterra, a leader in adventure tourism—bring together a strong blend of technical expertise and soft-skills training that prepares our guides exceptionally well. The TFA team is fully trained and certified to support guests with diverse requirements, ensuring safety, dignity, and effective assistance on every trail or expedition. We maintain low guide-to-participant ratios, carry specialised medical equipment, and follow evacuation protocols adapted for different mobility and support needs. Our guides are also trained in disability inclusion, inclusive communication, and are sensitive to individual needs. Additionally, each guest is paired with an empathetic buddy who offers companionship, comfort, and on-trail support—enhancing both safety and the overall trekking experience.'
    },
    {
      question: 'What kind of assistance is provided for people with specific needs?',
      answer: 'Before each adventure, our team connects with every guest to understand their specific needs, preferences, and comfort levels. While wilderness settings naturally come with accessibility challenges, we take practical steps to reduce obstacles wherever possible. Activities are tailored, pacing and routes are adjusted, and one-on-one support is provided when needed. Whether it\'s mobility assistance, guided navigation, sensory cues, or personalized itinerary adjustments, our focus is on creating a safe, inclusive, and fulfilling outdoor experience for everyone. '
    },
    {
      question: 'Are the trails or paths wheelchair-friendly or suitable for limited mobility?',
      answer: 'Currently, our treks are not fully accessible for wheelchair users. While we are working to make campsites more accessible, this is an ongoing process. Please reach out to our team at <a href="mailto:admin@treksforall.in" class="text-adventure-600 hover:text-adventure-700 underline">admin@treksforall.in</a> to learn about the accessibility provisions in place and the support we can offer to help you join us!'
    },
    {
      question: 'What is the buddy system, and do buddies need to pay?',
      answer: 'The buddy system is built on balanced support, dignity, and shared experience. Buddies assist while respecting each participant\'s independence, stepping in only when needed or requested. By knowing when to help and when to step back, buddies create a respectful, empathetic environment where everyone can explore the outdoors with confidence.<br/><br/>Being a buddy does not mean giving up your own experience; buddies participate fully in the adventure and simply journey alongside the person they support. They also pay like any other participant, making the role one of shared responsibility, companionship, and inclusive enjoyment of nature.'
    },
    {
      question: 'Why do Treks for All experiences cost more than regular adventure trips?',
      answer: 'Because no one else offers what we do. We are the only organisation in India that designs and delivers truly inclusive outdoor experiences for people with diverse needs — without compromise. What you\'re actually paying for:<br/><br/><strong>Safety First:</strong> Trained teams, rigorous protocols, top-grade gear, and strong emergency response systems.<br/><br/><strong>Unparalleled Comfort:</strong> Delicious meals, expedition-quality tents (the same grade used at Everest Base Camp), and unmatched hospitality.<br/><br/><strong>Mindfully Designed Experiences:</strong> This is not just walking from one campsite to another — our trek leaders are trained facilitators who curate meaningful activities to help you connect with nature, the group, and yourself.<br/><br/><strong>Inclusive by Design:</strong> Personalised pacing, adaptive support, and pre-trek readiness tailored to each participant\'s mobility, sensory, or medical needs.<br/><br/><strong>Responsible & Sustainable:</strong> High hygiene standards, bio-toilets, and practices that ensure we leave no trace.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#e8f5f6]/30">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <SectionTitle
            title="FAQs"
            subtitle="FREQUENTLY ASKED QUESTIONS"
            align="left"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-12 items-start">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start justify-between text-left focus:outline-none group p-5"
              >
                <span className="text-sm sm:text-base font-medium text-earth-800 pr-3 sm:pr-4 group-hover:text-[#377d87] transition-colors">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-lg bg-[#fef3d1] flex items-center justify-center text-[#e0aa04] group-hover:bg-[#e0aa04] group-hover:text-white transition-colors duration-300">
                      {openIndex === index ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </div>
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-earth-600 leading-snug sm:leading-relaxed text-xs sm:text-sm border-t border-earth-100 pt-2 sm:pt-3" dangerouslySetInnerHTML={{ __html: faq.answer }}>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <Link
            to="/faqs"
            className="inline-block bg-[#e0aa04] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#e5a800] transition-all duration-300 transform hover:scale-105"
          >
            View More FAQs
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQPreview;
