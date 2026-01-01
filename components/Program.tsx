
import React from 'react';

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-4 group">
    <div className="mt-2 w-4 h-4 flex-shrink-0 relative">
      {/* Sketchy Bullet Circle */}
      <svg viewBox="0 0 20 20" className="w-full h-full text-black fill-none stroke-current stroke-2">
        <circle cx="10" cy="10" r="8" strokeDasharray="40" strokeDashoffset="0" transform="rotate(-45 10 10)" />
      </svg>
    </div>
    <span className="text-xl text-black font-hand leading-relaxed">{children}</span>
  </li>
);

const Program: React.FC = () => {
  return (
    <div className="space-y-12 relative">
      <div className="flex flex-col gap-4 mb-4">
        <h2 className="text-6xl font-display uppercase tracking-wider text-black sketch-underline self-start">Program</h2>
        <p className="font-hand text-2xl text-gray-700 max-w-lg">Designed to take you from zero to AI-native in one day.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Session 1 Card */}
        <div className="sketchy-card p-8 bg-white border-b-8 border-red-600 rotate-1 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-4xl font-bold uppercase tracking-tight font-display text-black">
              Foundation
            </h3>
            <span className="font-marker text-4xl text-red-100">01</span>
          </div>
          <div className="mb-6 text-3xl">🪶</div>
          <ul className="space-y-6">
            <ListItem>Prompt Engineering</ListItem>
            <ListItem>Context Engineering</ListItem>
            <ListItem>Real-world Task Agents</ListItem>
            <ListItem>Thinking Frameworks</ListItem>
          </ul>
        </div>

        {/* Session 2 Card */}
        <div className="sketchy-card p-8 bg-white border-b-8 border-blue-600 -rotate-1 hover:scale-[1.02] transition-transform duration-300 mt-8 md:mt-0">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-4xl font-bold uppercase tracking-tight font-display text-black">
              AI Labs
            </h3>
            <span className="font-marker text-4xl text-blue-100">02</span>
          </div>
          <div className="mb-6 text-3xl">🧪</div>
          <ul className="space-y-6">
            <ListItem>Hands-on Mentorship</ListItem>
            <ListItem>Build Your Own Agent</ListItem>
            <ListItem>Debug with Experts</ListItem>
          </ul>
        </div>

        {/* Lab Options Wide Card */}
        <div className="sketchy-card p-8 bg-white border-b-8 border-black md:col-span-2 rotate-0 hover:rotate-1 transition-transform duration-300">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-4xl font-bold mb-6 uppercase tracking-tight font-display text-black">
                Lab Options
              </h3>
              <ul className="space-y-4 grid md:grid-cols-2 gap-4">
                <ListItem>Vibe Coding & App Dev 🌸</ListItem>
                <ListItem>Research & Study AI 🍀</ListItem>
                <ListItem>Content Creation 🎨</ListItem>
                <ListItem>Business Automation 📈</ListItem>
              </ul>
            </div>

            {/* Chip Doodle - integrated */}
            <div className="flex items-center justify-center p-4">
              <div className="w-32 h-32 border-2 border-black p-2 bg-white relative shadow-sketch">
                <div className="w-full h-full border border-black flex items-center justify-center">
                  <span className="font-display text-4xl">AI</span>
                </div>
                {/* Pins */}
                {[1, 2, 3].map(i => <div key={`l-${i}`} className="absolute -left-2 w-3 h-1 bg-black" style={{ top: `${i * 25}%` }}></div>)}
                {[1, 2, 3].map(i => <div key={`r-${i}`} className="absolute -right-2 w-3 h-1 bg-black" style={{ top: `${i * 25}%` }}></div>)}
                {[1, 2, 3].map(i => <div key={`b-${i}`} className="absolute -bottom-2 h-3 w-1 bg-black" style={{ left: `${i * 25}%` }}></div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
