
import React, { useState } from 'react';
import { getWorkshopAdvice } from '../services/gemini';
import { RecommendationResponse } from '../types';

const AIRecommender: React.FC = () => {
  const [background, setBackground] = useState('');
  const [recommendation, setRecommendation] = useState<RecommendationResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGetAdvice = async () => {
    if (!background.trim()) return;
    setLoading(true);
    const result = await getWorkshopAdvice(background);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <div className="p-6 brutalist-border bg-blue-50 border-blue-600 space-y-4">
      <div className="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-800">
          <rect x="3" y="11" width="18" height="10" rx="2"/>
          <circle cx="12" cy="5" r="2"/>
          <path d="M12 7v4"/>
          <line x1="8" y1="16" x2="8" y2="16"/>
          <line x1="16" y1="16" x2="16" y2="16"/>
        </svg>
        <h3 className="text-2xl font-bold doodle-header text-blue-800">Unsure of your path?</h3>
      </div>
      <p className="text-lg font-medium text-blue-700">Tell me a bit about what you do, and I'll recommend the best Lab for you.</p>
      
      <div className="flex gap-2">
        <input 
          type="text"
          className="flex-1 p-3 border-2 border-blue-600 bg-white focus:outline-none"
          placeholder="e.g. Student, Marketer, Developer..."
          value={background}
          onChange={(e) => setBackground(e.target.value)}
        />
        <button 
          onClick={handleGetAdvice}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white font-bold brutalist-button border-blue-800"
        >
          {loading ? 'Thinking...' : 'Ask AI'}
        </button>
      </div>

      {recommendation && (
        <div className="mt-4 p-4 bg-white border-2 border-blue-600 animate-pulse-once">
          <p className="font-bold text-blue-900 mb-1 uppercase tracking-tight">Recommendation: {recommendation.path}</p>
          <p className="text-blue-800 italic handwritten text-xl">"{recommendation.reason}"</p>
        </div>
      )}
    </div>
  );
};

export default AIRecommender;
