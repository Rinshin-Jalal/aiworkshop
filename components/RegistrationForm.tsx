
import React, { useState } from 'react';
import { LabOption, RegistrationData } from '../types';
import { saveRegistration } from '../services/supabase';

interface RegistrationFormProps {
  onComplete: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onComplete }) => {
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: '',
    email: '',
    phone: '',
    labOption: 'General' as any,
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const result = await saveRegistration(formData);
    
    if (result.success) {
      onComplete();
    } else {
      setError(result.error || 'Submission failed');
      setIsSubmitting(false);
    }
  };

  // Matching the screenshot: Dark textured inputs with bold labels
  const inputClass = "w-full p-4 border-2 border-black rounded-none focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all font-medium text-lg bg-[#333] text-white placeholder:text-gray-400 paper-texture";
  const labelClass = "block text-xl font-bold doodle-header text-black uppercase tracking-tight mb-1 opacity-90";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-100 border-2 border-red-500 font-bold text-red-700">
          {error}
        </div>
      )}

      <div className="space-y-1">
        <label className={labelClass}>Full Name</label>
        <input 
          type="text" 
          required 
          className={inputClass}
          placeholder="Your Name"
          value={formData.fullName}
          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className={labelClass}>Email</label>
          <input 
            type="email" 
            required 
            className={inputClass}
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div className="space-y-1">
          <label className={labelClass}>Phone</label>
          <input 
            type="tel" 
            required 
            className={inputClass}
            placeholder="Your Phone"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className={labelClass}>Choose Your Lab</label>
        <select 
          className={inputClass}
          value={formData.labOption}
          onChange={(e) => setFormData({...formData, labOption: e.target.value as any})}
        >
          <option value="General" className="bg-[#333]">General Path</option>
          <option value={LabOption.VIBE_CODING} className="bg-[#333]">{LabOption.VIBE_CODING}</option>
          <option value={LabOption.RESEARCH} className="bg-[#333]">{LabOption.RESEARCH}</option>
        </select>
      </div>

      <div className="space-y-1">
        <label className={labelClass}>What do you want to build?</label>
        <textarea 
          rows={3}
          className={inputClass}
          placeholder="Briefly describe your goals..."
          value={formData.motivation}
          onChange={(e) => setFormData({...formData, motivation: e.target.value})}
        />
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className={`w-full py-6 text-2xl font-black uppercase tracking-widest brutalist-button text-black ${isSubmitting ? 'bg-gray-200' : 'bg-yellow-400 hover:bg-yellow-300'}`}
      >
        {isSubmitting ? 'Registering...' : 'Lock My Spot'}
      </button>

      <p className="text-center font-bold text-black opacity-80 italic">
        * No spam, just pure AI vibes.
      </p>
    </form>
  );
};

export default RegistrationForm;
