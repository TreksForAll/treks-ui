import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import SEO from '../components/ui/SEO';

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdcoFn2Ao1tKJ8J_Myit6QO61Ul58a2QSLvWBC0V202v28ciw/viewform';

const eligibilityItems = [
  {
    title: 'The outdoors hasn’t been easily accessible to you.',
    text: 'Your situation, background or circumstances have made outdoor experiences harder to access.'
  },
  {
    title: 'You have the dream, but not the budget.',
    text: 'You’ve always wanted to experience the outdoors, but financial circumstances have made participating out of reach.'
  },
  {
    title: 'You believe in shared experiences.',
    text: 'You’re excited to meet new people, share the journey and experience the outdoors together.'
  }
];

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: 'Who can apply for Karwaan?',
    answer:
      'Karwaan is for anyone with a genuine interest in outdoor adventure, but without the means or opportunity — be it for financial, social, physical or any other reason.'
  },
  {
    question: 'Do I need previous trekking experience?',
    answer:
      'No. You do not need any previous trekking or camping experience. However, you should be comfortable with walking for a few hours at a stretch, navigating uneven terrain, and managing the physical demands of an outdoor trek.'
  },
  {
    question: 'Can I apply more than once?',
    answer:
      'No. Each person can apply for only one Karwaan sponsorship opportunity, so we can give as many deserving people as possible the chance.'
  },
  {
    question: 'Can I choose which trek or camp I want to join?',
    answer:
      'Yes. You can indicate your preference from our list of upcoming eligible Treks for All departures. Your participation will be confirmed based on availability and suitability.'
  },
  {
    question: 'What does the sponsorship cover?',
    answer: (
      <>
        Karwaan offers full or partial sponsorship of the experience fee for eligible Treks for All
        treks and camps. The experience fee generally covers the entire trip cost once you reach the
        designated starting point, including accommodation, meals, guides and other
        programme-related support.
        <br />
        <br />
        <strong>What isn’t covered:</strong> Air/train/road travel from your location to and from
        the designated starting point, and personal essentials such as suitable clothing and
        footwear.
      </>
    )
  },
  {
    question: 'Will my entire trek be sponsored?',
    answer:
      'Karwaan offers both full and partial sponsorships. The level of support is decided case by case, based on your circumstances and the selected experience.'
  },
  {
    question: 'Do I have to pay anything?',
    answer:
      'You will need to arrange travel to and from the designated starting point and personal essentials such as suitable clothing and footwear. If you don’t have suitable trekking shoes or clothing, we can assist you with rental options where available.'
  },
  {
    question: 'Can children apply?',
    answer: 'Yes. Children can participate with a parent or guardian.'
  },
  {
    question: 'Can persons with disabilities apply?',
    answer:
      'Yes. Persons with disabilities are encouraged to apply. Accessibility support can be provided where required, depending on the selected experience.'
  },
  {
    question: 'Can I nominate someone?',
    answer:
      'Yes. You can nominate someone you know who would value the opportunity, provided they meet the Karwaan eligibility criteria.'
  },
  {
    question: 'What do I need to submit with my application?',
    answer:
      'You’ll need to complete the application form and upload a 30-second video or audio telling us why you want to become a Karwaan traveller and what this opportunity would mean to you.'
  },
  {
    question: 'What should I say in my 30-second video or audio?',
    answer:
      'There’s no right answer. Just tell us why you want to experience the outdoors and what becoming a Karwaan traveller would mean to you. No fancy camera is needed — just use your phone and be yourself.'
  },
  {
    question: 'How are participants selected?',
    answer:
      'Applications are reviewed by the Treks for All team. Selection and the level of sponsorship are determined based on the applicant’s circumstances and the requirements of the selected trek or camp.'
  },
  {
    question: 'When will I know if I’ve been selected?',
    answer:
      'Our team will review applications and get in touch with shortlisted applicants within 14 days.'
  },
  {
    question: 'What if I don’t own trekking equipment?',
    answer:
      'You don’t need to own expensive equipment to apply. Equipment provided as part of the selected trek or camp is covered according to the programme. For personal essentials such as trekking shoes and suitable clothing, we can assist with rental options where available.'
  },
  {
    question: 'What happens after I’m selected?',
    answer:
      'We’ll connect with you, help you choose an upcoming trek or camp based on availability, confirm your sponsorship and share everything you need to know to prepare for your experience.'
  }
];

