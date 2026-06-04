import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Mountain, Users, Award, Globe, Leaf, Shield, Accessibility, HandHeart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import VSheshRecognitionsSection from '../components/home/VSheshRecognitionsSection';
import LazyImage from '../components/ui/LazyImage';
import SectionTitle from '../components/ui/SectionTitle';
import SEO from '../components/ui/SEO';

type TeamMember = {
  name: string;
  description: string;
  image?: string;
  imageContain?: boolean;
  darkMedia?: boolean;
};

type TeamGroup = {
  title: string;
  description: string;
  accentClass: string;
  tagClass: string;
  members: TeamMember[];
};

const teamAssetPath = (fileName: string) => `/TFA%20team/${encodeURIComponent(fileName)}`;

const AboutPage = () => {
  const heroRef = useRef(null);
  const teamCarouselResumeTimeoutRef = useRef<number | null>(null);
  const [activeTeamGroupIndex, setActiveTeamGroupIndex] = useState(0);
  const [isTeamCarouselPaused, setIsTeamCarouselPaused] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const milestones = [
    { year: 'February 2025', title: 'The Seed of an Idea', description: 'Aquaterra\'s 30th Anniversary Dinner - The seed of an idea was sown' },
    { year: 'March 2025', title: 'Treks for All is Born', description: 'Pankaj and Rashi met at a café - Treks for All was born' },
    { year: 'April 2025', title: 'Partnership Formed', description: 'Aquaterra and v-shesh came on board as implementing partner' },
    { year: 'May 2025', title: 'Inaugural Treks to Dayara Bugyal', description: 'A milestone in inclusive adventure - 16 participants, 9 with disabilities, 6 unique disabilities (including vision impairment, autism, locomotor disability and albinism). This was followed up by yet another expedition to Dayara Bugyal in June!' },
    { year: 'September to November 2025', title: 'First Inclusive Camp Experiences in Atali Ganga', description: 'From rope courses to river rafting, our group expanded the possibilities of inclusive adventure' },
    { year: 'January 2026', title: 'B2B Camp hosted in Atali Ganga', description: 'Amazon India joined hands with TFA for an inclusive team offsite!' },
    { year: 'March 2026', title: 'Nature Walk at Mangar', description: 'Nature walk at Mangar—our first immersion experience' }
  ];

  const teamGroups: TeamGroup[] = [
    {
      title: 'Founders',
      description: 'The people who turned one question into an inclusive adventure movement.',
      accentClass: 'from-[#18363a] via-[#214b51] to-[#377d87]',
      tagClass: 'bg-[#18363a] text-white',
      members: [
        {
          name: 'Pankaj Wadhwa',
          image: teamAssetPath('Pankaj Wadhwa.jpg'),
          description: 'Treks for All first began as an idea Pankaj simply could not let go of: an outdoors experience that truly included everyone. Bringing together his love for the mountains and years in the development sector, he is deeply rooted in community-led work and creating impact that feels real, not performative. Calm, grounded, and quietly dependable, he is usually the one thinking three steps ahead while everyone else is just admiring the view.'
        },
        {
          name: 'Shashaank Awasthi',
          image: teamAssetPath('Shashaank Awasthi.jpeg'),
          description: 'Equal parts boardroom and basecamp, Shashaank is on a mission to make both work and the outdoors more inclusive. He founded Treks for All to open up adventure to everyone, and co-founded v-shesh, an award-winning enterprise reshaping disability inclusion across education, skilling, and employment across 500+ organisations.'
        },
        {
          name: 'Vaibhav Kala',
          image: teamAssetPath('Vaibhav Kala.jpeg'),
          description: 'An OG of India\'s adventure travel scene, Vaibhav has been rewriting the rulebook since before it was written. From dreaming up expeditions others thought were too wild to work to actually making them happen, he has built a legacy on pushing boundaries and opening adventure travel to communities long left out.'
        }
      ]
    },
    {
      title: 'Operations Team',
      description: 'The team that keeps the experience seamless, calm, and guest-ready behind the scenes.',
      accentClass: 'from-[#377d87] via-[#4b9aa3] to-[#8cc8ce]',
      tagClass: 'bg-[#377d87] text-white',
      members: [
        {
          name: 'Himanshu Rana',
          image: teamAssetPath('Himanshu.jpeg'),
          description: 'A hospitality and tourism professional with a knack for keeping things smooth behind the scenes, Himanshu thrives on creating seamless experiences. From managing adventure logistics to coordinating guest trips, he is the kind of person who makes every adventure feel effortlessly put together.'
        }
      ]
    },
    {
      title: 'Technical Team',
      description: 'River guides, trek leaders, and safety-first operators who make every trip possible on the ground.',
      accentClass: 'from-[#214b51] via-[#377d87] to-[#5ba5ad]',
      tagClass: 'bg-[#214b51] text-white',
      members: [
        {
          name: 'Dhruv Naresh Rana',
          image: teamAssetPath('Dhruv Naresh Rana.jpeg'),
          description: 'With 25+ years on the river and still chasing the next rapid, Rana ji brings serious skill with zero fuss. A seasoned raft guide and safety kayaker who has represented India in competitions across India and China, he keeps operations tight, experiences unforgettable, and every guest smiling.'
        },
        {
          name: 'Jetandra Singh Rana',
          image: teamAssetPath('Jetandra.jpeg'),
          description: 'Guiding since 2004, Jetandra has done it all: camps, treks, whitewater, and high-altitude expeditions from Stok Kangri and Kang Yatse II to Kilimanjaro. He is also the group\'s resident jester, lifting spirits with perfectly timed jokes and riddles just when the climb gets tough.'
        },
        {
          name: 'Vikas Rana',
          image: teamAssetPath('Vikas Rana.jpeg'),
          description: 'Guiding since 2007 and raised in the heart of Uttarkashi, Vikas has the mountains in his DNA. From the Garhwal Himalayas to far corners of India\'s ranges, he shows up with quiet confidence, deep knowledge, and the steady presence that reassures first-timers and seasoned adventurers alike.'
        },
        {
          name: 'Kaanha Singh',
          image: teamAssetPath('Kanha Singh.jpeg'),
          description: 'Straight out of the Tons valley, Kaanha is pure power on water. Usually leading the crew straight into the chaos of big Class 4 rapids, his calm control through wild water is a confidence boost for every adventurer he watches over.'
        },
        {
          name: 'Vikas Negi',
          image: teamAssetPath('Vikas Negi.jpeg'),
          description: 'Equally at home on raging rivers and mountain trails, Vikas blends technical skill with serious adventure energy. A seasoned rafting guide with strong expertise in safety, rescue, and navigation, he is known to go the extra mile quite literally, including carrying tired adventurers back to the riverbank when needed.'
        },
        {
          name: 'Ankit Singh',
          image: teamAssetPath('Ankit.jpeg'),
          description: 'One of the youngest on the block, Ankit still brings serious experience to every trip. Trained in swift water rescue and first aid, he keeps things safe without taking away from the fun, and brings dependable trekking experience across varied terrain.'
        }
      ]
    },
    {
      title: 'Inclusion Partners',
      description: 'The people shaping access, empathy, outreach, and lived inclusion into every journey.',
      accentClass: 'from-[#e0aa04] via-[#f0c552] to-[#f7df9a]',
      tagClass: 'bg-[#e0aa04] text-[#18363a]',
      members: [
        {
          name: 'Rashi Soman',
          image: teamAssetPath('Rashi Soman.jpeg'),
          description: 'With a decade of experience in disability inclusion and a deep love for the outdoors, Rashi brings both to life with Treks for All. She is the ultimate calm-in-the-chaos person, turning first-time nerves into confident "when is the next trek?" energy.'
        },
        {
          name: 'Sakshi Chauhan',
          image: teamAssetPath('Sakshi Chauhan.jpeg'),
          description: 'Part of the founding team at Treks for All, Sakshi is passionate about making the outdoors truly accessible. A wheelchair basketball player herself, she brings grit, empathy, and lived perspective, helping turn every "can we?" into "let\'s go."'
        },
        {
          name: 'Vaishnavi Ganesh',
          image: teamAssetPath('Vaishnavi Ganesh PM.jpeg'),
          description: 'Part of the madness since day one, Vaishnavi blends disability inclusion, storytelling, and adventure into one very full backpack. Deeply committed to accessibility and creating spaces where everyone feels seen, heard, and included, she keeps the inclusion conversation moving on and off the trail.'
        }
      ]
    },
    {
      title: 'Communication Partners',
      description: 'The storytellers and brand-builders helping the mission travel farther than the trailhead.',
      accentClass: 'from-[#1a2e35] via-[#214b51] to-[#377d87]',
      tagClass: 'bg-[#1a2e35] text-white',
      members: [
        {
          name: 'Madhuri Vijaykumar',
          image: teamAssetPath('Madhuri.jpeg'),
          description: 'Working at the intersection of communication and social impact, Madhuri helps nonprofits and social enterprises tell stories that actually stay with people. She brings warmth, thoughtfulness, and sharp insight to Treks for All, whether she is shaping narratives or swapping stories after a long day outside.'
        },
        {
          name: 'Backcountry Films',
          image: teamAssetPath('Backcountry logo (White).png'),
          imageContain: true,
          darkMedia: true,
          description: 'Part creative powerhouse and part communications survival kit, Backcountry Films are the brand and marketing lifeline behind Treks for All. From mountain enterprises to global outdoor names, they bring sharp storytelling, strategy, and serious outdoor soul to everything they touch.'
        }
      ]
    }
  ];

  useEffect(() => {
    if (isTeamCarouselPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveTeamGroupIndex((currentIndex) => (currentIndex + 1) % teamGroups.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isTeamCarouselPaused, teamGroups.length]);

  const activeTeamGroup = teamGroups[activeTeamGroupIndex];

  const pauseTeamCarousel = () => {
    if (teamCarouselResumeTimeoutRef.current !== null) {
      window.clearTimeout(teamCarouselResumeTimeoutRef.current);
      teamCarouselResumeTimeoutRef.current = null;
    }

    setIsTeamCarouselPaused(true);
  };

  const resumeTeamCarousel = () => {
    if (teamCarouselResumeTimeoutRef.current !== null) {
      window.clearTimeout(teamCarouselResumeTimeoutRef.current);
    }

    teamCarouselResumeTimeoutRef.current = window.setTimeout(() => {
      setIsTeamCarouselPaused(false);
      setActiveTeamGroupIndex((currentIndex) => (currentIndex + 1) % teamGroups.length);
      teamCarouselResumeTimeoutRef.current = null;
    }, 0);
  };

  useEffect(() => {
    return () => {
      if (teamCarouselResumeTimeoutRef.current !== null) {
        window.clearTimeout(teamCarouselResumeTimeoutRef.current);
      }
    };
  }, []);


  return (
    <div className="pt-16 sm:pt-20 md:pt-28">
      <SEO
        title="Our story - Treks for All | Inclusive adventure travel"
        description="Born from a vision of inclusion, three mission-driven organizations came together to make outdoor adventure accessible to all. Discover how v-shesh, Aquaterra Adventures, and Metores Trust joined forces to create India's leading inclusive adventure company, breaking barriers one trek at a time."
        keywords="accessible adventure story, inclusive tourism India, v-shesh, Aquaterra Adventures, Metores Trust, disability inclusion, accessible outdoor adventure"
        image="https://treksforall.in/our-story/story.webp"
        url="https://treksforall.in/about"
      />
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-48 sm:h-80 md:h-96 lg:h-[500px] flex items-end overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/our-story/story.webp')`,
            y
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-left text-white px-3 sm:px-4 z-10 max-w-7xl mx-auto w-full pb-6 sm:pb-12">
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
              <div className="prose prose-sm sm:prose-lg text-earth-600">
                <p className="mb-4 sm:mb-6">
                  <strong>It all began with a simple belief: adventure should belong to everyone.</strong>
                </p>
                <p className="mb-4 sm:mb-6">
                  For too long, people with disabilities, caregivers, and other marginalised groups have been left out of the outdoors simply because of the risk and effort involved. Three mission-driven organisations—Aquaterra Adventures, Metores Trust, and v-shesh—came together to change that narrative and make outdoor adventure accessible to all, regardless of disability or limitations.
                </p>
                <p className="mb-4 sm:mb-6">
                  Our first pilot trek in May 2025 proved what many thought impossible. For the first time in India, a team representing six distinct disabilities stood together on a summit. With 6 blind trekkers, one boy with autism, two amputees, and four buddies, this ascent marked a milestone in inclusive adventure.
                </p>
                <p className="mb-4 sm:mb-6">
                  From that moment, there was no looking back. Treks For All has since been offering safe, curated outdoor experiences that welcome people of all abilities—no matter the limitation.
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-earth-800 mb-3 sm:mb-4 mt-6 sm:mt-8">
                  Why the Outdoors?
                </h3>
                <p className="mb-4 sm:mb-6">
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
                    src="/our-story/tfa_story_2.webp"
                    alt="Treks for All diverse adventure team"
                    className="rounded-2xl shadow-xl w-full h-full object-cover"
                  />
                </div>
                <div className="relative col-span-2">
                  <img
                    src="/our-story/tfa_story_3.webp"
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
      <section className="py-10 sm:py-16 md:py-20 lg:py-24 bg-[#214b51]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left mb-16"
          >
            <SectionTitle title="Our Journey" align="left" light={true} className="mb-4" />
            <p className="text-sm sm:text-lg text-[#a3d7db] max-w-3xl ml-0">
              Three organisations, one big dream, a cup of chai and Treks for All was born!
            </p>
            <p className="text-sm sm:text-lg text-[#a3d7db] max-w-3xl ml-0 mt-3 sm:mt-4">
              Vaibhav Kala, founder of Aquaterra, after 30 years of adventure, realised there was a whole community of people who had never been taken outdoors. Shashaank Awasthi, founder of v-shesh, asked the obvious question: "Why not adventure and accessibility too?" And Pankaj Wadhwa, Director of Metores Trust and the ultimate trek addict, played matchmaker - bringing everyone together to make it happen.
            </p>
            <p className="text-sm sm:text-lg text-[#a3d7db] max-w-3xl ml-0 mt-3 sm:mt-4">
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
                <div className="md:hidden pl-10 pr-2">
                  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="text-sm font-bold text-[#e0aa04] mb-1">
                      {milestone.year}
                    </div>
                    <h3 className="text-base font-bold text-earth-800 mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-earth-500 text-xs leading-snug">
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

      <section className="relative overflow-hidden bg-[#f0f9fa] py-14 sm:py-18 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(224,170,4,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(55,125,135,0.16),_transparent_32%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <SectionTitle
              title="The Team Behind It All"
              subtitle="Meet the people carrying the mission forward"
              description="Founders, operators, guides, inclusion specialists, and storytellers all bring a different strength to Treks for All. Together, they make every journey feel safe, thoughtful, and deeply human."
              align="left"
              className="mb-4"
            />

            <div className="grid gap-4 sm:grid-cols-3 max-w-4xl">
              <div className="rounded-2xl border border-[#d5e9eb] bg-white/90 px-4 py-4 shadow-sm backdrop-blur">
                <div className="text-2xl sm:text-3xl font-bold text-[#18363a]">15</div>
                <p className="mt-1 text-sm text-[#377d87]">contributors across field operations, inclusion, and storytelling</p>
              </div>
              <div className="rounded-2xl border border-[#d5e9eb] bg-white/90 px-4 py-4 shadow-sm backdrop-blur">
                <div className="text-2xl sm:text-3xl font-bold text-[#18363a]">5</div>
                <p className="mt-1 text-sm text-[#377d87]">specialist groups working together behind every experience</p>
              </div>
              <div className="rounded-2xl border border-[#d5e9eb] bg-white/90 px-4 py-4 shadow-sm backdrop-blur">
                <div className="text-2xl sm:text-3xl font-bold text-[#18363a]">1</div>
                <p className="mt-1 text-sm text-[#377d87]">shared promise: inclusive adventure without compromise</p>
              </div>
            </div>
          </motion.div>

          <div className="mb-5 flex flex-wrap items-center justify-between gap-4 sm:mb-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#377d87]">Member Groups</p>
            </div>
          </div>

          <div className="mb-6 flex flex-wrap gap-2 sm:mb-8">
            {teamGroups.map((group, groupIndex) => (
              <button
                key={group.title}
                type="button"
                onClick={() => setActiveTeamGroupIndex(groupIndex)}
                className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 sm:text-sm ${
                  groupIndex === activeTeamGroupIndex
                    ? 'border-[#18363a] bg-[#18363a] text-white shadow-md'
                    : 'border-[#c9e0e3] bg-white/80 text-[#377d87] hover:border-[#377d87] hover:text-[#18363a]'
                }`}
                aria-label={`Show ${group.title}`}
              >
                {group.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.section
              key={activeTeamGroup.title}
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -48 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="overflow-hidden rounded-[28px] border border-[#d5e9eb] bg-white/90 shadow-[0_24px_80px_rgba(24,54,58,0.08)] backdrop-blur-sm"
            >
              <div className={`bg-gradient-to-r ${activeTeamGroup.accentClass} px-5 py-5 sm:px-8 sm:py-7`}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white sm:text-3xl">{activeTeamGroup.title}</h3>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/90 sm:text-base">
                      {activeTeamGroup.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {teamGroups.map((group, groupIndex) => (
                      <button
                        key={group.title}
                        type="button"
                        onClick={() => setActiveTeamGroupIndex(groupIndex)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${groupIndex === activeTeamGroupIndex ? 'w-10 bg-white' : 'w-2.5 bg-white/45 hover:bg-white/70'}`}
                        aria-label={`Go to ${group.title}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={
                  activeTeamGroup.members.length === 1
                    ? 'mx-auto grid max-w-xl gap-5 p-6 sm:p-8'
                    : activeTeamGroup.members.length === 2
                      ? 'mx-auto grid max-w-4xl justify-items-center gap-5 p-6 sm:p-8 md:grid-cols-2'
                      : 'grid gap-5 p-6 sm:p-8 md:grid-cols-2 xl:grid-cols-3'
                }
              >
                {activeTeamGroup.members.map((member, memberIndex) => (
                  <motion.article
                    key={member.name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: memberIndex * 0.05 }}
                    className={`group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#dcecee] bg-[#fcfefe] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(24,54,58,0.12)] ${activeTeamGroup.members.length <= 2 ? 'mx-auto w-full max-w-[22rem]' : ''}`}
                    onMouseEnter={pauseTeamCarousel}
                    onMouseLeave={resumeTeamCarousel}
                  >
                    {member.image ? (
                      <div className={`relative aspect-[4/5] overflow-hidden ${member.imageContain ? 'flex items-center justify-center bg-[#141414]' : 'bg-[#dcecee]'}`}>
                        <LazyImage
                          src={member.image}
                          alt={`${member.name} portrait`}
                          className={`h-full w-full ${member.imageContain ? 'object-contain bg-[#141414] p-6 sm:p-8' : 'object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]'}`}
                        />
                        {!member.imageContain && (
                          <div className={`absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t ${member.darkMedia ? 'from-[#18363a]/80' : 'from-[#18363a]/55'} to-transparent`} />
                        )}
                      </div>
                    ) : (
                      <div className="flex aspect-[3/4] items-end bg-[linear-gradient(160deg,#18363a_0%,#214b51_55%,#377d87_100%)] p-6 text-white">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#f7df9a]">Field Leadership</div>
                          <div className="mt-3 text-4xl font-bold leading-none">
                            {member.name
                              .split(' ')
                              .map((namePart) => namePart[0])
                              .join('')}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-1 flex-col px-5 py-5 sm:px-6">
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-[#18363a]">{member.name}</h3>
                      </div>
                      <p className="text-sm leading-6 text-earth-600 sm:text-[15px]">{member.description}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          </AnimatePresence>
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
            className="text-left mb-10 sm:mb-16"
          >
            <SectionTitle
              title="Onwards & Upwards"
              subtitle="The Journey Continues"
              align="left"
              className="mb-3 sm:mb-4"
            />
            <p className="text-sm sm:text-lg text-earth-600 max-w-2xl ml-0">
              With every trek, camp, and new explorer, we're expanding the possibilities of adventure, one inclusive step at a time.
            </p>
          </motion.div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-10 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#f5f7fa] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-[#fef3d1] rounded-lg sm:rounded-xl p-2 sm:p-3 mr-3 sm:mr-4">
                  <Eye className="h-6 w-6 sm:h-8 sm:w-8 text-[#e0aa04]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-earth-800">Vision</h3>
              </div>
              <p className="text-sm sm:text-base text-earth-600 leading-snug sm:leading-relaxed">
                We envision a world where adventure is universally accessible, where trekking, camping, and outdoor experiences are open to people with diverse physical, sensory, cognitive, and invisible disabilities. Our goal is to make inclusive tourism the standard—not just in India, but globally—welcoming adventurers from every corner of the world to experience the freedom, healing, and empowerment of the outdoors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#f5f7fa] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-[#fef3d1] rounded-lg sm:rounded-xl p-2 sm:p-3 mr-3 sm:mr-4">
                  <Mountain className="h-6 w-6 sm:h-8 sm:w-8 text-[#e0aa04]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-earth-800">Mission</h3>
              </div>
              <p className="text-sm sm:text-base text-earth-600 leading-snug sm:leading-relaxed">
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
            className="bg-[#1a2e35] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-12"
          >
            <SectionTitle
              title="Our Values"
              subtitle="The principles that guide every adventure we create"
              align="left"
              light={true}
              className="mb-6 sm:mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
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
                <div key={value.title} className="flex items-start space-x-3 sm:space-x-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-5 transition-colors duration-300">
                  <div className="flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 bg-[#e0aa04] rounded-lg sm:rounded-xl flex items-center justify-center text-[#18363a]">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1">{value.title}</h4>
                    <p className="text-xs sm:text-sm text-[#a3d7db] leading-snug sm:leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      <VSheshRecognitionsSection />

      {/* Call to Action */}
      <section className="py-12 sm:py-20 bg-[#214b51]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-8"
          >
            <div>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Meet Our Accessibility Champions
              </h2>
              <p className="text-sm sm:text-lg text-[#a3d7db] max-w-2xl">
                Discover the dedicated partners and specialists who make inclusive adventure possible.
                Together, we're breaking barriers and creating opportunities for everyone.
              </p>
            </div>
            <Link
              to="/about/partners"
              className="flex-shrink-0 bg-[#e0aa04] text-[#214b51] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:bg-[#e5a800] transition-all duration-300 inline-flex items-center space-x-2"
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
