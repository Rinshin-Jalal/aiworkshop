
import React, { useState } from 'react';
import { RegistrationData } from '../types';
import { saveRegistration } from '../services/supabase';

interface RegistrationFormProps {
  onComplete: () => void;
  showSuccess?: boolean;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onComplete }) => {
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: '',
    email: '',
    phone: '',
    age: 18,
    gender: 'Prefer not to say',
    place: '',
    collegeSchool: '',
    course: '',
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  const handleWhatsAppRedirect = () => {
    const whatsappUrl = 'https://chat.whatsapp.com/LfzFsf23sjLHIvbevgF12t';
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const result = await saveRegistration(formData);

    if (result.success) {
      // Auto-redirect to WhatsApp if on mobile
      if (isMobile()) {
        handleWhatsAppRedirect();
      }
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className={labelClass}>Age</label>
          <input
            type="number"
            required
            min="10"
            max="100"
            className={inputClass}
            placeholder="Your Age"
            value={formData.age}
            onChange={(e) => setFormData({...formData, age: parseInt(e.target.value)})}
          />
        </div>
        <div className="space-y-1">
          <label className={labelClass}>Gender</label>
          <select
            className={inputClass}
            value={formData.gender}
            onChange={(e) => setFormData({...formData, gender: e.target.value as any})}
          >
            <option value="Male" className="bg-[#333]">Male</option>
            <option value="Female" className="bg-[#333]">Female</option>
            <option value="Other" className="bg-[#333]">Other</option>
            <option value="Prefer not to say" className="bg-[#333]">Prefer not to say</option>
          </select>
        </div>
      </div>

      <div className="space-y-1">
        <label className={labelClass}>Place</label>
        <input
          type="text"
          required
          className={inputClass}
          placeholder="Your City/Location"
          value={formData.place}
          onChange={(e) => setFormData({...formData, place: e.target.value})}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className={labelClass}>College/School</label>
          <input
            type="text"
            className={inputClass}
            placeholder="Your Institution (Optional)"
            value={formData.collegeSchool}
            onChange={(e) => setFormData({...formData, collegeSchool: e.target.value})}
          />
        </div>
        <div className="space-y-1">
          <label className={labelClass}>Course</label>
          <input
            type="text"
            className={inputClass}
            placeholder="Your Course/Major (Optional)"
            value={formData.course}
            onChange={(e) => setFormData({...formData, course: e.target.value})}
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className={labelClass}>Why do you want to join?</label>
        <textarea
          rows={3}
          className={inputClass}
          placeholder="Briefly describe your motivation..."
          value={formData.motivation}
          onChange={(e) => setFormData({...formData, motivation: e.target.value})}
        />
      </div>

      {showSuccess && (
        <div className="space-y-4">
          <div className="p-6 bg-green-100 border-4 border-green-500 text-center">
            <h3 className="text-3xl font-black text-green-800 uppercase tracking-tighter mb-2">
              Registration Successful!
            </h3>
            <p className="text-lg font-bold text-green-700">
              Welcome to the AI Workshop
            </p>
          </div>

          <button
            onClick={handleWhatsAppRedirect}
            className="w-full py-6 text-2xl font-black uppercase tracking-widest brutalist-button bg-green-500 hover:bg-green-400 text-white"
          >
            Join WhatsApp Group
          </button>

          {!isMobile() && (
            <a
              href="https://chat.whatsapp.com/LfzFsf23sjLHIvbevgF12t"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center font-bold text-black underline hover:text-green-700"
            >
              Open in new tab →
            </a>
          )}
        </div>
      )}

      {!showSuccess && (
        <>
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
        </>
      )}
    </form>
  );
};

export default RegistrationForm;
