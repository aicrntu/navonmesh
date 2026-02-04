import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => twMerge(clsx(inputs));

const SLIDES = [
    {
        id: 1,
        image: "/slider/croud-navonmesh (1).jpg",
        logo: "/logo/Navonmesh 2026.png",
        title: "AI Arena: Where Minds Meet Machines",
        description: "Present groundbreaking research, engage with cutting-edge papers, and learn from industry leaders shaping AI's future. Where academic excellence meets real-world innovation.",
        cta: "REGISTER NOW",
        path: "https://conference.sgsuniversity.ac.in/",
        isExternal: true
    },
    {
        id: 3,
        image: "/slider/rohit.JPG",
        logo: "/logo/Navonmesh 2026.png",
        title: "The Innovation Forge: Building Tomorrow's Breakthroughs",
        description: "Transform bold ideas into real solutions. Access tools, mentorship, and resources to build innovations that matter. From concept to creation—we fuel your journey.",
        cta: "REGISTER NOW",
        path: "#events"
    },
    {
        id: 4,
        image: "/slider/santosh.JPG",
        logo: "/logo/Navonmesh 2026.png",
        title: "The Artist's Stage: Spotlight on Creative Excellence",
        description: "Showcase your talent, connect with audiences, and turn creative passion into celebrated success. Your platform to shine and make your mark.",
        cta: "REGISTER NOW",
        path: "#creative"
    },
    {
        id: 6,
        image: "/slider/aman (1).jpg",
        logo: "/logo/Navonmesh 2026.png",
        title: "The Inspiration Vault: Stories That Spark Greatness",
        description: "Hear from champions and trailblazers who've made their mark. Let their strategies, stories, and insights fuel your competitive spirit and guide your path.",
        cta: "REGISTER NOW",
        path: "#events"
    }
];

const HeroCrousal = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(timer);
    }, [current]);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 1.2,
            filter: "blur(10px)"
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.8 }
            }
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)",
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
            }
        })
    };

    const textVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: (custom) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.2, // Stagger effect
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96] // Smooth bezier
            }
        }),
        exit: {
            y: -20,
            opacity: 0,
            transition: { duration: 0.3 }
        }
    };

    const traverse = (newDirection) => {
        setDirection(newDirection);
        setCurrent((prev) => (prev + newDirection + SLIDES.length) % SLIDES.length);
    };

    const handleNext = () => traverse(1);
    const handlePrev = () => traverse(-1);
    const handleDotClick = (index) => {
        setDirection(index > current ? 1 : -1);
        setCurrent(index);
    };

    return (
        <div id="home" className="relative h-screen w-full overflow-hidden bg-black font-sans">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={current}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 h-full w-full"
                >
                    {/* Background Image with Overlay */}
                    <div className="relative h-full w-full">
                        <motion.img
                            src={SLIDES[current].image}
                            alt={SLIDES[current].title}
                            className="h-full w-full object-cover"
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 6, ease: "linear" }}
                        />
                        {/* Gradient Overlay - Dark Filter for Visibility */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                        {/* Texture Overlay */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                        />
                    </div>

                    {/* Content Container */}
                    <div className="absolute inset-0 flex items-center px-8 md:px-20 lg:px-32">
                        <div className="max-w-4xl space-y-6">

                            {/* Animated Logo */}
                            <motion.div
                                custom={1}
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="overflow-hidden"
                            >
                                <img
                                    src={SLIDES[current].logo}
                                    alt={SLIDES[current].title}
                                    className="h-16 md:h-20 object-contain drop-shadow-lg mb-4"
                                />
                            </motion.div>

                            {/* Animated Title */}
                            <motion.h1
                                custom={2}
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="text-3xl font-black uppercase text-white drop-shadow-2xl md:text-4xl lg:text-5xl leading-[0.9]"
                            >
                                {SLIDES[current].title.split(" ").map((word, i) => (
                                    <span key={i} className="inline-block mr-4 text-white">
                                        {word}
                                    </span>
                                ))}
                            </motion.h1>

                            {/* Animated Description */}
                            <motion.p
                                custom={3}
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="max-w-xl text-sm text-gray-200 md:text-base font-light"
                            >
                                {SLIDES[current].description}
                            </motion.p>

                            {/* Animated CTA */}
                            <motion.div
                                custom={4}
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <a
                                    href={SLIDES[current].path}
                                    target={SLIDES[current].isExternal ? "_blank" : "_self"}
                                    rel={SLIDES[current].isExternal ? "noopener noreferrer" : ""}
                                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-5 py-2.5 text-xs text-white shadow-xl transition-all hover:bg-secondary hover:scale-105 active:scale-95"
                                >
                                    <span className="relative z-10 font-semibold tracking-wide">{SLIDES[current].cta}</span>
                                    <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation - Bottom Right */}
            <div className="absolute bottom-12 right-12 z-20 flex items-center gap-6">

                {/* Pagination Lines */}
                <div className="flex gap-1.5">
                    {SLIDES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className="group relative h-1 cursor-pointer overflow-hidden rounded-full bg-gray-300 transition-all duration-300 hover:h-1.5 focus:outline-none"
                            style={{ width: current === index ? '2.5rem' : '1rem' }}
                        >
                            {current === index && (
                                <motion.div
                                    layoutId="activeSlide"
                                    className="absolute inset-0 bg-primary"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Arrow Buttons */}
                <div className="flex gap-4 ml-8">
                    <button
                        onClick={handlePrev}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/50 text-gray-800 backdrop-blur-md transition-all hover:bg-white hover:scale-110 hover:shadow-lg active:scale-95"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/50 text-gray-800 backdrop-blur-md transition-all hover:bg-white hover:scale-110 hover:shadow-lg active:scale-95"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroCrousal;
