import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Thermometer, 
  Cloud, 
  Sun, 
  CloudRain, 
  Wind, 
  Eye, 
  Snowflake,
  ChevronDown,
  TrendingUp,
  Calendar
} from 'lucide-react';

interface WeatherClimateProps {
  destination: string;
  altitude: string;
  season: string;
}

interface MonthData {
  month: string;
  tempHigh: number;
  tempLow: number;
  rainfall: number;
  conditions: string;
  visibility: string;
  windSpeed: number;
  recommended: boolean;
}

const WeatherClimate: React.FC<WeatherClimateProps> = ({ destination, altitude, season }) => {
  const [selectedMonth, setSelectedMonth] = useState<string>('June');
  const [chartView, setChartView] = useState<'temperature' | 'rainfall'>('temperature');

  // Mock weather data - would come from API in real implementation
  const monthlyData: MonthData[] = [
    { month: 'Jan', tempHigh: -5, tempLow: -15, rainfall: 45, conditions: 'Heavy snow', visibility: 'Poor', windSpeed: 25, recommended: false },
    { month: 'Feb', tempHigh: -2, tempLow: -12, rainfall: 35, conditions: 'Snow/Clear', visibility: 'Fair', windSpeed: 20, recommended: false },
    { month: 'Mar', tempHigh: 5, tempLow: -8, rainfall: 25, conditions: 'Mixed', visibility: 'Good', windSpeed: 15, recommended: false },
    { month: 'Apr', tempHigh: 12, tempLow: -2, rainfall: 20, conditions: 'Cool/Clear', visibility: 'Excellent', windSpeed: 12, recommended: false },
    { month: 'May', tempHigh: 18, tempLow: 4, rainfall: 15, conditions: 'Pleasant', visibility: 'Excellent', windSpeed: 10, recommended: true },
    { month: 'Jun', tempHigh: 22, tempLow: 8, rainfall: 10, conditions: 'Ideal', visibility: 'Excellent', windSpeed: 8, recommended: true },
    { month: 'Jul', tempHigh: 25, tempLow: 12, rainfall: 25, conditions: 'Warm', visibility: 'Good', windSpeed: 8, recommended: true },
    { month: 'Aug', tempHigh: 23, tempLow: 10, rainfall: 30, conditions: 'Monsoon', visibility: 'Fair', windSpeed: 10, recommended: false },
    { month: 'Sep', tempHigh: 20, tempLow: 6, rainfall: 20, conditions: 'Clear', visibility: 'Excellent', windSpeed: 10, recommended: true },
    { month: 'Oct', tempHigh: 15, tempLow: 1, rainfall: 15, conditions: 'Cool/Clear', visibility: 'Excellent', windSpeed: 12, recommended: true },
    { month: 'Nov', tempHigh: 8, tempLow: -5, rainfall: 25, conditions: 'Cold', visibility: 'Good', windSpeed: 18, recommended: false },
    { month: 'Dec', tempHigh: 2, tempLow: -10, rainfall: 40, conditions: 'Snow', visibility: 'Poor', windSpeed: 22, recommended: false }
  ];

  const selectedData = monthlyData.find(data => data.month === selectedMonth) || monthlyData[5];

  const getConditionIcon = (conditions: string) => {
    if (conditions.includes('Snow') || conditions.includes('snow')) return Snowflake;
    if (conditions.includes('Rain') || conditions.includes('Monsoon')) return CloudRain;
    if (conditions.includes('Clear') || conditions.includes('Ideal')) return Sun;
    return Cloud;
  };

  const getRecommendationColor = (recommended: boolean) => {
    return recommended ? 'text-success-600 bg-success-100' : 'text-warning-600 bg-warning-100';
  };

  const getVisibilityColor = (visibility: string) => {
    switch (visibility) {
      case 'Excellent': return 'text-success-600 bg-success-100';
      case 'Good': return 'text-primary-600 bg-primary-100';
      case 'Fair': return 'text-warning-600 bg-warning-100';
      default: return 'text-error-600 bg-error-100';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-earth-800 mb-4">Weather & Climate</h2>
        <p className="text-earth-600 text-lg">
          Comprehensive weather information for {destination} at {altitude}
        </p>
      </div>

      {/* Weather Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-earth-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-earth-800">Monthly Climate Patterns</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => setChartView('temperature')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                chartView === 'temperature'
                  ? 'bg-warning-400 text-earth-900'
                  : 'bg-earth-100 text-earth-600 hover:bg-earth-200'
              }`}
            >
              <Thermometer className="h-4 w-4 inline mr-1" />
              Temperature
            </button>
            <button
              onClick={() => setChartView('rainfall')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                chartView === 'rainfall'
                  ? 'bg-warning-400 text-earth-900'
                  : 'bg-earth-100 text-earth-600 hover:bg-earth-200'
              }`}
            >
              <CloudRain className="h-4 w-4 inline mr-1" />
              Rainfall
            </button>
          </div>
        </div>

        {/* Chart Area */}
        <div className="h-64 mb-6">
          {chartView === 'temperature' ? (
            <div className="flex items-end justify-between h-full px-4">
              {monthlyData.map((data, index) => (
                <div key={data.month} className="flex flex-col items-center space-y-2">
                  <div className="flex flex-col items-center space-y-1">
                    {/* High temp bar */}
                    <div
                      className="bg-error-400 w-6 rounded-t-sm"
                      style={{
                        height: `${Math.max(5, ((data.tempHigh + 20) / 45) * 100)}px`
                      }}
                    />
                    {/* Low temp bar */}
                    <div
                      className="bg-primary-400 w-6 rounded-b-sm"
                      style={{
                        height: `${Math.max(5, ((data.tempLow + 20) / 45) * 80)}px`
                      }}
                    />
                  </div>
                  <div className="text-xs text-earth-600 text-left">
                    <div className="font-semibold">{data.tempHigh}°</div>
                    <div>{data.tempLow}°</div>
                    <div className="mt-1">{data.month}</div>
                  </div>
                  {data.recommended && (
                    <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-end justify-between h-full px-4">
              {monthlyData.map((data, index) => (
                <div key={data.month} className="flex flex-col items-center space-y-2">
                  <div
                    className="bg-primary-500 w-8 rounded-t-sm"
                    style={{
                      height: `${(data.rainfall / 50) * 200}px`
                    }}
                  />
                  <div className="text-xs text-earth-600 text-left">
                    <div className="font-semibold">{data.rainfall}mm</div>
                    <div className="mt-1">{data.month}</div>
                  </div>
                  {data.recommended && (
                    <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-error-400 rounded"></div>
            <span>High Temperature</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-primary-400 rounded"></div>
            <span>Low Temperature</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-success-500 rounded-full"></div>
            <span>Recommended Months</span>
          </div>
        </div>
      </div>

      {/* Month Selection */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-earth-200">
        <h3 className="text-xl font-bold text-earth-800 mb-4">Select Month for Details</h3>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-2 mb-6">
          {monthlyData.map((data) => (
            <button
              key={data.month}
              onClick={() => setSelectedMonth(data.month)}
              className={`p-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedMonth === data.month
                  ? 'bg-warning-400 text-earth-900'
                  : data.recommended
                  ? 'bg-success-100 text-success-800 hover:bg-success-200'
                  : 'bg-earth-100 text-earth-600 hover:bg-earth-200'
              }`}
            >
              {data.month}
            </button>
          ))}
        </div>

        {/* Selected Month Details */}
        <motion.div
          key={selectedMonth}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="bg-gradient-to-br from-error-50 to-error-100 p-4 rounded-xl">
            <div className="flex items-center space-x-2 mb-2">
              <Thermometer className="h-5 w-5 text-error-600" />
              <span className="font-semibold text-error-800">Temperature</span>
            </div>
            <div className="text-2xl font-bold text-error-800">
              {selectedData.tempHigh}° / {selectedData.tempLow}°
            </div>
            <p className="text-error-600 text-sm">High / Low (°C)</p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-4 rounded-xl">
            <div className="flex items-center space-x-2 mb-2">
              <CloudRain className="h-5 w-5 text-primary-600" />
              <span className="font-semibold text-primary-800">Precipitation</span>
            </div>
            <div className="text-2xl font-bold text-primary-800">
              {selectedData.rainfall}mm
            </div>
            <p className="text-primary-600 text-sm">Monthly average</p>
          </div>

          <div className="bg-gradient-to-br from-adventure-50 to-adventure-100 p-4 rounded-xl">
            <div className="flex items-center space-x-2 mb-2">
              <Wind className="h-5 w-5 text-adventure-600" />
              <span className="font-semibold text-adventure-800">Wind Speed</span>
            </div>
            <div className="text-2xl font-bold text-adventure-800">
              {selectedData.windSpeed} km/h
            </div>
            <p className="text-adventure-600 text-sm">Average wind</p>
          </div>

          <div className="bg-gradient-to-br from-earth-50 to-earth-100 p-4 rounded-xl">
            <div className="flex items-center space-x-2 mb-2">
              <Eye className="h-5 w-5 text-earth-600" />
              <span className="font-semibold text-earth-800">Visibility</span>
            </div>
            <div className="text-lg font-bold text-earth-800">
              {selectedData.visibility}
            </div>
            <p className="text-earth-600 text-sm">Mountain views</p>
          </div>
        </motion.div>

        {/* Conditions and Recommendation */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-earth-50 p-4 rounded-xl">
            <h4 className="font-semibold text-earth-800 mb-3">Typical Conditions</h4>
            <div className="flex items-center space-x-3">
              {React.createElement(getConditionIcon(selectedData.conditions), {
                className: "h-6 w-6 text-primary-600"
              })}
              <span className="text-earth-700 font-medium">{selectedData.conditions}</span>
            </div>
          </div>

          <div className="bg-earth-50 p-4 rounded-xl">
            <h4 className="font-semibold text-earth-800 mb-3">Recommendation</h4>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getRecommendationColor(selectedData.recommended)}`}>
              {selectedData.recommended ? '✅ Excellent for trekking' : '⚠️ Challenging conditions'}
            </span>
          </div>
        </div>
      </div>

      {/* Historical Patterns */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-earth-200">
        <h3 className="text-xl font-bold text-earth-800 mb-4 flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-primary-600" />
          <span>Historical Weather Patterns</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-left p-4 bg-primary-50 rounded-lg">
            <div className="text-2xl font-bold text-primary-600 mb-2">85%</div>
            <p className="text-primary-800 font-medium">Clear Days</p>
            <p className="text-primary-600 text-sm">in recommended months</p>
          </div>
          
          <div className="text-left p-4 bg-success-50 rounded-lg">
            <div className="text-2xl font-bold text-success-600 mb-2">-8°C</div>
            <p className="text-success-800 font-medium">Coldest Recorded</p>
            <p className="text-success-600 text-sm">January 2019</p>
          </div>
          
          <div className="text-left p-4 bg-adventure-50 rounded-lg">
            <div className="text-2xl font-bold text-adventure-600 mb-2">28°C</div>
            <p className="text-adventure-800 font-medium">Warmest Recorded</p>
            <p className="text-adventure-600 text-sm">July 2022</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-warning-50 rounded-lg border border-warning-200">
          <h4 className="font-semibold text-warning-800 mb-2">Climate Considerations</h4>
          <ul className="text-warning-700 text-sm space-y-1">
            <li>• Weather can change rapidly at high altitude - be prepared for all conditions</li>
            <li>• Best visibility typically occurs in early morning hours</li>
            <li>• Monsoon season (July-August) brings increased risk of landslides and trail closures</li>
            <li>• Night temperatures can drop significantly even in summer months</li>
          </ul>
        </div>

        <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
          <p className="text-primary-800 font-medium">
            Please note: These are average temperatures. We recommend all participants check the weather forecast before packing to ensure appropriate clothing and gear.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherClimate;
