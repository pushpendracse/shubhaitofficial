'use client';

export default function AnimatedBackground() {
  return (
    <div suppressHydrationWarning className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-500/5 to-purple-500/5"></div>

      {/* Colorful Wave animations with gradients */}
      <div className="absolute bottom-0 left-0 w-full h-40">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          
          {/* Wave 1 - Blue gradient */}
          <path 
            d="M0,30 Q300,60 600,30 T1200,30 L1200,120 L0,120 Z" 
            fill="url(#waveGrad1)" 
            className="wave-1"
          />
          
          {/* Wave 2 - Purple-Pink gradient */}
          <path 
            d="M0,50 Q300,20 600,50 T1200,50 L1200,120 L0,120 Z" 
            fill="url(#waveGrad2)" 
            className="wave-2"
          />
          
          {/* Wave 3 - Cyan-Pink gradient */}
          <path 
            d="M0,40 Q300,70 600,40 T1200,40 L1200,120 L0,120 Z" 
            fill="url(#waveGrad3)" 
            className="wave-3"
          />
        </svg>
      </div>

      {/* Floating animated colorful blobs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent rounded-full blur-[100px] animate-float-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent rounded-full blur-[120px] animate-float-medium"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-cyan-500/15 via-pink-500/10 to-transparent rounded-full blur-[100px] animate-float-fast"></div>
      
      {/* Colorful glowing orbs */}
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse opacity-70 shadow-lg shadow-blue-500/50"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-500 rounded-full animate-pulse opacity-60 shadow-lg shadow-purple-500/50"></div>
      <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-cyan-500 rounded-full animate-pulse opacity-70 shadow-lg shadow-cyan-500/50"></div>
      <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-pink-500 rounded-full animate-pulse opacity-60 shadow-lg shadow-pink-500/50"></div>
    </div>
  );
}
