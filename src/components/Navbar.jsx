'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { Sun, Moon, Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
    const [mounted, setMounted] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const { theme, resolvedTheme, setTheme } = useTheme();
    const pathname = usePathname();

    const isTransparent = pathname === '/' && !isScrolled;

    React.useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check in case the page loads already scrolled
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Removed top-level mounted check to ensure SSR HTML contains the navbar links

    return (
        <nav
            suppressHydrationWarning
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${isTransparent
                ? 'bg-transparent border-transparent py-2'
                : 'border-b bg-background/95 backdrop-blur-xl shadow-lg py-0'
                }`}
        >
            {/* Subtle background image for Navbar */}
            <div className={`absolute inset-0 z-[-1] transition-opacity duration-300 ${!isTransparent ? 'opacity-10' : 'opacity-0'}`}>
                <Image
                    src="/header-bg.png"
                    alt="header background"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="w-full max-w-[1800px] mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-10">
                <Link href="/" className="flex-shrink-0 flex items-center group">
                    <div className="relative h-28 w-64 md:h-28 md:w-52 group-hover:scale-105">
                        <Image
                            src={isTransparent || (mounted && resolvedTheme === 'dark') ? "/ShubhaDarkLogo.png" : "/Logo.png"}
                            alt="Shubha IT Solution"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    <Link href="/" className={`text-sm font-bold transition-all hover:-translate-y-0.5 hover:text-primary ${isTransparent ? 'text-white drop-shadow-sm' : 'text-foreground'}`}>
                        Home
                    </Link>
                    <Link href="/services" className={`text-sm font-bold transition-all hover:-translate-y-0.5 hover:text-primary ${isTransparent ? 'text-white drop-shadow-sm' : 'text-foreground'}`}>
                        Services
                    </Link>
                    <Link href="/about" className={`text-sm font-bold transition-all hover:-translate-y-0.5 hover:text-primary ${isTransparent ? 'text-white drop-shadow-sm' : 'text-foreground'}`}>
                        About
                    </Link>
                    <Link
                        href="/portfolio"
                        className={`text-sm font-black transition-all hover:-translate-y-0.5 ${isTransparent ? 'text-blue-300 hover:text-white drop-shadow-sm' : 'text-blue-600 hover:text-orange-500'}`}
                    >
                        Portfolio
                    </Link>
                    <div className="ml-6 flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className={`h-10 w-10 rounded-xl transition-colors ${isTransparent ? 'hover:bg-white/20 text-white' : 'hover:bg-blue-600/10'}`}
                        >
                            {mounted && resolvedTheme === 'dark' ? <Sun className={`h-5 w-5 ${isTransparent ? 'text-white' : 'text-orange-500'}`} /> : <Moon className={`h-5 w-5 ${isTransparent ? 'text-white' : 'text-blue-600'}`} />}
                        </Button>
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl px-8 shadow-xl shadow-orange-600/20 transition-all active:scale-95 font-black" asChild>
                            <Link href="/contact">Get a Quote</Link>
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="flex items-center gap-4 md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className={`h-10 w-10 rounded-xl ${isTransparent ? 'hover:bg-white/20 text-white' : ''}`}
                    >
                        {mounted && resolvedTheme === 'dark' ? <Sun className={`h-6 w-6 ${isTransparent ? 'text-white' : 'text-orange-500'}`} /> : <Moon className={`h-6 w-6 ${isTransparent ? 'text-white' : 'text-blue-600'}`} />}
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className={`h-12 w-12 border-2 rounded-xl shadow-md ${isTransparent ? 'border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:text-white' : ''}`}>
                                <Menu className="h-7 w-7" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-64 p-3 mt-4 rounded-2xl shadow-2xl border-none glass-dark">
                            <DropdownMenuItem asChild className="rounded-xl mb-1">
                                <Link href="/" className="flex w-full py-3 font-bold">Home</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="rounded-xl mb-1">
                                <Link href="/services" className="flex w-full py-3 font-bold">Services</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="rounded-xl mb-1">
                                <Link href="/about" className="flex w-full py-3 font-bold">About</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="rounded-xl mb-1">
                                <Link href="/portfolio" className="flex w-full py-3 font-black text-blue-500">Portfolio</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="rounded-xl bg-orange-600 text-white hover:bg-orange-700 mt-2">
                                <Link href="/contact" className="flex w-full py-3 justify-center font-black">Get a Quote</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
}
