import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownUnit = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center bg-gray-950 border border-white/10 rounded-2xl p-4 w-24 md:w-32 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="text-3xl md:text-5xl font-black text-white relative z-10">{value.toString().padStart(2, '0')}</span>
        <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] relative z-10">{label}</span>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary opacity-20" />
    </div>
);

const About = () => {
    // Target date: March 12, 2026
    const targetDate = new Date('2026-03-12T00:00:00');

    const calculateTimeLeft = () => {
        const difference = +targetDate - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <section id="about" className="relative py-24 bg-white overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-full px-8 md:px-20 lg:px-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
                                Unlocking Innovation
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight tracking-tighter">
                                About <span className="text-primary italic">Navonmesh</span>
                            </h2>
                            <div className="space-y-6">
                                <p className="text-lg text-gray-600 leading-relaxed text-justify font-medium">
                                    Navonmesh 2026 is a flagship initiative by E&I Cell RNTU. It's more than just an event — it's a celebration of entrepreneurship, innovation, technology, and the relentless pursuit of success.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed text-justify font-medium">
                                    This extravaganza summit brings together a lineup of competitions, dynamic speakers, engaging panel discussions, and networking opportunities for the entire startup ecosystem.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="px-10 py-5 bg-gray-900 hover:bg-primary text-white font-black rounded-2xl transition-all hover:scale-105 shadow-2xl shadow-primary/10 tracking-widest text-xs uppercase">
                                Explore The Summit
                            </button>
                        </div>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                            <img
                                src="/about/Keynote-Rohit2 (1).jpg"
                                alt="Navonmesh Event"
                                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-[2s]"
                            />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                        <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full border border-gray-100 rounded-[3rem]" />
                    </motion.div>

                </div>

                {/* Full Width Countdown Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative py-12 px-8 bg-gray-50 rounded-[3rem] border border-gray-100 overflow-hidden"
                >
                    <div className="absolute inset-0 opacity-[0.4]" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #0088cc 0.5px, transparent 0)`,
                        backgroundSize: '24px 24px'
                    }} />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-2">The Countdown Is On</h3>
                            <p className="text-gray-500 font-bold tracking-wide uppercase text-xs">Join us for the ultimate innovation summit</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            <CountdownUnit value={timeLeft.days} label="Days" />
                            <CountdownUnit value={timeLeft.hours} label="Hours" />
                            <CountdownUnit value={timeLeft.minutes} label="Mins" />
                            <CountdownUnit value={timeLeft.seconds} label="Secs" />
                        </div>

                        <div className="hidden lg:block">
                            <div className="w-16 h-1 bg-primary rounded-full" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
