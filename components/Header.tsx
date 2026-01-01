
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
    <header className="border-b-4 border-black pb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="flex-1">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-2 text-black">
            The Real AI <br /> Advantage
          </h1>
          <div className="h-2 w-full bg-black mt-2 -skew-x-12"></div>
        </div>
        
        <div className="text-right space-y-1 md:w-64">
          <p className="text-3xl font-bold uppercase doodle-header text-black">Jan 17, 2026</p>
          <p className="text-xl font-medium text-black">Full Day Workshop</p>
          <a 
            href="#register"
            onClick={scrollToRegister}
            className="inline-block px-3 py-1 brutalist-border bg-yellow-400 hover:bg-yellow-300 font-bold uppercase text-sm text-black transition-colors cursor-pointer"
          >
            Register Now
          </a>
          <div className="pt-2">
            <svg className="w-8 h-8 ml-auto text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          <h3 className="text-3xl font-bold doodle-header mb-4 underline decoration-pink-500 underline-offset-8 text-black uppercase">
            Hands-on AI Workshop
          </h3>
          <p className="text-2xl font-medium text-black leading-snug">
            A full-day, mentor-led workshop on using AI for real work, learning, and building.
          </p>
        </div>
        <div className="hidden md:block">
           <img 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" 
            alt="doodle" 
            className="w-16 h-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 cursor-help" 
           />
        </div>
      </div>
    </header>
  );
};

export default Header;
