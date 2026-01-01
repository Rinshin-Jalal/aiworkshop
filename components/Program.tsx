
import React from 'react';

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3 group">
    <div className="mt-1 w-5 h-5 flex-shrink-0 border-2 border-black rounded-full flex items-center justify-center group-hover:bg-black transition-colors">
      <div className="w-2 h-2 bg-transparent group-hover:bg-white rounded-full"></div>
    </div>
    <span className="text-xl font-medium text-black">{children}</span>
  </li>
);

const Program: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex items-center gap-4">
        <h2 className="text-4xl font-black uppercase tracking-widest doodle-header text-black">Program</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black">
          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      </div>

      <div className="space-y-8">
        {/* Session 1 */}
        <div className="relative p-6 brutalist-border bg-white -rotate-1 hover:rotate-0 transition-transform">
          <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter doodle-header text-black">
            SESSION 1 - FOUNDATION
          </h3>
          <ul className="space-y-3">
            <ListItem>Prompt Engineering</ListItem>
            <ListItem>Context Engineering</ListItem>
            <ListItem>Using AI for real-world tasks</ListItem>
            <ListItem>Thinking frameworks for better outputs</ListItem>
          </ul>
          <div className="absolute -bottom-4 -right-4 w-12 h-12">
             <img src="https://www.svgrepo.com/show/447477/quill.svg" alt="quill" className="w-full h-full opacity-30" />
          </div>
        </div>

        {/* Session 2 */}
        <div className="relative p-6 brutalist-border bg-white rotate-1 hover:rotate-0 transition-transform">
          <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter doodle-header text-black">
            SESSION 2 - AI LABS
          </h3>
          <ul className="space-y-3">
            <ListItem>Hands-on, mentor-led sessions</ListItem>
            <ListItem>Choose what you want to work on</ListItem>
          </ul>
        </div>

        {/* Lab Options */}
        <div className="p-6 brutalist-border bg-pink-50">
          <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter doodle-header text-black">
            LAB OPTIONS
          </h3>
          <ul className="space-y-3">
            <ListItem>Vibe Coding & App Development</ListItem>
            <ListItem>Studying & Research with AI</ListItem>
            <ListItem>AND MORE...</ListItem>
          </ul>
          <div className="mt-4 flex gap-3 text-black">
            {[1, 2, 3].map(i => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
