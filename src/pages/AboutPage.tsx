import { motion, useScroll, useTransform } from 'framer-motion';
import { Mountain, Users, Award, Globe, Leaf, Shield, Accessibility, HandHeart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import VSheshRecognitionsSection from '../components/home/VSheshRecognitionsSection';
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
    <div className="pt-28">
      <SEO
        title="Our story - Treks for All | Inclusive adventure travel"
        description="Born from a vision of inclusion, three mission-driven organizations came together to make outdoor adventure accessible to all. Discover how v-shesh, Aquaterra Adventures, and Metores Trust joined forces to create India's leading inclusive adventure company, breaking barriers one trek at a time."
        keywords="accessible adventure story, inclusive tourism India, v-shesh, Aquaterra Adventures, Metores Trust, disability inclusion, accessible outdoor adventure"
        image="https://treksforall.in/story.webp"
        url="https://treksforall.in/about"
      />
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/story.webp')`,
            y
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative text-left text-white px-4 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl ml-0"
          >
            Born from a Vision of Inclusion
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-start mb-6 w-fit">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] mb-4 bg-gradient-to-b from-[#3b3939] to-[#929192] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
                  Our Story
                </h2>
                <div className="w-full h-0.5 mb-4" style={{ backgroundColor: '#f3b815' }}></div>
              </div>
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
                  src="/tfa-our-story-landscape-01.webp"
                  alt="Treks for All inclusive adventure team"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative">
                  <img
                    src="/tfa-ourstory-vertical.webp"
                    alt="Treks for All diverse adventure team"
                    className="rounded-2xl shadow-xl w-full h-full object-cover"
                  />
                </div>
                <div className="relative col-span-2">
                  <img
                    src="/tfa-our-story-landscape-02.webp"
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
      <section className="py-20 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left mb-16"
          >
            <div className="flex flex-col items-start mb-6 w-fit">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] mb-4 bg-gradient-to-b from-[#3b3939] to-[#929192] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
                Our Journey
              </h2>
              <div className="w-full h-0.5 mb-4" style={{ backgroundColor: '#f3b815' }}></div>
            </div>
            <p className="text-lg text-earth-600 max-w-3xl ml-0">
              Three organisations, one big dream, a cup of chai and Treks for All was born!
            </p>
            <p className="text-lg text-earth-600 max-w-3xl ml-0 mt-4">
              Vaibhav Kala, founder of Aquaterra, after 30 years of adventure, realised there was a whole community of people who had never been taken outdoors. Shashaank Awasthi, founder of v-shesh, asked the obvious question: "Why not adventure and accessibility too?" And Pankaj Wadhwa, Director of Metores Trust and the ultimate trek addict, played matchmaker - bringing everyone together to make it happen.
            </p>
            <p className="text-lg text-earth-600 max-w-3xl ml-0 mt-4">
              And just like that, between sips of chai and a few excited "what ifs," the idea for Treks for All was born, because the mountains are for everyone, and great things often start in cafés.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile, shown on md+ */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-primary-200"></div>

            {/* Mobile Timeline Line - Left aligned */}
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-1 bg-primary-200"></div>

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
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-xl font-bold text-adventure-500 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg font-bold text-earth-800 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-earth-600 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                  {/* Mobile Timeline Node */}
                  <div className="absolute left-2.5 top-6 w-4 h-4 bg-adventure-500 rounded-full border-4 border-white shadow-md"></div>
                </div>

                {/* Desktop Layout */}
                <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-2xl font-bold text-adventure-500 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-earth-800 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-earth-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Desktop Timeline Node */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-6 w-4 h-4 bg-adventure-500 rounded-full border-4 border-white shadow-md"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left mb-16"
          >
            <div className="flex flex-col items-start mb-6">
              <div className="w-fit flex flex-col">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] mb-4 bg-gradient-to-b from-[#3b3939] to-[#929192] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
                  Onwards & Upwards
                </h2>
                <div className="w-full h-0.5 mb-4" style={{ backgroundColor: '#f3b815' }}></div>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-earth-600 font-semibold uppercase" style={{ fontWeight: 600 }}>
                The Journey Continues
              </p>
            </div>
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
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 rounded-full p-3 mr-4">
                  <Eye className="h-8 w-8 text-primary-600" />
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
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="bg-adventure-100 rounded-full p-3 mr-4">
                  <Mountain className="h-8 w-8 text-adventure-600" />
                </div>
                <h3 className="text-2xl font-bold text-earth-800">Mission</h3>
              </div>
              <p className="text-earth-600 leading-relaxed">
                To continuously explore, identify, and open up explore and unlock new inclusive destinations and adventure experiences, committed to making every journey accessible and inclusive for people with disabilities.
              </p>
            </motion.div>
          </div>

          {/* Our Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <div className="text-left mb-10">
              <div className="flex flex-col items-start mb-6 w-fit">
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.08em] mb-3 bg-gradient-to-b from-[#3b3939] to-[#929192] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
                  Our Values
                </h3>
                <div className="w-full h-0.5 mb-3" style={{ backgroundColor: '#f3b815' }}></div>
              </div>
              <p className="text-earth-600">The principles that guide every adventure we create</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-earth-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="bg-primary-100 rounded-full p-2 mr-3">
                    <Shield className="h-5 w-5 text-primary-600" />
                  </div>
                  <h4 className="font-bold text-earth-800">Safety</h4>
                </div>
                <p className="text-sm text-earth-600">Every experience is planned and delivered with uncompromised safety standards.</p>
              </div>

              <div className="bg-earth-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="bg-adventure-100 rounded-full p-2 mr-3">
                    <Award className="h-5 w-5 text-adventure-600" />
                  </div>
                  <h4 className="font-bold text-earth-800">Quality</h4>
                </div>
                <p className="text-sm text-earth-600">High-quality adventures through expert planning, skilled teams, and best-in-class, reliable equipment.</p>
              </div>

              <div className="bg-earth-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="bg-primary-100 rounded-full p-2 mr-3">
                    <HandHeart className="h-5 w-5 text-primary-600" />
                  </div>
                  <h4 className="font-bold text-earth-800">Dignity</h4>
                </div>
                <p className="text-sm text-earth-600">We treat every individual with respect, empathy, and equality - always.</p>
              </div>

              <div className="bg-earth-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="bg-adventure-100 rounded-full p-2 mr-3">
                    <Accessibility className="h-5 w-5 text-adventure-600" />
                  </div>
                  <h4 className="font-bold text-earth-800">Accessibility</h4>
                </div>
                <p className="text-sm text-earth-600">Committed to making adventure truly accessible for people with all types of disabilities.</p>
              </div>

              <div className="bg-earth-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="bg-primary-100 rounded-full p-2 mr-3">
                    <Users className="h-5 w-5 text-primary-600" />
                  </div>
                  <h4 className="font-bold text-earth-800">Inclusion</h4>
                </div>
                <p className="text-sm text-earth-600">Creating environments where everyone belongs, regardless of ability, background, or pace.</p>
              </div>

              <div className="bg-earth-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="bg-adventure-100 rounded-full p-2 mr-3">
                    <Leaf className="h-5 w-5 text-adventure-600" />
                  </div>
                  <h4 className="font-bold text-earth-800">Affordability</h4>
                </div>
                <p className="text-sm text-earth-600">Fair and reasonable pricing without ever compromising on safety or quality.</p>
              </div>

              <div className="bg-earth-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="bg-primary-100 rounded-full p-2 mr-3">
                    <Globe className="h-5 w-5 text-primary-600" />
                  </div>
                  <h4 className="font-bold text-earth-800">Innovation</h4>
                </div>
                <p className="text-sm text-earth-600">Continuously discover, test, and open new inclusive destinations, pushing the boundaries of accessible adventure.</p>
              </div>

              <div className="bg-earth-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="bg-adventure-100 rounded-full p-2 mr-3">
                    <Mountain className="h-5 w-5 text-adventure-600" />
                  </div>
                  <h4 className="font-bold text-earth-800">Empowerment</h4>
                </div>
                <p className="text-sm text-earth-600">Every experience is designed to build confidence, independence, and a sense of achievement.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <VSheshRecognitionsSection />

      {/* Call to Action */}
      <section className="py-16 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Meet Our Accessibility Champions
            </h2>
            <p className="text-lg text-primary-200 mb-8 max-w-2xl ml-0">
              Discover the dedicated partners and specialists who make inclusive adventure possible.
              Together, we're breaking barriers and creating opportunities for everyone.
            </p>
            <Link
              to="/about/partners"
              className="bg-warning-400 text-earth-900 px-8 py-4 rounded-md font-semibold hover:bg-warning-500 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
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
