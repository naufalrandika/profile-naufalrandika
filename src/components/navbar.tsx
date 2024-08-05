'use client';

import { useState, useEffect, useRef } from 'react';
import { ThemeToggle } from './theme-toggle';
import Link from 'next/link';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const previousScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Check if scrolling down
            if (currentScrollY > previousScrollY.current) {
                setIsScrolled(true);
            } else if (currentScrollY === 0) { // Check if at the top
                setIsScrolled(false);
            }
            previousScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 p-4 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg top-5 rounded-3xl shadow-md w-[80%]' : 'bg-transparent w-full'
                }`}
            style={{ zIndex: 1000 }}
        >
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">NR</div>
                <ul className="flex space-x-4 items-center">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Project</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><ThemeToggle /></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

