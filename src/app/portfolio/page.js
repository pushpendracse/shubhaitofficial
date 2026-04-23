'use client';

import React from 'react';
import PortfolioCard from '@/components/PortfolioCard';
import AnimatedBackground from '@/components/AnimatedBackground';
import { ArrowLeft, Rocket, Sparkles, Filter } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const portfolioData = [
    {
        id: 1,
        title: "Maison Dorée Fine Dining",
        description: "A luxury restaurant digital experience featuring an artisanal menu interface, integrated reservation system, and immersive visual storytelling.",
        thumbnail: "/portfolio/restaurant.png",
        demoLink: "https://restaurant.shubhaitsolution.com/",
        tags: ["UI/UX", "Next.js", "Hospitality"]
    },
    {
        id: 2,
        title: "Ether SaaS landing",
        description: "High-conversion landing page for a cloud-native SaaS platform with interactive pricing, feature tours, and seamless animations.",
        thumbnail: "/portfolio/saas.png",
        demoLink: "https://restaurant.shubhaitsolution.com/",
        tags: ["React", "Framer Motion", "UI/UX"]
    },
    {
        id: 3,
        title: "NeuroGen AI Platform",
        description: "An AI-powered content generation suite that allows users to create images, text, and music through a intuitive unified interface.",
        thumbnail: "/portfolio/ai.png",
        demoLink: "https://restaurant.shubhaitsolution.com/",
        tags: ["AI/ML", "TypeScript", "Node.js"]
    },
    {
        id: 4,
        title: "Vault Fintech App",
        description: "Premium investment and crypto management application with institutional-grade security and advanced portfolio tracking.",
        thumbnail: "/portfolio/fintech.png",
        demoLink: "https://restaurant.shubhaitsolution.com/",
        tags: ["Blockchain", "Security", "Real-time"]
    },
    {
        id: 5,
        title: "Global Supply Chain Pro",
        description: "Enterprise level logistics tracker optimized for global freight companies with IoT integration and route optimization.",
        thumbnail: "/portfolio/ecommerce.png", // Reusing image for demo variety
        demoLink: "https://restaurant.shubhaitsolution.com/",
        tags: ["Enterprise", "IoT", "React"]
    },
    {
        id: 6,
        title: "Lumina Creative Studio",
        description: "A minimal and artistic portfolio template for creators and agencies, focusing on high-quality visuals and smooth transitions.",
        thumbnail: "/portfolio/saas.png", // Reusing image for demo variety
        demoLink: "https://restaurant.shubhaitsolution.com/",
        tags: ["Portfolio", "Creative", "Animations"]
    }
];

export default function PortfolioPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 overflow-hidden relative">
            <AnimatedBackground />
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-slide-in">
                    <div className="max-w-2xl">
                        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold mb-6 group">
                            <ArrowLeft size={20} className="group-hover:-translate-x-1" />
                            Back to Home
                        </Link>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                            <Rocket size={14} className="animate-pulse" />
                            Our Best Work
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">Showcase</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Explore our latest projects where innovation meets execution. From enterprise systems to artisanal interfaces, we build for impact.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                       <Button variant="outline" className="rounded-full gap-2 glass backdrop-blur-sm">
                           <Filter size={16} />
                           Filter Projects
                       </Button>
                    </div>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.map((project, index) => (
                        <div key={project.id} style={{ animationDelay: `${index * 100}ms` }} className="animate-fade-in">
                            <PortfolioCard project={project} />
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 text-center p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 backdrop-blur-md">
                    <Sparkles className="mx-auto h-12 w-12 text-primary mb-6 animate-glow rounded-full" />
                    <h2 className="text-3xl font-bold mb-4">Have a Vision?</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                        Let's transform your ideas into a high-performance digital reality. Our experts are ready to build your next success story.
                    </p>
                    <Button size="lg" className="rounded-full px-10 bg-gradient-primary border-0 btn-glow font-bold" asChild>
                        <Link href="/#contact">Start Your Project</Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
