'use client';

import Image from 'next/image';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

export default function PortfolioCard({ project }) {
    const { title, description, thumbnail, demoLink, tags } = project;

    return (
        <Card className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm card-luxury animate-fade-in h-full flex flex-col">
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <div className="flex gap-2 flex-wrap">
                        {tags?.map((tag) => (
                            <span
                                key={tag}
                                className="text-[10px] uppercase tracking-wider font-bold bg-primary px-2 py-1 rounded-full text-white"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <CardHeader className="flex-1">
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-3 mt-2 leading-relaxed">
                    {description}
                </CardDescription>
            </CardHeader>

            <CardContent>
                {/* Any additional info if needed */}
            </CardContent>

            <CardFooter className="pt-0">
                <Button
                    asChild
                    className="w-full group-hover:bg-primary transition-all duration-300 flex items-center justify-center gap-2 rounded-full font-bold bg-gradient-primary border-0 btn-glow"
                >
                    <a href={demoLink} target="_blank" rel="noopener noreferrer">
                        View Demo
                        <ExternalLink size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
}
