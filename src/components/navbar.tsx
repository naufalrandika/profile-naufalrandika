'use client';

import { useState, useEffect } from 'react';
import { ThemeToggle } from './theme-toggle';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full p-4 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg top-5 rounded-3xl shadow-md w-[79%]' : 'bg-transparent w-full'
                }`}
            style={{ zIndex: 1000 }}
        >
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">NR</div>
                <ul className="flex space-x-4 items-center">
                    {/* <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li> */}
                    <li><ThemeToggle /></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
