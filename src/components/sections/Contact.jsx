'use client';

import { MessageCircle, Target, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 md:py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden" aria-label="Contact us section">
      <div className="container px-4 mx-auto relative z-10">
        <Card className="max-w-6xl mx-auto overflow-hidden border-none shadow-2xl bg-white dark:bg-slate-900 rounded-[2rem]">
          <div className="grid lg:grid-cols-5 h-full">
            <div 
              className="lg:col-span-2 p-8 sm:p-10 md:p-14 flex flex-col justify-between relative overflow-hidden text-white"
              style={{ background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #f97316 100%)' }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-white"></div>
                <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-black mb-6">Let's Build Together</h2>
                <p className="text-blue-50 text-lg mb-10 leading-relaxed">
                  Partner with Shubha IT Solution to transform your digital vision into reality. Our experts are ready to engineer your success.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="bg-white/10 p-3.5 rounded-2xl flex-shrink-0 backdrop-blur-md border border-white/20">
                      <Target className="h-6 w-6" />
                    </div>
                    <div>
                      <h5 className="font-bold text-xl mb-1">Direct Contact</h5>
                      <div className="text-blue-50 space-y-1">
                        <p>📞 +91 6307558532</p>
                        <p>📞 +91 9528658256</p>
                        <p>📧 solutionshubhait@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="bg-white/10 p-3.5 rounded-2xl flex-shrink-0 backdrop-blur-md border border-white/20">
                      <MessageCircle className="h-6 w-6 animate-pulse" />
                    </div>
                    <div>
                      <h5 className="font-bold text-xl mb-3">WhatsApp Support</h5>
                      <div className="flex flex-col gap-3">
                        <a href="https://wa.me/916307558532" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 rounded-xl hover:bg-white/20 transition-all font-bold backdrop-blur-md text-sm border border-white/10">
                          <MessageCircle size={16} /> +91 6307558532
                        </a>
                        <a href="https://wa.me/919528658256" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 rounded-xl hover:bg-white/20 transition-all font-bold backdrop-blur-md text-sm border border-white/10">
                          <MessageCircle size={16} /> +91 9528658256
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 relative z-10">
                <p className="text-xs font-black opacity-60 mb-5 tracking-[0.2em] uppercase">Global Presence</p>
                <div className="flex gap-4">
                  <a href="tel:+916307558532" className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 backdrop-blur-md border border-white/10">
                    <Phone className="h-5 w-5" />
                  </a>
                  <a href="mailto:solutionshubhait@gmail.com" className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 backdrop-blur-md border border-white/10">
                    <Target className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 p-8 sm:p-10 md:p-14 bg-white dark:bg-slate-900">
              <div className="mb-10">
                <h3 className="text-3xl font-black mb-3">Inquiry Form</h3>
                <p className="text-slate-500 dark:text-slate-400">Please provide your details and our consultants will reach out within 24 hours.</p>
              </div>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name</label>
                    <input className="flex h-12 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="E.g. John Smith" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Phone Number</label>
                    <input type="tel" className="flex h-12 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                  <input type="email" className="flex h-12 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Target Service</label>
                  <select className="flex h-12 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all appearance-none cursor-pointer">
                    <option value="">Select a service category</option>
                    <option value="enterprise">Enterprise Software</option>
                    <option value="design">Experience Design</option>
                    <option value="cloud">Cloud Architecture</option>
                    <option value="data">Data Intelligence</option>
                    <option value="mobile">Mobility Solutions</option>
                    <option value="ai">AI & Automation</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Project Requirements</label>
                  <textarea className="flex min-h-[140px] w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="Briefly describe your goals..."></textarea>
                </div>
                <div className="flex flex-col gap-4">
                  <button 
                    type="submit"
                    className="w-full py-4 rounded-xl font-black text-center transition-all hover:scale-[1.01] active:scale-[0.99] shadow-xl flex items-center justify-center gap-3 bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Submit Inquiry
                  </button>
                  <div className="flex items-center gap-4 py-2">
                    <div className="flex-1 h-px bg-slate-100 dark:bg-slate-800"></div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Or</span>
                    <div className="flex-1 h-px bg-slate-100 dark:bg-slate-800"></div>
                  </div>
                  <a 
                    href="https://wa.me/919528658256?text=Hello,%20I%20am%20interested%20in%20your%20services." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl font-black text-center transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg flex items-center justify-center gap-3 border-2 border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-950/10"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
