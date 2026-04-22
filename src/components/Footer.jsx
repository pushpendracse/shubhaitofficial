'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Mail, MapPin, Globe, Linkedin, Twitter, Github, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
    const { theme } = useTheme();

    return (
        <footer suppressHydrationWarning className="bg-muted/50 border-t pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="relative h-32 w-full sm:h-40 sm:w-full max-w-xs">
                            <Image
                                src="/Logo.png"
                                alt="Shubha IT Solution"
                                fill
                                suppressHydrationWarning
                                className={`object-contain ${theme === 'dark' ? 'brightness-125' : ''}`}
                                priority
                            />
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Specializing in high-performance digital ecosystems, from enterprise software to bespoke web experiences.
                        </p>
                        <div className="flex gap-2">
                            <Button variant="outline" size="icon" className="h-9 w-9 rounded-full hover:bg-primary hover:text-white transition-all">
                                <Linkedin size={16} />
                            </Button>
                            <Button variant="outline" size="icon" className="h-9 w-9 rounded-full hover:bg-primary hover:text-white transition-all">
                                <Twitter size={16} />
                            </Button>
                            <Button variant="outline" size="icon" className="h-9 w-9 rounded-full hover:bg-primary hover:text-white transition-all">
                                <Github size={16} />
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-foreground">Services</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="#services" className="hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Mobile Applications</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Cloud Infrastructure</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">IT Consulting</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-foreground">Company</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="#about" className="hover:text-primary transition-colors">About Our Team</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Success Stories</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-foreground">Contact</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Phone className="text-primary h-4 w-4 mt-1" />
                                <div className="text-sm text-muted-foreground">
                                    <div>+91 6307558532</div>
                                    <div>+91 9528658256</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <MessageCircle className="text-primary h-5 w-5 animate-bounce" />
                                <div className="text-sm text-muted-foreground space-x-2">
                                    <a href="https://wa.me/916307558532" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors font-semibold underline">WhatsApp 1</a>
                                    <span className="text-primary">•</span>
                                    <a href="https://wa.me/919528658256" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors font-semibold underline">WhatsApp 2</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Globe className="text-primary h-4 w-4" />
                                <span className="text-sm text-muted-foreground">shubhaitsolution.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="text-primary h-4 w-4" />
                                <div className="text-sm text-muted-foreground space-y-1">
                                    <div><a href="mailto:solutionshubhait@gmail.com" className="hover:text-primary transition-colors">solutionshubhait@gmail.com</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-muted-foreground tracking-wide uppercase">
                    <p>&copy; {new Date().getFullYear()} Shubha IT Solution. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <span className="cursor-pointer hover:text-primary transition-colors">Terms</span>
                        <span className="cursor-pointer hover:text-primary transition-colors">Privacy</span>
                        <span className="cursor-pointer hover:text-primary transition-colors">Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
