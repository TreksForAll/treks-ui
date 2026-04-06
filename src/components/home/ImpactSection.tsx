import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const CountUp = ({ target, suffix = '', duration = 2500 }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px' });

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const timer = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(progress * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const ImpactSection = () => {
  const stats = [
    { target: 154, suffix: '+', label: 'Total Guests', delay: 0.1 },
    { target: 60, suffix: ' %', label: 'Persons with Disabilities', delay: 0.2 },
    { target: 10, suffix: '+', label: 'Unique Disabilities', delay: 0.3 },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#18363a]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <SectionTitle
            title="Who's Journeyed With Us"
            subtitle="Redefining what's possible. Every step, a milestone."
            description=""
            align="left"
            light={true}
          />
        </motion.div>

        <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 text-left">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: stat.delay }}
              viewport={{ once: true }}
              className="bg-[#214b51] rounded-xl sm:rounded-2xl p-3 sm:p-6 md:p-8 border border-[#377d87]/30 shadow-lg"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#e0aa04] mb-2">
                <CountUp target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="text-white font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
