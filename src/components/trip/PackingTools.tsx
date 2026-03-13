import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  CheckSquare, 
  Square, 
  FileText, 
  Thermometer, 
  Mountain, 
  Calendar,
  MapPin,
  Phone,
  AlertTriangle,
  Info,
  Backpack
} from 'lucide-react';

interface PackingItem {
  id: string;
  name: string;
  category: string;
  essential: boolean;
  seasonal: boolean;
  activitySpecific: boolean;
  quantity?: string;
  notes?: string;
}

interface PackingToolsProps {
  tripId: string;
  tripName: string;
  destination: string;
  season: string;
  activity: string;
  difficulty: string;
  duration: string;
}

const PackingTools: React.FC<PackingToolsProps> = ({
  tripId,
  tripName,
  destination,
  season,
  activity,
  difficulty,
  duration
}) => {
  const [packingItems, setPackingItems] = useState<PackingItem[]>([]);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<'checklist' | 'guide'>('checklist');
  const [isGenerating, setIsGenerating] = useState(false);

  // Base packing items database
  const basePackingItems: PackingItem[] = [
    // Clothing
    { id: 'hiking-boots', name: 'Hiking Boots (Waterproof)', category: 'Clothing', essential: true, seasonal: false, activitySpecific: true, quantity: '1 pair', notes: 'Well broken-in boots recommended' },
    { id: 'thermal-base', name: 'Thermal Base Layers', category: 'Clothing', essential: true, seasonal: true, activitySpecific: false, quantity: '2-3 sets' },
    { id: 'fleece-jacket', name: 'Fleece/Insulation Jacket', category: 'Clothing', essential: true, seasonal: true, activitySpecific: false },
    { id: 'down-jacket', name: 'Down Jacket', category: 'Clothing', essential: true, seasonal: true, activitySpecific: false },
    { id: 'rain-jacket', name: 'Waterproof Rain Jacket', category: 'Clothing', essential: true, seasonal: false, activitySpecific: true },
    { id: 'trekking-pants', name: 'Trekking Pants', category: 'Clothing', essential: true, seasonal: false, activitySpecific: true, quantity: '2-3 pairs' },
    { id: 'wool-socks', name: 'Wool Hiking Socks', category: 'Clothing', essential: true, seasonal: false, activitySpecific: true, quantity: '4-5 pairs' },
    { id: 'sun-hat', name: 'Sun Hat with Brim', category: 'Clothing', essential: true, seasonal: false, activitySpecific: true },
    { id: 'warm-gloves', name: 'Insulated Gloves', category: 'Clothing', essential: false, seasonal: true, activitySpecific: false },

    // Technical Gear
    { id: 'backpack', name: 'Trekking Backpack (40-60L)', category: 'Technical Gear', essential: true, seasonal: false, activitySpecific: true },
    { id: 'sleeping-bag', name: 'Sleeping Bag (Temperature Rated)', category: 'Technical Gear', essential: true, seasonal: true, activitySpecific: false, notes: 'Check temperature rating for destination' },
    { id: 'trekking-poles', name: 'Trekking Poles', category: 'Technical Gear', essential: false, seasonal: false, activitySpecific: true, quantity: '1 pair' },
    { id: 'headlamp', name: 'LED Headlamp + Extra Batteries', category: 'Technical Gear', essential: true, seasonal: false, activitySpecific: true },
    { id: 'water-bottles', name: 'Water Bottles/Hydration System', category: 'Technical Gear', essential: true, seasonal: false, activitySpecific: true, quantity: '2-3L capacity' },

    // Personal Care
    { id: 'sunscreen', name: 'High SPF Sunscreen (50+)', category: 'Personal Care', essential: true, seasonal: false, activitySpecific: true, quantity: '100ml+' },
    { id: 'sunglasses', name: 'UV Protection Sunglasses', category: 'Personal Care', essential: true, seasonal: false, activitySpecific: true },
    { id: 'first-aid', name: 'Personal First Aid Kit', category: 'Personal Care', essential: true, seasonal: false, activitySpecific: true },
    { id: 'medications', name: 'Personal Medications', category: 'Personal Care', essential: true, seasonal: false, activitySpecific: false },
    { id: 'toiletries', name: 'Biodegradable Toiletries', category: 'Personal Care', essential: true, seasonal: false, activitySpecific: false },

    // Electronics
    { id: 'camera', name: 'Camera + Extra Batteries', category: 'Electronics', essential: false, seasonal: false, activitySpecific: false },
    { id: 'power-bank', name: 'Portable Power Bank', category: 'Electronics', essential: true, seasonal: false, activitySpecific: true },
    { id: 'phone', name: 'Smartphone in Waterproof Case', category: 'Electronics', essential: true, seasonal: false, activitySpecific: true },

    // Documents
    { id: 'passport', name: 'Passport/ID (Waterproof Pouch)', category: 'Documents', essential: true, seasonal: false, activitySpecific: false },
    { id: 'permits', name: 'Trekking Permits (if required)', category: 'Documents', essential: true, seasonal: false, activitySpecific: true },
    { id: 'insurance', name: 'Travel Insurance Documents', category: 'Documents', essential: true, seasonal: false, activitySpecific: false },
    { id: 'emergency-contacts', name: 'Emergency Contact Information', category: 'Documents', essential: true, seasonal: false, activitySpecific: false }
  ];

  // Generate trip-specific packing list
  useEffect(() => {
    const generatePackingList = () => {
      let filteredItems = [...basePackingItems];

      // Filter based on activity type
      if (activity === 'river') {
        filteredItems = filteredItems.filter(item => 
          !item.activitySpecific || 
          item.name.toLowerCase().includes('water') ||
          item.name.toLowerCase().includes('quick') ||
          item.essential
        );
        // Add river-specific items
        filteredItems.push(
          { id: 'dry-bag', name: 'Waterproof Dry Bags', category: 'Technical Gear', essential: true, seasonal: false, activitySpecific: true, quantity: 'Multiple sizes' },
          { id: 'quick-dry', name: 'Quick-Dry Clothing', category: 'Clothing', essential: true, seasonal: false, activitySpecific: true, quantity: '3-4 sets' }
        );
      }

      // Filter based on season
      if (season !== 'Winter') {
        filteredItems = filteredItems.filter(item => !item.seasonal || item.essential);
      }

      // Filter based on difficulty
      if (difficulty === 'Easy') {
        filteredItems = filteredItems.filter(item => item.essential || !item.activitySpecific);
      }

      setPackingItems(filteredItems);
    };

    generatePackingList();
  }, [activity, season, difficulty]);

  const handleItemToggle = (itemId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const generatePDF = async (type: 'checklist' | 'guide') => {
    setIsGenerating(true);
    
    // Simulate PDF generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real implementation, this would generate and download a PDF
    const filename = type === 'checklist' 
      ? `${tripName.replace(/\s+/g, '-')}-Packing-Checklist.pdf`
      : `${tripName.replace(/\s+/g, '-')}-Pre-Departure-Guide.pdf`;
    
    console.log(`Generated ${filename}`);
    alert(`${filename} would be downloaded in a real implementation`);
    
    setIsGenerating(false);
  };

  const getCompletionPercentage = () => {
    if (packingItems.length === 0) return 0;
    return Math.round((checkedItems.size / packingItems.length) * 100);
  };

  const groupItemsByCategory = () => {
    const grouped: { [key: string]: PackingItem[] } = {};
    packingItems.forEach(item => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });
    return grouped;
  };

  const emergencyContacts = [
    { name: 'Aquaterra 24/7 Emergency', number: '+91 96431 84862', type: 'Primary' },
    { name: 'Local Emergency Services', number: '108', type: 'Emergency' },
    { name: 'Tourist Helpline', number: '1363', type: 'Tourist Support' }
  ];

  const localCustoms = [
    'Dress modestly when visiting religious sites',
    'Remove shoes before entering temples and local homes',
    'Ask permission before photographing people',
    'Respect local wildlife and maintain safe distances',
    'Follow Leave No Trace principles',
    'Support local businesses and communities'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Backpack className="h-8 w-8 text-adventure-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800">
              Trip Preparation Tools
            </h2>
          </div>
          <p className="text-lg text-earth-600 max-w-2xl ml-0">
            Get ready for your adventure with our customized packing lists and pre-departure guides
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-earth-100 p-1 rounded-lg flex space-x-1">
            <button
              onClick={() => setActiveTab('checklist')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'checklist'
                  ? 'bg-white text-adventure-600 shadow-md'
                  : 'text-earth-600 hover:text-adventure-600'
              }`}
            >
              <CheckSquare className="h-5 w-5 inline mr-2" />
              Packing Checklist
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'guide'
                  ? 'bg-white text-adventure-600 shadow-md'
                  : 'text-earth-600 hover:text-adventure-600'
              }`}
            >
              <FileText className="h-5 w-5 inline mr-2" />
              Pre-Departure Guide
            </button>
          </div>
        </div>

        {/* Packing Checklist Tab */}
        {activeTab === 'checklist' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Progress Bar */}
            <div className="bg-earth-100 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-earth-800">Packing Progress</h3>
                <span className="text-2xl font-bold text-adventure-600">
                  {getCompletionPercentage()}%
                </span>
              </div>
              <div className="w-full bg-earth-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-adventure-500 to-adventure-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${getCompletionPercentage()}%` }}
                ></div>
              </div>
              <p className="text-earth-600 text-sm mt-2">
                {checkedItems.size} of {packingItems.length} items packed
              </p>
            </div>

            {/* Trip Information */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-primary-50 p-4 rounded-lg text-left">
                <MapPin className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                <div className="font-semibold text-primary-800">{destination}</div>
                <div className="text-sm text-primary-600">Destination</div>
              </div>
              <div className="bg-adventure-50 p-4 rounded-lg text-left">
                <Calendar className="h-6 w-6 text-adventure-600 mx-auto mb-2" />
                <div className="font-semibold text-adventure-800">{duration}</div>
                <div className="text-sm text-adventure-600">Duration</div>
              </div>
              <div className="bg-success-50 p-4 rounded-lg text-left">
                <Thermometer className="h-6 w-6 text-success-600 mx-auto mb-2" />
                <div className="font-semibold text-success-800">{season}</div>
                <div className="text-sm text-success-600">Season</div>
              </div>
              <div className="bg-warning-50 p-4 rounded-lg text-left">
                <Mountain className="h-6 w-6 text-warning-600 mx-auto mb-2" />
                <div className="font-semibold text-warning-800">{difficulty}</div>
                <div className="text-sm text-warning-600">Difficulty</div>
              </div>
            </div>

            {/* Packing Categories */}
            <div className="space-y-8">
              {Object.entries(groupItemsByCategory()).map(([category, items]) => (
                <div key={category} className="bg-earth-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-earth-800 mb-4 flex items-center space-x-2">
                    <span className="bg-warning-400 text-earth-900 rounded-full w-8 h-8 flex items-center justify-center text-sm">
                      {items.filter(item => checkedItems.has(item.id)).length}
                    </span>
                    <span>{category}</span>
                    <span className="text-earth-500 text-base font-normal">
                      ({items.filter(item => checkedItems.has(item.id)).length}/{items.length})
                    </span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className={`bg-white p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                          checkedItems.has(item.id)
                            ? 'border-success-300 bg-success-50'
                            : 'border-earth-200 hover:border-adventure-300'
                        }`}
                        onClick={() => handleItemToggle(item.id)}
                      >
                        <div className="flex items-start space-x-3">
                          {checkedItems.has(item.id) ? (
                            <CheckSquare className="h-5 w-5 text-success-600 mt-0.5 flex-shrink-0" />
                          ) : (
                            <Square className="h-5 w-5 text-earth-400 mt-0.5 flex-shrink-0" />
                          )}
                          
                          <div className="flex-1">
                            <div className={`font-semibold ${
                              checkedItems.has(item.id) ? 'text-success-800 line-through' : 'text-earth-800'
                            }`}>
                              {item.name}
                              {item.essential && (
                                <span className="ml-2 text-xs bg-error-100 text-error-700 px-2 py-0.5 rounded-full">
                                  Essential
                                </span>
                              )}
                            </div>
                            {item.quantity && (
                              <div className="text-sm text-earth-600 mt-1">
                                Quantity: {item.quantity}
                              </div>
                            )}
                            {item.notes && (
                              <div className="text-sm text-adventure-600 mt-1">
                                Note: {item.notes}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Download Button */}
            <div className="text-left mt-12">
              <button
                onClick={() => generatePDF('checklist')}
                disabled={isGenerating}
                className="bg-warning-400 text-earth-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-warning-500 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center space-x-3"
              >
                <Download className={`h-6 w-6 ${isGenerating ? 'animate-spin' : ''}`} />
                <span>{isGenerating ? 'Generating PDF...' : 'Download Packing Checklist'}</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* Pre-Departure Guide Tab */}
        {activeTab === 'guide' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Emergency Contacts */}
              <div className="bg-error-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-error-800 mb-4 flex items-center space-x-2">
                  <Phone className="h-6 w-6" />
                  <span>Emergency Contacts</span>
                </h3>
                <div className="space-y-3">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-error-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-error-800">{contact.name}</div>
                          <div className="text-sm text-error-600">{contact.type}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-error-800 text-lg">{contact.number}</div>
                          <div className="text-sm text-error-600">Available 24/7</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Local Customs */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary-800 mb-4 flex items-center space-x-2">
                  <Info className="h-6 w-6" />
                  <span>Local Customs & Guidelines</span>
                </h3>
                <div className="space-y-3">
                  {localCustoms.map((custom, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg border border-primary-200 flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-primary-800">{custom}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="mt-8 bg-warning-50 rounded-xl p-6 border border-warning-200">
              <h3 className="text-xl font-bold text-warning-800 mb-4 flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6" />
                <span>Important Pre-Departure Notes</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-warning-800 mb-2">Health & Fitness</h4>
                  <ul className="text-warning-700 space-y-1">
                    <li>• Ensure you're physically prepared for the activity level</li>
                    <li>• Consult your doctor if you have any medical conditions</li>
                    <li>• Start training at least 4-6 weeks before departure</li>
                    <li>• Stay hydrated and maintain a healthy diet</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-warning-800 mb-2">Travel Requirements</h4>
                  <ul className="text-warning-700 space-y-1">
                    <li>• Check passport validity (minimum 6 months)</li>
                    <li>• Ensure travel insurance covers adventure activities</li>
                    <li>• Arrive at departure location 1 day early</li>
                    <li>• Keep copies of important documents</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="text-left mt-12">
              <button
                onClick={() => generatePDF('guide')}
                disabled={isGenerating}
                className="bg-warning-400 text-earth-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-warning-500 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center space-x-3"
              >
                <Download className={`h-6 w-6 ${isGenerating ? 'animate-spin' : ''}`} />
                <span>{isGenerating ? 'Generating Guide...' : 'Download Pre-Departure Guide'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PackingTools;
