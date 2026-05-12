'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle, FileText, ClipboardList, Briefcase, Rocket } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);
  const images = ["/hero-bg-1.png", "/hero-bg-2.png", "/hero-bg-3.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentBg((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentBg((prev) => (prev - 1 + images.length) % images.length);

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
            {/* Dark gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/10 hover:bg-blue-600 border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all">
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/10 hover:bg-blue-600 border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all hidden md:flex">
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <div className="container px-12 md:px-20 mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between">

        {/* Left Content */}
        <div className="flex flex-col items-start text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in shadow-lg backdrop-blur-md border border-white/20">
            BEST IT SOLUTIONS PROVIDER
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1] text-white animate-fade-in">
            Welcome to <span className="text-blue-400">Shubha IT Solution</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-medium">
            A modern IT powerhouse for custom software, cloud infrastructure, and digital transformation with expert guidance and industry-focused scalable solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="rounded-md px-8 py-6 text-lg font-bold bg-blue-600 text-white transition-all hover:bg-blue-700 shadow-xl overflow-hidden flex items-center gap-2" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button size="lg" className="rounded-md px-8 py-6 text-lg text-white border-2 border-white bg-transparent hover:bg-white/10 transition-all font-bold backdrop-blur-md" asChild>
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>

          {/* Slider Indicators */}
          <div className="flex gap-2 mt-12 sm:mt-16">
            {images.map((_, idx) => (
              <button key={idx} onClick={() => setCurrentBg(idx)} className={`h-1 sm:h-1.5 rounded-full transition-all ${idx === currentBg ? 'w-8 bg-blue-500' : 'w-4 bg-white/40'}`} aria-label={`Go to slide ${idx + 1}`} />
            ))}
          </div>
        </div>

        {/* Right Floating Widgets (Mimicking Inspiration) */}
        <div className="hidden lg:flex flex-col items-end gap-5 relative z-20 pr-12 mt-10 lg:mt-0">

          {/* Widget 1 */}
          <div className="bg-white text-slate-900 rounded-full py-2 px-5 shadow-2xl flex items-center gap-2 animate-bounce-gentle hover:scale-105 transition-transform cursor-pointer border border-slate-100">
            <span className="font-bold text-sm">We're Hiring 🚀</span>
          </div>

          {/* Widget 2 */}
          <div className="bg-white rounded-xl p-4 shadow-2xl w-64 hover:scale-105 transition-transform cursor-pointer relative overflow-hidden group border border-slate-100">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600"></div>
            <h4 className="font-bold text-slate-900 text-[15px] mb-1">Free IT Consultation</h4>
            <p className="text-xs text-slate-500 mb-3">Limited slots available this week!</p>
            <Link href="/#contact" className="text-blue-600 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
              Book Quickly <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Widget 3 */}
          <div className="bg-white rounded-full py-3 px-5 shadow-2xl flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer border border-slate-100">
            <span className="font-bold text-slate-900 text-sm">Need Help? <span className="text-blue-600">Chat with us 👋</span></span>
          </div>

          {/* Circular Action Icons on far right */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <button className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
              <ClipboardList className="h-5 w-5" />
            </button>
            <button className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
              <FileText className="h-5 w-5" />
            </button>
            <button className="h-12 w-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
              <WhatsAppIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
