import React from 'react';
import { Mountain, TrendingUp, Gauge } from 'lucide-react';

export const getDifficultyIcon = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return <Mountain className="h-4 w-4" />;
    case 'moderate':
      return <TrendingUp className="h-4 w-4" />;
    case 'advanced':
    case 'challenging':
      return <Gauge className="h-4 w-4" />;
    default:
      return <Mountain className="h-4 w-4" />;
  }
};

export const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'text-success-600 bg-success-50';
    case 'moderate':
      return 'text-warning-600 bg-warning-50';
    case 'advanced':
    case 'challenging':
      return 'text-error-600 bg-error-50';
    default:
      return 'text-success-600 bg-success-50';
  }
};