const KarwaanPage = () => {
  const heroRef = useRef(null);
  const [checks, setChecks] = useState([false, false, false]);
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const allChecked = checks.every(Boolean);

  const toggleCheck = (i: number) => {
    setChecks(prev => prev.map((c, idx) => (idx === i ? !c : c)));
  };

  const toggleFaq = (i: number) => {
    setOpenFaqs(prev => (prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]));
  };

  return (
    <div className="pt-16 sm:pt-20 md:pt-28 min-h-screen bg-white text-[#201e1d]">
      <SEO
        title="Karwaan - Treks for All | Making “someday” possible"
        description="Karwaan is a Treks for All initiative offering sponsored outdoor opportunities — full or partial sponsorship of the experience fee — for those who would not otherwise have the means to experience the outdoors. Apply or nominate someone today."
        keywords="Karwaan, sponsored treks, free trek sponsorship, accessible adventure, inclusive trekking, Treks for All initiative, outdoor sponsorship India"
        image="https://treksforall.in/dayara/Dayara-Cover.webp"
        url="https://treksforall.in/karwaan"
      />

      {/* Hero */}
      <header
        ref={heroRef}
        className="relative min-h-[62vh] flex items-end overflow-hidden bg-[#141211]"
      >
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src="/dayara/Dayara-Cover.webp"
            alt="Trekkers on a Himalayan trail"
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#141211]/80 via-[#141211]/25 to-[#141211]/10" />
        <div className="relative z-[2] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start gap-3.5"
          >
            <span className="text-xs tracking-[0.16em] uppercase font-bold text-white">
              A Treks for All initiative
            </span>
            <h1 className="text-[clamp(52px,8vw,104px)] leading-[0.95] m-0 text-white tracking-[-0.02em] uppercase font-extrabold">
              Karwaan
            </h1>
            <p className="text-[clamp(19px,2.4vw,28px)] font-semibold text-[#e0aa04] m-0">
              Making &ldquo;someday&rdquo; possible.
            </p>
          </motion.div>
        </div>
      </header>

      {/* 01 — Intro / What does Karwaan cover */}
      <section className="border-b-2 border-[#201e1d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5 items-start"
          >
            <p className="text-[21px] leading-[1.5] m-0 max-w-[56ch]">
              <strong>
                What if the adventure you&rsquo;ve always dreamed of was closer than you thought?
              </strong>{' '}
              For some, exploring the outdoors is simply part of life. But for many, the outdoors
              remains a distant dream. Treks for All brings you Karwaan &mdash; sponsored outdoor
              opportunities for those who would not otherwise have the means to experience them.
            </p>
            <p className="text-[17px] leading-[1.55] m-0 text-earth-600 max-w-[56ch]">
              The barrier may be financial, social, physical or simply the absence of opportunity.
              Karwaan is about turning that &ldquo;someday&rdquo; into a first step into the
              outdoors.
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e0aa04] text-[#201e1d] px-6 py-3 font-bold text-[15px] hover:bg-[#c99903] transition-colors duration-300 no-underline"
            >
              Apply or nominate someone
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-l-2 border-[#201e1d] pl-8 flex flex-col gap-5"
          >
            <p className="m-0 text-xs tracking-[0.14em] uppercase font-bold text-[#a17a02]">
              01 &mdash; What does Karwaan cover?
            </p>
            <p className="m-0 text-base leading-[1.55]">
              Karwaan offers <strong>full or partial sponsorship of the experience fee</strong> for
              eligible Treks for All treks and camps. Each sponsorship is decided case by case,
              based on your individual circumstances and the requirements of the selected trek or
              camp.
            </p>
            <Link
              to="/trips"
              className="self-start border-2 border-[#201e1d] text-[#201e1d] px-6 py-3 font-bold text-[15px] hover:bg-[#201e1d] hover:text-white transition-colors duration-300 no-underline"
            >
              View upcoming treks &amp; camps
            </Link>
            <div className="grid grid-cols-2 gap-0.5">
              <div className="aspect-[1.2] overflow-hidden">
                <img
                  src="/dayara/Dayara-Cover.webp"
                  alt="Dayara Bugyal meadows"
                  className="w-full h-full object-cover grayscale"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[1.2] overflow-hidden">
                <img
                  src="/sham-valley/sham-valley-cover.webp"
                  alt="Sham Valley trail"
                  className="w-full h-full object-cover grayscale"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 — Eligibility */}
      <section className="border-b-2 border-[#201e1d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col gap-7 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <p className="m-0 text-xs tracking-[0.14em] uppercase font-bold text-[#a17a02]">
              02 &mdash; Eligibility
            </p>
            <h2 className="text-[clamp(30px,4vw,46px)] m-0 tracking-[-0.01em] font-extrabold">
              Who&rsquo;s eligible?
            </h2>
            <p className="text-base text-earth-600 m-0">
              Ready to join the Karwaan? Check ALL the boxes below to find out if you&rsquo;re
              eligible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 w-full border-t-2 border-l-2 border-[#201e1d]">
            {eligibilityItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                role="checkbox"
                aria-checked={checks[i]}
                tabIndex={0}
                onClick={() => toggleCheck(i)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCheck(i);
                  }
                }}
                className="flex flex-col gap-3.5 bg-white p-6 cursor-pointer select-none border-r-2 border-b-2 border-[#201e1d] box-border hover:bg-[#fbf4da] transition-colors duration-300"
              >
                <span
                  className={`w-[30px] h-[30px] border-2 border-[#e0aa04] flex items-center justify-center transition-colors duration-200 ${
                    checks[i] ? 'bg-[#e0aa04]' : 'bg-transparent'
                  }`}
                >
                  <Check
                    className={`h-[18px] w-[18px] text-[#201e1d] transition-opacity duration-200 ${
                      checks[i] ? 'opacity-100' : 'opacity-0'
                    }`}
                    strokeWidth={3}
                  />
                </span>
                <strong className="text-[16.5px] leading-[1.35]">{item.title}</strong>
                <span className="text-earth-600 text-[14.5px] leading-[1.5]">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {allChecked && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="w-full box-border bg-[#e0aa04] px-7 py-6 flex flex-wrap items-center gap-[18px] justify-between"
              >
                <p className="m-0 text-[22px] font-bold text-[#201e1d]">
                  You&rsquo;re ready to join the Karwaan.
                </p>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline bg-[#201e1d] text-white px-6 py-3 font-bold text-[15px] hover:bg-[#3a3634] transition-colors duration-300"
                >
                  Apply now
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2.5"
          >
            <span className="border-2 border-[#201e1d] px-3.5 py-1.5 text-sm font-semibold">
              No previous trekking experience required
            </span>
            <span className="border-2 border-[#201e1d] px-3.5 py-1.5 text-sm font-semibold">
              Children can participate with a parent or guardian
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full border-2 border-[#201e1d] px-7 py-6 flex flex-wrap items-center gap-5 justify-between box-border"
          >
            <div>
              <h3 className="text-[21px] font-bold m-0 mb-1">
                Know someone who deserves a chance?
              </h3>
              <p className="m-0 text-[15px] text-earth-600">
                You can also nominate someone you know who would value this opportunity.
              </p>
            </div>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline bg-[#201e1d] text-white px-6 py-3 font-bold text-[15px] hover:bg-[#3a3634] transition-colors duration-300"
            >
              Nominate someone
            </a>
          </motion.div>
        </div>
      </section>

      {/* 03 — How to apply */}
      <section className="border-b-2 border-[#201e1d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col gap-7 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <p className="m-0 text-xs tracking-[0.14em] uppercase font-bold text-[#a17a02]">
              03 &mdash; How to apply
            </p>
            <h2 className="text-[clamp(30px,4vw,46px)] m-0 tracking-[-0.01em] font-extrabold">
              Two simple steps
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 w-full bg-[#201e1d] border-2 border-[#201e1d]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 flex flex-col items-start gap-3.5"
            >
              <span className="text-[44px] font-bold text-[#e0aa04] leading-none">1</span>
              <h3 className="text-[22px] font-bold m-0">Fill in the application form</h3>
              <p className="m-0 text-[15px] leading-[1.55] text-earth-600">
                Tell us a little about yourself &mdash; or the person you are nominating. It takes
                about 5 minutes.
              </p>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-[#e0aa04] text-[#201e1d] px-6 py-3 font-bold text-[15px] hover:bg-[#c99903] transition-colors duration-300 no-underline"
              >
                Click here to apply
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 flex flex-col items-start gap-3.5"
            >
              <span className="text-[44px] font-bold text-[#e0aa04] leading-none">2</span>
              <h3 className="text-[22px] font-bold m-0">Upload a 30-second video or audio</h3>
              <p className="m-0 text-[15px] leading-[1.55] text-earth-600">
                Tell us why you want to become a Karwaan traveller and what this opportunity would
                mean to you. No fancy camera needed &mdash; just your phone. You&rsquo;ll upload it
                in the same form.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full pt-2">
            {[
              {
                label: 'What happens next',
                labelClass: 'text-earth-500',
                borderClass: 'border-[#201e1d]',
                text: 'Our team reviews your application and gets in touch if you’re shortlisted — within 14 days.',
                bold: false
              },
              {
                label: 'If selected',
                labelClass: 'text-earth-500',
                borderClass: 'border-[#201e1d]',
                text: 'We’ll discuss the available upcoming treks or camps, help you choose one based on availability, and share everything you need to know before you set off.',
                bold: false
              },
              {
                label: 'Then',
                labelClass: 'text-[#a17a02]',
                borderClass: 'border-[#e0aa04]',
                text: 'It’s time to hit the trail.',
                bold: true
              }
            ].map((note, i) => (
              <motion.div
                key={note.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`border-t-2 ${note.borderClass} pt-4`}
              >
                <p
                  className={`m-0 mb-1.5 text-xs tracking-[0.14em] uppercase font-bold ${note.labelClass}`}
                >
                  {note.label}
                </p>
                <p
                  className={
                    note.bold
                      ? 'm-0 text-[17px] font-bold leading-[1.45]'
                      : 'm-0 text-[15px] leading-[1.55]'
                  }
                >
                  {note.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e0aa04]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[72px] flex flex-col gap-[26px] items-start"
        >
          <h2 className="text-[clamp(40px,6.5vw,84px)] m-0 text-[#201e1d] leading-[0.98] tracking-[-0.02em] uppercase max-w-[16ch] font-extrabold">
            Your &ldquo;someday&rdquo; starts here.
          </h2>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline bg-[#201e1d] text-white px-7 py-3.5 font-bold text-base hover:bg-[#3a3634] transition-colors duration-300"
          >
            Apply or nominate someone
          </a>
          <p className="m-0 text-sm tracking-[0.14em] uppercase font-bold text-[#201e1d]/70">
            Karwaan &mdash; Making &ldquo;someday&rdquo; possible.
          </p>
        </motion.div>
      </section>

      {/* 04 — FAQ */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-[minmax(220px,320px)_1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2 md:sticky md:top-32"
          >
            <p className="m-0 text-xs tracking-[0.14em] uppercase font-bold text-[#a17a02]">
              04 &mdash; FAQ
            </p>
            <h2 className="text-[clamp(28px,3.4vw,40px)] m-0 tracking-[-0.01em] font-extrabold">
              Frequently asked questions
            </h2>
            <p className="m-0 text-[15px] text-earth-600">
              Everything you need to know before you apply.
            </p>
          </motion.div>

          <div className="flex flex-col border-t-2 border-[#201e1d]">
            {faqs.map((faq, i) => {
              const isOpen = openFaqs.includes(i);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3) }}
                  viewport={{ once: true }}
                  className="border-b-2 border-[#201e1d] px-1 py-4"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    aria-expanded={isOpen}
                    className="w-full font-bold text-base flex justify-between gap-4 items-baseline text-left cursor-pointer focus:outline-none"
                  >
                    <span className="flex gap-3.5">
                      <span className="text-[#a17a02] text-[13px] min-w-[24px]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {faq.question}
                    </span>
                    <span className="text-[#e0aa04] flex-none">
                      {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 mb-0 ml-[38px] text-[15px] leading-[1.6] text-earth-700">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KarwaanPage;
