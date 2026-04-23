'use client';

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900/20 dark:to-slate-950 relative overflow-hidden" aria-label="About us section">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600 opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500 opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4 sm:gap-6">
            <Card className="border-none shadow-2xl bg-blue-600 text-white transform lg:-translate-y-4 rounded-3xl overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-black">99%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm uppercase tracking-widest font-bold opacity-80">Retention Rate</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-2xl transform lg:translate-y-8 rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-600">150+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm uppercase tracking-widest font-bold text-slate-500">Global Projects</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-2xl rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-black text-orange-500">50+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm uppercase tracking-widest font-bold text-slate-500">Tech Experts</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-2xl transform lg:translate-y-12 rounded-3xl overflow-hidden bg-orange-600 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-black">24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm uppercase tracking-widest font-bold opacity-80">Premium Support</p>
              </CardContent>
            </Card>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
              Our Identity
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight leading-tight">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Next-Gen</span> Workflows
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl mb-10 leading-relaxed">
              Shubha IT Solution is built on the foundation of technical rigour and strategic innovation. We eliminate digital bottlenecks to accelerate your journey toward market leadership.
            </p>

            <ul className="space-y-6 mb-12">
              <li className="flex items-start gap-4 group">
                <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">Precision Execution</h4>
                  <p className="text-slate-500 dark:text-slate-400">Aligning technical deliverables with core business KPIs.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="h-8 w-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">Future-Ready Stack</h4>
                  <p className="text-slate-500 dark:text-slate-400">Scalable architectures built for AI-driven ecosystems.</p>
                </div>
              </li>
            </ul>

            <Button variant="link" className="p-0 h-auto font-black text-lg text-blue-600 hover:text-orange-600 transition-colors gap-2" asChild>
              <Link href="/contact">Explore Our Vision <ArrowRight className="h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
