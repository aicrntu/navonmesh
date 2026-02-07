import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Rocket, Code, Hammer, Users, BookOpen, ChefHat, Mic, Music, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => twMerge(clsx(inputs));

import { BrainCircuit, Megaphone, Bot, User } from 'lucide-react';

const INNOVATION_LEAGUE = [
    {
        title: "PlanX",
        subtitle: "Business Plan Battle: Big Ideas Meet Bigger Opportunities",
        icon: Rocket,
        path: "/planx"
    },
    {
        title: "AdMadShow",
        subtitle: "The Ultimate Ad Creation Challenge",
        icon: Megaphone,
        path: "/admadshow"
    },
    {
        title: "InnoMaker",
        subtitle: "Product Hackathon: Prototyping the Future",
        icon: Hammer,
        path: "/innomaker"
    },
    {
        title: "BinaryBattle",
        subtitle: "24-Hour Software Hackathon",
        icon: Code,
        path: "/binarybattle"
    },
    {
        title: "RoboWarrior",
        subtitle: "Engineer the Warrior in You",
        icon: Bot,
        path: "/robowarrior"
    },
    {
        title: "Controller Clash",
        subtitle: "E-Sports Battlegrounds",
        icon: BrainCircuit,
        path: "/controllerclash"
    }

];

const CREATIVE_LEAGUE = [
    {
        title: "Solo Spotlight",
        subtitle: "Dance Championship",
        icon: User,
        path: "/solospotlight-form"
    },
    {
        title: "Crew Clash",
        subtitle: "Group Dance Championship",
        icon: Users,
        path: "/crewclash-form"
    },
    {
        title: "Tale Tellers",
        subtitle: "Storytelling Championship",
        icon: BookOpen,
        path: "/taletellers-form"
    },
    {
        title: "Chef's Arena",
        subtitle: "Cooking Championship",
        icon: ChefHat,
        path: "/chefarena-form"
    },
    {
        title: "Mic Drop",
        subtitle: "Music Championship",
        icon: Mic,
        path: "/micdrop-form"
    },
    {
        title: "Bizai Quiz",
        subtitle: "The Ultimate Business & AI Quiz",
        icon: BrainCircuit,
        path: "/bizaiquiz-form"
    }
];

import { Link } from 'react-router-dom';

const CompetitionCard = ({ item, index, leagueType }) => {
    const isFeatured = item.isFeatured;
    const accentColor = leagueType === 'innovation' ? 'primary' : 'secondary';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className={cn(
                "group relative bg-white/10 backdrop-blur-md rounded-xl p-6 transition-all duration-300",
                "border border-white/20 hover:border-white/40 hover:bg-white/15",
                "hover:shadow-2xl hover:-translate-y-1",
                isFeatured && "md:col-span-2 lg:col-span-1 ring-2 ring-offset-2 ring-offset-gray-900",
                isFeatured && accentColor === 'primary' && "ring-primary shadow-lg shadow-primary/30",
                isFeatured && accentColor === 'secondary' && "ring-secondary shadow-lg shadow-secondary/30"
            )}
        >
            {/* Featured Badge */}
            {isFeatured && (
                <div className="absolute -top-3 -right-3">
                    <div className={cn(
                        "px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-1",
                        accentColor === 'primary' ? "bg-primary" : "bg-secondary"
                    )}>
                        <Trophy className="w-3 h-3" />
                        FEATURED
                    </div>
                </div>
            )}

            {/* Icon */}
            <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300",
                "bg-white/10 text-gray-300 group-hover:text-white group-hover:scale-110",
                accentColor === 'primary' && "group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/50",
                accentColor === 'secondary' && "group-hover:bg-secondary group-hover:shadow-lg group-hover:shadow-secondary/50"
            )}>
                <item.icon size={24} strokeWidth={2} />
            </div>

            {/* Content */}
            <h3 className={cn(
                "text-xl font-bold text-white mb-2 transition-colors duration-300",
                accentColor === 'primary' && "group-hover:text-primary",
                accentColor === 'secondary' && "group-hover:text-secondary"
            )}>
                {item.title}
            </h3>

            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                {item.subtitle}
            </p>

            {/* CTA */}
            <Link
                to={item.path}
                className={cn(
                    "w-full py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-300",
                    "flex items-center justify-center gap-2 border-2 text-center",
                    accentColor === 'primary' && "border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/50",
                    accentColor === 'secondary' && "border-secondary text-secondary hover:bg-secondary hover:text-white hover:shadow-lg hover:shadow-secondary/50"
                )}
            >
                {leagueType === 'innovation' ? 'View Details' : 'Secure Your Spot'}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
        </motion.div>
    );
};

const Competition = () => {
    const [activeTab, setActiveTab] = useState('innovation');
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === '#creative') {
                setActiveTab('creative');
                // Manually scroll because the section id is 'events'
                const element = document.getElementById('events');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (hash === '#events') {
                setActiveTab('innovation');
            }
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <section id="events" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Blur Orbs */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

            <div className="w-full px-8 md:px-20 lg:px-32 relative z-10">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            Competition <span className="text-primary">Leagues</span>
                        </h2>
                        <p className="text-gray-300 text-lg">
                            Choose your arena and showcase your talent across innovation and creativity
                        </p>
                    </motion.div>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-white/10 backdrop-blur-md rounded-lg p-1 border border-white/20">
                        <button
                            onClick={() => setActiveTab('innovation')}
                            className={cn(
                                "px-6 py-2.5 rounded-md font-semibold text-sm transition-all duration-200",
                                activeTab === 'innovation'
                                    ? "bg-primary text-white shadow-lg shadow-primary/50"
                                    : "text-gray-300 hover:text-white"
                            )}
                        >
                            Innovation League
                        </button>
                        <button
                            onClick={() => setActiveTab('creative')}
                            className={cn(
                                "px-6 py-2.5 rounded-md font-semibold text-sm transition-all duration-200",
                                activeTab === 'creative'
                                    ? "bg-secondary text-white shadow-lg shadow-secondary/50"
                                    : "text-gray-300 hover:text-white"
                            )}
                        >
                            Creative League
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="wait">
                        {(activeTab === 'innovation' ? INNOVATION_LEAGUE : CREATIVE_LEAGUE).map((item, index) => (
                            <CompetitionCard
                                key={`${activeTab}-${item.title}`}
                                item={item}
                                index={index}
                                leagueType={activeTab}
                            />
                        ))}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default Competition;
