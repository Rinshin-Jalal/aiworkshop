
import React from 'react';

const Header: React.FC = () => {
  const scrollToRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative min-h-[90vh] flex flex-col justify-center items-center text-center p-6 md:p-8 overflow-hidden z-10 pt-24 md:pt-8">

      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32 border-4 border-black/10 rounded-full animate-pulse-slow hover:scale-150 transition-transform duration-1000"></div>
      <div className="absolute bottom-20 right-5 md:right-10 w-32 h-32 md:w-48 md:h-48 border-4 border-black/5 rounded-full animate-pulse-slow delay-1000 hover:rotate-45 transition-transform duration-700"></div>

      {/* Date Badge - Repositioned for Mobile */}
      <div className="md:absolute top-4 right-4 md:right-12 md:top-32 rotate-6 hover:rotate-12 transition-transform cursor-pointer active:scale-90 mb-8 md:mb-0 z-20" onClick={() => alert("📅 Mark your calendar!")}>
        <div className="sketchy-card p-3 md:p-4 bg-white border-red-600 shadow-xl inline-block hover:shadow-2xl transition-shadow">
          <p className="font-marker text-2xl md:text-3xl text-red-600">Jan 17</p>
          <p className="font-hand text-lg md:text-xl text-black">2026</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-8 md:space-y-10 relative w-full">

        <p className="text-lg md:text-2xl font-hand font-bold tracking-[0.2em] uppercase mb-4 md:mb-6 opacity-70">SIO Karuvarakundu Presents</p>

        <h1 className="text-6xl sm:text-7xl md:text-[10rem] font-display font-black tracking-normal leading-tight text-black w-full break-words py-2">
          THE REAL <br />
          <span className="relative inline-block mt-4 md:mt-2">
            <span className="relative z-10">AI ADVANTAGE</span>
            {/* Highlight Swoosh */}
            <svg className="absolute w-[110%] h-full -bottom-1 md:-bottom-2 -left-[5%] -z-10 text-red-500 opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 60 Q 50 90 100 60" stroke="currentColor" strokeWidth="40" fill="none" />
            </svg>
          </span>
        </h1>

        <div className="max-w-3xl mx-auto mt-8 md:mt-12 px-6">
          <p className="text-xl md:text-4xl font-hand font-bold leading-relaxed md:leading-relaxed text-gray-800">
            A full-day, mentor-led workshop on using AI for <br className="hidden md:block" /> <span className="sketch-underline">real work</span>, learning, and building.
          </p>
        </div>

        <div className="pt-10 md:pt-16 flex flex-col md:flex-row gap-8 justify-center items-center">
          <a href="#register" onClick={scrollToRegister} className="sketchy-button group text-xl md:text-2xl px-10 py-4 md:px-14 md:py-5 bg-black text-white hover:bg-gray-800 w-full md:w-auto">
            Register Now <span className="group-hover:ml-2 transition-all">→</span>
          </a>
          <div className="text-left font-hand text-xl space-y-2">
            <p>✨ Limited Seats</p>
            <p>🎫 ₹199 Only</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <p className="font-hand text-sm opacity-50 mb-2">Scroll to explore</p>
        <svg className="w-6 h-6 mx-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>

    </header>
  );
};

export default Header;
