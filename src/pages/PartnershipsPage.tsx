import { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Camera,
  ChevronDown,
  Compass,
  GraduationCap,
  HandHeart,
  Lightbulb,
  Mountain,
  Send,
  Sparkles,
  Tent,
  Users
} from 'lucide-react';
import SEO from '../components/ui/SEO';
import SectionTitle from '../components/ui/SectionTitle';
import { submitForm } from '../lib/xano';

type PartnershipType = {
  id: string;
  label: string;
  icon: typeof Mountain;
  headline: string;
  body: string;
  note?: string;
  keywords?: string[];
  cta: string;
};

const partnershipTypes: PartnershipType[] = [
  {
    id: 'adventure',
    label: 'Adventure Partners',
    icon: Mountain,
    headline: 'Help us open new trails.',
    body: 'We’re open to working with trekking companies, camps, outdoor operators, rafting and adventure organisations, wildlife and nature groups, outdoor educators and travel companies to create inclusive experiences, explore new destinations, build outdoor-team capability and improve the participant experience.',
    cta: 'Become an Adventure Partner'
  },
  {
    id: 'schools',
    label: 'Schools & Colleges',
    icon: GraduationCap,
    headline: 'Learn inclusion. Live adventure. Become a Buddy.',
    body: 'A Buddy shares the journey, supporting when needed, respecting independence and stepping back when it isn’t. We invite schools and colleges to bring young people outdoors as Buddies, building friendships with people with diverse abilities while developing empathy, confidence and leadership.',
    cta: 'Bring Your Students to the Trail'
  },
  {
    id: 'corporate',
    label: 'Corporate Partners',
    icon: Building2,
    headline: 'Bring inclusion out of the boardroom.',
    body: 'Create opportunities for employees with and without disabilities to experience the outdoors together through inclusive team adventures, disability ERG and ally experiences, employee Buddy programmes and sponsored adventures.',
    cta: 'Explore Corporate Partnerships'
  },
  {
    id: 'community',
    label: 'Community & Disability Partners',
    icon: Users,
    headline: 'You know your community. We bring the outdoors.',
    body: 'We work with disability NGOs, DPOs, rehabilitation and community organisations, caregiver networks, youth organisations, and mental health and wellbeing organisations to identify participants, prepare them for their journey and create meaningful outdoor experiences together.',
    cta: 'Become a Community Partner'
  },
  {
    id: 'destination',
    label: 'Destination & Hospitality',
    icon: Tent,
    headline: 'Help us discover new places.',
    body: 'We’re looking to work with camps, resorts, hotels, homestays, eco-tourism and community tourism initiatives, and nature destinations to explore accessibility, staff preparedness, inclusive activities, practical adaptations and the participant experience.',
    note: 'It’s not about whether a place is perfectly accessible. It’s about understanding what is possible — and how we can make it better.',
    cta: 'Explore a Destination Partnership'
  },
  {
    id: 'karwaan',
    label: 'Karwaan Partners',
    icon: HandHeart,
    headline: 'Help make more journeys possible.',
    body: 'Support people who may otherwise not have the opportunity to experience the outdoors through participant sponsorships, group sponsorships, adventure funding or pay-it-forward contributions.',
    note: 'Make someday today.',
    cta: 'Partner with Karwaan'
  },
  {
    id: 'knowledge',
    label: 'Knowledge & Innovation',
    icon: Lightbulb,
    headline: 'Help us build what’s next.',
    body: 'We welcome universities, researchers, accessibility experts, technology organisations, assistive technology innovators, adaptive equipment companies, outdoor brands and training institutions to collaborate on research, accessibility, adaptive solutions, equipment, training and new approaches to inclusive adventure.',
    cta: 'Collaborate With Us'
  },
  {
    id: 'media',
    label: 'Storytelling & Media',
    icon: Camera,
    headline: 'Help us change the story of who belongs outdoors.',
    body: 'We welcome photographers, filmmakers, journalists, media organisations, creators and storytellers who can help us share these experiences and challenge perceptions of disability, adventure, independence, ability, risk and inclusion.',
    keywords: ['Disability', 'Adventure', 'Independence', 'Ability', 'Risk', 'Inclusion'],
    cta: 'Tell the Story With Us'
  }
];

