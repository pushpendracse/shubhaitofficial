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
        <nav suppressHydrationWarning className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-24 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2 group -ml-6">
                    <div className="relative h-40 w-96 md:h-36 md:w-[28rem] transition-transform group-hover:scale-105">
                        <Image
                            src="/Logo.png"
                            alt="Shubha IT Solution"
                            fill
                            className={`object-contain ${mounted && theme === 'dark' ? 'brightness-125' : ''}`}
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/#home" className="text-sm font-medium hover:text-primary transition-colors">
                        Home
                    </Link>
                        <Link 
                            href="/portfolio" 
                            className="text-sm font-bold bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-all shadow-md active:scale-95"
                        >
                            Portfolio
                        </Link>
                    <Link href="/#services" className="text-sm font-medium hover:text-primary transition-colors">
                        Services
                    </Link>
                    <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">
                        About
                    </Link>
                    <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
                        Contact
                    </Link>
                    <div className="ml-2 flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="h-9 w-9"
                        >
                            {mounted && theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        </Button>
                        <Button size="sm" asChild>
                            <Link href="#contact">Get a Quote</Link>
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="flex items-center gap-2 md:hidden">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="h-9 w-9"
                    >
                        {mounted && theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="h-9 w-9">
                                <Menu className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem asChild>
                                <Link href="/#home">Home</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/portfolio" className="font-bold text-primary">Portfolio</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/#services">Services</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/#about">About</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/#contact">Contact</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
}
