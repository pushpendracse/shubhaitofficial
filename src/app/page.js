'use client';

import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Palette,
  BarChart3,
  Smartphone,
  Cloud,
  Rocket,
  ArrowRight,
  Target,
  Cpu,
  CheckCircle2,
  MessageCircle,
  Phone,
  Award,
  Star,
  Users,
  Zap,
  Bot,
  Shield,
  Database,
  Layers,
  TrendingUp
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Enhanced Mobile Responsive */}
      <section id="home" className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950 dark:via-pink-950 dark:to-blue-950" aria-label="Hero section">
        <div className="container px-3 sm:px-4 mx-auto relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 whitespace-nowrap">
              <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary animate-pulse"></span>
              Next-Gen IT Partners
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-tight animate-fade-in">
              Architecting <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient">Digital Excellence</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-900 dark:text-slate-100 mb-6 sm:mb-8 md:mb-10 max-w-xl sm:max-w-2xl px-2">
              Shubha IT Solution specializes in crafting <span className="font-bold text-indigo-700 dark:text-indigo-400">bespoke enterprise software</span> and <span className="font-bold text-pink-700 dark:text-pink-400">high-availability digital experiences</span> that redefine industry standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Button size="lg" className="rounded-full px-6 sm:px-8 md:px-10 animate-bounce-gentle w-full sm:w-auto bg-gradient-primary hover:opacity-90 border-0 btn-glow" asChild>
                <Link href="#contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-6 sm:px-8 md:px-10 transition-all hover:scale-105 w-full sm:w-auto glass backdrop-blur-sm" asChild>
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
            
            {/* Stats Bar - Enhanced Mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-12 md:mt-16 w-full max-w-2xl">
              <StatItem number="150+" label="Projects" icon={<Award className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />} />
              <StatItem number="99%" label="Retention" icon={<Star className="h-4 w-4 sm:h-5 sm:w-5 text-pink-600" />} />
              <StatItem number="50+" label="Experts" icon={<Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />} />
              <StatItem number="24/7" label="Support" icon={<Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600" />} />
            </div>
          </div>
        </div>

        {/* Animated Background Visuals */}
        <AnimatedBackground />
      </section>

      {/* Services Section - Enhanced Mobile Responsive */}
      <section id="services" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-purple-50 dark:from-background dark:to-purple-950/20" aria-label="Services section">
        <div className="container px-3 sm:px-4 mx-auto">
          <div className="max-w-3xl mb-12 sm:mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
              Our Expertise
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Services</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg px-2">
              We combine technical rigour with creative strategy to deliver transformative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6" role="region" aria-label="Service offerings">
            <ServiceCard
              title="Enterprise Software"
              description="Robust, scalable systems engineered for high-availability environments"
              icon={<Code2 className="h-6 w-6 sm:h-8 sm:w-8" />}
              gradient="from-purple-500 to-indigo-600"
            />
            <ServiceCard
              title="Experience Design"
              description="Intuitive UI/UX frameworks that prioritize user flow and brand identity"
              icon={<Palette className="h-6 w-6 sm:h-8 sm:w-8" />}
              gradient="from-pink-500 to-rose-600"
            />
            <ServiceCard
              title="Cloud Architecture"
              description="Modernizing infrastructure with secure, high-performance cloud ecosystems"
              icon={<Cloud className="h-6 w-6 sm:h-8 sm:w-8" />}
              gradient="from-blue-500 to-cyan-600"
            />
            <ServiceCard
              title="Data Intelligence"
              description="Turning complex data streams into actionable strategic insights"
              icon={<BarChart3 className="h-6 w-6 sm:h-8 sm:w-8" />}
              gradient="from-orange-500 to-amber-600"
            />
            <ServiceCard
              title="Mobility Solutions"
              description="Native and cross-platform mobile apps built for the modern workforce"
              icon={<Smartphone className="h-6 w-6 sm:h-8 sm:w-8" />}
              gradient="from-green-500 to-emerald-600"
            />
            <ServiceCard
              title="Growth Engineering"
              description="Digital marketing and SEO strategies that drive sustainable ROI"
              icon={<Rocket className="h-6 w-6 sm:h-8 sm:w-8" />}
              gradient="from-red-500 to-pink-600"
            />
            <ServiceCard
              title="AI & Automation"
              description="Intelligent automation solutions powered by cutting-edge AI technology"
              icon={<Bot className="h-6 w-6 sm:h-8 sm:w-8" />}
              gradient="from-violet-500 to-purple-600"
            />
            <ServiceCard
              title="Cybersecurity"
              description="Enterprise-grade security protocols and threat protection systems"
              icon={<Shield className="h-6 w-6 sm:h-8 sm:w-8" />}
              gradient="from-slate-600 to-gray-700"
            />
            <ServiceCard
              title="Blockchain Solutions"
              description="Decentralized applications and smart contract development"
              icon={<Database className="h-6 w-6 sm:h-8 sm:w-8" />}
              gradient="from-teal-500 to-cyan-600"
            />
            <ServiceCard
              title="IoT Integration"
              description="Connected device ecosystems for smart business operations"
              icon={<Cpu className="h-6 w-6 sm:h-8 sm:w-8" />}
              gradient="from-indigo-500 to-blue-600"
            />
            <ServiceCard
              title="DevOps Services"
              description="Streamlined CI/CD pipelines and infrastructure automation"
              icon={<Layers className="h-6 w-6 sm:h-8 sm:w-8" />}
              gradient="from-amber-500 to-orange-600"
            />
            <ServiceCard
              title="IT Consulting"
              description="Strategic technology advisory for digital transformation"
              icon={<TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />}
              gradient="from-fuchsia-500 to-pink-600"
            />
          </div>
        </div>
      </section>

      {/* About Section - Enhanced Mobile Responsive */}
      <section id="about" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-background relative overflow-hidden" aria-label="About us section">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-secondary opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container px-3 sm:px-4 mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-3 sm:gap-4">
              <Card className="border-none shadow-xl bg-gradient-primary text-white transform lg:-translate-y-4 card-luxury">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold">99%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs uppercase tracking-wider font-semibold opacity-90">Client Retention</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-xl transform lg:translate-y-8 card-luxury group bg-white dark:bg-slate-900">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">150+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">Projects Delivered</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-xl card-luxury group bg-white dark:bg-slate-900">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">50+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">Tech Experts</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-xl transform lg:translate-y-12 card-luxury group bg-white dark:bg-slate-900">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">24/7</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">Support System</p>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
                About Us
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
                Engineering a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Better</span> Business Workflow
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
                At Shubha IT Solutions, we believe technology should be an enabler, not a hurdle. Our team of seasoned engineers and strategists work in tandem to eliminate bottlenecks and accelerate your digital transformation journey.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-bold text-base sm:text-lg">Goal-Oriented Execution</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">We align every line of code with your business objectives for maximum impact.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-secondary mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-bold text-base sm:text-lg">Future-Proof Tech Stack</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">Leveraging AI, ML, and modern frameworks for long-term scalability.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-accent mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-bold text-base sm:text-lg">Agile Methodology</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">Iterative development with continuous feedback and improvement.</p>
                  </div>
                </li>
              </ul>

              <Button variant="link" className="mt-6 sm:mt-8 p-0 h-auto font-bold text-base sm:text-lg text-transparent bg-clip-text bg-gradient-primary hover:opacity-80 transition-opacity" asChild>
                <Link href="#contact">Learn more about our journey <ArrowRight className="ml-1 h-4 w-4 sm:h-5 sm:w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced Mobile Responsive */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden" aria-label="Contact us section">
        <div className="container px-3 sm:px-4 mx-auto relative z-10">
          <Card className="max-w-6xl mx-auto overflow-hidden border-none shadow-2xl bg-white dark:bg-card">
            <div className="grid lg:grid-cols-5 h-full">
              <div 
                className="lg:col-span-2 p-6 sm:p-8 md:p-12 flex flex-col justify-between relative overflow-hidden bg-indigo-600 text-white"
                style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #db2777 50%, #2563eb 100%)' }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white"></div>
                  <div className="absolute bottom-20 right-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white"></div>
                  <div className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Innovate?</h2>
                  <p className="opacity-90 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                    Take the first step towards your digital transformation. Contact our team for a detailed consultation and let's build something extraordinary together.
                  </p>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-white/20 p-2.5 sm:p-3 rounded-xl flex-shrink-0">
                        <Target className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div>
                        <h5 className="font-bold text-base sm:text-lg">Quick Contact</h5>
                        <p className="text-xs sm:text-sm opacity-90 leading-relaxed mt-1">
                          📞 +91 6307558532 | +91 9528658256
                          <br />
                          📧 solutionshubhait@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-white/20 p-2.5 sm:p-3 rounded-xl flex-shrink-0">
                        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 animate-pulse" />
                      </div>
                      <div>
                        <h5 className="font-bold text-base sm:text-lg">WhatsApp Support 24/7</h5>
                        <div className="text-xs sm:text-sm opacity-90 leading-relaxed space-y-2 mt-2">
                          <div>
                            <a href="https://wa.me/916307558532" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 rounded-full hover:bg-white/30 transition-all font-semibold backdrop-blur-sm text-xs sm:text-sm">
                              <MessageCircle size={14} /> +91 6307558532
                            </a>
                          </div>
                          <div>
                            <a href="https://wa.me/919528658256" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 rounded-full hover:bg-white/30 transition-all font-semibold backdrop-blur-sm text-xs sm:text-sm">
                              <MessageCircle size={14} /> +91 9528658256
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 sm:mt-12 relative z-10">
                  <p className="text-xs sm:text-sm font-bold opacity-70 mb-3 sm:mb-4 tracking-widest uppercase">Connect With Us</p>
                  <div className="flex gap-2 sm:gap-3">
                    <a href="https://wa.me/916307558532" target="_blank" rel="noopener noreferrer" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all hover:scale-110 backdrop-blur-sm" title="WhatsApp +91 6307558532">
                      <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                    <a href="https://wa.me/919528658256" target="_blank" rel="noopener noreferrer" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all hover:scale-110 backdrop-blur-sm" title="WhatsApp +91 9528658256">
                      <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                    <a href="tel:+916307558532" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all hover:scale-110 backdrop-blur-sm" title="Call +91 6307558532">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 p-6 sm:p-8 md:p-12 bg-card">
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Send Us a Message</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">Fill out the form below and we'll get back to you within 24 hours</p>
                </div>
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-medium leading-none">Full Name</label>
                      <input className="flex h-10 sm:h-11 w-full rounded-lg border border-input bg-background px-3 sm:px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-medium leading-none">Phone Number</label>
                      <input type="tel" className="flex h-10 sm:h-11 w-full rounded-lg border border-input bg-background px-3 sm:px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-medium leading-none">Email Address</label>
                    <input type="email" className="flex h-10 sm:h-11 w-full rounded-lg border border-input bg-background px-3 sm:px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-medium leading-none">Service Interested In</label>
                    <select className="flex h-10 sm:h-11 w-full rounded-lg border border-input bg-background px-3 sm:px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all">
                      <option value="">Select a service</option>
                      <option value="enterprise">Enterprise Software</option>
                      <option value="design">Experience Design</option>
                      <option value="cloud">Cloud Architecture</option>
                      <option data-value="data">Data Intelligence</option>
                      <option value="mobile">Mobility Solutions</option>
                      <option value="growth">Growth Engineering</option>
                      <option value="ai">AI & Automation</option>
                      <option value="security">Cybersecurity</option>
                      <option value="blockchain">Blockchain Solutions</option>
                      <option value="iot">IoT Integration</option>
                      <option value="devops">DevOps Services</option>
                      <option value="consulting">IT Consulting</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-medium leading-none">Your Message</label>
                    <textarea className="flex min-h-[120px] sm:min-h-[140px] w-full rounded-lg border border-input bg-background px-3 sm:px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all" placeholder="Tell us about your project requirements..."></textarea>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a 
                      href="https://wa.me/919528658256?text=Hello,%20I%20am%20interested%20in%20your%20services." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-4 rounded-lg font-bold text-center transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl flex items-center justify-center gap-2"
                      style={{ background: '#25d366', color: 'white' }}
                    >
                      <MessageCircle className="h-5 w-5" />
                      Initiate Inquiry via WhatsApp
                    </a>
                    <p className="text-xs sm:text-sm text-muted-foreground text-center">Or email us directly at <a href="mailto:solutionshubhait@gmail.com" className="font-semibold text-primary hover:underline">solutionshubhait@gmail.com</a></p>
                  </div>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, description, icon, gradient = "from-purple-500 to-indigo-600" }) {
  return (
    <Card className="group card-luxury border-none shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      <CardHeader>
        <div className={`mb-4 h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-gradient-to-br ${gradient} text-white flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:rotate-3 shadow-lg`}>
          {icon}
        </div>
        <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">{title}</CardTitle>
        <CardDescription className="text-xs sm:text-sm pt-2 sm:pt-3 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="ghost" className="p-0 text-primary hover:text-primary hover:bg-transparent group-hover:gap-2 transition-all font-semibold text-xs sm:text-sm">
          Learn more <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

function StatItem({ number, label, icon }) {
  return (
    <div className="flex flex-col items-center p-3 sm:p-4 rounded-xl glass backdrop-blur-sm hover:bg-white/50 dark:hover:bg-purple-900/20 transition-all duration-300 hover:scale-105 cursor-default">
      <div className="mb-2">{icon}</div>
      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-1">
        {number}
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground text-center font-medium">
        {label}
      </div>
    </div>
  );
}