type Partner = {
  name: string;
  mark: string;
  tagline?: string;
  blurb: string;
  link?: { to: string; label: string };
};

type PartnerCategory = {
  id: string;
  label: string;
  headline: string;
  intro?: string;
  partners: Partner[];
  closing: string;
  openSeat?: { typeId: string; title: string; text: string; cta: string };
};

const partnerCategories: PartnerCategory[] = [
  {
    id: 'funding',
    label: 'Inclusion Funding Partner',
    headline: 'Making adventure possible for people from disadvantaged backgrounds.',
    partners: [
      {
        name: 'TBO',
        mark: 'TBO',
        blurb: 'TBO supports Treks for All through Karwaan — Making Someday Possible, providing financial support that enables people from disadvantaged backgrounds to participate in outdoor experiences.',
        link: { to: '/karwaan', label: 'About Karwaan' }
      }
    ],
    closing: 'Some dreams shouldn’t have to wait for someday.'
  },
  {
    id: 'karwaan',
    label: 'Karwaan Partners',
    headline: 'Helping us find the journeys that matter.',
    intro: 'Our Karwaan partners help us reach people and communities who dream of experiencing the outdoors but may not have had the opportunity to make it happen. They help identify potential participants, connect us with communities and understand their needs and aspirations, helping the right opportunities reach the right people.',
    partners: [],
    openSeat: {
      typeId: 'karwaan',
      title: 'This trail is still open.',
      text: 'We’re looking for our first Karwaan partners — organisations who can help the right opportunities reach the right people.',
      cta: 'Be the first Karwaan Partner'
    },
    closing: 'Making someday today.'
  },
  {
    id: 'corporate',
    label: 'Corporate Partners',
    headline: 'Taking inclusion beyond the workplace.',
    partners: [
      {
        name: 'Amazon',
        mark: 'A',
        blurb: 'Sponsored by Amazon’s Persons with Disabilities & Allies ERG, Amazon partnered with Treks for All to create an outdoor experience bringing together persons with disabilities and allies — creating space to challenge themselves, build connections and experience adventure together.'
      },
      {
        name: 'SaralX',
        mark: 'SX',
        blurb: 'SaralX partnered with Treks for All for an inclusive corporate offsite, bringing colleagues with and without disabilities together outdoors and creating opportunities for connection, participation, confidence and belonging.'
      }
    ],
    closing: 'Inclusion isn’t just something we talk about. It’s something we experience together.'
  },
  {
    id: 'adventure',
    label: 'Adventure Partners',
    headline: 'Helping us open new trails and possibilities.',
    intro: 'Our Adventure Partners bring outdoor expertise, destinations and experiences into the Treks for All journey, helping us explore new places and create more opportunities to experience trekking, camping, nature and adventure.',
    partners: [
      { name: 'INME', mark: 'IN', blurb: 'Outdoor expertise and experiences that help us explore new places together.' },
      {
        name: 'Camp Hornbill',
        mark: 'H',
        blurb: 'Nature, adventure and community in the Corbett landscape near Ramnagar, Uttarakhand.',
        link: { to: '/trip/8', label: 'See the camp' }
      },
      {
        name: 'Camp Sunkiya',
        mark: 'S',
        blurb: 'Adventure, village immersion and mountain culture in the hills of Mukteshwar, Uttarakhand.',
        link: { to: '/trip/10', label: 'See the camp' }
      }
    ],
    closing: 'Different trails. Different experiences. One shared adventure.'
  },
  {
    id: 'schools',
    label: 'Schools & Colleges — Buddy Programme',
    headline: 'Bringing young people into the journey.',
    intro: 'Through shared experiences, students learn to support when needed, respect independence and step back when support isn’t required.',
    partners: [
      {
        name: 'Purkul Youth Development Society',
        mark: 'P',
        blurb: 'Students from PYDS Learning Academy have shared trails, challenges and experiences with persons with disabilities as Buddies — learning inclusion by living it.'
      }
    ],
    closing: 'You can teach inclusion in a classroom. Sometimes, you understand it best when you’re walking the same trail.'
  },
  {
    id: 'community',
    label: 'Community Partners',
    headline: 'Creating more pathways to the outdoors.',
    partners: [
      {
        name: 'Jagriti Yatra',
        mark: 'JY',
        tagline: 'Making the yatra more inclusive.',
        blurb: 'Jagriti Yatra is working with Treks for All to make its journeys more inclusive, creating opportunities for people with diverse abilities to participate in the Yatra experience and be part of the journey alongside others.'
      },
      {
        name: 'Raahein Collective',
        mark: 'RC',
        tagline: 'Creating space for caregivers and counsellors to pause, connect and recharge.',
        blurb: 'Raahein Collective is partnering with Treks for All to create camps for caregivers and counsellors, offering time away from the demands of caregiving and support work — a space to rest, connect, experience the outdoors and address burnout.'
      }
    ],
    closing: 'New people. New possibilities.'
  }
];

