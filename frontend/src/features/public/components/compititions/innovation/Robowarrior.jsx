import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ExternalLink,
    Star,
    BookOpen,
} from "lucide-react";

/**
 * ✅ Standalone page
 * - No CompetitionTemplate import
 * - You can use this page directly in routes
 * - Data is inside the same file
 */

const RoboWarriorsPage = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, threshold: 0.1 });

    // Data inside same file
    const data = {
        name: "Robo Warriors",

        // Navbar + Hero
        logo: "/compitition/robo-war/robo_warriors_logo.png",
        heroImage: "/compitition/robo-war/robo_warriors_background.jpg",
        heroTitlePart1: "Engineer the Warrior",
        heroTitlePart2: "in You!",
        registrationLink: "/robowarrior-form",

        // About
        aboutTitle: "Robo Warriors",
        aboutText: "Robo Warriors is an adrenaline-charged robotics combat event where teams design and battle powerful robots under two different categories.",

        // Categories
        categories: [
            {
                title: "Robo Fight",
                image: "/compitition/robo-war/Robo Fight 1.JPG",
                description: "The ultimate combat arena! Teams battle head-to-head using power, strategy, and durability. Your robot must survive hits, attack smartly, and dominate the opponent to win.",
                rulebook: "/compitition/rule-book/Robo_Fight_Rulebook_Navonmesh 2026.pdf",
            },
            {
                title: "Robo Race",
                image: "/compitition/robo-war/ROBO RACE -1.JPG",
                description: "A high-speed robotics challenge where bots compete on a track filled with turns, obstacles, and tricky sections. The goal is simple: finish fastest, stay stable, and prove your control + design.",
                rulebook: "/compitition/rule-book/Robo_Race_Rulebook_Navonmesh_2026.pdf",
            }
        ],

        // Glimpses
        glimpses: [
            "/compitition/robo-war/DSC_4981.JPG",
            "/compitition/robo-war/Robo Fight 1.JPG",
            "/compitition/robo-war/Robo Fight 2.JPG",
            "/compitition/robo-war/ROBO RACE -1.JPG",
        ],

        // Benefits
        benefits: [
            "Winners Get Cash Prizes ₹35,000+",
            "Lab Support for Top 5 Teams",
            "Certificates for All Participants",
            "Pure Thrill of Engineering Combat",
            "Networking & Learning Opportunities",
        ],

        // Screening Process
        screeningSteps: [
            "Registration & Team Verification",
            "Bot Specs Check",
            "Durability & Safety Test",
            "Arena Trial Run",
        ],

        // Timeline / Roadmap
        roadmap: [
            { title: "Call for Application", date: "TBA" },
            { title: "Last Date to Apply", date: "TBA" },
            { title: "Technical Presentation", date: "TBA" },
            { title: "Durability & Function Test", date: "TBA" },
            { title: "League Stage Battles", date: "TBA" },
            { title: "Final Clash of Top 4", date: "TBA" },
        ],
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        if (inView) controls.start("visible");
    }, [controls, inView]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-900 overflow-x-hidden">
            {/* HERO */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent z-10" />
                    <img
                        src={data.heroImage}
                        alt="Hero"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-4xl"
                >
                    <img
                        src={data.logo}
                        alt="Logo"
                        className="h-24 md:h-32 mb-8 mx-auto filter drop-shadow-2xl"
                    />

                    <h1 className="text-xl md:text-xl font-black text-gray-900 leading-tight tracking-tighter mb-8 uppercase">
                        {data.heroTitlePart1}{" "}
                        <span className="text-primary italic">{data.heroTitlePart2}</span>
                    </h1>

                    {data.registrationLink.startsWith("/") ? (
                        <Link
                            to={data.registrationLink}
                            className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 hover:bg-primary text-white font-black rounded-2xl transition-all hover:scale-105 shadow-2xl shadow-black/10 tracking-widest text-xs uppercase group"
                        >
                            Secure Your Spot
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    ) : (
                        <a
                            href={data.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 hover:bg-primary text-white font-black rounded-2xl transition-all hover:scale-105 shadow-2xl shadow-black/10 tracking-widest text-xs uppercase group"
                        >
                            Secure Your Spot
                            <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                        </a>
                    )}

                    {/* Mini nav buttons */}
                </motion.div>
            </section>

            {/* ABOUT */}
            <section id="about" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-8 lg:px-20">
                    {/* Centered Heading and Intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase mb-6">
                            {data.aboutTitle}
                        </h2>
                        <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full" />
                        <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
                            {data.aboutText}
                        </p>
                    </motion.div>

                    {/* Two Column Categories Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {data.categories.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="group"
                            >
                                <div className="relative mb-8 overflow-hidden rounded-[2.5rem] shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent z-10 opacity-60" />
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute bottom-8 left-8 z-20">
                                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                                <div className="px-4 space-y-6">
                                    <p className="text-gray-600 text-lg font-medium leading-relaxed text-justify italic border-l-4 border-primary/20 pl-6">
                                        {item.description}
                                    </p>
                                    <a
                                        href={item.rulebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:underline pt-2 group/link"
                                    >
                                        <BookOpen className="w-4 h-4" />
                                        Download Rule Book
                                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GLIMPSES */}
            <section id="glimpses" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-8 lg:px-20 text-center mb-16">
                    <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase mb-4">
                        Previous <span className="text-primary italic">Glimpses</span>
                    </h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                        Highlights from our past high-impact editions
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-4 lg:px-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data.glimpses.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="h-64 rounded-2xl overflow-hidden group cursor-pointer"
                        >
                            <img
                                src={img}
                                alt="Past Edition"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* BENEFITS */}
            <section id="benefits" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-1" />

                <div className="max-w-7xl mx-auto px-8 lg:px-20">
                    <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase mb-16 text-center">
                        Why Compete in{" "}
                        <span className="text-primary italic">{data.name}</span>?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {data.benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-gray-50 border border-gray-100 rounded-3xl hover:border-primary/30 transition-all group"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Star className="w-6 h-6 text-primary" />
                                </div>

                                <h4 className="font-black text-gray-900 uppercase tracking-tight leading-tight">
                                    {benefit}
                                </h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SCREENING */}
            <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)",
                        backgroundSize: "32px 32px",
                    }}
                />

                <div className="max-w-7xl mx-auto px-8 lg:px-20 relative z-10">
                    <h2 className="text-4xl font-black tracking-tighter uppercase mb-16 text-center">
                        The <span className="text-primary italic">Screening</span> Process
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.screeningSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="p-10 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden group"
                            >
                                <span className="text-7xl font-black text-white/5 absolute -top-4 -right-4 group-hover:text-primary/10 transition-colors">
                                    0{i + 1}
                                </span>
                                <h4 className="text-xl font-black uppercase tracking-tight relative z-10">
                                    {step}
                                </h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TIMELINE */}
            <section id="timeline" className="py-24 bg-white relative">
                <div className="max-w-3xl mx-auto px-8 relative">
                    <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase mb-16 text-center">
                        Roadmap to <span className="text-primary italic">Success</span>
                    </h2>

                    <div className="absolute left-[50%] top-32 bottom-20 w-px bg-gray-100 hidden md:block" />

                    <div className="space-y-12">
                        {data.roadmap.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                <div
                                    className={`flex-1 w-full p-8 bg-gray-50 border border-gray-100 rounded-2xl ${i % 2 === 0
                                        ? "text-left md:text-right"
                                        : "text-left"
                                        }`}
                                >
                                    <h4 className="font-black text-lg text-gray-900 uppercase">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm font-bold text-primary uppercase tracking-widest">
                                        {item.date}
                                    </p>
                                </div>

                                <div className="z-10 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg hidden md:block" />
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RoboWarriorsPage;
