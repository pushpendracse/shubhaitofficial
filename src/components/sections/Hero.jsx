'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Award, Star, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);
  const images = ["/hero-bg-1.png", "/hero-bg-2.png", "/hero-bg-3.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 md:pt-40 md:pb-32 overflow-hidden min-h-[90vh] flex items-center" aria-label="Hero section">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentBg ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={src}
              alt="Background"
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]"></div>
          </div>
        ))}
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in shadow-lg backdrop-blur-md border border-blue-500/30">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            Global IT Excellence
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-[0.9] text-white animate-fade-in">
            Engineering <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-orange-400 animate-gradient">Future Tech</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl px-4 leading-relaxed font-medium">
            Shubha IT Solution: Architecting <span className="text-blue-400 font-bold">mission-critical software</span> and <span className="text-orange-400 font-bold">digital ecosystems</span> that redefine industry benchmarks globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
            <button className="group relative rounded-full px-10 py-5 text-lg font-black bg-blue-600 text-white transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-blue-600/30 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Launch Project <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <Button size="lg" variant="outline" className="rounded-full px-10 py-7 text-lg text-dark orange-500  /20 hover:bg-orange-500 hover:text-white glass-dark transition-all hover:scale-105 active:scale-95 font-bold" asChild>
              <Link href="/services">View Capabilities</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-16 md:mt-24 w-full max-w-4xl">
            <StatItem number="150+" label="Global Deployments" icon={<Award className="h-6 w-6 text-blue-400" />} />
            <StatItem number="99%" label="Success Rate" icon={<Star className="h-6 w-6 text-orange-400" />} />
            <StatItem number="50+" label="Tech Mavericks" icon={<Users className="h-6 w-6 text-blue-300" />} />
            <StatItem number="24/7" label="Active Support" icon={<Zap className="h-6 w-6 text-orange-500" />} />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <AnimatedBackground />
      </div>
    </section>
  );
}

function StatItem({ number, label, icon }) {
  return (
    <div className="flex flex-col items-center p-6 rounded-3xl glass-dark border border-white/5 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 group cursor-default">
      <div className="mb-4 p-3 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform">{icon}</div>
      <div className="text-3xl sm:text-4xl font-black text-white mb-1 tracking-tight">
        {number}
      </div>
      <div className="text-[10px] sm:text-xs text-slate-400 text-center font-black uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}
