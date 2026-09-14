import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Thermometer } from 'lucide-react';
import type { MonthlyWeather } from '../../data/trips';

interface CampWeatherGuideProps {
  location: string;
  months: MonthlyWeather[];
  departureDates: string[];
}

// Mobile: month + temperatures, then the range bar, then conditions.
// Desktop: one line per month.
const ROW_GRID =
  'grid grid-cols-[1fr_auto] md:grid-cols-[10.5rem_minmax(0,1fr)_6.5rem_15rem] items-center gap-x-4 gap-y-2';

const CampWeatherGuide: React.FC<CampWeatherGuideProps> = ({ location, months, departureDates }) => {
  const departureMonths = new Set(
    months.map(m => m.month).filter(name => departureDates.some(date => date.includes(name)))
  );

  const axisMin = Math.floor(Math.min(...months.map(m => m.low)) / 10) * 10;
  const axisMax = Math.max(axisMin + 10, Math.ceil(Math.max(...months.map(m => m.high)) / 10) * 10);
  const ticks: number[] = [];
  for (let t = axisMin; t <= axisMax; t += 10) ticks.push(t);
  const position = (temp: number) => ((temp - axisMin) / (axisMax - axisMin)) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-earth-800 mb-4">Weather & Climate</h2>
        <p className="text-earth-600 text-base sm:text-lg">
          Average monthly temperatures at {location}
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-earth-200">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <h3 className="text-xl font-bold text-earth-800 flex items-center gap-2">
            <Thermometer className="h-5 w-5 text-[#e0aa04]" aria-hidden="true" />
            <span>Month-by-Month Guide</span>
          </h3>
          {departureMonths.size > 0 && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-earth-600">
              <span className="flex items-center gap-2">
                <span className="w-5 h-2 rounded-full bg-[#e0aa04]" aria-hidden="true" />
                Departure month
              </span>
              <span className="flex items-center gap-2">
                <span className="w-5 h-2 rounded-full bg-earth-400" aria-hidden="true" />
                Other months
              </span>
            </div>
          )}
        </div>

        {/* Column headers and the shared temperature axis */}
        <div className={`${ROW_GRID} px-3 pb-2 border-b border-earth-200 text-xs font-semibold uppercase tracking-wide text-earth-500`}>
          <span className="col-start-1 row-start-1">Month</span>
          <span className="col-start-2 row-start-1 md:col-start-3 text-right">Low – High</span>
          <div
            className="relative col-span-2 row-start-2 md:col-span-1 md:col-start-2 md:row-start-1 h-4"
            aria-hidden="true"
          >
            {ticks.map((tick, index) => (
              <span
                key={tick}
                className={`absolute top-0 normal-case font-medium tabular-nums ${
                  index === 0 ? '' : index === ticks.length - 1 ? '-translate-x-full' : '-translate-x-1/2'
                }`}
                style={{ left: `${position(tick)}%` }}
              >
                {tick}°
              </span>
            ))}
          </div>
          <span className="hidden md:block md:col-start-4 md:row-start-1">Typical conditions</span>
        </div>

        <ul className="divide-y divide-earth-100">
          {months.map(month => {
            const isDeparture = departureMonths.has(month.month);
            const emphasized = departureMonths.size === 0 || isDeparture;

            return (
              <li
                key={month.month}
                className={`${ROW_GRID} px-3 py-3 transition-colors duration-200 ${
                  isDeparture ? 'bg-warning-50 shadow-[inset_4px_0_0_#e0aa04]' : 'hover:bg-earth-50'
                }`}
              >
                <div className="col-start-1 row-start-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className={isDeparture ? 'font-bold text-earth-900' : 'font-medium text-earth-700'}>
                    {month.month}
                  </span>
                  {isDeparture && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#e0aa04]/50 bg-white px-2 py-0.5 text-[11px] font-semibold text-earth-800">
                      <Calendar className="h-3 w-3 text-[#a17a02]" aria-hidden="true" />
                      Departure
                    </span>
                  )}
                </div>

                <div className="col-start-2 row-start-1 md:col-start-3 text-right whitespace-nowrap tabular-nums text-earth-800">
                  <span className="sr-only">
                    {month.low}°C to {month.high}°C
                  </span>
                  <span aria-hidden="true">
                    <span className="font-semibold">{month.low}°</span>
                    <span className="mx-1 text-earth-400">–</span>
                    <span className="font-semibold">{month.high}°C</span>
                  </span>
                </div>

                <div
                  className="col-span-2 row-start-2 md:col-span-1 md:col-start-2 md:row-start-1"
                  aria-hidden="true"
                >
                  <div className={`relative h-2 rounded-full ${isDeparture ? 'bg-white' : 'bg-earth-100'}`}>
                    <div
                      className={`absolute inset-y-0 rounded-full ${emphasized ? 'bg-[#e0aa04]' : 'bg-earth-400'}`}
                      style={{
                        left: `${position(month.low)}%`,
                        width: `${position(month.high) - position(month.low)}%`
                      }}
                    />
                  </div>
                </div>

                <p className="col-span-2 row-start-3 md:col-span-1 md:col-start-4 md:row-start-1 text-sm text-earth-600 leading-snug">
                  {month.conditions}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
        <p className="text-primary-800 font-medium">
          Please note: These are average temperatures. We recommend all participants check the weather
          forecast before packing to ensure appropriate clothing and gear.
        </p>
      </div>
    </motion.div>
  );
};

export default CampWeatherGuide;
