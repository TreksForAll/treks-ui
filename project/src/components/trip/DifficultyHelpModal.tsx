import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, HelpCircle, Mountain, AlertTriangle } from 'lucide-react';

interface DifficultyHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  tripType?: 'trek' | 'rafting' | 'all';
}

const DifficultyHelpModal: React.FC<DifficultyHelpModalProps> = ({
  isOpen,
  onClose,
  tripType = 'all'
}) => {
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const difficultyLevels = [
    {
      level: 'Easy',
      icon: Mountain,
      color: 'success',
      description: 'Gentle adventures suitable for beginners with basic fitness. Well-maintained trails, comfortable accommodations, and shorter daily distances.'
    },
    {
      level: 'Moderate',
      icon: Mountain,
      color: 'adventure',
      description: 'Active trips involving hiking over reasonable terrain, within vehicular access, up to elevations less than 4000 meters, or trips with long walking days, multiple rafting days, wilderness camping. Includes more demanding whitewater trips with Class III rapids.'
    },
    {
      level: 'Challenging',
      icon: AlertTriangle,
      color: 'warning',
      description: 'Our most demanding trips include climbing at high elevations in excess of 5000 meters, in remote and extreme conditions with no access to roads; trips to remote, extreme wilderness; mountaineering trips, and demanding whitewater trips with Class IV-V rapids.'
    },
    {
      level: 'Advanced',
      icon: AlertTriangle,
      color: 'error',
      description: 'Expert-level expeditions requiring extensive experience, technical skills, and exceptional physical conditioning. Extreme environments with significant risks.'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'success':
        return 'bg-success-50 border-success-200 text-success-800';
      case 'adventure':
        return 'bg-adventure-50 border-adventure-200 text-adventure-800';
      case 'warning':
        return 'bg-warning-50 border-warning-200 text-warning-800';
      case 'error':
        return 'bg-error-50 border-error-200 text-error-800';
      default:
        return 'bg-earth-50 border-earth-200 text-earth-800';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-earth-200 bg-earth-50">
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 p-2 rounded-full">
                  <HelpCircle className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-earth-800">Difficulty Levels Guide</h2>
                  <p className="text-sm text-earth-600">
                    {tripType === 'trek' ? 'Trekking' : tripType === 'rafting' ? 'Rafting' : 'Adventure'} Trip Classifications
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-earth-600 hover:text-earth-800 p-2 rounded-full hover:bg-earth-100 transition-all duration-300"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <div className="space-y-6">
                {difficultyLevels.map((level, index) => {
                  const IconComponent = level.icon;
                  const colorClasses = getColorClasses(level.color);
                  
                  return (
                    <motion.div
                      key={level.level}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`${colorClasses} border-2 rounded-xl p-5 hover:shadow-md transition-all duration-300`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-white p-3 rounded-full border border-earth-200 flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-earth-600" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-3">
                            <h3 className="text-lg font-bold text-earth-800">
                              {level.level}
                            </h3>
                            <div className="flex space-x-1">
                              {[...Array(4)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-2 rounded-full ${
                                    i < (level.level === 'Easy' ? 1 : level.level === 'Moderate' ? 2 : level.level === 'Challenging' ? 3 : 4)
                                      ? (level.level === 'Easy' ? 'bg-success-600' : level.level === 'Moderate' ? 'bg-adventure-600' : level.level === 'Challenging' ? 'bg-warning-600' : 'bg-error-600')
                                      : 'bg-earth-200'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          
                          <p className="text-earth-700 leading-relaxed text-sm md:text-base">
                            {level.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer Info */}
              <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-primary-800">Important Note</span>
                </div>
                <p className="text-sm text-primary-700 leading-relaxed">
                  Our difficulty ratings consider physical demands, technical requirements, altitude, 
                  and remoteness. All trips include comprehensive safety briefings and professional guides.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-earth-50 border-t border-earth-200">
              <div className="flex items-center justify-between">
                <p className="text-xs text-earth-600">
                  Need help choosing? Contact our adventure specialists
                </p>
                <button
                  onClick={onClose}
                  className="bg-warning-400 text-earth-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-warning-500 transition-colors duration-300"
                >
                  Got it
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DifficultyHelpModal;