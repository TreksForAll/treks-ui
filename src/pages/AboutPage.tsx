import { motion, useScroll, useTransform } from 'framer-motion';
import { Mountain, Users, Award, Globe, Leaf, Shield, Accessibility, HandHeart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import VSheshRecognitionsSection from '../components/home/VSheshRecognitionsSection';
import SectionTitle from '../components/ui/SectionTitle';
import SEO from '../components/ui/SEO';

const AboutPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const milestones = [
    { year: 'February 2025', title: 'The Seed of an Idea', description: 'Aquaterra\'s 30th Anniversary Dinner - The seed of an idea was sown' },
    { year: 'March 2025', title: 'Treks for All is Born', description: 'Pankaj and Rashi met at a café - Treks for All was born' },
    { year: 'April 2025', title: 'Partnership Formed', description: 'Aquaterra came on board as the implementing partner' },
    { year: 'May 2025', title: 'Pilot Trek to Dayara Bugyal', description: 'A milestone in inclusive adventure - 16 participants, 9 with disabilities, 6 unique disabilities (including vision impairment, autism, locomotor disability and albinism)' },
    { year: 'June 2025', title: 'Second Trek to Dayara Bugyal', description: '18 participants, 9 with disabilities, 6 types of disability (Vision Impairment, Autism, Amputees, hearing impairment), 4 first-time guests with hearing impairment' },
    { year: 'September 2025', title: 'First Inclusive Camp', description: 'First Inclusive Camp at Atali Ganga' },
    { year: 'November 2025', title: 'Introducing River Rafting', description: 'Introducing river rafting to persons with disability - Another first, expanding the possibilities of inclusive adventure' }
  ];


  return (
    <div className="pt-20 md:pt-28">
      <SEO
        title="Our story - Treks for All | Inclusive adventure travel"
        description="Born from a vision of inclusion, three mission-driven organizations came together to make outdoor adventure accessible to all. Discover how v-shesh, Aquaterra Adventures, and Metores Trust joined forces to create India's leading inclusive adventure company, breaking barriers one trek at a time."
        keywords="accessible adventure story, inclusive tourism India, v-shesh, Aquaterra Adventures, Metores Trust, disability inclusion, accessible outdoor adventure"
        image="https://treksforall.in/our-story/story.webp"
        url="https://treksforall.in/about"
      />
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] flex items-end overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/our-story/story.webp')`,
            y
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-left text-white px-4 z-10 max-w-7xl mx-auto w-full pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle
              title="Our Story"
              subtitle="Born from a Vision of Inclusion"
              align="left"
              light={true}
              className="mb-4"
            />
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionTitle title="Our Story" align="left" className="mb-4" />
              <div className="prose prose-lg text-earth-600">
                <p className="mb-6">
                  <strong>It all began with a simple belief: adventure should belong to everyone.</strong>
                </p>
                <p className="mb-6">
                  For too long, people with disabilities, caregivers, and other marginalised groups have been left out of the outdoors simply because of the risk and effort involved. Three mission-driven organisations—Aquaterra Adventures, Metores Trust, and v-shesh—came together to change that narrative and make outdoor adventure accessible to all, regardless of disability or limitations.
                </p>
                <p className="mb-6">
                  Our first pilot trek in May 2025 proved what many thought impossible. For the first time in India, a team representing six distinct disabilities stood together on a summit. With 6 blind trekkers, one boy with autism, two amputees, and four buddies, this ascent marked a milestone in inclusive adventure.
                </p>
                <p className="mb-6">
                  From that moment, there was no looking back. Treks For All has since been offering safe, curated outdoor experiences that welcome people of all abilities—no matter the limitation.
                </p>
                <h3 className="text-2xl font-bold text-earth-800 mb-4 mt-8">
                  Why the Outdoors?
                </h3>
                <p className="mb-6">
                  Because nature heals, empowers, and transforms. The outdoors builds confidence, connection, and a deep sense of freedom—and no one should be denied that experience because of a disability or any other barrier. With Aquaterra's 35 years of adventure expertise, trained guides, and world-class safety systems, we provide the safety and support these journeys require, making inclusive adventure possible without compromise.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4"
            >
              <div className="relative">
                <img
                  src="/our-story/tfa-our-story-landscape-01.webp"
                  alt="Treks for All inclusive adventure team"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative">
                  <img
                    src="/our-story/tfa_story_2.jpg"
                    alt="Treks for All diverse adventure team"
                    className="rounded-2xl shadow-xl w-full h-full object-cover"
                  />
                </div>
                <div className="relative col-span-2">
                  <img
                    src="/our-story/tfa_story_3.jpg"
                    alt="Treks for All inclusive expedition"
                    className="rounded-2xl shadow-xl w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#214b51]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left mb-16"
          >
            <SectionTitle title="Our Journey" align="left" light={true} className="mb-4" />
            <p className="text-lg text-[#a3d7db] max-w-3xl ml-0">
              Three organisations, one big dream, a cup of chai and Treks for All was born!
            </p>
            <p className="text-lg text-[#a3d7db] max-w-3xl ml-0 mt-4">
              Vaibhav Kala, founder of Aquaterra, after 30 years of adventure, realised there was a whole community of people who had never been taken outdoors. Shashaank Awasthi, founder of v-shesh, asked the obvious question: "Why not adventure and accessibility too?" And Pankaj Wadhwa, Director of Metores Trust and the ultimate trek addict, played matchmaker - bringing everyone together to make it happen.
            </p>
            <p className="text-lg text-[#a3d7db] max-w-3xl ml-0 mt-4">
              And just like that, between sips of chai and a few excited "what ifs," the idea for Treks for All was born, <strong className="text-[#e0aa04]">because the mountains are for everyone, and great things often start in cafés.</strong>
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile, shown on md+ */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-[#a3d7db]"></div>

            {/* Mobile Timeline Line - Left aligned */}
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-1 bg-[#a3d7db]"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:flex md:justify-start' : 'md:flex md:justify-end'
                }`}
              >
                {/* Mobile Layout */}
                <div className="md:hidden pl-12 pr-4">
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="text-base font-bold text-[#e0aa04] mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg font-bold text-earth-800 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-earth-500 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                  {/* Mobile Timeline Node */}
                  <div className="absolute left-2.5 top-6 w-4 h-4 bg-[#e0aa04] rounded-full border-4 border-white shadow-md"></div>
                </div>

                {/* Desktop Layout */}
                <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="text-lg font-bold text-[#e0aa04] mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-earth-800 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-earth-500">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Desktop Timeline Node */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-6 w-4 h-4 bg-[#e0aa04] rounded-full border-4 border-white shadow-md"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left mb-16"
          >
            <SectionTitle
              title="Onwards & Upwards"
              subtitle="The Journey Continues"
              align="left"
              className="mb-4"
            />
            <p className="text-lg text-earth-600 max-w-2xl ml-0">
              With every trek, camp, and new explorer, we're expanding the possibilities of adventure, one inclusive step at a time.
            </p>
          </motion.div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#f5f7fa] rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-[#fef3d1] rounded-xl p-3 mr-4">
                  <Eye className="h-8 w-8 text-[#e0aa04]" />
                </div>
                <h3 className="text-2xl font-bold text-earth-800">Vision</h3>
              </div>
              <p className="text-earth-600 leading-relaxed">
                We envision a world where adventure is universally accessible, where trekking, camping, and outdoor experiences are open to people with diverse physical, sensory, cognitive, and invisible disabilities. Our goal is to make inclusive tourism the standard—not just in India, but globally—welcoming adventurers from every corner of the world to experience the freedom, healing, and empowerment of the outdoors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#f5f7fa] rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-[#fef3d1] rounded-xl p-3 mr-4">
                  <Mountain className="h-8 w-8 text-[#e0aa04]" />
                </div>
                <h3 className="text-2xl font-bold text-earth-800">Mission</h3>
              </div>
              <p className="text-earth-600 leading-relaxed">
                To continuously explore, identify, and unlock new inclusive destinations and adventure experiences, with a commitment to making every journey accessible and inclusive for people with disabilities.
              </p>
            </motion.div>
          </div>

          {/* Our Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#1a2e35] rounded-2xl p-6 sm:p-8 md:p-12"
          >
            <SectionTitle
              title="Our Values"
              subtitle="The principles that guide every adventure we create"
              align="left"
              light={true}
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { icon: <Shield className="h-6 w-6" />, title: 'Safety', desc: 'Every experience is planned and delivered with uncompromised safety standards.' },
                { icon: <Award className="h-6 w-6" />, title: 'Quality', desc: 'High-quality adventures through expert planning, skilled teams, and best-in-class, reliable equipment.' },
                { icon: <HandHeart className="h-6 w-6" />, title: 'Dignity', desc: 'We treat every individual with respect, empathy, and equality - always.' },
                { icon: <Accessibility className="h-6 w-6" />, title: 'Accessibility', desc: 'Committed to making adventure truly accessible for people with all types of disabilities.' },
                { icon: <Users className="h-6 w-6" />, title: 'Inclusion', desc: 'Creating environments where everyone belongs, regardless of ability, background, or pace.' },
                { icon: <Leaf className="h-6 w-6" />, title: 'Affordability', desc: 'Fair and reasonable pricing without ever compromising on safety or quality.' },
                { icon: <Globe className="h-6 w-6" />, title: 'Innovation', desc: 'Continuously discover, test, and open new inclusive destinations, pushing the boundaries of accessible adventure.' },
                { icon: <Mountain className="h-6 w-6" />, title: 'Empowerment', desc: 'Every experience is designed to build confidence, independence, and a sense of achievement.' },
              ].map((value) => (
                <div key={value.title} className="flex items-start space-x-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-5 transition-colors duration-300">
                  <div className="flex-shrink-0 w-11 h-11 bg-[#e0aa04] rounded-xl flex items-center justify-center text-[#18363a]">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{value.title}</h4>
                    <p className="text-sm text-[#a3d7db] leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      <VSheshRecognitionsSection />

      {/* Call to Action */}
      <section className="py-20 bg-[#214b51]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Accessibility Champions
              </h2>
              <p className="text-lg text-[#a3d7db] max-w-2xl">
                Discover the dedicated partners and specialists who make inclusive adventure possible.
                Together, we're breaking barriers and creating opportunities for everyone.
              </p>
            </div>
            <Link
              to="/about/partners"
              className="flex-shrink-0 bg-[#e0aa04] text-[#214b51] px-8 py-4 rounded-xl font-bold hover:bg-[#e5a800] transition-all duration-300 inline-flex items-center space-x-2"
            >
              <HandHeart className="h-5 w-5" />
              <span>Meet Our Partners</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