const inputClass =
  'w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#e0aa04] transition-all';

const PartnershipsPage = () => {
  const heroRef = useRef(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  const [activeType, setActiveType] = useState(partnershipTypes[0].id);
  const [form, setForm] = useState({ name: '', email: '', phone: '', organisation: '', partnership: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const activeDetail = partnershipTypes.find(type => type.id === activeType) ?? partnershipTypes[0];

  const startConversation = (typeId?: string) => {
    if (typeId) setForm(prev => ({ ...prev, partnership: typeId }));
    document.getElementById('start-the-journey')?.scrollIntoView({ behavior: 'smooth' });
    window.setTimeout(() => nameInputRef.current?.focus({ preventScroll: true }), 700);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('idle');
    const partnershipLabel = partnershipTypes.find(type => type.id === form.partnership)?.label;
    try {
      // Partnership enquiries go through the existing B2B channel; the partnership type is
      // folded into the message so nothing on the server needs to change.
      const result = await submitForm({
        formType: 'b2b',
        name: form.name,
        email: form.email,
        phone: form.phone,
        organisation: form.organisation,
        message: `${partnershipLabel ? `Partnership type: ${partnershipLabel}\n\n` : ''}${form.message}`
      });
      if (result.success) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', organisation: '', partnership: '', message: '' });
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
    <div className="pt-16 sm:pt-20 md:pt-28">
      <SEO
        title="Partnerships - Treks for All | Together, we make the outdoors belong to everyone"
        description="Treks for All is built on collaboration. Meet the funding, corporate, adventure, school and community partners walking with us, and find out how your organisation can partner with us to make the outdoors belong to everyone."
        keywords="Treks for All partners, inclusive adventure partnership, corporate inclusion outdoors, buddy programme schools, Karwaan sponsorship partner, accessible tourism partners"
        image="https://treksforall.in/b2b/b2b_mp.webp"
        url="https://treksforall.in/partnerships"
      />

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden bg-[#18363a]">
        <motion.div className="absolute inset-0" style={{ y }}>
          <img
            src="/b2b/b2b_mp.webp"
            alt="A corporate group with and without disabilities together at an adventure camp"
            className="w-full h-full object-cover object-[50%_35%]"
            width="1920"
            height="1442"
            loading="eager"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#18363a] via-[#18363a]/70 to-[#18363a]/20" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#e0aa04] mb-3">Partnerships</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-5">
              Together, we make the outdoors belong to everyone.
            </h1>
            <p className="text-sm sm:text-lg text-white/85 leading-relaxed max-w-2xl">
              Treks for All is built on collaboration. Our partners bring funding, adventure expertise, communities,
              young Buddies, destinations, knowledge and ideas &mdash; helping create more opportunities for people to
              experience the outdoors.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => startConversation()}
                className="inline-flex items-center justify-center gap-2 bg-[#e0aa04] text-[#18363a] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:bg-[#c99903] transition-all duration-300"
              >
                <span>Partner with us</span>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
              <a
                href="#walking-with-us"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                <span>Who&rsquo;s walking with us</span>
                <ChevronDown className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-l-[5px] border-[#e0aa04] pl-5 sm:pl-8 max-w-4xl"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#18363a] leading-snug">
              Our partners don&rsquo;t just support Treks for All. They help make the journeys possible.
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* Walking with us: a trail of partner categories */}
      <section id="walking-with-us" className="bg-[#f5f7fa] scroll-mt-28 md:scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-10 sm:mb-16">
            <SectionTitle title="The people and organisations walking with us" align="left" className="mb-2" />
            <p className="text-sm sm:text-lg text-earth-600 max-w-3xl">
              Every partner on this trail brings something different &mdash; and every one of them helps a journey happen.
            </p>
          </motion.div>

          <div className="relative">
            {/* The trail */}
            <div className="absolute left-5 sm:left-7 top-3 bottom-3 border-l-2 border-dashed border-[#377d87]/40" aria-hidden="true" />

            <div className="space-y-12 sm:space-y-16">
              {partnerCategories.map((category, index) => (
                <motion.article
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true, margin: '-40px' }}
                  className="relative pl-14 sm:pl-20"
                >
                  {/* Trail marker */}
                  <div className="absolute left-0 top-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#18363a] border-4 border-[#f5f7fa] shadow-md flex items-center justify-center" aria-hidden="true">
                    <span className="text-[#e0aa04] font-bold text-sm sm:text-lg">{String(index + 1).padStart(2, '0')}</span>
                  </div>

                  <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#377d87] pt-2 sm:pt-4 mb-1.5">{category.label}</p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#18363a] leading-snug mb-3">{category.headline}</h3>
                  {category.intro && (
                    <p className="text-sm sm:text-base text-earth-600 leading-relaxed max-w-3xl mb-6">{category.intro}</p>
                  )}

                  {category.partners.length > 0 && (
                    <div className={`grid grid-cols-1 gap-4 sm:gap-5 mt-5 ${category.partners.length >= 3 ? 'md:grid-cols-3' : category.partners.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2'}`}>
                      {category.partners.map(partner => (
                        <div key={partner.name} className="flex flex-col bg-white rounded-2xl border border-[#d1ebed] p-5 sm:p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#18363a] text-[#e0aa04] font-bold text-base sm:text-lg flex items-center justify-center tracking-wide" aria-hidden="true">
                              {partner.mark}
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-base sm:text-lg font-bold text-[#18363a] leading-tight">{partner.name}</h4>
                              {partner.tagline && <p className="text-xs sm:text-sm font-semibold text-[#377d87] mt-0.5">{partner.tagline}</p>}
                            </div>
                          </div>
                          <p className="text-sm text-earth-600 leading-relaxed flex-1">{partner.blurb}</p>
                          {partner.link && (
                            <Link to={partner.link.to} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#377d87] hover:text-[#18363a] transition-colors">
                              <span>{partner.link.label}</span>
                              <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {category.openSeat && (
                    <div className="mt-5 max-w-2xl rounded-2xl border-2 border-dashed border-[#e0aa04]/70 bg-[#fef9eb] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#e0aa04] text-[#18363a] flex items-center justify-center" aria-hidden="true">
                        <Compass className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base sm:text-lg font-bold text-[#18363a]">{category.openSeat.title}</h4>
                        <p className="text-sm text-earth-600 leading-relaxed mt-1">{category.openSeat.text}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => startConversation(category.openSeat?.typeId)}
                        className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-[#18363a] text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-[#214b51] transition-colors"
                      >
                        <span>{category.openSeat.cta}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  )}

                  <p className="mt-5 sm:mt-6 text-sm sm:text-base italic font-semibold text-[#a17a02]">{category.closing}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner with us: explorer */}
      <section id="partner-with-us" className="bg-white scroll-mt-28 md:scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-8 sm:mb-12">
            <SectionTitle title="Partner with us" subtitle="There is a place for everyone on this journey" align="left" className="mb-3" />
            <p className="text-sm sm:text-lg text-earth-600 max-w-3xl">
              We are growing a community of organisations, institutions and individuals who believe that the outdoors
              should belong to everyone. You may bring a community, a destination, young people, adventure expertise,
              resources, knowledge, technology or simply an idea.
            </p>
          </motion.div>

          {/* Desktop / tablet: selector rail + detail panel */}
          <div className="hidden md:grid md:grid-cols-[minmax(240px,320px)_1fr] gap-6 lg:gap-10 items-start">
            <div className="flex flex-col gap-1.5" role="tablist" aria-label="Partnership types">
              {partnershipTypes.map(type => {
                const Icon = type.icon;
                const selected = type.id === activeType;
                return (
                  <button
                    key={type.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="partnership-detail"
                    onClick={() => setActiveType(type.id)}
                    className={`group flex items-center gap-3 text-left rounded-xl px-4 py-3 border transition-all duration-200 ${
                      selected
                        ? 'bg-[#18363a] border-[#18363a] text-white shadow-md'
                        : 'bg-white border-[#d1ebed] text-earth-700 hover:border-[#377d87] hover:bg-[#f5f7fa]'
                    }`}
                  >
                    <span className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${selected ? 'bg-[#e0aa04] text-[#18363a]' : 'bg-[#e8f5f6] text-[#2c646c]'}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-semibold text-sm lg:text-base leading-tight">{type.label}</span>
                    <ArrowRight className={`ml-auto h-4 w-4 flex-shrink-0 transition-all ${selected ? 'opacity-100 text-[#e0aa04]' : 'opacity-0 group-hover:opacity-60'}`} aria-hidden="true" />
                  </button>
                );
              })}
            </div>

            <div id="partnership-detail" role="tabpanel" className="relative min-h-[26rem] rounded-3xl bg-[#18363a] text-white p-8 lg:p-12 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#e0aa04]/10" aria-hidden="true" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDetail.id}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="relative flex flex-col h-full"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e0aa04] mb-3">{activeDetail.label}</p>
                  <h3 className="text-2xl lg:text-4xl font-bold leading-tight mb-5">{activeDetail.headline}</h3>
                  <p className="text-base lg:text-lg text-[#c8e5e8] leading-relaxed max-w-2xl">{activeDetail.body}</p>
                  {activeDetail.note && (
                    <p className="mt-4 text-sm lg:text-base italic text-white/80 border-l-2 border-[#e0aa04] pl-4 max-w-2xl">{activeDetail.note}</p>
                  )}
                  {activeDetail.keywords && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {activeDetail.keywords.map(word => (
                        <span key={word} className="rounded-full border border-white/25 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/85">{word}</span>
                      ))}
                    </div>
                  )}
                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={() => startConversation(activeDetail.id)}
                      className="inline-flex items-center gap-2 bg-[#e0aa04] text-[#18363a] px-6 py-3.5 rounded-xl font-bold hover:bg-[#c99903] transition-all duration-300"
                    >
                      <span>{activeDetail.cta}</span>
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile: accordion */}
          <div className="md:hidden flex flex-col gap-3">
            {partnershipTypes.map(type => {
              const Icon = type.icon;
              const open = type.id === activeType;
              return (
                <div key={type.id} className={`rounded-2xl border transition-colors ${open ? 'border-[#18363a] bg-[#18363a] text-white' : 'border-[#d1ebed] bg-white'}`}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setActiveType(open ? '' : type.id)}
                    className="w-full flex items-center gap-3 text-left px-4 py-3.5"
                  >
                    <span className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${open ? 'bg-[#e0aa04] text-[#18363a]' : 'bg-[#e8f5f6] text-[#2c646c]'}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className={`font-semibold text-sm flex-1 ${open ? 'text-white' : 'text-earth-800'}`}>{type.label}</span>
                    <ChevronDown className={`h-5 w-5 flex-shrink-0 transition-transform ${open ? 'rotate-180 text-[#e0aa04]' : 'text-earth-400'}`} aria-hidden="true" />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-5">
                          <h3 className="text-lg font-bold leading-snug mb-3">{type.headline}</h3>
                          <p className="text-sm text-[#c8e5e8] leading-relaxed">{type.body}</p>
                          {type.note && <p className="mt-3 text-sm italic text-white/80 border-l-2 border-[#e0aa04] pl-3">{type.note}</p>}
                          {type.keywords && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {type.keywords.map(word => (
                                <span key={word} className="rounded-full border border-white/25 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/85">{word}</span>
                              ))}
                            </div>
                          )}
                          <button
                            type="button"
                            onClick={() => startConversation(type.id)}
                            className="mt-5 inline-flex items-center gap-2 bg-[#e0aa04] text-[#18363a] px-5 py-3 rounded-xl font-bold text-sm hover:bg-[#c99903] transition-colors"
                          >
                            <span>{type.cta}</span>
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Let's start the journey */}
      <section id="start-the-journey" className="bg-[#214b51] scroll-mt-20 md:scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="lg:col-span-2">
              <SectionTitle title="Let's start the journey" align="left" light className="mb-4" />
              <p className="text-lg sm:text-xl font-bold text-white mb-4">The outdoors are too big for anyone to be left behind.</p>
              <p className="text-sm sm:text-base text-[#a3d7db] leading-relaxed">
                Perhaps you have a community to bring outdoors, students who could become Buddies, employees looking
                for a different inclusion experience, a destination to explore, resources to support an adventure,
                knowledge or technology to share or simply an idea.
              </p>
              <div className="mt-6 flex items-center gap-3 text-[#e0aa04]">
                <Sparkles className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <p className="text-sm sm:text-base font-semibold">Start a conversation. Partner with Treks for All.</p>
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-[#18363a] rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="partner-name" className="block text-sm font-medium text-white/80 mb-1">Full name *</label>
                  <input id="partner-name" ref={nameInputRef} type="text" name="name" required value={form.name} onChange={handleChange} className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="partner-email" className="block text-sm font-medium text-white/80 mb-1">Email *</label>
                  <input id="partner-email" type="email" name="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="your.email@example.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="partner-phone" className="block text-sm font-medium text-white/80 mb-1">Phone</label>
                  <input id="partner-phone" type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass} placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label htmlFor="partner-organisation" className="block text-sm font-medium text-white/80 mb-1">Organisation</label>
                  <input id="partner-organisation" type="text" name="organisation" value={form.organisation} onChange={handleChange} className={inputClass} placeholder="Organisation, school or company" />
                </div>
              </div>
              <div>
                <label htmlFor="partner-type" className="block text-sm font-medium text-white/80 mb-1">How would you like to partner?</label>
                <select id="partner-type" name="partnership" value={form.partnership} onChange={handleChange} className={`${inputClass} [&>option]:text-[#18363a]`}>
                  <option value="">Choose a partnership type</option>
                  {partnershipTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.label}</option>
                  ))}
                  <option value="other">Something else / just an idea</option>
                </select>
              </div>
              <div>
                <label htmlFor="partner-message" className="block text-sm font-medium text-white/80 mb-1">Tell us what you have in mind *</label>
                <textarea id="partner-message" name="message" rows={5} required value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="A community, a destination, students, employees, resources, knowledge, technology, or simply an idea..." />
              </div>

              {status === 'success' && (
                <div className="bg-[#e0aa04]/20 border border-[#e0aa04]/50 text-[#e0aa04] px-4 py-3 rounded-lg">
                  Thank you! We&rsquo;ve received your message and will be in touch shortly.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-900/30 border border-red-500/40 text-red-300 px-4 py-3 rounded-lg">
                  Something went wrong. Please email us at <a href="mailto:admin@treksforall.in" className="underline">admin@treksforall.in</a>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="bg-[#e0aa04] text-[#18363a] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#c99903] transition-all duration-300 inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" aria-hidden="true" />
                <span>{submitting ? 'Sending…' : 'Start a conversation'}</span>
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnershipsPage;
