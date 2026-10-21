import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Compass,
  MapPin,
  Mountain,
  Tent,
  Waves,
  Trophy,
  ArrowRight,
  ChevronDown,
  Sparkles,
  TreePine,
  CheckCircle2
} from 'lucide-react';
import { journeyMilestones, JourneyMilestone } from '../../data/journey';
import SectionTitle from '../ui/SectionTitle';

const categoryIcon = (category?: JourneyMilestone['category']) => {
  switch (category) {
    case 'trek':
      return <Mountain className="w-4 h-4 text-[#e0aa04]" />;
    case 'camp':
      return <Tent className="w-4 h-4 text-[#8cd6dc]" />;
    case 'challenge':
      return <Trophy className="w-4 h-4 text-[#e0aa04]" />;
    case 'immersion':
      return <TreePine className="w-4 h-4 text-[#8cd6dc]" />;
    default:
      return <Compass className="w-4 h-4 text-[#e0aa04]" />;
  }
};

const categoryBadgeClass = (category?: JourneyMilestone['category']) => {
  switch (category) {
    case 'trek':
      return 'bg-[#e0aa04]/15 text-[#e0aa04] border-[#e0aa04]/30';
    case 'camp':
      return 'bg-[#377d87]/20 text-[#8cd6dc] border-[#377d87]/40';
    case 'challenge':
      return 'bg-gradient-to-r from-[#e0aa04]/20 to-[#f0c552]/20 text-[#e0aa04] border-[#e0aa04]/40';
    case 'immersion':
      return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
    default:
      return 'bg-white/10 text-white/80 border-white/20';
  }
};

