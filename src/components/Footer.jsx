'use client';
import * as React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Mail, MapPin, Globe, Linkedin, Twitter, Github, Phone, Instagram } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { Button } from '@/components/ui/button';

export default function Footer() {
    const [mounted, setMounted] = React.useState(false);
    const { theme, resolvedTheme } = useTheme();

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <footer suppressHydrationWarning className="relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-20 pb-10 overflow-hidden">
            {/* Subtle background image for Footer */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <Image
                    src="/footer-bg.png"
                    alt="footer background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="w-full max-w-[1800px] mx-auto px-4 md:px-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="flex flex-col gap-8">
                        <Link href="/" className="relative h-20 w-64 md:h-24 md:w-80 transition-transform hover:scale-105 origin-left">
                            <Image
                                src={mounted && resolvedTheme === 'dark' ? "/ShubhaDarkLogo.png" : "/Logo.png"}
                                alt="Shubha IT Solution"
                                fill
                                className="object-contain"
                                priority
                            />
                        </Link>
                        <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-xs font-medium">
                            Engineering mission-critical digital ecosystems and transformative software solutions for market leaders.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/subha-it-bbb95340a" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-lg border-2">
                                    <Linkedin size={20} />
                                </Button>
                            </a>
                            <a href="https://www.instagram.com/shubait_solutions?utm_source=qr&igsh=amN1bXhpMjZhMDcw" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all shadow-lg border-2">
                                    <Instagram size={20} />
                                </Button>
                            </a>
                            <a href="https://twitter.com/ShubhaIT" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all shadow-lg border-2">
                                    <Twitter size={20} />
                                </Button>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-lg border-2">
                                    <Github size={20} />
                                </Button>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-black text-sm uppercase tracking-[0.25em] mb-10 text-slate-900 dark:text-white">Expertise</h4>
                        <ul className="space-y-5 text-slate-500 dark:text-slate-400 font-bold">
                            <li><Link href="/services" className="hover:text-blue-600 transition-all flex items-center gap-2 group"><span className="h-1.5 w-1.5 rounded-full bg-blue-600 scale-0 group-hover:scale-100 transition-transform"></span> Enterprise Software</Link></li>
                            <li><Link href="/services" className="hover:text-blue-600 transition-all flex items-center gap-2 group"><span className="h-1.5 w-1.5 rounded-full bg-blue-600 scale-0 group-hover:scale-100 transition-transform"></span> Mobile Solutions</Link></li>
                            <li><Link href="/services" className="hover:text-blue-600 transition-all flex items-center gap-2 group"><span className="h-1.5 w-1.5 rounded-full bg-blue-600 scale-0 group-hover:scale-100 transition-transform"></span> Cloud Architecture</Link></li>
                            <li><Link href="/services" className="hover:text-blue-600 transition-all flex items-center gap-2 group"><span className="h-1.5 w-1.5 rounded-full bg-blue-600 scale-0 group-hover:scale-100 transition-transform"></span> IT Consulting</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-sm uppercase tracking-[0.25em] mb-10 text-slate-900 dark:text-white">Corporate</h4>
                        <ul className="space-y-5 text-slate-500 dark:text-slate-400 font-bold">
                            <li><Link href="/about" className="hover:text-blue-600 transition-all flex items-center gap-2 group"><span className="h-1.5 w-1.5 rounded-full bg-blue-600 scale-0 group-hover:scale-100 transition-transform"></span> Our Identity</Link></li>
                            <li><Link href="/portfolio" className="hover:text-blue-600 transition-all flex items-center gap-2 group"><span className="h-1.5 w-1.5 rounded-full bg-blue-600 scale-0 group-hover:scale-100 transition-transform"></span> Global Portfolio</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-600 transition-all flex items-center gap-2 group"><span className="h-1.5 w-1.5 rounded-full bg-blue-600 scale-0 group-hover:scale-100 transition-transform"></span> Careers</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-blue-600 transition-all flex items-center gap-2 group"><span className="h-1.5 w-1.5 rounded-full bg-blue-600 scale-0 group-hover:scale-100 transition-transform"></span> Privacy Policy</Link></li>
                            <li><Link href="/refund-policy" className="hover:text-blue-600 transition-all flex items-center gap-2 group"><span className="h-1.5 w-1.5 rounded-full bg-blue-600 scale-0 group-hover:scale-100 transition-transform"></span> Refund Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-sm uppercase tracking-[0.25em] mb-10 text-slate-900 dark:text-white">Connect</h4>
                        <div className="space-y-8">
                            <div className="flex items-start gap-5 group">
                                <div className="h-12 w-12 rounded-2xl bg-blue-600/10 flex items-center justify-center flex-shrink-0 border border-blue-600/20 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div className="text-slate-600 dark:text-slate-300 font-bold text-sm">
                                    <div className="mb-1">+91 6307558532</div>
                                    <div>+91 9528658256</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 group">
                                <div className="h-12 w-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 border border-[#25D366]/20 group-hover:bg-[#25D366] group-hover:text-white transition-all">
                                    <WhatsAppIcon className="h-5 w-5 text-[#25D366] group-hover:text-white" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <a href="https://wa.me/916307558532" target="_blank" rel="noopener noreferrer" className="text-sm font-black text-orange-600 hover:underline">WhatsApp Support 1</a>
                                    <a href="https://wa.me/919528658256" target="_blank" rel="noopener noreferrer" className="text-sm font-black text-orange-600 hover:underline">WhatsApp Support 2</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 group">
                                <div className="h-12 w-12 rounded-2xl bg-blue-600/10 flex items-center justify-center flex-shrink-0 border border-blue-600/20 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <a href="mailto:solutionshubhait@gmail.com" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors break-all">solutionshubhait@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">
                    <p>&copy; {new Date().getFullYear()} Shubha IT Solution. All Rights Reserved.</p>
                    <div className="flex gap-10">
                        <Link href="/privacy-policy" className="cursor-pointer hover:text-blue-600 transition-colors">Privacy Policy</Link>
                        <Link href="/refund-policy" className="cursor-pointer hover:text-blue-600 transition-colors">Refund Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
