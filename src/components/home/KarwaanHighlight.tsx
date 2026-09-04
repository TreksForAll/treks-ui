import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdcoFn2Ao1tKJ8J_Myit6QO61Ul58a2QSLvWBC0V202v28ciw/viewform';

const sponsorshipTypes = [
  { title: 'Full sponsorship', text: '100% of the experience fee covered' },
  { title: 'Partial sponsorship', text: 'Contribute what you can, we cover the rest' },
  { title: 'Pay it forward', text: 'Fund someone else’s first step' }
];

const KarwaanHighlight = () => {
  return (
    <section className="relative overflow-hidden bg-[#141211] py-12 sm:py-16 md:py-24">
      {/* Backdrop */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/dayara/Dayara-Cover.webp"
          alt=""
          className="w-full h-full object-cover grayscale"
          loading="lazy"
          style={{ opacity: 0.35 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141211] via-[#141211]/92 to-[#141211]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 border-2 border-[#e0aa04] px-3 py-1.5">
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#e0aa04] flex-shrink-0" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#e0aa04]">
              A Treks for All initiative
            </span>
          </div>

          <h2 className="mt-4 sm:mt-5 text-[clamp(40px,7vw,84px)] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-white">
            Karwaan
          </h2>
          <p className="mt-1 sm:mt-2 text-lg sm:text-2xl md:text-3xl font-semibold text-[#e0aa04]">
            Making &ldquo;someday&rdquo; possible.
          </p>

          <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-slate-300 max-w-2xl">
            For many, the outdoors stays a distant dream because of financial, social or physical
            barriers. Karwaan sponsors the experience fee for eligible treks and camps &mdash; so
            cost is never the reason someone is left behind.
          </p>
        </motion.div>

        {/* Sponsorship types */}
        <div className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/15 border border-white/15 max-w-4xl">
          {sponsorshipTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#141211] p-4 sm:p-5"
            >
              <div className="w-8 h-1 bg-[#e0aa04] mb-3" />
              <h3 className="text-white font-bold text-sm sm:text-base">{type.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-snug">{type.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
        >
          <Link
            to="/karwaan"
            className="inline-flex items-center justify-center gap-2 bg-[#e0aa04] text-[#201e1d] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:bg-[#d9a513] transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <span>Explore Karwaan</span>
            <ArrowRight className="h-5 w-5 flex-shrink-0" />
          </Link>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-2 border-white/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:bg-white hover:text-[#201e1d] hover:border-white transition-all duration-300"
          >
            Apply or nominate someone
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default KarwaanHighlight;
