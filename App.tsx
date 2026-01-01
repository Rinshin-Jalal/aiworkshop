
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Program from './components/Program';
import RegistrationForm from './components/RegistrationForm';
import AIRecommender from './components/AIRecommender';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="min-h-screen py-8 px-4 md:px-8 lg:px-24 max-w-6xl mx-auto">
      <div className="bg-[#fcfcfc] brutalist-border rounded-2xl p-8 md:p-12 relative overflow-hidden paper-texture">
        {/* Decorative Doodles Background */}
        <div className="absolute top-10 right-10 opacity-10 pointer-events-none hidden lg:block">
           <img src="https://picsum.photos/seed/ai-chip/200/200" alt="decoration" className="rounded-full grayscale" />
        </div>

        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          <section className="space-y-12">
            <Program />
            <AIRecommender />
          </section>
          
          <section id="register" className="relative">
            {isSuccess ? (
              <div className="brutalist-border p-8 bg-green-50 rounded-xl text-center space-y-4">
                <h2 className="doodle-header text-4xl text-green-700">See you there!</h2>
                <p className="text-xl font-medium text-black">Your registration for "The Real AI Advantage" has been saved.</p>
                <RegistrationForm onComplete={() => setIsSuccess(false)} showSuccess={true} />
                <button
                  onClick={() => setIsSuccess(false)}
                  className="brutalist-button bg-white px-6 py-2 font-bold text-black"
                >
                  Register Another
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                 <h2 className="doodle-header text-4xl mb-6 text-black uppercase">Register Now</h2>
                 <RegistrationForm onComplete={() => setIsSuccess(true)} />
              </div>
            )}
          </section>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
