'use client';

import { Code2, Palette, BarChart3, Smartphone, Cloud, Rocket, Bot, Shield, Database, Cpu, Layers, TrendingUp, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white to-blue-50/30 dark:from-slate-950 dark:to-slate-900" aria-label="Services section">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto mb-16 md:mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
            Elite Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Service Suite</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            We merge technical excellence with business strategy to deliver high-performance digital ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8" role="region" aria-label="Service offerings">
          <ServiceCard
            title="Enterprise Software"
            description="Mission-critical systems engineered for high-availability and extreme scalability."
            icon={<Code2 className="h-7 w-7 md:h-8 md:w-8" />}
            gradient="from-blue-600 to-blue-800"
          />
          <ServiceCard
            title="Experience Design"
            description="User-centric UI/UX frameworks that drive engagement and brand loyalty."
            icon={<Palette className="h-7 w-7 md:h-8 md:w-8" />}
            gradient="from-orange-500 to-orange-700"
          />
          <ServiceCard
            title="Cloud Infrastructure"
            description="Secure, high-performance cloud architectures for the modern enterprise."
            icon={<Cloud className="h-7 w-7 md:h-8 md:w-8" />}
            gradient="from-blue-500 to-sky-600"
          />
          <ServiceCard
            title="Data Intelligence"
            description="Harnessing complex data streams for actionable business insights."
            icon={<BarChart3 className="h-7 w-7 md:h-8 md:w-8" />}
            gradient="from-amber-500 to-orange-600"
          />
          <ServiceCard
            title="Mobility Solutions"
            description="Native and cross-platform mobile experiences for the digital-first workforce."
            icon={<Smartphone className="h-7 w-7 md:h-8 md:w-8" />}
            gradient="from-blue-700 to-blue-900"
          />
          <ServiceCard
            title="Growth Engineering"
            description="Data-driven digital marketing and SEO that deliver sustainable ROI."
            icon={<Rocket className="h-7 w-7 md:h-8 md:w-8" />}
            gradient="from-orange-600 to-red-600"
          />
          <ServiceCard
            title="AI & Automation"
            description="Intelligent process automation powered by state-of-the-art AI models."
            icon={<Bot className="h-7 w-7 md:h-8 md:w-8" />}
            gradient="from-blue-500 to-indigo-600"
          />
          <ServiceCard
            title="Cybersecurity"
            description="Robust security protocols and active threat protection for digital assets."
            icon={<Shield className="h-7 w-7 md:h-8 md:w-8" />}
            gradient="from-slate-700 to-slate-900"
          />
          <ServiceCard
            title="Blockchain Solutions"
            description="Decentralized applications and secure smart contract development."
            icon={<Database className="h-7 w-7 md:h-8 md:w-8" />}
            gradient="from-sky-600 to-blue-600"
          />
          <ServiceCard
            title="IoT Integration"
            description="Connected device ecosystems for intelligent industrial operations."
            icon={<Cpu className="h-7 w-7 md:h-8 md:w-8" />}
            gradient="from-orange-500 to-amber-600"
          />
          <ServiceCard
            title="DevOps Services"
            description="Modern CI/CD pipelines and automated infrastructure management."
            icon={<Layers className="h-7 w-7 md:h-8 md:w-8" />}
            gradient="from-blue-600 to-sky-500"
          />
          <ServiceCard
            title="IT Consulting"
            description="Expert technical advisory for strategic digital transformation."
            icon={<TrendingUp className="h-7 w-7 md:h-8 md:w-8" />}
            gradient="from-orange-600 to-orange-800"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, icon, gradient = "from-blue-600 to-blue-800" }) {
  return (
    <Card className="group card-luxury border-none shadow-md hover:shadow-2xl cursor-pointer overflow-hidden bg-white dark:bg-slate-900 transition-all duration-500 hover:-translate-y-2">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>
      <CardHeader className="p-8">
        <div className={`mb-6 h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-gradient-to-br ${gradient} text-white flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:rotate-3 shadow-lg shadow-blue-500/20`}>
          {icon}
        </div>
        <CardTitle className="text-xl md:text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300">{title}</CardTitle>
        <CardDescription className="text-sm md:text-base pt-4 leading-relaxed text-slate-500 dark:text-slate-400">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-8 pb-8">
        <Button variant="ghost" className="p-0 text-blue-600 hover:text-orange-600 hover:bg-transparent group-hover:gap-3 transition-all font-bold text-sm md:text-base">
          Details <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </CardContent>
    </Card>
  );
}
