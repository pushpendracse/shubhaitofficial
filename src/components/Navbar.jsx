'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
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
    const { theme, setTheme } = useTheme();

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Removed top-level mounted check to ensure SSR HTML contains the navbar links

    return (
        <nav suppressHydrationWarning className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur-xl shadow-lg overflow-hidden">
            {/* Subtle background image for Navbar */}
            <div className="absolute inset-0 z-[-1] opacity-10">
                <Image
                    src="/header-bg.png"
                    alt="header background"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="w-full max-w-[1800px] mx-auto flex h-20 md:h-24 items-center justify-between px-4 md:px-10">
                <Link href="/" className="flex-shrink-0 flex items-center group">
                    <div className="relative h-12 w-40 md:h-16 md:w-64 transition-transform group-hover:scale-105">
                        <Image
                            src="/Logo.png"
                            alt="Shubha IT Solution"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    <Link href="/" className="text-sm font-bold hover:text-primary transition-all hover:-translate-y-0.5">
                        Home
                    </Link>
                    <Link href="/services" className="text-sm font-bold hover:text-primary transition-all hover:-translate-y-0.5">
                        Services
                    </Link>
                    <Link href="/about" className="text-sm font-bold hover:text-primary transition-all hover:-translate-y-0.5">
                        About
                    </Link>
                    <Link
                        href="/portfolio"
                        className="text-sm font-black text-blue-600 hover:text-orange-500 transition-all hover:-translate-y-0.5"
                    >
                        Portfolio
                    </Link>
                    <div className="ml-6 flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="h-10 w-10 rounded-xl hover:bg-blue-600/10 transition-colors"
                        >
                            {mounted && theme === 'dark' ? <Sun className="h-5 w-5 text-orange-500" /> : <Moon className="h-5 w-5 text-blue-600" />}
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
                        className="h-10 w-10 rounded-xl"
                    >
                        {mounted && theme === 'dark' ? <Sun className="h-6 w-6 text-orange-500" /> : <Moon className="h-6 w-6 text-blue-600" />}
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="h-12 w-12 border-2 rounded-xl shadow-md">
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