const TravelTreePreview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showFullHistory, setShowFullHistory] = useState(false);

  // Scroll tracking for tree trunk growth
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 70%']
  });

  const trunkScaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001
  });

  // Display initial preview (key highlights) or complete history
  const previewMilestones = journeyMilestones.filter(
    (m) => m.featured || m.category === 'trek' || m.category === 'camp' || m.category === 'challenge'
  );

  const displayedMilestones = showFullHistory ? journeyMilestones : previewMilestones;

  return (
    <section
      ref={containerRef}
      id="travel-tree"
      className="relative overflow-hidden bg-[#102427] text-white py-16 sm:py-20 md:py-28"
    >
      {/* Background glow & subtle topographical contours */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,_rgba(55,125,135,0.22),_transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,_rgba(224,170,4,0.12),_transparent_55%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18363a] border border-[#377d87]/40 text-[#8cd6dc] text-xs font-bold uppercase tracking-[0.16em] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#e0aa04]" />
            <span>Our Journey · The Travel Tree</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-4xl md:text-4.5xl font-extrabold text-white leading-tight tracking-tight">
                How Our Trail Has Grown
              </h2>
              <p className="mt-3 text-sm sm:text-base md:text-lg text-white/75 max-w-2xl leading-relaxed">
                From a cup of chai in 2025 to high summits, roaring rivers, and mountain villages.
                Scroll down to see the tree branch out across the Himalayas — with full travel history ready to explore.
              </p>
            </div>

            {/* Quick Stats Pills */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#18363a]/90 border border-[#377d87]/40 shadow-sm">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#e0aa04]" />
                <span className="text-xs sm:text-sm font-bold text-white">14+ Milestones</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#18363a]/90 border border-[#377d87]/40 shadow-sm">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#8cd6dc]" />
                <span className="text-xs sm:text-sm font-bold text-white">6 New Destinations</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tree Trunk & Branches */}
        <div className="relative">
          {/* Animated Central Trunk Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-8 w-1 bg-[#18363a] rounded-full">
            <motion.div
              style={{ scaleY: trunkScaleY, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-[#e0aa04] via-[#8cd6dc] to-[#e0aa04] rounded-full shadow-[0_0_12px_rgba(224,170,4,0.4)]"
            />
          </div>

          {/* Animated Left Trunk Line (Mobile) */}
          <div className="md:hidden absolute left-4 sm:left-5 top-4 bottom-8 w-1 bg-[#18363a] rounded-full">
            <motion.div
              style={{ scaleY: trunkScaleY, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-[#e0aa04] via-[#8cd6dc] to-[#e0aa04] rounded-full shadow-[0_0_10px_rgba(224,170,4,0.4)]"
            />
          </div>

          {/* Timeline Nodes & Branch Cards */}
          <div className="space-y-8 sm:space-y-12">
            {displayedMilestones.map((milestone, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={`${milestone.title}-${milestone.year}`}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  viewport={{ once: true, margin: '-60px' }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
                >
                  {/* Central Node Badge (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#102427] border-2 border-[#e0aa04] shadow-md shadow-[#e0aa04]/20 items-center justify-center z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#e0aa04]" />
                  </div>

                  {/* Mobile Node Badge */}
                  <div className="md:hidden absolute left-2.5 sm:left-3.5 top-5 w-4 h-4 rounded-full bg-[#102427] border-2 border-[#e0aa04] shadow-md shadow-[#e0aa04]/20 z-10 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e0aa04]" />
                  </div>

                  {/* Branch Card */}
                  <div className="w-full pl-9 sm:pl-12 md:pl-0 md:w-1/2">
                    <div
                      className={`group relative rounded-2xl bg-[#18363a]/80 hover:bg-[#18363a] border border-[#377d87]/40 hover:border-[#e0aa04]/70 p-4 sm:p-5 md:p-6 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-black/40 hover:-translate-y-0.5 ${
                        isEven ? 'md:mr-8 lg:mr-12' : 'md:ml-8 lg:ml-12'
                      }`}
                    >
                      {/* Top Meta Header */}
                      <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-extrabold text-[#e0aa04] tracking-wide">
                            {milestone.year}
                          </span>
                          {milestone.badge && (
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold border uppercase tracking-wider ${categoryBadgeClass(
                                milestone.category
                              )}`}
                            >
                              {categoryIcon(milestone.category)}
                              {milestone.badge}
                            </span>
                          )}
                        </div>

                        {milestone.stats && (
                          <span className="text-[10px] sm:text-xs font-semibold text-white/60">
                            {milestone.stats}
                          </span>
                        )}
                      </div>

                      {/* Title & Location */}
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-[#e0aa04] transition-colors leading-snug">
                        {milestone.title}
                      </h3>

                      {milestone.location && (
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8cd6dc] mt-1 mb-2">
                          <MapPin className="w-3.5 h-3.5 text-[#e0aa04] shrink-0" />
                          <span>{milestone.location}</span>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-white/75 leading-relaxed mt-1">
                        {milestone.description}
                      </p>

                      {/* Action Link (if trip exists) */}
                      {milestone.tripId && (
                        <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between">
                          <Link
                            to={`/trip/${milestone.tripId}`}
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#e0aa04] hover:text-[#f0c552] transition-colors group/link"
                          >
                            <span>Explore Adventure</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                          </Link>

                          <span className="text-[10px] uppercase font-bold tracking-wider text-white/40">
                            Inclusive Route
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer Area: Toggle Full History & Link to Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              {showFullHistory
                ? 'Showing All 14 Milestones & Locations'
                : `Showing ${previewMilestones.length} Key Trail Highlights`}
            </h4>
            <p className="text-xs sm:text-sm text-white/60 mt-0.5">
              {showFullHistory
                ? 'From our inception in Delhi to high summits, rivers, and camps across India.'
                : 'Expand to view the complete chronological history including our founding dates.'}
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            {/* Toggle Button */}
            <button
              type="button"
              onClick={() => setShowFullHistory(!showFullHistory)}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-[#18363a] hover:bg-[#214b51] border border-[#377d87]/60 text-white font-semibold text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-md"
            >
              <span>{showFullHistory ? 'Show Key Highlights Only' : 'Explore Full Travel History'}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  showFullHistory ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Link to Full About Story */}
            <Link
              to="/about#journey"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl bg-[#e0aa04] hover:bg-[#c99903] text-[#18363a] font-bold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-[#e0aa04]/20"
            >
              <span>Our Full Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelTreePreview;
