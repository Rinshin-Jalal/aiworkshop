import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Program from './components/Program';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDrawing, setIsDrawing] = useState(false);
  const [isFlying, setIsFlying] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<'pencil' | 'eyes' | 'rocket'>('pencil');
  const [stamps, setStamps] = useState<{ id: number, x: number, y: number, char: string }[]>([]);

  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const lastPos = React.useRef<{ x: number, y: number } | null>(null);

  // Initialize Canvas to full page height
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      // Set height to full scrollable document height
      canvas.height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
    };
    resize();
    window.addEventListener('resize', resize);
    // Also update on scroll to ensure it covers if dynamic? No, scroll doesn't change height usually. 
    // But let's listen to load/content changes if possible, simple resize is ok for now.

    return () => window.removeEventListener('resize', resize);
  }, []);

  // Mobile Tap Logic (Stamps & Haptics)
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      // Mobile Haptic
      if (navigator.vibrate) navigator.vibrate(10);

      const touch = e.touches[0];
      const newStamp = {
        id: Date.now(),
        x: touch.pageX,
        y: touch.pageY,
        char: ['✨', '💥', '🎨', '🖌️', '🖍️'][Math.floor(Math.random() * 5)]
      };

      setStamps(prev => [...prev, newStamp]);

      // Cleanup stamp after 1s
      setTimeout(() => {
        setStamps(prev => prev.filter(s => s.id !== newStamp.id));
      }, 1000);
    };

    window.addEventListener('touchstart', handleTouchStart);
    return () => window.removeEventListener('touchstart', handleTouchStart);
  }, []);

  // Click & Drawing Logic
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      // Rocket Launch Logic
      if (cursorVariant === 'rocket') {
        setIsFlying(true);
        setTimeout(() => setIsFlying(false), 1000); // Reset after 1s
        return; // Prevent drawing if rocket
      }

      // Pencil Drawing Logic
      if (cursorVariant === 'pencil') {
        setIsDrawing(true);
        lastPos.current = { x: e.pageX, y: e.pageY };
      }
    };

    const handleMouseUp = () => {
      setIsDrawing(false);
      lastPos.current = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      if (isDrawing && canvasRef.current && lastPos.current && cursorVariant === 'pencil') {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          const currentX = e.pageX;
          const currentY = e.pageY;

          ctx.beginPath();
          ctx.moveTo(lastPos.current.x, lastPos.current.y);
          ctx.lineTo(currentX, currentY);
          ctx.strokeStyle = '#222';
          ctx.lineWidth = 3;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();

          lastPos.current = { x: currentX, y: currentY };
        }
      }
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDrawing, cursorVariant]);

  const getCursorEmoji = () => {
    switch (cursorVariant) {
      case 'eyes': return '👀';
      case 'rocket': return '🚀';
      default: return '✏️';
    }
  };

  // Calculate cursor transform based on state
  const getCursorStyle = () => {
    if (isFlying) {
      return {
        left: mousePos.x,
        top: mousePos.y,
        transform: 'translate(-50%, -1000px) scale(1.5)',
        transition: 'transform 1s cubic-bezier(0.1, 0, 0.9, 1)'
      };
    }
    return {
      left: mousePos.x,
      top: mousePos.y,
      transform: cursorVariant === 'pencil' ? 'translate(0, -95%)' : 'translate(-50%, -50%)',
      transition: 'none'
    };
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden cursor-none md:cursor-none">

      {/* Drawing Canvas Overlay - Absolute to cover full page content */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[90] pointer-events-none"
      />

      {/* Mobile Stamps */}
      {stamps.map(stamp => (
        <div
          key={stamp.id}
          className="absolute pointer-events-none z-[80] animate-ping-slow text-3xl"
          style={{
            left: stamp.x,
            top: stamp.y,
            animation: 'float-up-fade 1s ease-out forwards'
          }}
        >
          {stamp.char}
        </div>
      ))}

      {/* Custom Pencil Cursor (Desktop Only) */}
      <div
        className="fixed pointer-events-none z-[100] hidden md:block will-change-transform"
        style={getCursorStyle()}
      >
        <span className={`text-4xl filter drop-shadow-xl block ${cursorVariant === 'pencil' ? 'origin-bottom-left' :
          isFlying ? '' : 'animate-bounce'
          }`}>
          {getCursorEmoji()}
        </span>
      </div>

      {/* Navigation / Top Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
          <div
            className="sketchy-button bg-white text-black text-sm font-bold shadow-md cursor-pointer active:animate-spin"
            onClick={() => alert("🎉 You found a boring alert! Just kidding, keep building!")}
            title="Don't click me!"
          >
            SIO AI WORKSHOP
          </div>
          <button
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            className="sketchy-button bg-black text-white hover:bg-red-600 hover:text-white shadow-lg transition-colors group relative overflow-hidden"
          >
            <span className="relative z-10">Secure Spot</span>
            <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
          </button>
        </div>
      </nav>

      <main className="space-y-0 relative">
        <div onMouseEnter={() => setCursorVariant('pencil')} className="cursor-none">
          <Header />
        </div>

        {/* SIDE DOODLES & EASTER EGGS */}
        <div className="hidden lg:block absolute top-[20%] left-10 w-24 opacity-60 pointer-events-none rotate-12">
          <svg viewBox="0 0 100 100" className="w-full stroke-black fill-none stroke-2"><path d="M10 10 Q 50 50 10 90 T 90 90" /></svg>
        </div>
        <div className="hidden lg:block absolute top-[40%] right-8 w-16 opacity-50 pointer-events-none -rotate-12">
          {/* Lightbulb Doodle */}
          <svg viewBox="0 0 50 70" className="w-full stroke-black fill-none stroke-2">
            <path d="M15 45 Q 5 25 25 25 T 35 45" />
            <path d="M15 45 L 35 45 L 30 60 L 20 60 Z" />
            <line x1="25" y1="10" x2="25" y2="20" />
            <line x1="10" y1="15" x2="16" y2="22" />
            <line x1="40" y1="15" x2="34" y2="22" />
          </svg>
        </div>
        <div className="hidden lg:block absolute top-[60%] left-16 w-32 opacity-40 hover:opacity-100 transition-opacity cursor-help" title="Just a scribble">
          <svg viewBox="0 0 200 100" className="w-full stroke-blue-600 fill-none stroke-[3]"><path d="M10 50 C 40 10, 60 90, 90 50 S 140 10, 190 50" strokeDasharray="5,5" /></svg>
        </div>

        {/* Value Prop & Program Section - Paper Texture BG */}
        <section
          className="py-24 px-4 md:px-8 max-w-5xl mx-auto relative cursor-none"
          onMouseEnter={() => setCursorVariant('eyes')}
        >
          {/* Mobile Surprise Sticker */}
          <div className="absolute -top-10 right-10 rotate-12 md:hidden opacity-50">
            <span className="text-4xl">✨</span>
          </div>

          <div className="w-full">
            <Program />
          </div>
        </section>

        {/* Registration Section - Contrasting BG */}
        <section
          id="register"
          className="bg-black text-white relative py-20 px-4 mt-20 cursor-none"
          onMouseEnter={() => setCursorVariant('rocket')}
        >
          {/* White paper texture overlay for 'chalkboard' or 'dark mode' vibe? No, let's keep it paper-ish but inverted */}
          <div className="absolute inset-0 bg-[#1a1a1a]"></div>

          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-8xl font-display uppercase tracking-tighter text-white mb-4">
                Don't Miss Out
                <span className="block text-red-500 text-3xl font-marker mt-2 rotate-2">Seats are filling fast!</span>
              </h2>
            </div>

            <div className="bg-white text-black p-8 md:p-12 sketchy-card transform rotate-1">
              {isSuccess ? (
                <div className="text-center space-y-6">
                  <div className="text-6xl">🎉</div>
                  <h2 className="font-display text-5xl text-black">You are IN!</h2>
                  <p className="text-xl font-hand text-gray-700">Registration confirmed. We've saved a spot for you.</p>
                  <RegistrationForm onComplete={() => setIsSuccess(false)} showSuccess={true} />
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="sketchy-button mt-8"
                  >
                    Register Another Person
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  <RegistrationForm onComplete={() => setIsSuccess(true)} />
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default App;
