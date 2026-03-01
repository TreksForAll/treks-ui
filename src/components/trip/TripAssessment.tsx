import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  User, 
  Heart, 
  Mountain, 
  Clock, 
  Zap,
  Target,
  Award,
  ArrowRight,
  RotateCcw
} from 'lucide-react';

interface TripAssessmentProps {
  tripId: string;
  tripName: string;
  difficulty: string;
  duration: string;
  maxAltitude: string;
  activities: string[];
}

interface Question {
  id: string;
  category: 'fitness' | 'experience' | 'comfort' | 'expectations';
  question: string;
  options: {
    value: number;
    label: string;
    description?: string;
  }[];
  weight: number;
}

interface AssessmentResult {
  overallScore: number;
  categoryScores: {
    fitness: number;
    experience: number;
    comfort: number;
    expectations: number;
  };
  recommendation: 'excellent' | 'good' | 'challenging' | 'not-recommended';
  feedback: string[];
  preparationTips: string[];
}

const TripAssessment: React.FC<TripAssessmentProps> = ({
  tripId,
  tripName,
  difficulty,
  duration,
  maxAltitude,
  activities
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState<AssessmentResult | null>(null);

  const questions: Question[] = [
    {
      id: 'fitness-cardio',
      category: 'fitness',
      question: 'How would you rate your current cardiovascular fitness?',
      options: [
        { value: 1, label: 'Poor', description: 'I get winded climbing stairs' },
        { value: 2, label: 'Fair', description: 'I can walk for 30 minutes without difficulty' },
        { value: 3, label: 'Good', description: 'I exercise regularly 2-3 times per week' },
        { value: 4, label: 'Excellent', description: 'I run/cycle regularly and am very fit' }
      ],
      weight: 3
    },
    {
      id: 'fitness-hiking',
      category: 'fitness',
      question: 'What is the longest hike you have completed recently?',
      options: [
        { value: 1, label: 'Under 5km', description: 'Short walks only' },
        { value: 2, label: '5-15km', description: 'Half-day hikes' },
        { value: 3, label: '15-25km', description: 'Full-day hikes' },
        { value: 4, label: 'Over 25km', description: 'Long distance hiking experience' }
      ],
      weight: 3
    },
    {
      id: 'experience-altitude',
      category: 'experience',
      question: 'What is your experience with high altitude (above 3,000m)?',
      options: [
        { value: 1, label: 'No experience', description: 'Never been above 2,000m' },
        { value: 2, label: 'Some experience', description: 'Been to 2,500-3,500m occasionally' },
        { value: 3, label: 'Good experience', description: 'Comfortable up to 4,000m' },
        { value: 4, label: 'Extensive experience', description: 'Regularly trek above 4,500m' }
      ],
      weight: 3
    },
    {
      id: 'experience-multiday',
      category: 'experience',
      question: 'How many multi-day treks have you completed?',
      options: [
        { value: 1, label: 'None', description: 'Only day hikes' },
        { value: 2, label: '1-2 treks', description: 'Limited multi-day experience' },
        { value: 3, label: '3-5 treks', description: 'Some multi-day experience' },
        { value: 4, label: '5+ treks', description: 'Experienced multi-day trekker' }
      ],
      weight: 2
    },
    {
      id: 'comfort-camping',
      category: 'comfort',
      question: 'How comfortable are you with camping and basic facilities?',
      options: [
        { value: 1, label: 'Very uncomfortable', description: 'Prefer hotels and full amenities' },
        { value: 2, label: 'Somewhat uncomfortable', description: 'Can manage for 1-2 nights' },
        { value: 3, label: 'Comfortable', description: 'Enjoy camping and outdoor living' },
        { value: 4, label: 'Very comfortable', description: 'Love wilderness camping' }
      ],
      weight: 2
    },
    {
      id: 'comfort-weather',
      category: 'comfort',
      question: 'How do you handle challenging weather conditions?',
      options: [
        { value: 1, label: 'Poorly', description: 'Avoid outdoor activities in bad weather' },
        { value: 2, label: 'With difficulty', description: 'Can manage light rain/cold' },
        { value: 3, label: 'Well', description: 'Comfortable in most weather' },
        { value: 4, label: 'Very well', description: 'Enjoy challenging conditions' }
      ],
      weight: 2
    },
    {
      id: 'expectations-challenge',
      category: 'expectations',
      question: 'What level of physical challenge are you seeking?',
      options: [
        { value: 1, label: 'Minimal', description: 'Leisurely pace, lots of rest' },
        { value: 2, label: 'Light', description: 'Some challenge but not overwhelming' },
        { value: 3, label: 'Moderate', description: 'Good workout, push my limits' },
        { value: 4, label: 'High', description: 'Maximum challenge, test my endurance' }
      ],
      weight: 2
    },
    {
      id: 'expectations-group',
      category: 'expectations',
      question: 'How do you feel about group travel and following itineraries?',
      options: [
        { value: 1, label: 'Prefer independence', description: 'Like to go at my own pace' },
        { value: 2, label: 'Somewhat flexible', description: 'Can adapt to group dynamics' },
        { value: 3, label: 'Enjoy groups', description: 'Like meeting people and shared experiences' },
        { value: 4, label: 'Love group adventures', description: 'Thrive in team environments' }
      ],
      weight: 1
    }
  ];

  const calculateResults = (): AssessmentResult => {
    let totalScore = 0;
    let totalWeight = 0;
    const categoryScores = { fitness: 0, experience: 0, comfort: 0, expectations: 0 };
    const categoryWeights = { fitness: 0, experience: 0, comfort: 0, expectations: 0 };

    questions.forEach(question => {
      const answer = answers[question.id];
      if (answer !== undefined) {
        totalScore += answer * question.weight;
        totalWeight += question.weight;
        categoryScores[question.category] += answer * question.weight;
        categoryWeights[question.category] += question.weight;
      }
    });

    // Normalize scores to 0-100
    const overallScore = (totalScore / (totalWeight * 4)) * 100;
    
    Object.keys(categoryScores).forEach(category => {
      const cat = category as keyof typeof categoryScores;
      categoryScores[cat] = (categoryScores[cat] / (categoryWeights[cat] * 4)) * 100;
    });

    // Determine recommendation
    let recommendation: AssessmentResult['recommendation'];
    let feedback: string[] = [];
    let preparationTips: string[] = [];

    if (overallScore >= 80) {
      recommendation = 'excellent';
      feedback.push('🎉 You are excellently prepared for this adventure!');
      feedback.push('Your fitness level and experience make you an ideal candidate for this trip.');
    } else if (overallScore >= 65) {
      recommendation = 'good';
      feedback.push('✅ You are well-suited for this trip with some preparation.');
      feedback.push('Your profile matches well with the trip requirements.');
    } else if (overallScore >= 45) {
      recommendation = 'challenging';
      feedback.push('⚠️ This trip will be challenging but achievable with proper preparation.');
      feedback.push('Consider improving your fitness and gaining more experience before departure.');
    } else {
      recommendation = 'not-recommended';
      feedback.push('❌ This trip may be too challenging for your current level.');
      feedback.push('We recommend building more experience with easier trips first.');
    }

    // Add category-specific feedback
    if (categoryScores.fitness < 60) {
      feedback.push('Focus on improving your cardiovascular fitness and hiking endurance.');
      preparationTips.push('Start a regular cardio program 8-12 weeks before the trip');
      preparationTips.push('Practice hiking with a weighted backpack');
    }

    if (categoryScores.experience < 60) {
      feedback.push('Consider gaining more high-altitude and multi-day trekking experience.');
      preparationTips.push('Complete 2-3 practice treks at similar altitudes');
      preparationTips.push('Practice using all your gear before the trip');
    }

    if (categoryScores.comfort < 60) {
      feedback.push('Work on becoming more comfortable with outdoor living and challenging conditions.');
      preparationTips.push('Try camping in various weather conditions');
      preparationTips.push('Practice with basic facilities and limited amenities');
    }

    return {
      overallScore,
      categoryScores,
      recommendation,
      feedback,
      preparationTips
    };
  };

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate and show results
      const results = calculateResults();
      setAssessmentResult(results);
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setAssessmentResult(null);
  };

  const getRecommendationColor = (rec: string) => {
    switch (rec) {
      case 'excellent': return 'text-success-600 bg-success-100 border-success-200';
      case 'good': return 'text-primary-600 bg-primary-100 border-primary-200';
      case 'challenging': return 'text-warning-600 bg-warning-100 border-warning-200';
      case 'not-recommended': return 'text-error-600 bg-error-100 border-error-200';
      default: return 'text-earth-600 bg-earth-100 border-earth-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'fitness': return Heart;
      case 'experience': return Mountain;
      case 'comfort': return User;
      case 'expectations': return Target;
      default: return CheckCircle;
    }
  };

  if (showResults && assessmentResult) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div>
          <h2 className="text-3xl font-bold text-earth-800 mb-4">Trip Assessment Results</h2>
          <p className="text-earth-600 text-lg">
            Based on your responses, here's how well you match with {tripName}
          </p>
        </div>

        {/* Overall Score */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-earth-200">
          <div className="text-center mb-6">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 bg-earth-200 rounded-full"></div>
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-adventure-500"
                style={{
                  background: `conic-gradient(from 0deg, #059669 0deg, #059669 ${(assessmentResult.overallScore / 100) * 360}deg, #e5e7eb ${(assessmentResult.overallScore / 100) * 360}deg)`
                }}
              ></div>
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-earth-800">
                    {Math.round(assessmentResult.overallScore)}%
                  </div>
                  <div className="text-xs text-earth-600">Match</div>
                </div>
              </div>
            </div>
            <div className={`inline-block px-4 py-2 rounded-full border-2 font-semibold ${getRecommendationColor(assessmentResult.recommendation)}`}>
              {assessmentResult.recommendation.charAt(0).toUpperCase() + assessmentResult.recommendation.slice(1)} Match
            </div>
          </div>

          {/* Feedback */}
          <div className="space-y-3">
            {assessmentResult.feedback.map((feedback, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                  {assessmentResult.recommendation === 'excellent' && <CheckCircle className="h-6 w-6 text-success-600" />}
                  {assessmentResult.recommendation === 'good' && <CheckCircle className="h-6 w-6 text-primary-600" />}
                  {assessmentResult.recommendation === 'challenging' && <AlertTriangle className="h-6 w-6 text-warning-600" />}
                  {assessmentResult.recommendation === 'not-recommended' && <XCircle className="h-6 w-6 text-error-600" />}
                </div>
                <p className="text-earth-700">{feedback}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-earth-200">
          <h3 className="text-xl font-bold text-earth-800 mb-6">Category Breakdown</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(assessmentResult.categoryScores).map(([category, score]) => {
              const IconComponent = getCategoryIcon(category);
              return (
                <div key={category} className="text-center p-4 bg-earth-50 rounded-lg">
                  <IconComponent className="h-8 w-8 mx-auto mb-2 text-primary-600" />
                  <div className="text-2xl font-bold text-earth-800 mb-1">
                    {Math.round(score)}%
                  </div>
                  <div className="text-sm text-earth-600 capitalize font-medium">
                    {category}
                  </div>
                  <div className="mt-2 bg-earth-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-500 to-adventure-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${score}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Preparation Tips */}
        {assessmentResult.preparationTips.length > 0 && (
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-earth-200">
            <h3 className="text-xl font-bold text-earth-800 mb-6 flex items-center space-x-2">
              <Award className="h-6 w-6 text-adventure-500" />
              <span>Preparation Recommendations</span>
            </h3>
            <div className="space-y-3">
              {assessmentResult.preparationTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-adventure-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-adventure-600 text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-earth-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={resetAssessment}
            className="flex items-center space-x-2 px-6 py-3 border border-earth-300 text-earth-700 rounded-lg hover:bg-earth-50 transition-colors duration-300"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Retake Assessment</span>
          </button>
          
          <button className="flex items-center space-x-2 px-6 py-3 bg-warning-400 text-earth-900 rounded-lg hover:bg-warning-500 transition-colors duration-300">
            <span>Book This Trip</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold text-earth-800 mb-4">Is This Trip For Me?</h2>
        <p className="text-earth-600 text-lg">
          Take this quick assessment to see how well {tripName} matches your experience and expectations.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-earth-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-earth-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-primary-600">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="w-full bg-earth-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-primary-500 to-adventure-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-earth-200"
        >
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className={`w-3 h-3 rounded-full ${
                currentQ.category === 'fitness' ? 'bg-error-500' :
                currentQ.category === 'experience' ? 'bg-primary-500' :
                currentQ.category === 'comfort' ? 'bg-adventure-500' : 'bg-success-500'
              }`}></div>
              <span className="text-sm font-medium text-earth-600 capitalize">
                {currentQ.category}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-earth-800 mb-2">
              {currentQ.question}
            </h3>
          </div>

          <div className="space-y-3">
            {currentQ.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(currentQ.id, option.value)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                  answers[currentQ.id] === option.value
                    ? 'border-primary-500 bg-primary-50 text-primary-800'
                    : 'border-earth-200 bg-white hover:border-primary-300 hover:bg-primary-25'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    answers[currentQ.id] === option.value
                      ? 'border-primary-500 bg-primary-500'
                      : 'border-earth-300'
                  }`}>
                    {answers[currentQ.id] === option.value && (
                      <CheckCircle className="h-3 w-3 text-white" />
                    )}
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{option.label}</div>
                    {option.description && (
                      <div className="text-sm text-earth-600">{option.description}</div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className="flex items-center space-x-2 px-6 py-3 border border-earth-300 text-earth-700 rounded-lg hover:bg-earth-50 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
          <span>Previous</span>
        </button>

        <button
          onClick={nextQuestion}
          disabled={answers[currentQ.id] === undefined}
          className="flex items-center space-x-2 px-6 py-3 bg-warning-400 text-earth-900 rounded-lg hover:bg-warning-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>{currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default TripAssessment;