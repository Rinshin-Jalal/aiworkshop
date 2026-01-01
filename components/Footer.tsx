
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 pt-12 pb-8 relative overflow-hidden">
      {/* Sketchy Line Separator */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZD0iTTAgMSBRIDUwIDIgMTAwIDEiIHN0cm9rZT0iIzFhMWExYSIgc3Ryb2tlLXdpZHRoPSIwLjUiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] bg-repeat-x"></div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-black relative z-10">

        {/* SIO Karuvarakundu Section */}

        <div className="flex items-center gap-4 group hover:-rotate-2 transition-transform">
          <img
            src="/siologo.png"
            alt="SIO Logo"
            className="w-32 h-32 object-contain grayscale contrast-125"
          />
          <div className="text-left">
            <p className="text-xl font-display uppercase tracking-widest opacity-80">Karuvarakundu</p>
          </div>
        </div>

        {/* UFUQ Branding Section */}
        <div className="flex items-center group">
          <img
            src="/ufuq_desc.png"
            alt="UFUQ"
            className="h-32 w-auto object-contain brightness-0 opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>

      {/* Large Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[12rem] font-black uppercase tracking-tighter leading-none font-display">UFUQ26</h2>
      </div>

      <div className="mt-12 text-center">
        <p className="text-[12px] font-bold uppercase tracking-widest opacity-40 font-mono">© 2026 SIO Karuvarakundu • The Real AI Advantage</p>
      </div>
    </footer>
  );
};

export default Footer;
