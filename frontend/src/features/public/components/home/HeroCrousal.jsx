import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs) => twMerge(clsx(inputs));

const SLIDES = [
    {
        id: 1,
        image: "/slider/croud-navonmesh (1).jpg",
        logo: "/logo/Navonmesh 2026.png",
        title: "AI Arena: Where Minds Meet Machines",
        description:
            "Present groundbreaking research, engage with cutting-edge papers, and learn from industry leaders shaping AI's future. Where academic excellence meets real-world innovation.",
        cta: "REGISTER NOW",
        path: "https://conference.sgsuniversity.ac.in/",
        isExternal: true,
    },
    {
        id: 3,
        image: "/slider/rohit.JPG",
        logo: "/logo/Navonmesh 2026.png",
        title: "The Innovation Forge: Building Tomorrow's Breakthroughs",
        description:
            "Transform bold ideas into real solutions. Access tools, mentorship, and resources to build innovations that matter. From concept to creation—we fuel your journey.",
        cta: "REGISTER NOW",
        path: "#events",
    },
    {
        id: 4,
        image: "/slider/santosh.JPG",
        logo: "/logo/Navonmesh 2026.png",
        title: "The Artist's Stage: Spotlight on Creative Excellence",
        description:
            "Showcase your talent, connect with audiences, and turn creative passion into celebrated success. Your platform to shine and make your mark.",
        cta: "REGISTER NOW",
        path: "#creative",
    },
    {
        id: 6,
        image: "/slider/aman (1).jpg",
        logo: "/logo/Navonmesh 2026.png",
        title: "The Inspiration Vault: Stories That Spark Greatness",
        description:
            "Hear from champions and trailblazers who've made their mark. Let their strategies, stories, and insights fuel your competitive spirit and guide your path.",
        cta: "REGISTER NOW",
        path: "#events",
    },
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
            filter: "blur(10px)",
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
                scale: { duration: 0.8 },
            },
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)",
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
            },
        }),
    };

    const textVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: (custom) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.18,
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
            },
        }),
        exit: {
            y: -20,
            opacity: 0,
            transition: { duration: 0.3 },
        },
    };

    const traverse = (newDirection) => {
        setDirection(newDirection);
        setCurrent(
            (prev) => (prev + newDirection + SLIDES.length) % SLIDES.length
        );
    };

    const handleNext = () => traverse(1);
    const handlePrev = () => traverse(-1);

    const handleDotClick = (index) => {
        setDirection(index > current ? 1 : -1);
        setCurrent(index);
    };

    return (
        <div
            id="home"
            className="relative w-full overflow-hidden bg-black font-sans
                 h-[50vh] sm:h-screen"
        >
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
                    {/* Background */}
                    <div className="relative h-full w-full">
                        <motion.img
                            src={SLIDES[current].image}
                            alt={SLIDES[current].title}
                            className="h-full w-full object-cover object-center"
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 6, ease: "linear" }}
                        />

                        {/* Stronger overlay for Mobile */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent sm:from-black/80 sm:via-black/40" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent sm:from-black/80 sm:via-transparent opacity-90" />

                        {/* Texture overlay */}
                        <div
                            className="absolute inset-0 opacity-[0.03] pointer-events-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            }}
                        />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center px-5 sm:px-8 md:px-20 lg:px-32">
                        <div className="max-w-4xl space-y-4 sm:space-y-6">
                            {/* Logo */}
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
                                    alt="Navonmesh Logo"
                                    className="h-12 sm:h-16 md:h-20 object-contain drop-shadow-lg mb-2 sm:mb-4"
                                />
                            </motion.div>

                            {/* Title */}
                            <motion.h1
                                custom={2}
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="
                  text-xl sm:text-3xl md:text-4xl lg:text-5xl
                  font-black uppercase text-white drop-shadow-2xl
                  leading-tight sm:leading-[0.95]
                  max-w-[95%] sm:max-w-3xl
                "
                            >
                                {SLIDES[current].title.split(" ").map((word, i) => (
                                    <span
                                        key={i}
                                        className="inline-block mr-2 sm:mr-3 text-white"
                                    >
                                        {word}
                                    </span>
                                ))}
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                custom={3}
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="
                  max-w-xl
                  text-xs sm:text-sm md:text-base
                  text-gray-200 font-light
                  leading-relaxed
                "
                            >
                                {SLIDES[current].description}
                            </motion.p>

                            {/* CTA */}
                            <motion.div
                                custom={4}
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="flex flex-col gap-4 sm:gap-6"
                            >
                                <a
                                    href={SLIDES[current].path}
                                    target={SLIDES[current].isExternal ? "_blank" : "_self"}
                                    rel={SLIDES[current].isExternal ? "noopener noreferrer" : ""}
                                    className="
                    group relative inline-flex items-center gap-2
                    overflow-hidden rounded-full
                    bg-primary px-4 sm:px-5 py-2 sm:py-2.5
                    text-[11px] sm:text-xs text-white
                    shadow-xl transition-all
                    hover:bg-secondary hover:scale-105 active:scale-95
                    w-fit
                  "
                                >
                                    <span className="relative z-10 font-semibold tracking-wide">
                                        {SLIDES[current].cta}
                                    </span>
                                    <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>

                                {/* Powered By Section */}
                                <div className="flex flex-col  items-start gap-3 pt-2">
                                    <span className="text-white/60 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em]">
                                        Powered By
                                    </span>
                                    <img
                                        src="/logo/aicrntu-logo.png"
                                        alt="AIC-RNTU Logo"
                                        className="h-8 sm:h-10 md:h-12 object-contain brightness-0 invert opacity-80"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div
                className="
    hidden sm:flex
    absolute z-20 items-center 
    bottom-6 sm:bottom-12
    left-[70%] -translate-x-1/2 sm:left-auto sm:translate-x-0
    sm:right-12
  "
            >

                {/* Dots */}
                <div className="flex gap-1.5">
                    {SLIDES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className="
                group relative h-1 cursor-pointer overflow-hidden rounded-full
                bg-gray-300 transition-all duration-300
                hover:h-1.5 focus:outline-none
              "
                            style={{
                                width:
                                    current === index
                                        ? window.innerWidth < 640
                                            ? "2rem"
                                            : "2.5rem"
                                        : window.innerWidth < 640
                                            ? "0.8rem"
                                            : "1rem",
                            }}
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

                {/* Arrows */}
                <div className="flex gap-3 sm:gap-4 sm:ml-8">
                    <button
                        onClick={handlePrev}
                        className="
              flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full
              border border-gray-200 bg-white/40 sm:bg-white/50
              text-gray-800 backdrop-blur-md transition-all
              hover:bg-white hover:scale-110 hover:shadow-lg active:scale-95
            "
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="
              flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full
              border border-gray-200 bg-white/40 sm:bg-white/50
              text-gray-800 backdrop-blur-md transition-all
              hover:bg-white hover:scale-110 hover:shadow-lg active:scale-95
            "
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroCrousal;
