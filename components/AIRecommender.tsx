
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
    <div className="p-6 relative">
      {/* Background Bubbles or Cloud Shape */}
      <div className="absolute inset-0 border-2 border-blue-800 rounded-[255px/25px] rotate-1 z-0 bg-white"></div>

      <div className="relative z-10 space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl animate-bounce">🤔</span>
          <h3 className="text-2xl font-marker text-blue-900">Unsure? Let AI help!</h3>
        </div>
        <p className="text-lg font-hand text-blue-900 leading-tight">Tell me who you are (e.g. Student, Marketer), and I'll suggest a lab.</p>

        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 p-2 border-b-2 border-blue-900 bg-transparent focus:outline-none font-hand text-xl placeholder-blue-300"
            placeholder="I am a..."
            value={background}
            onChange={(e) => setBackground(e.target.value)}
          />
          <button
            onClick={handleGetAdvice}
            disabled={loading}
            className="px-4 py-1 bg-blue-600 text-white font-marker rounded-full rotate-2 hover:rotate-0 transition-transform"
          >
            {loading ? '...' : 'Ask'}
          </button>
        </div>

        {recommendation && (
          <div className="mt-4 p-4 border-2 border-dashed border-blue-400 rounded-lg bg-blue-50">
            <p className="font-bold text-blue-900 mb-1 font-display uppercase">Recommendation:</p>
            <p className="text-blue-900 font-hand text-2xl">{recommendation.path}</p>
            <p className="text-sm text-blue-800 mt-2">"{recommendation.reason}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIRecommender;
