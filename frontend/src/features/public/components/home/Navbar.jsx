import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => twMerge(clsx(inputs));

const NAV_LINKS = [
    { name: "HOME", path: "#home" },
    { name: "ABOUT", path: "#about" },
    { name: "EVENTS", path: "#events" },
    { name: "SPEAKERS", path: "#speakers" },
    { name: "GALLERY", path: "#gallery" },
    { name: "CONTACT", path: "#contact" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const handleNavClick = (e, path) => {
        if (path.startsWith('#')) {
            e.preventDefault();
            const element = document.getElementById(path.substring(1));
            if (element) {
                const headerOffset = 60;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
            setIsOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                (isScrolled || isHovered)
                    ? "bg-black py-2.5 shadow-xl"
                    : "bg-transparent py-4 bg-black/50",
                isScrolled && !isHovered && "bg-black/90 backdrop-blur-md"
            )}
        >
            <div className="px-8 md:px-20 lg:px-32 flex items-center justify-between">

                {/* Logo and Branding */}
                <Link
                    to="/"
                    onClick={(e) => handleNavClick(e, '#home')}
                    className="flex items-center gap-4 group"
                >
                    <div className="relative h-9 w-auto">
                        <img
                            src="/logo/Scope-Logo (1).png"
                            alt="Navonmesh Logo"
                            className={cn(
                                "h-full brightness-0 invert w-auto object-contain transition-all duration-300 group-hover:scale-105",
                                (isScrolled || isHovered) ? "brightness-0 invert" : ""
                            )}
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            onClick={(e) => handleNavClick(e, link.path)}
                            className="relative group py-2"
                        >
                            <span className={cn(
                                "text-xs font-bold tracking-widest transition-colors duration-300",
                                (isScrolled || isHovered)
                                    ? "text-white group-hover:text-primary"
                                    : "text-white group-hover:text-white"
                            )}>
                                {link.name}
                            </span>
                            <span className={cn(
                                "absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
                            )} />
                        </a>
                    ))}

                    <a href="#events"><button className={cn(
                        "px-4 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-lg transition-all hover:scale-105 active:scale-95 border",
                        (isScrolled || isHovered)
                            ? "bg-primary text-white border-transparent hover:bg-white hover:text-black"
                            : "bg-white/10 text-white border-white/20 hover:bg-white/30 backdrop-blur-sm"
                    )}>
                        REGISTER
                    </button></a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "md:hidden p-2 rounded-full transition-colors",
                        (isScrolled || isHovered) ? "text-white hover:bg-white/10" : "text-white hover:bg-white/10"
                    )}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-black border-t border-white/10 p-4 md:hidden flex flex-col gap-4 shadow-2xl"
                    >
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                onClick={(e) => handleNavClick(e, link.path)}
                                className={cn(
                                    "block px-4 py-3 rounded-lg text-lg font-bold tracking-wide transition-colors text-gray-300 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
