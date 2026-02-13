import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ExternalLink,
    Star,
    BookOpen,
    CheckCircle,
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
            "Winners Get Cash Prizes ₹65,000",
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
            { title: "Call for Application", date: "10th February" },
            { title: "Last Date to Apply", date: "5th March" },
            { title: "League Rounds", date: "14th March" },
            { title: "Finale", date: "15th March" },
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
            {/* Hero Section */}
            <section className="relative w-full overflow-hidden min-h-[65vh] sm:min-h-[75vh] lg:min-h-[92vh]">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={data.heroImage}
                        alt="Hero"
                        className="w-full h-full object-cover opacity-60"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/30" />

                    {/* Soft gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div
                    className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20
    pt-24 sm:pt-28 lg:pt-[8.5rem]
    pb-12 sm:pb-14 lg:pb-16
    min-h-[60vh] sm:min-h-[70vh] lg:min-h-[85vh]
    flex items-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-3xl"
                    >
                        {/* Logo */}
                        <div className="flex items-center gap-4">
                            <img
                                src={data.logo}
                                alt="Logo"
                                className="h-14 sm:h-16 md:h-20 lg:h-24 drop-shadow-2xl"
                            />
                        </div>

                        {/* Main Heading */}
                        <div className="mt-8">
                            <h1 className="text-white font-black uppercase tracking-widest leading-tight">
                                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                    {data.heroTitlePart1}
                                </span>

                                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary">
                                    {data.heroTitlePart2}
                                </span>
                            </h1>
                        </div>

                        {/* Pills Navigation */}
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            {["about", "glimpses", "benefits", "timeline"].map((id) => (
                                <button
                                    key={id}
                                    onClick={() => scrollToSection(id)}
                                    className="px-6 py-2.5 rounded-2xl
            bg-white/10 hover:bg-white/15
            border border-white/10
            text-white/70 hover:text-white
            text-[11px] font-black uppercase tracking-widest
            transition-all"
                                >
                                    {id}
                                </button>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-8">
                            {data.registrationLink.startsWith("/") ? (
                                <Link
                                    to={data.registrationLink}
                                    className="relative w-full sm:w-[380px]
            inline-flex items-center justify-center gap-4
            px-9 py-4.5
            bg-[#0088cc] hover:bg-[#0077b3]
            text-white font-black
            rounded-2xl transition-all hover:scale-[1.02]
            tracking-widest text-xs uppercase group
            shadow-2xl shadow-black/40"
                                >
                                    {/* glow layer */}
                                    <span className="absolute -inset-1 rounded-2xl bg-[#0088cc]/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

                                    <span className="relative z-10 p-5">Secure Your Spot</span>
                                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            ) : (
                                <a
                                    href={data.registrationLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative w-full sm:w-[380px]
            inline-flex items-center justify-center gap-4
            px-9 py-4.5
            bg-[#0088cc] hover:bg-[#0077b3]
            text-white font-black
            rounded-2xl transition-all hover:scale-[1.02]
            tracking-widest text-xs uppercase group
            shadow-2xl shadow-black/40"
                                >
                                    {/* glow layer */}
                                    <span className="absolute -inset-1 rounded-2xl bg-[#0088cc]/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

                                    <span className="relative z-10">Secure Your Spot</span>
                                    <ExternalLink className="relative z-10 w-5 h-5 group-hover:rotate-45 transition-transform" />
                                </a>
                            )}
                        </div>

                        <div className="mt-10 bg-white/10 rounded-lg p-2 backdrop-blur-sm w-fit">
                            <div>
                                <h1 className="text-sm text-center font-bold text-white/80 uppercase tracking-widest">Outreach Partner</h1>
                            </div>
                            <div className="flex items-center justify-center gap-4 mt-2">
                                <img
                                    src="/logo/Connect Siksha logo.png"
                                    alt="Connect Siksha Logo"
                                    className="h-16 md:h-10 filter drop-shadow-2xl bg-white/90 rounded-lg p-2 backdrop-blur-sm"
                                />
                                <img
                                    src="/logo/ROBONAUTS INDIA.png"
                                    alt="ROBONAUTS INDIA Logo"
                                    className="h-16 md:h-10 filter drop-shadow-2xl bg-white/90 rounded-lg p-2 backdrop-blur-sm"
                                />
                                <img
                                    src="/logo/Robonauts India 01.png"
                                    alt="Robonauts India 01 Logo"
                                    className="h-16 md:h-10 filter drop-shadow-2xl bg-white/10 rounded-lg p-2 backdrop-blur-sm"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
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

            {/* Eligibility Section */}
            <section id="eligibility" className="py-24 bg-blue-50/50">
                <div className="max-w-7xl mx-auto px-8 lg:px-20">
                    <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase mb-16 text-center">
                        Who Can <span className="text-primary italic">Apply</span>?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Open to UG and Diploma students across all disciplines",
                            "Maximum of 5 members per team",
                            "Participants must be between 17 and 25 years"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
                            >
                                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgb(0, 136, 204)' }}>
                                    <CheckCircle className="w-5 h-5 text-white" />
                                </div>
                                <span className="font-bold text-gray-800">{item}</span>
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
