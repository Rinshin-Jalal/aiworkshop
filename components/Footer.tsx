
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 pt-12 pb-8 border-t-4 border-black relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-black relative z-10">
        
        {/* SIO Karuvarakundu Section */}
        <div className="flex items-center gap-4 group">
          <img
            src="./siologo.png"
            alt="SIO Logo"
            className="w-16 h-16 brutalist-border bg-white p-2 transition-transform group-hover:-rotate-3 object-contain"
          />
          <div className="text-left">
            <h4 className="text-3xl font-black uppercase leading-none tracking-tighter">SIO</h4>
            <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">Karuvarakundu</p>
          </div>
        </div>
        
        {/* Event Meta Section */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="flex items-center gap-3">
             <div className="flex -space-x-1">
               <span className="bg-black text-white text-sm px-2 py-1 font-black">25</span>
               <span className="bg-black text-white text-sm px-2 py-1 font-black border-l border-gray-700">26</span>
             </div>
             <span className="text-lg font-black uppercase tracking-tighter">Jan 2026</span>
          </div>
          <p className="text-[11px] font-bold uppercase tracking-widest bg-yellow-400 px-2 py-0.5 brutalist-border">
            Calicut Beach, Kerala
          </p>
        </div>

        {/* UFUQ Branding Section */}
        <div className="flex items-center gap-5 group">
          <img
            src="./ufuq_desc.png"
            alt="UFUQ Description"
            className="h-20 w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </div>
      </div>

      {/* Large Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[12rem] font-black uppercase tracking-tighter leading-none">UFUQ26</h2>
      </div>

      <div className="mt-12 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30">© 2026 SIO Karuvarakundu • The Real AI Advantage</p>
      </div>
    </footer>
  );
};

export default Footer;
